"use client";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import RulesModal from "../components/RulesModal";
import { AnimatePresence } from "framer-motion";
import FramerMotionAnimation from "../components/FramerMotionAnimation";
import Loading from "../components/Loading";
import MainPageBonus from "../components/MainPageBonus";
import Footer from "../components/Footer";

// Working with LocalStorage in NextJs SSR
function getStorageValue(key: string, defaultValue: string): string {
  return typeof window !== "undefined"
    ? localStorage.getItem(key) || defaultValue
    : defaultValue;
}

const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

export default function Home() {
  const [modal, setModal] = useState(false);
  const [move, setMove] = useState<
    "rock" | "paper" | "scissors" | "lizard" | "spock" | string
  >("");
  const [computerChoice, setComputerChoice] = useState("");
  const [winner, setWinner] = useState("");
  const [score, setScore] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [Duration, setDuration] = useState(5);

  const handleComputerTurn = (move: string) => {
    setMove(move);
    const randomChoice = choices[Math.floor(Math.random() * 5)];
    setComputerChoice(randomChoice);
  };

  const calculateWinner = (computerMove: string, playerMove: string) => {
    if (
      (computerMove === "scissors" && playerMove === "paper") ||
      (computerMove === "paper" && playerMove === "rock") ||
      (computerMove === "rock" && playerMove === "lizard") ||
      (computerMove === "lizard" && playerMove === "spock") ||
      (computerMove === "spock" && playerMove === "scissors") ||
      (computerMove === "paper" && playerMove === "spock") ||
      (computerMove === "scissors" && playerMove === "lizard") ||
      (computerMove === "spock" && playerMove === "rock") ||
      (computerMove === "lizard" && playerMove === "paper") ||
      (computerMove === "rock" && playerMove === "scissors")
    ) {
      return "Computer";
    } else if (
      (playerMove === "scissors" && computerMove === "paper") ||
      (playerMove === "paper" && computerMove === "rock") ||
      (playerMove === "rock" && computerMove === "lizard") ||
      (playerMove === "lizard" && computerMove === "spock") ||
      (playerMove === "spock" && computerMove === "scissors") ||
      (playerMove === "paper" && computerMove === "spock") ||
      (playerMove === "scissors" && computerMove === "lizard") ||
      (playerMove === "spock" && computerMove === "rock") ||
      (playerMove === "lizard" && computerMove === "paper") ||
      (playerMove === "rock" && computerMove === "scissors")
    ) {
      return "Player";
    } else {
      return "Tie";
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    if (computerChoice === "" || move === "") {
      return;
    } else {
      const computerMove = computerChoice.toLowerCase();
      const playerMove = move.toLowerCase();

      const winner = calculateWinner(computerMove, playerMove);
      setWinner(winner);

      if (winner === "Computer") {
        setTimeout(() => {
          setScore((prev) => {
            if (prev === "0") {
              return "0";
            }
            return (parseFloat(prev) - 1).toString();
          });
        }, Duration * 1000);
      } else if (winner === "Player") {
        setTimeout(() => {
          setScore((prev) => {
            return (parseFloat(prev) + 1).toString();
          });
        }, Duration * 1000);
      }
    }
  }, [computerChoice, move, Duration]);

  useEffect(() => {
    setScore(getStorageValue("scoreBonus", "0"));
    if (typeof window !== "undefined") {
      setDuration(window.innerWidth < 768 ? 3 : 5);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("scoreBonus", score.toString());
  }, [score]);

  return (
    <>
      <AnimatePresence mode="wait">{loading && <Loading />}</AnimatePresence>
      <AnimatePresence>
        {modal && <RulesModal bonus={true} setModal={setModal} />}
      </AnimatePresence>
      <main className="flex min-h-screen h-max flex-col items-center gap-14 sm:p-6 p-4 relative overflow-hidden mb-4 sm:mb-28 md:mb-0">
        <NavBar score={score} bonus={true} />
        <AnimatePresence mode="wait">
          {winner === "" && <MainPageBonus setMove={handleComputerTurn} />}
        </AnimatePresence>
        {winner !== "" && (
          <FramerMotionAnimation
            Duration={Duration}
            isWinner={winner}
            move={move}
            setWinner={setWinner}
            computerChoice={computerChoice}
            setComputerChoice={setComputerChoice}
            setMove={setMove}
          />
        )}
        <Footer
          href="/"
          LinkText="Feeling Normal? Click here"
          setModal={setModal}
        />
      </main>
    </>
  );
}
