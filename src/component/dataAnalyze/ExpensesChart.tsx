import React from 'react'
import "../../styles/chartAnalyz.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import DataFetch from "../../help/dataFetch";

const url = "http://localhost:8003/api/getExpense";

const ExpensesChart = () => {
  
    const EXPENSESDATA = DataFetch(url);

  return (
    
    <div className="expenses2">
      
       <ResponsiveContainer minHeight={200} width='99%'>
        <LineChart width={500} height={150} data={EXPENSESDATA}>
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Expenses" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer> 
     
    </div>
     
  );
  
}

export default ExpensesChart