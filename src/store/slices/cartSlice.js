import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  goods: [],
  totalPrice: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.goods.push(action.payload)
    },
    removeProduct: (state, action) => {
      state.goods = state.goods.filter((obj) => obj._id !== action.payload)
    },
    clearGoods: (state) => {
      state.goods = []
    },
  },
})

export const { addProduct, removeProduct, clearGoods } = cartSlice.actions

export default cartSlice.reducer
