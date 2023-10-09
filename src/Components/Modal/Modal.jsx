import React, { useContext, useEffect } from "react";
import { OpenModalContext } from "../../Context/OpenModalContext";
import { VideoIdContext } from "../../Context/VideoIdContext";
import "./Modal.scss";

const Modal = () => {
  const { isOpen, setIsOpen, videoId } = useContext(OpenModalContext);
//   const { videoId } = useContext(VideoIdContext);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div style={ isOpen ? {display: "block" } : {display: "none"}} className="modal">
      <button onClick={handleClose}>close</button>
      <iframe src={`https://www.youtube.com/embed/${videoId}`}>

      </iframe>
    </div>
  );
};

export default Modal;
