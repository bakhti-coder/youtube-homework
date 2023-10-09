import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { OpenModalContext } from "../../Context/OpenModalContext";
import { VideoIdContext } from "../../Context/VideoIdContext";
import "./Card.scss";

import { motion } from "framer-motion";

const Card = ({ item }) => {
  const { isOpen, setIsOpen, setVideoId } = useContext(OpenModalContext);

  const handleOpen = (item) => {
    setIsOpen(!isOpen);
    setVideoId(item.id.videoId);
  };

  return (
    <Link
      to={`/videoId=/${item.id.videoId}`}
      onClick={() => handleOpen(item)}
      data-toggle="modal"
      data-target="#exampleModalCenter"
      className="video"
    >
      {/* <motion.div
        whileHover={{ scale: 1.2, rotate: 360 }}
        whileTap={{
          scale: 0.8,
          rotate: 360,
          borderRadius: "100%",
        }}
      > */}
        <div className="video__thumbnail">
          <img src={item.snippet.thumbnails.default.url} alt="" />
        </div>
        <div className="video__details">
          <div className="author">
            <img src="http://aninex.com/images/srvc/web_de_icon.png" alt="" />
          </div>
          <div className="title">
            <h3>{item.snippet.channelTitle}</h3>
            <a href="">FutureCoders</a>
            <span>10M Views • 3 Months Ago</span>
          </div>
        </div>
      {/* </motion.div> */}
    </Link>
  );
};

export default Card;