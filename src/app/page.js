"use client";
import { useEffect, useRef, useState } from 'react';
import Navlink from './components/navbar/navlink/navlink';
import Image from 'next/image';
import { handleLogout } from '@/app/lib/action';
import Link from 'next/link';

const links = [
  {
      title: "Home",
      path: "/"
  },
  {
      title: "About",
      path: "/about"
  },
  {
      title: "Contact",
      path: "/contact"
  },
  {
      title: "Blog",
      path: "/blog"
  }
];

const Page = ({ session }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const imgRef = useRef();

  // Adding event listener inside useEffect
  useEffect(() => {
    const handleClickOutside = (e) => {
      if(e.target !== menuRef.current && e.target !== imgRef.current){
          setOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []); // Empty dependency array to ensure the effect only runs once

  // TEMPORARY
  const isAdmin = true;

  return (
    <div>
      <div className='lg:flex items-center gap-3 hidden'>
          {links.map((link => (
              <Navlink item={link} key={link.title}/>
          )))}{session?.user ? (
              <>      
              {session?.user?.isAdmin && <Navlink item={{title:"Admin",path:"/admin"}}/>}
              <form action={handleLogout}>
                <button className='bg-yellow-600 rounded-md p-3 m-2 text-black font-bold'>Logout</button>
              </form>
              </>
          ) : (
            <Navlink item={{title:"Login",path:"/login"}}/>
          )}
      </div>
      <Image ref={imgRef} className='lg:hidden cursor-pointer' src="/menu.png" alt=" " width={30} height={30} onClick={() => setOpen(!open)} />
      {open && (
        <div ref={menuRef} onClick={() => setOpen(false)} className='absolute z-20 h-[85%] rounded-xl top-24 lg:hidden right-0 w-[50%] flex flex-col items-center justify-center gap-3  bg-stone-900'>
          {links.map((link => (
              <Navlink  item={link} key={link.title}/>
          )))}{session?.user ? (
              <>      
              {session?.user?.isAdmin && <Navlink item={{title:"Admin",path:"/admin"}}/>}
              <form action={handleLogout}>
                <button className='bg-yellow-600 rounded-md p-3 m-2 text-black font-bold'>Logout</button>
              </form>
              </>
          ) : (
            <Navlink item={{title:"Login",path:"/login"}}/>
          )}
        </div>
      )}
      <div className="flex gap-5 mt-5">
        <div className="flex-1 flex flex-col gap-12 ">
          <h1 className="md:text-6xl text-5xl p-[3px] bg-gradient-to-r from-yellow-600 to-white text-transparent bg-clip-text">Creative Thoughts Agency</h1>
          <p className="md:text-lg text-md">Creativity is seeing what everyone else has seen, and thinking what no one else has thought</p>
          <div  className="flex md:gap-5 gap-2">
            <Link legacyBehavior href="/about"><a className="p-5 min-w-32 cursor-pointer border-none border-spacing-1 text-black font-semibold rounded-md bg-yellow-600">Learn More</a></Link>
            <Link href="/contact"><button className="p-5 text-black font-semibold min-w-32 cursor-pointer border-none border-spacing-1 rounded-md bg-white ">Contact</button></Link>
          </div>
          <div className=" md:w-[500px] md:w[200px] h-[50px] relative grayscale">
            <Image src="/brands.png" alt="brands" fill/>
          </div>
        </div> 
        <div className="relative w-56  h-96 flex-1"><Image src="/hero.gif" alt="hero" fill/></div>
      </div>
    </div>
  );
};

export default Page;
