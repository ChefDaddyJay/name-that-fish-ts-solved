import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { Images } from "../../assets/Images";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export function FunctionalApp() {
  const [gameRound, setGameRound] = useState(0);
  const [score, setScore] = useState(0);
  return gameRound === -1 ? (
    <FunctionalFinalScore
      correctCount={score}
      totalCount={initialFishes.length}
    />
  ) : (
    <>
      <FunctionalScoreBoard
        answersLeft={initialFishes.slice(gameRound).map((fish) => fish.name)}
        incorrectCount={gameRound - score}
        correctCount={score}
      />
      <FunctionalGameBoard
        currentFish={initialFishes[gameRound]}
        handleGuess={(guess) => {
          setScore(guess === initialFishes[gameRound].name ? score + 1 : score);
          setGameRound(
            gameRound < initialFishes.length - 1 ? gameRound + 1 : -1
          );
        }}
      />
    </>
  );
}
