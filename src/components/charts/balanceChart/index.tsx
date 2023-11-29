import { useRef } from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import { getKNotation } from "../../../utils/helpers";
import { BalanceChartProps } from "./types";

export const BalanceChart = (props: BalanceChartProps): JSX.Element => {
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
        fill: true,
        backgroundColor: "rgb(116,69,251, 0.3)",
        borderColor: "#7445FB",
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "white",
      },
      {
        label: "Last Month",
        data: lastMonth,
        fill: false,
        backgroundColor: "rgba(133, 133, 133,0.3)",
        borderColor: "rgba(133, 133, 133,0.3)",
        borderDash: [8, 1],
        pointHoverRadius: 0,
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
              boxHeight: 5,
              boxWidth: 5,
            },
          },
          tooltip: {
            mode: "nearest",
            intersect: false,
            usePointStyle: true,
            displayColors: false,
            filter: (tooltipItem) => {
              if (tooltipItem.dataset.label === "This Month") {
                return true;
              }
              return false;
            },
            callbacks: {
              title: () => "",
              label: (ctx) => {
                let label = ctx.dataset.label || "";
                label = getKNotation(ctx.parsed.y);
                return `$${label}`;
              },
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
