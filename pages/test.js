import React from "react";
import { motion } from "framer-motion";

const Test = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: () => {
      const delay = 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };
  return (
    <div className="w-[470px] scale-75 lg:scale-125 lg:w-[600px]  h-24 flex  justify-center -translate-y-32 lg:-translate-y-64 lg:translate-x-4 translate-x-2">
      <motion.svg
        width="600"
        height="600"
        viewBox="0 0 500 500"
        initial="hidden"
        animate="visible"
        className="translate-x-24"
      >
        <motion.line
          x1="120"
          y1="28"
          x2="120"
          y2="204"
          stroke="#FFFFFF"
          variants={draw}
          custom={2}
          strokeWidth="20"
        />
        <motion.path
          d="M116 33 A 25 20, 0, 0, 1, 120 110"
          fill="transparent"
          stroke="#FFFFFF"
          strokeWidth="20"
          variants={draw}
          custom={1}
        />
        {/* Bottom semicircle */}
        <motion.path
          d="M116 198 A 25 20, 0, 0, 0, 120 110"
          fill="transparent"
          stroke="#FFFFFF"
          strokeWidth="20"
          variants={draw}
          custom={1}
        />
      </motion.svg>
      <motion.svg
        width="600"
        height="600"
        viewBox="0 0 500 500"
        initial="hidden"
        animate="visible"
        className="translate-x-14"
      >
        <motion.line
          x1="120"
          y1="24"
          x2="120"
          y2="204"
          stroke="#FFFFFF"
          variants={draw}
          custom={2}
          strokeWidth="20"
        />
        <motion.line
          x1="117"
          y1="30"
          x2="200"
          y2="30"
          stroke="#FFFFFF"
          variants={draw}
          custom={2}
          strokeWidth="20"
        />
        <motion.line
          x1="117"
          y1="118"
          x2="200"
          y2="118"
          stroke="#FFFFFF"
          variants={draw}
          custom={2}
          strokeWidth="20"
        />
        <motion.line
          x1="117"
          y1="198"
          x2="200"
          y2="198"
          stroke="#FFFFFF"
          variants={draw}
          custom={2}
          strokeWidth="20"
        />
      </motion.svg>
      <motion.svg
        width="600"
        height="600"
        viewBox="0 0 500 500"
        initial="hidden"
        animate="visible"
        className="translate-x-6"
      >
        <motion.line
          x1="120"
          y1="22"
          x2="120"
          y2="204"
          stroke="#FFFFFF"
          variants={draw}
          custom={2}
          strokeWidth="20"
        />
        <motion.line
          x1="120"
          y1="24"
          x2="200"
          y2="204"
          stroke="#FFFFFF"
          variants={draw}
          custom={2}
          strokeWidth="20"
        />
        <motion.line
          x1="200"
          y1="24"
          x2="200"
          y2="206"
          stroke="#FFFFFF"
          variants={draw}
          custom={2}
          strokeWidth="20"
        />
      </motion.svg>
      <motion.svg
        width="620"
        height="606"
        viewBox="0 0 500 500"
        initial="hidden"
        animate="visible"
        className="translate-x-6"
      >
        <motion.path
          strokeWidth="20"
          fill="transparent"
          stroke="#FFFFFF"
          d="M120 60 A40 40 0 1 0 80 100 A40 40 0 1 1 40 140"
          variants={draw}
          custom={1}
        />
      </motion.svg>
      <motion.svg
        width="600"
        height="600"
        viewBox="0 0 500 500"
        initial="hidden"
        animate="visible"
        className="-translate-x-6"
      >
        <motion.line
          x1="120"
          y1="22"
          x2="120"
          y2="204"
          stroke="#FFFFFF"
          variants={draw}
          custom={2}
          strokeWidth="20"
        />
        <motion.line
          x1="120"
          y1="113"
          x2="200"
          y2="113"
          stroke="#FFFFFF"
          variants={draw}
          custom={2}
          strokeWidth="20"
        />
        <motion.line
          x1="200"
          y1="22"
          x2="200"
          y2="204"
          stroke="#FFFFFF"
          variants={draw}
          custom={2}
          strokeWidth="20"
        />
      </motion.svg>
      <motion.svg
        width="600"
        height="600"
        viewBox="0 0 500 500"
        initial="hidden"
        animate="visible"
        className="-translate-x-[72px]"
      >
        <motion.line
          x1="260"
          y1="22"
          x2="200"
          y2="204"
          stroke="#FFFFFF"
          variants={draw}
          custom={2}
          strokeWidth="20"
        />
        <motion.line
          x1="260"
          y1="22"
          x2="320"
          y2="204"
          stroke="#FFFFFF"
          variants={draw}
          custom={2}
          strokeWidth="20"
        />
        <motion.line
          x1="290"
          y1="113"
          x2="230"
          y2="113"
          stroke="#FFFFFF"
          variants={draw}
          custom={2}
          strokeWidth="20"
        />
      </motion.svg>
      <motion.svg
        width="600"
        height="600"
        viewBox="0 0 500 500"
        initial="hidden"
        animate="visible"
        className="-translate-x-24"
      >
        <motion.line
          x1="120"
          y1="22"
          x2="180"
          y2="204"
          stroke="#FFFFFF"
          variants={draw}
          custom={2}
          strokeWidth="20"
        />
        <motion.line
          x1="200"
          y1="100"
          x2="180"
          y2="204"
          stroke="#FFFFFF"
          variants={draw}
          custom={2}
          strokeWidth="20"
        />
        <motion.line
          x1="200"
          y1="100"
          x2="220"
          y2="204"
          stroke="#FFFFFF"
          variants={draw}
          custom={2}
          strokeWidth="20"
        />
        <motion.line
          x1="280"
          y1="22"
          x2="220"
          y2="204"
          stroke="#FFFFFF"
          variants={draw}
          custom={2}
          strokeWidth="20"
        />
      </motion.svg>
    </div>
  );
};

export default Test;

/* <motion.h1
className=" pr-1  z-50 text-7xl text-violet-500 font-bold lg:pb-4 py-4 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255)]"
initial={{
  y: -300,
  scale: 0,
}}
animate={{
  scale: 1,
  y: 0,
}}
exit={{ y: 0 }}
transition={{ duration: 2, type: "spring", bounce: 0.5 }}
>
Ben
</motion.h1>
<motion.h1
className=" z-50 text-7xl text-violet-500 font-bold lg:pb-4 py-4 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255)]"
initial={{
  y: 300,
  scale: 0,
}}
animate={{
  scale: 1,
  y: 0,
}}
transition={{ duration: 2, type: "spring", bounce: 0.5 }}
>
Shaw
</motion.h1>
*/
