import Image from "next/image";
import sr from "@/public/srpcsnip.PNG";

const ShawReviews = () => {
  return (
    <div className="flex flex-col">
      <div className="order-1 place-self-center pb-6 flex justify-center">
        <h1 className="font-semibold text-3xl dark:text-white text-white flex ">
          ShawReviews
        </h1>
      </div>
      <div className="order-2 flex flex-row py-2 justify-evenly">
        <div
          className="order-1 flex bg-violet-500 hover:bg-white rounded-lg p-2 border-2 border-white text-white  hover:border-violet-500 hover:text-violet-500 cursor-pointer"
          onClick={() =>
            window.open("https://shawreviews.vercel.app", "_blank")
          }
        >
          <p className="font-semibold">Go to website</p>
        </div>
        <div
          className="order-2 flex bg-violet-500 hover:bg-white rounded-lg p-2 border-2 border-white text-white  hover:border-violet-500 hover:text-violet-500  cursor-pointer"
          onClick={() =>
            window.open(
              "https://github.com/benshaw3283/movie-website",
              "_blank"
            )
          }
        >
          <p className="font-semibold">Github Repository</p>
        </div>
      </div>
      <div className="order-3 flex border-2 w-5/6 lg:w-full place-self-center justify-center">
        <Image alt="shawreviews" src={sr} />
      </div>
    </div>
  );
};

export default ShawReviews;
