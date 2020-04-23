class TwitterFeed {
  constructor() {
    this.twitterItems = Array.prototype.slice.call(
      document.querySelectorAll(".footer__twitter-feed--item")
    );
    this.controlLeft = document.querySelector(".ctrl-left");
    this.controlRight = document.querySelector(".ctrl-right");
    this.slideIndex = 0;
    this.events();
  }

  events() {
    this.twitterItems[this.slideIndex].classList.add(
      "footer__twitter-feed--item--active"
    );
    this.controlLeft.addEventListener("click", () =>
      this.incrementSlideIndex()
    );
    this.controlRight.addEventListener("click", () =>
      this.decrementSlideIndex()
    );
  }

  incrementSlideIndex() {
    if (this.slideIndex < this.twitterItems.length - 1) {
      this.slideIndex++;
    } else {
      this.slideIndex = 0;
    }

    this.addAndRemoveActive(this.slideIndex);
  }

  decrementSlideIndex() {
    if (this.slideIndex > 0) {
      this.slideIndex--;
    } else {
      this.slideIndex = this.twitterItems.length - 1;
    }
    this.addAndRemoveActive(this.slideIndex);
  }

  addAndRemoveActive(index) {
    this.twitterItems.map(item =>
      item.classList.remove("footer__twitter-feed--item--active")
    );
    this.twitterItems[index].classList.add(
      "footer__twitter-feed--item--active"
    );
  }
}

export default TwitterFeed;
