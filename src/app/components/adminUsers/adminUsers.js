import { deleteUser } from "@/app/lib/action";
import { getUsers } from "@/app/lib/data"


const AdminUser = async() => {

    const users=await getUsers()

  
    return (
      <div>
      <h1 className="text-2xl text-yellow-500" >Users</h1>
      {users.map((user)=>(
        <div  className=" m-5 flex items-center justify-between gap-5" key={user.id}>
            <div className="items-center flex gap-5">
                
                <span className="">{user.username}</span> 
        </div>
        <form action={deleteUser}>

            <input type="hidden" name="id" value={user.id}/>
            <button className="p-1 bg-yellow-500 rounded-md border-none cursor-pointer">Delete</button>
        </form>
        </div>
      ))}
      
      </div>
    )
  }
  
  export default AdminUser