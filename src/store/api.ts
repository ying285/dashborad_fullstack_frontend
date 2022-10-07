import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface apiState {
  name: string;
  data: number;
  profitTotal:number;
  newProfit:number[];
}

const initialState: apiState = {
  name: "",
  data: 0,
  profitTotal:0,
  newProfit:[]
};

const apiSlice = createSlice({
    name: "api",
    initialState,
    reducers: {
      getName(state, action: PayloadAction<string>) {
        state.name = action.payload;
      },
      getData(state, action: PayloadAction<number>) {
        state.data = action.payload;
      },
      getNewProfit(state, action: PayloadAction<number[]>) {
        state.newProfit = action.payload;
      },

      getprofitTotal(state, action: PayloadAction<number>) {
        state.profitTotal = action.payload;
      },
    },
  });
  
  export const apiActions = apiSlice.actions;
  export default apiSlice.reducer;
  