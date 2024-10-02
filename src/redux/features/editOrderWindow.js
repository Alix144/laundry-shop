import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

export const editOrderWindowSlice = createSlice({
    name: 'editOrderWindow',
    initialState,
    reducers: {
        setToFalse: (state) => {
         state.value = false
        },
        setToTrue: (state) => {
         state.value = true
        },
    },
})

export const { setToFalse, setToTrue} = editOrderWindowSlice.actions;
export default editOrderWindowSlice.reducer;