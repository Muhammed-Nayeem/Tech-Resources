import React, { useEffect, useState } from "react";
import "./Articles.css";
import Article from "../Article/Article";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      let res = await fetch("/techData.json");
      let data = await res.json();
      setArticles(data);
    };
    loadData();
  }, []);

  return (
    <section className="articles">
      <div className="container">
        <div className="articles__content">
          <div className="articles__cards">
            {articles.map((article) => (
              <Article key={article.id} article={article} />
            ))}
          </div>
          <div className="articles__bookmarks">
            <h3>Bookmarks Shown here!</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
