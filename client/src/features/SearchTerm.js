import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    destination: '',
    arrival: null,
    departure: null,
    numberOfPeople: 0,
  },
}

const SearchTermSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.value[action.payload.type] = action.payload.value
    },
  },
})

export const { setSearchTerm } = SearchTermSlice.actions

export default SearchTermSlice.reducer
