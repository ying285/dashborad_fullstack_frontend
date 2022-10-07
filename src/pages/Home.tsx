import React from 'react'
import Dashborad from '../UI/Dashborad';
import SideBar from '../UI/SideBar';

const Home = () => {
  return (
    <div className='d-flex'>
    <SideBar />
    <Dashborad />
    </div>
  )
}

export default Home