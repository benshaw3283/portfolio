import Image from "next/image";
import sr from "@/public/srpcsnip.PNG";

const ShawReviews = () => {
  return (
    <div className="flex flex-col">
      <div className="order-1 place-self-center pb-6 flex justify-center">
        <h1 className=" font-Chillax text-4xl lg:text-5xl font-semibold tracking-wider dark:text-white text-white flex ">
          ShawReviews
        </h1>
      </div>
      <div className="order-2 flex flex-row py-2 justify-center gap-2">
        <button
          className="btn-shine hover:scale-105 bg-black order-1 flex shadow-purple-500  shadow-inner border border-purple-500 rounded-lg text-white items-center p-1"
          onClick={() =>
            window.open("https://shawreviews.vercel.app", "_blank")
          }
        >
          <p className="font-bold text-xl">Website</p>
        </button>
        <button
          className="btn-shine hover:scale-105 bg-black order-2 flex shadow-purple-500  shadow-inner border border-purple-500 rounded-lg p-2 text-white   cursor-pointer"
          onClick={() =>
            window.open(
              "https://github.com/benshaw3283/movie-website",
              "_blank"
            )
          }
        >
          <p className="font-bold text-xl">Github</p>
        </button>
      </div>
      <div className="order-3 flex border-2 w-5/6 lg:w-full place-self-center justify-center">
        <Image alt="shawreviews" src={sr} />
      </div>
    </div>
  );
};

export default ShawReviews;
