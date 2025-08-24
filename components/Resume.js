import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import Image from "next/image";
import * as Tooltip from "@radix-ui/react-tooltip";

import styles from "../styles/tooltip.module.css";

const Resume = () => {
  return (
    <Tooltip.Provider delayDuration={140}>
          <Tooltip.Root>
    <Dialog>
      <Tooltip.TooltipTrigger asChild>
      <DialogTrigger className="lg:mb-2 w-10 lg:w-28 hover:scale-105">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>
      </DialogTrigger>
      </Tooltip.TooltipTrigger>
      <Tooltip.Portal>
          <Tooltip.Content
            className='invisible md:visible rounded-sm -translate-y-6 px-4 py-1 text-[18px] leading-8 text-black bg-white shadow-[0_10px_38px_-10px_rgba(22,23,24,0.35),0_10px_20px_-15px_rgba(22,23,24,0.2)] select-none duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] font-bold z-100'
            sideOffset={5}
            side="right"
            
          >
           Resumé
            <Tooltip.Arrow asChild>
              <svg width="16" height="8" viewBox="0 0 16 8" className={styles.TooltipArrow}>
                <path d="M0 8 A8 8 0 0 1 16 8 Z" />
              </svg>
            </Tooltip.Arrow>
          </Tooltip.Content>
        </Tooltip.Portal>
      <DialogContent className="max-w-[95vw] max-h-[95vh] w-[800px] md:h-[900px] lg:h-[900px] h-[520px] bg-none backdrop-blur-xl rounded-lg ">
        <a
          className=" w-8 h-fit text-black opacity-80 hover:opacity-100 absolute inset-2 "
          href="/resume.png"
          download="/resume.png"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </a>

        <div className="w-full h-full overflow-y-auto">
          <Image
            src="/resume.png"
            alt="resume"
            width={800}
            height={1131}
            className="w-full h-auto"
          />
        </div>
      </DialogContent>
    </Dialog>
    </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default Resume;
