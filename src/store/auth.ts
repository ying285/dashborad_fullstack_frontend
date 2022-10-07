import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface authState {
  isAuth: boolean;
  isLoading: boolean;
  token: String;
  error: any[];
  username: String;
  email: String;
  password: String;
  progress: number;
}

const initialState: authState = {
  isAuth: false,
  isLoading: false,
  token: "",
  error: [],
  username: "",
  email: "",
  password: "",
  progress: 0,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getemail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    getusername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    getpassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },

    getToken(state) {
      if (localStorage.getItem("token")) {
        state.isAuth = true;
      }
    },

    logout(state) {
      localStorage.removeItem("token");
      state.isAuth = false;
    },

    setProgress(state, action: PayloadAction<number>) {
      state.progress = action.payload;
    },

    getErrorMessage(state, action: PayloadAction<any[]>) {
      state.error = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
