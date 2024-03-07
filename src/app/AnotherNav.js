"use client"
import Link from "next/link"
import { auth } from "@/app/lib/auth"
import { useRef, useState } from "react"
import Image from "next/image"


const Navbar = ({session})=> {
  const [open,setopen]=useState(false)
    const Menuref=useRef()
    const Imgref=useRef()
    console.log(session)
    if(typeof window !== 'undefined')
{
    window.addEventListener("click",(e)=>{
        if(e.target !== Menuref.current && e.target !== Imgref.current){
            setopen(false) 
        }
    })}
    const isAdmin=true

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
      {session?.user?(
            <>      
            {session?.user?.isAdmin &&  <li><Link className="  hover:bg-yellow-500 hover:text-black  min-w-24 p-2 rounded-full font-medium text-center" href="/admin">Admin</Link></li>
}
            <form action={handleLogout}>
             <button className='bg-yellow-600 rounded-md p-3 m-2 text-black font-bold'>Logout</button>
             </form>
             </>

        ):(
        <Navlink item={{title:"Login",path:"/login"}}/>
        )}
         </div>
           <Image ref={Imgref} className='lg:hidden cursor-pointer' src="/menu.png" alt=" " width={30} height={30} onClick={()=>setopen(!open)}></Image>
           {
               open && (<div ref={Menuref} onClick={()=>setopen(false)} className='absolute z-20 h-[85%] rounded-xl top-24 lg:hidden right-0 w-[50%] flex flex-col items-center justify-center gap-3  bg-stone-900'>
      
      <ul>
        <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li> 
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/blog">Blog</Link></li> 

      </ul>
         
                         </div>
           )}
           </div>
  )
}

export default AnotherNav
