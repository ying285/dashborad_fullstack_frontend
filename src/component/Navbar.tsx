import React,{useCallback, useEffect} from 'react'
import '../styles/navbar.scss'
import Offcanvas from '../utils/Offcanvas'
import { RootState } from "../store";
import { useSelector,useDispatch } from "react-redux";
import capitalization from "../help/capitalization";
import axios from "axios";
import { apiActions } from "../store/api";

const Navbar = () => {
  const dispatch = useDispatch();
  const username = useSelector((state: RootState) => state.api.data);
 
  const fetchUsername = useCallback(async () => {
    try {
      const token: string = localStorage.getItem("token")!;
      const response = await axios.get("http://localhost:8003/user/username", {
        headers: {
          token,
        },
      });
      dispatch(apiActions.getData(response.data));
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);
  useEffect(() => {
    fetchUsername();
  }, [fetchUsername]);

  return (
    <div className='navbar'>
      
      <div className='navbar_text'>
        <h3>Welcome {username && capitalization(username)}</h3>
        
          to <span>Business Dashborad</span>
        
      </div>
       <div className='navbar_offcanvas'>
        {/* <i
          className="bi bi-list"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          style={{ fontSize: "3rem" }}
        ></i> */}
        <Offcanvas />

        {/* <div
          className="offcanvas offcanvas-end bg-black"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-body">
            
          </div>
        </div> */}
      </div> 
    </div>
    
  )
}

export default Navbar