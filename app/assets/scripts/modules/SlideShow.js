class SlideShow {
  constructor() {
    this.slides = Array.prototype.slice.call(
      document.querySelectorAll(".large-hero__slide")
    );
    this.slideNext = document.querySelector(".slide-controls--next");
    this.slideprevious = document.querySelector(".slide-controls--prev");
    this.slideIndex = 0;
    this.events();
  }

  events() {
    this.hideAllSlides();
    this.slideNext.addEventListener("click", () => this.showNextSlide());
    this.slideprevious.addEventListener("click", () => this.showPrevSlide());
    this.showSlide(this.slideIndex);
  }

  hideAllSlides() {
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = "none";
    }
  }

  showNextSlide() {
    if (this.slideIndex < this.slides.length - 1) {
      this.slideIndex++;
    }
    this.showSlide(this.slideIndex);
  }

  showPrevSlide() {
    if (this.slideIndex > 0) {
      this.slideIndex--;
    }
    this.showSlide(this.slideIndex);
  }

  showSlide(n) {
    this.hideAllSlides();
    this.slides[n].style.display = "block";
  }
}

export default SlideShow;
