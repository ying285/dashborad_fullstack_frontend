import React from 'react'
import Navbar from '../component/Navbar'
import '../styles/dashborad.scss'
import ExpensesChart from '../component/dataAnalyze/ExpensesChart'
import NewCustomersChart from '../component/dataAnalyze/NewCustomersChart'
import OnlineSalesChart from '../component/dataAnalyze/OnlineSalesChart'
import RevenueChart from '../component/dataAnalyze/RevenueChart'


const ChartAnalyz = () => {
  return (
    <div className='dashborad'>
         
         <Navbar />
        <div className='dashborad_row3 '>
             <ExpensesChart/>
            <NewCustomersChart/>  
        </div>
        <div className='dashborad_row3'>
            <OnlineSalesChart/>
            <RevenueChart/> 
        </div> 

   
    </div>
  )
}

export default ChartAnalyz