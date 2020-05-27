"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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