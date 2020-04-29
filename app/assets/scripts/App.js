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
import TwitterFeed from "./modules/TwitterFeed";

new MobileMenu();
new SlideShow();
new FixedNav();
new Accordion();
new FixedColumn();

const header = document.querySelector(".site-header");
const scrollTopBtn = document.querySelector(".footer__copyright--scroll-top");
const twitterFeed = document.querySelector(".footer__twitter-feed");
const twitterUrl =
  "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frss.app%2Ffeeds%2FQcPOZnueFlV97i7f.xml&api_key=cewflxnhxawfvh5qgyh98ltpzrvhfnugmeifd57h";

// Initialize an instance of gumshoe js to enable scroll spy
// if user is on home page
if (document.querySelector(".fixed-column__image-container--home")) {
  const spy = new Gumshoe(".fixed-nav__list a", {
    navClass: "fixed-nav__highlight",
    reflow: true,
    offset: function() {
      return header.getBoundingClientRect().height;
    },
    events: true
  });

  spy.detect();
}

// Function to format dates for twitter feed
const formatDate = function(date) {
  let d = new Date(date);
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let month = months[d.getMonth()];
  let day = "" + d.getDate();
  let year = d.getFullYear();

  if (day.length < 2) {
    day = "0" + day;
  }
  return day + ", " + month + " " + year;
};

// fetch twitter feed data

fetch(twitterUrl)
  .then(function(response) {
    if (response.status !== 200) {
      console.log(
        "Looks like there was a problem. Status Code: " + response.status
      );
      return;
    }
    response.json().then(function(data) {
      for (var i = 0; i < 3; i++) {
        let listItem = document.createElement("div");
        let html =
          '<a href="' +
          data.items[i].link +
          '">' +
          "<p>" +
          formatDate(data.items[i].pubDate) +
          "<p>" +
          "<p>" +
          data.items[i].title +
          "</p>" +
          "</a>";

        listItem.innerHTML = html;
        listItem.classList.add("footer__twitter-feed--item");
        twitterFeed.appendChild(listItem);
      }
      new TwitterFeed();
    });
  })
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });

// add event listener to scroll top button in footer
scrollTopBtn.addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

if (module.hot) {
  module.hot.accept();
}
