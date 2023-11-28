import { useRef } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { ChangeChartProps } from "./types";

export const ChangeChart = (
  props: ChangeChartProps
): JSX.Element => {
  const ref = useRef();

  const labelsArray = props ? props.prices?.map((data) => data[0]) : [];
  const dataArray = props
    ? props?.prices.map((data) => data[1])
    : [];

  const data = {
    labels: labelsArray,
    datasets: [
      {
        data: dataArray,
        fill: false,
        borderColor: "#742774",
      },
    ],
  };

  return (
    <Line
      ref={ref}
      data={data}
      options={{
        plugins: { legend: { display: false } },
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