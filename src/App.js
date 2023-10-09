import React from "react";
import Header from "./Components/Header/Header";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Trending from "./Pages/Trending";
import SelectedVideo from "./Pages/SelectedVideo";
import Search from "./Pages/Search";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import SwiperPage from "./Pages/Swiper";

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/trending" element={<Trending/>}/>
        <Route path="/videoId=/:vId" element={<SelectedVideo />} />
        <Route path="/search-results" element={<Search />} />
        <Route path="/swiper" element={<SwiperPage />} />
      </Routes>
    </>
  );
}

export default App;
