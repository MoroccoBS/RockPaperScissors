import Rock from "../assets/images/icon-rock.svg";
import Paper from "../assets/images/icon-paper.svg";
import Scissors from "../assets/images/icon-scissors.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface PlayButtonProps {
  Type: string;
  setMove?: () => void;
  HoverAnimations?: boolean;
  ClassName?: string;
}

function PlayButton({
  Type,
  setMove,
  HoverAnimations,
  ClassName,
}: PlayButtonProps) {
  const bg =
    Type === "Rock"
      ? "bg-RockGradient"
      : Type === "Paper"
      ? "bg-PaperGradient"
      : "bg-ScissorsGradient";
  const shadow =
    Type === "Rock"
      ? "shadow-RockGradientShadow"
      : Type === "Paper"
      ? "shadow-PaperGradientShadow"
      : "shadow-ScissorsGradientShadow";
  const img = Type === "Rock" ? Rock : Type === "Paper" ? Paper : Scissors;
  return (
    <div
      className={twMerge(
        `w-[15vw] min-w-[10rem] max-w-[15rem] rounded-full aspect-square flex transition-all duration-300 ${
          HoverAnimations && "hover:scale-105 group cursor-pointer"
        } justify-center items-center ${bg} ${shadow}`,
        ClassName,
      )}
      onClick={setMove}
    >
      <div
        className={`w-4/5 h-4/5 m-auto bg-GrayscaleBg rounded-full shadow-InnerShadow bg-WhiteGradient flex`}
      >
        <Image
          className="w-5/12 aspect-square object-contain m-auto group-hover:scale-125 transition-all duration-500 svg"
          src={img}
          alt="Rock"
          width={500}
          height={300}
        />
        {/* TODO : Change Fill Color */}
      </div>
    </div>
  );
}

export default PlayButton;
