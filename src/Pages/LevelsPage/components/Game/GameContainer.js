import React, { Component } from 'react';
import PhaserGame from './PhaserGame';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { stylesCommonObj } from '../../../../common/styles/stylesCommon';

class GameContainer extends Component {
  constructor({ levelNumber }) {
    super();
    this.levelNumber = levelNumber;
    this.idGame = ((this.levelNumber / 4) - Math.floor(this.levelNumber/4)) * 4;
  }

  componentDidMount() {
    this.game = new PhaserGame(this.levelNumber);
    const srcGame = `${process.env.PUBLIC_URL}/assets/sounds/${this.idGame}.mp3`;
    this.audioGame = new Audio(srcGame);
    this.interval = setInterval(() => this.playGame(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.audioGame.pause();
  }

  playGame = () => {
    //const isShowBySetting = this.settings[1].state;
    if (1)  this.audioGame.play();
    else  this.audioGame.pause();
  }

  render() {
    const { classes } = this.props;
    return (
      <Container
        maxWidth='lg'
        className={`${classes.container} ${classes.containerLevels}`}
      >
        <div id="gameContainer" />
      </Container>
    );
  }
}

export default withStyles(stylesCommonObj)(GameContainer);
