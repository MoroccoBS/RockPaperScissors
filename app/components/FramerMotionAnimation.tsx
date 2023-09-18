"use client";
import { useAnimate, motion } from "framer-motion";
import PlayButton from "./PlayButton";
import { useLayoutEffect } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

interface FightAnimationProps {
  move: string;
  isWinner?: string;
  setWinner: React.Dispatch<React.SetStateAction<string>>;
  computerChoice: string;
  setComputerChoice: React.Dispatch<React.SetStateAction<string>>;
  setMove: React.Dispatch<React.SetStateAction<string>>;
  Duration: number;
}

const boxShadow = {
  end: "0 0 0 calc(var(--shadowRadius) * 2) hsl(217, 16%, 45%, calc(0.25 * 1)), 0 0 0 calc(var(--shadowRadius) * 4) hsl(217, 16%, 45%, calc(0.25 * 0.5)), 0 0 0 calc(var(--shadowRadius) * 6) hsl(217, 16%, 45%, calc(0.25 * 0.25))",
  start: "0 0 0 0 hsl(217, 16%, 45%, calc(0.25 * 1))",
};

function FightAnimation({
  move,
  isWinner,
  setWinner,
  computerChoice,
  setMove,
  setComputerChoice,
  Duration,
}: FightAnimationProps) {
  const [scope, animate] = useAnimate();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const PlayAnimation = () => {
    if (!isMobile) {
      animate(
        [
          [".player", { x: 0, opacity: 1 }, { delay: 0.5 }],
          [".comp", { x: 0, opacity: 1 }, { delay: 0.5, at: "<" }],
          [".compHolder", { opacity: 0 }, { delay: 1 }],
          [".compPlay", { opacity: 1, pointerEvents: "auto", scale: 1 }],
          [".player", { x: 75 }],
          [".comp", { x: -75 }, { at: "<" }],
          [".player", { x: 0 }],
          [".comp", { x: 0 }, { at: "<" }],
          [".player", { x: 75 }],
          [".comp", { x: -75 }, { at: "<" }],
          [".player", { x: 0 }],
          [".comp", { x: 0 }, { at: "<" }],
          [".player", { x: -100 }, { delay: 0.5 }],
          [".comp", { x: 100 }, { delay: 0.5, at: "<" }],
          [".winningText", { y: "100%" }],
          [
            ".compPlay",
            {
              boxShadow:
                isWinner === "Computer" ? boxShadow.end : boxShadow.start,
              scale: isWinner === "Computer" ? 1.25 : 1,
              opacity:
                isWinner === "Computer" ? 1 : isWinner === "Player" ? 0.75 : 1,
            },
            { at: "<" },
          ],
          [
            ".playerPlay",
            {
              boxShadow:
                isWinner === "Player" ? boxShadow.end : boxShadow.start,
              scale: isWinner === "Player" ? 1.25 : 1,
              opacity:
                isWinner === "Player" ? 1 : isWinner === "Computer" ? 0.75 : 1,
            },
            { at: "<" },
          ],
          [
            ".compPlay",
            {
              scale: 1,
            },
          ],
          [".playerPlay", { scale: 1 }, { at: "<" }],
          [".winningText", { opacity: 1, scale: 1.1 }],
          [".winningText", { scale: 1 }],
        ],
        { duration: Duration }
      );
    } else {
      animate(
        [
          [".player", { x: 0, opacity: 1 }, { delay: 0.5 }],
          [".comp", { x: 0, opacity: 1 }, { delay: 0.5, at: "<" }],
          [".compHolder", { opacity: 0 }, { delay: 1 }],
          [".compPlay", { opacity: 1, pointerEvents: "auto", scale: 1 }],
          [".winningText", { y: "175%" }],
          [
            ".compPlay",
            {
              boxShadow:
                isWinner === "Computer" ? boxShadow.end : boxShadow.start,
              scale: isWinner === "Computer" ? 1.25 : 1,
            },
            { at: "<" },
          ],
          [
            ".playerPlay",
            {
              boxShadow:
                isWinner === "Player" ? boxShadow.end : boxShadow.start,
              scale: isWinner === "Player" ? 1.25 : 1,
            },
            { at: "<" },
          ],
          [
            ".compPlay",
            {
              scale: isWinner === "Computer" ? 1.1 : 1,
              opacity: isWinner === "Computer" ? 1 : 0.75,
            },
          ],
          [
            ".playerPlay",
            {
              scale: isWinner === "Player" ? 1.1 : 1,
              opacity: isWinner === "Player" ? 1 : 0.75,
            },
            { at: "<" },
          ],
          [".winningText", { opacity: 1, scale: 1.1 }],
          [".winningText", { scale: 1 }],
        ],
        { duration: Duration }
      );
    }
  };

  useLayoutEffect(() => {
    PlayAnimation();
  }, [move]);

  const handlePlayAgain = () => {
    setMove("");
    setComputerChoice("");
    setWinner("");
  };

  return (
    <div
      ref={scope}
      className="w-full h-max md:mt-10 mt-0 flex items-center justify-center md:p-4 p-0"
    >
      <motion.div
        initial={{ x: "-50", opacity: 0 }}
        className="player w-full h-full flex flex-col justify-center items-center gap-14"
      >
        <h1 className="lg:text-3xl text-[4vw] text-center">You Picked</h1>
        <motion.div className=" md:w-full flex rounded-full">
          <PlayButton ClassName="w-full m-auto playerPlay" Type={move} />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: "50", opacity: 0 }}
        className="comp w-full h-full flex flex-col justify-center items-center gap-14 "
      >
        <h1 className="lg:text-3xl text-[4vw] text-center">The House Picked</h1>
        <motion.div className="md:w-full flex rounded-full relative">
          <PlayButton
            ClassName="w-full m-auto compPlay pointer-events-none opacity-0 scale-50"
            Type={computerChoice}
          />
          <div className="compHolder h-full aspect-square bg-black/50 rounded-full absolute bottom-0 right-1/2 translate-x-1/2"></div>
        </motion.div>
      </motion.div>
      {isWinner !== undefined && (
        <div
          className={`winningText opacity-0 absolute bottom-1/2 scale-50 flex flex-col justify-center items-center gap-4`}
        >
          <h1 className="md:text-7xl text-5xl">
            {isWinner === "Player"
              ? "You Win"
              : isWinner === "Computer"
              ? "You Lose"
              : "Draw"}
          </h1>
          <button
            className="md:text-4xl text-2xl py-2 px-4 rounded-xl bg-white text-DarkText hover:px-12 hover:rounded-3xl hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-500"
            onClick={handlePlayAgain}
          >
            <h1 className="-translate-y-1">Play Again</h1>
            {/* I did this because the text was pushed to the bottom somehow */}
          </button>
        </div>
      )}
    </div>
  );
}

export default FightAnimation;
