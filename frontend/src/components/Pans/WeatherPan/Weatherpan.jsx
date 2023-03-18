import React, { useEffect, useState } from "react";
import "./WeatherPan.css";
import weatherIcons from "../../../assets/weatherIcons.json";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind, faDroplet } from "@fortawesome/free-solid-svg-icons";

function Weatherpan() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecasted, setForecasted] = useState(null);
  const [loading, setLoading] = useState(true);

  const getWeather = async () => {
    setLoading(true);

    const { data } = await axios.get("/api/weather/getWeather", {
      params: { lat: 35.1856, lon: 33.3823 },
    });

    console.log(data.forecast.forecastday[0]);

    setWeatherData(data);
    setForecasted(data.forecast.forecastday);

    setLoading(false);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div>
      <div className="weatherCard card text-neutral-content shadow-xl">
        <div className="card-body">
          {loading ? (
            <div className="btn loading" />
          ) : (
            <div>
              <div className="grid grid-flow-col justify-items-center">
                <div className="w-fit">
                  <h2 className="text-6xl">
                    {weatherData.current.temp_c + "°C"}
                  </h2>
                  <h2 className="text-left">
                    {weatherData.current.condition.text}
                  </h2>
                </div>
                <div className="flex justify-center">
                  <p className="text-8xl">{weatherIcons["cloud_sun"]}</p>
                  {/* <img src={weatherData.current.condition.icon} alt="" /> */}
                </div>
              </div>

              <div className="flex justify-between">
                <h2 className="text-base flex flex-col space-x-3 items-start">
                  {weatherData.location.name}, {weatherData.location.country}{" "}
                  <span className="text-xs">
                    {new Date(
                      weatherData.current.last_updated_epoch * 1000
                    ).toLocaleString("en-US", {
                      weekday: "short",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </h2>
              </div>

              <div class="divider m-0 h-0" />

              <div className="flex justify-center p-3">
                <p className="flex space-x-3 justify-center items-center">
                  <FontAwesomeIcon icon={faWind} className="mr-2" />
                  {weatherData.current.wind_kph} Km/h
                </p>
                <p className="flex space-x-3 justify-center items-center">
                  <FontAwesomeIcon icon={faDroplet} className="mr-2" />
                  {weatherData.current.humidity}%
                </p>
                <p className="flex space-x-3 justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-uv-index mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 12h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 1 1 8 0" />
                    <path d="M12 4v-1" />
                    <path d="M13 16l2 5h1l2 -5" />
                    <path d="M6 16v3a2 2 0 1 0 4 0v-3" />
                  </svg>
                  {weatherData.current.uv}
                </p>
              </div>

              <div className="bg-[#1e293b] p-3 card rounded-md text-neutral-content shadow-xl">
                <table class="table-fixed ">
                  <thead>
                    <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {forecasted.map((day, index) => (
                      <tr className="items-center ">
                        <td
                          className={
                            "text-sm font-bold text-left pr-7 " +
                            (index != forecasted.length - 1 && "pb-3.5")
                          }
                        >
                          {new Date(day.date_epoch * 1000).toLocaleString(
                            "en-us",
                            { weekday: "long" }
                          )}
                        </td>
                        <td
                          className={
                            "flex flex-row text-sm pr-3.5 whitespace-nowrap " +
                            (index != forecasted.length - 1 && "pb-3.5")
                          }
                        >
                          💧{day.day.avghumidity}%
                        </td>
                        <td
                          className={
                            "text-xs pr-2 " +
                            (index != forecasted.length - 1 && "pb-3.5")
                          }
                        >
                          <img src={day.hour[14].condition.icon} alt="ss" />
                        </td>
                        <td
                          className={
                            "text-md pr-2 " +
                            (index != forecasted.length - 1 && "pb-3.5")
                          }
                        >
                          <img src={day.hour[20].condition.icon} alt="ss" />
                        </td>
                        <td
                          className={
                            "text-sm font-semibold pr-2.5 " +
                            (index != forecasted.length - 1 && "pb-3.5")
                          }
                        >
                          {day.day.maxtemp_c}°
                        </td>
                        <td
                          className={
                            "text-xs font-bold " +
                            (index != forecasted.length - 1 && "pb-3.5")
                          }
                        >
                          {day.day.mintemp_c}°
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Weatherpan;
