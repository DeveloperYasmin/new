import { deletePost } from "@/app/lib/action";
import { getPosts } from "@/app/lib/data"


const AdminPosts = async() => {

    const posts=await getPosts()

  
    return (
      <div >
      <h1 className="text-2xl text-yellow-500" >Posts</h1>
      {posts.map((post)=>(
        <div className=" m-5 flex items-center justify-between gap-5" key={post.id}>
            <div className="tems-center flex gap-5">
                <span >{post.title}</span> 
        </div>
        <form action={deletePost}>

            <input type="hidden" name="id" value={post.id}/>
            <button className="p-1 bg-yellow-500 rounded-md border-none cursor-pointer">Delete</button>
        </form>
        </div>
      ))}
      
      </div>
    )
  }
  
  export default AdminPosts