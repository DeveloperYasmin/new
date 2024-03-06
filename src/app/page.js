import Image from "next/image"
import Link from "next/link"

const page = () => {
 
  return (
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
      <div className="relative w-56  h-96 flex-1"><Image src="/hero.gif" alt="hero" fill/>
      </div>
      </div>
  )
}

export default page