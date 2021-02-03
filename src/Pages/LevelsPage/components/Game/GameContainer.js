import React, { Component } from 'react';
import PhaserGame from './PhaserGame';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { stylesCommonObj } from '../../../../common/styles/stylesCommon';
import { toggleSetting } from '../../../../redux/actions';
import { connect } from 'react-redux';

class GameContainer extends Component {
  constructor({ levelNumber, settings }) {
    super();
    this.levelNumber = levelNumber;
    this.settings = settings;
    this.idGame = ((this.levelNumber / 4) - Math.floor(this.levelNumber/4)) * 4;
  }

  componentDidMount() {
    this.game = new PhaserGame(this.levelNumber);
    const srcGame = `/assets/sounds/${this.idGame}.mp3`;
    this.audioGame = new Audio(srcGame);
    this.interval = setInterval(() => this.playGame(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.audioGame.pause();
  }

  playGame = () => {
    const isShowBySetting = this.settings[1].state;
    if (isShowBySetting)  this.audioGame.play();
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
const mapStateToProps = (state) => ({
  settings: state.settings,
});

const mapDispatchToProps = {
  toggleSetting,
};

export default withStyles(stylesCommonObj)(connect(mapStateToProps, mapDispatchToProps)(GameContainer));
