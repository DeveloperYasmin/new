import { Suspense } from "react";
import AdminPosts from "../components/adminPosts/adminPosts";
import AdminPostForm from "../components/adminPostForm/adminPostForm";
import AdminUsers from "../components/adminUsers/adminUsers";
import AdminUserForm from "../components/adminUserForm/adminUsersForm";
import { auth } from "../lib/auth";

const AdminPage = async () => {

  const session = await auth();

  return (
    <div className= {""}>
      <div >
        <div >
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div >
          <AdminPostForm userId = {session?.user?.id} />
        </div>
      </div>
      <div >
        <div >
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div >
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;