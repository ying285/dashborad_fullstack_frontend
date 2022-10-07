import React from 'react'
import '../../styles/statistics.scss'
import Expenses from './Expenses'
import OnlineSales from './OnlineSales'
import NewCustomers from './NewCustomers'
import Revenue from './Revenue'

const Statistics = () => {
  return (
    <div className='statistics'>
         <Expenses />
         <OnlineSales />
         <Revenue/> 
         <NewCustomers/>  
        
    </div>
  )
}

export default Statistics