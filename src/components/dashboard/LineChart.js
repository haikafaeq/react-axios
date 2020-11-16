import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import axios from 'axios';

function LineChart() {

    const [chartData, setChartData] = useState([]);
    const [playerSalary, setPlayerSalary] = useState([]);
    const [playerBonus, setPlayerBonus] = useState([]);
    const [playerName, setPlayerName] = useState([]);

    const chart = () => {
    axios
    .get('https://gist.githubusercontent.com/haikafaeq/cfd8369fa57f29e60e1db2dc1edff819/raw/f2a0c078eb028d2c24a147f93414cbb0515f3f9a/lineChart.json')
    .then(res => {
        console.log(res);
        setPlayerSalary(res.data);
        setPlayerBonus(res.data);
        setPlayerName(res.data);
        for(const dataObj of res.data.player) {
            playerSalary.push(parseInt(dataObj.player_salary));
            playerBonus.push(parseInt(dataObj.player_bonus));
            playerName.push(String(dataObj.player_name));
        }
    setChartData({
        labels: playerName,
        datasets: [
            {
                label: "level of Player Salary",
                data: playerSalary,
                backgroundColor: ["rgba(0, 0, 158, 0.6)"],
                borderWidth: 4
            },
            {
                label: "level of Player Bonus",
                data: playerBonus,
                backgroundColor: ["rgba(122, 182, 0, 0.6)"],
                borderWidth: 4
            }
            ]
        });
      })
      .catch(err => {
        console.log(err);
    });
    console.log(playerSalary, playerBonus, playerName)   
};

useEffect(() => { 
chart();
}, []);

return (
<div className="App">
  <h5>Line Chart using API</h5>
  <div style={{height: "300px", width: "800px"}} >
    <Line
      data={chartData}
      options={{
        responsive: true,
        title: { text: "LINE SCALE USING API", display: true },
        scales: {
          yAxes: [
            {
              ticks: {
                autoSkip: true,
                maxTicksLimit: 10,
                beginAtZero: true,
                stepSize: 1
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


export default LineChart
