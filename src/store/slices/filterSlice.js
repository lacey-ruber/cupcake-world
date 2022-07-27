import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sortBy: { path: 'name', order: 'asc' },
  selectedCategories: undefined,
  currentPage: 1,
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload
    },
    setSelectedCategories: (state, action) => {
      state.selectedCategories = action.payload
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
  },
})

export const { setSortBy, setSelectedCategories, setCurrentPage } =
  filterSlice.actions

export default filterSlice.reducer
