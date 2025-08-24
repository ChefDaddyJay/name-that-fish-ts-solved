import { Component } from "react";

type FinalScoreProps = {
  totalCount: number;
  correctCount: number;
};

export class ClassFinalScore extends Component<FinalScoreProps> {
  render() {
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{this.props.correctCount}</p>
          <hr />
          <p>{this.props.totalCount}</p>
        </div>
      </div>
    );
  }
}
