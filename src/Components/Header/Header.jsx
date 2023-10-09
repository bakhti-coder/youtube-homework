import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { OpenNavContext } from "../../Context/ClickNavContext";
import { VideoIdContext } from "../../Context/VideoIdContext";
import "./Header.scss";

const Header = () => {

  const { data, setData, setSearchValue, setIsSearch, isSearch } = useContext(OpenNavContext)
  const navigate = useNavigate()

  const searchFunction = (e) => {
    e.preventDefault()
    setIsSearch(!isSearch)
    navigate("/search-results")
  }

  return (
    <header className="header">
      <div onClick={() => {
        setData(!data)
      }} className="header__left">
        <i id="menu" className="material-icons">
          menu
        </i>
        <img
          src="https://www.youtube.com/about/static/svgs/icons/brand-resources/YouTube-logo-full_color_light.svg?cache=72a5d9c"
          alt=""
        />
      </div>

      <div className="header__search">
        <form onSubmit={searchFunction}>
          <input onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Search" />
          <button>
            <i className="material-icons">search</i>
          </button>
        </form>
      </div>

      <div className="header__icons">
        <i className="material-icons display-this">search</i>
        <i className="material-icons">videocam</i>
        <i className="material-icons">apps</i>
        <i className="material-icons">notifications</i>
        <i className="material-icons display-this">account_circle</i>
      </div>
    </header>
  );
};

export default Header;
