import React from "react";
import "./WeatherPan.css";
import weatherIcons from "../../../assets/weatherIcons.json";

function Weatherpan() {
  return (
    <div>
      <div className="weatherCard card text-neutral-content shadow-xl">
        <div className="card-body">
          <div className="grid grid-flow-col">
            <div>
              <h2 className="text-6xl">50°C</h2>
              <p>Cloudy</p>
            </div>
            <div>
              <p className="text-8xl">{weatherIcons["sun"]}</p>
            </div>
          </div>

          <div className="flex justify-between">
            <h2 className="text-2xl flex space-x-3 items-end">location</h2>
          </div>

          <div class="divider m-0 h-0" />

          <div className="flex justify-center">
            <p className="flex space-x-3 justify-center">
              i{/* <WiSunrise size={22} /> {sunrise} */}
              {/* <WiSunset size={22} /> {sunset} */}
            </p>
            <p className="flex space-x-3 justify-center">
              i{/* <WiSunrise size={22} /> {sunrise} */}
              {/* <WiSunset size={22} /> {sunset} */}
            </p>
            <p className="flex space-x-3 justify-center">
              i{/* <WiSunrise size={22} /> {sunrise} */}
              {/* <WiSunset size={22} /> {sunset} */}
            </p>
          </div>

          <div className="bg-[#1e293b] p-3 card rounded-md text-neutral-content shadow-xl">
            <table class="table-auto">
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
                <tr>
                  <td className="text-xs font-bold text-left pr-14">Monday</td>
                  <td className="text-xs pr-2.5">💧0%</td>
                  <td className="text-xs pr-2.5">{weatherIcons["sun"]}</td>
                  <td className="text-md pr-2.5">🌩️</td>
                  <td className="text-md font-bold pr-2.5">23°</td>
                  <td className="text-xs font-bold">11°</td>
                </tr>
                <tr>
                  <td className="text-xs font-bold text-left pr-14">Monday</td>
                  <td className="text-xs pr-2.5">💧0%</td>
                  <td className="text-xs pr-2.5">{weatherIcons["sun"]}</td>
                  <td className="text-md pr-2.5">🌩️</td>
                  <td className="text-md font-bold pr-2.5">23°</td>
                  <td className="text-xs font-bold">11°</td>
                </tr>
                <tr>
                  <td className="text-xs font-bold text-left pr-14">Monday</td>
                  <td className="text-xs pr-2.5">💧0%</td>
                  <td className="text-xs pr-2.5">{weatherIcons["sun"]}</td>
                  <td className="text-md pr-2.5">🌩️</td>
                  <td className="text-md font-bold pr-2.5">23°</td>
                  <td className="text-xs font-bold">11°</td>
                </tr>
                <tr>
                  <td className="text-xs font-bold text-left pr-14">Monday</td>
                  <td className="text-xs pr-2.5">💧0%</td>
                  <td className="text-xs pr-2.5">{weatherIcons["sun"]}</td>
                  <td className="text-md pr-2.5">🌩️</td>
                  <td className="text-md font-bold pr-2.5">23°</td>
                  <td className="text-xs font-bold">11°</td>
                </tr>
                <tr>
                  <td className="text-xs font-bold text-left pr-14">Monday</td>
                  <td className="text-xs pr-2.5">💧0%</td>
                  <td className="text-xs pr-2.5">{weatherIcons["sun"]}</td>
                  <td className="text-md pr-2.5">🌩️</td>
                  <td className="text-md font-bold pr-2.5">23°</td>
                  <td className="text-xs font-bold">11°</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weatherpan;
