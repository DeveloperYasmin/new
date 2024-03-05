import Link from "next/link"
import Image from "next/image"
import { auth } from "@/app/lib/auth"
import Navbar from "./navbar"

const navlink = async() => {
  const session= await auth()
  return (
    <div className="h-24 flex items-center justify-between">
    <Navbar session={session}/></div>
    
  )
}

export default navlink