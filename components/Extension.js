import Image from "next/image";
import snip from "@/public/extensionSnip.png";
import box from "@/public/box.png";

const Extension = () => {
  return (
    <div className="flex flex-col">
      <div className="order-1 place-self-center  flex justify-center">
        <h1 className="font-semibold text-3xl dark:text-white text-white flex ">
          NBA Daily
        </h1>
      </div>
      <div className="order-2 place-self-center flex justify-center">
        <h2 className="text-gray-400 text-xs flex">Chrome Extension</h2>
      </div>
      <div className="order-2 flex flex-row py-2 justify-evenly">
        <div
          className="order-1 flex bg-violet-500 hover:bg-white rounded-lg p-2 border-2 border-white text-white  hover:border-violet-500 hover:text-violet-500 cursor-pointer"
          onClick={() =>
            window.open(
              "https://chrome.google.com/webstore/detail/nba-daily/eplagjpgcidlidnopgeakefijdkjjjbd",
              "_blank"
            )
          }
        >
          <p className="font-semibold">Download</p>
        </div>
        <div
          className="order-2 flex bg-violet-500 hover:bg-white rounded-lg p-2 border-2 border-white text-white  hover:border-violet-500 hover:text-violet-500  cursor-pointer"
          onClick={() =>
            window.open(
              "https://github.com/benshaw3283/nba-extension",
              "_blank"
            )
          }
        >
          <p className="font-semibold">Github Repository</p>
        </div>
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
