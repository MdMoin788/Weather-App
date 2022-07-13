import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ResponsiveContainer, BarChart, XAxis,  YAxis, Bar, Tooltip, Legend, Line, CartesianGrid } from "recharts"
const Graphs = () => {
  const daily = useSelector((store) => store.weathers.weather)
  const manual = useSelector((store) => store.weathers.manual)
  console.log('manual', manual);
  const [tepmrature, setTemprature] = useState([])
  const day = ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"]
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
    <div>
      {
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
      }
    </div>
  )
}
export default Graphs
