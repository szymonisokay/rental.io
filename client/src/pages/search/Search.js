import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import styles from './Search.module.css'

import Listings from '../../components/listings/Listings'
import Filters from '../../components/filters/Filters'
import Sort from '../../components/sort/Sort'

import { getListings } from '../../features/Listings'

import { useDispatch } from 'react-redux'

const Search = () => {
  const [params] = useSearchParams()
  const searchParams = Object.fromEntries([...params])

  const dispatch = useDispatch()

  const setSortOption = (method) => {
    dispatch(getListings({ limit: 12, sort: method, searchParams }))
  }

  useEffect(() => {
    dispatch(getListings({ searchParams }))
  }, [])

  return (
    <div
      className='container'
      style={{ paddingTop: '100px', paddingBottom: '20px' }}
    >
      <div style={{ width: '100%' }}>
        <div className={styles.controls}>
          <Filters />
          <Sort setSortOption={setSortOption} />
        </div>
        <Listings limit={12} />
      </div>
    </div>
  )
}

export default Search
