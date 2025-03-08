import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PollingChart = ({ pollData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById("pollChart").getContext("2d");
    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: Object.keys(pollData),
        datasets: [
          {
            label: "Votes",
            data: Object.values(pollData),
            backgroundColor: ["red", "blue", "green", "yellow"],
            borderWidth: 1,
          },
        ],
      },
    });
  }, [pollData]);

  return <canvas id="pollChart"></canvas>;
};

export default PollingChart;
