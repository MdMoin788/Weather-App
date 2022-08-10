import {
    AreaChart,
    Area,
    XAxis,
  
    Tooltip
} from "recharts";
import Styles from "../Styles/FlowChart.module.css"

import { useSelector } from "react-redux";
const SimpleChart = () => {

    const daily = useSelector((store) => store.weathers.weather)



    const data = [
        {
            Time: "8:30 AM",
            temperature: 24,
        },
        {
            Time: "12:30 PM",
            temperature: 13,
        },
        {
            Time: "6:30 PM",
            temperature: 98,
        },
        {
            Time: "10:30 PM",
            temperature: 39,
        },
        {
            Time: "10:30 PM",
            temperature: 48,
        }
    ];
    
    
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
