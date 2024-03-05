import Image from "next/image";

const Home = () => {
  return (
    <div className={""}>
      <div >
        <h1 >Creative Thoughts Agency.</h1>
        <p >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div >
          <button >Learn More</button>
          <button >Contact</button>
        </div>
        <div >
          <Image src="/brands.png" alt="" fill />
        </div>
      </div>
      
    </div>
  );
};

export default Home;