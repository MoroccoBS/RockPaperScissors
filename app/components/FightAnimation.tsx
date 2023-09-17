import { AnimatePresence, motion } from "framer-motion";
import PlayButton from "./PlayButton";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface FightAnimationProps {
  move: string;
  isWinner?: string;
  setWinner: React.Dispatch<React.SetStateAction<string>>;
  computerChoice: string;
  setComputerChoice: React.Dispatch<React.SetStateAction<string>>;
  setMove: React.Dispatch<React.SetStateAction<string>>;
}

const shadow = {
  end: {
    boxShadow:
      "0 0 0 calc(var(--shadowRadius) * 2) hsl(217, 16%, 45%, calc(0.25 * 1)), 0 0 0 calc(var(--shadowRadius) * 4) hsl(217, 16%, 45%, calc(0.25 * 0.5)), 0 0 0 calc(var(--shadowRadius) * 6) hsl(217, 16%, 45%, calc(0.25 * 0.25))",
  },
  start: { boxShadow: "0 0 0 0 hsl(217, 16%, 45%, calc(0.25 * 1))" },
};

function FightAnimation({
  move,
  isWinner,
  setWinner,
  computerChoice,
  setMove,
  setComputerChoice,
}: FightAnimationProps) {
  const PlayerRef = useRef<HTMLDivElement>(null);
  const PlayerWiningTextRef = useRef<HTMLDivElement>(null);
  const ComputerRef = useRef<HTMLDivElement>(null);
  const ComputerHolderRef = useRef<HTMLDivElement>(null);
  const ComputerPlayRef = useRef<HTMLDivElement>(null);

  const PlayAnimation = () => {
    const player = PlayerRef.current;
    const WiningText = PlayerWiningTextRef.current;
    const computer = ComputerRef.current;
    const ComputerHolder = ComputerHolderRef.current;
    const ComputerPlay = ComputerPlayRef.current;

    const animationSpeed = 0.5;

    const PlayerTl1 = gsap.timeline();
    const PlayerTl2 = gsap.timeline({ repeat: 1, delay: animationSpeed * 5.5 });
    const ComputerTl1 = gsap.timeline();
    const ComputerTl2 = gsap.timeline({
      repeat: 1,
      delay: animationSpeed * 5.5,
    });
    const FinishAnim = gsap.timeline({ delay: animationSpeed * 11 });

    PlayerTl1.fromTo(
      player,
      { x: -500, opacity: 0 },
      { x: 0, opacity: 1, delay: animationSpeed * 0.5 }
    ).to(player, {
      x: -150,
      delay: animationSpeed * 4,
    });

    PlayerTl2.fromTo(player, { x: 0, ease: "power4.in" }, { x: 100 }).to(
      player,
      {
        x: 0,
      }
    );

    ComputerTl1.fromTo(
      computer,
      { x: 500, opacity: 0 },
      { x: 0, opacity: 1, delay: animationSpeed * 0.5 }
    )
      .to(ComputerHolder, {
        opacity: 0,
        delay: animationSpeed * 0.5,
      })
      .to(ComputerPlay, {
        scale: 1,
        opacity: 1,
        pointerEvents: "auto",
      });

    ComputerTl2.fromTo(computer, { x: 0, ease: "power4.in" }, { x: -100 }).to(
      computer,
      {
        x: 0,
      }
    );

    FinishAnim.to(player, {
      x: -150,
      delay: animationSpeed * 0.25,
    })
      .to(
        computer,
        {
          x: 150,
        },
        0
      )
      .to(WiningText, {
        opacity: 1,
        pointerEvents: "auto",
        scale: 1.25,
      })
      .to(WiningText, {
        scale: 1,
      });

    return () => {
      PlayerTl1.kill();
      PlayerTl2.kill();
      ComputerTl1.kill();
      ComputerTl2.kill();
      FinishAnim.kill();
    };
  };

  useLayoutEffect(() => {
    PlayAnimation();
  }, [move]);
  return (
    <div className="w-4/5 h-max mt-10 flex items-center justify-center p-4">
      <div
        ref={PlayerRef}
        className="w-full h-full flex flex-col justify-center items-center gap-14 PlayerRef"
      >
        <h1 className="text-3xl">You Picked</h1>
        <motion.div
          animate={isWinner === "Player" ? "end" : "start"}
          variants={shadow}
          transition={{
            duration: 0.5,
            delay: 6,
          }}
          className="w-3/6 rounded-full"
        >
          <PlayButton ClassName="w-full" Type={move} />
        </motion.div>
      </div>
      <div
        className="w-full h-full flex flex-col justify-center items-center gap-14 relative"
        ref={ComputerRef}
      >
        <h1 className="text-3xl">The House Picked</h1>
        <motion.div
          ref={ComputerPlayRef}
          className="w-3/6 pointer-events-none opacity-0 scale-50 rounded-full"
          animate={isWinner === "Computer" ? "end" : "start"}
          variants={shadow}
          transition={{
            duration: 0.5,
            delay: 6,
          }}
        >
          <PlayButton ClassName="w-full" Type={computerChoice} />
        </motion.div>
        <div
          ref={ComputerHolderRef}
          className="w-3/6 aspect-square bg-black/50 rounded-full absolute bottom-0 right-1/2 translate-x-1/2"
        ></div>
      </div>
      {isWinner !== undefined && (
        <div
          className="absolute bottom-1/2 opacity-0 pointer-events-none scale-50 translate-y-full flex flex-col justify-center items-center gap-6"
          ref={PlayerWiningTextRef}
        >
          <h1 className="text-7xl">
            You{" "}
            {isWinner === "Player"
              ? "Win"
              : isWinner === "Computer"
              ? "Lose"
              : "Tie"}
          </h1>
          <button
            className="w-full text-4xl py-2 rounded-xl bg-white text-DarkText "
            onClick={() => {
              setWinner("");
              setMove("");
              setComputerChoice("");
            }}
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
