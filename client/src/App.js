import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { getListings } from './features/Listings'

const App = () => {
  const listings = useSelector((state) => state.listings)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getListings({ limit: 3 }))
  }, [dispatch])

  console.log(listings)

  return (
    <div>
      {listings.status === 'success' &&
        listings.value.map((listing) => <h1>{listing.name}</h1>)}
    </div>
  )
}

export default App
