import React, { useState } from 'react'
import styles from './searchTermsInputs.module.css'

const ArrivalInput = ({ updateSearch }) => {
  const [arrival, setArrival] = useState('')

  const setArrivalDate = (date) => {
    setArrival(date)
    updateSearch({ type: 'arrival', value: date })
  }

  return (
    <input
      className={styles.input}
      type='date'
      name='arrival'
      id='arrival'
      value={arrival}
      onChange={(e) => setArrivalDate(e.target.value)}
    />
  )
}

export default ArrivalInput
