// import Chart from "react-apexcharts";
// import Style from "../Styles/Style.css"
// const SimpleChart = () => {
//     const obj = {
//         options: {
//             chart: {
//                 id: "basic-bar",
//                 type: "area",
//                 zoom: {
//                     enabled: false,
//                 },
//             },
//             dataLabels: { enabled: false },
//             stroke: {
//                 curve: "smooth",
//                 lineCap: "round"
//             },
//             xaxis: {
//                 categories: time,
//             }
//         },
//         series: [
//             {
//                 name: "Temprature",
//                 data: temp, 
//             }
//         ]
//     }
//     return (
//         <div>
//             <div className="basicChart">
//                 {/* <div id="forcast">
//                     <h1>{toggle == true ? `${data.current.temp.toFixed(0)}°C` : currentTemp.toFixed(0) + "°C"}</h1>
//                     <img src={(toggle == true ? data.current.weather[0].main : weather === "Rain") ? rainy : (toggle == true ? data.current.weather[0].main : weather === "Clear") ? sunny : cloudy} alt="" />
//                 </div> */}
//                 <div className="row daychart">
//                     <div className="mixed-chart">
//                         <Chart
//                             options={obj.options}
//                             series={obj.series}
//                             type="area"
//                             width="700px"
//                             height="300px"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default SimpleChart;
import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import { useSelector } from 'react-redux';
import Styles from "../Styles/FlowChart.module.css"
const SimpleChart = () => {
    const temp = [
        28.9,
        28.97,
        28.71,
        28.36,
        27.92,
        27.62,
        27.34,
        27.16,
        27.34,
        27.91,
        28.52,
        29.88
    ]
    const time = [
        , "10:30 PM", "11:30 PM", "12:30 AM", "1:30 AM", "2:30 AM", "3:30 AM", "4:30 AM", "5:30 AM", "6:30 AM", "7:30 AM"
        , "8:30 AM"
        , "9:30 AM"
    ]
    const obj = {
        options: {
            chart: {
                type: "area",
                zoom: {
                    enabled: false,
                }
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                width: 2
            },
            xaxis: {
                lines: { show: false },
                categories: time,
            },
            yaxis: {
                show: false
            },
            grid: {
                show: false
            },
            colors: ['#fedd4b']
        },
        series: [
            {
                name: "Temprature",
                data: temp
            }
        ]
    }
    return (
        <div className={Styles.flowchart}>
            <div className={Styles.row}>
                <div className={Styles.mixed_chart}>
                    <Chart
                        options={obj.options}
                        series={obj.series}
                        type="area"
                        height="200px"
                        margin="auto"
                    />
                </div>
            </div>
        </div>
    );
}
export default SimpleChart;
