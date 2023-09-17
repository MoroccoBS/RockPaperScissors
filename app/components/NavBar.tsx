import Logo from "../assets/images/logo.svg";
import Image from "next/image";

interface NavBarProps {
  score: string;
}

function NavBar({ score }: NavBarProps) {
  return (
    <div className="max-w-3xl w-full border border-white rounded-xl flex justify-between items-center py-4 px-5 ">
      <div className="w-max">
        <Image
          src={Logo}
          alt={"Logo"}
          width={50}
          height={50}
          className={`w-full h-full`}
        />
      </div>
      <div className="h-full w-max sm:px-10 py-4 px-6 uppercase flex flex-col bg-white rounded-xl text-DarkText justify-center items-center  font-bold">
        <h1 className="tracking-widest">Score</h1>
        <h1 className="text-6xl">{score}</h1>
      </div>
    </div>
  );
}

export default NavBar;
