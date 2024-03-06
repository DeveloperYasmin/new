"use client"
import { addUser } from "@/app/lib/action"
import {useFormState} from "react-dom"

const AdminUserForm = () => {
    const [state,formAction] = useFormState(addUser,undefined)
  return (
    <form action={formAction} className="flex flex-col text-center gap-8 text-black">
        <h1 className="text-2xl text-yellow-500" >Add New User</h1>
        <input className=" p-5 bg-stone-500 text-white border-none rounded-md" type="text" name="username" placeholder="username"/>
        <input className=" p-5 bg-stone-500 text-white border-none rounded-md" type="text" name="email" placeholder="email"/>
        <input className=" p-5 bg-stone-500 text-white border-none rounded-md" type="password" name="password" placeholder="password"/>
        <input className=" p-5 bg-stone-500 text-white border-none rounded-md" type="text" name="img" placeholder="img"/>
        <select className=" p-5 bg-stone-500 text-white border-none rounded-md" name="isAdmin">
        <option value="false">Is Admin?</option>
            <option value="false">No</option>
            <option value="true">Yes</option>
                    </select>
        <button className="p-5 cursor-pointer bg-yellow-500 text-black font-bold border-none rounded-md" >Add</button>
        {state && state.error}
        </form>


  )
}

export default AdminUserForm