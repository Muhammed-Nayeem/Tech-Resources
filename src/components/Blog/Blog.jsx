import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <section className="blog">
      <div className="container">
        <article className="blog__title">
          <h3>Blogs About React.Js</h3>
        </article>
        <div className="blog__content">
          <div className="blog__question">
            <h3>1. Difference between props and state?</h3>
            <p>
              Props and State are looking similar as data. But Props are not the
              data of component itself. Props are coming from outside the
              component and props are immutable.On the other hand State is the
              data of component itself. State is changeable and we can use State
              by using useState Hook.
            </p>
          </div>
          <div className="blog__question">
            <h3>2. How does useState work?</h3>
            <p>
              First we have to declare a state by using useState Hook. we'll
              import this useState hook from react. useState is like a js
              function when we call this in initial phase we've to pass a
              initial value. useState return us the current state variable and
              another one is a method to update the current state value.
            </p>
          </div>
          <div className="blog__question">
            <h3>3. Purpose of useEffect other than fetching data!</h3>
            <p>
              The useEffect Hook allows you to perform side effects in your
              components. Some examples of side effects are: fetching data,
              directly updating the DOM, and timers. useEffect accepts two
              arguments. The second argument is optional.
            </p>
          </div>
          <div className="blog__question">
            <h3>4. How does react work?</h3>
            <p>
              React relies on a virtual DOM, which is a copy of the actual DOM.
              React's virtual DOM is immediately reloaded to reflect this new
              change whenever there is a change in the data state. After which,
              React compares the virtual DOM to the actual DOM to figure out
              what exactly has changed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
