import React, { useState } from 'react'
import styles from './searchTermsInputs.module.css'

const NumberOfPeopleInput = ({ updateSearch }) => {
  const [people, setPeople] = useState(0)

  const setNumberOfPeople = (people) => {
    setPeople(people)
    updateSearch({ type: 'numberOfPeople', value: people })
  }

  return (
    <input
      className={styles.input}
      type='number'
      name='people'
      id='people'
      value={people}
      placeholder='Number of people'
      onChange={(e) => setNumberOfPeople(e.target.value)}
    />
  )
}

export default NumberOfPeopleInput
