import React from 'react'
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer
  } from "recharts";
  import DataFetch from "../../help/dataFetch";
  import "../../styles/chartAnalyz.scss";
  
  const url = "http://localhost:8003/api/getRevenue";

const RevenueChart = () => {
    const REVENUEDATA: any = DataFetch(url);
  for (const i in REVENUEDATA) {
    REVENUEDATA[i].Revenue = REVENUEDATA[i].Orders * 30;
  }

  return (
    <div className="revenue2">
        <ResponsiveContainer minHeight={200} width='99%'>
       <ComposedChart
        width={200}
        height={150}
        data={REVENUEDATA}
        margin={{
          top: 50,
          right: 30,
          bottom: 10,
          left: 30,
        }}
      >
        <XAxis dataKey="name" scale="band" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip />
        <Legend />
         <Bar dataKey="Revenue" barSize={15} fill="#413ea0" />
        <Line type="monotone" dataKey="Revenue" stroke="#ff7300" />
      </ComposedChart> 
      </ResponsiveContainer>
    </div>
  )
}

export default RevenueChart