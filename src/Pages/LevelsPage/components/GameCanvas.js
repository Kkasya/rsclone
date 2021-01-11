import React, { Component } from 'react';
import Phaser from 'phaser';
import { IonPhaser } from '@ion-phaser/react';

export default class GameCanvas extends Component {
  constructor() {
    super();
    this.tileWidth = 40;
    this.tileHeight = 40;
  }

  state = {
    initialize: true,

    game: {
      width: 1200,
      height: 540,
      type: Phaser.AUTO,

      scene: {
        init: function () {
          this.tilemapKey = 'assets/sprites/map';
          this.tilesetKey = 'assets/sprites/tiles';
          this.cameras.main.setBackgroundColor('#24252A');
        },

        preload: function () {
          this.load.image('floor-tile', 'assets/sprites/floor.png');
        },

        create: function() {
          const level = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 2, 3, 0, 0, 0, 0, 0, 0],
            [0, 5, 6, 7, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ];

          this.tilemapKey = 'assets/sprites/';
          const tilemap = this.make.tilemap({ key: this.tilemapKey });
          console.log(tilemap)

          // const map = this.add.tilemap();
          // const map = this.state.game.createLayer.tilemap({ data: level, tileWidth: this.tileWidth, tileHeight: this.tileHeight });
          // const tiles = map.addTilesetImage('floor-tile');
          // const layer = map.createLayer(0, tiles, 0, 0);
        },

        update: function () {

        }
      }
    }
  };

  render() {
    const { initialize, game } = this.state
    return (
      <IonPhaser game={game} initialize={initialize} />
    );
  }
}
