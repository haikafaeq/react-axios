import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from 'axios';

const TestChart2 = () => {
  const [chartData, setChartData] = useState([]);
  const [employeeSalary, setEmployeeSalary] = useState([]);
  const [employeeAge, setEmployeeAge] = useState([]);

    const chart = () => {
        axios
        .get("https://gist.githubusercontent.com/haikafaeq/01db9b03b5d69aff742bb33e558f70d2/raw/54be92f85d204d9d798404e6cc831ab91d1ae819/testChart.json")    
        .then(res => {
            console.log(res);
            setEmployeeSalary(res.data);
            setEmployeeAge(res.data);
            for(const dataObj of res.data.Employee) {
                employeeSalary.push(parseInt(dataObj.employee_salary));
                employeeAge.push(parseInt(dataObj.employee_age));
            }
        setChartData({
            labels: employeeAge,
            datasets: [
                {
                label: "level of Employee Salary",
                data: employeeSalary,
                backgroundColor: ["rgba(75, 192, 192, 0.6)"],
                borderWidth: 4
                }
                ]
            });
          })
          .catch(err => {
            console.log(err);
        });
        console.log(employeeSalary, employeeAge)   
    };

  useEffect(() => { 
    chart();
  }, []);

  return (
    <div className="App">
      <h1>Test Chart using API</h1>
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

export default TestChart2;