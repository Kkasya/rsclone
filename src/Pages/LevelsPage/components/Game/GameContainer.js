import React, { Component } from 'react';
import PhaserGame from './PhaserGame';

export default class GameContainer extends Component {
  state = {
    lives: 3,
  };

  componentDidMount() {
    this.game = new PhaserGame(this);
  }

  render() {
    return (
      <>
        <div id="gameContainer" />
        <span>{this.state.lives}</span>
      </>
    );
  }
}
