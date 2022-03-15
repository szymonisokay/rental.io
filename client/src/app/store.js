import { configureStore } from '@reduxjs/toolkit'
import ListingsReducer from '../features/Listings'

const store = configureStore({
  reducer: {
    listings: ListingsReducer,
  },
})

export default store
