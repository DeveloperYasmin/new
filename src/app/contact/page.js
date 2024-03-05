import Image from "next/image"
export const metadata = {
  title: "Contact Page",
  description: "Contact Description",
};

const Contactpage = () => {
  return (
    <div className="flex items-center gap-24">
      <div className="flex-1 relative">
        <Image className="object-contain" src="/contact.png" width={400} height={200} alt="img"/>
      </div>
      <div className="flex-1">
        <form action=" " className=" flex-col gap-5 "/>
        <input className="p-5 flex border-spacing-2 border-none outline-none bg-stone-900 md:w-[500px] w-[300px] m-2 rounded-md" type=" text" placeholder="Name and Surname"/>
        <input className="p-5 md:w-[500px] w-[300px] m-2 flex border-spacing-2 border-none outline-none bg-stone-900 rounded-md" type="text" placeholder="Email Address"/>
        <input className="p-5 md:w-[500px] w-[300px] m-2 flex border-spacing-2 border-none outline-none bg-stone-900 rounded-md" type="text" placeholder="Phone Number(optional)"/>
        <textarea className="p-5 md:w-[500px] w-[300px] m-2 flex border-spacing-2 border-none outline-none bg-stone-900 rounded-md"
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Message"
        >
        </textarea>
      <button className="md:w-[500px] w-[300px] m-2 p-5 bg-yellow-600 font-semibold border-none border-spacing-2 cursor-pointer rounded-md text-black">Send</button>
      </div>
    </div>
  )
}

export default Contactpage