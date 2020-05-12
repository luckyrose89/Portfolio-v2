class Gallery {
  constructor() {
    this.gallery = document.querySelector(".gallery");
    this.cards = Array.prototype.slice.call(
      document.querySelectorAll(".gallery__card")
    );
    this.galleryMenu = Array.prototype.slice.call(
      document.querySelectorAll(".gallery__menu--item")
    );
    this.events();
    this.handleGalleryMenu();
  }

  events() {
    this.removeCards();
    this.galleryMenu[0].classList.add("gallery__menu--active");
    this.appendcards(this.cards);
  }

  // handle clicks on the gallery menu
  handleGalleryMenu() {
    let self = this;
    this.galleryMenu.forEach(function(item) {
      item.addEventListener("click", function(event) {
        self.highlightAndRemoveItem(event);
        let attribute = event.target.getAttribute("data-filter");
        self.filterCards(attribute);
      });
    });
  }

  // add active class to chosen menu item
  highlightAndRemoveItem(event) {
    this.galleryMenu.forEach(function(item) {
      item.classList.remove("gallery__menu--active");
    });
    event.target.classList.add("gallery__menu--active");
  }

  // filter cards array based on data attribute
  filterCards(attr) {
    if (attr === "all") {
      this.removeCards();
      this.appendcards(this.cards);
    } else {
      let filteredArray = this.cards.filter(function(card) {
        if (card.getAttribute("data-group") === attr) {
          return card;
        }
      });
      this.removeCards();
      this.appendcards(filteredArray);
    }
  }

  // remove cards from display
  removeCards() {
    // Polyfill for remove
    (function(arr) {
      arr.forEach(function(item) {
        if (item.hasOwnProperty("remove")) {
          return;
        }
        Object.defineProperty(item, "remove", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: function remove() {
            if (this.parentNode === null) {
              return;
            }
            this.parentNode.removeChild(this);
          }
        });
      });
    })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
    this.cards.forEach(function(card) {
      card.remove();
    });
  }

  // add cards with animation delay
  appendcards(cards) {
    let delay = 0;
    for (var i = 0; i < cards.length; i++) {
      delay += 0.3;
      this.gallery.appendChild(cards[i]);
      cards[i].style.animation = "moveUp 0.5s linear";
      cards[i].style.animationFillMode = "forwards";
      cards[i].style.animationDelay = delay + "s";
    }
  }
}
export default Gallery;
