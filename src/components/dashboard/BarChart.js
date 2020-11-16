import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from 'axios';

const BarChart = () => {
  const [chartData, setChartData] = useState([]);
  const [item, setItem] = useState([]);
  const [secondItem, setsecondItem] = useState([]);
  const [date, setDate] = useState([]);
  
    const chart = () => {
        axios
        .get("https://gist.githubusercontent.com/haikafaeq/8ef0f14d8e0f04d96f70ccbe3bd615ad/raw/2438813a5106821d0fb0edc16e1054faacd04e9a/try.json")    
        .then(res => {
            console.log(res);
            setItem(res.data);
            setsecondItem(res.data);
            setDate(res.data);
            for(const dataObj of res.data.data) {
                item.push(parseInt(dataObj.first_number));
                secondItem.push(parseInt(dataObj.second_number));
                date.push(String(dataObj.days));
            }
        setChartData({
            labels:  date,
            datasets: [
                {
                label: "level of data 2020",
                data: item,
                backgroundColor: [
                "rgba(75, 192, 192, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(75, 192, 192, 0.6)"
                ],
                borderWidth: 4
                },
                {
                    label: "level of data 2019",
                    data: secondItem,
                    backgroundColor: [
                    "rgba(255, 206, 86, 0.2",
                    "rgba(255, 206, 86, 0.2",
                    "rgba(255, 206, 86, 0.2",
                    "rgba(255, 206, 86, 0.2",
                    "rgba(255, 206, 86, 0.2"
                    ],
                    borderWidth: 4
                }

                ]
            });
          })
          .catch(err => {
            console.log(err);
        });
        console.log(item, secondItem, date);   
    };

  useEffect(() => { 
    chart();
  }, []);

  return (
    <div className="App">
      <h4>Bar Chart using API</h4>
      <div style={{height: "300px", width: "800px"}} >
        <Bar
          data={chartData}
          options={{
            responsive: true,
            title: { text: "BAR SCALE", display: true },
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

export default BarChart;