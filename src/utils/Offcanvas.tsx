import React from 'react'
import '../styles/navbar.scss'
import '../styles/sideBar.scss'

import { Link, useNavigate } from "react-router-dom";
 import { authActions } from "../store/auth";
 import { useDispatch  } from "react-redux";


const Offcanvas = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(authActions.logout());
    navigate("/");
  };


  return (
  
<>
  
    < i
          className="bi bi-list btn  "  data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"
          style={{backgroundColor:'rgb(46, 45, 45)', color:'#fff', border:'#fff'}}
           ></i>
         

        <div className="offcanvas offcanvas-start" data-bs-scroll="true"  data-bs-backdrop="false"  id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
       <div className="offcanvas-header bg-dark">
  
       <div></div>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body bg-dark">
  <div className='navbar_text'>
        <h3>Welcome ying</h3>
        <h3>
          to <span>Business Dashborad</span>
        </h3>
  </div>
  <ul className='offcanvasMenu'>
  <Link to="/home" className="slide_link2"><li>Dashboard</li></Link>
  <Link to="/dataAnalyze" className="slide_link2"><li>Statistics</li></Link>
  </ul>
  <div className="slide_logout" style={{marginTop:'50%'}}>
      <i className="bi bi-box-arrow-right" onClick={logoutHandler}>
        {" "}
        Logout
      </i>
    </div>
  </div>
</div>
</>
  )
}

export default Offcanvas