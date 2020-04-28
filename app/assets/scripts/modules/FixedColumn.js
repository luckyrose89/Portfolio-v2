class FixedColumn {
  constructor() {
    this.navlist = document.querySelector(".fixed-nav__list");
    this.fixedColumn = document.querySelector(
      ".fixed-column__image-container--home"
    );
    this.fixedColumnText = document.querySelector(
      ".fixed-column__text-content"
    );
    this.images = {
      about: "assets/images/about.jpg",
      resume: "assets/images/resume.jpg",
      skills: "assets/images/game-keyboard.jpg"
    };
    this.mediaQuery = window.matchMedia("(min-width: 1100px)");
    this.events();
  }
  events() {
    this.setBanner("about");
    document.addEventListener("gumshoeActivate", event =>
      this.updateFixedColumn(event)
    );
    window.addEventListener("resize", () => this.updateOnresize());
  }

  updateOnresize() {
    let activeLink = document.querySelector(".fixed-nav__highlight");
    if (this.mediaQuery.matches) {
      this.setBanner(activeLink.getAttribute("data-link"));
    }
  }

  updateFixedColumn(event) {
    let listItemData = event.target.getAttribute("data-link");
    this.setBanner(listItemData);
  }

  setBanner(attribute) {
    if (this.mediaQuery.matches) {
      let imageLink = this.images[attribute];
      this.fixedColumn.style.backgroundImage = `url('${imageLink}')`;
      this.fixedColumnText.textContent = attribute;
    }
  }
}

export default FixedColumn;
