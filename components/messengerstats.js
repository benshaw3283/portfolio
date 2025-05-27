import Image from "next/image";
import ms from "../public/messengerstats.png";

const Messengerstats = () => {
  return (
    <div className="flex flex-col">
      <div className="order-1 place-self-center pb-6 flex justify-center">
        <h1 className=" font-Chillax text-center text-4xl lg:text-5xl font-semibold tracking-wider dark:text-white text-white flex ">
          Messenger Stats
        </h1>
      </div>
      <div className="order-2 flex flex-row py-2 justify-center gap-2">
        <button
          className="order-1 flex bg-black border-2 border-purple-500 shadow-[0_0_1rem_-0.25rem_#a855f7] backdrop-blur-sm text-white font-bold rounded-lg items-center p-2 transition-all duration-500 hover:border-purple-400 hover:animate-pulse hover:scale-105 relative overflow-hidden hover:shadow-[0_0_2rem_-0.5rem_#a855f7] hover:bg-gradient-to-r hover:from-purple-900 hover:to-purple-600 group"
          onClick={() => window.open("https://messengerstats.com", "_blank")}
        >
          <p className="font-bold text-xl">Website</p>
        </button>
        <button
          className="order-2 flex bg-black border-2 border-purple-500 shadow-[0_0_1rem_-0.25rem_#a855f7] backdrop-blur-sm text-white font-bold rounded-lg items-center p-2 transition-all duration-500 hover:border-purple-400 hover:animate-pulse hover:scale-105 relative overflow-hidden hover:shadow-[0_0_2rem_-0.5rem_#a855f7] hover:bg-gradient-to-r hover:from-purple-900 hover:to-purple-600 group"
          onClick={() =>
            window.open(
              "https://github.com/benshaw3283/messengerstats",
              "_blank"
            )
          }
        >
          <p className="font-bold text-xl">Github</p>
        </button>
      </div>
      <div className="order-3 flex border  w-5/6 lg:w-full place-self-center justify-center">
        <Image alt="messengerstats" src={ms} />
      </div>
    </div>
  );
};

export default Messengerstats;
