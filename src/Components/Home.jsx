import React, { useEffect } from 'react'
import Homes from "../Styles/Home.module.css"
import Weather from './Weather'
import SearchBar from './SearchBar'
import WeatherData from './WeatherData'
import { useSelector } from 'react-redux'
import Graphs from './Graphs'
import GoogleMap from './GoogleMap'
import SimpleChart from './SimpleChart'
const Home = () => {
    
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

    const city = useSelector((store) => store.weathers.cities)
    // const weekData2 = useSelector((store) => store.weathers.manual)
    // const daily = useSelector((store) => store.weathers.weather)
    // if(daily == null){
    //     weekData2.map((ele, i)=>{
    //         console.log('ele', ele);
    //         if (i == 0) {
    //             data[i].temperature = +ele.feels_like.morn
    //         }
    //         else if (i == 1) {
    //             data[i].temperature = +ele.feels_like.day
    //         } else if (i == 2) {
    //             data[i].temperature = +ele.feels_like.eve
    //         }
    //         else {
    //             data[i].temperature = +ele.feels_like.night
    //         }
    //     })
    // }
        

    return (
        <>
            <div className={Homes.HomeContainer}>
                <div className={Homes.SearchBar}>
                    <SearchBar></SearchBar>
                </div>
                {/* -----------------------------------  Day Wise Weather ----------------------------------------------------------- */}
                <h3 style={{ textAlign: "center" }}>{city}</h3>
                <div className={Homes.HomeContainerChil}>
                    <Weather></Weather>
                </div>
                <br />
                {/* -----------------------------------  Data Weather ----------------------------------------------------------- */}
                <div className={Homes.HomeContainerData}>
                    <WeatherData></WeatherData>
                </div>
                {/* -----------------------------------  graph ----------------------------------------------------------- */}
                <div className={Homes.HomeContainerGraph}>
                    <Graphs></Graphs>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                {/* -----------------------------------  sample chart----------------------------------------------------------- */}

                {/* <div className={Homes.HomeContainerGraph}>
                    <SimpleChart></SimpleChart>
                </div> */}
                <br />
                <br />

                <br />
                {/* -----------------------------------  google map ----------------------------------------------------------- */}

                <div className={Homes.HomeContainerGraph}>
                    <GoogleMap data= {data}></GoogleMap>
                </div>
            </div>
        </>
    )
}
export default Home
