"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Links from "../links/Links"

const Navlink = ({item}) => {

    const pathName=usePathname()
  return (
    <div className="min-w-24 p-3  font-medium text-center">
      <Links/>
      <h1>Home</h1>
     <h1>About</h1>

    </div>
  )
}

export default Navlink