import { useRef } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { getKNotation } from "../../../utils/helpers";

export const BalanceChart = (props): JSX.Element => {
  const ref = useRef();

  const datesArray = props ? props?.prices : [];

  const lastMonth = datesArray.slice(0, 31);
  const thisMonth = datesArray.slice(31, 61);

  const thisMonthLabels = thisMonth.map((data) => data[0]);

  const data = {
    labels: thisMonthLabels,
    datasets: [
      {
        label: "This Month",
        data: thisMonth,
        fill: false,
        backgroundColor: "#7445FB",
        borderColor: "#7445FB",
      },
      {
        label: "Last Month",
        data: lastMonth,
        fill: false,
        backgroundColor: "rgba(133, 133, 133,0.3)",
        borderColor: "rgba(133, 133, 133,0.3)",
        borderDash: [8, 1],
      },
    ],
  };

  return (
    <Line
      ref={ref}
      data={data}
      options={{
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            align: "start",
            labels: {
              usePointStyle: true,
            },
          },
        },
        elements: {
          point: {
            radius: 0,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: { display: false },
            ticks: {
              display: false, //this will remove only the label
            },
          },
          y: {
            border: { dash: [1, 2] },
            beginAtZero: true,
            ticks: { callback: (value) => getKNotation(value as number) },
          },
        },
      }}
    />
  );
};
