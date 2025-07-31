import Image from "next/image";
import ms from "../public/messengerstats.png";
import { useStore } from './Theme'

const Messengerstats = () => {
  const { theme } = useStore()
  return (
    <div className="flex flex-col">
      <div className="order-1 place-self-center pb-6 flex justify-center">
        <h1 className=" font-Chillax text-center text-4xl lg:text-5xl font-semibold tracking-wider dark:text-white text-white flex ">
          Messenger Stats
        </h1>
      </div>
      <div className="order-2 flex flex-row py-2 justify-center gap-2">
        <button
          className={`order-1 flex bg-black border-2 ${theme === 'red-500' ? 'border-red-500 hover:border-red-400 hover:from-red-900 hover:to-red-500 shadow-[0_0_1rem_-0.25rem_#ef4444] hover:shadow-[0_0_2rem_-0.5rem_#ef4444]' : theme === 'blue-500' ? 'border-blue-500 hover:border-blue-400 hover:from-blue-900 hover:to-blue-500 shadow-[0_0_1rem_-0.25rem_#3b82f6] hover:shadow-[0_0_2rem_-0.5rem_#3b82f6]' : theme === 'green-500' ? 'border-green-500 hover:border-green-400 hover:from-green-900 hover:to-green-500 shadow-[0_0_1rem_-0.25rem_#22c55e] hover:shadow-[0_0_2rem_-0.5rem_#22c55e]' : theme === 'yellow-500' ? 'border-yellow-500 hover:border-yellow-400 hover:from-yellow-900 hover:to-yellow-500 shadow-[0_0_1rem_-0.25rem_#eab308] hover:shadow-[0_0_2rem_-0.5rem_#eab308]' : 'border-purple-500 hover:border-purple-400 hover:from-purple-900 hover:to-purple-500 shadow-[0_0_1rem_-0.25rem_#a855f7] hover:shadow-[0_0_2rem_-0.5rem_#a855f7]'} backdrop-blur-sm text-white font-bold rounded-lg items-center p-2 transition-all duration-500 hover:animate-pulse hover:scale-105 relative overflow-hidden hover:bg-gradient-to-r group`}
          onClick={() => window.open("https://messengerstats.com", "_blank")}
        >
          <p className="font-bold text-xl">Website</p>
        </button>
        <button
          className={`order-2 flex bg-black border-2 ${theme === 'red-500' ? 'border-red-500 hover:border-red-400 hover:from-red-900 hover:to-red-500 shadow-[0_0_1rem_-0.25rem_#ef4444] hover:shadow-[0_0_2rem_-0.5rem_#ef4444]' : theme === 'blue-500' ? 'border-blue-500 hover:border-blue-400 hover:from-blue-900 hover:to-blue-500 shadow-[0_0_1rem_-0.25rem_#3b82f6] hover:shadow-[0_0_2rem_-0.5rem_#3b82f6]' : theme === 'green-500' ? 'border-green-500 hover:border-green-400 hover:from-green-900 hover:to-green-500 shadow-[0_0_1rem_-0.25rem_#22c55e] hover:shadow-[0_0_2rem_-0.5rem_#22c55e]' : theme === 'yellow-500' ? 'border-yellow-500 hover:border-yellow-400 hover:from-yellow-900 hover:to-yellow-500 shadow-[0_0_1rem_-0.25rem_#eab308] hover:shadow-[0_0_2rem_-0.5rem_#eab308]' : 'border-purple-500 hover:border-purple-400 hover:from-purple-900 hover:to-purple-500 shadow-[0_0_1rem_-0.25rem_#a855f7] hover:shadow-[0_0_2rem_-0.5rem_#a855f7]'} backdrop-blur-sm text-white font-bold rounded-lg items-center p-2 transition-all duration-500 hover:animate-pulse hover:scale-105 relative overflow-hidden hover:bg-gradient-to-r group`}
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
      <div className="order-3 flex border border-slate-800  w-5/6 lg:w-full place-self-center justify-center">
        <Image alt="messengerstats" src={ms} />
      </div>
    </div>
  );
};

export default Messengerstats;
