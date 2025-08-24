import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
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

export class ClassApp extends Component {
  state = { gameRound: 0, score: 0 };
  render() {
    const { gameRound, score } = this.state;
    return gameRound === -1 ? (
      <ClassFinalScore correctCount={score} totalCount={initialFishes.length} />
    ) : (
      <>
        <ClassScoreBoard
          answersLeft={initialFishes.slice(gameRound).map((fish) => fish.name)}
          incorrectCount={gameRound - score}
          correctCount={score}
        />
        <ClassGameBoard
          currentFish={initialFishes[gameRound]}
          handleGuess={(guess) => {
            this.setState({
              score:
                guess === initialFishes[gameRound].name ? score + 1 : score,
            });
            this.setState({
              gameRound:
                gameRound < initialFishes.length - 1 ? gameRound + 1 : -1,
            });
          }}
        />
      </>
    );
  }
}
