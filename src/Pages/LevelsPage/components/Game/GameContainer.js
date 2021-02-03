import React, { Component } from 'react';
import PhaserGame from './PhaserGame';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { stylesCommonObj } from '../../../../common/styles/stylesCommon';
import { toggleSetting } from '../../../../redux/actions';
import { connect } from 'react-redux';
import Audioplayer from './utils/Audioplayer';

class GameContainer extends Component {
  constructor({ history, levelNumber, settings }) {
    super();
    this.history = history;
    this.levelNumber = levelNumber;
    const levelVariant = this.levelNumber % 4;
    this.audioplayer = new Audioplayer(levelVariant, settings[0].state);
  }

  componentDidMount() {
    this.game = new PhaserGame(this.history, this.levelNumber, this.audioplayer);
    this.audioplayer.play();
  }

  componentWillUnmount() {
    this.audioplayer.pause();
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
