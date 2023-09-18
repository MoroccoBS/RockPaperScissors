import { motion } from "framer-motion";
import PlayButton from "./PlayButton";

interface MainPageProps {
  setMove: (move: string) => void;
}

function MainPage({ setMove }: MainPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bgMain max-w-md gap-2 w-11/12 aspect-square flex flex-col"
    >
      <div className="w-full h-full flex mb-4 sm:p-4 p-2">
        <PlayButton
          HoverAnimations={true}
          setMove={() => setMove("Paper")}
          Type="Paper"
          ClassName="h-full w-max min-w-0 mr-auto"
        />
        <PlayButton
          HoverAnimations={true}
          setMove={() => setMove("Scissors")}
          Type="Scissors"
          ClassName="h-full w-max min-w-0 ml-auto"
        />
      </div>
      <div className="w-full h-full gap-3 flex justify-evenly sm:p-4 p-2">
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

export default MainPage;
