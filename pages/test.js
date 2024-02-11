import React from "react";
import { motion } from "framer-motion";
import Background from "./test2";

const Test = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <motion.p
        className="  self-center flex rounded-lg pr-1 text-3xl"
        initial={{
          y: -300,
          scale: 0,
        }}
        animate={{
          scale: 1,
          y: 0,
        }}
        transition={{ duration: 1.5, type: "spring", bounce: 0.5 }}
      >
        Ben
      </motion.p>
      <motion.p
        className="  self-center flex rounded-lg text-3xl"
        initial={{
          y: 300,
          scale: 0,
        }}
        animate={{
          scale: 1,
          y: 0,
        }}
        transition={{ duration: 1.5, type: "spring", bounce: 0.5 }}
      >
        Shaw
      </motion.p>
    </div>
  );
};

export default Test;
