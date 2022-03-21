import React from 'react'
import styles from './Listings.module.css'

import MapIcon from '@mui/icons-material/Map'

const SingleListing = ({ listing }) => {
  console.log(listing)
  return (
    <div className={styles.listing}>
      <img src={listing.images.picture_url} alt={listing.name} />
      <div className={styles.content}>
        <h2>{listing.name}</h2>
        <div className={styles.meta_data}>
          <MapIcon />
          <span>
            {listing.address.market}, {listing.address.country}
          </span>
          <span className={styles.price}>
            <strong>${listing.price.$numberDecimal}</strong>
          </span>
        </div>
        <p>{listing.description.substr(0, 150)}...</p>
        <div className={styles.actions}>
          <button className={styles.info_btn}>More information</button>
          <button className={styles.rent_btn}>Rent now</button>
        </div>
      </div>
    </div>
  )
}

export default SingleListing
