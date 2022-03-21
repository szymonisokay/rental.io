import React, { useEffect } from 'react'
import styles from './Listings.module.css'

import { useDispatch, useSelector } from 'react-redux'
import { getListings } from '../../features/Listings'
import SingleListing from './SingleListing'

const Listings = ({ limit }) => {
  const dispatch = useDispatch()
  const listings = useSelector((state) => state.listings)

  useEffect(() => {
    dispatch(getListings({ limit }))
  }, [dispatch, limit])

  if (listings.status === 'loading')
    return (
      <div className={styles.loading_container}>
        <div className={styles.loading_box}>
          <div></div>
          <span></span>
          <span></span>
        </div>
      </div>
    )

  if (listings.status === 'success')
    return (
      <div className={styles.listings_container}>
        {listings.value.map((listing) => (
          <SingleListing key={listing._id} listing={listing} />
        ))}
      </div>
    )
}

export default Listings
