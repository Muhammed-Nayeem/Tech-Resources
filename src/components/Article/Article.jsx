import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import "./Article.css";

const Article = (props) => {
  const {author_img, blog_img, name, title, time, date, keywords:[first, second, third]} = props.article;

  return (
    <div className='article__card'>
      <div className="article__card-img">
        <img src={blog_img} alt={title} />
      </div>
      <div className="article__details">
        <div className="article__profile">
          <div className="article__user">
            <img src={author_img} alt={name} />
            <h3>{name}<span>{date}</span></h3>
          </div>
          <div className="article__time">
            <p>{time} mins read</p>
            <button type='button'>
              <FontAwesomeIcon icon={faBookmark} />
            </button>
          </div>
        </div>
        <div className="article__info">
          <h1>{title}</h1>
          <p><span>#{first}</span> <span>#{second}</span> <span>#{third}</span></p>
        </div>
      </div>
      <button type='button'>Mark As Read</button>
    </div>
  );
};

export default Article;
