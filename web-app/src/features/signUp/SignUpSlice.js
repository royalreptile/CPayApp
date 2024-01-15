import { createSlice } from "@reduxjs/toolkit";

const SignUpSlice = createSlice({
    name: 'signUpState',
    initialState: {middleName:'',firstName:'',lastName:'',prefix:'',mobileNumber:'',agreedToTerms:false},
    reducers: {
        saveSignUpScreeInfo: (state, action) => {
            // console.log(action)
            state = {...state,...action.payload}
            return state;
        }
    }
})
export const SignUpScreenState = (state) => {
    return state.signUpState
};
export const {saveSignUpScreeInfo} = SignUpSlice.actions
export default SignUpSlice.reducer;