import React from "react";
import "./Time.css";

const Time = (props) => {
  const { readingTime } = props;

  return (
    <div className="article__reading-time">
      <p>Time spent on reading: {readingTime}</p>
    </div>
  );
};

export default Time;
