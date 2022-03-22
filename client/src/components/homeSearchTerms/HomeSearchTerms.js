import React from 'react'
import styles from './HomeSearchTerms.module.css'
import { setSearchTerm } from '../../features/SearchTerm'
import { useDispatch, useSelector } from 'react-redux'
import DestinationInput from '../searchTermsInputs/DestinationInput'
import DepartureInput from '../searchTermsInputs/DepartureInput'
import ArrivalInput from '../searchTermsInputs/ArrivalInput'
import NumberOfPeopleInput from '../searchTermsInputs/NumberOfPeopleInput'

import { useNavigate } from 'react-router-dom'

const HomeSearchTerms = () => {
  const searchState = useSelector((state) => state.search.value)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const updateSearch = ({ type, value }) => {
    dispatch(setSearchTerm({ type, value }))
  }

  const navigateToSearch = () => {
    navigate(
      `/search?dest=${searchState.destination}&arrival=${searchState.arrival}&departure=${searchState.departure}&people=${searchState.numberOfPeople}`
    )
  }

  return (
    <div className={styles.searchbox_container}>
      <h2>Find your ideal apartment:</h2>
      <div className={styles.search_terms}>
        <div className={styles.input_control}>
          <DestinationInput updateSearch={updateSearch} />
        </div>
        <div className={styles.input_control}>
          <ArrivalInput updateSearch={updateSearch} />
        </div>
        <div className={styles.input_control}>
          <DepartureInput updateSearch={updateSearch} />
        </div>
        <div className={styles.input_control}>
          <NumberOfPeopleInput updateSearch={updateSearch} />
        </div>
      </div>
      <button className={styles.search_btn} onClick={navigateToSearch}>
        Search
      </button>
    </div>
  )
}

export default HomeSearchTerms
