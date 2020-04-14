import "../styles/styles.css";
import MobileMenu from "./modules/MobileMenu";
import SlideShow from "./modules/SlideShow";
import FixedNav from "./modules/FixedNav";

new MobileMenu();
new SlideShow();
new FixedNav();

if (module.hot) {
  module.hot.accept();
}
