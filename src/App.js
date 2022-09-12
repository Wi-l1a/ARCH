import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import TourSelection from './Pages/TourSelection';
import TourSection2 from './Pages/TourSelection/TourSection2/index';

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />

    </>
  );
};

export default App;