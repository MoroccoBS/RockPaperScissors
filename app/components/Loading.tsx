"use client";
import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeInOut", delay: 0.25 }}
      className="bg-[hsl(216,_48%,_43%)] z-50 pointer-events-auto w-full h-screen fixed"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{
          duration: 0.5,
          type: "spring",
          bounce: 0.5,
          ease: "easeInOut",
        }}
        className="w-full h-full  flex justify-center items-center"
      >
        <Lottie
          className="w-full"
          animationData={require("../assets/animation_lmnsovjf.json")}
        />
      </motion.div>
    </motion.div>
  );
}
