import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface linksState {
  
  currentLink: string;
}

const initialState: linksState = {
    currentLink: '1'
  
};

const linksSlice = createSlice({
  name: "links",
  initialState,
  reducers: {
    setCurrentLink(state, action: PayloadAction<string>) {
      state.currentLink = action.payload;
    },
   
  },
});

export const linksActions = linksSlice.actions;
export default linksSlice.reducer;