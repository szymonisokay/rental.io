import { configureStore } from '@reduxjs/toolkit'
import ListingsReducer from '../features/Listings'
import SearchReducer from '../features/SearchTerm'

const store = configureStore({
  reducer: {
    listings: ListingsReducer,
    search: SearchReducer,
  },
})

export default store
