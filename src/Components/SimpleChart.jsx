import { useState } from "react";
import { useEffect } from "react";
import Chart from "react-apexcharts"
import { useSelector } from "react-redux";
const SimpleChart = () => {
    const city = useSelector((store) => store.weathers.cities)
    const daily = useSelector((store) => store.weathers.weather)
    const manual = useSelector((store) => store.weathers.manual)
    const single = useSelector((store) => store.weathers.single)
    console.log('single', single);
    const [day, setDay] = useState([])
    const [temp, setTemp] = useState([])
    useEffect(() => {
        let arr = []
        let arr2 = []
        if (single != null) {
            single.map((ele) => {
                arr2.push(ele.feels_like.morn.toFixed(0), ele.feels_like.day.toFixed(0), ele.feels_like.eve.toFixed(0), ele.feels_like.night.toFixed(0), ele.feels_like.night.toFixed(0))
            })
            arr.push("8:30 AM", "12:30 AM", "6:30 AM", "8:30 AM", "10:30 AM")
            setDay([...arr])
            setTemp([...arr2])
        }
        else if (daily && !single) {
            daily.map((ele, i) => {
                console.log('ele', ele.temp.name);
                arr.push(ele.temp.name)
                arr2.push(ele.temp.day.toFixed(0))
            })
            setDay([...arr])
            setTemp([...arr2])
        }
        else if (!daily && !single) {
            manual.map((ele, i) => {
                console.log('ele', ele.temp.name);
                arr.push(ele.temp.name)
                arr2.push(ele.temp.day.toFixed(0))
            })
            setDay([...arr])
            setTemp([...arr2])
        }
    }, [daily, single, manual])
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
                categories: day ||
                    [
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
                data: temp || [45, 52, 38, 45, 19, 23, 2],  //[27, 28, 29, 31, 34,37,39,40,40,40,40,33,33,32,33,32,31]
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
                        width="85%"
                        height="300px"
                    />
                </div>
            </div>
        </>
    )
}
export default SimpleChart;
