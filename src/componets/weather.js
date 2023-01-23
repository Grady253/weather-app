import React, { useState } from "react";
import "./weather.css";

function Weather(){

    const [form, setform] = useState({
        city:"",
        country:""
    })

    const handleChange = (e) => {
        let name = e.target.anem;
        let value = e.target.value;

        if(name == 'city'){
            setform({...form, city:value})
        }
    }
    return(
        <div className="weather">
            <span className="title">Weather App</span>
            <br/>

            <form>
                <input type='text' name='city' placeholder='city'/>
                <input type='text' name='country' placeholder='country'/>
                <button className="getweather">Submit</button>
            </form>
        </div>
    )
}

export default Weather;