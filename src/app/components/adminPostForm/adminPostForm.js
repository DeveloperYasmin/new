"use client"
import { addPost } from "@/app/lib/action"
import {useFormState} from "react-dom"

const AdminPostForm = ({userId}) => {
    const [state,formAction] = useFormState(addPost,undefined)
  return (
    <form action={formAction} className="flex flex-col text-center gap-8 text-black">
        <h1 className="text-2xl text-yellow-500">Add New Post</h1>
        <input  className=" p-5 bg-stone-500 text-white border-none rounded-md" type="hidden" name="userId" value={userId}/>
        <input  className=" p-5 bg-stone-500 text-white border-none rounded-md" type="text" name="title" placeholder="Title"/>
        <input  className=" p-5 bg-stone-500 text-white border-none rounded-md" type="text" name="slug" placeholder="slug"/>
        <input  className=" p-5 bg-stone-500 text-white border-none rounded-md" type="text" name="img" placeholder="img"/>
        <textarea  className=" p-5 bg-stone-500 text-white border-none rounded-md" type="text" name="desc" placeholder="desc" rows={10}/>
        <button className="p-5 cursor-pointer bg-yellow-500 text-black font-bold border-none rounded-md" >Add</button>
        {state && state.error}
        </form>


  )
}

export default AdminPostForm