import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Styles from "../Styles/FlowChart.module.css"

import { useSelector } from 'react-redux'
import { ResponsiveContainer, BarChart, XAxis,  YAxis, Bar, Tooltip, Legend, Line, CartesianGrid } from "recharts"
import Flowchart from './Flowchart'
import SimpleChart from './SimpleChart'
const Graphs = () => {
  const daily = useSelector((store) => store.weathers.weather)
  const manual = useSelector((store) => store.weathers.manual)
  console.log('manual', manual);
  const [tepmrature, setTemprature] = useState([])
  console.log('tepmrature', tepmrature);
  const day = ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"]
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
  useEffect( () => {
    let arr = []
    if (daily == null) {
      manual.map((ele, i) => {
        console.log(ele.temp)
        ele.temp.name = day[i]
        ele.temp.index = i
        arr.push(ele.temp)
      })
      setTemprature([...arr])
    }
    else {
      daily.map((ele, i) => {
        console.log(ele.temp)
        ele.temp.name = day[i]
        ele.temp.index = i
        arr.push(ele.temp)
      })
      setTemprature([...arr])
    }
  }, [daily, manual])
  console.log('tepmrature', tepmrature);
  return (
    <div className={Styles.Flowchart}>
      {/* {
        daily == null ?
          <>
            <div>
              <h3 style={{ "text-align": "center", textDecoration: "underline" }}>Bar Charts</h3>
              <ResponsiveContainer width="75%" aspect={3} >
                <BarChart data={tepmrature} >
                  <XAxis dataKey="name" interval={"preserveStartEnd"} />
                  <YAxis dataKey="day" interval={"preserveStartEnd"} />
                  <Tooltip />
                  <Legend />
                  <Bar type="monotone" dataKey="day" fill="green" />
                  <Bar type="monotone" dataKey="morn" fill="#82ca9d" />
                  <Bar type="monotone" dataKey="eve" fill="red" />
                  <Bar type="monotone" dataKey="night" fill="blue" />
                  <Bar type="monotone" dataKey="min" fill="yellow" />
                  <Bar type="monotone" dataKey="max" fill="black" />
                  <CartesianGrid strokeDasharray="3 3" />
                </BarChart >
              </ResponsiveContainer>
            </div>
       

          </>
          :
          <>
            <div>
              <h3 style={{ "text-align": "center", textDecoration: "underline" }}>Bar Charts</h3>
              <ResponsiveContainer width="75%" aspect={3} >
                <BarChart data={tepmrature} >
                  <XAxis dataKey="name" interval={"preserveStartEnd"} />
                  <YAxis dataKey="day" interval={"preserveStartEnd"} />
                  <Tooltip />
                  <Legend />
                  <Bar type="monotone" dataKey="day" fill="green" />
                  <Bar type="monotone" dataKey="morn" fill="#82ca9d" />
                  <Bar type="monotone" dataKey="eve" fill="red" />
                  <Bar type="monotone" dataKey="night" fill="blue" />
                  <Bar type="monotone" dataKey="min" fill="yellow" />
                  <Bar type="monotone" dataKey="max" fill="black" />
                  <CartesianGrid strokeDasharray="3 3" />
                </BarChart >
              </ResponsiveContainer>
            </div>
           
           
          </>
      } */}
{
  tepmrature.length != 0 && <Flowchart tepmrature = {tepmrature}></Flowchart>
}
  {/* <Flowchart temp= {temp} time = {time}></Flowchart> */}


    </div>
  )
}
export default Graphs
