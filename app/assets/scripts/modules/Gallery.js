class Gallery {
  constructor() {
    this.cards = Array.prototype.slice.call(
      document.querySelectorAll(".gallery__card")
    );
    this.events();
  }

  events() {
    this.appendcards();
  }

  appendcards() {
    let delay = 0;
    for (var i = 0; i < this.cards.length; i++) {
      delay += 0.3;
      this.cards[i].style.animation = "moveUp 0.5s linear";
      this.cards[i].style.animationFillMode = "forwards";
      this.cards[i].style.animationDelay = delay + "s";
    }
  }
}
export default Gallery;
