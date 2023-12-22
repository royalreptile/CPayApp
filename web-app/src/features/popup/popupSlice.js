import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
    name:'popup',
    initialState: {
        show:false
    },
    reducers: {
        toggle: (state) => {
            return { show: !state.show }
        }
    }
})
export const connectPopupState = (state) => {
    return state.popup.show
}
export const { toggle } = popupSlice.actions;
export default popupSlice.reducer;