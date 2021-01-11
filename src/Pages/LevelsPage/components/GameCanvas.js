import React, { Component } from 'react';
import Phaser from 'phaser';
import { IonPhaser } from '@ion-phaser/react';

export default class GameCanvas extends Component {
  state = {
    initialize: true,

    game: {
      tileSize: 40,
      fieldSize: 10,
      get width() {
        return this.tileSize * this.fieldSize;
      },
      get height() {
        return this.tileSize * this.fieldSize;
      },
      type: Phaser.AUTO,
      scale: {
        zoom: 1.5,
      },

      scene: {
        init: function () {

        },

        preload: function () {
          this.load.image('floor-tile', 'assets/sprites/floor.png');
          this.load.tilemapCSV('map', 'assets/sprites/level1.csv');
        },

        create: function () {
          const level = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ];

          // const map = this.make.tilemap({ key: 'map', tileWidth: 40, tileHeight: 40 });
          const map = this.make.tilemap({ data: level, tileWidth: 40, tileHeight: 40 });
          const tileset = map.addTilesetImage('floor-tile');
          const layer = map.createStaticLayer(0, tileset, 0, 0); // layer index, tileset, x, y
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
