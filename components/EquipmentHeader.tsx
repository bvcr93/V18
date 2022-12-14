import React from 'react'

type Props = {
    headerCategory: string
    category: string
}

const EquipmentHeader = ({headerCategory, category}: Props) => {
  return (
    <header className="h-[300px] flex flex-col  justify-center space-y-8">
    <h1 className="text-slate-700">{headerCategory}</h1>
    <h1 className="text-6xl text-slate-800 font-bold">{category}</h1>
    <p>Tents</p>
  </header>
  )
}

export default EquipmentHeader