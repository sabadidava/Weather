import { func } from "prop-types";
import { useState, useeffect } from "react";
import { MapSvg } from "./assets/Svgs";
import { WiDaySunny } from "weather-icons-react";

export default function Weather({ getCityweather, weather, setcity, city }) {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var d = new Date();
  var n = d.getDay();
  return (
    <>
      <div style={{ width: "300px", height: "100vh" }}>
        <input
          type="text"
          value={city}
          placeholder="city"
          onChange={(e) => setcity(e.target.value)}
        />
        <button onClick={() => getCityweather()}>search</button>
        <button style={{ backgroundColor: "greenyellow", marginLeft: "20px" }}>
          <span style={{ fontSize: "13px" }} className="material-icons">
            gps_not_fixed
          </span>
        </button>

        <div>
          {weather?.weather && (
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0]?.icon}@2x.png`}
              alt=""
            />
          )}
        </div>
        <div>{weather && weather?.name}</div>
        {weather && <div>{weather?.main?.temp}&deg;</div>}
        <div className="dayofweek">{weather?.weather && days[n]}</div>
        {/* tu weather obiektia da ar aris carieli aarsebobs mashin shesruldes  */}
      </div>
    </>
  );
}
