import { Outlet } from "react-router-dom";
import { Box } from "../../components/box";
import { MainBox } from "../../components/mainBox";
import { Button } from "../../components/button";
import { User, UserContext } from "../../store/userContext";
import { useContext, useEffect, useState } from "react";
import { FC } from "react";
import fetchCoinsValueChange from "../../utils/fetchCoinsValueChange";
import { ChangeChartProps } from "../../components/charts/changeChart/types";
import { BalanceChart } from "../../components/charts/balanceChart";
import { ArrowUpIcon } from "../../components/icon/iconStore/ArrowUpIcon";

export const Overview: FC = (): JSX.Element => {
  const user: User | undefined = useContext(UserContext);

  const [monthlyChange, setMonthlyChange] =
    useState<ChangeChartProps>(undefined);

  //fetch function
  const getCoinsMonthlyData = async () => {
    const coinName = "bitcoin";
    const chartData: ChangeChartProps | undefined = await fetchCoinsValueChange(
      coinName,
      "60",
      "daily"
    );
    setMonthlyChange(chartData);
  };

  console.log(monthlyChange);
  useEffect(() => {
    getCoinsMonthlyData();
  }, []);

  return (
    <>
      <div className="boxes">
        <Box title="Current Balance">
          <div className="balance-amount">
            <h2 className="amount">{user?.balance}</h2>
            <div className="vs">
              <ArrowUpIcon />
              <p>12% vs last month </p>{" "}
            </div>
            <div
              className="buttons"
              style={{
                marginTop: "40px",
                justifyContent: "flex-start",
              }}
            >
              <Button theme="dark" label="Quick Invest" />
              <Button theme="light" label="Show Report" />
            </div>
          </div>
        </Box>
        <Box title="Summary">
          {monthlyChange && <BalanceChart {...monthlyChange} />}
        </Box>
      </div>
      <MainBox>
        <Outlet />
      </MainBox>
    </>
  );
};
