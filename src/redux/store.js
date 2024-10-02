import { configureStore } from '@reduxjs/toolkit'
import addOrderWindowReducer from '@/redux/features/addOrderWindow'
import editOrderWindowReducer from '@/redux/features/editOrderWindow'
import orderDetailsWindowReducer from '@/redux/features/orderDetailsWindow'

export const store = configureStore({
    reducer: {
      addOrderWindow: addOrderWindowReducer,
      editOrderWindow: editOrderWindowReducer,
      orderDetailsWindow: orderDetailsWindowReducer,
    }
  })
