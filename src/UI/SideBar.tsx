import React from 'react'
import '../styles/sideBar.scss'
import { Link, useNavigate } from "react-router-dom";
 import { authActions } from "../store/auth";
 import { linksActions } from "../store/links";
 import {   RootState } from "../store";
 import { useDispatch, useSelector  } from "react-redux";

const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentLink = useSelector((state: RootState) => state.links.currentLink);

  const logoutHandler = () => {
    dispatch(authActions.logout());
    navigate("/");
  };

  return (
    <div className="slide">
    <div className="slide_logo">
      <h2>Your Business</h2>
    </div>
    <ul className="slide_list">
      <li className={currentLink ==='1' ? 'active' : ''}
      onClick={()=>{dispatch(linksActions.setCurrentLink('1'))}}
      >
        <Link to="/home" className="slide_link">
          <div className="slide_item">
            <i className="bi bi-grid-1x2-fill" />
            <span>Dashboard</span>
          </div>
        </Link>
      </li>

      <li className={currentLink ==='2' ? 'active' : ''}
      onClick={()=>{dispatch(linksActions.setCurrentLink('2'))}}>
        <Link to="/dataAnalyze" className="slide_link">
          <div className="slide_item">
            <i className="bi bi-bar-chart-line-fill" />{" "}
            <span>Statistics</span>
          </div>
        </Link>
      </li>
      {/* <li
      className={currentLink ==='3' ? 'active' : ''}
      onClick={()=>{dispatch(linksActions.setCurrentLink('3'))}}
      >
        <Link to="/adddata" className="slide_link">
          <div className="slide_item">
            <i className="bi bi-file-earmark-plus" />
            <span>Add Data</span>
          </div>
        </Link>
      </li> */}
    </ul>
    <div className="slide_logout">
      <i className="bi bi-box-arrow-right" onClick={logoutHandler}>
        {" "}
        Logout
      </i>
    </div>
  </div>
  )
}

export default SideBar