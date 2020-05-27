"use strict";

const linkItems = document.getElementsByClassName("link-item");
const minDesktopWidth = 980;

setLinksVisibility();

// Make links return to their 'default state' on window resize
window.addEventListener("resize", () => {
  for(let item of linkItems) {
    if(window.innerWidth < minDesktopWidth) {
      const listOfLinks = item.getElementsByTagName("ul")[0];
      listOfLinks.style.display = "none";
    }
    else {
      const listOfLinks = item.getElementsByTagName("ul")[0];
      listOfLinks.style.display = "block";
    }
  }
});

// Show and hide links on header click
function setLinksVisibility() {
  const marginStr = "3.3rem";

  for (let item of linkItems) {
    const header = item.getElementsByClassName("header")[0];
    const listOfLinks = item.getElementsByTagName("ul")[0];

    if (window.innerWidth < minDesktopWidth) {
      header.addEventListener("click", () => {
        if (listOfLinks.style.display === "block") {
          listOfLinks.style.display = "none";

          if(header.classList.contains("last"))
            header.style.setProperty("margin-bottom", marginStr);
        } else {
          listOfLinks.style.display = "block";

          if(header.classList.contains("last")) {
            header.style.setProperty("margin-bottom", "0");
            listOfLinks.style.setProperty("margin-bottom", marginStr);
          }
        }
      });
    }
    // All links shown on desktop
    else {
      listOfLinks.style.display = "block";
    }
  }
}
