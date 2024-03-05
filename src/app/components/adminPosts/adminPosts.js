import { getPosts } from "@/app/lib/data";
import Image from "next/image";
import { deletePost } from "@/app/lib/action";

const AdminPosts = async () => {
  const posts = await getPosts();

  return (
    <div className= {""}>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div  key={post.id}>
          <div >
            <Image
              src={post.img || "/noAvatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span >{post.title}</span>
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button >Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;