import React from 'react'
import '../styles/dashborad.scss'
import Statistics from '../component/statistics/Statistics'
import Navbar from '../component/Navbar'
import Orders from '../component/Orders'
import Customers from '../component/Customers'
import CompanyInfo from '../component/CompanyInfo'

const Dashborad = () => {
  return (
    <div className='dashborad'>
         <Navbar />
        <div className='dashborad_row1'>
            <Statistics/>
            <Customers/>
        </div>
        <div className='dashborad_row2'>
            <Orders/>
            <CompanyInfo/>
        </div> 

    </div>
  )
}

export default Dashborad