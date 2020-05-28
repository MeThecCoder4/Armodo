"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var linkItems = document.getElementsByClassName("link-item");
var minDesktopWidth = 980;
setLinksVisibility(); // Make links return to their 'default state' on window resize

window.addEventListener("resize", function () {
  var _iterator = _createForOfIteratorHelper(linkItems),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;

      if (window.innerWidth < minDesktopWidth) {
        var listOfLinks = item.getElementsByTagName("ul")[0];
        listOfLinks.style.display = "none";
      } else {
        var _listOfLinks = item.getElementsByTagName("ul")[0];
        _listOfLinks.style.display = "block";
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}); // Show and hide links on header click

function setLinksVisibility() {
  var marginStr = "3.3rem";

  var _iterator2 = _createForOfIteratorHelper(linkItems),
      _step2;

  try {
    var _loop = function _loop() {
      var item = _step2.value;
      var header = item.getElementsByClassName("header")[0];
      var listOfLinks = item.getElementsByTagName("ul")[0];

      if (window.innerWidth < minDesktopWidth) {
        header.addEventListener("click", function () {
          if (listOfLinks.style.display === "block") {
            listOfLinks.style.display = "none";
            if (header.classList.contains("last")) header.style.setProperty("margin-bottom", marginStr);
          } else {
            listOfLinks.style.display = "block";

            if (header.classList.contains("last")) {
              header.style.setProperty("margin-bottom", "0");
              listOfLinks.style.setProperty("margin-bottom", marginStr);
            }
          }
        });
      } // All links shown on desktop
      else {
          listOfLinks.style.display = "block";
        }
    };

    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

var Slider = /*#__PURE__*/function () {
  function Slider(imgs) {
    var howManyToDisplay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    _classCallCheck(this, Slider);

    this._maxIndex = imgs.length;
    this._imgs = imgs;
    this._index = 0;
    this._howManyToDisplay = howManyToDisplay;
  }

  _createClass(Slider, [{
    key: "clearSlider",
    value: function clearSlider() {
      for (var i = 0; i < this._maxIndex; i++) {
        this._imgs[i].classList.remove("active");
      }
    }
  }, {
    key: "setImgsToDisplay",
    value: function setImgsToDisplay() {
      for (var i = 0; i < this._maxIndex; i++) {
        // Mark as 'active' (selected to display)
        if (i >= this._index && i <= this._index + this._howManyToDisplay) {
          if (i < this._maxIndex) this._imgs[i].classList.add("active"); // If we want to select an image past the last one
          // we will have to start from the first image
          else {}
        }
      }
    }
  }, {
    key: "changeSlide",
    value: function changeSlide(step) {
      this._imgs[this._index].classList.remove("active");

      if (this._index + step > this._imgs.length - 1) this._index = this._imgs.length - 1;else if (this._index + step < 0) this._index = 0;else this._index += step;

      this._imgs[this._index].classList.add("active");
    }
  }]);

  return Slider;
}();

var photosSlider = document.getElementById("photos-slider");
var slide = photosSlider.children[1];
var imgs = slide.getElementsByTagName("img");
var btPrev = document.getElementById("bt-prev-photo");
var btNext = document.getElementById("bt-next-photo");
var photoSlider = new Slider(imgs);
btNext.addEventListener("click", function () {
  photoSlider.changeSlide(1);
});
btPrev.addEventListener("click", function () {
  photoSlider.changeSlide(-1);
});