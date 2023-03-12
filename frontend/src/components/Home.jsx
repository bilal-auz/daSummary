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
      <div className="bodyPane flex flex-row space-x-4 rounded-lg h-full w-full">
        <div className="leftPane">
          <Weatherpan />
        </div>
        <div className="midPane">
          <TodoPan />
        </div>
        <div className="rightPane">right</div>
      </div>
    </div>
  );
}

export default Home;
