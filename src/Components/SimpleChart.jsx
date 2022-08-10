
import Styles from "../Styles/FlowChart.module.css"
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
  } from "recharts";
import { useSelector } from "react-redux";
const SimpleChart = () => {
    const data = [
        {
          name: "Page A",
          pv: 2400,
          temp :1
        },
        {
          name: "Page B",
          pv: 1398,
          temp :2
        },
        {
          name: "Page C",
          pv: 9800,
          temp :3
        },
        {
          name: "Page D",
          pv: 3908,
          temp :4
        },
        {
          name: "Page E",
          pv: 4800,
          temp :5
        },
        {
          name: "Page F",
          pv: 3800,
          temp :6
        },
        {
          name: "Page G",
          pv: 4300,
          temp :7
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
            <div>
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
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
              </AreaChart>
            </div>
          </>
          :
          <>
            <div>
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
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />

                <Tooltip />
                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
              </AreaChart>
            </div>
          </>
      }
      
       </>
  
    )
}
export default SimpleChart;
