class Loading {
  constructor() {
    this.loadingScreen = document.querySelector(".loading");
    this.domContent = document.querySelector(".content");
    this.events();
  }

  events() {
    const self = this;
    var interval = setInterval(function() {
      if (document.readyState === "complete") {
        clearInterval(interval);
        self.loadingScreen.style.display = "none";
        self.domContent.style.visibility = "visible";
      }
    }, 200);
  }
}

export default Loading;
