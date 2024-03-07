import { useRef, useState } from "react"
import Image from "next/image"


const Imp = ()=> {
  
 

  return (
    <div>
      
    <div className="lg:flex "> 
      <ul className='lg:flex items-center gap-8 hidden'>
       <li className="mr-[650px]"> <Link href="/"><Image className="font-bold text-3xl flex " src="/logo.png" width={130} height={160}/></Link> </li>
        <li ><Link className="  hover:bg-yellow-500  hover:text-black  min-w-24 p-2 rounded-full font-medium text-center" href="/">Home</Link></li>
          <li><Link className="  hover:bg-yellow-500 hover:text-black  min-w-24 p-2 rounded-full font-medium text-center"  href="/about">About</Link></li> 
          <li><Link className="  hover:bg-yellow-500 hover:text-black  min-w-24 p-2 rounded-full font-medium text-center" href="/contact">Contact</Link></li>
          <li><Link className="  hover:bg-yellow-500 hover:text-black  min-w-24 p-2 rounded-full font-medium text-center" href="/blog">Blog</Link></li> 

      </ul>
      </div></div>)}

      export default Imp
