import React from 'react'
import '../styles/companyInfo.scss'

const CompanyInfo = () => {
  return (
    <div className="company ">
    <div className="company_logo">
      <p>Clothound AB</p>
    </div>
    <div className="company_info mt-3 ">
      <div className="company_icon">
        <i className="bi bi-geo-alt-fill me-3" />
        <p>King George Street 6, London</p>
      </div>
      <div className="company_icon">
        <i className="bi bi-envelope-fill me-3" />
        <p>clothound@gmail.com</p>
      </div>
      <div className="company_icon">
        <i className="bi bi-telephone-fill me-3" />
        <p>+44 20 7946 0018</p>
      </div>
    </div>
  </div>
  )
}

export default CompanyInfo