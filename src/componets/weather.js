import React, { useState } from "react";
import "./weather.css";

function Weather() {
  const weatherApi = "0753a0c64930e35683f0206250563635";

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
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},{form.country}&appid=${weatherApi}`
      )
        .then((res) => res.json())
        .then((data) => console.log(data));

        setweather(data);
    }
  }

  const handleChange = (e) => {
    let name = e.target.anem;
    let value = e.target.value;

    if (name == "city") {
      setform({ ...form, city: value });
    }

    if (name == "country") {
      setform({ ...form, country: value });
    }
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

      {
        weather.data
      }
    </div>
  );
}

export default Weather;
