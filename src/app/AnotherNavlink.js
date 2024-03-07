"use client"
import Link from "next/link"
import Image from "next/image"
import { auth } from "@/app/lib/auth"
import AnotherNav from "./AnotherNav"

const AnotherNavlink = async() => {
  const session= await auth()
  return (
    <div className="h-24 flex items-center justify-between">
    <AnotherNav session={session}/></div>
    
  )
}

export default AnotherNavlink
