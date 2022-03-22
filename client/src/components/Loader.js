import React from 'react'
import BarLoader from 'react-spinners/BarLoader'

const Loader = ({ loading }) => {
  return (
    <BarLoader
      css={{ display: 'inline-block', margin: '0 auto' }}
      color='#5341ff'
      loading={loading}
    />
  )
}

export default Loader
