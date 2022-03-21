import React from 'react'
import styles from './Home.module.css'
import HomeSearchTerms from '../../components/homeSearchTerms/HomeSearchTerms'
import Listings from '../../components/listings/Listings'

const Home = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero_cover}></div>
        <div className='container'>
          <HomeSearchTerms />
        </div>
      </div>
      <div className='container'>
        <div className={styles.listings}>
          <h2>Newest listings</h2>
          <Listings limit={6} />
        </div>
      </div>
    </>
  )
}

export default Home
