import React, { useEffect, useState } from "react";
const NEWS_KEY = "77130686b288c814418ed218e798df9a";
const URL = "https://gnews.io/api/v4/search";
//const API = "https://gnews.io/api/v4/search?q=example&token=API-Token&lang=";

function News() {
  // const [language, setLan] = useState("en");
  const [newsArtical, setNewsArticals] = useState([]);
  useEffect(() => {
    (async () => {
      const FinalUrl = `${URL}?q=cricket&token=${NEWS_KEY}&lang=mr`;
      console.log(FinalUrl);
      const response = await fetch(FinalUrl);
      const data = await response.json();
      console.log(FinalUrl);
      setNewsArticals(data.articales);
    })();
  }, []);

  return (
    <>
      <h2>News </h2>
      <button onClick={News()}>click</button>

      {newsArtical.map((newsItem) => {
        <p>{newsItem.title}</p>;
      })}
    </>
  );
}
export default News;
