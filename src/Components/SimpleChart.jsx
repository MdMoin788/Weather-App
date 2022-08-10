import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";
import Styles from "../Styles/FlowChart.module.css"

import { useSelector } from "react-redux";
const SimpleChart = () => {
    const data = [
        {
            Time: "10:30 am",
            temperature: 24,
        },
        {
            Time: "10:30 am",
            temperature: 13,
        },
        {
            Time: "10:30 am",
            temperature: 98,
        },
        {
            Time: "10:30 am",
            temperature: 39,
        },
        {
            Time: "10:30 am",
            temperature: 48,
        },
        {
            Time: "10:30 am",
            temperature: 38,
        }
        ,
        {
            Time: "10:30 am",
            temperature: 43,
        }
        ,
        {
            Time: "10:30 am",
            temperature: 43,
        }
    ];
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
    const daily = useSelector((store) => store.weathers.weather)
    return (
        <>
            {
                daily == null ?
                    <>
                        <div className={Styles.flowchart}>
                            <AreaChart
                                width={500}
                                height={200}
                                data={data}
                                syncId="anyId"
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0
                                }}
                            >
                                {/* <CartesianGrid strokeDasharray="2 2" /> */}
                                <XAxis dataKey="Time" />
                                <Tooltip />
                                <Area type="monotone" dataKey="temperature" stroke="#82ca9d" fill="#82ca9d" />
                            </AreaChart>
                        </div>
                    </>
                    :
                    <>
                        <div className={Styles.flowchart}>
                            <h3 style={{ "text-align": "center", textDecoration: "underline" }}>Bar Charts</h3>
                            <AreaChart
                                width={500}
                                height={200}
                                data={data}
                                syncId="anyId"
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0
                                }}
                            >
                                {/* <CartesianGrid strokeDasharray="2 2" /> */}
                                <XAxis dataKey="Time" />
                                <Tooltip />
                                <Area type="monotone" dataKey="temperature" stroke="#82ca9d" fill="#82ca9d" />
                            </AreaChart>
                        </div>
                    </>
            }
        </>
    )
}
export default SimpleChart;
