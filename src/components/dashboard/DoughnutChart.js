import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import axios from 'axios';

function DoughnutChart() {

    const [chartData, setChartData] = useState([]);
    const [profits, setProfits] = useState([]);
    const [months, setMonths] = useState([]);

    const chart = () => {
        axios
        .get('https://gist.githubusercontent.com/haikafaeq/de75fa73ba5e62c7dcb26dd752e16189/raw/5c078ee2238a03f908b23de410bde59208775438/doughnutChart.json')
        .then(res => {
            
            console.log(res);
            setProfits(res.data);
            setMonths(res.data);

            for(const dataObj of res.data.data) {
                profits.push(parseInt(dataObj.profit));
                months.push(String(dataObj.month));
            }

        setChartData({
            labels: months,
            datasets: [
                {
                    label: "Sales for 2020 (M)",
                    data: profits,
                    backgroundColor: [
                    'rgba(255, 99, 132, 1',
                    'rgba(255, 206, 86, 1',
                    'rgba(54, 162, 235, 1',
                    'rgba(255, 159, 64, 1',
                    'rgba(153, 102, 255, 1',
                    'rgba(0, 0, 158, 1'
                    ]
                }
            ]
        });
    })
        .catch(err => {
            console.log(err);
        });
        console.log(profits, months)   
    };
    
    useEffect(() => { 
    chart();
    }, []);
        
        return (
            <div className="App">
              <h5>Doughnut Chart using API</h5>
              <div style={{height: "300px", width: "600px"}} >
                <Doughnut
                  data={chartData}
                  options={{
                    responsive: true,
                    title: { text: "Doughnut Chart", display: true }
                  }}
                />
              </div>
            </div>
        );

}          


export default DoughnutChart
