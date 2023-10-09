import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Sidebar from "../Components/Sidebar/Sidebar";
import { OpenNavContext } from "../Context/ClickNavContext";

const Search = () => {
  const { searchValue, isSearch } = useContext(OpenNavContext);

  const [searchVideos, setSearchVideos] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "275f1ebeddmsh01e67ddd6419579p1c4febjsn9d5931de9c70",
      "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch(
      `https://simple-youtube-search.p.rapidapi.com/search?query=${searchValue}&safesearch=false`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
          toast.error("Bunaqa video mavjud emas");
          setSearchVideos(response.results);
      })
      .catch((err) => console.error(err));
  }, [isSearch]);

  return (
    <div className="mainBody">
      <Sidebar />
      <div
        style={{
          height: "60vh",
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
        }}
        className="search-videos-wrapper"
      >
        {searchVideos &&
          searchVideos.map((vid, Index) => {
            return (
              <Link
                to={`/videoId=/${vid.id}`}
                key={Index}
                className="search-video-card"
              >
                <img src={vid.thumbnail.url} alt="" />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Search;
