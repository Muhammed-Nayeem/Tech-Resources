import React from "react";
import "./Title.css";

const Title = (props) => {
  const { title } = props.bookmark;

  return (
    <div className="article__bookmarked-title">
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
