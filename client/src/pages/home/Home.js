import React, { useState } from 'react'
import styles from './Home.module.css'
import countries from 'countries-list'

const Home = () => {
  const countryCodes = Object.keys(countries.countries)
  const countryNames = countryCodes.map(
    (code) => countries.countries[code].name
  )

  const [destination, setDestination] = useState('')
  const [countriesList, setCountriesList] = useState([])

  const onDestinationChange = (dest) => {
    setDestination(dest)

    const localNames = countryNames.filter((c) =>
      c.toLowerCase().includes(destination.toLocaleLowerCase())
    )

    if (destination.length < 2) return

    setCountriesList(localNames)
  }

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero_cover}></div>
      </div>
      <div className='container'>
        <div className={styles.searchbox_container}>
          <h2>Find your ideal apartment:</h2>
          <div className={styles.search_terms}>
            <input
              type='text'
              name='destination'
              id='destination'
              value={destination}
              onChange={(e) => onDestinationChange(e.target.value)}
            />
            <div>
              {countriesList.map((c, index) => (
                <p key={index}>{c}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
