import { createContext, useState } from "react";

const OpenModalContext = createContext()

const OpenModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    
    const [videoId, setVideoId] = useState("")
    
    return (
        <OpenModalContext.Provider
            value={{isOpen, setIsOpen, videoId, setVideoId}}
        >
            {children}
        </OpenModalContext.Provider>
    )
}

export {
    OpenModalContext, 
    OpenModalProvider
}