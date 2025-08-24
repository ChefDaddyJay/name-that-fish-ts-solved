import { Fish } from "../../types";
import "./styles/game-board.css";
import { useState } from "react";

export function FunctionalGameBoard({
  currentFish,
  handleGuess,
}: {
  currentFish: Fish;
  handleGuess: (guess: string) => void;
}) {
  const [fishGuess, setFishGuess] = useState("");
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={currentFish.url} alt={currentFish.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleGuess(fishGuess);
          setFishGuess("");
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={fishGuess}
          onChange={(e) => setFishGuess(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
