class SlideShow {
  constructor() {
    this.slides = Array.prototype.slice.call(
      document.querySelectorAll(".large-hero__slide")
    );
    this.progressBars = Array.prototype.slice.call(
      document.querySelectorAll(".slide-progress--bar")
    );
    this.slideNext = document.querySelector(".slide-controls--next");
    this.slideprevious = document.querySelector(".slide-controls--prev");
    this.slideIndex = 0;
    this.events();
  }

  events() {
    if (!this.slideNext || !this.slideprevious) return;
    this.hideAllSlides();
    this.slideNext.addEventListener("click", () => this.showNextSlide());
    this.slideprevious.addEventListener("click", () => this.showPrevSlide());
    this.showSlide(this.slideIndex);
    this.highlightProgressBar(this.slideIndex);
  }

  hideAllSlides() {
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = "none";
    }
  }

  showNextSlide() {
    if (this.slideIndex < this.slides.length - 1) {
      this.slideIndex++;
    } else {
      this.slideIndex = 0;
    }
    this.showSlide(this.slideIndex);
    this.highlightProgressBar(this.slideIndex);
  }

  showPrevSlide() {
    if (this.slideIndex > 0) {
      this.slideIndex--;
    } else {
      this.slideIndex = this.slides.length - 1;
    }
    this.showSlide(this.slideIndex);
    this.highlightProgressBar(this.slideIndex);
  }

  showSlide(n) {
    this.hideAllSlides();
    this.slides[n].style.display = "block";
  }

  highlightProgressBar(n) {
    this.clearProgressBars();
    this.progressBars[n].style.background = "#c3073f";
  }

  clearProgressBars() {
    for (let i = 0; i < this.progressBars.length; i++) {
      this.progressBars[i].style.background = "rgba(255,255,255, 0.5)";
    }
  }
}

export default SlideShow;
