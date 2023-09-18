import Logo from "../assets/images/logo.svg";
import LogoBonus from "../assets/images/logo-bonus.svg";
import Image from "next/image";

interface NavBarProps {
  score: string;
  bonus?: boolean;
}

function NavBar({ score, bonus }: NavBarProps) {
  return (
    <div className="max-w-3xl w-full border border-white rounded-xl flex justify-between items-center py-4 px-5 ">
      <div className="w-max">
        <Image
          src={bonus ? LogoBonus : Logo}
          alt={"Logo"}
          width={50}
          height={50}
          className={`w-full h-full`}
        />
      </div>
      <div className="h-full w-max sm:px-10 py-4 px-4 uppercase flex flex-col bg-white rounded-xl text-DarkText justify-center items-center  font-bold">
        <h1 className="tracking-widest">Score</h1>
        <h1 className="sm:text-6xl text-5xl">{score}</h1>
      </div>
    </div>
  );
}

export default NavBar;
