import React from 'react'

type Props = {}

const SearchField = (props: Props) => {
  return (
    <div className='border w-full p-3 mx-auto'>
        <input type="text" placeholder='Search...' className='outline-none' />
    </div>
  )
}

export default SearchField