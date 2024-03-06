import { Suspense } from "react"
import AdminPosts from "../components/adminPosts/adminPosts"
import AdminPostForm from "../components/adminPostForm/adminPostForm"
import AdminUsersForm from "../components/adminUserForm/adminUsersForm"
import AdminUser from "../components/adminUsers/adminUsers"
import { auth } from "../lib/auth"

const Adminpage = async() => {
  const session=await auth()
  return (
    <div className="mt-12 flex flex-col gap-24">
      <div className="flex gap-24">
        <div className="flex-1">
        <Suspense fallback={<div>Loading..</div>}>
          <AdminPosts/>
        </Suspense>
      </div>
    
      <div className="flex-1">
          <AdminPostForm userId={session.user.id}/>
      </div>
</div>
<div className="flex gap-24">
        <div className="flex-1">
        <Suspense fallback={<div>Loading..</div>}>
          <AdminUser/>
        </Suspense>
      </div>
    
      <div className="flex-1">
          <AdminUsersForm/>
      </div>


      </div>
    </div>
  )
}

export default Adminpage