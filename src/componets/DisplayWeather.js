import React from "react";
import "./display.css";

function DisplayWeather(props){
    const {data} = props;

    return(
        <div className="displayWeather">
            <div className="maincard">
                <span className="cardtitle">
                    {data.name},{data.sys.country}. Weather
                </span>
            </div>
        </div>
    )
}

export default DisplayWeather;