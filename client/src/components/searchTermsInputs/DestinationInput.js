import React, { useState } from 'react'
import styles from './searchTermsInputs.module.css'

import countries from 'countries-list'

const DestinationInput = ({ updateSearch }) => {
  const [destination, setDestination] = useState('')
  const [countriesList, setCountriesList] = useState([])

  const countryCodes = Object.keys(countries.countries)
  const countryNames = countryCodes.map(
    (code) => countries.countries[code].name
  )

  const onDestinationChange = (dest) => {
    setDestination(dest)
    onSelectDestination(dest)

    setCountriesList(filterCountries(dest))

    if (dest.length === 0) setCountriesList([])
  }

  const filterCountries = (term) => {
    const countries = countryNames.filter((c) =>
      c.toLocaleLowerCase().includes(term.toLocaleLowerCase())
    )

    return countries
  }

  const onSelectDestination = (country) => {
    setDestination(country)
    setCountriesList([])
    updateSearch({ type: 'destination', value: country || destination })
  }

  return (
    <>
      <input
        className={styles.input}
        type='text'
        name='destination'
        id='destination'
        placeholder='Destination'
        value={destination}
        onChange={(e) => onDestinationChange(e.target.value)}
      />
      <div className={styles.country_list}>
        {countriesList.length > 0 &&
          countriesList.map((country, index) => (
            <p
              className={styles.country_list__item}
              key={index}
              onClick={() => onSelectDestination(country)}
            >
              {country}
            </p>
          ))}
        {/* {countriesList.length == 0 && destination.length > 0 && (
            <p className={styles.no_match}>No matching criteria</p>
          )} */}
      </div>
    </>
  )
}

export default DestinationInput
