"use client"

import React from 'react'
import {usePathname} from "next/navigation"
import { categories } from '../constants'
import NavLink from './NavLink'
const NavLinks = () => {
    const pathname = usePathname()

    const isActive =(path: string) => {
return pathname?.split("/").pop() === path
    }
    return (
        <div>{categories.map((category) => (
            <NavLink key={category} category={category} isActive={isActive(category)} />
        ))}</div>
    )
}

export default NavLinks