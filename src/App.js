import { useState, useeffect } from "react";
import "./App.css";
import Weather from "./Weather";
import RightBar from "./RightBar";
import axios from "axios";

function App() {
  const [city, setcity] = useState("");
  const [weather, setweather] = useState();

  const API_KEY = "edfa43748894ac064a5f606d2cd30e93";

  async function getCityweather() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric `
      )
      .then(function (response) {
        console.log("object", response);
        // handle success
        setweather(response?.data);
      })
      .catch(function (error) {
        console.log("error", error);
      })
      .then(function () {
        // always executed
      });
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "row", flax: 1, width: "100%" }}
    >
      <Weather
        getCityweather={getCityweather}
        weather={weather}
        setcity={setcity}
        city={city}
      />
      <RightBar getCityweather={getCityweather} />
    </div>
  );
}

export default App;
