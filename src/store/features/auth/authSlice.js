import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoginPending: false,
  isLoginSuccess: false,
  errorMessage: "",
  user: {},
};

function callLoginApi(email, password) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (email === "admin@login.com" && password === "admin") {
        resolve({ email });
      } else {
        reject("invalid login data!");
      }
    }, 1000);
  });
}

export const authLoginApi = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    try {
      const res = await callLoginApi(email, password);
      return res.email;
    } catch (err) {
      throw err;
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(authLoginApi.pending, (state) => {
        state.isLoginPending = true;
      })
      .addCase(authLoginApi.fulfilled, (state, action) => {
        // todo // Testing on Console Log
        console.log('fulfilled');
        console.log(action);

        const { email } = action.payload;
        state.isLoginPending = false;
        state.isLoginSuccess = true;
        state.user = { email };
      })
      .addCase(authLoginApi.rejected, (state, action) => {
        console.log(action, "rejected");
        state.isLoginPending = false;
        state.isLoginSuccess = false;
        state.errorMessage = action.error.message;
      });
  },
});

export default authSlice.reducer;
