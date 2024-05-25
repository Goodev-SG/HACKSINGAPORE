import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);
interface Data {
  title: string;
  width: string;
}
const LineChart = ({ title, width }: Data) => {
  const inflationData = [
    { year: 1990, rate: 2.1 },
    { year: 1995, rate: 3.7 },
    { year: 2000, rate: 2.2 },
    { year: 2005, rate: 1.3 },
    { year: 2010, rate: 2.8 },
    { year: 2015, rate: -0.5 },
    { year: 2020, rate: -0.2 },
    { year: 2025, rate: 2.8 },
  ];
  const [userData, setUserData] = useState({
    labels: inflationData.map((data) => data.year),
    datasets: [
      {
        data: inflationData.map((data) => data.rate),
        backgroundColor: ["rgba(75,192,192,1)"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div
      className={`flex flex-col border ${width} rounded-lg p-3 gap-4 shadow-lg`}
    >
      <div>
        <h2>{title}</h2>
        <button />
      </div>
      <Line data={userData} />
    </div>
  );
};

export default LineChart;
