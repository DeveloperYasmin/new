import Link from "next/link"
import Links from "./links/Links"
import { auth } from "@/app/lib/auth";

const Navbar = async () => {

  const session = await auth();

  return (
    <div className= {""}>
      <Link href="/" >Logo</Link>
      <div>
        <Links session={session}/>
      </div>
    </div>
  )
}

export default Navbar