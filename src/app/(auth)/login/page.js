import LoginForm from "@/app/components/loginForm/loginForm"
import Image from "next/image"

const Loginpage = () => {
  return (
      <div>
    
         <div className="flex-1  relative">
       <Image className="object-contain" src="/about.png" alt="pic" fill/>
      </div>
      <div className="w-[500px] mr-[200px] items-center justify-center bg-stone-800  p-12 flex flex-col text-center gap-7 rounded-md">
            <LoginForm/>  
      </div>
      </div>
      
  )}

export default Loginpage