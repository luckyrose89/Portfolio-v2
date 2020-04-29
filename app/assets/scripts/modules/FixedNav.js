class FixedNav {
  constructor() {
    this.fixedNavbar = document.querySelector(".fixed-nav");
    this.containerToLocate = document.querySelector(".inner-wrapper");
    this.events();
  }

  events() {
    if (!this.fixedNavbar) return;
    document.addEventListener("scroll", () => this.locateAndFixNav());
  }

  locateAndFixNav() {
    if (this.containerToLocate.getBoundingClientRect().top <= 0) {
      this.fixedNavbar.classList.add("fixed-nav__fixed");
    } else {
      this.fixedNavbar.classList.remove("fixed-nav__fixed");
    }
  }
}

export default FixedNav;
