"use client";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import RulesModal from "./components/RulesModal";
import { AnimatePresence } from "framer-motion";
import MainPage from "./components/MainPage";
import FramerMotionAnimation from "./components/FramerMotionAnimation";

// Working with LocalStorage in NextJs SSR
function getStorageValue(key: string, defaultValue: string): string {
  return typeof window !== "undefined"
    ? localStorage.getItem(key) || defaultValue
    : defaultValue;
}

const choices = ["Rock", "Paper", "Scissors"];

export default function Home() {
  const [modal, setModal] = useState(false);
  const [move, setMove] = useState<"rock" | "paper" | "scissors" | string>("");
  const [computerChoice, setComputerChoice] = useState("");
  const [winner, setWinner] = useState("");
  const [score, setScore] = useState<string>("");

  const handleComputerTurn = (move: string) => {
    setMove(move);
    const randomChoice = choices[Math.floor(Math.random() * 3)];
    setComputerChoice(randomChoice);
  };

  const calculateWinner = (computerMove: string, playerMove: string) => {
    if (
      (computerMove === "paper" && playerMove === "rock") ||
      (computerMove === "scissors" && playerMove === "paper") ||
      (computerMove === "rock" && playerMove === "scissors")
    ) {
      return "Computer";
    } else if (
      (computerMove === "rock" && playerMove === "paper") ||
      (computerMove === "paper" && playerMove === "scissors") ||
      (computerMove === "scissors" && playerMove === "rock")
    ) {
      return "Player";
    } else {
      return "Tie";
    }
  };

  useEffect(() => {
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
        }, 5500);
      } else if (winner === "Player") {
        setTimeout(() => {
          setScore((prev) => {
            return (parseFloat(prev) + 1).toString();
          });
        }, 5500);
      }
    }
  }, [computerChoice, move]);
  useEffect(() => {
    setScore(getStorageValue("score", "0"));
  }, []);

  useEffect(() => {
    localStorage.setItem("score", score.toString());
  }, [score]);

  return (
    <>
      <AnimatePresence mode="wait">
        {modal && <RulesModal setModal={setModal} />}
      </AnimatePresence>
      <main className="flex min-h-screen h-screen flex-col items-center gap-14 sm:p-6 p-4 relative overflow-hidden">
        <NavBar score={score} />
        <AnimatePresence mode="wait">
          {winner === "" && <MainPage setMove={handleComputerTurn} />}
        </AnimatePresence>
        {winner !== "" && (
          <FramerMotionAnimation
            isWinner={winner}
            move={move}
            setWinner={setWinner}
            computerChoice={computerChoice}
            setComputerChoice={setComputerChoice}
            setMove={setMove}
          />
        )}
        <button
          onClick={() => setModal(true)}
          className="absolute md:bottom-8 md:right-8 bottom-0 right-1/2 md:translate-x-0 translate-x-1/2 px-10 text-xl py-2 border-2 border-white rounded-xl hover:rounded-3xl hover:px-14 transition-all duration-500"
        >
          Rules
        </button>
      </main>
    </>
  );
}
