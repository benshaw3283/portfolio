import Image from "next/image";
import Extension from "@/components/Extension";
import GmailTooltip from "../components/Tooltip";
import GmailPopover from "../components/Popover";
import githubPhone from "../public/githubPhone.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShawReviews from "@/components/ShawReviews";
import Background from "./test2";
import { motion } from "framer-motion";
import Test from "./test";
import { useInView } from "react-intersection-observer";
import Resume from "@/components/Resume";

export default function Home() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    swipe: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  const variants = {
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  return (
    <div>
      <title>Ben Shaw</title>

      <div className="h-full bg-black w-full cursor-none">
        <Background />
        <div className="gap-3 absolute pl-2 pt-2 lg:invisible z-10 cursor-pointer flex flex-col">
          <Image
            alt="githubphone"
            src={githubPhone}
            onClick={() =>
              window.open("https://github.com/benshaw3283", "_blank")
            }
          />

          <Resume />
        </div>
        <div className="absolute pl-16 pt-2 lg:invisible visible">
          <GmailPopover />
        </div>
        <div className=" absolute top-1 lg:right-4 right-2 justify-end place-items-center flex">
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
          <p className="pl-2 lg:text-base text-sm dark:text-white text-white">
            Melbourne, Australia
          </p>
        </div>
        <div className="absolute lg:top-2 top-40 pl-4 place-self-start flex lg:flex-col ">
          <br></br>
          <div
            className="flex order-1 pb-2 cursor-pointer lg:visible invisible "
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
          <div className="order-1 pl-1 flex lg:visible invisible z-50">
            <GmailTooltip />
          </div>

          <Resume />
        </div>

        <div className="flex flex-col ">
          <div className=" order-1 flex justify-center items-baseline mt-20 flex-row font-Chillax lg:text-9xl">
            <p className="text-white z-10 font-Chillax text-7xl lg:text-7xl">
              B
            </p>
            <motion.p
              initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
              animate={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-white z-10 text-7xl"
            >
              en
            </motion.p>
            <p className="text-white flex text-7xl z-10 pl-4">S</p>
            <motion.p
              initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
              animate={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-white z-10 text-7xl"
            >
              haw
            </motion.p>
          </div>

          <div className="order-2 place-self-center flex z-10 pt-4">
            <h2 className=" lg:text-2xl text-xl font-light font-Chillax dark:text-white text-white">
              Front-End Developer
            </h2>
          </div>
          <div className="order-3">
            <br></br>
            <br></br>
            <br></br>
          </div>
          <div className="order-4 place-self-center flex pb-10 z-10">
            <h3 className="cursor-none text-2xl shadow-sm shadow-purple-500 p-2 rounded-md text-white font-Switzer font-bold">
              PROJECTS
            </h3>
          </div>
          <div className="order-5 place-self-center flex ">
            <Slider {...settings} className="w-[300px] lg:w-[800px]">
              <ShawReviews />
              <Extension />
            </Slider>
          </div>
          <div className="order-6">
            <br></br>
            <br></br>
          </div>
          <div ref={ref} className="order-7 justify-center flex w-full ">
            <motion.div
              animate={inView ? "in" : "out"}
              variants={variants}
              transition={{ duration: 0.4 }}
              className="cursor-none w-[94%] h-fit flex flex-col text-white  p-4 rounded-lg bg-black z-10 opacity-80  shadow-purple-500  shadow-inner mb-10"
            >
              <p className="text-3xl font-bold pb-4 font-Chillax">About me</p>
              <p className="flex pb-6  lg:text-xl  font-Switzer">
                {`I'm a front-end developer capable of creating responsive, user-friendly and modern websites through my knowledge of :`}
              </p>
              <div className="flex flex-row">
                <ul>
                  <li>
                    <svg
                      height="25"
                      viewBox="105.7 18 690.6 536.9"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="#61dafb">
                        <path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" />
                        <circle cx="420.9" cy="296.5" r="45.7" />
                      </g>
                    </svg>
                  </li>
                  <li className="py-1">
                    <svg
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 400 400"
                      width="25"
                      height="25"
                    >
                      <path class="st0" fill="#007acc" d="M0 200V0h400v400H0" />
                      <path
                        class="st1"
                        fill="#fff"
                        d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z"
                      />
                    </svg>
                  </li>
                  <li className="py-1">
                    <svg
                      height="14"
                      viewBox=".15 .13 799.7 479.69"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m400 .13c-106.63 0-173.27 53.3-199.93 159.89 39.99-53.3 86.64-73.28 139.95-59.96 30.42 7.6 52.16 29.67 76.23 54.09 39.2 39.78 84.57 85.82 183.68 85.82 106.62 0 173.27-53.3 199.92-159.9-39.98 53.3-86.63 73.29-139.95 59.97-30.41-7.6-52.15-29.67-76.22-54.09-39.2-39.78-84.58-85.82-183.68-85.82zm-199.93 239.84c-106.62 0-173.27 53.3-199.92 159.9 39.98-53.3 86.63-73.29 139.95-59.96 30.41 7.61 52.15 29.67 76.22 54.08 39.2 39.78 84.58 85.83 183.68 85.83 106.63 0 173.27-53.3 199.93-159.9-39.99 53.3-86.64 73.29-139.95 59.96-30.42-7.59-52.16-29.67-76.23-54.08-39.2-39.78-84.57-85.83-183.68-85.83z"
                        fill="#06b6d4"
                      />
                    </svg>
                  </li>
                  <li className="py-1">
                    <svg
                      height="25"
                      viewBox="2.738 -5.03622834 17.45992422 39.40619484"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m15.9.087.854 1.604c.192.296.4.558.645.802a22.406 22.406 0 0 1 2.004 2.266c1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12a12.7 12.7 0 0 1 -1.57 1.342c-.296 0-.436-.227-.558-.436a3.589 3.589 0 0 1 -.436-1.255c-.105-.523-.174-1.046-.14-1.586v-.244c-.024-.052-.285-24.052-.181-24.175z"
                        fill="#599636"
                      />
                      <path
                        d="m15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614z"
                        fill="#6cac48"
                      />
                      <path
                        d="m16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453a3.235 3.235 0 0 1 -.26-.575c-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1 -.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z"
                        fill="#c2bfbf"
                      />
                    </svg>
                  </li>

                  <li className="pl-1">
                    <svg
                      height="20"
                      viewBox="4.7 3.7 43.6 43.6"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z"
                        fill="#59529d"
                      />
                      <path d="m47.3 25.5v21.8l-10.9-10.9z" fill="#5271b4" />
                      <path
                        d="m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z"
                        fill="#bb4b96"
                      />
                    </svg>
                  </li>
                </ul>
                <ul className="pl-6 font-semibold text-lg">
                  <li> ReactJS</li>
                  <li>Typescript</li>
                  <li>Tailwind</li>
                  <li>MongoDB</li>

                  <li>Animation using Framer Motion</li>
                </ul>
              </div>
              <div className="pt-2 font-switzer">
                <p className="font-semibold pl-2">to name a few..</p>
                <p className="pt-4 font-semibold font text-lg">
                  Please feel free to email me!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
