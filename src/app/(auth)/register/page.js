import RegisterForm from "@/app/components/registerForm/registerForm"

const Registerpage = () => {
  return (
    <div className="flex items-center justify-center">
        <div className=" w-[500px] bg-stone-900 p-12 flex flex-col text-center gap-8 rounded-md">
          <RegisterForm/>
       </div>
    </div>
  )
}

export default Registerpage