"use client";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import Rules from "../assets/images/image-rules.svg";
import RulesBonus from "../assets/images/image-rules-bonus.svg";
import Image from "next/image";
interface RulesModalProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  bonus?: boolean;
}

function RulesModal({ setModal, bonus }: RulesModalProps) {
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
        <div className="w-full h-full flex p-6">
          <Image
            src={bonus ? RulesBonus : Rules}
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
