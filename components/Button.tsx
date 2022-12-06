import React from 'react'

type Props = {
   className: string
    value: string
}

const Button = ({ value, className}:Props) => {
  return (

    <button  className={className}>{value}</button>
    
  )
}

export default Button