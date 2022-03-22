import React, { useEffect } from 'react'
import styles from './Listings.module.css'

import { useDispatch, useSelector } from 'react-redux'
import { getListings } from '../../features/Listings'
import SingleListing from './SingleListing'
import Loader from '../Loader'

const Listings = ({ limit }) => {
  const dispatch = useDispatch()
  const listings = useSelector((state) => state.listings)

  useEffect(() => {
    dispatch(getListings({ limit }))
  }, [dispatch, limit])

  return (
    <div className={styles.listings_container}>
      <Loader loading={listings.status === 'loading'} />
      {listings.status === 'success' &&
        listings.value.map((listing) => (
          <SingleListing key={listing._id} listing={listing} />
        ))}
    </div>
  )
}

export default Listings
