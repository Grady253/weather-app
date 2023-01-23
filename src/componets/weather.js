import React, { useState } from "react";
import "./weather.css";
import Display from "./Display";

function Weather() {
  const weatherApi = "7ed2cdd385302b1dd5833c452252aa10";

  const [form, setform] = useState({
    city: "",
    country: "",
  });

  const [weather, setweather] = useState([]);

  async function weatherData(e) {
    e.prevent.default();
    if (form.city == "") {
      alert("Add Value");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${weatherApi}`
      )
        .then((res) => res.json())
        .then((data) => console.log(data));

      setweather({
        data: data,
      });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "city") {
      setform({ ...form, city: value });
    }

    if (name == "country") {
      setform({ ...form, country: value });
    }
    console.log(form.city, form.country);
  };

  return (
    <div className="weather">
      <span className="title">Weather App</span>
      <br />

      <form>
        <input
          type="text"
          name="city"
          placeholder="city"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="country"
          placeholder="country"
          onChange={(e) => handleChange(e)}
        />
        <button className="getweather" onClick={(e) => weatherData(e)}>
          Submit
        </button>
      </form>

      {weather.data != undefined ? (
        <div>
          <Display data={weather.data} />
        </div>
      ) : null}
    </div>
  );
}

export default Weather;
