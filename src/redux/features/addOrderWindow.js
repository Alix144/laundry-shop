import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

export const addOrderWindowSlice = createSlice({
    name: 'addOrderWindow',
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

export const { setToFalse, setToTrue} = addOrderWindowSlice.actions;
export default addOrderWindowSlice.reducer;