import { useState } from "react";
import { useEffect } from "react";
import Chart from "react-apexcharts"
import { useSelector } from "react-redux";
const SimpleChart = ({ data }) => {
    const daily = useSelector((store) => store.weathers.weather)
    console.log('daily sss', daily);
    const single = useSelector((store) => store.weathers.single)
    console.log('single', single);
    const [day, setDay] = useState([])
    console.log('day', day);
    const [temp, setTemp] = useState([])
  useEffect(()=>{
    if (daily && !single ) {
        daily.map((ele, i) => {
        console.log('ele', ele.temp.name);
        setDay([...day, i])
        })
    }
  }, [daily])
  console.log('temp', temp);

    const obj = {
        options: {
            chart: {
                id: "basic-bar",
                type: "area",
                zoom: {
                    enabled: false,
                },
            },
            dataLabels: { enabled: false },
            stroke: {
                curve: "smooth",
                lineCap: "round"
            },
            xaxis: {
                categories: [
                    "01 Jan",
                    "02 Jan",
                    "03 Jan",
                    "04 Jan",
                    "05 Jan",
                    "06 Jan",
                    "07 Jan"
                ],
            }
        },
        series: [
            {
                name: "Temprature",
                data: [45, 52, 38, 45, 19, 23, 2],  //[27, 28, 29, 31, 34,37,39,40,40,40,40,33,33,32,33,32,31]
            }
        ]
    }
    return (
        <>
            <div className="row daychart">
                <div className="mixed-chart">
                    <Chart
                        options={obj.options}
                        series={obj.series}
                        type="area"
                        width="665px"
                        height="300px"
                    />
                </div>
            </div>
        </>
    )
}
export default SimpleChart;
