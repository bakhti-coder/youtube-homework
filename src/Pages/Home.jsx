import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card/Card";
import Sidebar from "../Components/Sidebar/Sidebar";
import { GetVideosContext } from "../Context/GetVideosContext";

const Home = () => {
  const { videos } = useContext(GetVideosContext);

  return (
    <div className="mainBody">
      <Sidebar />
      <div className="videos">
        <h1>Recommended</h1>
        <div className="videos__container">
          {videos?.map((item, index) => (
            <Card key={index + 1} item={item} />
          ))}
        </div>
      </div>
      {/* <Modal /> */}
    </div>
  );
};

export default Home;
