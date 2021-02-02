import React, { Component } from 'react';
import PhaserGame from './PhaserGame';

export default class GameContainer extends Component {
  constructor({ levelNumber }) {
    super();
    this.levelNumber = levelNumber;
  }

  componentDidMount() {
    this.game = new PhaserGame(this, this.levelNumber);
  }

  render() {
    return (
      <div id="gameContainer" />
    );
  }
}
