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
      const findProduct = state.goods.find(
        (obj) => obj.id === action.payload.id
      )
      if (findProduct) {
        findProduct.count++
      } else {
        state.goods.push({
          ...action.payload,
          count: 1,
        })
      }

      state.totalPrice = state.goods.reduce((sum, obj) => {
        return obj.price * obj.count + sum
      }, 0)
    },
    minusProduct: (state, action) => {
      const findProduct = state.goods.find((obj) => obj.id === action.payload)

      if (findProduct) {
        findProduct.count--
      }

      // state.totalPrice = calcTotalPrice(state.goods)
    },
    removeProduct: (state, action) => {
      state.goods = state.goods.filter((obj) => obj.id !== action.payload)
    },
    clearGoods: (state) => {
      state.goods = []
      state.totalPrice = 0
    },
  },
})

export const { addProduct, minusProduct, removeProduct, clearGoods } =
  cartSlice.actions

export default cartSlice.reducer
