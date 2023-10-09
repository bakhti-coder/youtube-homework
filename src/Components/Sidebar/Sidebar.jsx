import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { OpenNavContext } from "../../Context/ClickNavContext";
import "./Sidebar.scss"

const Sidebar = () => {

  const { data } = useContext(OpenNavContext)

  let myData = localStorage.getItem("isNavOpen")

  return (
    <div className={ data ?  "sidebar" : "open-sidebar"}>
      <div className="sidebar__categories">
        <NavLink to={"/"} className="sidebar__category">
          <i className="material-icons">home</i>
          <span>Home</span>
        </NavLink>
        <NavLink to={"/trending"} className="sidebar__category">
          <i className="material-icons">local_fire_department</i>
          <span>Trending</span>
        </NavLink>
        <div className="sidebar__category">
          <i className="material-icons">subscriptions</i>
          <span>Subcriptions</span>
        </div>
      </div>
      <hr />
      <div className="sidebar__categories">
        <div className="sidebar__category">
          <i className="material-icons">library_add_check</i>
          <span>Library</span>
        </div>
        <div className="sidebar__category">
          <i className="material-icons">history</i>
          <span>History</span>
        </div>
        <div className="sidebar__category">
          <i className="material-icons">play_arrow</i>
          <span>Your Videos</span>
        </div>
        <div className="sidebar__category">
          <i className="material-icons">watch_later</i>
          <span>Watch Later</span>
        </div>
        <div className="sidebar__category">
          <i className="material-icons">thumb_up</i>
          <span>Liked Videos</span>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Sidebar;
