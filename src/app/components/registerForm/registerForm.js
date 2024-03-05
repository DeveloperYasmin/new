"use client"

import {useFormState} from "react-dom"
import { register } from "@/app/lib/action"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

const RegisterForm = () => {

    const [state,formAction]=useFormState(register,undefined)
    const router=useRouter()

    useEffect(() =>{
        state?.success && router.push("/login")
    }, [state?.success,router])
  return (
    <form className="flex flex-col text-center gap-8" action={formAction}>
    <input className=" p-5 bg-stone-500 text-white border-none rounded-md"  type="text" placeholder="username" name="username"/>
    <input className=" p-5 bg-stone-500 text-white border-none rounded-md" type="text" placeholder="email" name="email"/>
    <input className=" p-5 bg-stone-500 text-white border-none rounded-md" type="text" placeholder="password" name="password"/>
    <input className=" p-5 bg-stone-500 text-white border-none rounded-md" type="text" placeholder="password again" name="passwordRepeat"/>
    <button className="p-5 cursor-pointer bg-yellow-500 text-black font-bold border-none rounded-md">Register</button>
    {state?.error}
<Link href="/login">Have an account? <b>Login</b></Link>
</form>
  )
}

export default RegisterForm