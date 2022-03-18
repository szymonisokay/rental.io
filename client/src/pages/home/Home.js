import React, { useState } from 'react'
import styles from './Home.module.css'
import HomeSearchTerms from '../../components/homeSearchTerms/HomeSearchTerms'

const Home = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero_cover}></div>
      </div>
      <div className='container'>
        <HomeSearchTerms />
      </div>
    </>
  )
}

export default Home
