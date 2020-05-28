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
    if(howManyToDisplay > imgs.length)
      throw new Error("Can't display more images than you have!");

    this._imgs = imgs;
    this._index = 2;
    this._howManyToDisplay = howManyToDisplay;
    this.clearSlider();
    this.setImgsToDisplay();
  }

  clearSlider() {
    for (let i = 0; i < this._imgs.length; i++) {
      this._imgs[i].classList.remove("active");
    }
  }

  setImgsToDisplay() {
    let selected = 0;
    console.log("here");
    
    for (let i = 0; i < this._imgs.length; i++) {
      // Mark as 'active' (selected to display)
      if (i >= this._index && i < this._index + this._howManyToDisplay) {
        this._imgs[i].classList.add("active");
        selected++;
      }
    }

    // If we exceeded the last image - pick the difference back from the first one
    if (selected < this._howManyToDisplay) {
      for(let i = 0; i < this._howManyToDisplay - selected; i++)
        this._imgs[i].classList.add("active");
    }

  }

  // changeSlide(step) {
  //   this._imgs[this._index].classList.remove("active");

  //   if (this._index + step > this._imgs.length - 1)
  //     this._index = this._imgs.length - 1;
  //   else if (this._index + step < 0) this._index = 0;
  //   else this._index += step;

  //   this._imgs[this._index].classList.add("active");
  // }
}

const photosSlider = document.getElementById("photos-slider");
const slide = photosSlider.children[1];
const imgs = slide.getElementsByTagName("img");
const btPrev = document.getElementById("bt-prev-photo");
const btNext = document.getElementById("bt-next-photo");
let photoSlider;

try {
  console.log("Test");
  if(window.innerWidth < minDesktopWidth) {
    photoSlider = new Slider(imgs);
  }
  else {
    photoSlider = new Slider(imgs, 2);
  }
}
catch(err) {
  console.log(err);
} 

btNext.addEventListener("click", () => {
  // photoSlider.changeSlide(1);
});

btPrev.addEventListener("click", () => {
  // photoSlider.changeSlide(-1);
});
