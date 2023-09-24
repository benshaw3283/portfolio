import Image from "next/image";
import sr from "../public/ShawReviews.png";
import GmailTooltip from "../components/Tooltip";
import GmailPopover from "../components/Popover";
import githubPhone from "../public/githubPhone.svg";

export default function Home() {
  return (
    <div>
      <title>Ben Shaw</title>
      <div className="min-h-screen bg-stone-950 ">
        <div className="absolute pl-2 pt-2 lg:invisible z-10">
          <Image
            alt="githubphone"
            src={githubPhone}
            onClick={() =>
              window.open("https://github.com/benshaw3283", "_blank")
            }
          />
        </div>
        <div className="absolute pl-16 pt-2 lg:invisible visible">
          <GmailPopover />
        </div>
        <div className=" absolute top-1 lg:right-16 right-2 justify-end place-items-center flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            id="pin"
          >
            <path
              fill="#f05542"
              d="M8 1C5.239 1 3 3.357 3 6.264S8 15 8 15s5-5.829 5-8.736C13 3.357 10.761 1 8 1zm0 2.925a1.667 1.755 0 0 1 1.667 1.754A1.667 1.755 0 0 1 8 7.434a1.667 1.755 0 0 1-1.667-1.755A1.667 1.755 0 0 1 8 3.925z"
            ></path>
          </svg>
          <p className="pl-2 lg:text-base text-sm dark:text-white">
            Melbourne, Australia
          </p>
        </div>
        <div className="absolute lg:top-2 top-40 pl-4 place-self-start flex lg:flex-col">
          <br></br>
          <div
            className="flex order-1 pb-2 cursor-pointer lg:visible invisible"
            onClick={() =>
              window.open("https://github.com/benshaw3283", "_blank")
            }
          >
            <svg width="98" height="96" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                fill="#f0f1f2"
              />
            </svg>
          </div>
          <div className="order-2 flex lg:visible invisible">
            <div className="bg-white rounded-full p-1">
              <GmailTooltip />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="order-1 flex justify-center place-items-center mt-10">
            <h1 className="text-7xl text-violet-500 font-bold lg:pb-4 py-4">
              Ben Shaw
            </h1>
          </div>
          <div className="order-2 place-self-center flex">
            <h2 className="text-2xl font-semibold dark:text-white">
              Front-End Developer
            </h2>
          </div>
          <div className="order-3">
            <br></br>
            <br></br>
            <br></br>
          </div>
          <div className="order-4 place-self-center flex pb-10">
            <h3 className="text-3xl border-x-2 border-white p-2 rounded-md text-violet-500 font-semibold">
              Projects
            </h3>
          </div>
          <div className="order-5 place-self-center flex flex-col">
            <div className="order-1 place-self-center pb-6">
              <h1 className="font-semibold text-2xl dark:text-white">
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
            <div className="order-3 flex border-2 w-5/6 lg:w-full place-self-center">
              <Image alt="shawreviews" src={sr} />
            </div>
          </div>
          <div className="order-6">
            <br></br>
            <br></br>
          </div>

          <div className="order-7 flex h-80 w-full bg-white skew-y-3 lg:py-6 ">
            <div className="flex flex-col">
              <h1 className="-skew-y-3 pl-8 text-black font-bold text-2xl order-1">
                About me
              </h1>
              <br></br>
              <p className="text-black order-2 pl-12 pt-4 -skew-y-3 lg:text-lg">
                {`I'm a front-end web developer capable of creating dynamic, functional and appealing websites through my knowledge of :`}
              </p>
              <li className="text-black order-2 pl-12 pt-4 -skew-y-3 lg:text-base text-sm">
                React
              </li>
              <li className="text-black order-2 pl-12 pt-4 -skew-y-3 lg:text-base text-sm">
                Tailwindcss
              </li>
              <li className="text-black order-2 pl-12 pt-4 -skew-y-3 lg:text-base text-sm">
                UI component libraries like <strong>Radix UI</strong> and{" "}
                <strong>Material UI</strong>
              </li>
              <li className="text-black order-2 pl-12 pt-4 -skew-y-3 lg:text-base text-sm">
                Tanstack Query
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
