import Image from "next/image";
import snip from "../public/nbadaily.PNG";
import box from "../public/nbadailybox.PNG";
import { useStore } from './Theme'

const Extension = () => {
  const { theme } = useStore()
  return (
    <div className="flex flex-col">
      <div className="order-1 place-self-center  flex justify-center">
        <h1 className="font-Chillax tracking-wide lg:text-5xl font-semibold text-4xl dark:text-white text-white flex ">
          NBA Daily
        </h1>
      </div>
      <div className="order-2 place-self-center flex justify-center">
        <h2 className="text-gray-400 text-xs flex">Chrome Extension</h2>
      </div>
      <div className='order-3 items-center flex flex-row justify-center lg:gap-10 gap-4 lg:text-lg text-sm pt-1'>
        
   <p className='text-white font-semibold'>400+ Daily Users</p> 
       
       <div className='flex-row flex items-center gap-1'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gold" className="h-4 w-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>

        <p className='text-white font-semibold'>5 </p> <p className='text-white font-semibold w-0 lg:w-auto invisible lg:visible'>Rated</p>
        </div>
   
      </div>
      <div className="order-3 flex flex-row py-2 justify-center gap-2">
        <button
          className={`order-1 flex bg-black border-2 ${theme === 'red-500' ? 'border-red-500 hover:border-red-400 hover:from-red-900 hover:to-red-500 shadow-[0_0_1rem_-0.25rem_#ef4444] hover:shadow-[0_0_2rem_-0.5rem_#ef4444]' : theme === 'blue-500' ? 'border-blue-500 hover:border-blue-400 hover:from-blue-900 hover:to-blue-500 shadow-[0_0_1rem_-0.25rem_#3b82f6] hover:shadow-[0_0_2rem_-0.5rem_#3b82f6]' : theme === 'green-500' ? 'border-green-500 hover:border-green-400 hover:from-green-900 hover:to-green-500 shadow-[0_0_1rem_-0.25rem_#22c55e] hover:shadow-[0_0_2rem_-0.5rem_#22c55e]' : theme === 'yellow-500' ? 'border-yellow-500 hover:border-yellow-400 hover:from-yellow-900 hover:to-yellow-500 shadow-[0_0_1rem_-0.25rem_#eab308] hover:shadow-[0_0_2rem_-0.5rem_#eab308]' : 'border-purple-500 hover:border-purple-400 hover:from-purple-900 hover:to-purple-500 shadow-[0_0_1rem_-0.25rem_#a855f7] hover:shadow-[0_0_2rem_-0.5rem_#a855f7]'} backdrop-blur-sm text-white font-bold rounded-lg items-center p-2 transition-all duration-500 hover:animate-pulse hover:scale-105 relative overflow-hidden hover:bg-gradient-to-r group`}
          onClick={() =>
            window.open(
              "https://chrome.google.com/webstore/detail/nba-daily/eplagjpgcidlidnopgeakefijdkjjjbd",
              "_blank"
            )
          }
        >
          <p className="font-bold text-xl">Download</p>
        </button>
        <button
          className={`order-2 flex bg-black border-2 ${theme === 'red-500' ? 'border-red-500 hover:border-red-400 hover:from-red-900 hover:to-red-500 shadow-[0_0_1rem_-0.25rem_#ef4444] hover:shadow-[0_0_2rem_-0.5rem_#ef4444]' : theme === 'blue-500' ? 'border-blue-500 hover:border-blue-400 hover:from-blue-900 hover:to-blue-500 shadow-[0_0_1rem_-0.25rem_#3b82f6] hover:shadow-[0_0_2rem_-0.5rem_#3b82f6]' : theme === 'green-500' ? 'border-green-500 hover:border-green-400 hover:from-green-900 hover:to-green-500 shadow-[0_0_1rem_-0.25rem_#22c55e] hover:shadow-[0_0_2rem_-0.5rem_#22c55e]' : theme === 'yellow-500' ? 'border-yellow-500 hover:border-yellow-400 hover:from-yellow-900 hover:to-yellow-500 shadow-[0_0_1rem_-0.25rem_#eab308] hover:shadow-[0_0_2rem_-0.5rem_#eab308]' : 'border-purple-500 hover:border-purple-400 hover:from-purple-900 hover:to-purple-500 shadow-[0_0_1rem_-0.25rem_#a855f7] hover:shadow-[0_0_2rem_-0.5rem_#a855f7]'} backdrop-blur-sm text-white font-bold rounded-lg items-center p-2 transition-all duration-500 hover:animate-pulse hover:scale-105 relative overflow-hidden hover:bg-gradient-to-r group`}
          onClick={() =>
            window.open(
              "https://github.com/benshaw3283/nba-extension",
              "_blank"
            )
          }
        >
          <p className="font-bold text-xl">Github</p>
        </button>
      </div>
      <div className="order-3 rounded-lg flex lg:gap-2 gap-0 w-5/6 lg:w-full place-self-center justify-center">
        <Image alt="extension" src={snip} className="lg:w-1/2 w-full" />
        <Image
          alt="box"
          src={box}
          className="lg:w-1/2 lg:visible absolute lg:relative invisible"
        />
      </div>
    </div>
  );
};

export default Extension;
