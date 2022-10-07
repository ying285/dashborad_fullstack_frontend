
import '../src/styles/app.scss';
import Home from './pages/Home';
import Login from './pages/Login';
import DataAnalyze from './pages/DataAnalyze';
import Signup from './pages/Signup';
import { Routes, Route} from "react-router-dom";
import DataFetch from "./help/dataFetch";
import { apiActions } from "./store/api";

import { useDispatch} from "react-redux";

const url1 = "http://localhost:8003/api/getExpense";
const url2 = "http://localhost:8003/api/getRevenue";

const App=()=> {
  const dispatch = useDispatch();

  const EXPENSES:any = DataFetch(url1);

  const REVENUEDATA: any = DataFetch(url2);
  for (const i in REVENUEDATA && REVENUEDATA) {
    REVENUEDATA[i].Revenue = REVENUEDATA[i]?.Orders * 30;
  }

  const expensesArr = EXPENSES?.map((el: any) => el?.Expenses);
  const revenueArr = REVENUEDATA?.map((item: any) => item.Revenue);
  let profitTotal: number;

   if (revenueArr) {
     profitTotal! = revenueArr
       ?.map((v: number, i: number) => v - expensesArr[i])
       .reduce((pre: number, cur: number) => pre + cur, 0);
       dispatch(apiActions.getprofitTotal(profitTotal))
   }

   const profit = revenueArr?.map((v: number, i: number) => v - expensesArr[i]!);
   let newprofit = [];
   newprofit = profit?.map((item: number) => ({ data: item }));
   dispatch(apiActions.getNewProfit(newprofit))


  return (
    <div className="app">
     <Routes>
     <Route path="/" element={<Login />} />
     <Route path="/signup" element={<Signup />} />
     <Route path="/home" element={<Home />} />
     <Route path="/dataAnalyze" element={<DataAnalyze />} />
     </Routes>
    </div>
  );
}

export default App;
