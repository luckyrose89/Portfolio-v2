class Accordion {
  constructor() {
    this.accordionTitles = Array.prototype.slice.call(
      document.querySelectorAll(".accordion__title")
    );
    this.accordionContent = Array.prototype.slice.call(
      document.querySelectorAll(".accordion__content")
    );
    this.events();
  }

  events() {
    this.accordionToggle();
  }

  accordionToggle() {
    for (let i = 0; i < this.accordionTitles.length; i++) {
      let index = i;
      this.accordionTitles[i].addEventListener("click", () =>
        this.clickHandler(index)
      );
    }
  }

  clickHandler(index) {
    this.removeActiveAccordion();
    var content = this.accordionTitles[index].nextElementSibling;
    content.classList.add("accordion__active");
  }

  removeActiveAccordion() {
    this.accordionContent.map(content =>
      content.classList.remove("accordion__active")
    );
  }
}

export default Accordion;
