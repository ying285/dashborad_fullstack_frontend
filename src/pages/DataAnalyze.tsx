import React from 'react'
import SideBar from '../UI/SideBar'
import ChartAnalyz from '../UI/ChartAnalyz'
import '../styles/chartAnalyz.scss'

const DataAnalyze = () => {
  return (
    <div className='d-flex dataAnalyze'>
        <SideBar />
        <ChartAnalyz/>
    </div>
  )
}

export default DataAnalyze