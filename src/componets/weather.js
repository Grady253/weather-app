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

        if(name == 'country'){
            setform({...form, country:value})
        }
        console.log(form.city, form.country);
    }
    return(
        <div className="weather">
            <span className="title">Weather App</span>
            <br/>

            <form>
                <input type='text' name='city' placeholder='city' onChange={e => handleChange(e)}/>
                <input type='text' name='country' placeholder='country' onChange={e => handleChange(e)}/>
                <button className="getweather">Submit</button>
            </form>
        </div>
    )
}

export default Weather;