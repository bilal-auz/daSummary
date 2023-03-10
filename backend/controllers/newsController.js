const axios = require("axios");

const API_ENDPOINT = "https://newsapi.org/v2/top-headlines";

const getNews = async (req, res) => {
  params = {
    apiKey: process.env.NEWS_API,
    sources: req.params.source,
  };

  //   const { data } = await axios.get(API_ENDPOINT, {
  //     params: params,
  //   });

  res.status(200).send(data);
};

module.exports = { getNews };

const data = {
  status: "ok",
  totalResults: 10,
  articles: [
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Several killed in shooting in Germany city of Hamburg",
      description:
        "Local media say at least six people were shot dead and others injured.",
      url: "http://www.bbc.co.uk/news/world-europe-64910415",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/83B3/production/_115651733_breaking-large-promo-nc.png",
      publishedAt: "2023-03-09T21:52:18.4444669Z",
      content:
        "Several people reported to have been killed in shooting in Hamburg, Germany.",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Berlin to allow women to go topless in public swimming pools",
      description:
        "A woman complained after she was thrown out of an open-air pool for going topless.",
      url: "http://www.bbc.co.uk/news/world-europe-64907422",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/88C6/production/_128941053_gettyimages-1334604419.png",
      publishedAt: "2023-03-09T21:22:22.9596973Z",
      content:
        "Women will soon be allowed to swim topless in Berlin's public pools, after a ruling by the city's authorities. \r\nIt comes after a woman who was thrown out of an open-air pool for sunbathing topless t… [+1181 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Tiger Woods' ex-girlfriend sues to challenge NDA",
      description:
        "Erica Herman, who dated the golfer for six years, wants a court to overturn the privacy agreement.",
      url: "http://www.bbc.co.uk/news/world-us-canada-64897829",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/CD2C/production/_128942525_gettyimages-1165787518.jpg",
      publishedAt: "2023-03-09T21:07:25.8820995Z",
      content:
        "A lawsuit filed by an ex-girlfriend of golf superstar Tiger Woods asks a judge in Florida to cancel a non-disclosure agreement (NDA) she signed with him. \r\nLawyers for Erica Herman, who began dating … [+2380 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "TikTokers target controversial Willow oil project",
      description:
        "The US government may approve the Alaska drilling site soon - but its opponents are going viral.",
      url: "http://www.bbc.co.uk/news/science-environment-64906323",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/B601/production/_128939564_cariboualaska.jpg",
      publishedAt: "2023-03-09T21:07:23.1003293Z",
      content:
        "US government officials are expected to make a decision on one of the biggest US oil projects in decades this week.\r\nEnvironmental groups and some Native residents have long opposed the proposal beca… [+5139 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Mitch McConnell: US Senate Republican leader in hospital after fall",
      description:
        "The 81-year-old Senate Minority leader trips at a Washington DC hotel during a private dinner.",
      url: "http://www.bbc.co.uk/news/world-us-canada-64898451",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/D555/production/_128931645_gettyimages-1247870959.jpg",
      publishedAt: "2023-03-09T19:37:20.381864Z",
      content:
        'US Senate Republican leader Mitch McConnell has been taken to hospital after a fall at a Washington DC hotel, a spokesman told US media.\r\n"Leader McConnell tripped at a local hotel during a private d… [+1117 chars]',
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Shawn Kemp: Retired NBA legend detained after a drive-by shooting",
      description:
        "An argument in a parking lot led to gunfire by one man believed to be Shawn Kemp, police say.",
      url: "http://www.bbc.co.uk/news/world-us-canada-64892224",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/C280/production/_128929794_kemp2.jpg",
      publishedAt: "2023-03-09T17:07:22.6154832Z",
      content:
        "Retired NBA All-Star Shawn Kemp has been arrested by authorities in Tacoma, Washington, in connection with a drive-by shooting.\r\nPolice arrived at the Tacoma Mall on Wednesday in response to reports … [+1850 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Ukraine war: Russia fires hypersonic missiles in new barrage",
      description:
        "At least nine people die as Russia fires powerful weapons, including hypersonic missiles.",
      url: "http://www.bbc.co.uk/news/world-europe-64903202",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/13D1/production/_128937050_p0f7q0wh.jpg",
      publishedAt: "2023-03-09T16:52:16.932553Z",
      content:
        "Media caption, Watch: Wave of Russian strikes leaves destruction across Ukraine\r\nAt least of nine people have died in a new wave of strikes across Ukraine in which Russia used powerful weapons, inclu… [+2928 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "US man puts phone on drone to send rescue message",
      description:
        "After getting stuck in snow in Oregon, one man uses an unusual method of attracting attention.",
      url: "http://www.bbc.co.uk/news/world-us-canada-64905689",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/6773/production/_128938462_drone.jpg",
      publishedAt: "2023-03-09T15:52:25.0566693Z",
      content:
        "When a US motorist got stuck in the snow on a remote road in Oregon, he used sky-high thinking to save himself.\r\nAfter realising he was without mobile phone reception, he typed a text message to a tr… [+1971 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Tucker Carlson, Donald Trump and the in-fighting at Fox News",
      description:
        "A defamation lawsuit has pulled back the curtain on the inner workings of Fox News.",
      url: "http://www.bbc.co.uk/news/world-us-canada-64895964",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/9F9F/production/_128936804_hannity_getty.jpg",
      publishedAt: "2023-03-09T15:52:22.5260498Z",
      content:
        "A $1.6bn defamation lawsuit against Fox News has pulled back the curtain on the inner workings of the powerful conservative cable network in the days after the 2020 US presidential election. \r\nDomini… [+8213 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "How a small town derailment became a national row",
      description:
        "The impact of the toxic train crash in East Palestine, Ohio, has grown into a major political event.",
      url: "http://www.bbc.co.uk/news/world-us-canada-64897731",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/136DF/production/_128938597_p0f7r7rw.jpg",
      publishedAt: "2023-03-09T14:52:23.1395337Z",
      content:
        "When a train carrying toxic chemicals derailed in East Palestine, Ohio, on 3 February, only a small number of people outside the small town took notice. But in the weeks after it developed into a hug… [+234 chars]",
    },
  ],
};
