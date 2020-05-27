"use strict";

const linkItems = document.getElementsByClassName("link-item");

setLinksVisibility();

window.addEventListener("resize", () => {
  for(let item of linkItems) {
    if(window.innerWidth < 980) {
      const listOfLinks = item.getElementsByTagName("ul")[0];
      listOfLinks.style.display = "none";
    }
    else {
      const listOfLinks = item.getElementsByTagName("ul")[0];
      listOfLinks.style.display = "block";
    }
  }
});

function setLinksVisibility() {
  // Show and hide links on header click
  for (let item of linkItems) {
    const header = item.getElementsByClassName("header")[0];
    const listOfLinks = item.getElementsByTagName("ul")[0];

    if (window.innerWidth < 980) {
      header.addEventListener("click", () => {
        if (listOfLinks.style.display === "block") {
          listOfLinks.style.display = "none";

          if(header.classList.contains("last"))
            header.style.setProperty("margin-bottom", "3.3rem");
        } else {
          listOfLinks.style.display = "block";

          if(header.classList.contains("last")) {
            header.style.setProperty("margin-bottom", "0");
            listOfLinks.style.setProperty("margin-bottom", "3.3rem");
          }
        }
      });
    } else {
      listOfLinks.style.display = "block";
    }
  }
}
