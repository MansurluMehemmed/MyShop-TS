import { configureStore } from '@reduxjs/toolkit'
import fetchReducer from './FetchSlice'
export const store = configureStore({
  reducer: {
    fetch:fetchReducer
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch