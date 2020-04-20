import "../styles/styles.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import "gumshoejs/src/js/gumshoe/_closest.polyfill";
import "gumshoejs/src/js/gumshoe/_customEvent.polyfill";
import Gumshoe from "gumshoejs/src/js/gumshoe/gumshoe";
import MobileMenu from "./modules/MobileMenu";
import SlideShow from "./modules/SlideShow";
import FixedNav from "./modules/FixedNav";
import Accordion from "./modules/Accordion";
import FixedColumn from "./modules/FixedColumn";

new MobileMenu();
new SlideShow();
new FixedNav();
new Accordion();
new FixedColumn();

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

if (module.hot) {
  module.hot.accept();
}
