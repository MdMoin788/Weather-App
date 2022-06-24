import React from 'react'
import { useSelector } from 'react-redux';
import Homes from "../Styles/Home.module.css"




const Data = () => {
    const weekData2 = useSelector((store) => store.weathers.manual)
    console.log('weekData2', weekData2);
    return (
        <>
            {
                weekData2.map((ele, i) => {
                    let convert = ele.sunrise;
                    let ApiDate = new Date(convert * 1000).toDateString().split(" ")
                    // let ApiDate1 = new Date(convert * 1000).toDateString().split(" ")
                    // let ApiDate2 = new Date(ele.sunrise * 1000).toTimeString()
                    // let ApiDate3 = new Date(ele.sunrise * 1000).toLocaleTimeString("en-IN")
                    // let ApiDate3 = new Date(ele.sunrise * 1000).toLocaleTimeString("en-IN")
                    const currentDate = new Date().toDateString().split(" ")
                    return (
                        currentDate[0] == ApiDate[0] && i != weekData2.length - 1 ? <div className={Homes.HomeData}>
                            <div className={Homes.HomeData1}>
                                <div className={Homes.HomeDataChildParent}>
                                    <div className={Homes.HomeDataChild}>
                                        <div className={Homes.HomeDataChild1}>Pressure</div>
                                        <div className={Homes.HomeDataChild1}>{ele.pressure} hpa</div>
                                    </div>
                                    <div className={Homes.HomeDataChild}>
                                        <div className={Homes.HomeDataChild1}>Sunrise</div>
                                        <div className={Homes.HomeDataChild1}>{new Date(ele.sunrise * 1000).toLocaleTimeString("en-IN")}</div>
                                    </div>
                                </div>
                                <div className={Homes.HomeDataChildParent}>
                                    <div className={Homes.HomeDataChild}>
                                        <div className={Homes.HomeDataChild1}>Humidity</div>
                                        <div className={Homes.HomeDataChild1}>{ele.humidity} %</div>
                                    </div>
                                    <div className={Homes.HomeDataChild}>
                                        <div className={Homes.HomeDataChild1}>Sunset</div>
                                        <div className={Homes.HomeDataChild1}>{new Date(ele.sunset * 1000).toLocaleTimeString("en-IN")}</div>
                                    </div>
                                </div>
                            </div>
                        </div> :
                            <></>
                    )
                })
            }
        </>
    )
}
export default Data
