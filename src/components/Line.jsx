import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";
import { useMemo } from "react";
// import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
  // ChartDataLabels
);

function getGradient(ctx, chartArea) {
  let gradient = ctx.createLinearGradient(
    0,
    chartArea.bottom,
    0,
    chartArea.top
  );
  gradient.addColorStop(0.9, "rgba(75, 64, 238, 0.1)");
  gradient.addColorStop(0, "transparent");
  return gradient;
}

const dayLabels = [
  "0",
  "2",
  "4",
  "6",
  "8",
  "10",
  "12",
  "14",
  "16",
  "18",
  "20",
  "22",
];
const dayData = [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56];

const weekLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const weekData = [34, 56, 78, 90, 12, 34, 56];

const monthLabels = ["1", "5", "10", "15", "20", "25", "30"];
const monthData = [11, 75, 23, 45, 67, 78, 89];

const sixMonthsLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const sixMonthsData = [23, 45, 67, 78, 89, 90];

const yearLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const yearData = [48, 17, 23, 45, 67, 78, 89, 90, 23, 45, 67, 78];

const defaultData = {
  labels: yearLabels,
  datasets: [
    {
      label: "My First Dataset",
      data: yearData,
      key: "1y",

      fill: "origin",
      borderColor: "#4B40EE",
      borderWidth: 2,
      backgroundColor: function (context) {
        const chart = context.chart;
        const { ctx, chartArea } = chart;

        // This case happens on initial chart load
        if (!chartArea) return;
        return getGradient(ctx, chartArea);
      },
    },
  ],
};

export default function LineGraph({ selectedDuration }) {
  const data = useMemo(() => {
    const newData = { ...defaultData };

    switch (selectedDuration) {
      case "1d":
        newData.labels = dayLabels;
        newData.datasets[0].data = dayData;
        newData.datasets[0].key = "1d";
        break;
      case "1w":
        newData.labels = weekLabels;
        newData.datasets[0].data = weekData;
        newData.datasets[0].key = "1w";
        break;
      case "1m":
        newData.labels = monthLabels;
        newData.datasets[0].data = monthData;
        newData.datasets[0].key = "1m";
        break;
      case "6m":
        newData.labels = sixMonthsLabels;
        newData.datasets[0].data = sixMonthsData;
        newData.datasets[0].key = "6m";
        break;
      case "1y":
        newData.labels = yearLabels;
        newData.datasets[0].data = yearData;
        newData.datasets[0].key = "1y";
        break;
      default:
        break;
    }

    return newData;
  }, [selectedDuration]);

  return (
    <Line
      key={data.datasets[0].key}
      data={data}
      options={{
        scales: {
          x: {
            ticks: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        },
      }}
    />
  );
}
