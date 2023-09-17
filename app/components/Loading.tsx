"use client";
import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="z-50 pointer-events-auto w-full h-screen fixed flex justify-center items-center bg-slate-200"
    >
      <Lottie
        className="w-full pointer-events-none"
        animationData={require("../assets/animation_lmnsovjf.json")}
      />
    </motion.div>
  );
}
