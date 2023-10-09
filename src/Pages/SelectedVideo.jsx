import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { GetVideosContext } from "../Context/GetVideosContext";

const SelectedVideo = () => {
  const { vId } = useParams();

  const { videos } = useContext(GetVideosContext);

  const filteredArr = videos?.filter((video) => video.id.videoId !== vId);

  const foundVideo = videos?.find((video) => video.id.videoId !== vId);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ width: "70%", height: "500px" }}>
        <iframe
          style={{ width: "70%", height: "500px" }}
          src={`https://www.youtube.com/embed/${vId}`}
        ></iframe>

        <h3>{foundVideo.snippet.channelTitle}</h3>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "70vh",
          overflow: "auto",
        }}
      >
        {filteredArr?.map((video) => {
          return (
            <Link to={`/videoId=/${video.id.videoId}`}>
              <img
                style={{ width: "400px" }}
                src={video.snippet.thumbnails.default.url}
                alt=""
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SelectedVideo;
