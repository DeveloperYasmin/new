import Link from "next/link"
import Image from "next/image"
import { auth } from "@/app/lib/auth"
import Loginlink from "./loginlink"

const Loginbar = async() => {
  const session= await auth()
  return (
    <div className="h-24 flex items-center justify-between">
    <div className="font-bold text-3xl">
      <Link href="/"><Image src="/logo.png" alt="" width={130} height={160}/></Link>
    </div>
    <div><Loginlink session={session}/></div>
    </div>
  )
}

export default Loginbar