import React from "react";
import "../styles/orders.scss";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
//import DataFetch from "../help/dataFetch";
import { RootState } from "../store";
import { useSelector } from "react-redux";

// const url1 = "http://localhost:8003/api/getExpense";
// const url2 = "http://localhost:8003/api/getRevenue";

const Orders = () => {

  const newProfit = useSelector((state: RootState) => state.api.newProfit);
  const profitTotal = useSelector((state: RootState) => state.api.profitTotal);


  // const EXPENSES:any = DataFetch(url1);

  // const REVENUEDATA: any = DataFetch(url2);
  // for (const i in REVENUEDATA && REVENUEDATA) {
  //   REVENUEDATA[i].Revenue = REVENUEDATA[i]?.Orders * 30;
  // }

  // const expensesArr = EXPENSES?.map((el: any) => el?.Expenses);
  // const revenueArr = REVENUEDATA?.map((item: any) => item.Revenue);
  // let profitTotal: number;

  //  if (revenueArr) {
  //    profitTotal! = revenueArr
  //      ?.map((v: number, i: number) => v - expensesArr[i])
  //      .reduce((pre: number, cur: number) => pre + cur, 0);
  //  }

  //  const profit = revenueArr?.map((v: number, i: number) => v - expensesArr[i]!);
  //  let newprofit = [];
  //  newprofit = profit?.map((item: number) => ({ data: item }));

  return (
    
  

  <div className="orders">
        <div className="orders_info">
         <div className="orders_title">
           <h5>Profit 10 days</h5>
           <h2> $ {profitTotal!}</h2>
           <div className="orders_growth">
             <span>+2.45%</span>
           </div>
         </div>
       </div>

       <ResponsiveContainer width='99%' height="60%" >
         <AreaChart 
           width={200}
           height={150}
            data={newProfit}
           margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
         >
           <Tooltip cursor={false} />
           <Area
             animationBegin={800}
             animationDuration={2000}
             type="monotone"
             dataKey="data"
             stroke="darkorange"
             fill="#8068233e"
             strokeWidth={3}
           />
         </AreaChart>
       </ResponsiveContainer>
  </div>
   );
};

export default Orders;