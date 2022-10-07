import React from 'react'
import "../../styles/chartAnalyz.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import DataFetch from "../../help/dataFetch";

const url = "http://localhost:8003/api/getOrder";

const OnlineSalesChart = () => {
    const ORDERSDATA = DataFetch(url);
  return (
    <div className="onlinesales2">
     <ResponsiveContainer minHeight={200} width='99%'>
      <BarChart
        width={500}
        height={150}
        data={ORDERSDATA}
        margin={{
          top: 50,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip />
        <Legend />
        <Bar dataKey="Orders" barSize={15} fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer> 
  </div>
  )
}

export default OnlineSalesChart