import React from 'react'
import '../styles/customers.scss'
import '../styles/orders.scss'

const CustomersList = () => {
  return (
    <div  className='customers_items'>
    <div className='customers_img'>
            <img src={'https://i.postimg.cc/rphp65k4/pexels-andrea-piacquadio-733872.png'} alt='img'/> 
          </div>
          <h5>Lorem ipsum dolor ipsum dolor AB</h5>
          <div className="orders_growth">
            <span>$265</span>
          </div>
    </div>
  )
}

export default CustomersList