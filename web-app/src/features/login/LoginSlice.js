import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        
    },
    reducers: {
        login: (state, action) => {
            state.userName = action.payload.userName
            state.loggedIn = true
            return state
        }
    }
})

export const connectLogin = (state) => {
  return  {userName: state.userName, loggedIn: state.loggedIn}
}

export const { login } = loginSlice.actions;
export default loginSlice.reducer