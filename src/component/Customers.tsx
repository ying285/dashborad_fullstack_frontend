import React from 'react'
import { Link} from "react-router-dom";
import '../styles/customers.scss'
import '../styles/orders.scss'
import CustomersList from '../utils/CustomersList'





const Customers = () => {
  return (
    <div className='customers'>
      <h1>Customers</h1>
      <ul className='customers_list'>
        <li>
          <CustomersList/>
        
        </li>
        <li>
        <CustomersList/>
        </li>
        <li>
        <CustomersList/>
        </li>
      </ul>
      
        <Link to="/dataAnalyze" className='customers_icon'>
        <p>View all</p>
        <i className="bi bi-arrow-right" />
        </Link>
      
    </div>
  )
}

export default Customers