import React from "react";

function Display(props){
    const {data} = props;

    return(
        <div className="displayWeather">
            <div className="maincard">
                <span className="cardtitle">
                    {data.naem},{data.sys.country}. Weather
                </span>
            </div>
        </div>
    )
}

export default Display;