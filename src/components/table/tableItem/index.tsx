import { TableItemElement } from "../tableItemElement";
import { Button } from "../../button";
import { ChangeChart } from "../../charts/ChangeChart";
import fetchCoinsValueChange from "../../../utils/fetchCoinsValueChange";
import { useEffect, useState } from "react";

export const TableItem = (props) => {
  const [coinsValueChange, setCoinsValueChange] = useState(null);

  const getCoinsValueChangeData = async () => {
    const coinName = props.itemData[0].content.toLowerCase();

    const chartData = await fetchCoinsValueChange(coinName);

    setCoinsValueChange(chartData);
  };

  useEffect(() => {
    getCoinsValueChangeData();
  }, []);

  return (
    <div className="table-item">
      {props.itemData.map((data) => {
        return (
          <TableItemElement
            label={data.label}
            content={data.content}
            image={data.image}
            key={data.image}
          />
        );
      })}
      <div className="change-chart">
        <ChangeChart data={coinsValueChange} />
      </div>
      <div className="buttons">
        <Button theme="light" />
        <Button theme="dark" />
      </div>
    </div>
  );
};
