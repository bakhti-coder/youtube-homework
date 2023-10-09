import { createContext, useState } from "react";

const VideoIdContext = createContext()

const VideoIdProvider = ({ children }) => {
    const [videoId, setVideoId] = useState("")
    
    return (
        <VideoIdContext.Provider
            value={{videoId, setVideoId}}
        >
            {children}
        </VideoIdContext.Provider>
    )
}

export {
    VideoIdContext, 
    VideoIdProvider
}