import React, { useEffect, useState } from "react";
import "./Articles.css";
import Article from "../Article/Article";
import Bookmark from "../Bookmark/Bookmark";
import Time from "../Time/Time";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [bookmarked, setBookmarked] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      let res = await fetch("/techData.json");
      let data = await res.json();
      setArticles(data);
    };
    loadData();
  }, []);

  const bookmarkHandler = (article) => {
    const newBookmarked = [...bookmarked, article];
    setBookmarked(newBookmarked);
  };

  const readingTimeHandler = (time) => {
    setReadingTime((prevReadTime) => prevReadTime + time);
  };

  return (
    <section className="articles">
      <div className="container">
        <div className="articles__content">
          <div className="articles__cards">
            {articles.map((article) => (
              <Article
                key={article.id}
                article={article}
                bookmarkHandler={bookmarkHandler}
                readingTimeHandler={readingTimeHandler}
              />
            ))}
          </div>
          <div className="articles__bookmarks">
            <div className="articles__bookmarks-wrapper">
              <Time readingTime={readingTime} />
              <Bookmark bookmarked={bookmarked} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
