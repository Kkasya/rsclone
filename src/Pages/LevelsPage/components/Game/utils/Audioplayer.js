export default class Audioplayer {
  constructor(levelVariant, isMusicOn) {
    this.levelVariant = levelVariant;
    this.isMusicOn = isMusicOn;
  }

  play(fileName) {
    if (this.isMusicOn) {
      if (this.audio) {
        this.audio.pause();
      }
      const name = fileName || this.levelVariant;
      this.audio = document.createElement('audio');
      this.audio.setAttribute('src', `/assets/sounds/${name}.mp3`);
      this.audio.loop = !fileName;
      this.audio.load();

      if (fileName) {
        this.audio.play();
      }
    }
  }

  start() {
    if (this.audio) {
      this.audio.play();
    }
  }

  pause() {
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }
}
