import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Search = () => {
  const [params] = useSearchParams()
  const searchParams = Object.fromEntries([...params])
  console.log(searchParams['dest'])
  return <div>Search</div>
}

export default Search
