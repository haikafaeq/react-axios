import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const TestChart = () => {
  const [chartData, setChartData] = useState({});

const chart = () => {
        setChartData({
          labels: ['Monday','Tuesday','Wednesday','Thursday','Friday'],
          datasets: [
            {
              label: "level of thiccness",
              data: [32, 45, 12, 76, 69],
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4
            }
          ]
      })
    }
  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="App">
      <h1>TestChart</h1>
      <div style={{height: "500px", width: "500px"}} >
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "THICCNESS SCALE", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
    </div>
  );
};

export default TestChart;