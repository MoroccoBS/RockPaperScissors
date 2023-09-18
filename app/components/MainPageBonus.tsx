import { motion } from "framer-motion";
import PlayButton from "./PlayButton";

interface MainPageBonusProps {
  setMove: (move: string) => void;
}

export default function MainPageBonus({ setMove }: MainPageBonusProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bgMainBonus max-w-lg gap-2 w-11/12 aspect-square flex flex-col"
    >
      <div className="w-full h-full flex justify-center">
        <PlayButton
          HoverAnimations={true}
          setMove={() => setMove("Scissors")}
          Type="Scissors"
          ClassName="h-full w-max min-w-0"
        />
      </div>
      <div className="w-full h-full flex mb-4">
        <PlayButton
          HoverAnimations={true}
          setMove={() => setMove("Spock")}
          Type="Spock"
          ClassName="h-full w-max min-w-0 mr-auto"
        />
        <PlayButton
          HoverAnimations={true}
          setMove={() => setMove("Paper")}
          Type="Paper"
          ClassName="h-full w-max min-w-0 ml-auto"
        />
      </div>
      <div className="w-full h-full gap-3 flex justify-evenly">
        <PlayButton
          HoverAnimations={true}
          setMove={() => setMove("Lizard")}
          Type="Lizard"
          ClassName="h-full w-max min-w-0"
        />
        <PlayButton
          HoverAnimations={true}
          setMove={() => setMove("Rock")}
          Type="Rock"
          ClassName="h-full w-max min-w-0"
        />
      </div>
    </motion.div>
  );
}
