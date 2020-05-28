"use strict";

const linkItems = document.getElementsByClassName("link-item");
const minDesktopWidth = 980;

setLinksVisibility();

// Make links return to their 'default state' on window resize
window.addEventListener("resize", () => {
  for (let item of linkItems) {
    if (window.innerWidth < minDesktopWidth) {
      const listOfLinks = item.getElementsByTagName("ul")[0];
      listOfLinks.style.display = "none";
    } else {
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

          if (header.classList.contains("last"))
            header.style.setProperty("margin-bottom", marginStr);
        } else {
          listOfLinks.style.display = "block";

          if (header.classList.contains("last")) {
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

class Slider {
  constructor(imgs, howManyToDisplay = 1) {
    this._imgs = imgs;
    this._index = 0;
    this._howManyToDisplay = howManyToDisplay;
  }

  clearSlider() {
    for (let i = 0; i < this._imgs.length; i++) {
      this._imgs[i].classList.remove("active");
    }
  }

  setImgsToDisplay() {
    for (let i = 0; i < this._imgs.length; i++) {
      // Mark as 'active' (selected to display)
      if (i >= this._index && i <= this._index + this._howManyToDisplay) {
        if(i < this._imgs.length)
          this._imgs[i].classList.add("active");
        // If we want to select an image past the last one
        // we will have to start from the first image
        else {
          this._imgs[]
        }
      }
    }
  }

  changeSlide(step) {
    this._imgs[this._index].classList.remove("active");

    if (this._index + step > this._imgs.length - 1)
      this._index = this._imgs.length - 1;
    else if (this._index + step < 0) this._index = 0;
    else this._index += step;

    this._imgs[this._index].classList.add("active");
  }
}

const photosSlider = document.getElementById("photos-slider");
const slide = photosSlider.children[1];
const imgs = slide.getElementsByTagName("img");
const btPrev = document.getElementById("bt-prev-photo");
const btNext = document.getElementById("bt-next-photo");
const photoSlider = new Slider(imgs);

btNext.addEventListener("click", () => {
  photoSlider.changeSlide(1);
});

btPrev.addEventListener("click", () => {
  photoSlider.changeSlide(-1);
});
