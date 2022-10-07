import React from 'react'
import "../../styles/chartAnalyz.scss";
import {
 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import DataFetch from "../../help/dataFetch";

const url = "http://localhost:8003/api/getNewclient";



const NewCustomersChart = () => {
  
    const NEWCLIENTSDATA = DataFetch(url);
    console.log(NEWCLIENTSDATA)
    return (
      <div className="newcustomers2">
         

<ResponsiveContainer minHeight={200} width='99%'>
        <LineChart
          width={500}
          height={150}
          data={NEWCLIENTSDATA}
          margin={{
            top: 35,
            right: 30,
            left: 20,
            bottom: 25,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="NewClients" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
      </div>
    );
  
}

export default NewCustomersChart