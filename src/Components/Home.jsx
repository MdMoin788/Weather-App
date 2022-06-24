import React, { useEffect } from 'react'
import Homes from "../Styles/Home.module.css"
import Weather from './Weather'
import SearchBar from './SearchBar'
import WeatherData from './WeatherData'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Graphs from './Graphs'


const Home = () => {
    const city = useSelector((store) => store.weathers.cities)

    return (
        <div className={Homes.HomeContainer}>
            <div className={Homes.SearchBar}>
                <SearchBar></SearchBar>
            </div>
            {/* -----------------------------------  Day Wise Weather ----------------------------------------------------------- */}
            <h3 style={{textAlign:"center"}}>{city}</h3>
           
            <div className={Homes.HomeContainerChil}>
           
                <Weather></Weather>
            </div>
            <br />
            {/* -----------------------------------  Data Weather ----------------------------------------------------------- */}
            <div className={Homes.HomeContainerData}>
                <WeatherData></WeatherData>
            </div>
            <br />
            <br />
            <br />
            {/* -----------------------------------  graph ----------------------------------------------------------- */}
            <div className={Homes.HomeContainerGraph}>
                <div className={Homes.HomeGraph}>
                    <div className={Homes.HomeGraph1}>
                        <Graphs></Graphs>
                    </div>
                </div>
            </div>
            <br />
   
        </div>

        
    )
}
export default Home
