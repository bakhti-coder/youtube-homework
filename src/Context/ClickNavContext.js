import { createContext, useEffect, useState } from "react";

const OpenNavContext = createContext();

const OpenNavProvider = ({ children }) => {
  const [data, setData] = useState();
  const [searchValue, setSearchValue] = useState("")
  const [isSearch, setIsSearch] = useState(false)

  useEffect(() => {
    const storedData = localStorage.getItem("isNavOpen");
    if (storedData) {
      setData(storedData);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("isNavOpen", data);
  }, [data]);

  return (
    <OpenNavContext.Provider value={{ data, setData, searchValue, setSearchValue, isSearch, setIsSearch }}>
      {children}
    </OpenNavContext.Provider>
  );
};

export { OpenNavContext, OpenNavProvider };
