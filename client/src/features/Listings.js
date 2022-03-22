import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  value: {},
  status: 'loading',
}
const URL = 'http://localhost:5000/api/listings'

export const getListings = createAsyncThunk(
  'listings/getListings',
  async ({
    limit = 12,
    sort = 'default',
    searchParams = { dest: '', arrival: '', departure: '', people: '' },
  }) => {
    console.log(limit, sort, searchParams)
    return await axios
      .get(`${URL}?limit=${limit}&sort=${sort}&dest=${searchParams.dest}`)
      .then((res) => res.data.listings)
  }
)

const listingsSlice = createSlice({
  name: 'listings',
  initialState,
  extraReducers: {
    [getListings.pending]: (state) => {
      state.status = 'loading'
    },
    [getListings.fulfilled]: (state, action) => {
      state.value = action.payload
      state.status = 'success'
    },
  },
})

export default listingsSlice.reducer
