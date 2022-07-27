import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import filterSlice from './slices/filterSlice'

const rootReducer = combineReducers({
  filter: filterSlice,
  cart: cartSlice,
})

export const store = configureStore({
  reducer: rootReducer,
})
