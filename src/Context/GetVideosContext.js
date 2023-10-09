import { createContext, useState, useEffect } from "react";

const GetVideosContext = createContext();

const GetVideosProvider = ({ children }) => {
  const storeVideos = JSON.parse(localStorage.getItem("videos"));
  const [videos, setVideos] = useState(storeVideos || []);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      "X-RapidAPI-Key": "9a1415f26cmshdb16db78cfd4330p155a7cjsn29e5eedb9562",
    },
  };


  useEffect(() => {
    fetch(
      `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setVideos(response.items);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    localStorage.setItem("videos", JSON.stringify(videos));
  }, [videos]);

  return (
    <GetVideosContext.Provider value={{ videos, setVideos }}>
      {children}
    </GetVideosContext.Provider>
  );
};  

export { GetVideosContext, GetVideosProvider };