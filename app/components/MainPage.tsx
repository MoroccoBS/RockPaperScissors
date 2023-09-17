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
      className="max-w-max w-11/12 aspect-square max-h-screen grid grid-cols-2 place-items-center bgMain"
    >
      <PlayButton
        HoverAnimations={true}
        setMove={() => setMove("Rock")}
        Type="Rock"
        ClassName="lg:m-7 m-10"
      />
      <PlayButton
        HoverAnimations={true}
        setMove={() => setMove("Paper")}
        Type="Paper"
        ClassName=" lg:m-7 m-10"
      />
      <PlayButton
        HoverAnimations={true}
        setMove={() => setMove("Scissors")}
        Type="Scissors"
        ClassName="col-span-2  lg:m-7 m-10"
      />
    </motion.div>
  );
}

export default MainPage;
