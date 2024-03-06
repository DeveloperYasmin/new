import Link from "next/link"
import Links from "./links/Links"
import Image from "next/image"
import { auth } from "@/app/lib/auth"

const Navbar = async() => {
  const session= await auth()
  return (
    <div className="h-24 flex items-center justify-between">
    <div className="font-bold text-3xl">
      <Link href="/"><Image src="/logo.png" width={130} height={160}/></Link>
    </div>
    <div><Links session={session}/></div>
    </div>
  )
}

export default Navbar