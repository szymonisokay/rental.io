import React, { useState } from 'react'
import styles from './HomeSearchTerms.module.css'

import countries from 'countries-list'

const HomeSearchTerms = () => {
  const countryCodes = Object.keys(countries.countries)
  const countryNames = countryCodes.map(
    (code) => countries.countries[code].name
  )

  const [destination, setDestination] = useState('')
  const [countriesList, setCountriesList] = useState([])

  const onDestinationChange = (dest) => {
    setDestination(dest)

    setCountriesList(filterCountries(dest))

    if (dest.length === 0) setCountriesList([])
  }

  const filterCountries = (term) => {
    const countries = countryNames.filter((c) =>
      c.toLocaleLowerCase().includes(term.toLocaleLowerCase())
    )

    return countries
  }

  return (
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
  )
}

export default HomeSearchTerms
