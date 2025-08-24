import { Component } from "react";
import "./styles/game-board.css";
import { Fish } from "../../types";

type GameBoardProps = {
  currentFish: Fish;
  handleGuess: (guess: string) => void;
};

export class ClassGameBoard extends Component<GameBoardProps> {
  state: { fishGuess: string } = { fishGuess: "" };
  render() {
    const {
      currentFish,
      handleGuess,
    }: { currentFish: Fish; handleGuess: (guess: string) => void } = this.props;
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={currentFish.url} alt={currentFish.name} />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleGuess(this.state.fishGuess);
            this.setState({ fishGuess: "" });
          }}
        >
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={this.state.fishGuess}
            onChange={(e) => this.setState({ fishGuess: e.target.value })}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
