import "../styles/styles.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import MobileMenu from "./modules/MobileMenu";
import SlideShow from "./modules/SlideShow";
import FixedNav from "./modules/FixedNav";
import Accordion from "./modules/Accordion";

new MobileMenu();
new SlideShow();
new FixedNav();
new Accordion();

if (module.hot) {
  module.hot.accept();
}
