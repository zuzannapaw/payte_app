import { FC, useRef } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { ChangeChartProps } from "./types";

/**
 * @name ChangeChart
 * @description A ChangeChart component
 * @param {ChangeChartProps} props The props of the component
 * @returns {JSX.Element} The JSX element
 * @example
 * <ChangeChart {...data} change=2.36/>
 */

export const ChangeChart: FC<ChangeChartProps> = (
  props: ChangeChartProps
): JSX.Element => {
  const ref = useRef();

  const labelsArray = props ? props.prices?.map((data) => data[0]) : [];
  const dataArray = props ? props?.prices.map((data) => data[1]) : [];

  const data = {
    labels: labelsArray,
    datasets: [
      {
        data: dataArray,
        fill: false,
        borderColor: props?.change
          ? props?.change > 0
            ? "#18CB80"
            : "#EA4D4D"
          : "black",
      },
    ],
  };

  return (
    <Line
      ref={ref}
      data={data}
      options={{
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: false,
          },
        },
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },
        elements: {
          point: {
            radius: 0,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
      }}
    />
  );
};
