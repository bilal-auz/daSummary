import React from "react";
import "./Home.css";
import Weatherpan from "./Pans/WeatherPan/Weatherpan";
import TodoPan from "./Pans/TodoPan/TodoPan";

function Home() {
  return (
    <div className="container">
      <div className="headPane">
        <h1>DaSummary</h1>
      </div>
      <div className="bodyPane flex flex-row flex-wrap justify-center space-x-4 rounded-lg h-full w-full">
        <div className="leftPane w-[350px]">
          <Weatherpan />
        </div>
        <div className="midPane w-[350px] flex flex-col justify-between">
          <h1>Hello</h1>
          <TodoPan />
        </div>
        <div className="rightPane w-[350px]">right</div>
      </div>
    </div>
  );
}

export default Home;
