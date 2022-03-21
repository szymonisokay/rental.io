import React, { useState } from 'react'
import styles from './searchTermsInputs.module.css'

const DepartureInput = ({ updateSearch }) => {
  const [departure, setDeparture] = useState('')

  const setDepartureDate = (date) => {
    setDeparture(date)
    updateSearch({ type: 'departure', value: date })
  }

  return (
    <input
      className={styles.input}
      type='date'
      name='departure'
      id='departure'
      value={departure}
      onChange={(e) => setDepartureDate(e.target.value)}
    />
  )
}

export default DepartureInput
