"use client"

import {useFormState} from "react-dom"
import { login } from "@/app/lib/action"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

const LoginForm = () => {

    const [state,formAction]=useFormState(login,undefined)
    const router=useRouter()

    // useEffect(() =>{
    //     state?.success && router.push("/login")
    // }, [state?.success,router])
  return (
    <form className="flex flex-col text-center gap-8" action={formAction}>
    <input className=" p-5 bg-stone-500 text-white border-none rounded-md"  type="text" placeholder="username" name="username"/>
    <input className=" p-5 bg-stone-500 text-white border-none rounded-md" type="password" placeholder="password" name="password"/>
    <button className="p-5 cursor-pointer bg-yellow-500 text-black font-bold border-none rounded-md">Login</button>
    {state?.error}
<Link href="/register">{"Don't have an account?"}<b>Register</b></Link>
</form>
  )
}

export default LoginForm