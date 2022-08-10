import {
    AreaChart,
    Area,
    XAxis,
    Tooltip
} from "recharts";
import Styles from "../Styles/FlowChart.module.css"
import { useSelector } from "react-redux";
const SimpleChart = ({data}) => {
    console.log('data', data);
    const daily = useSelector((store) => store.weathers.weather)
 
    

    return (
        <>
            {
               daily && 
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
                   
            }
        </>
    )
}
export default SimpleChart;
