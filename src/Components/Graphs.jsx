import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Styles from "../Styles/FlowChart.module.css"
import { useSelector } from 'react-redux'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
// import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar, Tooltip, Legend, Line, CartesianGrid } from "recharts"
import Flowchart from './Flowchart'
import SimpleChart from './SimpleChart'
const Graphs = () => {
  const daily = useSelector((store) => store.weathers.weather)
  const manual = useSelector((store) => store.weathers.manual)
  console.log('manual', manual);
  const [tepmrature, setTemprature] = useState([])
  console.log('tepmrature', tepmrature);
  const day = ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"]
  useEffect(() => {
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
      {
        tepmrature.length != 0 && <Flowchart tepmrature={tepmrature}></Flowchart>
      }
    </div>
  )
}
export default Graphs
