import * as React from "react";
import {
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Filler,
  Tooltip,
  ChartData,
  ChartOptions,
  ScriptableContext,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip);

const data: ChartData<'line'> = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Sales",
      data: [0, 20000, 22000, 28000, 25000, 43000, 68000],
      borderColor: "#2563eb",
      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 0,
      fill: true,
      backgroundColor: (ctx: ScriptableContext<"line">) => {
        const chart = ctx.chart;
        const { ctx: canvas, chartArea } = chart;
        if (!chartArea) return "rgba(37,99,235,0.00)";
        const gradient = canvas.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
        gradient.addColorStop(0, "rgba(37,99,235,0.08)");
        gradient.addColorStop(1, "rgba(37,99,235,0.00)");
        return gradient;
      },
      tension: 0,
    },
  ],
};

const options: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  layout: { padding: { top: 8, bottom: 0, left: 0, right: 0 } },
  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: true,
      backgroundColor: "#23272f",
      displayColors: false,
      callbacks: {
        label: (ctx) => `$${Number(ctx.raw) / 1000}K`,
      },
    },
  },
  scales: {
    x: {
      grid: { display: false },
      border: { display: false },
      ticks: {
        color: "#94a3b8",
        font: { size: 13, family: "Inter, sans-serif" },
        padding: 1,
      },
    },
    y: {
      grid: {
        color: "#f1f5f9",
        // drawBorder: false,
        lineWidth: 2,
      },
      border: { display: true },
      ticks: {
        color: "#94a3b8",
        font: { size: 13, family: "Inter, sans-serif" },
        callback: function (val) {
          if (Number(val) === 60000) return "$68K";
          if (Number(val) === 40000) return "$40K";
          if (Number(val) === 20000) return "$20K";
          if (Number(val) === 0) return "$0K";
          return "";
        },
        // padding: 6,
        maxTicksLimit: 10,
        stepSize: 20000,
      },
    },
  },
  elements: {
    line: { borderJoinStyle: "round" },
    point: { radius: 0, hoverRadius: 0 },
  },
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
};

const SalesOverviewChart: React.FC = () => (
  <div
    className="bg-white rounded-xl p-3 shadow-sm border border-gray-100"
  >
    <p className="text-base font-semibold mb-3">Sales Overview</p>
    <div 
    style={{
    minHeight: 300,
    maxWidth: 560,
    margin: "0 auto",       
    marginBottom: "32px",
  }}>
      <Line data={data} options={options} />
    </div>
  </div>
);

export default SalesOverviewChart;
