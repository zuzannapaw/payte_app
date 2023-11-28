import { CoinInfo } from "../coinInfo";
import { Button } from "../../button";
import { ChangeChart } from "../../charts/changeChart";
import fetchCoinsValueChange from "../../../utils/fetchCoinsValueChange";
import { useEffect, useState } from "react";
import { SummaryItemProps } from "./types";
import { ChangeChartProps } from "../../charts/changeChart/types";

export const SummaryItem = (props: SummaryItemProps) => {
  const [coinsValueChange, setCoinsValueChange] = useState<ChangeChartProps>();

  //fetch function
  const getCoinsValueChangeData = async () => {
    const coinName = (props.itemData[0].content as string).toLowerCase();
    const chartData: ChangeChartProps | undefined = await fetchCoinsValueChange(
      coinName,
      "1"
    );
    setCoinsValueChange(chartData);
  };

  useEffect(() => {
    getCoinsValueChangeData();
  }, []);

  const change: number = props.itemData.find((item) => item.label === "Change")
    ?.content as number;

  console.log(change);
  return (
    <div className="table-item">
      {props.itemData.map((data) => {
        return (
          <CoinInfo
            label={data.label}
            content={data.content}
            image={data.image}
            key={data.image}
          />
        );
      })}
      <div className="change-chart">
        {coinsValueChange && (
          <ChangeChart {...coinsValueChange} change={change} />
        )}
      </div>
      <div className="buttons">
        <Button theme="light" />
        <Button theme="dark" />
      </div>
    </div>
  );
};
