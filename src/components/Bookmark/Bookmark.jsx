import React from "react";
import "./Bookmark.css";
import Title from "../Title/Title";

const Bookmark = (props) => {
  const { bookmarked } = props;

  return (
    <div className="article__bookmark">
      <h3>Bookmarked Blogs: {bookmarked.length}</h3>
      {bookmarked.map((bookmark) => (
        <Title key={bookmark.id}  bookmark={bookmark} />
      ))}
    </div>
  );
};

export default Bookmark;
