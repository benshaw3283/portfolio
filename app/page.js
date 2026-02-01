"use client";

import Extension from "../components/Extension";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Messengerstats from "../components/messengerstats";
import ParticlesComponent from "../components/ParticlesComponent";
import { motion } from "framer-motion";
import Head from "next/head";
import { useInView } from "react-intersection-observer";

import Minutia from "../components/Minutia";

import { useStore } from "../components/Theme";
import Contributions from "@/components/Contributions";
import TypingText from "@/components/TypingText";

export default function Home() {
  const { theme } = useStore();

  const { ref: minutiaRef, inView: minutiaInView } = useInView({
    threshold: 0.3,
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    swipe: true,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: true,
  };

  const variants = {
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  return (
    <div>
      <Head>
        <title>Ben Shaw</title>
        <meta
          name="description"
          content="Portfolio of Ben Shaw, Front-End Developer based in Melbourne, Australia"
        />
      </Head>

      <main className="relative min-h-screen bg-black w-full" role="main">
        <div className="fixed inset-0">
          <ParticlesComponent />
        </div>

        

        <div className="relative z-10">
          

          <div
            className="absolute top-1 lg:right-4 right-2 justify-end place-items-center flex"
            role="complementary"
            aria-label="Location Information"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              id="pin"
            >
              <path
                fill="#f05542"
                d="M8 1C5.239 1 3 3.357 3 6.264S8 15 8 15s5-5.829 5-8.736C13 3.357 10.761 1 8 1zm0 2.925a1.667 1.755 0 0 1 1.667 1.754A1.667 1.755 0 0 1 8 7.434a1.667 1.755 0 0 1-1.667-1.755A1.667 1.755 0 0 1 8 3.925z"
                role="img"
                aria-label="Location Pin Icon"
              ></path>
            </svg>
            <div className="flex items-baseline ">
              <p className="pl-2 font-Switzer lg:text-base text-sm font-medium  dark:text-white text-white">
                Melbourne
              </p>
              <div className="h-1 w-1 -translate-y-[2px] bg-white rounded-full ml-2"></div>
              <p className="pl-2 font-Switzer lg:text-base text-sm font-medium  dark:text-white text-white">
                Australia
              </p>
            </div>
          </div>
          

          <div className="flex flex-col ">
            <div className="order-1 flex justify-center items-baseline mt-20 flex-row font-Chillax">
              <h1
                className="text-white z-10 font-Chillax text-7xl lg:text-9xl flex items-baseline"
                aria-label="Ben Shaw"
              >
                <span aria-hidden="true">B</span>
                <span className="sr-only">Ben Shaw</span>
                <motion.span
                  initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
                  animate={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="text-white z-10 text-7xl lg:text-9xl"
                  aria-hidden="true"
                >
                  en
                </motion.span>
                <span
                  className="text-white flex text-7xl z-10 pl-4 lg:text-9xl"
                  aria-hidden="true"
                >
                  S
                </span>
                <motion.span
                  initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
                  animate={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="text-white z-10 text-7xl lg:text-9xl"
                  aria-hidden="true"
                >
                  haw
                </motion.span>
              </h1>
            </div>

            <div className="order-2 place-self-center flex z-10 pt-4">
              <TypingText 
                text={["Front-End Developer", "Test Automation Engineer"]} 
                typingSpeed={50}
                showCursor={true}
                className="lg:text-3xl text-xl font-light font-Chillax text-white"
              />
            </div>
            <div className="order-3">
              <br></br>
              <br></br>
              <br></br>
            </div>
            <div className="order-4 place-self-center flex pb-6 z-10">
              <h2
                className={`text-2xl p-4 text-white font-Chillax font-bold bg-black tracking-wider border-0 border-b ${
                  theme === "red-500"
                    ? "animate-[border-pulse-red_4s_ease-in-out_infinite]"
                    : theme === "blue-500"
                    ? "animate-[border-pulse-blue_4s_ease-in-out_infinite]"
                    : theme === "green-500"
                    ? "animate-[border-pulse-green_4s_ease-in-out_infinite]"
                    : theme === "yellow-500"
                    ? "animate-[border-pulse-yellow_4s_ease-in-out_infinite]"
                    : "animate-[border-pulse-purple_4s_ease-in-out_infinite]"
                }`}
                id="projects-section"
              >
                PROJECTS
              </h2>
            </div>
            <div className="order-5 place-self-center flex">
              <div role="region" aria-label="Projects Showcase">
                <Slider
                  {...settings}
                  className="w-[300px] lg:w-[800px] "
                  aria-label="Project Slideshow"
                >
                  <div className="lg:px-1">
                    <Extension />
                  </div>
                  
                </Slider>
              </div>
            </div>
            <div className="order-6">
              <br></br>
              <br></br>
            </div>
            <div className="order-7">
              <Contributions />
            </div>

            
            <div ref={minutiaRef} className="order-9">
              <motion.section
                animate={minutiaInView ? "in" : "out"}
                variants={variants}
                transition={{ duration: 0.4 }}
              >
                <Minutia />
              </motion.section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
