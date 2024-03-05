import Image from "next/image"
import Link from "next/link"

const Postcard = ({post}) => {
  return (
    <div className="flex flex-col gap-5 mb-5 ">
       <div className=" flex mt-12">
       {post.img && <div className=" w-4/5 h-96 relative">
         <Image className="object-cover" src={post.img} alt="" fill/>
        </div>}
        <span className="text-sm rotate-[270deg] m-auto font-sans">24-02-2024</span>
       </div>
       <div className="">
        <h1 className="text-2xl mb-5 w-[90%]">{post.title}</h1>
        <p className="mb-5 w-[90%] font-light text-gray-500">{post.body}</p>
        <Link className="underline" href={`/blog/${post.slug}`}>READ MORE</Link>
       </div>
       </div>
    
  )
}

export default Postcard