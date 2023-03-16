import React, { useEffect } from "react";
import "./Home.css";
import Weatherpan from "./Pans/WeatherPan/Weatherpan";
import TodoPan from "./Pans/TodoPan/TodoPan";
import ClockPan from "./Pans/CloclPan/ClockPan";
import TwitterTrendsPane from "./TwitterTrendsPan/TwitterTrendsPane";
import axios from "axios";

function Home() {
  const tst = async () => {
    const API_ENDPOINT = "https://twitter-trends.vercel.app/api/trends";

    try {
      //Default trend: WorldWide trend. NOTE: change later depending to the user loctions
      // const woied = req.body.woeid ? req.body.woeid : 23424757;

      const config = {
        headers: {
          "Content-type": "application/json",
          // "Content-Length": "19",
          // Host: "https://twitter-trends.vercel.app",
          // origin: "https://twitter-trends.vercel.app",
        },
      };

      // const BODY_PARAMS = { woied: woied };

      const { data } = await axios.post(
        API_ENDPOINT,
        { woied: 23424757 },
        config
      );

      // res.status(200).send(data);
      console.log(data);
    } catch (error) {
      console.log("ERROR: " + error);
      // res.status(404).send(error);
    }
  };

  // useEffect(() => {
  //   // console.log("TST");
  //   // tst();
  // }, []);
  return (
    <div className="container">
      <div className="headPane">
        <h1>DaSummary</h1>
      </div>
      <div className="bodyPane flex flex-row flex-wrap justify-center rounded-lg h-full w-full">
        <div className="leftPane w-[350px]">
          <Weatherpan />
        </div>
        <div className="midPane m-0 w-[350px] flex flex-col justify-between items-center">
          <div>
            <ClockPan />
          </div>
          <TodoPan />
        </div>
        <div className="rightPane w-[350px]">
          <TwitterTrendsPane />
        </div>
      </div>
    </div>
  );
}

export default Home;
