import { getUsers } from "@/app/lib/data";
import Image from "next/image";
import { deleteUser } from "@/app/lib/action";

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div className= {""}>
      <h1>Users</h1>
      {users.map((user) => (
        <div  key={user.id}>
          <div >
            <Image
              src={user.img || "/noAvatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span>{user.username}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <button >Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;