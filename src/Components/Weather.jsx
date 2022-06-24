import React from 'react'
import { useSelector } from 'react-redux';
import Homes from "../Styles/Home.module.css"
import { GraphsData } from './Graphs';
import ManulWeather from './ManulWeather';
const Weather = () => {
    const daily = useSelector((store) => store.weathers.weather)
    console.log('daily', typeof(daily));

    let day = ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"]
    return (
        <>
            {
                daily == null ? <ManulWeather></ManulWeather> :
                    <div className={Homes.HomeBox}>
                        {
                            daily.map((ele, i) => {
                                return (
                                    <button className={Homes.HomeBox1}>
                                        <div className={Homes.HomeBoxChildPar}>
                                            <div className={Homes.HomeBoxChild1}>{day[i]}</div>
                                            <div className={Homes.HomeBoxChild1}>{ele.temp.day}%</div>
                                        </div>
                                        <div className={Homes.HomeBoxChild}>
                                            <div className={Homes.HomeBoxChild1img}>
                                                <img className={Homes.HomeBoxChild1Icon} src='https://restya.com/wp-content/uploads/2021/05/restya-weather-cb.png' alt="" />
                                            </div>
                                            <div className={Homes.HomeBoxChild1}>Clouds</div>
                                        </div>
                                    </button>
                                )
                            })
                        }
                    </div>
            }
            {/* <GraphsData daily={daily}></GraphsData> */}
        </>
    )
}
export default Weather
