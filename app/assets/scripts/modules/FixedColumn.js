import "gumshoejs/src/js/gumshoe/_closest.polyfill";
import "gumshoejs/src/js/gumshoe/_customEvent.polyfill";
import Gumshoe from "gumshoejs/src/js/gumshoe/gumshoe";

const images = {
  about: "assets/images/about.jpg",
  resume: "assets/images/resume.jpg",
  skills: "assets/images/game-keyboard.jpg"
};

const header = document.querySelector(".site-header");

const spy = new Gumshoe(".fixed-nav__list a", {
  navClass: "fixed-nav__highlight",
  reflow: true,
  offset: function() {
    return header.getBoundingClientRect().height;
  },
  events: true
});

spy.detect();

class FixedColumn {
  constructor() {
    this.navlist = document.querySelector(".fixed-nav__list");
    this.fixedColumn = document.querySelector(".fixed-column");
    this.fixedColumnText = document.querySelector(
      ".fixed-column__text-content"
    );
    this.events();
  }
  events() {
    document.addEventListener("gumshoeActivate", event =>
      this.updateFixedColumn(event)
    );
  }

  updateFixedColumn(event) {
    let listItemData = event.target.getAttribute("data-link");
    this.setBanner(listItemData);
  }

  setBanner(attribute) {
    let imageLink = images[attribute];
    this.fixedColumn.style.backgroundImage = `url('${imageLink}')`;
    this.fixedColumnText.textContent = attribute;
  }
}

export default FixedColumn;
