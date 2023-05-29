import React from 'react';
import "./App.css";
import Header from './components/Header/Header';
import Articles from './components/Articles/Articles';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Articles />
      <Blog />
      <Footer />
    </>
  );
};

export default App;
