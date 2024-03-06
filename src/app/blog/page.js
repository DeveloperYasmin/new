import Postcard from "@/app/components/postcard/postcard"
import { getPosts } from "../lib/data"

//FETCH WITH AN API
const getdata=async ()=>{
  const res = await fetch("https://yasminagency.vercel.app/api/blog", {next:{revalidate:3600}});
   
  if(!res.ok)
  throw new Error("Something went wrong")

 return res.json()
}
const blogpage = async () => {
  //FETCH WITH AN API
 // const posts= await getdata()

 //FETCH WITHOUT AN API
  const posts= await getPosts()
  return (
    <div className="flex flex-wrap gap-7">
      {posts.map((post)=>(<div className="md:w-[40%] lg:max-w-[1280px] md:max-w-[768px] lg:w-[30%] w-full" key={post.id}>
        <Postcard post={post}/>
      </div>))}
      
      
    
    </div>
  )
}

export default blogpage