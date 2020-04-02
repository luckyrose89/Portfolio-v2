class MobileMenu {
  constructor() {
    this.menuBars = Array.prototype.slice.call(
      document.querySelectorAll(
        ".site-header__menu-icon--barOne, .site-header__menu-icon--barTwo, .site-header__menu-icon--barThree"
      )
    );
    this.menuIcon = document.querySelector(".site-header__menu-icon");
    this.menuBarsModifiedClasses = [
      "site-header__menu-icon--close--barOne",
      "site-header__menu-icon--close--barTwo",
      "site-header__menu-icon--close--barThree"
    ];
    this.events();
  }

  events() {
    this.menuIcon.addEventListener("mouseover", () => this.highlightMenuBars());
    this.menuIcon.addEventListener("mouseout", () => this.resetMenuBars());
    this.menuIcon.addEventListener("click", () => this.toggleTheMenu());
  }

  highlightMenuBars() {
    for (let i = 0; i < this.menuBars.length; i++) {
      this.menuBars[i].style.background = "#c3073f";
    }
  }

  resetMenuBars() {
    for (let i = 0; i < this.menuBars.length; i++) {
      this.menuBars[i].style.background = "#ffffff";
    }
  }

  toggleTheMenu() {
    this.changeMenuToClose();
  }

  changeMenuToClose() {
    this.menuIcon.classList.toggle("site-header__menu-icon--close");
    for (var i = 0; i < this.menuBars.length; i++) {
      this.menuBars[i].classList.toggle(this.menuBarsModifiedClasses[i]);
    }
  }
}

export default MobileMenu;
