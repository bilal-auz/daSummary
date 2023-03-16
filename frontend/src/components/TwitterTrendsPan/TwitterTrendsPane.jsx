import React, { useEffect, useState } from "react";
import Select from "react-select";
import countries from "./f1ca81d9eeb88fec5f55f93f91b6c8f0.json";

function TwitterTrendsPane() {
  const [selectedCountry, setSelectedCountry] = useState("w");
  const [loading, setLoading] = useState(false);

  const handleChange = async (data) => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    setLoading(false);

    console.log(data.value);
  };

  const sampleData = [
    {
      trends: [
        {
          name: "#EPBD",
          url: "http://twitter.com/search?q=%23EPBD",
          promoted_content: null,
          query: "%23EPBD",
          tweet_volume: null,
        },
        {
          name: "Frank Deboosere",
          url: "http://twitter.com/search?q=%22Frank+Deboosere%22",
          promoted_content: null,
          query: "%22Frank+Deboosere%22",
          tweet_volume: null,
        },
        {
          name: "Tunesië",
          url: "http://twitter.com/search?q=Tunesi%C3%AB",
          promoted_content: null,
          query: "Tunesi%C3%AB",
          tweet_volume: null,
        },
        {
          name: "#epsco",
          url: "http://twitter.com/search?q=%23epsco",
          promoted_content: null,
          query: "%23epsco",
          tweet_volume: null,
        },
        {
          name: "Gelukkige",
          url: "http://twitter.com/search?q=Gelukkige",
          promoted_content: null,
          query: "Gelukkige",
          tweet_volume: null,
        },
        {
          name: "Council",
          url: "http://twitter.com/search?q=Council",
          promoted_content: null,
          query: "Council",
          tweet_volume: 63870,
        },
        {
          name: "MEPs",
          url: "http://twitter.com/search?q=MEPs",
          promoted_content: null,
          query: "MEPs",
          tweet_volume: null,
        },
        {
          name: "#EPlenary",
          url: "http://twitter.com/search?q=%23EPlenary",
          promoted_content: null,
          query: "%23EPlenary",
          tweet_volume: null,
        },
        {
          name: "#Oscars",
          url: "http://twitter.com/search?q=%23Oscars",
          promoted_content: null,
          query: "%23Oscars",
          tweet_volume: 740336,
        },
        {
          name: "European Parliament",
          url: "http://twitter.com/search?q=%22European+Parliament%22",
          promoted_content: null,
          query: "%22European+Parliament%22",
          tweet_volume: null,
        },
        {
          name: "Sihame El Kaouakibi",
          url: "http://twitter.com/search?q=%22Sihame+El+Kaouakibi%22",
          promoted_content: null,
          query: "%22Sihame+El+Kaouakibi%22",
          tweet_volume: null,
        },
        {
          name: "#ECOFIN",
          url: "http://twitter.com/search?q=%23ECOFIN",
          promoted_content: null,
          query: "%23ECOFIN",
          tweet_volume: null,
        },
        {
          name: "The EU",
          url: "http://twitter.com/search?q=%22The+EU%22",
          promoted_content: null,
          query: "%22The+EU%22",
          tweet_volume: 88127,
        },
        {
          name: "Commission",
          url: "http://twitter.com/search?q=Commission",
          promoted_content: null,
          query: "Commission",
          tweet_volume: 174923,
        },
        {
          name: "Member States",
          url: "http://twitter.com/search?q=%22Member+States%22",
          promoted_content: null,
          query: "%22Member+States%22",
          tweet_volume: null,
        },
        {
          name: "Eden",
          url: "http://twitter.com/search?q=Eden",
          promoted_content: null,
          query: "Eden",
          tweet_volume: 227408,
        },
        {
          name: "Michelin",
          url: "http://twitter.com/search?q=Michelin",
          promoted_content: null,
          query: "Michelin",
          tweet_volume: null,
        },
        {
          name: "🇪🇺",
          url: "http://twitter.com/search?q=%F0%9F%87%AA%F0%9F%87%BA",
          promoted_content: null,
          query: "%F0%9F%87%AA%F0%9F%87%BA",
          tweet_volume: 25547,
        },
        {
          name: "De Standaard",
          url: "http://twitter.com/search?q=%22De+Standaard%22",
          promoted_content: null,
          query: "%22De+Standaard%22",
          tweet_volume: null,
        },
        {
          name: "Goedemorgen",
          url: "http://twitter.com/search?q=Goedemorgen",
          promoted_content: null,
          query: "Goedemorgen",
          tweet_volume: null,
        },
        {
          name: "Strasbourg",
          url: "http://twitter.com/search?q=Strasbourg",
          promoted_content: null,
          query: "Strasbourg",
          tweet_volume: null,
        },
        {
          name: "Delhaize",
          url: "http://twitter.com/search?q=Delhaize",
          promoted_content: null,
          query: "Delhaize",
          tweet_volume: null,
        },
        {
          name: "EEAAO",
          url: "http://twitter.com/search?q=EEAAO",
          promoted_content: null,
          query: "EEAAO",
          tweet_volume: 52873,
        },
        {
          name: "Trossard",
          url: "http://twitter.com/search?q=Trossard",
          promoted_content: null,
          query: "Trossard",
          tweet_volume: 18749,
        },
        {
          name: "Silicon Valley Bank",
          url: "http://twitter.com/search?q=%22Silicon+Valley+Bank%22",
          promoted_content: null,
          query: "%22Silicon+Valley+Bank%22",
          tweet_volume: 379143,
        },
        {
          name: "Ancelotti",
          url: "http://twitter.com/search?q=Ancelotti",
          promoted_content: null,
          query: "Ancelotti",
          tweet_volume: null,
        },
        {
          name: "Rik Torfs",
          url: "http://twitter.com/search?q=%22Rik+Torfs%22",
          promoted_content: null,
          query: "%22Rik+Torfs%22",
          tweet_volume: null,
        },
        {
          name: "Hanouna",
          url: "http://twitter.com/search?q=Hanouna",
          promoted_content: null,
          query: "Hanouna",
          tweet_volume: 11528,
        },
        {
          name: "Ahold",
          url: "http://twitter.com/search?q=Ahold",
          promoted_content: null,
          query: "Ahold",
          tweet_volume: null,
        },
        {
          name: "Michelle Yeoh",
          url: "http://twitter.com/search?q=%22Michelle+Yeoh%22",
          promoted_content: null,
          query: "%22Michelle+Yeoh%22",
          tweet_volume: 155606,
        },
        {
          name: "TPMP",
          url: "http://twitter.com/search?q=TPMP",
          promoted_content: null,
          query: "TPMP",
          tweet_volume: 43851,
        },
        {
          name: "Sanda Dia",
          url: "http://twitter.com/search?q=%22Sanda+Dia%22",
          promoted_content: null,
          query: "%22Sanda+Dia%22",
          tweet_volume: null,
        },
        {
          name: "Ke Huy Quan",
          url: "http://twitter.com/search?q=%22Ke+Huy+Quan%22",
          promoted_content: null,
          query: "%22Ke+Huy+Quan%22",
          tweet_volume: 133711,
        },
        {
          name: "Kabila",
          url: "http://twitter.com/search?q=Kabila",
          promoted_content: null,
          query: "Kabila",
          tweet_volume: null,
        },
        {
          name: "Ohio",
          url: "http://twitter.com/search?q=Ohio",
          promoted_content: null,
          query: "Ohio",
          tweet_volume: 66450,
        },
        {
          name: "Orban",
          url: "http://twitter.com/search?q=Orban",
          promoted_content: null,
          query: "Orban",
          tweet_volume: null,
        },
        {
          name: "Premier League",
          url: "http://twitter.com/search?q=%22Premier+League%22",
          promoted_content: null,
          query: "%22Premier+League%22",
          tweet_volume: 47258,
        },
        {
          name: "Giroud",
          url: "http://twitter.com/search?q=Giroud",
          promoted_content: null,
          query: "Giroud",
          tweet_volume: 12478,
        },
        {
          name: "Fatshi",
          url: "http://twitter.com/search?q=Fatshi",
          promoted_content: null,
          query: "Fatshi",
          tweet_volume: null,
        },
        {
          name: "Islam",
          url: "http://twitter.com/search?q=Islam",
          promoted_content: null,
          query: "Islam",
          tweet_volume: 81590,
        },
        {
          name: "de ceulaer",
          url: "http://twitter.com/search?q=%22de+ceulaer%22",
          promoted_content: null,
          query: "%22de+ceulaer%22",
          tweet_volume: null,
        },
        {
          name: "Amaai",
          url: "http://twitter.com/search?q=Amaai",
          promoted_content: null,
          query: "Amaai",
          tweet_volume: null,
        },
        {
          name: "Miami",
          url: "http://twitter.com/search?q=Miami",
          promoted_content: null,
          query: "Miami",
          tweet_volume: 67871,
        },
        {
          name: "Hollywood",
          url: "http://twitter.com/search?q=Hollywood",
          promoted_content: null,
          query: "Hollywood",
          tweet_volume: 107088,
        },
        {
          name: "Lady Gaga",
          url: "http://twitter.com/search?q=%22Lady+Gaga%22",
          promoted_content: null,
          query: "%22Lady+Gaga%22",
          tweet_volume: 43401,
        },
        {
          name: "RWDM",
          url: "http://twitter.com/search?q=RWDM",
          promoted_content: null,
          query: "RWDM",
          tweet_volume: null,
        },
        {
          name: "Odoi",
          url: "http://twitter.com/search?q=Odoi",
          promoted_content: null,
          query: "Odoi",
          tweet_volume: null,
        },
        {
          name: "Engeland",
          url: "http://twitter.com/search?q=Engeland",
          promoted_content: null,
          query: "Engeland",
          tweet_volume: null,
        },
        {
          name: "Kigali",
          url: "http://twitter.com/search?q=Kigali",
          promoted_content: null,
          query: "Kigali",
          tweet_volume: null,
        },
        {
          name: "Brendan Fraser",
          url: "http://twitter.com/search?q=%22Brendan+Fraser%22",
          promoted_content: null,
          query: "%22Brendan+Fraser%22",
          tweet_volume: 97130,
        },
      ],
      as_of: "2023-03-14T12:20:49Z",
      created_at: "2023-02-17T12:49:41Z",
      locations: [
        {
          name: "Belgium",
          woeid: 23424757,
        },
      ],
    },
  ];

  useEffect(() => {
    const data = "helo";
    handleChange(data);
  }, [selectedCountry]);
  return (
    <div className="weatherCard card text-neutral-content shadow-xl w-auto flex flex-col items-center p-3">
      <Select
        defaultValue={selectedCountry}
        onChange={handleChange}
        options={countries}
        styles={{
          control: (styles) => ({
            ...styles,
            width: "250px",
            color: "red",
            backgroundColor: "#1e293b",
            textAlign: "left",
          }),
          option: (styles, { isSelected, isFocused }) => ({
            ...styles,
            textAlign: "left",

            background: isSelected
              ? "#0e1a2d"
              : isFocused
              ? "#0e1a2d"
              : "#1e293b",
            color: "#B5CDF5",
          }),
        }}
      />

      <ul className="menu bg-base-100 w-72 rounded-box mt-2 loading">
        {loading ? (
          <div className="btn loading" />
        ) : (
          sampleData[0]["trends"].slice(0, 10).map((item, index) => (
            <li key={index}>
              <a href={item["url"]} target="_blank">
                <div className="h-[27px] w-[22px]">{index + 1}</div>
                <div className="divider divider-horizontal m-0" />

                {item["name"]}
              </a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TwitterTrendsPane;
