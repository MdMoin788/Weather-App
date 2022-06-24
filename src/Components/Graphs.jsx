import React, { Component } from "react";
import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
// let data = [1, 2, 3, 4, 5, 6, 7, 8]
// export const GraphsData = ({ daily }) => {
//   let arr2 = []
//   let man = false
//   if (daily != null) {
//     man = true
//   }
//   useEffect(() => {
//     let arr = []
//     function get() {
//       daily.map((data, i) => {
//         let ans = Math.floor(+data.temp.day)
//         console.log('ans', ans);
//         arr[i] = ans
//       })
//     }
//     if (daily != null) {
//       get()
//       console.log("arr", arr)
//       data = arr
//       arr2 = arr
//       console.log(typeof (data[0]), "ddata")
      
//     }
//     new Graphs()
//   }, [man])
//   if (daily == null) {
//     console.log("empty")
//   } else {
//     console.log("res", "data")
//     data = arr2
//   }
//   return (
//     <div>
//     </div>
//   )
// }


class Graphs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"]
        }
      },
      series: [
        {
          name: "temprature",
          data: [1, 2, 3, 4, 5, 6, 7, 8]
        },
        {
          name: "max-temp",
          data: [30, 40, 45, 50, 49, 60, 70, 20]
        },
        {
          name: "min-temp",
          data: [30, 40, 45, 50, 49, 60, 70, 20]
        }
      ]
    };
  }
  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Graphs;
