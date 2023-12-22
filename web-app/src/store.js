import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './features/login/LoginSlice';
import popupReducer from './features/popup/popupSlice'

export default configureStore({
    reducer: {
        login: loginReducer,
        popup: popupReducer
    }
})