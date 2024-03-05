import Image from "next/image"
export const metadata = {
  title: "About Page",
  description: "About Description",
};
const Aboutpage = () => {
  return (
    <div className="flex gap-28">
      <div className="flex-1 flex flex-col gap-12">
        <h1 className="text-yellow-500 text-2xl">About Agency </h1>
        <h1 className="md:text-5xl text-3xl ">We create digital ideas that are bigger,bolder,braver and better</h1>
        <p className="text-xl  font-light text-stone-400">We create digital ideas that are bigger,bolder,braver and better.We believe in good ideas flexibility and precission. Our special team best consulting & finance solution provider.Wide range of web and software development services.</p>
    <div className=" md:flex items-center justify-between">
      <div className="flex flex-col gap-2 ">
      <h1 className="text-4xl text-yellow-500 font-sans font-bold">10K+</h1>
      <p>Year of Experience</p>
    </div>
    <div className="flex flex-col gap-2 md:mt-0 mt-4">
      <h1 className="text-4xl text-yellow-500 font-sans font-bold">234K+</h1>
      <p>People Reached</p>
    </div>      <div className="flex flex-col gap-2 md:mt-0 mt-4">
      <h1 className="text-4xl text-yellow-500 font-sans font-bold">9K+</h1>
      <p>Services and plugins</p>
    </div>
      </div>
      </div>
      <div className="flex-1  relative">
       <Image className="object-contain" src="/horse.png" alt="pic" fill/>
      </div>
    </div>
  )
}

export default Aboutpage