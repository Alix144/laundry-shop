import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

export const orderDetailsWindowSlice = createSlice({
    name: 'orderDetailsWindow',
    initialState,
    reducers: {
        setDetailsWindowToTrue: (state) => {
         state.value = true
        },
        setDetailsWindowToFalse: (state) => {
         state.value = false
        },
    },
})

export const { setDetailsWindowToTrue, setDetailsWindowToFalse} = orderDetailsWindowSlice.actions;
export default orderDetailsWindowSlice.reducer;