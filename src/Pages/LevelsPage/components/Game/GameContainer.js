import React, { Component } from 'react';
import PhaserGame from './PhaserGame';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { stylesCommonObj } from '../../../../common/styles/stylesCommon';

class GameContainer extends Component {
  constructor({ history, levelNumber }) {
    super();
    this.levelNumber = levelNumber;
    this.history = history;
  }

  componentDidMount() {
    this.game = new PhaserGame(this.history, this.levelNumber);
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
