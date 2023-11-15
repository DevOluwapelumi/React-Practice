import { useState } from "react";
import axios from "axios";
import "./Weather.css";

const Weather = () => {
  const [userInput, setUserInput] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const myApi = "a3b8d6fb17f68e5be7796cea40bdfb96";

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${myApi}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="text-center mt-5">
      <div className="p-md-5 pt-5 pt-md-0 d-flex flex-column justify-content-center col-md-8">
        <div className="d-flex justify-content-between mb-3 px-md-5 col-12 col-md-6">
          <input
            type="text"
            placeholder="Search Location"
            className="p-1 w-75 ms-5 form-control "
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </div>
        <button className="btn btn-success" onClick={fetchWeatherData}>
          Get Weather
        </button>
        <div className="align-items-endx h-75 d-flex mt-5">
          <div className="row d-flex flex-row align-items-center ps-md-5 ps-3 col-md-6 mt-5">
            <div className="col-md-12 mt-5 ">
              <h2 id="temp" className="deg"></h2>
            </div>
            <div className="temp col- flex-column">
              <div className="col">
                <img src="/src/assets/sqicollege.png" alt="" />
              </div>
              <h2>{userInput}:</h2>
              <p>{Math.round(weatherData?.main?.temp)}&deg;C</p>
            </div>
          </div>
        </div>
      </div>

      {weatherData && (
        <div>
          <div className="Details py-5 col-md-4">
            <div className="px-md-5 px-3 d-flex flex-column align-items-center justify-content-center">
              <div className="px-0 container">
                <h1 className="fw-bold bg-warning">WEATHER DETAILS...</h1>
                <ul className="pt-4 px-0">
                  <li>
                    <span className="inform fw-bold">
                      <b>Location</b>
                    </span>
                    <h2>Weather for {userInput}:</h2>
                    <h2>
                      {weatherData?.name}, {weatherData?.sys?.country}
                    </h2>
                  </li>
                  <li>
                    <span className="inform fw-bold">
                      <b>Description</b>
                    </span>
                    <p>Description: {weatherData?.weather?.[0]?.description}</p>
                  </li>
                  <li>
                    <span className="inform fw-bold">
                      <b>Humidity</b>
                    </span>
                    <p>
                      Humidity: {weatherData?.main?.humidity} g.m<sup>-3</sup>
                    </p>
                  </li>
                  <li>
                    <span className="inform fw-bold">
                      <b>Degree</b>
                    </span>
                    <p>Wind Degree: {weatherData?.wind?.deg}&deg;</p>
                  </li>
                  <li>
                    <span className="inform fw-bold">
                      <b>Time~zone</b>
                    </span>
                    <p>Timezone: {weatherData?.timezone}&deg;</p>
                  </li>
                </ul>
                <ul className="pt-5 px-0  border-top mt-5">
                  <li>
                    <span className="inform fw-bold">
                      <b>Longitude</b>
                    </span>
                    <p>Longitude: {weatherData?.coord?.lon}&deg;</p>
                  </li>
                  <li>
                    <span className="inform fw-bold">
                      <b>Latitude</b>
                    </span>
                    <p>Latitude: {weatherData?.coord?.lat}&deg;</p>
                  </li>
                  <li>
                    <span className="inform fw-bold">
                      <b>Sunrise</b>
                    </span>
                    <p>
                      Sunrise:{" "}
                      {new Date(
                        (weatherData?.sys?.sunrise || 0) * 1000
                      ).toLocaleTimeString()}
                    </p>
                  </li>
                  <li>
                    <span className="inform fw-bold">
                      <b>Sunset</b>
                    </span>
                    <p>
                      Sunset:{" "}
                      {new Date(
                        (weatherData?.sys?.sunset || 0) * 1000
                      ).toLocaleTimeString()}
                    </p>
                  </li>
                  <li>
                    <span className="inform fw-bold">
                      <b>Pressure</b>
                    </span>
                    <p>
                      Pressure: {weatherData?.main?.pressure} N/m<sup>-2</sup>
                    </p>
                  </li>
                  <li>
                    <span className="inform fw-bold">
                      <b>Temperature</b>
                    </span>
                    <p>
                      Temperature: {Math.round(weatherData?.main?.temp)}&deg;C
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="fixed-bottom pb-3 container-fluid">
            <div className="text-end mx-auto col-11 col">
              <p className="small">
                Designed by :
                <a href="https://www.linkedin.com/in/victor-oluwadarasimi">
                  Dev_Oluwapelumi
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
