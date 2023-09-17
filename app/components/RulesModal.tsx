"use client";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import Rules from "../assets/images/image-rules.svg";
import Image from "next/image";
import { BsArrowLeft } from "react-icons/bs";
import PlayButton from "./PlayButton";
interface RulesModalProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function RulesModal({ setModal }: RulesModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-screen h-screen fixed z-50 bg-black/50 flex"
    >
      <div className="w-full max-w-lg h-max p-6 flex flex-col bg-white text-DarkText m-auto rounded-md gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl">Rules</h1>
          <AiOutlineClose
            onClick={() => setModal(false)}
            size={25}
            className={`cursor-pointer hover:scale-110 transition-all opacity-50 hover:opacity-100`}
          />
        </div>
        {/* <div className="flex w-full max-w-lg aspect-square flex-col">
          <div className="w-full h-full flex justify-between items-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl flex flex-col gap-4">
              <h1>Beats</h1>
              <BsArrowLeft size={50} className="" />
            </div>
            <PlayButton isRules={true} Type="Paper" />
            <PlayButton isRules={true} Type="Scissors" />
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <PlayButton isRules={true} Type="Rock" />
          </div>
        </div> */}
        <div className="w-full h-full flex p-6">
          <Image
            src={Rules}
            alt="Rules Image"
            width={500}
            height={300}
            className="w-full h-full"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default RulesModal;
