import Image from "next/image"
import PostUser from "@/app/components/postuser/postuser"
import { Suspense } from "react"
import { getPost} from "@/app/lib/data"
//FETCH WITH AN API
const getdata=async (slug)=>{

  const res = await fetch(`https://yasminagency.vercel.app/api/blog/${slug}`);
    if(!res.ok)
    {
    return{error:"Something went wrong"}
    }
  
   return res.json()
  }

export const generateMetadata = async({params}) =>{
  const {slug} =params
   const post = await getPost(slug)
   return {
   title:post?.title,
   description:post?.desc
   }
}

const Singlepostpage = async ({params}) => {
const {slug}=params
//FETCH WITH AN API
    const post =await getdata(slug)

    //FETCH WITHOUT AN API
    // const post= await getPost(slug)
  return (
    <div className="flex gap-24">
        {post.img &&( <div className="flex-1 relative">
            <Image src={post.img} alt="" width={400} height={100} className="object-cover"/>
        </div>)}
        <div className="flex-[2] flex-col gap-12 flex">
            <h1 className="text-6xl text-yellow-600">{post?.title}</h1>
            <div className="flex  gap-4">
              {post && <Suspense fallback={<div>Loading..</div>}>
                <PostUser userId={post?.userId}/>
                </Suspense>}
                <div className="flex flex-col gap-3">
                    <span className="text-gray-500 font-bold">Published</span>
                    <span className="font-medium font-sans">{post.createdAt?.toString()?.slice(4,16)}</span>
                </div>
                </div>
                <div className="md:text-lg flex-1 text-md">
                    {post.desc}
                </div>
           
        </div>


    </div>
  )
}

export default Singlepostpage