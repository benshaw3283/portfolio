import Image from "next/image";
import snip from "../public/nbadaily.PNG";
import box from "../public/nbadailybox.PNG";

const Extension = () => {
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
      <div className="order-2 flex flex-row py-2 justify-center gap-2">
        <button
          className="order-1 flex btn-shine hover:scale-105 bg-black  shadow-purple-500  shadow-inner border border-purple-500 rounded-lg text-white items-center p-1"
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
          className="order-2 flex btn-shine hover:scale-105 bg-black shadow-purple-500  shadow-inner border border-purple-500 rounded-lg text-white items-center p-1"
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
      <div className="order-3 flex border-2 w-5/6 lg:w-full place-self-center justify-center">
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
