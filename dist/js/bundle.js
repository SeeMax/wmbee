/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_windowLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/windowLoad.js */ "./src/js/components/windowLoad.js");


/***/ }),

/***/ "./src/js/components/animateSection.js":
/*!*********************************************!*\
  !*** ./src/js/components/animateSection.js ***!
  \*********************************************/
/*! exports provided: animateSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateSection", function() { return animateSection; });
var animateSection = function animateSection() {
  var windowHeight = Math.round(window.innerHeight);

  if (screen.width <= 1024) {
    var myScrollHeight = windowHeight * 2;
  } else {
    var myScrollHeight = windowHeight / 2;
  }

  var myScrollOffset = 0; // Global var for animations / Access via section trig loop
  // console.log(myScrollHeight);

  var sectionAnim = {
    sectionAnim1: function sectionAnim1() {
      var thisSec = "#section1";
      var thisOverlay = $("#overlay1");
      var charsH2 = $(thisSec).find(".sec1Chars2");
      var charsH3 = $(thisSec).find(".sec1Chars3"); // Background Shape Vars

      var center4L = $(thisSec).find("#center-4L");
      var center4R = $(thisSec).find("#center-4R");
      var center3L = $(thisSec).find("#center-3L");
      var center3R = $(thisSec).find("#center-3R");
      var center2L = $(thisSec).find("#center-2L");
      var center2R = $(thisSec).find("#center-2R");
      var center1 = $(thisSec).find("#top-big");
      var topSmall = $(thisSec).find("#top-small");
      var bottomSmall = $(thisSec).find("#bottom-small");
      var centerSmall = $(thisSec).find("#center-small");
      var topLeftSmall = $(thisSec).find("#top-left-small");
      var topRighttSmall = $(thisSec).find("#top-right-small");
      var bottomLeftSmall = $(thisSec).find("#bottom-left-small");
      var bottomRighttSmall = $(thisSec).find("#bottom-right-small");
      var smallsGroup = [topSmall, bottomSmall, centerSmall, topLeftSmall, topRighttSmall, bottomLeftSmall, bottomRighttSmall]; // Arrow Pieces

      var downArrow = $(thisSec).find("#down-arrow");
      var downArrowLine = $(thisSec).find("#down-arrow-line");
      var downArrowPoint = $(thisSec).find("#down-arrow-point");
      var tl = gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.3,
          ease: "none"
        },
        // Release The Scroll Lock
        onComplete: function onComplete() {
          gsap.set(document.body, {
            overflow: "auto"
          });
        }
      });
      var lineTL = gsap.timeline({
        defaults: {
          duration: 0.8,
          ease: "none"
        }
      });
      var arrowTL = gsap.timeline({
        defaults: {
          duration: 0.15,
          ease: "none"
        },
        onComplete: function onComplete() {
          // Bounce The Down Arrow
          gsap.timeline({
            repeat: -1,
            yoyo: true
          }).to(downArrow, {
            y: -4,
            duration: 1,
            ease: "none"
          });
        },
        onReverseComplete: function onReverseComplete() {
          // Stop Bouncin The Down Arrow and Reset it's Y position
          gsap.killTweensOf(downArrow);
          gsap.set(downArrow, {
            y: 0
          });
        }
      });
      var contentTL = gsap.timeline({
        defaults: {
          duration: 0.4,
          ease: "back.out(1.5)"
        }
      }); // Set background z-index by section number / Section 2 has no back / Section 3 is z-index 110 to stay above all

      tl.set(thisOverlay, {
        zIndex: 101
      }); // Set section z-index by section number

      tl.fromTo(thisSec, {
        zIndex: 13
      }, {
        zIndex: 1001
      }); // Animate Lines

      lineTL.fromTo(center4L, {
        drawSVG: "0% 0%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo(center4R, {
        drawSVG: "100% 100%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo(center3L, {
        drawSVG: "0% 0%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo(center3R, {
        drawSVG: "100% 100%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo(center2L, {
        drawSVG: "0% 0%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo(center2R, {
        drawSVG: "100% 100%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo(center1, {
        drawSVG: "50% 50%"
      }, {
        drawSVG: "100% 0%",
        duration: 0.7
      }, "scrollIn+=0.1");
      lineTL.fromTo(smallsGroup, {
        drawSVG: "50% 50%"
      }, {
        drawSVG: "100% 0%",
        duration: 0.6
      }, "scrollIn+=0.2"); // Animate Content

      contentTL.fromTo(charsH2, {
        x: -20,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        stagger: {
          amount: 0.5
        }
      }, "content");
      contentTL.fromTo(charsH3, {
        y: "1.01em"
      }, {
        y: 0,
        stagger: {
          amount: 0.2,
          from: "center"
        }
      }, "content+=0.35"); // Animate Arrow

      arrowTL.fromTo(downArrowLine, {
        drawSVG: "100% 100%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      arrowTL.fromTo(downArrowPoint, {
        drawSVG: "50% 50%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn+=0.145"); // Build Master TLTL

      tl.fromTo(thisOverlay, {
        opacity: 0
      }, {
        opacity: 0.65
      }, "scrollInAll");
      tl.add(lineTL, "scrollInAll+=0.3");
      tl.add(contentTL, "scrollInAll+=0.8");
      tl.add(arrowTL, "scrollInAll+=1.4");
      return tl;
    },
    sectionAnim2: function sectionAnim2() {
      var thisSec = $("#section2");
      var charsH2 = $(thisSec).find(".h2Chars");
      var linesP = $(thisSec).find(".pLines"); // Background Shape Vars

      var center4L = $(thisSec).find("#center-4L");
      var center4R = $(thisSec).find("#center-4R");
      var center3L = $(thisSec).find("#center-3L");
      var center3R = $(thisSec).find("#center-3R");
      var center2L = $(thisSec).find("#center-2L");
      var center2R = $(thisSec).find("#center-2R");
      var center1 = $(thisSec).find("#top-big");
      var topSmall = $(thisSec).find("#top-small");
      var bottomSmall = $(thisSec).find("#bottom-small");
      var centerSmall = $(thisSec).find("#center-small");
      var topLeftSmall = $(thisSec).find("#top-left-small");
      var topRighttSmall = $(thisSec).find("#top-right-small");
      var bottomLeftSmall = $(thisSec).find("#bottom-left-small");
      var bottomRighttSmall = $(thisSec).find("#bottom-right-small");
      var smallsGroup = [topSmall, bottomSmall, centerSmall, topLeftSmall, topRighttSmall, bottomLeftSmall, bottomRighttSmall]; // Arrow Pieces

      var downArrow = $(thisSec).find("#down-arrow");
      var downArrowLine = $(thisSec).find("#down-arrow-line");
      var downArrowPoint = $(thisSec).find("#down-arrow-point");
      var sectionText = $(thisSec).find(".down-arrow-text");
      var tl = gsap.timeline({
        delay: 0.65,
        paused: true,
        defaults: {
          duration: 0.3,
          ease: "none"
        },
        // Release The Scroll Lock
        onComplete: function onComplete() {
          gsap.set(document.body, {
            overflow: "auto"
          });
        }
      });
      var lineTL = gsap.timeline({
        defaults: {
          duration: 0.8,
          ease: "none"
        }
      });
      var contentTL = gsap.timeline({
        defaults: {
          duration: 0.15,
          ease: "back.out(1.5)"
        }
      });
      var arrowTL = gsap.timeline({
        defaults: {
          duration: 0.15,
          ease: "none"
        },
        onComplete: function onComplete() {
          // Bounce The Down Arrow
          gsap.timeline({
            repeat: -1,
            yoyo: true
          }).to(downArrow, {
            y: -3,
            duration: 1,
            ease: "none"
          });
        },
        onReverseComplete: function onReverseComplete() {
          // Stop Bouncin The Down Arrow and Reset it's Y position
          gsap.killTweensOf(downArrow);
          gsap.set(downArrow, {
            y: 0
          });
        }
      }); // Set section z-index by section number

      tl.fromTo(thisSec, {
        zIndex: 13
      }, {
        zIndex: 1002
      }); // Animate Lines

      lineTL.fromTo(center4L, {
        drawSVG: "100% 100%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo(center4R, {
        drawSVG: "0% 0%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo(center3L, {
        drawSVG: "100% 100%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo(center3R, {
        drawSVG: "0% 0%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo(center2L, {
        drawSVG: "100% 100%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo(center2R, {
        drawSVG: "0% 0%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo(center1, {
        drawSVG: "50% 50%"
      }, {
        drawSVG: "100% 0%",
        duration: 0.7
      }, "scrollIn+=0.1");
      lineTL.fromTo(smallsGroup, {
        drawSVG: "50% 50%"
      }, {
        drawSVG: "100% 0%",
        duration: 0.6
      }, "scrollIn+=0.2"); // Animate Content

      contentTL.fromTo(charsH2, {
        x: -20,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        stagger: {
          amount: 0.3,
          from: "random"
        }
      }, "scrollIn");
      contentTL.fromTo(linesP, {
        opacity: 0,
        x: -40
      }, {
        opacity: 1,
        x: 0,
        stagger: {
          amount: 0.3
        }
      }, "scrollIn+=0.1"); // Animate Arrow

      arrowTL.fromTo(sectionText, {
        y: -6,
        opacity: 0
      }, {
        y: 0,
        opacity: 1
      }, "scrollIn");
      arrowTL.fromTo(downArrowLine, {
        drawSVG: "100% 100%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn+=0.025");
      arrowTL.fromTo(downArrowPoint, {
        drawSVG: "50% 50%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn+=0.175"); // Build Master TLTL

      tl.to(".header-logo", {
        duration: 0.9,
        width: 190,
        ease: "sine.out"
      }, "scrollInAll+=0.1");
      tl.add(lineTL, "scrollInAll");
      tl.add(contentTL, "scrollInAll+=0.75");
      tl.add(arrowTL, "scrollInAll+=0.7");
      return tl;
    },
    // sectionAnim3: () => {
    //   let thisSec = $("#section3");
    //   let thisBack = $("#background3");
    //   let center4L = $(thisSec).find("#center-4L");
    //   let center4R = $(thisSec).find("#center-4R");
    //   let center3L = $(thisSec).find("#center-3L");
    //   let center3R = $(thisSec).find("#center-3R");
    //   let center2L = $(thisSec).find("#center-2L");
    //   let center2R = $(thisSec).find("#center-2R");
    //   let bottomSmall = $(thisSec).find("#bottom-small");
    //   // Arrow Pieces
    //   let downArrow = $(thisSec).find("#down-arrow");
    //   let downArrowLine = $(thisSec).find("#down-arrow-line");
    //   let downArrowPoint = $(thisSec).find("#down-arrow-point");
    //   let sectionText = $(thisSec).find(".down-arrow-text");
    //   let tl = gsap.timeline({
    //     delay: 0.3,
    //     paused: true,
    //     defaults: {
    //       duration: 0.3,
    //       ease: "none",
    //     },
    //     // Release The Scroll Lock
    //     onComplete: function () {
    //       gsap.set(document.body, { overflow: "auto" });
    //     },
    //     onReverseComplete: function () {
    //       // Set the Background Back Behind
    //       gsap.set(thisBack, { zIndex: 99 });
    //     },
    //   });
    //   let lineTL = gsap.timeline({
    //     defaults: {
    //       duration: 0.8,
    //       ease: "none",
    //     },
    //   });
    //   let contentTL = gsap.timeline({
    //     defaults: {
    //       duration: 0.6,
    //       ease: "back.out(.2)",
    //     },
    //   });
    //   let arrowTL = gsap.timeline({
    //     defaults: {
    //       duration: 0.15,
    //       ease: "none",
    //     },
    //     onComplete: function () {
    //       // Bounce The Down Arrow
    //       gsap
    //         .timeline({ repeat: -1, yoyo: true })
    //         .to(downArrow, { y: -4, duration: 1, ease: "none" });
    //     },
    //     onReverseComplete: function () {
    //       // Stop Bouncin The Down Arrow and Reset it's Y position
    //       gsap.killTweensOf(downArrow);
    //       gsap.set(downArrow, { y: 0 });
    //     },
    //   });
    //   // Set background z-index by section number / Section 2 has no back / Section 3 is z-index 110 to stay above all
    //   tl.set(thisBack, { opacity: 1, zIndex: 110 });
    //   // Set section z-index by section number
    //   tl.fromTo(thisSec, { zIndex: 13 }, { zIndex: 1003 });
    //   // Animate Lines
    //   lineTL.fromTo(
    //     center4L,
    //     { drawSVG: "0% 0%" },
    //     { drawSVG: "100% 0%" },
    //     "scrollIn"
    //   );
    //   lineTL.fromTo(
    //     center4R,
    //     { drawSVG: "100% 100%" },
    //     { drawSVG: "100% 0%" },
    //     "scrollIn"
    //   );
    //   lineTL.fromTo(
    //     center3L,
    //     { drawSVG: "0% 0%" },
    //     { drawSVG: "100% 0%" },
    //     "scrollIn"
    //   );
    //   lineTL.fromTo(
    //     center3R,
    //     { drawSVG: "100% 100%" },
    //     { drawSVG: "100% 0%" },
    //     "scrollIn"
    //   );
    //   lineTL.fromTo(
    //     center2L,
    //     { drawSVG: "0% 0%" },
    //     { drawSVG: "100% 0%" },
    //     "scrollIn"
    //   );
    //   lineTL.fromTo(
    //     center2R,
    //     { drawSVG: "100% 100%" },
    //     { drawSVG: "100% 0%" },
    //     "scrollIn"
    //   );
    //   // Animate Content
    //   contentTL.fromTo(
    //     bottomSmall,
    //     { drawSVG: "50% 50%" },
    //     { drawSVG: "0% 100%" },
    //     "scrollIn"
    //   );
    //   contentTL.fromTo(
    //     ".videoArea",
    //     { height: 0 },
    //     { height: "auto" },
    //     "scrollIn+=0.2"
    //   );
    //   // Animate Arrow
    //   arrowTL.fromTo(
    //     sectionText,
    //     { y: -6, opacity: 0 },
    //     { y: 0, opacity: 1 },
    //     "scrollIn"
    //   );
    //   arrowTL.fromTo(
    //     downArrowLine,
    //     { drawSVG: "100% 100%" },
    //     { drawSVG: "100% 0%" },
    //     "scrollIn+=0.025"
    //   );
    //   arrowTL.fromTo(
    //     downArrowPoint,
    //     { drawSVG: "50% 50%" },
    //     { drawSVG: "100% 0%" },
    //     "scrollIn+=0.175"
    //   );
    //   // Build Master TL TL
    //   tl.add(lineTL, "scrollInAll");
    //   tl.fromTo(thisBack, { y: "-100%" }, { y: 0 }, "scrollInAll+=0.55");
    //   tl.add(contentTL, "scrollInAll+=0.75");
    //   tl.add(arrowTL, "scrollInAll+=1");
    //   return tl;
    // },
    sectionAnim3: function sectionAnim3() {
      var thisSec = $("#section4");
      var thisBack = $("#background4");
      var charsH2 = $(thisSec).find(".h2Chars");
      var linesP = $(thisSec).find(".pLines");
      var soloCenter2 = $(thisSec).find("#solo-center-2");
      var soloCenter1 = $(thisSec).find("#solo-center-1");
      var bottomSmall = $(thisSec).find("#bottom-small"); // Arrow Pieces

      var downArrow = $(thisSec).find("#down-arrow");
      var downArrowLine = $(thisSec).find("#down-arrow-line");
      var downArrowPoint = $(thisSec).find("#down-arrow-point");
      var sectionText = $(thisSec).find(".down-arrow-text");
      var tl = gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.3,
          ease: "none"
        },
        // Release The Scroll Lock
        onComplete: function onComplete() {
          gsap.set(document.body, {
            overflow: "auto"
          }); // gsap.set('#background1', {opacity:1});
        }
      });
      var lineTL = gsap.timeline({
        defaults: {
          duration: 0.6,
          ease: "none"
        }
      });
      var contentTL = gsap.timeline({
        defaults: {
          duration: 0.3,
          ease: "back.out(1.5)"
        }
      });
      var arrowTL = gsap.timeline({
        defaults: {
          duration: 0.15,
          ease: "none"
        },
        onComplete: function onComplete() {
          // Bounce The Down Arrow
          gsap.timeline({
            repeat: -1,
            yoyo: true
          }).to(downArrow, {
            y: -4,
            duration: 1,
            ease: "none"
          });
        },
        onReverseComplete: function onReverseComplete() {
          // Stop Bouncin The Down Arrow and Reset it's Y position
          gsap.killTweensOf(downArrow);
          gsap.set(downArrow, {
            y: 0
          });
        }
      }); // Set background z-index by section number / Section 2 has no back / Section 3 is z-index 110 to stay above all

      tl.set(thisBack, {
        zIndex: 104
      }); // Set section z-index by section number

      tl.fromTo(thisSec, {
        zIndex: 13
      }, {
        zIndex: 1004
      }); // Animate Lines

      lineTL.fromTo(soloCenter1, {
        drawSVG: "50% 50%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo(soloCenter2, {
        drawSVG: "50% 50%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo(bottomSmall, {
        drawSVG: "50% 50%"
      }, {
        drawSVG: "0% 100%",
        duration: 0.5
      }, "scrollIn+=0.3"); // Animate Content

      contentTL.fromTo(charsH2, {
        x: -20,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        stagger: {
          amount: 0.3,
          from: "random"
        }
      }, "scrollIn");
      contentTL.fromTo(linesP, {
        opacity: 0,
        x: -40
      }, {
        opacity: 1,
        x: 0,
        stagger: {
          amount: 0.3
        }
      }, "scrollIn+=0.1"); // Animate Arrow

      arrowTL.fromTo(sectionText, {
        y: -6,
        opacity: 0
      }, {
        y: 0,
        opacity: 1
      }, "scrollIn");
      arrowTL.fromTo(downArrowLine, {
        drawSVG: "100% 100%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn+=0.025");
      arrowTL.fromTo(downArrowPoint, {
        drawSVG: "50% 50%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn+=0.175"); // Build Master TLTL

      tl.fromTo(thisBack, {
        opacity: 0
      }, {
        opacity: 1
      }, "scrollInAll");
      tl.add(lineTL, "scrollInAll+=0.9");
      tl.add(contentTL, "scrollInAll+=1.5");
      tl.add(arrowTL, "scrollInAll+=1.5");
      return tl;
    },
    sectionAnim4: function sectionAnim4() {
      var thisSec = $("#section5");
      var thisBack = $("#background5");
      var thisOverlay = $("#overlay5");
      var charsH2 = $(thisSec).find(".h2Chars");
      var linesP = $(thisSec).find(".pLines");
      var center4L = $(thisSec).find("#center-4L");
      var center4R = $(thisSec).find("#center-4R");
      var center3L = $(thisSec).find("#center-3L");
      var center3R = $(thisSec).find("#center-3R");
      var center2L = $(thisSec).find("#center-2L");
      var center2R = $(thisSec).find("#center-2R"); // Arrow Pieces

      var downArrow = $(thisSec).find("#down-arrow");
      var downArrowLine = $(thisSec).find("#down-arrow-line");
      var downArrowPoint = $(thisSec).find("#down-arrow-point");
      var sectionText = $(thisSec).find(".down-arrow-text");
      var tl = gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.5,
          ease: "none"
        },
        // Release The Scroll Lock
        onComplete: function onComplete() {
          gsap.set(document.body, {
            overflow: "auto"
          }); // gsap.set('#background1', {opacity:0});
        }
      });
      var lineTL = gsap.timeline({
        defaults: {
          duration: 0.6,
          ease: "none"
        }
      });
      var contentTL = gsap.timeline({
        defaults: {
          duration: 0.3,
          ease: "back.out(1.5)"
        }
      });
      var arrowTL = gsap.timeline({
        defaults: {
          duration: 0.15,
          ease: "none"
        },
        onComplete: function onComplete() {
          // Bounce The Down Arrow
          gsap.timeline({
            repeat: -1,
            yoyo: true
          }).to(downArrow, {
            y: -4,
            duration: 1,
            ease: "none"
          });
        },
        onReverseComplete: function onReverseComplete() {
          // Stop Bouncin The Down Arrow and Reset it's Y position
          gsap.killTweensOf(downArrow);
          gsap.set(downArrow, {
            y: 0
          });
        }
      }); // Set background z-index by section number / Section 2 has no back / Section 3 is z-index 110 to stay above all

      tl.set(thisBack, {
        zIndex: 105
      });
      tl.set(thisOverlay, {
        zIndex: 105
      }); // Set section z-index by section number

      tl.fromTo(thisSec, {
        zIndex: 13
      }, {
        zIndex: 1005
      }); // Animate Lines
      // lineTL.fromTo(center4L, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "scrollIn");
      // lineTL.fromTo(center4R, {drawSVG:"0% 0%"}, {drawSVG:"100% 0%"}, "scrollIn");
      // lineTL.fromTo(center3L, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "scrollIn");
      // lineTL.fromTo(center3R, {drawSVG:"0% 0%"}, {drawSVG:"100% 0%"}, "scrollIn");
      // lineTL.fromTo(center2L, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "scrollIn");
      // lineTL.fromTo(center2R, {drawSVG:"0% 0%"}, {drawSVG:"100% 0%"}, "scrollIn");

      lineTL.fromTo(center4L, {
        drawSVG: "0% 0%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo(center4R, {
        drawSVG: "100% 100%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo(center3L, {
        drawSVG: "0% 0%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo(center3R, {
        drawSVG: "100% 100%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo(center2L, {
        drawSVG: "0% 0%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo(center2R, {
        drawSVG: "100% 100%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo("#honeyClipEnd", {
        morphSVG: {
          shape: "#honeyClipStart"
        }
      }, {
        morphSVG: {
          shape: "#honeyClipEnd"
        },
        duration: 0.4,
        ease: "sine.out"
      }, "scrollIn"); // Animate Content

      contentTL.fromTo(charsH2, {
        x: -20,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        stagger: {
          amount: 0.3,
          from: "random"
        }
      }, "scrollIn");
      contentTL.fromTo(linesP, {
        opacity: 0,
        x: -40
      }, {
        opacity: 1,
        x: 0,
        stagger: {
          amount: 0.3
        }
      }, "scrollIn+=0.1"); // Animate Arrow

      arrowTL.fromTo("#bottom-small-2", {
        drawSVG: "50% 50%"
      }, {
        drawSVG: "0% 100%",
        duration: 0.3,
        ease: "sine.out"
      }, "scrollIn");
      arrowTL.fromTo(sectionText, {
        y: -6,
        opacity: 0
      }, {
        y: 0,
        opacity: 1
      }, "scrollIn+=0.1");
      arrowTL.fromTo(downArrowLine, {
        drawSVG: "100% 100%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn+=0.125");
      arrowTL.fromTo(downArrowPoint, {
        drawSVG: "50% 50%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn+=0.275"); // Build Master TLTL

      tl.fromTo(thisOverlay, {
        opacity: 0
      }, {
        opacity: 0.9
      }, "scrollInAll+=0.8");
      tl.fromTo(thisBack, {
        opacity: 0
      }, {
        opacity: 1,
        duration: 1
      }, "scrollInAll");
      tl.add(lineTL, "scrollInAll");
      tl.add(contentTL, "scrollInAll+=1");
      tl.add(arrowTL, "scrollInAll+=1");
      return tl;
    },
    sectionAnim5: function sectionAnim5() {
      var thisSec = $("#section6");
      var thisBack = $("#background6");
      var charsH2 = $(thisSec).find(".h2Chars");
      var linesP = $(thisSec).find(".pLines");
      var thisOverlay = $("#overlay6");
      var center4L = $(thisSec).find("#center-4L");
      var center4R = $(thisSec).find("#center-4R");
      var center3L = $(thisSec).find("#center-3L");
      var center3R = $(thisSec).find("#center-3R");
      var center2L = $(thisSec).find("#center-2L");
      var center2R = $(thisSec).find("#center-2R");
      var bottomSmall = $(thisSec).find("#bottom-small"); // Arrow Pieces

      var downArrow = $(thisSec).find("#down-arrow");
      var downArrowLine = $(thisSec).find("#down-arrow-line");
      var downArrowPoint = $(thisSec).find("#down-arrow-point");
      var sectionText = $(thisSec).find(".down-arrow-text");
      var tl = gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.5,
          ease: "none"
        },
        // Release The Scroll Lock
        onComplete: function onComplete() {
          gsap.set(document.body, {
            overflow: "auto"
          }); // gsap.set('#background1', {opacity:0});
        }
      });
      var lineTL = gsap.timeline({
        defaults: {
          duration: 0.8,
          ease: "none"
        }
      });
      var contentTL = gsap.timeline({
        defaults: {
          duration: 0.3,
          ease: "back.out(1.5)"
        }
      });
      var arrowTL = gsap.timeline({
        defaults: {
          duration: 0.15,
          ease: "none"
        },
        onComplete: function onComplete() {
          // Bounce The Down Arrow
          gsap.timeline({
            repeat: -1,
            yoyo: true
          }).to(downArrow, {
            y: -4,
            duration: 1,
            ease: "none"
          });
        },
        onReverseComplete: function onReverseComplete() {
          // Stop Bouncin The Down Arrow and Reset it's Y position
          gsap.killTweensOf(downArrow);
          gsap.set(downArrow, {
            y: 0
          });
        }
      }); // Set background z-index by section number / Section 2 has no back / Section 3 is z-index 110 to stay above all

      tl.set(thisBack, {
        zIndex: 106
      });
      tl.set(thisOverlay, {
        zIndex: 106
      }); // Set section z-index by section number

      tl.fromTo(thisSec, {
        zIndex: 13
      }, {
        zIndex: 1006
      }); // Animate Lines

      lineTL.fromTo(center4L, {
        drawSVG: "100% 100%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo(center4R, {
        drawSVG: "0% 0%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo(center3L, {
        drawSVG: "100% 100%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo(center3R, {
        drawSVG: "0% 0%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo(center2L, {
        drawSVG: "100% 100%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo(center2R, {
        drawSVG: "0% 0%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn"); // Animate Content

      contentTL.fromTo(charsH2, {
        x: -20,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        stagger: {
          amount: 0.3,
          from: "random"
        }
      }, "scrollIn");
      contentTL.fromTo(linesP, {
        opacity: 0,
        x: -40
      }, {
        opacity: 1,
        x: 0,
        stagger: {
          amount: 0.3
        }
      }, "scrollIn+=0.1"); // Animate Arrow

      arrowTL.fromTo(bottomSmall, {
        drawSVG: "50% 50%"
      }, {
        drawSVG: "0% 100%",
        duration: 0.4
      }, "scrollIn");
      arrowTL.fromTo(sectionText, {
        y: -6,
        opacity: 0
      }, {
        y: 0,
        opacity: 1
      }, "scrollIn+=0.15");
      arrowTL.fromTo(downArrowLine, {
        drawSVG: "100% 100%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn+=0.175");
      arrowTL.fromTo(downArrowPoint, {
        drawSVG: "50% 50%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn+=0.325"); // Build Master TLTL

      tl.fromTo(thisOverlay, {
        opacity: 0
      }, {
        opacity: 0.1
      }, "scrollInAll");
      tl.fromTo(thisBack, {
        opacity: 0
      }, {
        opacity: 1
      }, "scrollInAll");
      tl.add(lineTL, "scrollInAll");
      tl.add(contentTL, "scrollInAll+=0.6");
      tl.add(arrowTL, "scrollInAll+=0.8");
      return tl;
    },
    sectionAnim6: function sectionAnim6() {
      var thisSec = $("#section7");
      var thisBack = $("#background7");
      var charsH2 = $(thisSec).find(".h2Chars");
      var linesP = $(thisSec).find(".pLines");
      var thisOverlay = $("#overlay7");
      var center4L = $(thisSec).find("#center-4L");
      var center4R = $(thisSec).find("#center-4R");
      var center3L = $(thisSec).find("#center-3L");
      var center3R = $(thisSec).find("#center-3R");
      var center2L = $(thisSec).find("#center-2L");
      var center2R = $(thisSec).find("#center-2R");
      var topSmall = $(thisSec).find("#top-small");
      var bottomSmall = $(thisSec).find("#bottom-small");
      var centerSmall = $(thisSec).find("#center-small");
      var topLeftSmall = $(thisSec).find("#top-left-small");
      var topRighttSmall = $(thisSec).find("#top-right-small");
      var bottomLeftSmall = $(thisSec).find("#bottom-left-small");
      var bottomRighttSmall = $(thisSec).find("#bottom-right-small");
      var imgContainer = $(thisSec).find(".imageContainer");
      var subImg = $(imgContainer).find("img"); // Arrow Pieces

      var downArrow = $(thisSec).find("#down-arrow");
      var downArrowLine = $(thisSec).find("#down-arrow-line");
      var downArrowPoint = $(thisSec).find("#down-arrow-point");
      var sectionText = $(thisSec).find(".down-arrow-text");
      var tl = gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.6,
          ease: "none"
        },
        // Release The Scroll Lock
        onComplete: function onComplete() {
          gsap.set(document.body, {
            overflow: "auto"
          }); // gsap.set('#background1', {opacity:1});
        }
      });
      var lineTL = gsap.timeline({
        defaults: {
          duration: 0.8,
          ease: "none"
        }
      });
      var contentTL = gsap.timeline({
        defaults: {
          duration: 0.3,
          ease: "back.out(1.5)"
        }
      }); // let arrowTL = gsap.timeline({
      //   defaults: {
      //     duration:0.15,
      //     ease:"none"
      //   },
      //   onComplete: function(){
      //     // Bounce The Down Arrow
      //     gsap.timeline({repeat:-1, yoyo:true}).to(downArrow, {y:-4, duration:1, ease:"none"});
      //   },
      //   onReverseComplete: function(){
      //     // Stop Bouncin The Down Arrow and Reset it's Y position
      //     gsap.killTweensOf(downArrow);
      //     gsap.set(downArrow, {y:0});
      //   }
      // });
      // Set background z-index by section number / Section 2 has no back / Section 3 is z-index 110 to stay above all

      tl.set(thisBack, {
        zIndex: 107
      });
      tl.set(thisOverlay, {
        zIndex: 107
      }); // Set section z-index by section number

      tl.fromTo(thisSec, {
        zIndex: 13
      }, {
        zIndex: 1007
      }); // Animate Lines

      lineTL.fromTo(center4L, {
        drawSVG: "0% 0%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo(center4R, {
        drawSVG: "100% 100%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo(center3L, {
        drawSVG: "0% 0%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo(center3R, {
        drawSVG: "100% 100%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo(center2L, {
        drawSVG: "0% 0%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo(center2R, {
        drawSVG: "100% 100%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo([topSmall, bottomSmall, centerSmall], {
        drawSVG: "50% 50%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo([topLeftSmall, bottomLeftSmall], {
        drawSVG: "50% 50%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn");
      lineTL.fromTo([topRighttSmall, bottomRighttSmall], {
        drawSVG: "50% 50%"
      }, {
        drawSVG: "100% 0%"
      }, "scrollIn"); // Animate Content

      contentTL.fromTo(charsH2, {
        x: -20,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        stagger: {
          amount: 0.3,
          from: "random"
        }
      }, "scrollIn");
      contentTL.fromTo(linesP, {
        opacity: 0,
        x: -40
      }, {
        opacity: 1,
        x: 0,
        stagger: {
          amount: 0.3
        }
      }, "scrollIn+=0.1");
      contentTL.fromTo(".textImage", {
        opacity: 0,
        x: -40
      }, {
        opacity: 1,
        x: 0
      }, "scrollIn+=0.1");
      contentTL.fromTo("#partnerClipEnd", {
        morphSVG: {
          shape: "#partnerClipStart"
        }
      }, {
        morphSVG: {
          shape: "#partnerClipEnd"
        },
        duration: 0.4,
        ease: "sine.out"
      }, "scrollIn+=0.2"); // // Animate Arrow
      // arrowTL.fromTo(sectionText, {y:-6, opacity:0}, {y:0, opacity:1}, "scrollIn");
      // arrowTL.fromTo(downArrowLine, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "scrollIn+=0.025");
      // arrowTL.fromTo(downArrowPoint, {drawSVG:"50% 50%"}, {drawSVG:"100% 0%"}, "scrollIn+=0.175");
      // Build Master TLTL

      tl.fromTo(thisOverlay, {
        opacity: 0
      }, {
        opacity: 0.9
      }, "scrollInAll");
      tl.fromTo(thisBack, {
        opacity: 0
      }, {
        opacity: 1
      }, "scrollInAll");
      tl.add(lineTL, "scrollInAll+=0.2");
      tl.add(contentTL, "scrollInAll+=0.6");
      tl.fromTo(".footerArea", {
        y: "100%"
      }, {
        y: 0,
        duration: 0.7,
        ease: "back.out(0.5)"
      }, "scrollInAll+=0.7"); // tl.add(arrowTL, "scrollInAll+=0.8");

      return tl;
    } // sectionAnim8: () => {
    //   let thisSec = $('#section8');
    //   let thisBack = $('#background8');
    //   let charsH2 = $(thisSec).find('.h2Chars');
    //   let tl = gsap.timeline({
    //     paused:true,
    //     defaults: {
    //       duration:0.3,
    //       ease: "none",
    //     },
    //     // Release The Scroll Lock
    //     onComplete: function(){
    //       gsap.set(document.body, {overflow: "auto"})
    //     }
    //   });
    //   let contentTL = gsap.timeline({
    //     defaults: {
    //       duration:0.3,
    //       ease:"back.out(1.5)"
    //     }
    //   });
    //   // Set background z-index by section number / Section 2 has no back / Section 3 is z-index 110 to stay above all
    //   tl.set(thisBack, {zIndex:108});
    //   // Set section z-index by section number
    //   tl.fromTo(thisSec, {zIndex:13},{zIndex:1008});
    //   // Animate Content
    //   contentTL.fromTo(charsH2,
    //     {x:-20, opacity:0},
    //     {x:0, opacity: 1, stagger:{amount:0.3, from:"random"}},
    //   "scrollIn");
    //   contentTL.fromTo('.singleImageDownload',{
    //     opacity:0, y:-20},
    //     {opacity:1,y:0, stagger:{amount:0.3}},
    //   "scrollIn+=0.2");
    //   // Build Master TLTL
    //   tl.fromTo(thisBack, {top:'-100%'},{top:0}, "scrollInAll");
    //   tl.fromTo('.footerArea', {y:'100%'}, {y:0, duration:0.5, ease:'back.out(0.5)'}, "scrollInAll+=0.5");
    //   tl.add(contentTL, "scrollInAll+=0.3");
    //   return tl;
    // },

  }; // Play Section 1 automatically

  sectionAnim["sectionAnim1"]().play(); // Fire An Animation From Above for Each Section

  var sectionTrig = function sectionTrig(myCount) {
    // Add An Extra Scroll for Buzz On Bees in Section 4, 5, 6 +1 total each time
    if (myCount === 1) {
      var startHeight = 0;
    } else if (myCount === 2) {
      var startHeight = myScrollHeight * (myCount - 1) - myScrollOffset;
    } else if (myCount === 3) {
      var startHeight = myScrollHeight * (myCount - 1) - myScrollOffset;
    } else if (myCount === 4) {
      var startHeight = myScrollHeight * myCount - myScrollOffset; // var startHeight = myScrollHeight * (myCount - 1) - myScrollOffset;
    } else if (myCount === 5) {
      var startHeight = myScrollHeight * (myCount + 1) - myScrollOffset; // var startHeight = myScrollHeight * myCount - myScrollOffset;
    } else if (myCount === 6) {
      var startHeight = myScrollHeight * (myCount + 2) - myScrollOffset; // var startHeight = myScrollHeight * (myCount + 1) - myScrollOffset;
    } else if (myCount === 7) {
      var startHeight = myScrollHeight * (myCount + 2) - myScrollOffset;
    } else if (myCount === 8) {
      var startHeight = myScrollHeight * (myCount + 2) - myScrollOffset;
    }

    if (myCount === 1) {
      var endHeight = myScrollHeight;
    } else if (myCount === 2) {
      var endHeight = myScrollHeight * myCount - myScrollOffset;
    } else if (myCount === 3) {
      var endHeight = myScrollHeight * (myCount + 1) - myScrollOffset; // var endHeight = myScrollHeight * myCount - myScrollOffset;
    } else if (myCount === 4) {
      var endHeight = myScrollHeight * (myCount + 2) - myScrollOffset; // var endHeight = myScrollHeight * (myCount + 1) - myScrollOffset;
    } else if (myCount === 5) {
      var endHeight = myScrollHeight * (myCount + 3) - myScrollOffset; // var endHeight = myScrollHeight * (myCount + 2) - myScrollOffset;
    } else if (myCount === 6) {
      var endHeight = myScrollHeight * (myCount + 3) - myScrollOffset;
    } else if (myCount === 7) {
      var endHeight = myScrollHeight * (myCount + 3) - myScrollOffset;
    } else if (myCount === 8) {
      var endHeight = myScrollHeight * (myCount + 3) - myScrollOffset;
    } // console.log('start height'+myCount+' is '+startHeight);
    // console.log('end height'+myCount+' is '+endHeight);


    ScrollTrigger.create({
      // trigger:'body',
      start: startHeight,
      end: endHeight,
      scrub: 1,
      onEnter: function onEnter() {
        if (myCount > 1) {
          gsap.set(document.body, {
            overflow: "hidden"
          });
          sectionAnim["sectionAnim" + myCount]().play(); // alert(myCount+' section entered');
        }
      },
      onLeave: function onLeave() {
        if (myCount < 6) {
          gsap.set(document.body, {
            overflow: "hidden"
          });
          sectionAnim["sectionAnim" + myCount]().reverse(0); // alert(myCount+' section left');
        }
      },
      onEnterBack: function onEnterBack() {
        if (myCount < 6) {
          gsap.set(document.body, {
            overflow: "hidden"
          });
          sectionAnim["sectionAnim" + myCount]().play(); // alert(myCount+' section back again');
        }
      },
      onLeaveBack: function onLeaveBack() {
        if (myCount > 1) {
          gsap.set(document.body, {
            overflow: "hidden"
          });
          sectionAnim["sectionAnim" + myCount]().reverse(0); // alert(myCount+' section left again');
        }
      }
    });
  }; // Call The Trigger On Every Section
  // Animation triggers are calculated in the function


  var i = 1;
  $("section").each(function () {
    sectionTrig(i);
    i++;
  }); // Single Buzz on Bees Sections
  // Buzz Animation 5

  var buzzIn4 = function buzzIn4() {
    var buzzBlock = $("#section4").find(".buzzOnBeesBlock");
    var buzzWidth = buzzBlock.outerWidth();
    var tl = new gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.5,
        ease: "back.out(0.25);"
      }
    });
    tl.fromTo(buzzBlock, {
      x: buzzWidth
    }, {
      x: 0
    });
    return tl;
  };

  var buzzTrig4 = function buzzTrig4(myCount) {
    var startHeight = myScrollHeight * (myCount - 0.5) - myScrollOffset;
    var endHeight = myScrollHeight * (myCount + 0.5) - myScrollOffset; // console.log('buzz4 start is '+startHeight);
    // console.log('buzz4 end is '+endHeight);

    ScrollTrigger.create({
      start: startHeight,
      end: endHeight,
      scrub: 1,
      onEnter: function onEnter() {
        buzzIn4().play();
      },
      onLeave: function onLeave() {
        buzzIn4().reverse(0);
      },
      onEnterBack: function onEnterBack() {
        buzzIn4().play();
      },
      onLeaveBack: function onLeaveBack() {
        buzzIn4().reverse(0);
      }
    });
  };

  buzzTrig4(3); // Buzz Animation 5

  var buzzIn5 = function buzzIn5() {
    var buzzBlock = $("#section5").find(".buzzOnBeesBlock");
    var buzzWidth = buzzBlock.outerWidth();
    var tl = new gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.5,
        ease: "back.out(0.25);"
      }
    });
    tl.fromTo(buzzBlock, {
      x: buzzWidth
    }, {
      x: 0
    });
    return tl;
  };

  var buzzTrig5 = function buzzTrig5(myCount) {
    var startHeight = myScrollHeight * (myCount + 0.5) - myScrollOffset;
    var endHeight = myScrollHeight * (myCount + 1.5) - myScrollOffset; // console.log('buzz5 start is '+startHeight);
    // console.log('buzz5 end is '+endHeight);

    ScrollTrigger.create({
      start: startHeight,
      end: endHeight,
      scrub: 1,
      onEnter: function onEnter() {
        buzzIn5().play();
      },
      onLeave: function onLeave() {
        buzzIn5().reverse(0);
      },
      onEnterBack: function onEnterBack() {
        buzzIn5().play();
      },
      onLeaveBack: function onLeaveBack() {
        buzzIn5().reverse(0);
      }
    });
  };

  buzzTrig5(4); // Buzz Animation 6

  var buzzIn6 = function buzzIn6() {
    var buzzBlock = $("#section6").find(".buzzOnBeesBlock");
    var buzzWidth = buzzBlock.outerWidth();
    var tl = new gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.5,
        ease: "back.out(0.25);"
      }
    });
    tl.fromTo(buzzBlock, {
      x: buzzWidth
    }, {
      x: 0
    });
    return tl;
  };

  var buzzTrig6 = function buzzTrig6(myCount) {
    var startHeight = myScrollHeight * (myCount + 1.5) - myScrollOffset;
    var endHeight = myScrollHeight * (myCount + 2.5) - myScrollOffset; // console.log('buzz6 start is '+startHeight);
    // console.log('buzz6 end is '+endHeight);

    ScrollTrigger.create({
      start: startHeight,
      end: endHeight,
      scrub: 1,
      onEnter: function onEnter() {
        buzzIn6().play();
      },
      onLeave: function onLeave() {
        buzzIn6().reverse(0);
      },
      onEnterBack: function onEnterBack() {
        buzzIn6().play();
      },
      onLeaveBack: function onLeaveBack() {
        buzzIn6().reverse(0);
      }
    });
  };

  buzzTrig6(5);
};

/***/ }),

/***/ "./src/js/components/clickEvents.js":
/*!******************************************!*\
  !*** ./src/js/components/clickEvents.js ***!
  \******************************************/
/*! exports provided: clickEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clickEvents", function() { return clickEvents; });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/js/components/index.js");

var clickEvents = function clickEvents() {
  // Mobile Nav Click Event
  var menuToggleTL = Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["menuToggle"])();
  menuToggleTL.reversed(true);
  $('.menuToggle').on('click', function () {
    if (menuToggleTL.reversed()) {
      menuToggleTL.play();
      gsap.set($('.wrapper'), {
        height: '100%',
        overflow: 'hidden'
      });
    } else {
      gsap.set($('.wrapper'), {
        height: 'auto',
        overflow: 'visible'
      });
      menuToggleTL.reverse();
    }
  });
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault(); // console.log('hash it out');
    // IF IT"S MOBILE / IPAD OR SMALLER

    if (screen.width <= 1025) {
      gsap.set($('.wrapper'), {
        height: 'auto',
        overflow: 'visible'
      });
      menuToggleTL.reverse();
      Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["smoothScrolling"])($(this));
    } else {
      Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["smoothScrolling"])($(this));
    }
  });
};

/***/ }),

/***/ "./src/js/components/gsapRegisters.js":
/*!********************************************!*\
  !*** ./src/js/components/gsapRegisters.js ***!
  \********************************************/
/*! exports provided: gsapRegisters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gsapRegisters", function() { return gsapRegisters; });
var gsapRegisters = function gsapRegisters() {
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, SplitText, DrawSVGPlugin, MorphSVGPlugin);
};

/***/ }),

/***/ "./src/js/components/index.js":
/*!************************************!*\
  !*** ./src/js/components/index.js ***!
  \************************************/
/*! exports provided: preLoader, vidLinks, mobileVidLinks, smoothScrolling, mobileNavSetup, menuToggle, gsapRegisters, clickEvents, animateSection, sectionsSetup, mobileSectionsSetup, mobileAnimateSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageSetup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageSetup.js */ "./src/js/components/pageSetup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preLoader", function() { return _pageSetup_js__WEBPACK_IMPORTED_MODULE_0__["preLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vidLinks", function() { return _pageSetup_js__WEBPACK_IMPORTED_MODULE_0__["vidLinks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mobileVidLinks", function() { return _pageSetup_js__WEBPACK_IMPORTED_MODULE_0__["mobileVidLinks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "smoothScrolling", function() { return _pageSetup_js__WEBPACK_IMPORTED_MODULE_0__["smoothScrolling"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mobileNavSetup", function() { return _pageSetup_js__WEBPACK_IMPORTED_MODULE_0__["mobileNavSetup"]; });

/* harmony import */ var _menuToggle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuToggle.js */ "./src/js/components/menuToggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "menuToggle", function() { return _menuToggle_js__WEBPACK_IMPORTED_MODULE_1__["menuToggle"]; });

/* harmony import */ var _gsapRegisters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gsapRegisters.js */ "./src/js/components/gsapRegisters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gsapRegisters", function() { return _gsapRegisters_js__WEBPACK_IMPORTED_MODULE_2__["gsapRegisters"]; });

/* harmony import */ var _clickEvents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clickEvents.js */ "./src/js/components/clickEvents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clickEvents", function() { return _clickEvents_js__WEBPACK_IMPORTED_MODULE_3__["clickEvents"]; });

/* harmony import */ var _animateSection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animateSection.js */ "./src/js/components/animateSection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animateSection", function() { return _animateSection_js__WEBPACK_IMPORTED_MODULE_4__["animateSection"]; });

/* harmony import */ var _sectionsSetup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sectionsSetup */ "./src/js/components/sectionsSetup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sectionsSetup", function() { return _sectionsSetup__WEBPACK_IMPORTED_MODULE_5__["sectionsSetup"]; });

/* harmony import */ var _mobileSectionsSetup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mobileSectionsSetup */ "./src/js/components/mobileSectionsSetup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mobileSectionsSetup", function() { return _mobileSectionsSetup__WEBPACK_IMPORTED_MODULE_6__["mobileSectionsSetup"]; });

/* harmony import */ var _mobileAnimateSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mobileAnimateSection */ "./src/js/components/mobileAnimateSection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mobileAnimateSection", function() { return _mobileAnimateSection__WEBPACK_IMPORTED_MODULE_7__["mobileAnimateSection"]; });










/***/ }),

/***/ "./src/js/components/menuToggle.js":
/*!*****************************************!*\
  !*** ./src/js/components/menuToggle.js ***!
  \*****************************************/
/*! exports provided: menuToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuToggle", function() { return menuToggle; });
var menuToggle = function menuToggle() {
  var tl = new gsap.timeline({
    paused: true,
    defaults: {
      ease: 'circ.out()',
      duration: 0.3
    }
  });
  tl.to('.main-nav', {
    duration: 0.3,
    left: '0%'
  }, 'menuOpen');
  tl.to('nav a', {
    opacity: 1,
    x: '0%',
    stagger: {
      amount: 0.1
    }
  }, 'menuOpen+=0.1');
  tl.to('.hamTop', {
    rotation: -315,
    x: 7,
    y: 3,
    width: 10,
    transformOrigin: '50% 50%'
  }, 'menuOpen');
  tl.to('.hamMid', {
    x: -4,
    width: 18
  }, 'menuOpen');
  tl.to('.hamBot', {
    rotation: 315,
    x: 7,
    y: -3,
    width: 10,
    transformOrigin: '50% 50%'
  }, 'menuOpen');
  return tl;
};

/***/ }),

/***/ "./src/js/components/mobileAnimateSection.js":
/*!***************************************************!*\
  !*** ./src/js/components/mobileAnimateSection.js ***!
  \***************************************************/
/*! exports provided: mobileAnimateSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileAnimateSection", function() { return mobileAnimateSection; });
var mobileAnimateSection = function mobileAnimateSection() {
  // gsap.set('body', {touchAction:'none'});
  // document.ontouchmove = (e) => e.preventDefault();
  var sectionAnim = {
    sectionAnim1: function sectionAnim1() {
      var thisSec = '#section1';
      var thisOverlay = $('#overlay1');
      var sectionLines = $(thisSec).find('.single-backline');
      var secArrow = $(thisSec).find('.down-arrow-svg');
      var tl = gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.5,
          ease: "none"
        },
        onComplete: function onComplete() {
          gsap.timeline({
            repeat: -1,
            yoyo: true
          }).to(secArrow, {
            y: -3,
            duration: 0.5,
            ease: "none"
          });
        }
      }); // Build Master TLTL

      tl.fromTo(thisOverlay, {
        opacity: 0
      }, {
        opacity: 0.65
      }, "scrollInAll");
      tl.fromTo(sectionLines, {
        opacity: 0
      }, {
        opacity: 0.3
      }, "scrollInAll");
      return tl;
    },
    sectionAnim2: function sectionAnim2() {
      var thisSec = $('#section2');
      var thisBack = $('#background1');
      var thisOverlay = $('#overlay1');
      var lines = $('.single-backline');
      var sectionLines = thisSec.find('.single-backline');
      var tl = gsap.timeline({
        // delay:0.65,
        paused: true,
        defaults: {
          duration: 0.5,
          ease: "none"
        },
        onComplete: function onComplete() {// setTimeout(() => {
          // // gsap.set('body', {overflow:'auto'});,
          // gsap.set('body', {touchAction:'auto'});  
          // }, 1000);
        }
      }); // tl.fromTo(thisOverlay, {opacity:0}, {opacity:0.1}, "scrollInAll");

      tl.fromTo(sectionLines, {
        opacity: 0
      }, {
        opacity: 0.2
      }, "scrollInAll");
      return tl;
    },
    sectionAnim3: function sectionAnim3() {
      var thisSec = $('#section3');
      var thisBack = $('#background3');
      var sectionLines = thisSec.find('.single-backline');
      var center4L = $(thisSec).find('#center-4L');
      var center4R = $(thisSec).find('#center-4R');
      var center3L = $(thisSec).find('#center-3L');
      var center3R = $(thisSec).find('#center-3R');
      var center2L = $(thisSec).find('#center-2L');
      var center2R = $(thisSec).find('#center-2R');
      var bottomSmall = $(thisSec).find('#bottom-small');
      var tl = gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.5,
          ease: "none"
        },
        onComplete: function onComplete() {// gsap.set('#background1', {opacity:0});
        } // onReverseComplete:function() {
        //   // setTimeout(() => {
        //     // gsap.set('body', {touchAction:'auto'});  
        //     // gsap.set('body', {overflow:'auto'});,
        //   // }, 1000);      
        //   gsap.set('#background1', {opacity:1});
        // },

      });
      tl.fromTo('.videoArea', {
        opacity: 0
      }, {
        opacity: 1
      }, "scrollInAll");
      tl.fromTo(center4L, {
        opacity: 0
      }, {
        opacity: 1
      }, "scrollInAll");
      tl.fromTo(center4R, {
        opacity: 0
      }, {
        opacity: 1
      }, "scrollInAll");
      tl.fromTo(center3L, {
        opacity: 0
      }, {
        opacity: 1
      }, "scrollInAll");
      tl.fromTo(center3R, {
        opacity: 0
      }, {
        opacity: 1
      }, "scrollInAll");
      tl.fromTo(center2L, {
        opacity: 0
      }, {
        opacity: 1
      }, "scrollInAll");
      tl.fromTo(center2R, {
        opacity: 0
      }, {
        opacity: 1
      }, "scrollInAll");
      tl.fromTo(bottomSmall, {
        opacity: 0
      }, {
        opacity: 1
      }, "scrollInAll");
      tl.fromTo(thisBack, {
        opacity: 0
      }, {
        opacity: 1
      }, "scrollInAll");
      tl.fromTo(sectionLines, {
        opacity: 0
      }, {
        opacity: 1
      }, "scrollInAll");
      tl.fromTo(sectionLines, {
        opacity: 0
      }, {
        opacity: 1
      }, "scrollInAll");
      return tl;
    },
    sectionAnim4: function sectionAnim4() {
      var thisSec = $('#section4');
      var thisBack = $('#background4'); // let sectionLines = thisSec.find('.single-backline')

      var soloCenter2 = $(thisSec).find('#solo-center-2');
      var soloCenter1 = $(thisSec).find('#solo-center-1');
      var bottomSmall = $(thisSec).find('#bottom-small');
      var tl = gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.5,
          ease: "none"
        },
        onReverseComplete: function onReverseComplete() {// gsap.set('#background1', {opacity:1});
        }
      });
      tl.fromTo(soloCenter1, {
        opacity: 0
      }, {
        opacity: 0.5
      }, "scrollInAll");
      tl.fromTo(soloCenter2, {
        opacity: 0
      }, {
        opacity: 0.5
      }, "scrollInAll");
      tl.fromTo(bottomSmall, {
        opacity: 0
      }, {
        opacity: 0.5
      }, "scrollInAll");
      tl.fromTo(thisBack, {
        opacity: 0
      }, {
        opacity: 1
      }, "scrollInAll"); // tl.fromTo(sectionLines, {opacity:0},{opacity:0.3}, "scrollInAll");

      return tl;
    },
    sectionAnim5: function sectionAnim5() {
      var thisSec = $('#section5');
      var thisBack = $('#background5');
      var thisOverlay = $('#overlay5');
      var sectionLines = thisSec.find('.single-backline');
      var tl = gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.5,
          ease: "none"
        },
        onComplete: function onComplete() {// setTimeout(() => {
          // gsap.set('body', {touchAction:'auto'});  
          // }, 1000);
        }
      });
      tl.fromTo(thisOverlay, {
        opacity: 0
      }, {
        opacity: 0.9
      }, "scrollInAll");
      tl.fromTo(thisBack, {
        opacity: 0
      }, {
        opacity: 1
      }, "scrollInAll");
      tl.fromTo(sectionLines, {
        opacity: 0
      }, {
        opacity: 0.9
      }, "scrollInAll");
      return tl;
    },
    sectionAnim6: function sectionAnim6() {
      var thisSec = $('#section6');
      var thisBack = $('#background6');
      var thisOverlay = $('#overlay6');
      var sectionLines = thisSec.find('.single-backline');
      var tl = gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.5,
          ease: "none"
        },
        onComplete: function onComplete() {// setTimeout(() => {
          // gsap.set('body', {touchAction:'auto'});  
          // }, 1000);
        }
      });
      tl.fromTo(thisOverlay, {
        opacity: 0
      }, {
        opacity: 0.9
      }, "scrollInAll");
      tl.fromTo(thisBack, {
        opacity: 0
      }, {
        opacity: 1
      }, "scrollInAll");
      tl.fromTo(sectionLines, {
        opacity: 0
      }, {
        opacity: 0.2
      }, "scrollInAll");
      return tl;
    },
    sectionAnim7: function sectionAnim7() {
      var thisSec = $('#section7');
      var thisBack = $('#background7');
      var thisOverlay = $('#overlay7');
      var sectionLines = thisSec.find('.single-backline');
      var secArrow = $('#section1').find('.down-arrow-svg');
      var tl = gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.5,
          ease: "none"
        }
      });
      tl.fromTo(thisOverlay, {
        opacity: 0
      }, {
        opacity: 0.9
      }, "scrollInAll");
      tl.fromTo(thisBack, {
        opacity: 0
      }, {
        opacity: 1
      }, "scrollInAll");
      tl.fromTo(sectionLines, {
        opacity: 0
      }, {
        opacity: 0.5
      }, "scrollInAll");
      tl.fromTo(secArrow, {
        opacity: 1
      }, {
        opacity: 0
      }, "scrollInAll");
      return tl;
    }
  };
  sectionAnim['sectionAnim1']().play(); // Fire An Animation From Above for Each Section

  var sectionTrig = function sectionTrig(myCount) {
    // Play Section 1 automatically
    ScrollTrigger.create({
      trigger: '#section' + myCount,
      start: "top bottom",
      end: "bottom bottom",
      // scrub:1,
      onEnter: function onEnter() {
        if (myCount > 1) {
          // alert(myCount);
          // gsap.set('body', {touchAction:'none'});
          // gsap.set('body', {overflow:'hidden'});
          sectionAnim['sectionAnim' + myCount]().play();
        }
      },
      onLeave: function onLeave() {
        if (myCount < 7) {
          // gsap.set('body', {touchAction:'none'});
          sectionAnim['sectionAnim' + myCount]().reverse(0);
        }
      },
      onEnterBack: function onEnterBack() {
        if (myCount < 7) {
          // gsap.set('body', {touchAction:'none'});
          sectionAnim['sectionAnim' + myCount]().play();
        }
      },
      onLeaveBack: function onLeaveBack() {
        if (myCount > 1) {
          // gsap.set('body', {touchAction:'none'});
          sectionAnim['sectionAnim' + myCount]().reverse(0);
        }
      }
    });
  }; // Animation triggers are calculated in the function


  var i = 1;
  $('section').each(function () {
    sectionTrig(i);
    i++;
  }); // sectionTrig(2);

  var windowHeight = Math.round(window.innerHeight); // Single Buzz on Bees Sections
  // Buzz Animation 5

  var buzzIn4 = function buzzIn4() {
    var buzzBlock = $('#section4').find('.buzzOnBeesBlock');
    var buzzWidth = buzzBlock.outerWidth();
    var tl = new gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.5
      }
    });
    tl.fromTo(buzzBlock, {
      x: buzzWidth
    }, {
      x: 0
    });
    return tl;
  };

  var buzzTrig4 = function buzzTrig4(myCount) {
    // var startHeight = (myScrollHeight * (myCount - 0.5)) - myScrollOffset;
    // var endHeight = (myScrollHeight * (myCount + 0.5)) - myScrollOffset;
    // console.log('buzz4 start is '+startHeight);
    // console.log('buzz4 end is '+endHeight);
    ScrollTrigger.create({
      trigger: '#section4',
      start: 'top top-=' + windowHeight / 2,
      end: 'bottom bottom',
      // scrub:1,
      onEnter: function onEnter() {
        buzzIn4().play();
      },
      onLeave: function onLeave() {
        buzzIn4().reverse(0);
      },
      onEnterBack: function onEnterBack() {
        buzzIn4().play();
      },
      onLeaveBack: function onLeaveBack() {
        buzzIn4().reverse(0);
      }
    });
  };

  buzzTrig4(); // Buzz Animation 5

  var buzzIn5 = function buzzIn5() {
    var buzzBlock = $('#section5').find('.buzzOnBeesBlock');
    var buzzWidth = buzzBlock.outerWidth();
    var tl = new gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.5
      }
    });
    tl.fromTo(buzzBlock, {
      x: buzzWidth
    }, {
      x: 0
    });
    return tl;
  };

  var buzzTrig5 = function buzzTrig5(myCount) {
    // var startHeight = (myScrollHeight * (myCount + 0.5)) - myScrollOffset;
    // var endHeight = (myScrollHeight * (myCount + 1.5)) - myScrollOffset;
    // console.log('buzz5 start is '+startHeight);
    // console.log('buzz5 end is '+endHeight);
    ScrollTrigger.create({
      trigger: '#section5',
      start: 'top top-=' + windowHeight / 2,
      end: 'bottom bottom',
      // scrub:1,
      onEnter: function onEnter() {
        buzzIn5().play();
      },
      onLeave: function onLeave() {
        buzzIn5().reverse(0);
      },
      onEnterBack: function onEnterBack() {
        buzzIn5().play();
      },
      onLeaveBack: function onLeaveBack() {
        buzzIn5().reverse(0);
      }
    });
  };

  buzzTrig5(); // Buzz Animation 6

  var buzzIn6 = function buzzIn6() {
    var buzzBlock = $('#section6').find('.buzzOnBeesBlock');
    var buzzWidth = buzzBlock.outerWidth();
    var tl = new gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.5
      }
    });
    tl.fromTo(buzzBlock, {
      x: buzzWidth
    }, {
      x: 0
    });
    return tl;
  };

  var buzzTrig6 = function buzzTrig6(myCount) {
    // var startHeight = (myScrollHeight * (myCount + 1.5)) - myScrollOffset;
    // var endHeight = (myScrollHeight * (myCount + 2.5)) - myScrollOffset;
    // console.log('buzz6 start is '+startHeight);
    // console.log('buzz6 end is '+endHeight);
    ScrollTrigger.create({
      trigger: '#section6',
      start: 'top top-=' + windowHeight / 1.5,
      end: 'bottom bottom',
      // scrub:1,
      onEnter: function onEnter() {
        buzzIn6().play();
      },
      onLeave: function onLeave() {
        buzzIn6().reverse(0);
      },
      onEnterBack: function onEnterBack() {
        buzzIn6().play();
      },
      onLeaveBack: function onLeaveBack() {
        buzzIn6().reverse(0);
      }
    });
  };

  buzzTrig6();
  $('.text-container').each(function () {
    var _this = this;

    var linesIn = function linesIn() {
      var theseLines = $(_this).find('.pLines');
      var tl = new gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.3
        }
      });
      tl.fromTo(theseLines, {
        opacity: 0,
        x: -40
      }, {
        opacity: 1,
        x: 0,
        stagger: {
          amount: 0.3
        }
      }); // console.log(theseLines);

      return tl;
    };

    ScrollTrigger.create({
      trigger: this,
      start: 'top bottom-=120px',
      // scrub:1,
      onEnter: function onEnter() {
        linesIn().play();
      },
      // onLeave: function(){buzzIn6().reverse(0);},
      // onEnterBack:function(){buzzIn6().play();},
      onLeaveBack: function onLeaveBack() {
        linesIn().reverse(0);
      }
    });
  });
  $('h2').each(function () {
    var _this2 = this;

    var linesIn = function linesIn() {
      var theseLines = $(_this2).find('.h2Words');
      var tl = new gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.3
        }
      });
      tl.fromTo(theseLines, {
        opacity: 0,
        x: -40
      }, {
        opacity: 1,
        x: 0,
        stagger: {
          amount: 0.3
        }
      }); // console.log(theseLines);

      return tl;
    };

    ScrollTrigger.create({
      trigger: this,
      start: 'top bottom-=120px',
      // scrub:1,
      onEnter: function onEnter() {
        linesIn().play();
      },
      // onLeave: function(){buzzIn6().reverse(0);},
      // onEnterBack:function(){buzzIn6().play();},
      onLeaveBack: function onLeaveBack() {
        linesIn().reverse(0);
      }
    });
  });
};

/***/ }),

/***/ "./src/js/components/mobileSectionsSetup.js":
/*!**************************************************!*\
  !*** ./src/js/components/mobileSectionsSetup.js ***!
  \**************************************************/
/*! exports provided: mobileSectionsSetup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileSectionsSetup", function() { return mobileSectionsSetup; });
var mobileSectionsSetup = function mobileSectionsSetup() {
  // $('body').addClass('mobile-device');
  // ---------------------------------------------------------------
  // MEASURING VARS
  // ---------------------------------------------------------------
  var totalSections = $('section').length;
  var totalBuzzOn = $('.buzzOnBeesBlock').length;
  var windowHeight = Math.round(window.innerHeight);
  var myScrollHeight = windowHeight / 2;
  var fullHeight = myScrollHeight * (totalSections + totalBuzzOn) + windowHeight - 1;
  var buzzBlock = $('.buzzOnBeesBlock');
  var buzzWidth = buzzBlock.outerWidth(); // ---------------------------------------------------------------
  // GLOBAL
  // ---------------------------------------------------------------
  // Set Overall Scroll Height
  // gsap.set('.home-page', {height:fullHeight});
  // gsap.set(document.body, {overflow: "hidden"})
  // Hide All Lines
  // gsap.set($('.home-page').find('path'), {drawSVG:"50% 50%"});
  // gsap.set($('.home-page').find('polyline'), {drawSVG:"50% 50%"});
  // gsap.set($('.home-page').find('line'), {drawSVG:"50% 50%"});
  // gsap.set($('.home-page').find('#down-arrow line'), {drawSVG:"100% 100%"});
  // Set 1st Background Image as Visible

  var sec1Lines = $('#section1').find('.single-backline');
  var sec1Arrow = $('#section1').find('.down-arrow-svg');
  gsap.set(sec1Lines, {
    opacity: 0.2
  });
  gsap.set(sec1Arrow, {
    opacity: 1
  });
  gsap.set('#background1', {
    opacity: 1,
    zIndex: 100
  });
  gsap.set('#background3', {
    zIndex: 106
  });
  gsap.set('#background4', {
    zIndex: 105
  });
  gsap.set('#background5', {
    zIndex: 104
  });
  gsap.set('#background6', {
    zIndex: 103
  });
  gsap.set('#background7', {
    zIndex: 101
  });
  gsap.set('#overlay1', {
    opacity: 0.65,
    zIndex: 101
  }); // gsap.set('#overlay3', {zIndex:103});
  // gsap.set('#overlay4', {zIndex:104});

  gsap.set('#overlay5', {
    zIndex: 105
  });
  gsap.set('#overlay6', {
    zIndex: 106
  });
  gsap.set('#overlay7', {
    zIndex: 107
  }); // gsap.set('#section1', {zIndex:207});
  // gsap.set('#section2', {zIndex:206});
  // gsap.set('#section3', {zIndex:205});
  // gsap.set('#section4', {zIndex:204});
  // gsap.set('#section5', {zIndex:203});
  // gsap.set('#section6', {zIndex:202});
  // gsap.set('#section7', {zIndex:201});
  // gsap.set('#background1', {opacity:1});
  // Set Buzz On Bees to Hidden

  gsap.set(buzzBlock, {
    x: buzzWidth
  }); // ---------------------------------------------------------------
  // SECTION 1
  // ---------------------------------------------------------------

  var sec1 = $('#section1');
  var sec1H2 = sec1.find('h2');
  var sec1splitH2 = new SplitText(sec1H2, {
    type: "lines,words, chars"
  });
  var sec1Chars2 = sec1splitH2.chars;
  var sec1Words2 = sec1splitH2.words;
  var sec1Lines2 = sec1splitH2.lines;
  $(sec1Lines2).addClass('h2Lines');
  $(sec1Chars2).addClass('h2Chars sec1Chars2');
  $(sec1Words2).addClass('h2Words sec1Words2');
  var sec1H3 = sec1.find('h3');
  var sec1splitH3 = new SplitText(sec1H3, {
    type: "lines,words,chars"
  });
  var sec1Chars3 = sec1splitH3.chars;
  var sec1Words3 = sec1splitH3.words;
  $(sec1Chars3).addClass('h3Chars sec1Chars3');
  $(sec1Words3).addClass('h3Words sec1Words3'); // ---------------------------------------------------------------
  // SECTION 2
  // ---------------------------------------------------------------

  var sec2 = $('#section2');
  var sec2H2 = sec2.find('h2');
  var sec2splitH2 = new SplitText(sec2H2, {
    type: "lines,words"
  }); // let sec2Chars2 = sec2splitH2.chars;

  var sec2Words2 = sec2splitH2.words;
  var sec2Lines2 = sec2splitH2.lines;
  $(sec2Lines2).addClass('h2Lines'); // $(sec2Chars2).addClass('h2Chars sec2Chars2');

  $(sec2Words2).addClass('h2Words sec2Words2');
  var sec2P = sec2.find('.text-container p');
  var sec2splitP = new SplitText(sec2P, {
    type: "lines"
  }); // let sec2WordsP = sec2splitP.words;

  var sec2LinesP = sec2splitP.lines; // $(sec2WordsP).addClass('h3Words sec2WordsP');

  $(sec2LinesP).addClass('pLines sec2LinesP'); // ---------------------------------------------------------------
  // SECTION 4
  // ---------------------------------------------------------------

  var sec4 = $('#section4');
  var sec4H2 = sec4.find('h2');
  var sec4splitH2 = new SplitText(sec4H2, {
    type: "lines,words"
  }); // let sec4Chars2 = sec4splitH2.chars;

  var sec4Words2 = sec4splitH2.words;
  var sec4Lines2 = sec4splitH2.lines;
  $(sec4Lines2).addClass('h2Lines'); // $(sec4Chars2).addClass('h2Chars sec4Chars2');

  $(sec4Words2).addClass('h2Words sec4Words2');
  var sec4P = sec4.find('.text-container p');
  var sec4splitP = new SplitText(sec4P, {
    type: "lines"
  }); // let sec4WordsP = sec4splitP.words;

  var sec4LinesP = sec4splitP.lines; // $(sec4WordsP).addClass('h3Words sec4WordsP');

  $(sec4LinesP).addClass('pLines sec4LinesP'); // ---------------------------------------------------------------
  // SECTION 5
  // ---------------------------------------------------------------

  var sec5 = $('#section5');
  var sec5H2 = sec5.find('h2');
  var sec5splitH2 = new SplitText(sec5H2, {
    type: "lines,words"
  }); // let sec5Chars2 = sec5splitH2.chars;

  var sec5Words2 = sec5splitH2.words;
  var sec5Lines2 = sec5splitH2.lines;
  $(sec5Lines2).addClass('h2Lines'); // $(sec5Chars2).addClass('h2Chars sec5Chars2');

  $(sec5Words2).addClass('h2Words sec5Words2');
  var sec5P = sec5.find('.text-container p');
  var sec5splitP = new SplitText(sec5P, {
    type: "lines"
  }); // let sec5WordsP = sec5splitP.words;

  var sec5LinesP = sec5splitP.lines; // $(sec5WordsP).addClass('h3Words sec5WordsP');

  $(sec5LinesP).addClass('pLines sec5LinesP'); // ---------------------------------------------------------------
  // SECTION 6
  // ---------------------------------------------------------------

  var sec6 = $('#section6');
  var sec6H2 = sec6.find('h2');
  var sec6splitH2 = new SplitText(sec6H2, {
    type: "lines,words"
  }); // let sec6Chars2 = sec6splitH2.chars;

  var sec6Words2 = sec6splitH2.words;
  var sec6Lines2 = sec6splitH2.lines;
  $(sec6Lines2).addClass('h2Lines'); // $(sec6Chars2).addClass('h2Chars sec6Chars2');

  $(sec6Words2).addClass('h2Words sec6Words2');
  var sec6P = sec6.find('.text-container p');
  var sec6splitP = new SplitText(sec6P, {
    type: "lines"
  }); // let sec6WordsP = sec6splitP.words;

  var sec6LinesP = sec6splitP.lines; // $(sec6WordsP).addClass('h3Words sec6WordsP');

  $(sec6LinesP).addClass('pLines sec6LinesP'); // ---------------------------------------------------------------
  // SECTION 7
  // ---------------------------------------------------------------

  var sec7 = $('#section7');
  var sec7H2 = sec7.find('h2');
  var sec7splitH2 = new SplitText(sec7H2, {
    type: "lines,words"
  }); // let sec7Chars2 = sec7splitH2.chars;

  var sec7Words2 = sec7splitH2.words;
  var sec7Lines2 = sec7splitH2.lines;
  $(sec7Lines2).addClass('h2Lines'); // $(sec7Chars2).addClass('h2Chars');

  $(sec7Words2).addClass('h2Words');
  var sec7P = sec7.find('.text-container p');
  var sec7splitP = new SplitText(sec7P, {
    type: "lines"
  }); // let sec7WordsP = sec7splitP.words;

  var sec7LinesP = sec7splitP.lines; // $(sec7WordsP).addClass('h3Words sec7WordsP');

  $(sec7LinesP).addClass('pLines sec7LinesP'); // ---------------------------------------------------------------
  // SECTION 8
  // ---------------------------------------------------------------

  var sec8 = $('#section8');
  var sec8H2 = sec8.find('h2');
  var sec8splitH2 = new SplitText(sec8H2, {
    type: "lines,words"
  }); // let sec8Chars2 = sec8splitH2.chars;

  var sec8Words2 = sec8splitH2.words;
  var sec8Lines2 = sec8splitH2.lines;
  $(sec8Lines2).addClass('h2Lines'); // $(sec8Chars2).addClass('h2Chars');

  $(sec8Words2).addClass('h2Words');
  var sec8P = sec8.find('.text-container p');
  var sec8splitP = new SplitText(sec8P, {
    type: "lines"
  }); // let sec8WordsP = sec8splitP.words;

  var sec8LinesP = sec8splitP.lines; // $(sec8WordsP).addClass('h3Words sec8WordsP');

  $(sec8LinesP).addClass('pLines sec8LinesP'); // ---------------------------------------------------------------
  // SETUP ELEMENTS
  // ---------------------------------------------------------------
  // gsap.set('.h2Chars', {y:'1.1em'});
};

/***/ }),

/***/ "./src/js/components/pageSetup.js":
/*!****************************************!*\
  !*** ./src/js/components/pageSetup.js ***!
  \****************************************/
/*! exports provided: preLoader, vidLinks, mobileVidLinks, smoothScrolling, mobileNavSetup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preLoader", function() { return preLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vidLinks", function() { return vidLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileVidLinks", function() { return mobileVidLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothScrolling", function() { return smoothScrolling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileNavSetup", function() { return mobileNavSetup; });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/js/components/index.js");

var preLoader = function preLoader() {
  var tl = new gsap.timeline({
    defaults: {
      duration: 0.5
    },
    // ease:'power4.out',
    onComplete: function onComplete() {
      // alert('out');
      $('#preloader').remove();
    }
  });
  tl.to('.preloaderSVG', {
    scale: 0
  }, "loadOut");
  tl.to('#preloader', {
    opacity: 0,
    duration: 0.3
  }, "loadOut2");
};
var vidLinks = function vidLinks() {
  var thisSrc = $('.iframeHolder').attr('data-desktop-vid'); // console.log(thisSrc);

  $('.iframeEmpty').attr('src', 'https://player.vimeo.com/video/' + thisSrc + '?h=25f334e956&title=0&byline=0&portrait=0');
};
var mobileVidLinks = function mobileVidLinks() {
  var thisSrc = $('.iframeHolder').attr('data-mobile-vid'); // console.log(thisSrc);

  $('.iframeEmpty').attr('src', 'https://player.vimeo.com/video/' + thisSrc + '?h=25f334e956&title=0&byline=0&portrait=0');
};
var smoothScrolling = function smoothScrolling(theLink) {
  var target = $(theLink).attr('href');
  var headerHeight = $('.header').outerHeight();
  gsap.to(window, {
    duration: .5,
    ease: 'circ.out',
    scrollTo: {
      y: target // Activate if Header Is Fixed
      // offsetY:headerHeight

    }
  });
  return false;
};
var mobileNavSetup = function mobileNavSetup() {
  gsap.set('nav a', {
    opacity: 0,
    x: '50%'
  });
};

/***/ }),

/***/ "./src/js/components/sectionsSetup.js":
/*!********************************************!*\
  !*** ./src/js/components/sectionsSetup.js ***!
  \********************************************/
/*! exports provided: sectionsSetup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sectionsSetup", function() { return sectionsSetup; });
var sectionsSetup = function sectionsSetup() {
  // ---------------------------------------------------------------
  // MEASURING VARS
  // ---------------------------------------------------------------
  var totalSections = $("section").length;
  var totalBuzzOn = $(".buzzOnBeesBlock").length;
  var windowHeight = Math.round(window.innerHeight);

  if (screen.width <= 1024) {
    var myScrollHeight = windowHeight * 1.5;
  } else {
    var myScrollHeight = windowHeight / 2;
  }

  var fullHeight = myScrollHeight * (totalSections + totalBuzzOn) + windowHeight - 1;
  var buzzBlock = $(".buzzOnBeesBlock");
  var buzzWidth = buzzBlock.outerWidth(); // ---------------------------------------------------------------
  // GLOBAL
  // ---------------------------------------------------------------
  // Set Overall Scroll Height

  gsap.set(".home-page", {
    height: fullHeight
  });
  gsap.set(document.body, {
    overflow: "hidden"
  }); // Hide All Lines

  gsap.set($(".home-page").find("path"), {
    drawSVG: "50% 50%"
  });
  gsap.set($(".home-page").find("polyline"), {
    drawSVG: "50% 50%"
  });
  gsap.set($(".home-page").find("line"), {
    drawSVG: "50% 50%"
  });
  gsap.set($(".home-page").find("#down-arrow line"), {
    drawSVG: "100% 100%"
  }); // Set 1st Background Image as Visible

  gsap.set("#background1", {
    opacity: 1,
    zIndex: 101
  }); // Set Buzz On Bees to Hidden

  gsap.set(buzzBlock, {
    x: buzzWidth
  }); // ---------------------------------------------------------------
  // SECTION 1
  // ---------------------------------------------------------------

  var sec1 = $("#section1");
  var sec1H2 = sec1.find("h2");
  var sec1splitH2 = new SplitText(sec1H2, {
    type: "lines,words,chars"
  });
  var sec1Chars2 = sec1splitH2.chars;
  var sec1Words2 = sec1splitH2.words;
  var sec1Lines2 = sec1splitH2.lines;
  $(sec1Lines2).addClass("h2Lines");
  $(sec1Chars2).addClass("h2Chars sec1Chars2");
  $(sec1Words2).addClass("h2Words sec1Words2");
  var sec1H3 = sec1.find("h3");
  var sec1splitH3 = new SplitText(sec1H3, {
    type: "lines,words,chars"
  });
  var sec1Chars3 = sec1splitH3.chars;
  var sec1Words3 = sec1splitH3.words;
  $(sec1Chars3).addClass("h3Chars sec1Chars3");
  $(sec1Words3).addClass("h3Words sec1Words3"); // ---------------------------------------------------------------
  // SECTION 2
  // ---------------------------------------------------------------

  var sec2 = $("#section2");
  var sec2H2 = sec2.find("h2");
  var sec2splitH2 = new SplitText(sec2H2, {
    type: "lines,words,chars"
  });
  var sec2Chars2 = sec2splitH2.chars;
  var sec2Words2 = sec2splitH2.words;
  var sec2Lines2 = sec2splitH2.lines;
  $(sec2Lines2).addClass("h2Lines");
  $(sec2Chars2).addClass("h2Chars sec2Chars2");
  $(sec2Words2).addClass("h2Words sec2Words2");
  var sec2P = sec2.find(".text-container p");
  var sec2splitP = new SplitText(sec2P, {
    type: "lines"
  }); // let sec2WordsP = sec2splitP.words;

  var sec2LinesP = sec2splitP.lines; // $(sec2WordsP).addClass('h3Words sec2WordsP');

  $(sec2LinesP).addClass("pLines sec2LinesP"); // ---------------------------------------------------------------
  // SECTION 4
  // ---------------------------------------------------------------

  var sec4 = $("#section4");
  var sec4H2 = sec4.find("h2");
  var sec4splitH2 = new SplitText(sec4H2, {
    type: "lines,words,chars"
  });
  var sec4Chars2 = sec4splitH2.chars;
  var sec4Words2 = sec4splitH2.words;
  var sec4Lines2 = sec4splitH2.lines;
  $(sec4Lines2).addClass("h2Lines");
  $(sec4Chars2).addClass("h2Chars sec4Chars2");
  $(sec4Words2).addClass("h2Words sec4Words2");
  var sec4P = sec4.find(".text-container p");
  var sec4splitP = new SplitText(sec4P, {
    type: "lines"
  }); // let sec4WordsP = sec4splitP.words;

  var sec4LinesP = sec4splitP.lines; // $(sec4WordsP).addClass('h3Words sec4WordsP');

  $(sec4LinesP).addClass("pLines sec4LinesP"); // ---------------------------------------------------------------
  // SECTION 5
  // ---------------------------------------------------------------

  var sec5 = $("#section5");
  var sec5H2 = sec5.find("h2");
  var sec5splitH2 = new SplitText(sec5H2, {
    type: "lines,words,chars"
  });
  var sec5Chars2 = sec5splitH2.chars;
  var sec5Words2 = sec5splitH2.words;
  var sec5Lines2 = sec5splitH2.lines;
  $(sec5Lines2).addClass("h2Lines");
  $(sec5Chars2).addClass("h2Chars sec5Chars2");
  $(sec5Words2).addClass("h2Words sec5Words2");
  var sec5P = sec5.find(".text-container p");
  var sec5splitP = new SplitText(sec5P, {
    type: "lines"
  }); // let sec5WordsP = sec5splitP.words;

  var sec5LinesP = sec5splitP.lines; // $(sec5WordsP).addClass('h3Words sec5WordsP');

  $(sec5LinesP).addClass("pLines sec5LinesP"); // ---------------------------------------------------------------
  // SECTION 6
  // ---------------------------------------------------------------

  var sec6 = $("#section6");
  var sec6H2 = sec6.find("h2");
  var sec6splitH2 = new SplitText(sec6H2, {
    type: "lines,words,chars"
  });
  var sec6Chars2 = sec6splitH2.chars;
  var sec6Words2 = sec6splitH2.words;
  var sec6Lines2 = sec6splitH2.lines;
  $(sec6Lines2).addClass("h2Lines");
  $(sec6Chars2).addClass("h2Chars sec6Chars2");
  $(sec6Words2).addClass("h2Words sec6Words2");
  var sec6P = sec6.find(".text-container p");
  var sec6splitP = new SplitText(sec6P, {
    type: "lines"
  }); // let sec6WordsP = sec6splitP.words;

  var sec6LinesP = sec6splitP.lines; // $(sec6WordsP).addClass('h3Words sec6WordsP');

  $(sec6LinesP).addClass("pLines sec6LinesP"); // ---------------------------------------------------------------
  // SECTION 7
  // ---------------------------------------------------------------
  // let sec7 = $('#section7');
  // let sec7H2 = sec7.find('h2');
  // let sec7splitH2 = new SplitText(sec7H2, { type: "lines,words,chars" });
  // let sec7Chars2 = sec7splitH2.chars;
  // let sec7Words2 = sec7splitH2.words;
  // let sec7Lines2 = sec7splitH2.lines;
  // $(sec7Lines2).addClass('h2Lines');
  // $(sec7Chars2).addClass('h2Chars');
  // $(sec7Words2).addClass('h2Words');
  // let sec7P = sec7.find('.text-container p');
  // let sec7splitP = new SplitText(sec7P, { type: "lines" });
  // // let sec7WordsP = sec7splitP.words;
  // let sec7LinesP = sec7splitP.lines;
  // // $(sec7WordsP).addClass('h3Words sec7WordsP');
  // $(sec7LinesP).addClass('pLines sec7LinesP');
  // ---------------------------------------------------------------
  // SECTION 8
  // ---------------------------------------------------------------
  // let sec8 = $('#section8');
  // let sec8H2 = sec8.find('h2');
  // let sec8splitH2 = new SplitText(sec8H2, { type: "lines,words,chars" });
  // let sec8Chars2 = sec8splitH2.chars;
  // let sec8Words2 = sec8splitH2.words;
  // let sec8Lines2 = sec8splitH2.lines;
  // $(sec8Lines2).addClass('h2Lines');
  // $(sec8Chars2).addClass('h2Chars');
  // $(sec8Words2).addClass('h2Words');
  // let sec8P = sec8.find('.text-container p');
  // let sec8splitP = new SplitText(sec8P, { type: "lines" });
  // // let sec8WordsP = sec8splitP.words;
  // let sec8LinesP = sec8splitP.lines;
  // // $(sec8WordsP).addClass('h3Words sec8WordsP');
  // $(sec8LinesP).addClass('pLines sec8LinesP');
  // ---------------------------------------------------------------
  // SETUP ELEMENTS
  // ---------------------------------------------------------------
  // gsap.set('.h2Chars', {y:'1.1em'});
};

/***/ }),

/***/ "./src/js/components/windowLoad.js":
/*!*****************************************!*\
  !*** ./src/js/components/windowLoad.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/js/components/index.js");
 // $(window).on('beforeunload', function() {
//   $(window).scrollTop(0);
// });

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

window.addEventListener('load', function () {
  Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["preLoader"])();
  Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["gsapRegisters"])();

  if (screen.width <= 1024) {
    Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["mobileSectionsSetup"])();
    Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["mobileVidLinks"])();
    Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["mobileAnimateSection"])();
  } else {
    Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["sectionsSetup"])();
    Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["vidLinks"])();
    Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["animateSection"])();
  }
});
window.addEventListener('resize', function () {});

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/bundle.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/seemax/code/wmbee/wp-content/themes/seemax-theme/src/js/bundle.js */"./src/js/bundle.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hbmltYXRlU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9jbGlja0V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9nc2FwUmVnaXN0ZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21lbnVUb2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbW9iaWxlQW5pbWF0ZVNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbW9iaWxlU2VjdGlvbnNTZXR1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9wYWdlU2V0dXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2VjdGlvbnNTZXR1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy93aW5kb3dMb2FkLmpzIl0sIm5hbWVzIjpbImFuaW1hdGVTZWN0aW9uIiwid2luZG93SGVpZ2h0IiwiTWF0aCIsInJvdW5kIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJzY3JlZW4iLCJ3aWR0aCIsIm15U2Nyb2xsSGVpZ2h0IiwibXlTY3JvbGxPZmZzZXQiLCJzZWN0aW9uQW5pbSIsInNlY3Rpb25BbmltMSIsInRoaXNTZWMiLCJ0aGlzT3ZlcmxheSIsIiQiLCJjaGFyc0gyIiwiZmluZCIsImNoYXJzSDMiLCJjZW50ZXI0TCIsImNlbnRlcjRSIiwiY2VudGVyM0wiLCJjZW50ZXIzUiIsImNlbnRlcjJMIiwiY2VudGVyMlIiLCJjZW50ZXIxIiwidG9wU21hbGwiLCJib3R0b21TbWFsbCIsImNlbnRlclNtYWxsIiwidG9wTGVmdFNtYWxsIiwidG9wUmlnaHR0U21hbGwiLCJib3R0b21MZWZ0U21hbGwiLCJib3R0b21SaWdodHRTbWFsbCIsInNtYWxsc0dyb3VwIiwiZG93bkFycm93IiwiZG93bkFycm93TGluZSIsImRvd25BcnJvd1BvaW50IiwidGwiLCJnc2FwIiwidGltZWxpbmUiLCJwYXVzZWQiLCJkZWZhdWx0cyIsImR1cmF0aW9uIiwiZWFzZSIsIm9uQ29tcGxldGUiLCJzZXQiLCJkb2N1bWVudCIsImJvZHkiLCJvdmVyZmxvdyIsImxpbmVUTCIsImFycm93VEwiLCJyZXBlYXQiLCJ5b3lvIiwidG8iLCJ5Iiwib25SZXZlcnNlQ29tcGxldGUiLCJraWxsVHdlZW5zT2YiLCJjb250ZW50VEwiLCJ6SW5kZXgiLCJmcm9tVG8iLCJkcmF3U1ZHIiwieCIsIm9wYWNpdHkiLCJzdGFnZ2VyIiwiYW1vdW50IiwiZnJvbSIsImFkZCIsInNlY3Rpb25BbmltMiIsImxpbmVzUCIsInNlY3Rpb25UZXh0IiwiZGVsYXkiLCJzZWN0aW9uQW5pbTMiLCJ0aGlzQmFjayIsInNvbG9DZW50ZXIyIiwic29sb0NlbnRlcjEiLCJzZWN0aW9uQW5pbTQiLCJtb3JwaFNWRyIsInNoYXBlIiwic2VjdGlvbkFuaW01Iiwic2VjdGlvbkFuaW02IiwiaW1nQ29udGFpbmVyIiwic3ViSW1nIiwicGxheSIsInNlY3Rpb25UcmlnIiwibXlDb3VudCIsInN0YXJ0SGVpZ2h0IiwiZW5kSGVpZ2h0IiwiU2Nyb2xsVHJpZ2dlciIsImNyZWF0ZSIsInN0YXJ0IiwiZW5kIiwic2NydWIiLCJvbkVudGVyIiwib25MZWF2ZSIsInJldmVyc2UiLCJvbkVudGVyQmFjayIsIm9uTGVhdmVCYWNrIiwiaSIsImVhY2giLCJidXp6SW40IiwiYnV6ekJsb2NrIiwiYnV6eldpZHRoIiwib3V0ZXJXaWR0aCIsImJ1enpUcmlnNCIsImJ1enpJbjUiLCJidXp6VHJpZzUiLCJidXp6SW42IiwiYnV6elRyaWc2IiwiY2xpY2tFdmVudHMiLCJtZW51VG9nZ2xlVEwiLCJtZW51VG9nZ2xlIiwicmV2ZXJzZWQiLCJvbiIsImhlaWdodCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNtb290aFNjcm9sbGluZyIsImdzYXBSZWdpc3RlcnMiLCJyZWdpc3RlclBsdWdpbiIsIlNjcm9sbFRvUGx1Z2luIiwiU3BsaXRUZXh0IiwiRHJhd1NWR1BsdWdpbiIsIk1vcnBoU1ZHUGx1Z2luIiwibGVmdCIsInJvdGF0aW9uIiwidHJhbnNmb3JtT3JpZ2luIiwibW9iaWxlQW5pbWF0ZVNlY3Rpb24iLCJzZWN0aW9uTGluZXMiLCJzZWNBcnJvdyIsImxpbmVzIiwic2VjdGlvbkFuaW03IiwidHJpZ2dlciIsImxpbmVzSW4iLCJ0aGVzZUxpbmVzIiwibW9iaWxlU2VjdGlvbnNTZXR1cCIsInRvdGFsU2VjdGlvbnMiLCJsZW5ndGgiLCJ0b3RhbEJ1enpPbiIsImZ1bGxIZWlnaHQiLCJzZWMxTGluZXMiLCJzZWMxQXJyb3ciLCJzZWMxIiwic2VjMUgyIiwic2VjMXNwbGl0SDIiLCJ0eXBlIiwic2VjMUNoYXJzMiIsImNoYXJzIiwic2VjMVdvcmRzMiIsIndvcmRzIiwic2VjMUxpbmVzMiIsImFkZENsYXNzIiwic2VjMUgzIiwic2VjMXNwbGl0SDMiLCJzZWMxQ2hhcnMzIiwic2VjMVdvcmRzMyIsInNlYzIiLCJzZWMySDIiLCJzZWMyc3BsaXRIMiIsInNlYzJXb3JkczIiLCJzZWMyTGluZXMyIiwic2VjMlAiLCJzZWMyc3BsaXRQIiwic2VjMkxpbmVzUCIsInNlYzQiLCJzZWM0SDIiLCJzZWM0c3BsaXRIMiIsInNlYzRXb3JkczIiLCJzZWM0TGluZXMyIiwic2VjNFAiLCJzZWM0c3BsaXRQIiwic2VjNExpbmVzUCIsInNlYzUiLCJzZWM1SDIiLCJzZWM1c3BsaXRIMiIsInNlYzVXb3JkczIiLCJzZWM1TGluZXMyIiwic2VjNVAiLCJzZWM1c3BsaXRQIiwic2VjNUxpbmVzUCIsInNlYzYiLCJzZWM2SDIiLCJzZWM2c3BsaXRIMiIsInNlYzZXb3JkczIiLCJzZWM2TGluZXMyIiwic2VjNlAiLCJzZWM2c3BsaXRQIiwic2VjNkxpbmVzUCIsInNlYzciLCJzZWM3SDIiLCJzZWM3c3BsaXRIMiIsInNlYzdXb3JkczIiLCJzZWM3TGluZXMyIiwic2VjN1AiLCJzZWM3c3BsaXRQIiwic2VjN0xpbmVzUCIsInNlYzgiLCJzZWM4SDIiLCJzZWM4c3BsaXRIMiIsInNlYzhXb3JkczIiLCJzZWM4TGluZXMyIiwic2VjOFAiLCJzZWM4c3BsaXRQIiwic2VjOExpbmVzUCIsInByZUxvYWRlciIsInJlbW92ZSIsInNjYWxlIiwidmlkTGlua3MiLCJ0aGlzU3JjIiwiYXR0ciIsIm1vYmlsZVZpZExpbmtzIiwidGhlTGluayIsInRhcmdldCIsImhlYWRlckhlaWdodCIsIm91dGVySGVpZ2h0Iiwic2Nyb2xsVG8iLCJtb2JpbGVOYXZTZXR1cCIsInNlY3Rpb25zU2V0dXAiLCJzZWMyQ2hhcnMyIiwic2VjNENoYXJzMiIsInNlYzVDaGFyczIiLCJzZWM2Q2hhcnMyIiwib25iZWZvcmV1bmxvYWQiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNB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LENBQWhCLEVBQW1CLENBQW5CO0FBQ0QsQ0FGRDs7QUFJQWpOLE1BQU0sQ0FBQ3lOLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLFlBQVc7RUFDdkNuQiwyREFBUztFQUNUdEYsK0RBQWE7O0VBRWIsSUFBSTlHLE1BQU0sQ0FBQ0MsS0FBUCxJQUFnQixJQUFwQixFQUF5QjtJQUN2QjhILHFFQUFtQjtJQUNuQjJFLGdFQUFjO0lBQ2RuRixzRUFBb0I7RUFDckIsQ0FKRCxNQUlPO0lBQ0wwRiwrREFBYTtJQUNiViwwREFBUTtJQUNSN00sZ0VBQWM7RUFDZjtBQU1KLENBbEJEO0FBb0JBSSxNQUFNLENBQUN5TixnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFXLENBRTVDLENBRkQsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgJy4vY29tcG9uZW50cy93aW5kb3dMb2FkLmpzJzsiLCJleHBvcnQgbGV0IGFuaW1hdGVTZWN0aW9uID0gKCkgPT4ge1xuICBsZXQgd2luZG93SGVpZ2h0ID0gTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICBpZiAoc2NyZWVuLndpZHRoIDw9IDEwMjQpIHtcbiAgICB2YXIgbXlTY3JvbGxIZWlnaHQgPSB3aW5kb3dIZWlnaHQgKiAyO1xuICB9IGVsc2Uge1xuICAgIHZhciBteVNjcm9sbEhlaWdodCA9IHdpbmRvd0hlaWdodCAvIDI7XG4gIH1cbiAgbGV0IG15U2Nyb2xsT2Zmc2V0ID0gMDtcbiAgLy8gR2xvYmFsIHZhciBmb3IgYW5pbWF0aW9ucyAvIEFjY2VzcyB2aWEgc2VjdGlvbiB0cmlnIGxvb3BcblxuICAvLyBjb25zb2xlLmxvZyhteVNjcm9sbEhlaWdodCk7XG4gIGxldCBzZWN0aW9uQW5pbSA9IHtcbiAgICBzZWN0aW9uQW5pbTE6ICgpID0+IHtcbiAgICAgIGxldCB0aGlzU2VjID0gXCIjc2VjdGlvbjFcIjtcbiAgICAgIGxldCB0aGlzT3ZlcmxheSA9ICQoXCIjb3ZlcmxheTFcIik7XG4gICAgICBsZXQgY2hhcnNIMiA9ICQodGhpc1NlYykuZmluZChcIi5zZWMxQ2hhcnMyXCIpO1xuICAgICAgbGV0IGNoYXJzSDMgPSAkKHRoaXNTZWMpLmZpbmQoXCIuc2VjMUNoYXJzM1wiKTtcbiAgICAgIC8vIEJhY2tncm91bmQgU2hhcGUgVmFyc1xuICAgICAgbGV0IGNlbnRlcjRMID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci00TFwiKTtcbiAgICAgIGxldCBjZW50ZXI0UiA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItNFJcIik7XG4gICAgICBsZXQgY2VudGVyM0wgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTNMXCIpO1xuICAgICAgbGV0IGNlbnRlcjNSID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci0zUlwiKTtcbiAgICAgIGxldCBjZW50ZXIyTCA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItMkxcIik7XG4gICAgICBsZXQgY2VudGVyMlIgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTJSXCIpO1xuICAgICAgbGV0IGNlbnRlcjEgPSAkKHRoaXNTZWMpLmZpbmQoXCIjdG9wLWJpZ1wiKTtcbiAgICAgIGxldCB0b3BTbWFsbCA9ICQodGhpc1NlYykuZmluZChcIiN0b3Atc21hbGxcIik7XG4gICAgICBsZXQgYm90dG9tU21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjYm90dG9tLXNtYWxsXCIpO1xuICAgICAgbGV0IGNlbnRlclNtYWxsID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci1zbWFsbFwiKTtcbiAgICAgIGxldCB0b3BMZWZ0U21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjdG9wLWxlZnQtc21hbGxcIik7XG4gICAgICBsZXQgdG9wUmlnaHR0U21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjdG9wLXJpZ2h0LXNtYWxsXCIpO1xuICAgICAgbGV0IGJvdHRvbUxlZnRTbWFsbCA9ICQodGhpc1NlYykuZmluZChcIiNib3R0b20tbGVmdC1zbWFsbFwiKTtcbiAgICAgIGxldCBib3R0b21SaWdodHRTbWFsbCA9ICQodGhpc1NlYykuZmluZChcIiNib3R0b20tcmlnaHQtc21hbGxcIik7XG4gICAgICBsZXQgc21hbGxzR3JvdXAgPSBbXG4gICAgICAgIHRvcFNtYWxsLFxuICAgICAgICBib3R0b21TbWFsbCxcbiAgICAgICAgY2VudGVyU21hbGwsXG4gICAgICAgIHRvcExlZnRTbWFsbCxcbiAgICAgICAgdG9wUmlnaHR0U21hbGwsXG4gICAgICAgIGJvdHRvbUxlZnRTbWFsbCxcbiAgICAgICAgYm90dG9tUmlnaHR0U21hbGwsXG4gICAgICBdO1xuICAgICAgLy8gQXJyb3cgUGllY2VzXG4gICAgICBsZXQgZG93bkFycm93ID0gJCh0aGlzU2VjKS5maW5kKFwiI2Rvd24tYXJyb3dcIik7XG4gICAgICBsZXQgZG93bkFycm93TGluZSA9ICQodGhpc1NlYykuZmluZChcIiNkb3duLWFycm93LWxpbmVcIik7XG4gICAgICBsZXQgZG93bkFycm93UG9pbnQgPSAkKHRoaXNTZWMpLmZpbmQoXCIjZG93bi1hcnJvdy1wb2ludFwiKTtcblxuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHBhdXNlZDogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9LFxuICAgICAgICAvLyBSZWxlYXNlIFRoZSBTY3JvbGwgTG9ja1xuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZ3NhcC5zZXQoZG9jdW1lbnQuYm9keSwgeyBvdmVyZmxvdzogXCJhdXRvXCIgfSk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgbGV0IGxpbmVUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOiAwLjgsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgbGV0IGFycm93VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMC4xNSxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIEJvdW5jZSBUaGUgRG93biBBcnJvd1xuICAgICAgICAgIGdzYXBcbiAgICAgICAgICAgIC50aW1lbGluZSh7IHJlcGVhdDogLTEsIHlveW86IHRydWUgfSlcbiAgICAgICAgICAgIC50byhkb3duQXJyb3csIHsgeTogLTQsIGR1cmF0aW9uOiAxLCBlYXNlOiBcIm5vbmVcIiB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25SZXZlcnNlQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBTdG9wIEJvdW5jaW4gVGhlIERvd24gQXJyb3cgYW5kIFJlc2V0IGl0J3MgWSBwb3NpdGlvblxuICAgICAgICAgIGdzYXAua2lsbFR3ZWVuc09mKGRvd25BcnJvdyk7XG4gICAgICAgICAgZ3NhcC5zZXQoZG93bkFycm93LCB7IHk6IDAgfSk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgbGV0IGNvbnRlbnRUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOiAwLjQsXG4gICAgICAgICAgZWFzZTogXCJiYWNrLm91dCgxLjUpXCIsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgLy8gU2V0IGJhY2tncm91bmQgei1pbmRleCBieSBzZWN0aW9uIG51bWJlciAvIFNlY3Rpb24gMiBoYXMgbm8gYmFjayAvIFNlY3Rpb24gMyBpcyB6LWluZGV4IDExMCB0byBzdGF5IGFib3ZlIGFsbFxuICAgICAgdGwuc2V0KHRoaXNPdmVybGF5LCB7IHpJbmRleDogMTAxIH0pO1xuICAgICAgLy8gU2V0IHNlY3Rpb24gei1pbmRleCBieSBzZWN0aW9uIG51bWJlclxuICAgICAgdGwuZnJvbVRvKHRoaXNTZWMsIHsgekluZGV4OiAxMyB9LCB7IHpJbmRleDogMTAwMSB9KTtcblxuICAgICAgLy8gQW5pbWF0ZSBMaW5lc1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyNEwsXG4gICAgICAgIHsgZHJhd1NWRzogXCIwJSAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyNFIsXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDEwMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGNlbnRlcjNMLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMCUgMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGNlbnRlcjNSLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAxMDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBjZW50ZXIyTCxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjAlIDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBjZW50ZXIyUixcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMTAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyMSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjUwJSA1MCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiLCBkdXJhdGlvbjogMC43IH0sXG4gICAgICAgIFwic2Nyb2xsSW4rPTAuMVwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgc21hbGxzR3JvdXAsXG4gICAgICAgIHsgZHJhd1NWRzogXCI1MCUgNTAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiwgZHVyYXRpb246IDAuNiB9LFxuICAgICAgICBcInNjcm9sbEluKz0wLjJcIlxuICAgICAgKTtcblxuICAgICAgLy8gQW5pbWF0ZSBDb250ZW50XG4gICAgICBjb250ZW50VEwuZnJvbVRvKFxuICAgICAgICBjaGFyc0gyLFxuICAgICAgICB7IHg6IC0yMCwgb3BhY2l0eTogMCB9LFxuICAgICAgICB7IHg6IDAsIG9wYWNpdHk6IDEsIHN0YWdnZXI6IHsgYW1vdW50OiAwLjUgfSB9LFxuICAgICAgICBcImNvbnRlbnRcIlxuICAgICAgKTtcbiAgICAgIGNvbnRlbnRUTC5mcm9tVG8oXG4gICAgICAgIGNoYXJzSDMsXG4gICAgICAgIHsgeTogXCIxLjAxZW1cIiB9LFxuICAgICAgICB7IHk6IDAsIHN0YWdnZXI6IHsgYW1vdW50OiAwLjIsIGZyb206IFwiY2VudGVyXCIgfSB9LFxuICAgICAgICBcImNvbnRlbnQrPTAuMzVcIlxuICAgICAgKTtcblxuICAgICAgLy8gQW5pbWF0ZSBBcnJvd1xuICAgICAgYXJyb3dUTC5mcm9tVG8oXG4gICAgICAgIGRvd25BcnJvd0xpbmUsXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDEwMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGFycm93VEwuZnJvbVRvKFxuICAgICAgICBkb3duQXJyb3dQb2ludCxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjUwJSA1MCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW4rPTAuMTQ1XCJcbiAgICAgICk7XG5cbiAgICAgIC8vIEJ1aWxkIE1hc3RlciBUTFRMXG4gICAgICB0bC5mcm9tVG8odGhpc092ZXJsYXksIHsgb3BhY2l0eTogMCB9LCB7IG9wYWNpdHk6IDAuNjUgfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmFkZChsaW5lVEwsIFwic2Nyb2xsSW5BbGwrPTAuM1wiKTtcbiAgICAgIHRsLmFkZChjb250ZW50VEwsIFwic2Nyb2xsSW5BbGwrPTAuOFwiKTtcbiAgICAgIHRsLmFkZChhcnJvd1RMLCBcInNjcm9sbEluQWxsKz0xLjRcIik7XG5cbiAgICAgIHJldHVybiB0bDtcbiAgICB9LFxuXG4gICAgc2VjdGlvbkFuaW0yOiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9ICQoXCIjc2VjdGlvbjJcIik7XG4gICAgICBsZXQgY2hhcnNIMiA9ICQodGhpc1NlYykuZmluZChcIi5oMkNoYXJzXCIpO1xuICAgICAgbGV0IGxpbmVzUCA9ICQodGhpc1NlYykuZmluZChcIi5wTGluZXNcIik7XG4gICAgICAvLyBCYWNrZ3JvdW5kIFNoYXBlIFZhcnNcbiAgICAgIGxldCBjZW50ZXI0TCA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItNExcIik7XG4gICAgICBsZXQgY2VudGVyNFIgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTRSXCIpO1xuICAgICAgbGV0IGNlbnRlcjNMID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci0zTFwiKTtcbiAgICAgIGxldCBjZW50ZXIzUiA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItM1JcIik7XG4gICAgICBsZXQgY2VudGVyMkwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTJMXCIpO1xuICAgICAgbGV0IGNlbnRlcjJSID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci0yUlwiKTtcbiAgICAgIGxldCBjZW50ZXIxID0gJCh0aGlzU2VjKS5maW5kKFwiI3RvcC1iaWdcIik7XG4gICAgICBsZXQgdG9wU21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjdG9wLXNtYWxsXCIpO1xuICAgICAgbGV0IGJvdHRvbVNtYWxsID0gJCh0aGlzU2VjKS5maW5kKFwiI2JvdHRvbS1zbWFsbFwiKTtcbiAgICAgIGxldCBjZW50ZXJTbWFsbCA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItc21hbGxcIik7XG4gICAgICBsZXQgdG9wTGVmdFNtYWxsID0gJCh0aGlzU2VjKS5maW5kKFwiI3RvcC1sZWZ0LXNtYWxsXCIpO1xuICAgICAgbGV0IHRvcFJpZ2h0dFNtYWxsID0gJCh0aGlzU2VjKS5maW5kKFwiI3RvcC1yaWdodC1zbWFsbFwiKTtcbiAgICAgIGxldCBib3R0b21MZWZ0U21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjYm90dG9tLWxlZnQtc21hbGxcIik7XG4gICAgICBsZXQgYm90dG9tUmlnaHR0U21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjYm90dG9tLXJpZ2h0LXNtYWxsXCIpO1xuICAgICAgbGV0IHNtYWxsc0dyb3VwID0gW1xuICAgICAgICB0b3BTbWFsbCxcbiAgICAgICAgYm90dG9tU21hbGwsXG4gICAgICAgIGNlbnRlclNtYWxsLFxuICAgICAgICB0b3BMZWZ0U21hbGwsXG4gICAgICAgIHRvcFJpZ2h0dFNtYWxsLFxuICAgICAgICBib3R0b21MZWZ0U21hbGwsXG4gICAgICAgIGJvdHRvbVJpZ2h0dFNtYWxsLFxuICAgICAgXTtcbiAgICAgIC8vIEFycm93IFBpZWNlc1xuICAgICAgbGV0IGRvd25BcnJvdyA9ICQodGhpc1NlYykuZmluZChcIiNkb3duLWFycm93XCIpO1xuICAgICAgbGV0IGRvd25BcnJvd0xpbmUgPSAkKHRoaXNTZWMpLmZpbmQoXCIjZG93bi1hcnJvdy1saW5lXCIpO1xuICAgICAgbGV0IGRvd25BcnJvd1BvaW50ID0gJCh0aGlzU2VjKS5maW5kKFwiI2Rvd24tYXJyb3ctcG9pbnRcIik7XG4gICAgICBsZXQgc2VjdGlvblRleHQgPSAkKHRoaXNTZWMpLmZpbmQoXCIuZG93bi1hcnJvdy10ZXh0XCIpO1xuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlbGF5OiAwLjY1LFxuICAgICAgICBwYXVzZWQ6IHRydWUsXG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgLy8gUmVsZWFzZSBUaGUgU2Nyb2xsIExvY2tcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGdzYXAuc2V0KGRvY3VtZW50LmJvZHksIHsgb3ZlcmZsb3c6IFwiYXV0b1wiIH0pO1xuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGxldCBsaW5lVEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMC44LFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGxldCBjb250ZW50VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMC4xNSxcbiAgICAgICAgICBlYXNlOiBcImJhY2sub3V0KDEuNSlcIixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgYXJyb3dUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOiAwLjE1LFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9LFxuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gQm91bmNlIFRoZSBEb3duIEFycm93XG4gICAgICAgICAgZ3NhcFxuICAgICAgICAgICAgLnRpbWVsaW5lKHsgcmVwZWF0OiAtMSwgeW95bzogdHJ1ZSB9KVxuICAgICAgICAgICAgLnRvKGRvd25BcnJvdywgeyB5OiAtMywgZHVyYXRpb246IDEsIGVhc2U6IFwibm9uZVwiIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvblJldmVyc2VDb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFN0b3AgQm91bmNpbiBUaGUgRG93biBBcnJvdyBhbmQgUmVzZXQgaXQncyBZIHBvc2l0aW9uXG4gICAgICAgICAgZ3NhcC5raWxsVHdlZW5zT2YoZG93bkFycm93KTtcbiAgICAgICAgICBnc2FwLnNldChkb3duQXJyb3csIHsgeTogMCB9KTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBTZXQgc2VjdGlvbiB6LWluZGV4IGJ5IHNlY3Rpb24gbnVtYmVyXG4gICAgICB0bC5mcm9tVG8odGhpc1NlYywgeyB6SW5kZXg6IDEzIH0sIHsgekluZGV4OiAxMDAyIH0pO1xuXG4gICAgICAvLyBBbmltYXRlIExpbmVzXG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBjZW50ZXI0TCxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMTAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyNFIsXG4gICAgICAgIHsgZHJhd1NWRzogXCIwJSAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyM0wsXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDEwMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGNlbnRlcjNSLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMCUgMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGNlbnRlcjJMLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAxMDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBjZW50ZXIyUixcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjAlIDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBjZW50ZXIxLFxuICAgICAgICB7IGRyYXdTVkc6IFwiNTAlIDUwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIsIGR1cmF0aW9uOiAwLjcgfSxcbiAgICAgICAgXCJzY3JvbGxJbis9MC4xXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBzbWFsbHNHcm91cCxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjUwJSA1MCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiLCBkdXJhdGlvbjogMC42IH0sXG4gICAgICAgIFwic2Nyb2xsSW4rPTAuMlwiXG4gICAgICApO1xuXG4gICAgICAvLyBBbmltYXRlIENvbnRlbnRcbiAgICAgIGNvbnRlbnRUTC5mcm9tVG8oXG4gICAgICAgIGNoYXJzSDIsXG4gICAgICAgIHsgeDogLTIwLCBvcGFjaXR5OiAwIH0sXG4gICAgICAgIHsgeDogMCwgb3BhY2l0eTogMSwgc3RhZ2dlcjogeyBhbW91bnQ6IDAuMywgZnJvbTogXCJyYW5kb21cIiB9IH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGNvbnRlbnRUTC5mcm9tVG8oXG4gICAgICAgIGxpbmVzUCxcbiAgICAgICAgeyBvcGFjaXR5OiAwLCB4OiAtNDAgfSxcbiAgICAgICAgeyBvcGFjaXR5OiAxLCB4OiAwLCBzdGFnZ2VyOiB7IGFtb3VudDogMC4zIH0gfSxcbiAgICAgICAgXCJzY3JvbGxJbis9MC4xXCJcbiAgICAgICk7XG5cbiAgICAgIC8vIEFuaW1hdGUgQXJyb3dcbiAgICAgIGFycm93VEwuZnJvbVRvKFxuICAgICAgICBzZWN0aW9uVGV4dCxcbiAgICAgICAgeyB5OiAtNiwgb3BhY2l0eTogMCB9LFxuICAgICAgICB7IHk6IDAsIG9wYWNpdHk6IDEgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgYXJyb3dUTC5mcm9tVG8oXG4gICAgICAgIGRvd25BcnJvd0xpbmUsXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDEwMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW4rPTAuMDI1XCJcbiAgICAgICk7XG4gICAgICBhcnJvd1RMLmZyb21UbyhcbiAgICAgICAgZG93bkFycm93UG9pbnQsXG4gICAgICAgIHsgZHJhd1NWRzogXCI1MCUgNTAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluKz0wLjE3NVwiXG4gICAgICApO1xuXG4gICAgICAvLyBCdWlsZCBNYXN0ZXIgVExUTFxuICAgICAgdGwudG8oXG4gICAgICAgIFwiLmhlYWRlci1sb2dvXCIsXG4gICAgICAgIHsgZHVyYXRpb246IDAuOSwgd2lkdGg6IDE5MCwgZWFzZTogXCJzaW5lLm91dFwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5BbGwrPTAuMVwiXG4gICAgICApO1xuICAgICAgdGwuYWRkKGxpbmVUTCwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmFkZChjb250ZW50VEwsIFwic2Nyb2xsSW5BbGwrPTAuNzVcIik7XG4gICAgICB0bC5hZGQoYXJyb3dUTCwgXCJzY3JvbGxJbkFsbCs9MC43XCIpO1xuXG4gICAgICByZXR1cm4gdGw7XG4gICAgfSxcblxuICAgIC8vIHNlY3Rpb25BbmltMzogKCkgPT4ge1xuICAgIC8vICAgbGV0IHRoaXNTZWMgPSAkKFwiI3NlY3Rpb24zXCIpO1xuICAgIC8vICAgbGV0IHRoaXNCYWNrID0gJChcIiNiYWNrZ3JvdW5kM1wiKTtcbiAgICAvLyAgIGxldCBjZW50ZXI0TCA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItNExcIik7XG4gICAgLy8gICBsZXQgY2VudGVyNFIgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTRSXCIpO1xuICAgIC8vICAgbGV0IGNlbnRlcjNMID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci0zTFwiKTtcbiAgICAvLyAgIGxldCBjZW50ZXIzUiA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItM1JcIik7XG4gICAgLy8gICBsZXQgY2VudGVyMkwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTJMXCIpO1xuICAgIC8vICAgbGV0IGNlbnRlcjJSID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci0yUlwiKTtcbiAgICAvLyAgIGxldCBib3R0b21TbWFsbCA9ICQodGhpc1NlYykuZmluZChcIiNib3R0b20tc21hbGxcIik7XG4gICAgLy8gICAvLyBBcnJvdyBQaWVjZXNcbiAgICAvLyAgIGxldCBkb3duQXJyb3cgPSAkKHRoaXNTZWMpLmZpbmQoXCIjZG93bi1hcnJvd1wiKTtcbiAgICAvLyAgIGxldCBkb3duQXJyb3dMaW5lID0gJCh0aGlzU2VjKS5maW5kKFwiI2Rvd24tYXJyb3ctbGluZVwiKTtcbiAgICAvLyAgIGxldCBkb3duQXJyb3dQb2ludCA9ICQodGhpc1NlYykuZmluZChcIiNkb3duLWFycm93LXBvaW50XCIpO1xuICAgIC8vICAgbGV0IHNlY3Rpb25UZXh0ID0gJCh0aGlzU2VjKS5maW5kKFwiLmRvd24tYXJyb3ctdGV4dFwiKTtcbiAgICAvLyAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIC8vICAgICBkZWxheTogMC4zLFxuICAgIC8vICAgICBwYXVzZWQ6IHRydWUsXG4gICAgLy8gICAgIGRlZmF1bHRzOiB7XG4gICAgLy8gICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAvLyAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgLy8gUmVsZWFzZSBUaGUgU2Nyb2xsIExvY2tcbiAgICAvLyAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICAgIGdzYXAuc2V0KGRvY3VtZW50LmJvZHksIHsgb3ZlcmZsb3c6IFwiYXV0b1wiIH0pO1xuICAgIC8vICAgICB9LFxuICAgIC8vICAgICBvblJldmVyc2VDb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICAgIC8vIFNldCB0aGUgQmFja2dyb3VuZCBCYWNrIEJlaGluZFxuICAgIC8vICAgICAgIGdzYXAuc2V0KHRoaXNCYWNrLCB7IHpJbmRleDogOTkgfSk7XG4gICAgLy8gICAgIH0sXG4gICAgLy8gICB9KTtcblxuICAgIC8vICAgbGV0IGxpbmVUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgIC8vICAgICBkZWZhdWx0czoge1xuICAgIC8vICAgICAgIGR1cmF0aW9uOiAwLjgsXG4gICAgLy8gICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICB9KTtcblxuICAgIC8vICAgbGV0IGNvbnRlbnRUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgIC8vICAgICBkZWZhdWx0czoge1xuICAgIC8vICAgICAgIGR1cmF0aW9uOiAwLjYsXG4gICAgLy8gICAgICAgZWFzZTogXCJiYWNrLm91dCguMilcIixcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgIH0pO1xuXG4gICAgLy8gICBsZXQgYXJyb3dUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgIC8vICAgICBkZWZhdWx0czoge1xuICAgIC8vICAgICAgIGR1cmF0aW9uOiAwLjE1LFxuICAgIC8vICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgICAgLy8gQm91bmNlIFRoZSBEb3duIEFycm93XG4gICAgLy8gICAgICAgZ3NhcFxuICAgIC8vICAgICAgICAgLnRpbWVsaW5lKHsgcmVwZWF0OiAtMSwgeW95bzogdHJ1ZSB9KVxuICAgIC8vICAgICAgICAgLnRvKGRvd25BcnJvdywgeyB5OiAtNCwgZHVyYXRpb246IDEsIGVhc2U6IFwibm9uZVwiIH0pO1xuICAgIC8vICAgICB9LFxuICAgIC8vICAgICBvblJldmVyc2VDb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICAgIC8vIFN0b3AgQm91bmNpbiBUaGUgRG93biBBcnJvdyBhbmQgUmVzZXQgaXQncyBZIHBvc2l0aW9uXG4gICAgLy8gICAgICAgZ3NhcC5raWxsVHdlZW5zT2YoZG93bkFycm93KTtcbiAgICAvLyAgICAgICBnc2FwLnNldChkb3duQXJyb3csIHsgeTogMCB9KTtcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgIH0pO1xuXG4gICAgLy8gICAvLyBTZXQgYmFja2dyb3VuZCB6LWluZGV4IGJ5IHNlY3Rpb24gbnVtYmVyIC8gU2VjdGlvbiAyIGhhcyBubyBiYWNrIC8gU2VjdGlvbiAzIGlzIHotaW5kZXggMTEwIHRvIHN0YXkgYWJvdmUgYWxsXG4gICAgLy8gICB0bC5zZXQodGhpc0JhY2ssIHsgb3BhY2l0eTogMSwgekluZGV4OiAxMTAgfSk7XG4gICAgLy8gICAvLyBTZXQgc2VjdGlvbiB6LWluZGV4IGJ5IHNlY3Rpb24gbnVtYmVyXG4gICAgLy8gICB0bC5mcm9tVG8odGhpc1NlYywgeyB6SW5kZXg6IDEzIH0sIHsgekluZGV4OiAxMDAzIH0pO1xuXG4gICAgLy8gICAvLyBBbmltYXRlIExpbmVzXG4gICAgLy8gICBsaW5lVEwuZnJvbVRvKFxuICAgIC8vICAgICBjZW50ZXI0TCxcbiAgICAvLyAgICAgeyBkcmF3U1ZHOiBcIjAlIDAlXCIgfSxcbiAgICAvLyAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgIC8vICAgICBcInNjcm9sbEluXCJcbiAgICAvLyAgICk7XG4gICAgLy8gICBsaW5lVEwuZnJvbVRvKFxuICAgIC8vICAgICBjZW50ZXI0UixcbiAgICAvLyAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMTAwJVwiIH0sXG4gICAgLy8gICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAvLyAgICAgXCJzY3JvbGxJblwiXG4gICAgLy8gICApO1xuICAgIC8vICAgbGluZVRMLmZyb21UbyhcbiAgICAvLyAgICAgY2VudGVyM0wsXG4gICAgLy8gICAgIHsgZHJhd1NWRzogXCIwJSAwJVwiIH0sXG4gICAgLy8gICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAvLyAgICAgXCJzY3JvbGxJblwiXG4gICAgLy8gICApO1xuICAgIC8vICAgbGluZVRMLmZyb21UbyhcbiAgICAvLyAgICAgY2VudGVyM1IsXG4gICAgLy8gICAgIHsgZHJhd1NWRzogXCIxMDAlIDEwMCVcIiB9LFxuICAgIC8vICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgLy8gICAgIFwic2Nyb2xsSW5cIlxuICAgIC8vICAgKTtcbiAgICAvLyAgIGxpbmVUTC5mcm9tVG8oXG4gICAgLy8gICAgIGNlbnRlcjJMLFxuICAgIC8vICAgICB7IGRyYXdTVkc6IFwiMCUgMCVcIiB9LFxuICAgIC8vICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgLy8gICAgIFwic2Nyb2xsSW5cIlxuICAgIC8vICAgKTtcbiAgICAvLyAgIGxpbmVUTC5mcm9tVG8oXG4gICAgLy8gICAgIGNlbnRlcjJSLFxuICAgIC8vICAgICB7IGRyYXdTVkc6IFwiMTAwJSAxMDAlXCIgfSxcbiAgICAvLyAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgIC8vICAgICBcInNjcm9sbEluXCJcbiAgICAvLyAgICk7XG5cbiAgICAvLyAgIC8vIEFuaW1hdGUgQ29udGVudFxuICAgIC8vICAgY29udGVudFRMLmZyb21UbyhcbiAgICAvLyAgICAgYm90dG9tU21hbGwsXG4gICAgLy8gICAgIHsgZHJhd1NWRzogXCI1MCUgNTAlXCIgfSxcbiAgICAvLyAgICAgeyBkcmF3U1ZHOiBcIjAlIDEwMCVcIiB9LFxuICAgIC8vICAgICBcInNjcm9sbEluXCJcbiAgICAvLyAgICk7XG4gICAgLy8gICBjb250ZW50VEwuZnJvbVRvKFxuICAgIC8vICAgICBcIi52aWRlb0FyZWFcIixcbiAgICAvLyAgICAgeyBoZWlnaHQ6IDAgfSxcbiAgICAvLyAgICAgeyBoZWlnaHQ6IFwiYXV0b1wiIH0sXG4gICAgLy8gICAgIFwic2Nyb2xsSW4rPTAuMlwiXG4gICAgLy8gICApO1xuXG4gICAgLy8gICAvLyBBbmltYXRlIEFycm93XG4gICAgLy8gICBhcnJvd1RMLmZyb21UbyhcbiAgICAvLyAgICAgc2VjdGlvblRleHQsXG4gICAgLy8gICAgIHsgeTogLTYsIG9wYWNpdHk6IDAgfSxcbiAgICAvLyAgICAgeyB5OiAwLCBvcGFjaXR5OiAxIH0sXG4gICAgLy8gICAgIFwic2Nyb2xsSW5cIlxuICAgIC8vICAgKTtcbiAgICAvLyAgIGFycm93VEwuZnJvbVRvKFxuICAgIC8vICAgICBkb3duQXJyb3dMaW5lLFxuICAgIC8vICAgICB7IGRyYXdTVkc6IFwiMTAwJSAxMDAlXCIgfSxcbiAgICAvLyAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgIC8vICAgICBcInNjcm9sbEluKz0wLjAyNVwiXG4gICAgLy8gICApO1xuICAgIC8vICAgYXJyb3dUTC5mcm9tVG8oXG4gICAgLy8gICAgIGRvd25BcnJvd1BvaW50LFxuICAgIC8vICAgICB7IGRyYXdTVkc6IFwiNTAlIDUwJVwiIH0sXG4gICAgLy8gICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAvLyAgICAgXCJzY3JvbGxJbis9MC4xNzVcIlxuICAgIC8vICAgKTtcblxuICAgIC8vICAgLy8gQnVpbGQgTWFzdGVyIFRMIFRMXG4gICAgLy8gICB0bC5hZGQobGluZVRMLCBcInNjcm9sbEluQWxsXCIpO1xuICAgIC8vICAgdGwuZnJvbVRvKHRoaXNCYWNrLCB7IHk6IFwiLTEwMCVcIiB9LCB7IHk6IDAgfSwgXCJzY3JvbGxJbkFsbCs9MC41NVwiKTtcbiAgICAvLyAgIHRsLmFkZChjb250ZW50VEwsIFwic2Nyb2xsSW5BbGwrPTAuNzVcIik7XG4gICAgLy8gICB0bC5hZGQoYXJyb3dUTCwgXCJzY3JvbGxJbkFsbCs9MVwiKTtcblxuICAgIC8vICAgcmV0dXJuIHRsO1xuICAgIC8vIH0sXG5cbiAgICBzZWN0aW9uQW5pbTM6ICgpID0+IHtcbiAgICAgIGxldCB0aGlzU2VjID0gJChcIiNzZWN0aW9uNFwiKTtcbiAgICAgIGxldCB0aGlzQmFjayA9ICQoXCIjYmFja2dyb3VuZDRcIik7XG4gICAgICBsZXQgY2hhcnNIMiA9ICQodGhpc1NlYykuZmluZChcIi5oMkNoYXJzXCIpO1xuICAgICAgbGV0IGxpbmVzUCA9ICQodGhpc1NlYykuZmluZChcIi5wTGluZXNcIik7XG4gICAgICBsZXQgc29sb0NlbnRlcjIgPSAkKHRoaXNTZWMpLmZpbmQoXCIjc29sby1jZW50ZXItMlwiKTtcbiAgICAgIGxldCBzb2xvQ2VudGVyMSA9ICQodGhpc1NlYykuZmluZChcIiNzb2xvLWNlbnRlci0xXCIpO1xuICAgICAgbGV0IGJvdHRvbVNtYWxsID0gJCh0aGlzU2VjKS5maW5kKFwiI2JvdHRvbS1zbWFsbFwiKTtcbiAgICAgIC8vIEFycm93IFBpZWNlc1xuICAgICAgbGV0IGRvd25BcnJvdyA9ICQodGhpc1NlYykuZmluZChcIiNkb3duLWFycm93XCIpO1xuICAgICAgbGV0IGRvd25BcnJvd0xpbmUgPSAkKHRoaXNTZWMpLmZpbmQoXCIjZG93bi1hcnJvdy1saW5lXCIpO1xuICAgICAgbGV0IGRvd25BcnJvd1BvaW50ID0gJCh0aGlzU2VjKS5maW5kKFwiI2Rvd24tYXJyb3ctcG9pbnRcIik7XG4gICAgICBsZXQgc2VjdGlvblRleHQgPSAkKHRoaXNTZWMpLmZpbmQoXCIuZG93bi1hcnJvdy10ZXh0XCIpO1xuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHBhdXNlZDogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9LFxuICAgICAgICAvLyBSZWxlYXNlIFRoZSBTY3JvbGwgTG9ja1xuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZ3NhcC5zZXQoZG9jdW1lbnQuYm9keSwgeyBvdmVyZmxvdzogXCJhdXRvXCIgfSk7XG4gICAgICAgICAgLy8gZ3NhcC5zZXQoJyNiYWNrZ3JvdW5kMScsIHtvcGFjaXR5OjF9KTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgbGluZVRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246IDAuNixcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgY29udGVudFRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgICAgICBlYXNlOiBcImJhY2sub3V0KDEuNSlcIixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgYXJyb3dUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOiAwLjE1LFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9LFxuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gQm91bmNlIFRoZSBEb3duIEFycm93XG4gICAgICAgICAgZ3NhcFxuICAgICAgICAgICAgLnRpbWVsaW5lKHsgcmVwZWF0OiAtMSwgeW95bzogdHJ1ZSB9KVxuICAgICAgICAgICAgLnRvKGRvd25BcnJvdywgeyB5OiAtNCwgZHVyYXRpb246IDEsIGVhc2U6IFwibm9uZVwiIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvblJldmVyc2VDb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFN0b3AgQm91bmNpbiBUaGUgRG93biBBcnJvdyBhbmQgUmVzZXQgaXQncyBZIHBvc2l0aW9uXG4gICAgICAgICAgZ3NhcC5raWxsVHdlZW5zT2YoZG93bkFycm93KTtcbiAgICAgICAgICBnc2FwLnNldChkb3duQXJyb3csIHsgeTogMCB9KTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBTZXQgYmFja2dyb3VuZCB6LWluZGV4IGJ5IHNlY3Rpb24gbnVtYmVyIC8gU2VjdGlvbiAyIGhhcyBubyBiYWNrIC8gU2VjdGlvbiAzIGlzIHotaW5kZXggMTEwIHRvIHN0YXkgYWJvdmUgYWxsXG4gICAgICB0bC5zZXQodGhpc0JhY2ssIHsgekluZGV4OiAxMDQgfSk7XG4gICAgICAvLyBTZXQgc2VjdGlvbiB6LWluZGV4IGJ5IHNlY3Rpb24gbnVtYmVyXG4gICAgICB0bC5mcm9tVG8odGhpc1NlYywgeyB6SW5kZXg6IDEzIH0sIHsgekluZGV4OiAxMDA0IH0pO1xuXG4gICAgICAvLyBBbmltYXRlIExpbmVzXG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBzb2xvQ2VudGVyMSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjUwJSA1MCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIHNvbG9DZW50ZXIyLFxuICAgICAgICB7IGRyYXdTVkc6IFwiNTAlIDUwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgYm90dG9tU21hbGwsXG4gICAgICAgIHsgZHJhd1NWRzogXCI1MCUgNTAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjAlIDEwMCVcIiwgZHVyYXRpb246IDAuNSB9LFxuICAgICAgICBcInNjcm9sbEluKz0wLjNcIlxuICAgICAgKTtcblxuICAgICAgLy8gQW5pbWF0ZSBDb250ZW50XG4gICAgICBjb250ZW50VEwuZnJvbVRvKFxuICAgICAgICBjaGFyc0gyLFxuICAgICAgICB7IHg6IC0yMCwgb3BhY2l0eTogMCB9LFxuICAgICAgICB7IHg6IDAsIG9wYWNpdHk6IDEsIHN0YWdnZXI6IHsgYW1vdW50OiAwLjMsIGZyb206IFwicmFuZG9tXCIgfSB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBjb250ZW50VEwuZnJvbVRvKFxuICAgICAgICBsaW5lc1AsXG4gICAgICAgIHsgb3BhY2l0eTogMCwgeDogLTQwIH0sXG4gICAgICAgIHsgb3BhY2l0eTogMSwgeDogMCwgc3RhZ2dlcjogeyBhbW91bnQ6IDAuMyB9IH0sXG4gICAgICAgIFwic2Nyb2xsSW4rPTAuMVwiXG4gICAgICApO1xuXG4gICAgICAvLyBBbmltYXRlIEFycm93XG4gICAgICBhcnJvd1RMLmZyb21UbyhcbiAgICAgICAgc2VjdGlvblRleHQsXG4gICAgICAgIHsgeTogLTYsIG9wYWNpdHk6IDAgfSxcbiAgICAgICAgeyB5OiAwLCBvcGFjaXR5OiAxIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGFycm93VEwuZnJvbVRvKFxuICAgICAgICBkb3duQXJyb3dMaW5lLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAxMDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluKz0wLjAyNVwiXG4gICAgICApO1xuICAgICAgYXJyb3dUTC5mcm9tVG8oXG4gICAgICAgIGRvd25BcnJvd1BvaW50LFxuICAgICAgICB7IGRyYXdTVkc6IFwiNTAlIDUwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJbis9MC4xNzVcIlxuICAgICAgKTtcblxuICAgICAgLy8gQnVpbGQgTWFzdGVyIFRMVExcbiAgICAgIHRsLmZyb21Ubyh0aGlzQmFjaywgeyBvcGFjaXR5OiAwIH0sIHsgb3BhY2l0eTogMSB9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuYWRkKGxpbmVUTCwgXCJzY3JvbGxJbkFsbCs9MC45XCIpO1xuICAgICAgdGwuYWRkKGNvbnRlbnRUTCwgXCJzY3JvbGxJbkFsbCs9MS41XCIpO1xuICAgICAgdGwuYWRkKGFycm93VEwsIFwic2Nyb2xsSW5BbGwrPTEuNVwiKTtcblxuICAgICAgcmV0dXJuIHRsO1xuICAgIH0sXG5cbiAgICBzZWN0aW9uQW5pbTQ6ICgpID0+IHtcbiAgICAgIGxldCB0aGlzU2VjID0gJChcIiNzZWN0aW9uNVwiKTtcbiAgICAgIGxldCB0aGlzQmFjayA9ICQoXCIjYmFja2dyb3VuZDVcIik7XG4gICAgICBsZXQgdGhpc092ZXJsYXkgPSAkKFwiI292ZXJsYXk1XCIpO1xuICAgICAgbGV0IGNoYXJzSDIgPSAkKHRoaXNTZWMpLmZpbmQoXCIuaDJDaGFyc1wiKTtcbiAgICAgIGxldCBsaW5lc1AgPSAkKHRoaXNTZWMpLmZpbmQoXCIucExpbmVzXCIpO1xuICAgICAgbGV0IGNlbnRlcjRMID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci00TFwiKTtcbiAgICAgIGxldCBjZW50ZXI0UiA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItNFJcIik7XG4gICAgICBsZXQgY2VudGVyM0wgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTNMXCIpO1xuICAgICAgbGV0IGNlbnRlcjNSID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci0zUlwiKTtcbiAgICAgIGxldCBjZW50ZXIyTCA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItMkxcIik7XG4gICAgICBsZXQgY2VudGVyMlIgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTJSXCIpO1xuICAgICAgLy8gQXJyb3cgUGllY2VzXG4gICAgICBsZXQgZG93bkFycm93ID0gJCh0aGlzU2VjKS5maW5kKFwiI2Rvd24tYXJyb3dcIik7XG4gICAgICBsZXQgZG93bkFycm93TGluZSA9ICQodGhpc1NlYykuZmluZChcIiNkb3duLWFycm93LWxpbmVcIik7XG4gICAgICBsZXQgZG93bkFycm93UG9pbnQgPSAkKHRoaXNTZWMpLmZpbmQoXCIjZG93bi1hcnJvdy1wb2ludFwiKTtcbiAgICAgIGxldCBzZWN0aW9uVGV4dCA9ICQodGhpc1NlYykuZmluZChcIi5kb3duLWFycm93LXRleHRcIik7XG4gICAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgcGF1c2VkOiB0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIFJlbGVhc2UgVGhlIFNjcm9sbCBMb2NrXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBnc2FwLnNldChkb2N1bWVudC5ib2R5LCB7IG92ZXJmbG93OiBcImF1dG9cIiB9KTtcbiAgICAgICAgICAvLyBnc2FwLnNldCgnI2JhY2tncm91bmQxJywge29wYWNpdHk6MH0pO1xuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGxldCBsaW5lVEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMC42LFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGxldCBjb250ZW50VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgICAgIGVhc2U6IFwiYmFjay5vdXQoMS41KVwiLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGxldCBhcnJvd1RMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246IDAuMTUsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBCb3VuY2UgVGhlIERvd24gQXJyb3dcbiAgICAgICAgICBnc2FwXG4gICAgICAgICAgICAudGltZWxpbmUoeyByZXBlYXQ6IC0xLCB5b3lvOiB0cnVlIH0pXG4gICAgICAgICAgICAudG8oZG93bkFycm93LCB7IHk6IC00LCBkdXJhdGlvbjogMSwgZWFzZTogXCJub25lXCIgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmV2ZXJzZUNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gU3RvcCBCb3VuY2luIFRoZSBEb3duIEFycm93IGFuZCBSZXNldCBpdCdzIFkgcG9zaXRpb25cbiAgICAgICAgICBnc2FwLmtpbGxUd2VlbnNPZihkb3duQXJyb3cpO1xuICAgICAgICAgIGdzYXAuc2V0KGRvd25BcnJvdywgeyB5OiAwIH0pO1xuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIFNldCBiYWNrZ3JvdW5kIHotaW5kZXggYnkgc2VjdGlvbiBudW1iZXIgLyBTZWN0aW9uIDIgaGFzIG5vIGJhY2sgLyBTZWN0aW9uIDMgaXMgei1pbmRleCAxMTAgdG8gc3RheSBhYm92ZSBhbGxcbiAgICAgIHRsLnNldCh0aGlzQmFjaywgeyB6SW5kZXg6IDEwNSB9KTtcbiAgICAgIHRsLnNldCh0aGlzT3ZlcmxheSwgeyB6SW5kZXg6IDEwNSB9KTtcbiAgICAgIC8vIFNldCBzZWN0aW9uIHotaW5kZXggYnkgc2VjdGlvbiBudW1iZXJcbiAgICAgIHRsLmZyb21Ubyh0aGlzU2VjLCB7IHpJbmRleDogMTMgfSwgeyB6SW5kZXg6IDEwMDUgfSk7XG5cbiAgICAgIC8vIEFuaW1hdGUgTGluZXNcbiAgICAgIC8vIGxpbmVUTC5mcm9tVG8oY2VudGVyNEwsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICAvLyBsaW5lVEwuZnJvbVRvKGNlbnRlcjRSLCB7ZHJhd1NWRzpcIjAlIDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICAvLyBsaW5lVEwuZnJvbVRvKGNlbnRlcjNMLCB7ZHJhd1NWRzpcIjEwMCUgMTAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgLy8gbGluZVRMLmZyb21UbyhjZW50ZXIzUiwge2RyYXdTVkc6XCIwJSAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgLy8gbGluZVRMLmZyb21UbyhjZW50ZXIyTCwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIC8vIGxpbmVUTC5mcm9tVG8oY2VudGVyMlIsIHtkcmF3U1ZHOlwiMCUgMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcblxuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyNEwsXG4gICAgICAgIHsgZHJhd1NWRzogXCIwJSAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyNFIsXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDEwMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGNlbnRlcjNMLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMCUgMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGNlbnRlcjNSLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAxMDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBjZW50ZXIyTCxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjAlIDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBjZW50ZXIyUixcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMTAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgXCIjaG9uZXlDbGlwRW5kXCIsXG4gICAgICAgIHsgbW9ycGhTVkc6IHsgc2hhcGU6IFwiI2hvbmV5Q2xpcFN0YXJ0XCIgfSB9LFxuICAgICAgICB7XG4gICAgICAgICAgbW9ycGhTVkc6IHsgc2hhcGU6IFwiI2hvbmV5Q2xpcEVuZFwiIH0sXG4gICAgICAgICAgZHVyYXRpb246IDAuNCxcbiAgICAgICAgICBlYXNlOiBcInNpbmUub3V0XCIsXG4gICAgICAgIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcblxuICAgICAgLy8gQW5pbWF0ZSBDb250ZW50XG4gICAgICBjb250ZW50VEwuZnJvbVRvKFxuICAgICAgICBjaGFyc0gyLFxuICAgICAgICB7IHg6IC0yMCwgb3BhY2l0eTogMCB9LFxuICAgICAgICB7IHg6IDAsIG9wYWNpdHk6IDEsIHN0YWdnZXI6IHsgYW1vdW50OiAwLjMsIGZyb206IFwicmFuZG9tXCIgfSB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBjb250ZW50VEwuZnJvbVRvKFxuICAgICAgICBsaW5lc1AsXG4gICAgICAgIHsgb3BhY2l0eTogMCwgeDogLTQwIH0sXG4gICAgICAgIHsgb3BhY2l0eTogMSwgeDogMCwgc3RhZ2dlcjogeyBhbW91bnQ6IDAuMyB9IH0sXG4gICAgICAgIFwic2Nyb2xsSW4rPTAuMVwiXG4gICAgICApO1xuXG4gICAgICAvLyBBbmltYXRlIEFycm93XG4gICAgICBhcnJvd1RMLmZyb21UbyhcbiAgICAgICAgXCIjYm90dG9tLXNtYWxsLTJcIixcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjUwJSA1MCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMCUgMTAwJVwiLCBkdXJhdGlvbjogMC4zLCBlYXNlOiBcInNpbmUub3V0XCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgYXJyb3dUTC5mcm9tVG8oXG4gICAgICAgIHNlY3Rpb25UZXh0LFxuICAgICAgICB7IHk6IC02LCBvcGFjaXR5OiAwIH0sXG4gICAgICAgIHsgeTogMCwgb3BhY2l0eTogMSB9LFxuICAgICAgICBcInNjcm9sbEluKz0wLjFcIlxuICAgICAgKTtcbiAgICAgIGFycm93VEwuZnJvbVRvKFxuICAgICAgICBkb3duQXJyb3dMaW5lLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAxMDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluKz0wLjEyNVwiXG4gICAgICApO1xuICAgICAgYXJyb3dUTC5mcm9tVG8oXG4gICAgICAgIGRvd25BcnJvd1BvaW50LFxuICAgICAgICB7IGRyYXdTVkc6IFwiNTAlIDUwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJbis9MC4yNzVcIlxuICAgICAgKTtcblxuICAgICAgLy8gQnVpbGQgTWFzdGVyIFRMVExcbiAgICAgIHRsLmZyb21UbyhcbiAgICAgICAgdGhpc092ZXJsYXksXG4gICAgICAgIHsgb3BhY2l0eTogMCB9LFxuICAgICAgICB7IG9wYWNpdHk6IDAuOSB9LFxuICAgICAgICBcInNjcm9sbEluQWxsKz0wLjhcIlxuICAgICAgKTtcbiAgICAgIHRsLmZyb21UbyhcbiAgICAgICAgdGhpc0JhY2ssXG4gICAgICAgIHsgb3BhY2l0eTogMCB9LFxuICAgICAgICB7IG9wYWNpdHk6IDEsIGR1cmF0aW9uOiAxIH0sXG4gICAgICAgIFwic2Nyb2xsSW5BbGxcIlxuICAgICAgKTtcbiAgICAgIHRsLmFkZChsaW5lVEwsIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5hZGQoY29udGVudFRMLCBcInNjcm9sbEluQWxsKz0xXCIpO1xuICAgICAgdGwuYWRkKGFycm93VEwsIFwic2Nyb2xsSW5BbGwrPTFcIik7XG5cbiAgICAgIHJldHVybiB0bDtcbiAgICB9LFxuXG4gICAgc2VjdGlvbkFuaW01OiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9ICQoXCIjc2VjdGlvbjZcIik7XG4gICAgICBsZXQgdGhpc0JhY2sgPSAkKFwiI2JhY2tncm91bmQ2XCIpO1xuICAgICAgbGV0IGNoYXJzSDIgPSAkKHRoaXNTZWMpLmZpbmQoXCIuaDJDaGFyc1wiKTtcbiAgICAgIGxldCBsaW5lc1AgPSAkKHRoaXNTZWMpLmZpbmQoXCIucExpbmVzXCIpO1xuICAgICAgbGV0IHRoaXNPdmVybGF5ID0gJChcIiNvdmVybGF5NlwiKTtcbiAgICAgIGxldCBjZW50ZXI0TCA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItNExcIik7XG4gICAgICBsZXQgY2VudGVyNFIgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTRSXCIpO1xuICAgICAgbGV0IGNlbnRlcjNMID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci0zTFwiKTtcbiAgICAgIGxldCBjZW50ZXIzUiA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItM1JcIik7XG4gICAgICBsZXQgY2VudGVyMkwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTJMXCIpO1xuICAgICAgbGV0IGNlbnRlcjJSID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci0yUlwiKTtcbiAgICAgIGxldCBib3R0b21TbWFsbCA9ICQodGhpc1NlYykuZmluZChcIiNib3R0b20tc21hbGxcIik7XG4gICAgICAvLyBBcnJvdyBQaWVjZXNcbiAgICAgIGxldCBkb3duQXJyb3cgPSAkKHRoaXNTZWMpLmZpbmQoXCIjZG93bi1hcnJvd1wiKTtcbiAgICAgIGxldCBkb3duQXJyb3dMaW5lID0gJCh0aGlzU2VjKS5maW5kKFwiI2Rvd24tYXJyb3ctbGluZVwiKTtcbiAgICAgIGxldCBkb3duQXJyb3dQb2ludCA9ICQodGhpc1NlYykuZmluZChcIiNkb3duLWFycm93LXBvaW50XCIpO1xuICAgICAgbGV0IHNlY3Rpb25UZXh0ID0gJCh0aGlzU2VjKS5maW5kKFwiLmRvd24tYXJyb3ctdGV4dFwiKTtcbiAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBwYXVzZWQ6IHRydWUsXG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246IDAuNSxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgLy8gUmVsZWFzZSBUaGUgU2Nyb2xsIExvY2tcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGdzYXAuc2V0KGRvY3VtZW50LmJvZHksIHsgb3ZlcmZsb3c6IFwiYXV0b1wiIH0pO1xuICAgICAgICAgIC8vIGdzYXAuc2V0KCcjYmFja2dyb3VuZDEnLCB7b3BhY2l0eTowfSk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgbGV0IGxpbmVUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOiAwLjgsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgbGV0IGNvbnRlbnRUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICAgICAgZWFzZTogXCJiYWNrLm91dCgxLjUpXCIsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgbGV0IGFycm93VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMC4xNSxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIEJvdW5jZSBUaGUgRG93biBBcnJvd1xuICAgICAgICAgIGdzYXBcbiAgICAgICAgICAgIC50aW1lbGluZSh7IHJlcGVhdDogLTEsIHlveW86IHRydWUgfSlcbiAgICAgICAgICAgIC50byhkb3duQXJyb3csIHsgeTogLTQsIGR1cmF0aW9uOiAxLCBlYXNlOiBcIm5vbmVcIiB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25SZXZlcnNlQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBTdG9wIEJvdW5jaW4gVGhlIERvd24gQXJyb3cgYW5kIFJlc2V0IGl0J3MgWSBwb3NpdGlvblxuICAgICAgICAgIGdzYXAua2lsbFR3ZWVuc09mKGRvd25BcnJvdyk7XG4gICAgICAgICAgZ3NhcC5zZXQoZG93bkFycm93LCB7IHk6IDAgfSk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgLy8gU2V0IGJhY2tncm91bmQgei1pbmRleCBieSBzZWN0aW9uIG51bWJlciAvIFNlY3Rpb24gMiBoYXMgbm8gYmFjayAvIFNlY3Rpb24gMyBpcyB6LWluZGV4IDExMCB0byBzdGF5IGFib3ZlIGFsbFxuICAgICAgdGwuc2V0KHRoaXNCYWNrLCB7IHpJbmRleDogMTA2IH0pO1xuICAgICAgdGwuc2V0KHRoaXNPdmVybGF5LCB7IHpJbmRleDogMTA2IH0pO1xuICAgICAgLy8gU2V0IHNlY3Rpb24gei1pbmRleCBieSBzZWN0aW9uIG51bWJlclxuICAgICAgdGwuZnJvbVRvKHRoaXNTZWMsIHsgekluZGV4OiAxMyB9LCB7IHpJbmRleDogMTAwNiB9KTtcblxuICAgICAgLy8gQW5pbWF0ZSBMaW5lc1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyNEwsXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDEwMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGNlbnRlcjRSLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMCUgMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGNlbnRlcjNMLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAxMDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBjZW50ZXIzUixcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjAlIDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBjZW50ZXIyTCxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMTAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyMlIsXG4gICAgICAgIHsgZHJhd1NWRzogXCIwJSAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuXG4gICAgICAvLyBBbmltYXRlIENvbnRlbnRcbiAgICAgIGNvbnRlbnRUTC5mcm9tVG8oXG4gICAgICAgIGNoYXJzSDIsXG4gICAgICAgIHsgeDogLTIwLCBvcGFjaXR5OiAwIH0sXG4gICAgICAgIHsgeDogMCwgb3BhY2l0eTogMSwgc3RhZ2dlcjogeyBhbW91bnQ6IDAuMywgZnJvbTogXCJyYW5kb21cIiB9IH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGNvbnRlbnRUTC5mcm9tVG8oXG4gICAgICAgIGxpbmVzUCxcbiAgICAgICAgeyBvcGFjaXR5OiAwLCB4OiAtNDAgfSxcbiAgICAgICAgeyBvcGFjaXR5OiAxLCB4OiAwLCBzdGFnZ2VyOiB7IGFtb3VudDogMC4zIH0gfSxcbiAgICAgICAgXCJzY3JvbGxJbis9MC4xXCJcbiAgICAgICk7XG5cbiAgICAgIC8vIEFuaW1hdGUgQXJyb3dcbiAgICAgIGFycm93VEwuZnJvbVRvKFxuICAgICAgICBib3R0b21TbWFsbCxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjUwJSA1MCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMCUgMTAwJVwiLCBkdXJhdGlvbjogMC40IH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGFycm93VEwuZnJvbVRvKFxuICAgICAgICBzZWN0aW9uVGV4dCxcbiAgICAgICAgeyB5OiAtNiwgb3BhY2l0eTogMCB9LFxuICAgICAgICB7IHk6IDAsIG9wYWNpdHk6IDEgfSxcbiAgICAgICAgXCJzY3JvbGxJbis9MC4xNVwiXG4gICAgICApO1xuICAgICAgYXJyb3dUTC5mcm9tVG8oXG4gICAgICAgIGRvd25BcnJvd0xpbmUsXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDEwMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW4rPTAuMTc1XCJcbiAgICAgICk7XG4gICAgICBhcnJvd1RMLmZyb21UbyhcbiAgICAgICAgZG93bkFycm93UG9pbnQsXG4gICAgICAgIHsgZHJhd1NWRzogXCI1MCUgNTAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluKz0wLjMyNVwiXG4gICAgICApO1xuXG4gICAgICAvLyBCdWlsZCBNYXN0ZXIgVExUTFxuICAgICAgdGwuZnJvbVRvKHRoaXNPdmVybGF5LCB7IG9wYWNpdHk6IDAgfSwgeyBvcGFjaXR5OiAwLjEgfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21Ubyh0aGlzQmFjaywgeyBvcGFjaXR5OiAwIH0sIHsgb3BhY2l0eTogMSB9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuYWRkKGxpbmVUTCwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmFkZChjb250ZW50VEwsIFwic2Nyb2xsSW5BbGwrPTAuNlwiKTtcbiAgICAgIHRsLmFkZChhcnJvd1RMLCBcInNjcm9sbEluQWxsKz0wLjhcIik7XG5cbiAgICAgIHJldHVybiB0bDtcbiAgICB9LFxuXG4gICAgc2VjdGlvbkFuaW02OiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9ICQoXCIjc2VjdGlvbjdcIik7XG4gICAgICBsZXQgdGhpc0JhY2sgPSAkKFwiI2JhY2tncm91bmQ3XCIpO1xuICAgICAgbGV0IGNoYXJzSDIgPSAkKHRoaXNTZWMpLmZpbmQoXCIuaDJDaGFyc1wiKTtcbiAgICAgIGxldCBsaW5lc1AgPSAkKHRoaXNTZWMpLmZpbmQoXCIucExpbmVzXCIpO1xuICAgICAgbGV0IHRoaXNPdmVybGF5ID0gJChcIiNvdmVybGF5N1wiKTtcbiAgICAgIGxldCBjZW50ZXI0TCA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItNExcIik7XG4gICAgICBsZXQgY2VudGVyNFIgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTRSXCIpO1xuICAgICAgbGV0IGNlbnRlcjNMID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci0zTFwiKTtcbiAgICAgIGxldCBjZW50ZXIzUiA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItM1JcIik7XG4gICAgICBsZXQgY2VudGVyMkwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTJMXCIpO1xuICAgICAgbGV0IGNlbnRlcjJSID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci0yUlwiKTtcbiAgICAgIGxldCB0b3BTbWFsbCA9ICQodGhpc1NlYykuZmluZChcIiN0b3Atc21hbGxcIik7XG4gICAgICBsZXQgYm90dG9tU21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjYm90dG9tLXNtYWxsXCIpO1xuICAgICAgbGV0IGNlbnRlclNtYWxsID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci1zbWFsbFwiKTtcbiAgICAgIGxldCB0b3BMZWZ0U21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjdG9wLWxlZnQtc21hbGxcIik7XG4gICAgICBsZXQgdG9wUmlnaHR0U21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjdG9wLXJpZ2h0LXNtYWxsXCIpO1xuICAgICAgbGV0IGJvdHRvbUxlZnRTbWFsbCA9ICQodGhpc1NlYykuZmluZChcIiNib3R0b20tbGVmdC1zbWFsbFwiKTtcbiAgICAgIGxldCBib3R0b21SaWdodHRTbWFsbCA9ICQodGhpc1NlYykuZmluZChcIiNib3R0b20tcmlnaHQtc21hbGxcIik7XG4gICAgICBsZXQgaW1nQ29udGFpbmVyID0gJCh0aGlzU2VjKS5maW5kKFwiLmltYWdlQ29udGFpbmVyXCIpO1xuICAgICAgbGV0IHN1YkltZyA9ICQoaW1nQ29udGFpbmVyKS5maW5kKFwiaW1nXCIpO1xuICAgICAgLy8gQXJyb3cgUGllY2VzXG4gICAgICBsZXQgZG93bkFycm93ID0gJCh0aGlzU2VjKS5maW5kKFwiI2Rvd24tYXJyb3dcIik7XG4gICAgICBsZXQgZG93bkFycm93TGluZSA9ICQodGhpc1NlYykuZmluZChcIiNkb3duLWFycm93LWxpbmVcIik7XG4gICAgICBsZXQgZG93bkFycm93UG9pbnQgPSAkKHRoaXNTZWMpLmZpbmQoXCIjZG93bi1hcnJvdy1wb2ludFwiKTtcbiAgICAgIGxldCBzZWN0aW9uVGV4dCA9ICQodGhpc1NlYykuZmluZChcIi5kb3duLWFycm93LXRleHRcIik7XG4gICAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgcGF1c2VkOiB0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOiAwLjYsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIFJlbGVhc2UgVGhlIFNjcm9sbCBMb2NrXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBnc2FwLnNldChkb2N1bWVudC5ib2R5LCB7IG92ZXJmbG93OiBcImF1dG9cIiB9KTtcbiAgICAgICAgICAvLyBnc2FwLnNldCgnI2JhY2tncm91bmQxJywge29wYWNpdHk6MX0pO1xuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGxldCBsaW5lVEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMC44LFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGxldCBjb250ZW50VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgICAgIGVhc2U6IFwiYmFjay5vdXQoMS41KVwiLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIGxldCBhcnJvd1RMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAvLyAgIGRlZmF1bHRzOiB7XG4gICAgICAvLyAgICAgZHVyYXRpb246MC4xNSxcbiAgICAgIC8vICAgICBlYXNlOlwibm9uZVwiXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAvLyAgICAgLy8gQm91bmNlIFRoZSBEb3duIEFycm93XG4gICAgICAvLyAgICAgZ3NhcC50aW1lbGluZSh7cmVwZWF0Oi0xLCB5b3lvOnRydWV9KS50byhkb3duQXJyb3csIHt5Oi00LCBkdXJhdGlvbjoxLCBlYXNlOlwibm9uZVwifSk7XG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIG9uUmV2ZXJzZUNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgLy8gICAgIC8vIFN0b3AgQm91bmNpbiBUaGUgRG93biBBcnJvdyBhbmQgUmVzZXQgaXQncyBZIHBvc2l0aW9uXG4gICAgICAvLyAgICAgZ3NhcC5raWxsVHdlZW5zT2YoZG93bkFycm93KTtcbiAgICAgIC8vICAgICBnc2FwLnNldChkb3duQXJyb3csIHt5OjB9KTtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSk7XG5cbiAgICAgIC8vIFNldCBiYWNrZ3JvdW5kIHotaW5kZXggYnkgc2VjdGlvbiBudW1iZXIgLyBTZWN0aW9uIDIgaGFzIG5vIGJhY2sgLyBTZWN0aW9uIDMgaXMgei1pbmRleCAxMTAgdG8gc3RheSBhYm92ZSBhbGxcbiAgICAgIHRsLnNldCh0aGlzQmFjaywgeyB6SW5kZXg6IDEwNyB9KTtcbiAgICAgIHRsLnNldCh0aGlzT3ZlcmxheSwgeyB6SW5kZXg6IDEwNyB9KTtcbiAgICAgIC8vIFNldCBzZWN0aW9uIHotaW5kZXggYnkgc2VjdGlvbiBudW1iZXJcbiAgICAgIHRsLmZyb21Ubyh0aGlzU2VjLCB7IHpJbmRleDogMTMgfSwgeyB6SW5kZXg6IDEwMDcgfSk7XG5cbiAgICAgIC8vIEFuaW1hdGUgTGluZXNcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGNlbnRlcjRMLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMCUgMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGNlbnRlcjRSLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAxMDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBjZW50ZXIzTCxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjAlIDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBjZW50ZXIzUixcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMTAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyMkwsXG4gICAgICAgIHsgZHJhd1NWRzogXCIwJSAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyMlIsXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDEwMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIFt0b3BTbWFsbCwgYm90dG9tU21hbGwsIGNlbnRlclNtYWxsXSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjUwJSA1MCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIFt0b3BMZWZ0U21hbGwsIGJvdHRvbUxlZnRTbWFsbF0sXG4gICAgICAgIHsgZHJhd1NWRzogXCI1MCUgNTAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBbdG9wUmlnaHR0U21hbGwsIGJvdHRvbVJpZ2h0dFNtYWxsXSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjUwJSA1MCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcblxuICAgICAgLy8gQW5pbWF0ZSBDb250ZW50XG4gICAgICBjb250ZW50VEwuZnJvbVRvKFxuICAgICAgICBjaGFyc0gyLFxuICAgICAgICB7IHg6IC0yMCwgb3BhY2l0eTogMCB9LFxuICAgICAgICB7IHg6IDAsIG9wYWNpdHk6IDEsIHN0YWdnZXI6IHsgYW1vdW50OiAwLjMsIGZyb206IFwicmFuZG9tXCIgfSB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBjb250ZW50VEwuZnJvbVRvKFxuICAgICAgICBsaW5lc1AsXG4gICAgICAgIHsgb3BhY2l0eTogMCwgeDogLTQwIH0sXG4gICAgICAgIHsgb3BhY2l0eTogMSwgeDogMCwgc3RhZ2dlcjogeyBhbW91bnQ6IDAuMyB9IH0sXG4gICAgICAgIFwic2Nyb2xsSW4rPTAuMVwiXG4gICAgICApO1xuICAgICAgY29udGVudFRMLmZyb21UbyhcbiAgICAgICAgXCIudGV4dEltYWdlXCIsXG4gICAgICAgIHsgb3BhY2l0eTogMCwgeDogLTQwIH0sXG4gICAgICAgIHsgb3BhY2l0eTogMSwgeDogMCB9LFxuICAgICAgICBcInNjcm9sbEluKz0wLjFcIlxuICAgICAgKTtcbiAgICAgIGNvbnRlbnRUTC5mcm9tVG8oXG4gICAgICAgIFwiI3BhcnRuZXJDbGlwRW5kXCIsXG4gICAgICAgIHsgbW9ycGhTVkc6IHsgc2hhcGU6IFwiI3BhcnRuZXJDbGlwU3RhcnRcIiB9IH0sXG4gICAgICAgIHtcbiAgICAgICAgICBtb3JwaFNWRzogeyBzaGFwZTogXCIjcGFydG5lckNsaXBFbmRcIiB9LFxuICAgICAgICAgIGR1cmF0aW9uOiAwLjQsXG4gICAgICAgICAgZWFzZTogXCJzaW5lLm91dFwiLFxuICAgICAgICB9LFxuICAgICAgICBcInNjcm9sbEluKz0wLjJcIlxuICAgICAgKTtcblxuICAgICAgLy8gLy8gQW5pbWF0ZSBBcnJvd1xuICAgICAgLy8gYXJyb3dUTC5mcm9tVG8oc2VjdGlvblRleHQsIHt5Oi02LCBvcGFjaXR5OjB9LCB7eTowLCBvcGFjaXR5OjF9LCBcInNjcm9sbEluXCIpO1xuICAgICAgLy8gYXJyb3dUTC5mcm9tVG8oZG93bkFycm93TGluZSwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJbis9MC4wMjVcIik7XG4gICAgICAvLyBhcnJvd1RMLmZyb21Ubyhkb3duQXJyb3dQb2ludCwge2RyYXdTVkc6XCI1MCUgNTAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW4rPTAuMTc1XCIpO1xuXG4gICAgICAvLyBCdWlsZCBNYXN0ZXIgVExUTFxuICAgICAgdGwuZnJvbVRvKHRoaXNPdmVybGF5LCB7IG9wYWNpdHk6IDAgfSwgeyBvcGFjaXR5OiAwLjkgfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21Ubyh0aGlzQmFjaywgeyBvcGFjaXR5OiAwIH0sIHsgb3BhY2l0eTogMSB9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuYWRkKGxpbmVUTCwgXCJzY3JvbGxJbkFsbCs9MC4yXCIpO1xuICAgICAgdGwuYWRkKGNvbnRlbnRUTCwgXCJzY3JvbGxJbkFsbCs9MC42XCIpO1xuICAgICAgdGwuZnJvbVRvKFxuICAgICAgICBcIi5mb290ZXJBcmVhXCIsXG4gICAgICAgIHsgeTogXCIxMDAlXCIgfSxcbiAgICAgICAgeyB5OiAwLCBkdXJhdGlvbjogMC43LCBlYXNlOiBcImJhY2sub3V0KDAuNSlcIiB9LFxuICAgICAgICBcInNjcm9sbEluQWxsKz0wLjdcIlxuICAgICAgKTtcbiAgICAgIC8vIHRsLmFkZChhcnJvd1RMLCBcInNjcm9sbEluQWxsKz0wLjhcIik7XG5cbiAgICAgIHJldHVybiB0bDtcbiAgICB9LFxuXG4gICAgLy8gc2VjdGlvbkFuaW04OiAoKSA9PiB7XG4gICAgLy8gICBsZXQgdGhpc1NlYyA9ICQoJyNzZWN0aW9uOCcpO1xuICAgIC8vICAgbGV0IHRoaXNCYWNrID0gJCgnI2JhY2tncm91bmQ4Jyk7XG4gICAgLy8gICBsZXQgY2hhcnNIMiA9ICQodGhpc1NlYykuZmluZCgnLmgyQ2hhcnMnKTtcbiAgICAvLyAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIC8vICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAvLyAgICAgZGVmYXVsdHM6IHtcbiAgICAvLyAgICAgICBkdXJhdGlvbjowLjMsXG4gICAgLy8gICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIC8vIFJlbGVhc2UgVGhlIFNjcm9sbCBMb2NrXG4gICAgLy8gICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgLy8gICAgICAgZ3NhcC5zZXQoZG9jdW1lbnQuYm9keSwge292ZXJmbG93OiBcImF1dG9cIn0pXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0pO1xuXG4gICAgLy8gICBsZXQgY29udGVudFRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgLy8gICAgIGRlZmF1bHRzOiB7XG4gICAgLy8gICAgICAgZHVyYXRpb246MC4zLFxuICAgIC8vICAgICAgIGVhc2U6XCJiYWNrLm91dCgxLjUpXCJcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSk7XG5cbiAgICAvLyAgIC8vIFNldCBiYWNrZ3JvdW5kIHotaW5kZXggYnkgc2VjdGlvbiBudW1iZXIgLyBTZWN0aW9uIDIgaGFzIG5vIGJhY2sgLyBTZWN0aW9uIDMgaXMgei1pbmRleCAxMTAgdG8gc3RheSBhYm92ZSBhbGxcbiAgICAvLyAgIHRsLnNldCh0aGlzQmFjaywge3pJbmRleDoxMDh9KTtcbiAgICAvLyAgIC8vIFNldCBzZWN0aW9uIHotaW5kZXggYnkgc2VjdGlvbiBudW1iZXJcbiAgICAvLyAgIHRsLmZyb21Ubyh0aGlzU2VjLCB7ekluZGV4OjEzfSx7ekluZGV4OjEwMDh9KTtcblxuICAgIC8vICAgLy8gQW5pbWF0ZSBDb250ZW50XG4gICAgLy8gICBjb250ZW50VEwuZnJvbVRvKGNoYXJzSDIsXG4gICAgLy8gICAgIHt4Oi0yMCwgb3BhY2l0eTowfSxcbiAgICAvLyAgICAge3g6MCwgb3BhY2l0eTogMSwgc3RhZ2dlcjp7YW1vdW50OjAuMywgZnJvbTpcInJhbmRvbVwifX0sXG4gICAgLy8gICBcInNjcm9sbEluXCIpO1xuICAgIC8vICAgY29udGVudFRMLmZyb21UbygnLnNpbmdsZUltYWdlRG93bmxvYWQnLHtcbiAgICAvLyAgICAgb3BhY2l0eTowLCB5Oi0yMH0sXG4gICAgLy8gICAgIHtvcGFjaXR5OjEseTowLCBzdGFnZ2VyOnthbW91bnQ6MC4zfX0sXG4gICAgLy8gICBcInNjcm9sbEluKz0wLjJcIik7XG5cbiAgICAvLyAgIC8vIEJ1aWxkIE1hc3RlciBUTFRMXG4gICAgLy8gICB0bC5mcm9tVG8odGhpc0JhY2ssIHt0b3A6Jy0xMDAlJ30se3RvcDowfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAvLyAgIHRsLmZyb21UbygnLmZvb3RlckFyZWEnLCB7eTonMTAwJSd9LCB7eTowLCBkdXJhdGlvbjowLjUsIGVhc2U6J2JhY2sub3V0KDAuNSknfSwgXCJzY3JvbGxJbkFsbCs9MC41XCIpO1xuICAgIC8vICAgdGwuYWRkKGNvbnRlbnRUTCwgXCJzY3JvbGxJbkFsbCs9MC4zXCIpO1xuXG4gICAgLy8gICByZXR1cm4gdGw7XG4gICAgLy8gfSxcbiAgfTtcblxuICAvLyBQbGF5IFNlY3Rpb24gMSBhdXRvbWF0aWNhbGx5XG4gIHNlY3Rpb25BbmltW1wic2VjdGlvbkFuaW0xXCJdKCkucGxheSgpO1xuXG4gIC8vIEZpcmUgQW4gQW5pbWF0aW9uIEZyb20gQWJvdmUgZm9yIEVhY2ggU2VjdGlvblxuICBsZXQgc2VjdGlvblRyaWcgPSAobXlDb3VudCkgPT4ge1xuICAgIC8vIEFkZCBBbiBFeHRyYSBTY3JvbGwgZm9yIEJ1enogT24gQmVlcyBpbiBTZWN0aW9uIDQsIDUsIDYgKzEgdG90YWwgZWFjaCB0aW1lXG4gICAgaWYgKG15Q291bnQgPT09IDEpIHtcbiAgICAgIHZhciBzdGFydEhlaWdodCA9IDA7XG4gICAgfSBlbHNlIGlmIChteUNvdW50ID09PSAyKSB7XG4gICAgICB2YXIgc3RhcnRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIChteUNvdW50IC0gMSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDMpIHtcbiAgICAgIHZhciBzdGFydEhlaWdodCA9IG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgLSAxKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIH0gZWxzZSBpZiAobXlDb3VudCA9PT0gNCkge1xuICAgICAgdmFyIHN0YXJ0SGVpZ2h0ID0gbXlTY3JvbGxIZWlnaHQgKiBteUNvdW50IC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgICAvLyB2YXIgc3RhcnRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIChteUNvdW50IC0gMSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDUpIHtcbiAgICAgIHZhciBzdGFydEhlaWdodCA9IG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAxKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgICAgLy8gdmFyIHN0YXJ0SGVpZ2h0ID0gbXlTY3JvbGxIZWlnaHQgKiBteUNvdW50IC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgfSBlbHNlIGlmIChteUNvdW50ID09PSA2KSB7XG4gICAgICB2YXIgc3RhcnRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMikgLSBteVNjcm9sbE9mZnNldDtcbiAgICAgIC8vIHZhciBzdGFydEhlaWdodCA9IG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAxKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIH0gZWxzZSBpZiAobXlDb3VudCA9PT0gNykge1xuICAgICAgdmFyIHN0YXJ0SGVpZ2h0ID0gbXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCArIDIpIC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgfSBlbHNlIGlmIChteUNvdW50ID09PSA4KSB7XG4gICAgICB2YXIgc3RhcnRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMikgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9XG5cbiAgICBpZiAobXlDb3VudCA9PT0gMSkge1xuICAgICAgdmFyIGVuZEhlaWdodCA9IG15U2Nyb2xsSGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAobXlDb3VudCA9PT0gMikge1xuICAgICAgdmFyIGVuZEhlaWdodCA9IG15U2Nyb2xsSGVpZ2h0ICogbXlDb3VudCAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIH0gZWxzZSBpZiAobXlDb3VudCA9PT0gMykge1xuICAgICAgdmFyIGVuZEhlaWdodCA9IG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAxKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgICAgLy8gdmFyIGVuZEhlaWdodCA9IG15U2Nyb2xsSGVpZ2h0ICogbXlDb3VudCAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIH0gZWxzZSBpZiAobXlDb3VudCA9PT0gNCkge1xuICAgICAgdmFyIGVuZEhlaWdodCA9IG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAyKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgICAgLy8gdmFyIGVuZEhlaWdodCA9IG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAxKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIH0gZWxzZSBpZiAobXlDb3VudCA9PT0gNSkge1xuICAgICAgdmFyIGVuZEhlaWdodCA9IG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAzKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgICAgLy8gdmFyIGVuZEhlaWdodCA9IG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAyKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIH0gZWxzZSBpZiAobXlDb3VudCA9PT0gNikge1xuICAgICAgdmFyIGVuZEhlaWdodCA9IG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAzKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIH0gZWxzZSBpZiAobXlDb3VudCA9PT0gNykge1xuICAgICAgdmFyIGVuZEhlaWdodCA9IG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAzKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIH0gZWxzZSBpZiAobXlDb3VudCA9PT0gOCkge1xuICAgICAgdmFyIGVuZEhlaWdodCA9IG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAzKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKCdzdGFydCBoZWlnaHQnK215Q291bnQrJyBpcyAnK3N0YXJ0SGVpZ2h0KTtcbiAgICAvLyBjb25zb2xlLmxvZygnZW5kIGhlaWdodCcrbXlDb3VudCsnIGlzICcrZW5kSGVpZ2h0KTtcblxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIC8vIHRyaWdnZXI6J2JvZHknLFxuICAgICAgc3RhcnQ6IHN0YXJ0SGVpZ2h0LFxuICAgICAgZW5kOiBlbmRIZWlnaHQsXG4gICAgICBzY3J1YjogMSxcbiAgICAgIG9uRW50ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKG15Q291bnQgPiAxKSB7XG4gICAgICAgICAgZ3NhcC5zZXQoZG9jdW1lbnQuYm9keSwgeyBvdmVyZmxvdzogXCJoaWRkZW5cIiB9KTtcbiAgICAgICAgICBzZWN0aW9uQW5pbVtcInNlY3Rpb25BbmltXCIgKyBteUNvdW50XSgpLnBsYXkoKTtcbiAgICAgICAgICAvLyBhbGVydChteUNvdW50Kycgc2VjdGlvbiBlbnRlcmVkJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkxlYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChteUNvdW50IDwgNikge1xuICAgICAgICAgIGdzYXAuc2V0KGRvY3VtZW50LmJvZHksIHsgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfSk7XG4gICAgICAgICAgc2VjdGlvbkFuaW1bXCJzZWN0aW9uQW5pbVwiICsgbXlDb3VudF0oKS5yZXZlcnNlKDApO1xuICAgICAgICAgIC8vIGFsZXJ0KG15Q291bnQrJyBzZWN0aW9uIGxlZnQnKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uRW50ZXJCYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChteUNvdW50IDwgNikge1xuICAgICAgICAgIGdzYXAuc2V0KGRvY3VtZW50LmJvZHksIHsgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfSk7XG4gICAgICAgICAgc2VjdGlvbkFuaW1bXCJzZWN0aW9uQW5pbVwiICsgbXlDb3VudF0oKS5wbGF5KCk7XG4gICAgICAgICAgLy8gYWxlcnQobXlDb3VudCsnIHNlY3Rpb24gYmFjayBhZ2FpbicpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25MZWF2ZUJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKG15Q291bnQgPiAxKSB7XG4gICAgICAgICAgZ3NhcC5zZXQoZG9jdW1lbnQuYm9keSwgeyBvdmVyZmxvdzogXCJoaWRkZW5cIiB9KTtcbiAgICAgICAgICBzZWN0aW9uQW5pbVtcInNlY3Rpb25BbmltXCIgKyBteUNvdW50XSgpLnJldmVyc2UoMCk7XG4gICAgICAgICAgLy8gYWxlcnQobXlDb3VudCsnIHNlY3Rpb24gbGVmdCBhZ2FpbicpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIC8vIENhbGwgVGhlIFRyaWdnZXIgT24gRXZlcnkgU2VjdGlvblxuICAvLyBBbmltYXRpb24gdHJpZ2dlcnMgYXJlIGNhbGN1bGF0ZWQgaW4gdGhlIGZ1bmN0aW9uXG4gIGxldCBpID0gMTtcbiAgJChcInNlY3Rpb25cIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgc2VjdGlvblRyaWcoaSk7XG4gICAgaSsrO1xuICB9KTtcblxuICAvLyBTaW5nbGUgQnV6eiBvbiBCZWVzIFNlY3Rpb25zXG4gIC8vIEJ1enogQW5pbWF0aW9uIDVcbiAgbGV0IGJ1enpJbjQgPSAoKSA9PiB7XG4gICAgbGV0IGJ1enpCbG9jayA9ICQoXCIjc2VjdGlvbjRcIikuZmluZChcIi5idXp6T25CZWVzQmxvY2tcIik7XG4gICAgbGV0IGJ1enpXaWR0aCA9IGJ1enpCbG9jay5vdXRlcldpZHRoKCk7XG4gICAgbGV0IHRsID0gbmV3IGdzYXAudGltZWxpbmUoe1xuICAgICAgcGF1c2VkOiB0cnVlLFxuICAgICAgZGVmYXVsdHM6IHsgZHVyYXRpb246IDAuNSwgZWFzZTogXCJiYWNrLm91dCgwLjI1KTtcIiB9LFxuICAgIH0pO1xuICAgIHRsLmZyb21UbyhidXp6QmxvY2ssIHsgeDogYnV6eldpZHRoIH0sIHsgeDogMCB9KTtcbiAgICByZXR1cm4gdGw7XG4gIH07XG5cbiAgbGV0IGJ1enpUcmlnNCA9IChteUNvdW50KSA9PiB7XG4gICAgdmFyIHN0YXJ0SGVpZ2h0ID0gbXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCAtIDAuNSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICB2YXIgZW5kSGVpZ2h0ID0gbXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCArIDAuNSkgLSBteVNjcm9sbE9mZnNldDtcblxuICAgIC8vIGNvbnNvbGUubG9nKCdidXp6NCBzdGFydCBpcyAnK3N0YXJ0SGVpZ2h0KTtcbiAgICAvLyBjb25zb2xlLmxvZygnYnV6ejQgZW5kIGlzICcrZW5kSGVpZ2h0KTtcblxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIHN0YXJ0OiBzdGFydEhlaWdodCxcbiAgICAgIGVuZDogZW5kSGVpZ2h0LFxuICAgICAgc2NydWI6IDEsXG4gICAgICBvbkVudGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJ1enpJbjQoKS5wbGF5KCk7XG4gICAgICB9LFxuICAgICAgb25MZWF2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBidXp6SW40KCkucmV2ZXJzZSgwKTtcbiAgICAgIH0sXG4gICAgICBvbkVudGVyQmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICBidXp6SW40KCkucGxheSgpO1xuICAgICAgfSxcbiAgICAgIG9uTGVhdmVCYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJ1enpJbjQoKS5yZXZlcnNlKDApO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICBidXp6VHJpZzQoMyk7XG5cbiAgLy8gQnV6eiBBbmltYXRpb24gNVxuICBsZXQgYnV6ekluNSA9ICgpID0+IHtcbiAgICBsZXQgYnV6ekJsb2NrID0gJChcIiNzZWN0aW9uNVwiKS5maW5kKFwiLmJ1enpPbkJlZXNCbG9ja1wiKTtcbiAgICBsZXQgYnV6eldpZHRoID0gYnV6ekJsb2NrLm91dGVyV2lkdGgoKTtcbiAgICBsZXQgdGwgPSBuZXcgZ3NhcC50aW1lbGluZSh7XG4gICAgICBwYXVzZWQ6IHRydWUsXG4gICAgICBkZWZhdWx0czogeyBkdXJhdGlvbjogMC41LCBlYXNlOiBcImJhY2sub3V0KDAuMjUpO1wiIH0sXG4gICAgfSk7XG4gICAgdGwuZnJvbVRvKGJ1enpCbG9jaywgeyB4OiBidXp6V2lkdGggfSwgeyB4OiAwIH0pO1xuICAgIHJldHVybiB0bDtcbiAgfTtcblxuICBsZXQgYnV6elRyaWc1ID0gKG15Q291bnQpID0+IHtcbiAgICB2YXIgc3RhcnRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMC41KSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIHZhciBlbmRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMS41KSAtIG15U2Nyb2xsT2Zmc2V0O1xuXG4gICAgLy8gY29uc29sZS5sb2coJ2J1eno1IHN0YXJ0IGlzICcrc3RhcnRIZWlnaHQpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdidXp6NSBlbmQgaXMgJytlbmRIZWlnaHQpO1xuXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgc3RhcnQ6IHN0YXJ0SGVpZ2h0LFxuICAgICAgZW5kOiBlbmRIZWlnaHQsXG4gICAgICBzY3J1YjogMSxcbiAgICAgIG9uRW50ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYnV6ekluNSgpLnBsYXkoKTtcbiAgICAgIH0sXG4gICAgICBvbkxlYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJ1enpJbjUoKS5yZXZlcnNlKDApO1xuICAgICAgfSxcbiAgICAgIG9uRW50ZXJCYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJ1enpJbjUoKS5wbGF5KCk7XG4gICAgICB9LFxuICAgICAgb25MZWF2ZUJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYnV6ekluNSgpLnJldmVyc2UoMCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIGJ1enpUcmlnNSg0KTtcblxuICAvLyBCdXp6IEFuaW1hdGlvbiA2XG4gIGxldCBidXp6SW42ID0gKCkgPT4ge1xuICAgIGxldCBidXp6QmxvY2sgPSAkKFwiI3NlY3Rpb242XCIpLmZpbmQoXCIuYnV6ek9uQmVlc0Jsb2NrXCIpO1xuICAgIGxldCBidXp6V2lkdGggPSBidXp6QmxvY2sub3V0ZXJXaWR0aCgpO1xuICAgIGxldCB0bCA9IG5ldyBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIHBhdXNlZDogdHJ1ZSxcbiAgICAgIGRlZmF1bHRzOiB7IGR1cmF0aW9uOiAwLjUsIGVhc2U6IFwiYmFjay5vdXQoMC4yNSk7XCIgfSxcbiAgICB9KTtcbiAgICB0bC5mcm9tVG8oYnV6ekJsb2NrLCB7IHg6IGJ1enpXaWR0aCB9LCB7IHg6IDAgfSk7XG4gICAgcmV0dXJuIHRsO1xuICB9O1xuXG4gIGxldCBidXp6VHJpZzYgPSAobXlDb3VudCkgPT4ge1xuICAgIHZhciBzdGFydEhlaWdodCA9IG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAxLjUpIC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgdmFyIGVuZEhlaWdodCA9IG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAyLjUpIC0gbXlTY3JvbGxPZmZzZXQ7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnYnV6ejYgc3RhcnQgaXMgJytzdGFydEhlaWdodCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2J1eno2IGVuZCBpcyAnK2VuZEhlaWdodCk7XG5cbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICBzdGFydDogc3RhcnRIZWlnaHQsXG4gICAgICBlbmQ6IGVuZEhlaWdodCxcbiAgICAgIHNjcnViOiAxLFxuICAgICAgb25FbnRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBidXp6SW42KCkucGxheSgpO1xuICAgICAgfSxcbiAgICAgIG9uTGVhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYnV6ekluNigpLnJldmVyc2UoMCk7XG4gICAgICB9LFxuICAgICAgb25FbnRlckJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYnV6ekluNigpLnBsYXkoKTtcbiAgICAgIH0sXG4gICAgICBvbkxlYXZlQmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICBidXp6SW42KCkucmV2ZXJzZSgwKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgYnV6elRyaWc2KDUpO1xufTtcbiIsImltcG9ydCB7XG4gIG1lbnVUb2dnbGUsXG4gIHNtb290aFNjcm9sbGluZyxcbn0gZnJvbSAnLi9pbmRleC5qcydcblxuZXhwb3J0IGxldCBjbGlja0V2ZW50cyA9ICgpID0+IHtcbiAgXG4gIC8vIE1vYmlsZSBOYXYgQ2xpY2sgRXZlbnRcbiAgbGV0IG1lbnVUb2dnbGVUTCA9IG1lbnVUb2dnbGUoKTtcbiAgbWVudVRvZ2dsZVRMLnJldmVyc2VkKHRydWUpO1xuICAkKCcubWVudVRvZ2dsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkgeyAgXG4gICAgaWYgKG1lbnVUb2dnbGVUTC5yZXZlcnNlZCgpKSB7XG4gICAgICBtZW51VG9nZ2xlVEwucGxheSgpO1xuICAgICAgZ3NhcC5zZXQoJCgnLndyYXBwZXInKSwge2hlaWdodDonMTAwJScsIG92ZXJmbG93OidoaWRkZW4nfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdzYXAuc2V0KCQoJy53cmFwcGVyJyksIHtoZWlnaHQ6J2F1dG8nLCBvdmVyZmxvdzondmlzaWJsZSd9KTtcbiAgICAgIG1lbnVUb2dnbGVUTC5yZXZlcnNlKCk7XG4gICAgfVxuXHR9KTtcblxuICAkKCdhW2hyZWZePVwiI1wiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2hhc2ggaXQgb3V0Jyk7XG4gICAgXG4gICAgLy8gSUYgSVRcIlMgTU9CSUxFIC8gSVBBRCBPUiBTTUFMTEVSXG4gICAgaWYgKHNjcmVlbi53aWR0aCA8PSAxMDI1KXtcbiAgICAgIGdzYXAuc2V0KCQoJy53cmFwcGVyJyksIHtoZWlnaHQ6J2F1dG8nLCBvdmVyZmxvdzondmlzaWJsZSd9KTtcbiAgICAgIG1lbnVUb2dnbGVUTC5yZXZlcnNlKCk7XG4gICAgICBzbW9vdGhTY3JvbGxpbmcoJCh0aGlzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNtb290aFNjcm9sbGluZygkKHRoaXMpKTtcbiAgICB9XG4gIH0pO1xufSIsImV4cG9ydCBsZXQgZ3NhcFJlZ2lzdGVycyA9ICgpID0+IHtcbiAgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUb1BsdWdpbiwgU2Nyb2xsVHJpZ2dlciwgU3BsaXRUZXh0LCBEcmF3U1ZHUGx1Z2luLCBNb3JwaFNWR1BsdWdpbik7XG59IiwiZXhwb3J0IHtcbiAgcHJlTG9hZGVyLFxuICB2aWRMaW5rcyxcbiAgbW9iaWxlVmlkTGlua3MsXG4gIHNtb290aFNjcm9sbGluZyxcbiAgbW9iaWxlTmF2U2V0dXBcbn0gZnJvbSAnLi9wYWdlU2V0dXAuanMnXG5cbmV4cG9ydCB7XG4gIG1lbnVUb2dnbGVcbn0gZnJvbSAnLi9tZW51VG9nZ2xlLmpzJ1xuXG5leHBvcnQge1xuICBnc2FwUmVnaXN0ZXJzXG59IGZyb20gJy4vZ3NhcFJlZ2lzdGVycy5qcydcblxuZXhwb3J0IHtcbiAgY2xpY2tFdmVudHMsXG59IGZyb20gJy4vY2xpY2tFdmVudHMuanMnXG5cbmV4cG9ydCB7XG4gIGFuaW1hdGVTZWN0aW9uXG59IGZyb20gJy4vYW5pbWF0ZVNlY3Rpb24uanMnXG5cbmV4cG9ydCB7XG4gIHNlY3Rpb25zU2V0dXBcbn0gZnJvbSAnLi9zZWN0aW9uc1NldHVwJ1xuXG5cbmV4cG9ydCB7XG4gIG1vYmlsZVNlY3Rpb25zU2V0dXBcbn0gZnJvbSAnLi9tb2JpbGVTZWN0aW9uc1NldHVwJ1xuXG5leHBvcnQge1xuICBtb2JpbGVBbmltYXRlU2VjdGlvblxufSBmcm9tICcuL21vYmlsZUFuaW1hdGVTZWN0aW9uJ1xuXG4iLCJleHBvcnQgbGV0IG1lbnVUb2dnbGUgPSAoKSA9PiB7XG5cdGxldCB0bCA9IG5ldyBnc2FwLnRpbWVsaW5lKHtcblx0XHRwYXVzZWQ6dHJ1ZSxcblx0XHRkZWZhdWx0czoge1xuXHRcdFx0ZWFzZTogJ2NpcmMub3V0KCknLFxuXHRcdFx0ZHVyYXRpb246MC4zLFxuXHRcdH1cblx0fSk7XG5cblx0dGwudG8oJy5tYWluLW5hdicsIHtkdXJhdGlvbjowLjMsIGxlZnQ6JzAlJ30sICdtZW51T3BlbicpO1xuXHR0bC50bygnbmF2IGEnLCB7b3BhY2l0eToxLCB4OicwJScsIHN0YWdnZXI6IHthbW91bnQ6MC4xfX0sICdtZW51T3Blbis9MC4xJyk7XG5cdHRsLnRvKCcuaGFtVG9wJywge3JvdGF0aW9uOi0zMTUseDo3ICx5OjMsIHdpZHRoOjEwLCB0cmFuc2Zvcm1PcmlnaW46JzUwJSA1MCUnfSwgJ21lbnVPcGVuJyk7XG5cdHRsLnRvKCcuaGFtTWlkJywge3g6LTQsIHdpZHRoOjE4fSwgJ21lbnVPcGVuJyk7XG5cdHRsLnRvKCcuaGFtQm90Jywge3JvdGF0aW9uOjMxNSwgeDo3LCB5Oi0zLCB3aWR0aDoxMCwgdHJhbnNmb3JtT3JpZ2luOic1MCUgNTAlJ30sICdtZW51T3BlbicpO1xuXG5cdHJldHVybiB0bDtcbn0iLCJleHBvcnQgbGV0IG1vYmlsZUFuaW1hdGVTZWN0aW9uID0gKCkgPT4ge1xuXG4gIC8vIGdzYXAuc2V0KCdib2R5Jywge3RvdWNoQWN0aW9uOidub25lJ30pO1xuICAvLyBkb2N1bWVudC5vbnRvdWNobW92ZSA9IChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCk7XG4gIFxuICBsZXQgc2VjdGlvbkFuaW0gPSB7XG5cbiAgICBzZWN0aW9uQW5pbTEgOiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9ICgnI3NlY3Rpb24xJyk7XG4gICAgICBsZXQgdGhpc092ZXJsYXkgPSAkKCcjb3ZlcmxheTEnKTtcbiAgICAgIGxldCBzZWN0aW9uTGluZXMgPSAkKHRoaXNTZWMpLmZpbmQoJy5zaW5nbGUtYmFja2xpbmUnKTtcbiAgICAgIGxldCBzZWNBcnJvdyA9ICQodGhpc1NlYykuZmluZCgnLmRvd24tYXJyb3ctc3ZnJylcblxuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuNSxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgb25Db21wbGV0ZTpmdW5jdGlvbigpIHtcbiAgICAgICAgICBnc2FwLnRpbWVsaW5lKHtyZXBlYXQ6LTEsIHlveW86dHJ1ZX0pLnRvKHNlY0Fycm93LCB7eTotMywgZHVyYXRpb246MC41LCBlYXNlOlwibm9uZVwifSk7IFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIFxuICAgICAgLy8gQnVpbGQgTWFzdGVyIFRMVExcbiAgICAgIHRsLmZyb21Ubyh0aGlzT3ZlcmxheSwge29wYWNpdHk6MH0sIHtvcGFjaXR5OjAuNjV9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKHNlY3Rpb25MaW5lcywge29wYWNpdHk6MH0se29wYWNpdHk6MC4zfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgICAgICAgIFxuICAgICAgcmV0dXJuIHRsO1xuICAgIH0sXG5cbiAgICBzZWN0aW9uQW5pbTIgOiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9ICQoJyNzZWN0aW9uMicpO1xuICAgICAgbGV0IHRoaXNCYWNrID0gJCgnI2JhY2tncm91bmQxJyk7XG4gICAgICBsZXQgdGhpc092ZXJsYXkgPSAkKCcjb3ZlcmxheTEnKTtcbiAgICAgIGxldCBsaW5lcyA9ICQoJy5zaW5nbGUtYmFja2xpbmUnKTtcbiAgICAgIGxldCBzZWN0aW9uTGluZXMgPSB0aGlzU2VjLmZpbmQoJy5zaW5nbGUtYmFja2xpbmUnKVxuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIC8vIGRlbGF5OjAuNjUsXG4gICAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuNSxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxvbkNvbXBsZXRlOmZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gLy8gZ3NhcC5zZXQoJ2JvZHknLCB7b3ZlcmZsb3c6J2F1dG8nfSk7LFxuICAgICAgICAgICAgLy8gZ3NhcC5zZXQoJ2JvZHknLCB7dG91Y2hBY3Rpb246J2F1dG8nfSk7ICBcbiAgICAgICAgICAvLyB9LCAxMDAwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIHRsLmZyb21Ubyh0aGlzT3ZlcmxheSwge29wYWNpdHk6MH0sIHtvcGFjaXR5OjAuMX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8oc2VjdGlvbkxpbmVzLCB7b3BhY2l0eTowfSx7b3BhY2l0eTowLjJ9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgXG4gICAgICByZXR1cm4gdGw7XG4gICAgfSxcbiAgICBcblxuICAgIHNlY3Rpb25BbmltMyA6ICgpID0+IHtcbiAgICAgIGxldCB0aGlzU2VjID0gJCgnI3NlY3Rpb24zJyk7XG4gICAgICBsZXQgdGhpc0JhY2sgPSAkKCcjYmFja2dyb3VuZDMnKTtcbiAgICAgIGxldCBzZWN0aW9uTGluZXMgPSB0aGlzU2VjLmZpbmQoJy5zaW5nbGUtYmFja2xpbmUnKTtcbiAgICAgIGxldCBjZW50ZXI0TCA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci00TCcpO1xuICAgICAgbGV0IGNlbnRlcjRSID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTRSJyk7XG4gICAgICBsZXQgY2VudGVyM0wgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItM0wnKTtcbiAgICAgIGxldCBjZW50ZXIzUiA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci0zUicpO1xuICAgICAgbGV0IGNlbnRlcjJMID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTJMJyk7XG4gICAgICBsZXQgY2VudGVyMlIgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItMlInKTtcbiAgICAgIGxldCBib3R0b21TbWFsbCA9ICQodGhpc1NlYykuZmluZCgnI2JvdHRvbS1zbWFsbCcpO1xuICAgICAgXG4gICAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgcGF1c2VkOnRydWUsXG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246MC41LFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9LFxuICAgICAgICBvbkNvbXBsZXRlOmZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIGdzYXAuc2V0KCcjYmFja2dyb3VuZDEnLCB7b3BhY2l0eTowfSk7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvLyBvblJldmVyc2VDb21wbGV0ZTpmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gICAgIC8vIGdzYXAuc2V0KCdib2R5Jywge3RvdWNoQWN0aW9uOidhdXRvJ30pOyAgXG4gICAgICAgIC8vICAgICAvLyBnc2FwLnNldCgnYm9keScsIHtvdmVyZmxvdzonYXV0byd9KTssXG4gICAgICAgIC8vICAgLy8gfSwgMTAwMCk7ICAgICAgXG4gICAgICAgIC8vICAgZ3NhcC5zZXQoJyNiYWNrZ3JvdW5kMScsIHtvcGFjaXR5OjF9KTtcbiAgICAgICAgLy8gfSxcbiAgICAgIH0pO1xuICAgICAgdGwuZnJvbVRvKCcudmlkZW9BcmVhJywge29wYWNpdHk6MH0sIHtvcGFjaXR5OjF9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKGNlbnRlcjRMLCB7b3BhY2l0eTowfSx7b3BhY2l0eToxfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21UbyhjZW50ZXI0Uiwge29wYWNpdHk6MH0se29wYWNpdHk6MX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8oY2VudGVyM0wsIHtvcGFjaXR5OjB9LHtvcGFjaXR5OjF9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKGNlbnRlcjNSLCB7b3BhY2l0eTowfSx7b3BhY2l0eToxfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21UbyhjZW50ZXIyTCwge29wYWNpdHk6MH0se29wYWNpdHk6MX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8oY2VudGVyMlIsIHtvcGFjaXR5OjB9LHtvcGFjaXR5OjF9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKGJvdHRvbVNtYWxsLCB7b3BhY2l0eTowfSx7b3BhY2l0eToxfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21Ubyh0aGlzQmFjaywge29wYWNpdHk6MH0se29wYWNpdHk6MX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8oc2VjdGlvbkxpbmVzLCB7b3BhY2l0eTowfSx7b3BhY2l0eToxfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21UbyhzZWN0aW9uTGluZXMsIHtvcGFjaXR5OjB9LHtvcGFjaXR5OjF9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgXG4gICAgICByZXR1cm4gdGw7XG4gICAgfSxcbiAgICBcbiAgICBzZWN0aW9uQW5pbTQgOiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9ICQoJyNzZWN0aW9uNCcpO1xuICAgICAgbGV0IHRoaXNCYWNrID0gJCgnI2JhY2tncm91bmQ0Jyk7XG4gICAgICAvLyBsZXQgc2VjdGlvbkxpbmVzID0gdGhpc1NlYy5maW5kKCcuc2luZ2xlLWJhY2tsaW5lJylcbiAgICAgIGxldCBzb2xvQ2VudGVyMiA9ICQodGhpc1NlYykuZmluZCgnI3NvbG8tY2VudGVyLTInKTtcbiAgICAgIGxldCBzb2xvQ2VudGVyMSA9ICQodGhpc1NlYykuZmluZCgnI3NvbG8tY2VudGVyLTEnKTtcbiAgICAgIGxldCBib3R0b21TbWFsbCA9ICQodGhpc1NlYykuZmluZCgnI2JvdHRvbS1zbWFsbCcpO1xuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuNSxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgb25SZXZlcnNlQ29tcGxldGU6ZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gZ3NhcC5zZXQoJyNiYWNrZ3JvdW5kMScsIHtvcGFjaXR5OjF9KTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgdGwuZnJvbVRvKHNvbG9DZW50ZXIxLCB7b3BhY2l0eTowfSx7b3BhY2l0eTowLjV9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKHNvbG9DZW50ZXIyLCB7b3BhY2l0eTowfSx7b3BhY2l0eTowLjV9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKGJvdHRvbVNtYWxsLCB7b3BhY2l0eTowfSx7b3BhY2l0eTowLjV9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKHRoaXNCYWNrLCB7b3BhY2l0eTowfSx7b3BhY2l0eToxfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIC8vIHRsLmZyb21UbyhzZWN0aW9uTGluZXMsIHtvcGFjaXR5OjB9LHtvcGFjaXR5OjAuM30sIFwic2Nyb2xsSW5BbGxcIik7XG5cbiAgICAgIHJldHVybiB0bDtcbiAgICB9LFxuXG4gICAgc2VjdGlvbkFuaW01IDogKCkgPT4ge1xuICAgICAgbGV0IHRoaXNTZWMgPSAkKCcjc2VjdGlvbjUnKTtcbiAgICAgIGxldCB0aGlzQmFjayA9ICQoJyNiYWNrZ3JvdW5kNScpO1xuICAgICAgbGV0IHRoaXNPdmVybGF5ID0gJCgnI292ZXJsYXk1Jyk7XG4gICAgICBsZXQgc2VjdGlvbkxpbmVzID0gdGhpc1NlYy5maW5kKCcuc2luZ2xlLWJhY2tsaW5lJylcbiAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjUsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGU6ZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBnc2FwLnNldCgnYm9keScsIHt0b3VjaEFjdGlvbjonYXV0byd9KTsgIFxuICAgICAgICAgIC8vIH0sIDEwMDApO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIHRsLmZyb21Ubyh0aGlzT3ZlcmxheSwge29wYWNpdHk6MH0sIHtvcGFjaXR5OjAuOX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8odGhpc0JhY2ssIHtvcGFjaXR5OjB9LHtvcGFjaXR5OjF9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKHNlY3Rpb25MaW5lcywge29wYWNpdHk6MH0se29wYWNpdHk6MC45fSwgXCJzY3JvbGxJbkFsbFwiKTtcblxuICAgICAgcmV0dXJuIHRsO1xuICAgIH0sXG5cbiAgICBzZWN0aW9uQW5pbTYgOiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9ICQoJyNzZWN0aW9uNicpO1xuICAgICAgbGV0IHRoaXNCYWNrID0gJCgnI2JhY2tncm91bmQ2Jyk7XG4gICAgICBsZXQgdGhpc092ZXJsYXkgPSAkKCcjb3ZlcmxheTYnKTtcbiAgICAgIGxldCBzZWN0aW9uTGluZXMgPSB0aGlzU2VjLmZpbmQoJy5zaW5nbGUtYmFja2xpbmUnKVxuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuNSxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgb25Db21wbGV0ZTpmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8vIGdzYXAuc2V0KCdib2R5Jywge3RvdWNoQWN0aW9uOidhdXRvJ30pOyAgXG4gICAgICAgICAgLy8gfSwgMTAwMCk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgdGwuZnJvbVRvKHRoaXNPdmVybGF5LCB7b3BhY2l0eTowfSwge29wYWNpdHk6MC45fSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21Ubyh0aGlzQmFjaywge29wYWNpdHk6MH0se29wYWNpdHk6MX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8oc2VjdGlvbkxpbmVzLCB7b3BhY2l0eTowfSx7b3BhY2l0eTowLjJ9LCBcInNjcm9sbEluQWxsXCIpO1xuXG4gICAgICByZXR1cm4gdGw7XG4gICAgfSxcblxuICAgIHNlY3Rpb25BbmltNyA6ICgpID0+IHtcbiAgICAgIGxldCB0aGlzU2VjID0gJCgnI3NlY3Rpb243Jyk7XG4gICAgICBsZXQgdGhpc0JhY2sgPSAkKCcjYmFja2dyb3VuZDcnKTtcbiAgICAgIGxldCB0aGlzT3ZlcmxheSA9ICQoJyNvdmVybGF5NycpO1xuICAgICAgbGV0IHNlY3Rpb25MaW5lcyA9IHRoaXNTZWMuZmluZCgnLnNpbmdsZS1iYWNrbGluZScpXG4gICAgICBsZXQgc2VjQXJyb3cgPSAkKCcjc2VjdGlvbjEnKS5maW5kKCcuZG93bi1hcnJvdy1zdmcnKVxuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuNSxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgdGwuZnJvbVRvKHRoaXNPdmVybGF5LCB7b3BhY2l0eTowfSwge29wYWNpdHk6MC45fSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21Ubyh0aGlzQmFjaywge29wYWNpdHk6MH0se29wYWNpdHk6MX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8oc2VjdGlvbkxpbmVzLCB7b3BhY2l0eTowfSx7b3BhY2l0eTowLjV9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKHNlY0Fycm93LCB7b3BhY2l0eToxfSx7b3BhY2l0eTowfSwgXCJzY3JvbGxJbkFsbFwiKTtcblxuICAgICAgcmV0dXJuIHRsO1xuICAgIH0sXG4gICAgXG4gIH07XG4gIFxuICBzZWN0aW9uQW5pbVsnc2VjdGlvbkFuaW0xJ10oKS5wbGF5KCk7XG5cbiAgLy8gRmlyZSBBbiBBbmltYXRpb24gRnJvbSBBYm92ZSBmb3IgRWFjaCBTZWN0aW9uXG4gIGxldCBzZWN0aW9uVHJpZyA9IChteUNvdW50KSA9PiB7XG4gICAgXG4gICAgLy8gUGxheSBTZWN0aW9uIDEgYXV0b21hdGljYWxseVxuICAgIFxuXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgdHJpZ2dlcjonI3NlY3Rpb24nK215Q291bnQsXG4gICAgICBzdGFydDpcInRvcCBib3R0b21cIixcbiAgICAgIGVuZDpcImJvdHRvbSBib3R0b21cIixcbiAgICAgIC8vIHNjcnViOjEsXG4gICAgICBvbkVudGVyOiBmdW5jdGlvbigpe1xuICAgICAgICBpZiAobXlDb3VudCA+IDEpIHtcbiAgICAgICAgICAvLyBhbGVydChteUNvdW50KTtcbiAgICAgICAgICAvLyBnc2FwLnNldCgnYm9keScsIHt0b3VjaEFjdGlvbjonbm9uZSd9KTtcbiAgICAgICAgICAvLyBnc2FwLnNldCgnYm9keScsIHtvdmVyZmxvdzonaGlkZGVuJ30pO1xuICAgICAgICAgIHNlY3Rpb25BbmltWydzZWN0aW9uQW5pbScrbXlDb3VudF0oKS5wbGF5KCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkxlYXZlOiBmdW5jdGlvbigpe1xuICAgICAgICBpZiAobXlDb3VudCA8IDcpIHtcbiAgICAgICAgICAvLyBnc2FwLnNldCgnYm9keScsIHt0b3VjaEFjdGlvbjonbm9uZSd9KTtcbiAgICAgICAgICBzZWN0aW9uQW5pbVsnc2VjdGlvbkFuaW0nK215Q291bnRdKCkucmV2ZXJzZSgwKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uRW50ZXJCYWNrOmZ1bmN0aW9uKCl7XG4gICAgICAgIGlmIChteUNvdW50IDwgNykge1xuICAgICAgICAgIC8vIGdzYXAuc2V0KCdib2R5Jywge3RvdWNoQWN0aW9uOidub25lJ30pO1xuICAgICAgICAgIHNlY3Rpb25BbmltWydzZWN0aW9uQW5pbScrbXlDb3VudF0oKS5wbGF5KCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkxlYXZlQmFjazogZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKG15Q291bnQgPiAxKSB7XG4gICAgICAgICAgLy8gZ3NhcC5zZXQoJ2JvZHknLCB7dG91Y2hBY3Rpb246J25vbmUnfSk7XG4gICAgICAgICAgc2VjdGlvbkFuaW1bJ3NlY3Rpb25BbmltJytteUNvdW50XSgpLnJldmVyc2UoMCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBcbiAgLy8gQW5pbWF0aW9uIHRyaWdnZXJzIGFyZSBjYWxjdWxhdGVkIGluIHRoZSBmdW5jdGlvblxuICBsZXQgaSA9IDE7XG4gICQoJ3NlY3Rpb24nKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgc2VjdGlvblRyaWcoaSk7XG4gICAgaSsrXG4gIH0pXG5cbiAgLy8gc2VjdGlvblRyaWcoMik7XG4gIGxldCB3aW5kb3dIZWlnaHQgPSBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIC8vIFNpbmdsZSBCdXp6IG9uIEJlZXMgU2VjdGlvbnNcbiAgLy8gQnV6eiBBbmltYXRpb24gNVxuICBsZXQgYnV6ekluNCA9ICgpID0+IHtcbiAgICBcbiAgICBsZXQgYnV6ekJsb2NrID0gJCgnI3NlY3Rpb240JykuZmluZCgnLmJ1enpPbkJlZXNCbG9jaycpO1xuICAgIGxldCBidXp6V2lkdGggPSBidXp6QmxvY2sub3V0ZXJXaWR0aCgpO1xuICAgIGxldCB0bCA9IG5ldyBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgZGVmYXVsdHM6IHtkdXJhdGlvbjowLjV9XG4gICAgfSk7XG4gICAgdGwuZnJvbVRvKGJ1enpCbG9jaywge3g6YnV6eldpZHRofSwge3g6MH0pO1xuICAgIHJldHVybiB0bFxuICB9XG5cbiAgbGV0IGJ1enpUcmlnNCA9IChteUNvdW50KSA9PiB7XG4gICAgLy8gdmFyIHN0YXJ0SGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgLSAwLjUpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIC8vIHZhciBlbmRIZWlnaHQgPSAobXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCArIDAuNSkpIC0gbXlTY3JvbGxPZmZzZXQ7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnYnV6ejQgc3RhcnQgaXMgJytzdGFydEhlaWdodCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2J1eno0IGVuZCBpcyAnK2VuZEhlaWdodCk7XG4gICAgXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgdHJpZ2dlcjonI3NlY3Rpb240JyxcbiAgICAgIHN0YXJ0Oid0b3AgdG9wLT0nKyh3aW5kb3dIZWlnaHQgLyAyKSxcbiAgICAgIGVuZDonYm90dG9tIGJvdHRvbScsIFxuICAgICAgLy8gc2NydWI6MSxcbiAgICAgIG9uRW50ZXI6IGZ1bmN0aW9uKCl7YnV6ekluNCgpLnBsYXkoKTt9LFxuICAgICAgb25MZWF2ZTogZnVuY3Rpb24oKXtidXp6SW40KCkucmV2ZXJzZSgwKTt9LFxuICAgICAgb25FbnRlckJhY2s6ZnVuY3Rpb24oKXtidXp6SW40KCkucGxheSgpO30sXG4gICAgICBvbkxlYXZlQmFjazogZnVuY3Rpb24oKXtidXp6SW40KCkucmV2ZXJzZSgwKTt9LFxuICAgIH0pO1xuICB9XG5cbiAgYnV6elRyaWc0KCk7XG5cbiAgLy8gQnV6eiBBbmltYXRpb24gNVxuICBsZXQgYnV6ekluNSA9ICgpID0+IHtcbiAgICBsZXQgYnV6ekJsb2NrID0gJCgnI3NlY3Rpb241JykuZmluZCgnLmJ1enpPbkJlZXNCbG9jaycpO1xuICAgIGxldCBidXp6V2lkdGggPSBidXp6QmxvY2sub3V0ZXJXaWR0aCgpO1xuICAgIGxldCB0bCA9IG5ldyBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgZGVmYXVsdHM6IHtkdXJhdGlvbjowLjV9XG4gICAgfSk7XG4gICAgdGwuZnJvbVRvKGJ1enpCbG9jaywge3g6YnV6eldpZHRofSwge3g6MH0pO1xuICAgIHJldHVybiB0bFxuICB9XG5cbiAgbGV0IGJ1enpUcmlnNSA9IChteUNvdW50KSA9PiB7XG4gICAgLy8gdmFyIHN0YXJ0SGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAwLjUpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIC8vIHZhciBlbmRIZWlnaHQgPSAobXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCArIDEuNSkpIC0gbXlTY3JvbGxPZmZzZXQ7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnYnV6ejUgc3RhcnQgaXMgJytzdGFydEhlaWdodCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2J1eno1IGVuZCBpcyAnK2VuZEhlaWdodCk7XG4gICAgXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgdHJpZ2dlcjonI3NlY3Rpb241JyxcbiAgICAgIHN0YXJ0Oid0b3AgdG9wLT0nKyh3aW5kb3dIZWlnaHQgLyAyKSxcbiAgICAgIGVuZDonYm90dG9tIGJvdHRvbScsIFxuICAgICAgLy8gc2NydWI6MSxcbiAgICAgIG9uRW50ZXI6IGZ1bmN0aW9uKCl7YnV6ekluNSgpLnBsYXkoKTt9LFxuICAgICAgb25MZWF2ZTogZnVuY3Rpb24oKXtidXp6SW41KCkucmV2ZXJzZSgwKTt9LFxuICAgICAgb25FbnRlckJhY2s6ZnVuY3Rpb24oKXtidXp6SW41KCkucGxheSgpO30sXG4gICAgICBvbkxlYXZlQmFjazogZnVuY3Rpb24oKXtidXp6SW41KCkucmV2ZXJzZSgwKTt9LFxuICAgIH0pO1xuICB9XG5cbiAgYnV6elRyaWc1KCk7XG5cbiAgLy8gQnV6eiBBbmltYXRpb24gNlxuICBsZXQgYnV6ekluNiA9ICgpID0+IHtcbiAgICBsZXQgYnV6ekJsb2NrID0gJCgnI3NlY3Rpb242JykuZmluZCgnLmJ1enpPbkJlZXNCbG9jaycpO1xuICAgIGxldCBidXp6V2lkdGggPSBidXp6QmxvY2sub3V0ZXJXaWR0aCgpO1xuICAgIGxldCB0bCA9IG5ldyBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgZGVmYXVsdHM6IHtkdXJhdGlvbjowLjV9XG4gICAgfSk7XG4gICAgdGwuZnJvbVRvKGJ1enpCbG9jaywge3g6YnV6eldpZHRofSwge3g6MH0pO1xuICAgIHJldHVybiB0bFxuICB9XG5cbiAgbGV0IGJ1enpUcmlnNiA9IChteUNvdW50KSA9PiB7XG4gICAgLy8gdmFyIHN0YXJ0SGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAxLjUpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIC8vIHZhciBlbmRIZWlnaHQgPSAobXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCArIDIuNSkpIC0gbXlTY3JvbGxPZmZzZXQ7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnYnV6ejYgc3RhcnQgaXMgJytzdGFydEhlaWdodCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2J1eno2IGVuZCBpcyAnK2VuZEhlaWdodCk7XG4gICAgXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgdHJpZ2dlcjonI3NlY3Rpb242JyxcbiAgICAgIHN0YXJ0Oid0b3AgdG9wLT0nKyh3aW5kb3dIZWlnaHQgLyAxLjUpLFxuICAgICAgZW5kOidib3R0b20gYm90dG9tJywgXG4gICAgICAvLyBzY3J1YjoxLFxuICAgICAgb25FbnRlcjogZnVuY3Rpb24oKXtidXp6SW42KCkucGxheSgpO30sXG4gICAgICBvbkxlYXZlOiBmdW5jdGlvbigpe2J1enpJbjYoKS5yZXZlcnNlKDApO30sXG4gICAgICBvbkVudGVyQmFjazpmdW5jdGlvbigpe2J1enpJbjYoKS5wbGF5KCk7fSxcbiAgICAgIG9uTGVhdmVCYWNrOiBmdW5jdGlvbigpe2J1enpJbjYoKS5yZXZlcnNlKDApO30sXG4gICAgfSk7XG4gIH1cblxuICBidXp6VHJpZzYoKTtcblxuXG4gICQoJy50ZXh0LWNvbnRhaW5lcicpLmVhY2goIGZ1bmN0aW9uKCkge1xuXG4gICAgXG4gICAgbGV0IGxpbmVzSW4gPSAoKSA9PiB7XG4gICAgICBsZXQgdGhlc2VMaW5lcyA9ICQodGhpcykuZmluZCgnLnBMaW5lcycpO1xuICAgICAgbGV0IHRsID0gbmV3IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtkdXJhdGlvbjowLjN9XG4gICAgICB9KTtcbiAgICAgIHRsLmZyb21UbyggdGhlc2VMaW5lcywgXG4gICAgICAgIHtvcGFjaXR5OjAsIHg6LTQwfSxcbiAgICAgICAge29wYWNpdHk6MSwgeDowLCBzdGFnZ2VyOnthbW91bnQ6MC4zfVxuICAgICAgfSk7IFxuXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGVzZUxpbmVzKTtcbiAgICAgIHJldHVybiB0bFxuICAgIH1cbiAgICBcbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICB0cmlnZ2VyOnRoaXMsXG4gICAgICBzdGFydDondG9wIGJvdHRvbS09MTIwcHgnLFxuICAgICAgLy8gc2NydWI6MSxcbiAgICAgIG9uRW50ZXI6IGZ1bmN0aW9uKCl7bGluZXNJbigpLnBsYXkoKTt9LFxuICAgICAgLy8gb25MZWF2ZTogZnVuY3Rpb24oKXtidXp6SW42KCkucmV2ZXJzZSgwKTt9LFxuICAgICAgLy8gb25FbnRlckJhY2s6ZnVuY3Rpb24oKXtidXp6SW42KCkucGxheSgpO30sXG4gICAgICBvbkxlYXZlQmFjazogZnVuY3Rpb24oKXtsaW5lc0luKCkucmV2ZXJzZSgwKTt9LFxuICAgIH0pO1xuICB9KTtcblxuXG4gICQoJ2gyJykuZWFjaCggZnVuY3Rpb24oKSB7XG5cbiAgICBcbiAgICBsZXQgbGluZXNJbiA9ICgpID0+IHtcbiAgICAgIGxldCB0aGVzZUxpbmVzID0gJCh0aGlzKS5maW5kKCcuaDJXb3JkcycpO1xuICAgICAgbGV0IHRsID0gbmV3IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtkdXJhdGlvbjowLjN9XG4gICAgICB9KTtcbiAgICAgIHRsLmZyb21UbyggdGhlc2VMaW5lcywgXG4gICAgICAgIHtvcGFjaXR5OjAsIHg6LTQwfSxcbiAgICAgICAge29wYWNpdHk6MSwgeDowLCBzdGFnZ2VyOnthbW91bnQ6MC4zfVxuICAgICAgfSk7IFxuXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGVzZUxpbmVzKTtcbiAgICAgIHJldHVybiB0bFxuICAgIH1cbiAgICBcbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICB0cmlnZ2VyOnRoaXMsXG4gICAgICBzdGFydDondG9wIGJvdHRvbS09MTIwcHgnLFxuICAgICAgLy8gc2NydWI6MSxcbiAgICAgIG9uRW50ZXI6IGZ1bmN0aW9uKCl7bGluZXNJbigpLnBsYXkoKTt9LFxuICAgICAgLy8gb25MZWF2ZTogZnVuY3Rpb24oKXtidXp6SW42KCkucmV2ZXJzZSgwKTt9LFxuICAgICAgLy8gb25FbnRlckJhY2s6ZnVuY3Rpb24oKXtidXp6SW42KCkucGxheSgpO30sXG4gICAgICBvbkxlYXZlQmFjazogZnVuY3Rpb24oKXtsaW5lc0luKCkucmV2ZXJzZSgwKTt9LFxuICAgIH0pO1xuICB9KTtcblxuXG59XG5cblxuIiwiZXhwb3J0IGxldCBtb2JpbGVTZWN0aW9uc1NldHVwID0gKCkgPT4ge1xuXG4gIC8vICQoJ2JvZHknKS5hZGRDbGFzcygnbW9iaWxlLWRldmljZScpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gTUVBU1VSSU5HIFZBUlNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGxldCB0b3RhbFNlY3Rpb25zID0gJCgnc2VjdGlvbicpLmxlbmd0aDtcbiAgbGV0IHRvdGFsQnV6ek9uID0gJCgnLmJ1enpPbkJlZXNCbG9jaycpLmxlbmd0aDtcbiAgbGV0IHdpbmRvd0hlaWdodCA9IE1hdGgucm91bmQod2luZG93LmlubmVySGVpZ2h0KTtcbiAgbGV0IG15U2Nyb2xsSGVpZ2h0ID0gd2luZG93SGVpZ2h0LzI7XG4gIGxldCBmdWxsSGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKHRvdGFsU2VjdGlvbnMgKyB0b3RhbEJ1enpPbikpICsgd2luZG93SGVpZ2h0IC0gMTtcbiAgbGV0IGJ1enpCbG9jayA9ICQoJy5idXp6T25CZWVzQmxvY2snKTtcbiAgbGV0IGJ1enpXaWR0aCA9IGJ1enpCbG9jay5vdXRlcldpZHRoKCk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBHTE9CQUxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNldCBPdmVyYWxsIFNjcm9sbCBIZWlnaHRcbiAgLy8gZ3NhcC5zZXQoJy5ob21lLXBhZ2UnLCB7aGVpZ2h0OmZ1bGxIZWlnaHR9KTtcbiAgLy8gZ3NhcC5zZXQoZG9jdW1lbnQuYm9keSwge292ZXJmbG93OiBcImhpZGRlblwifSlcbiAgLy8gSGlkZSBBbGwgTGluZXNcbiAgLy8gZ3NhcC5zZXQoJCgnLmhvbWUtcGFnZScpLmZpbmQoJ3BhdGgnKSwge2RyYXdTVkc6XCI1MCUgNTAlXCJ9KTtcbiAgLy8gZ3NhcC5zZXQoJCgnLmhvbWUtcGFnZScpLmZpbmQoJ3BvbHlsaW5lJyksIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSk7XG4gIC8vIGdzYXAuc2V0KCQoJy5ob21lLXBhZ2UnKS5maW5kKCdsaW5lJyksIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSk7XG4gIC8vIGdzYXAuc2V0KCQoJy5ob21lLXBhZ2UnKS5maW5kKCcjZG93bi1hcnJvdyBsaW5lJyksIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9KTtcbiAgLy8gU2V0IDFzdCBCYWNrZ3JvdW5kIEltYWdlIGFzIFZpc2libGVcblxuICBsZXQgc2VjMUxpbmVzID0gJCgnI3NlY3Rpb24xJykuZmluZCgnLnNpbmdsZS1iYWNrbGluZScpXG4gIGxldCBzZWMxQXJyb3cgPSAkKCcjc2VjdGlvbjEnKS5maW5kKCcuZG93bi1hcnJvdy1zdmcnKVxuICBnc2FwLnNldChzZWMxTGluZXMsIHtvcGFjaXR5OjAuMn0pO1xuICBnc2FwLnNldChzZWMxQXJyb3csIHtvcGFjaXR5OjF9KTtcbiAgZ3NhcC5zZXQoJyNiYWNrZ3JvdW5kMScsIHtvcGFjaXR5OjEsIHpJbmRleDoxMDB9KTtcbiAgZ3NhcC5zZXQoJyNiYWNrZ3JvdW5kMycsIHt6SW5kZXg6MTA2fSk7XG4gIGdzYXAuc2V0KCcjYmFja2dyb3VuZDQnLCB7ekluZGV4OjEwNX0pO1xuICBnc2FwLnNldCgnI2JhY2tncm91bmQ1Jywge3pJbmRleDoxMDR9KTtcbiAgZ3NhcC5zZXQoJyNiYWNrZ3JvdW5kNicsIHt6SW5kZXg6MTAzfSk7XG4gIGdzYXAuc2V0KCcjYmFja2dyb3VuZDcnLCB7ekluZGV4OjEwMX0pO1xuXG4gIGdzYXAuc2V0KCcjb3ZlcmxheTEnLCB7b3BhY2l0eTowLjY1LCB6SW5kZXg6MTAxfSk7XG4gIC8vIGdzYXAuc2V0KCcjb3ZlcmxheTMnLCB7ekluZGV4OjEwM30pO1xuICAvLyBnc2FwLnNldCgnI292ZXJsYXk0Jywge3pJbmRleDoxMDR9KTtcbiAgZ3NhcC5zZXQoJyNvdmVybGF5NScsIHt6SW5kZXg6MTA1fSk7XG4gIGdzYXAuc2V0KCcjb3ZlcmxheTYnLCB7ekluZGV4OjEwNn0pO1xuICBnc2FwLnNldCgnI292ZXJsYXk3Jywge3pJbmRleDoxMDd9KTtcblxuICAvLyBnc2FwLnNldCgnI3NlY3Rpb24xJywge3pJbmRleDoyMDd9KTtcbiAgLy8gZ3NhcC5zZXQoJyNzZWN0aW9uMicsIHt6SW5kZXg6MjA2fSk7XG4gIC8vIGdzYXAuc2V0KCcjc2VjdGlvbjMnLCB7ekluZGV4OjIwNX0pO1xuICAvLyBnc2FwLnNldCgnI3NlY3Rpb240Jywge3pJbmRleDoyMDR9KTtcbiAgLy8gZ3NhcC5zZXQoJyNzZWN0aW9uNScsIHt6SW5kZXg6MjAzfSk7XG4gIC8vIGdzYXAuc2V0KCcjc2VjdGlvbjYnLCB7ekluZGV4OjIwMn0pO1xuICAvLyBnc2FwLnNldCgnI3NlY3Rpb243Jywge3pJbmRleDoyMDF9KTtcbiAgLy8gZ3NhcC5zZXQoJyNiYWNrZ3JvdW5kMScsIHtvcGFjaXR5OjF9KTtcbiAgLy8gU2V0IEJ1enogT24gQmVlcyB0byBIaWRkZW5cbiAgZ3NhcC5zZXQoYnV6ekJsb2NrLCB7eDpidXp6V2lkdGh9KTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFQ1RJT04gMVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbGV0IHNlYzEgPSAkKCcjc2VjdGlvbjEnKTtcbiAgbGV0IHNlYzFIMiA9IHNlYzEuZmluZCgnaDInKTtcbiAgbGV0IHNlYzFzcGxpdEgyID0gbmV3IFNwbGl0VGV4dChzZWMxSDIsIHsgdHlwZTogXCJsaW5lcyx3b3JkcywgY2hhcnNcIiB9KTtcbiAgbGV0IHNlYzFDaGFyczIgPSBzZWMxc3BsaXRIMi5jaGFycztcbiAgbGV0IHNlYzFXb3JkczIgPSBzZWMxc3BsaXRIMi53b3JkcztcbiAgbGV0IHNlYzFMaW5lczIgPSBzZWMxc3BsaXRIMi5saW5lcztcbiAgJChzZWMxTGluZXMyKS5hZGRDbGFzcygnaDJMaW5lcycpO1xuICAkKHNlYzFDaGFyczIpLmFkZENsYXNzKCdoMkNoYXJzIHNlYzFDaGFyczInKTtcbiAgJChzZWMxV29yZHMyKS5hZGRDbGFzcygnaDJXb3JkcyBzZWMxV29yZHMyJyk7XG5cbiAgbGV0IHNlYzFIMyA9IHNlYzEuZmluZCgnaDMnKTtcbiAgbGV0IHNlYzFzcGxpdEgzID0gbmV3IFNwbGl0VGV4dChzZWMxSDMsIHsgdHlwZTogXCJsaW5lcyx3b3JkcyxjaGFyc1wiIH0pO1xuICBsZXQgc2VjMUNoYXJzMyA9IHNlYzFzcGxpdEgzLmNoYXJzO1xuICBsZXQgc2VjMVdvcmRzMyA9IHNlYzFzcGxpdEgzLndvcmRzO1xuICAkKHNlYzFDaGFyczMpLmFkZENsYXNzKCdoM0NoYXJzIHNlYzFDaGFyczMnKTtcbiAgJChzZWMxV29yZHMzKS5hZGRDbGFzcygnaDNXb3JkcyBzZWMxV29yZHMzJyk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRUNUSU9OIDJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGxldCBzZWMyID0gJCgnI3NlY3Rpb24yJyk7XG4gIGxldCBzZWMySDIgPSBzZWMyLmZpbmQoJ2gyJyk7XG4gIGxldCBzZWMyc3BsaXRIMiA9IG5ldyBTcGxpdFRleHQoc2VjMkgyLCB7IHR5cGU6IFwibGluZXMsd29yZHNcIiB9KTtcbiAgLy8gbGV0IHNlYzJDaGFyczIgPSBzZWMyc3BsaXRIMi5jaGFycztcbiAgbGV0IHNlYzJXb3JkczIgPSBzZWMyc3BsaXRIMi53b3JkcztcbiAgbGV0IHNlYzJMaW5lczIgPSBzZWMyc3BsaXRIMi5saW5lcztcbiAgJChzZWMyTGluZXMyKS5hZGRDbGFzcygnaDJMaW5lcycpO1xuICAvLyAkKHNlYzJDaGFyczIpLmFkZENsYXNzKCdoMkNoYXJzIHNlYzJDaGFyczInKTtcbiAgJChzZWMyV29yZHMyKS5hZGRDbGFzcygnaDJXb3JkcyBzZWMyV29yZHMyJyk7XG4gIFxuICBsZXQgc2VjMlAgPSBzZWMyLmZpbmQoJy50ZXh0LWNvbnRhaW5lciBwJyk7XG4gIGxldCBzZWMyc3BsaXRQID0gbmV3IFNwbGl0VGV4dChzZWMyUCwgeyB0eXBlOiBcImxpbmVzXCIgfSk7XG4gIC8vIGxldCBzZWMyV29yZHNQID0gc2VjMnNwbGl0UC53b3JkcztcbiAgbGV0IHNlYzJMaW5lc1AgPSBzZWMyc3BsaXRQLmxpbmVzO1xuICAvLyAkKHNlYzJXb3Jkc1ApLmFkZENsYXNzKCdoM1dvcmRzIHNlYzJXb3Jkc1AnKTtcbiAgJChzZWMyTGluZXNQKS5hZGRDbGFzcygncExpbmVzIHNlYzJMaW5lc1AnKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFQ1RJT04gNFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbGV0IHNlYzQgPSAkKCcjc2VjdGlvbjQnKTtcbiAgbGV0IHNlYzRIMiA9IHNlYzQuZmluZCgnaDInKTtcbiAgbGV0IHNlYzRzcGxpdEgyID0gbmV3IFNwbGl0VGV4dChzZWM0SDIsIHsgdHlwZTogXCJsaW5lcyx3b3Jkc1wiIH0pO1xuICAvLyBsZXQgc2VjNENoYXJzMiA9IHNlYzRzcGxpdEgyLmNoYXJzO1xuICBsZXQgc2VjNFdvcmRzMiA9IHNlYzRzcGxpdEgyLndvcmRzO1xuICBsZXQgc2VjNExpbmVzMiA9IHNlYzRzcGxpdEgyLmxpbmVzO1xuICAkKHNlYzRMaW5lczIpLmFkZENsYXNzKCdoMkxpbmVzJyk7XG4gIC8vICQoc2VjNENoYXJzMikuYWRkQ2xhc3MoJ2gyQ2hhcnMgc2VjNENoYXJzMicpO1xuICAkKHNlYzRXb3JkczIpLmFkZENsYXNzKCdoMldvcmRzIHNlYzRXb3JkczInKTtcbiAgXG4gIGxldCBzZWM0UCA9IHNlYzQuZmluZCgnLnRleHQtY29udGFpbmVyIHAnKTtcbiAgbGV0IHNlYzRzcGxpdFAgPSBuZXcgU3BsaXRUZXh0KHNlYzRQLCB7IHR5cGU6IFwibGluZXNcIiB9KTtcbiAgLy8gbGV0IHNlYzRXb3Jkc1AgPSBzZWM0c3BsaXRQLndvcmRzO1xuICBsZXQgc2VjNExpbmVzUCA9IHNlYzRzcGxpdFAubGluZXM7XG4gIC8vICQoc2VjNFdvcmRzUCkuYWRkQ2xhc3MoJ2gzV29yZHMgc2VjNFdvcmRzUCcpO1xuICAkKHNlYzRMaW5lc1ApLmFkZENsYXNzKCdwTGluZXMgc2VjNExpbmVzUCcpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VDVElPTiA1XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgc2VjNSA9ICQoJyNzZWN0aW9uNScpO1xuICBsZXQgc2VjNUgyID0gc2VjNS5maW5kKCdoMicpO1xuICBsZXQgc2VjNXNwbGl0SDIgPSBuZXcgU3BsaXRUZXh0KHNlYzVIMiwgeyB0eXBlOiBcImxpbmVzLHdvcmRzXCIgfSk7XG4gIC8vIGxldCBzZWM1Q2hhcnMyID0gc2VjNXNwbGl0SDIuY2hhcnM7XG4gIGxldCBzZWM1V29yZHMyID0gc2VjNXNwbGl0SDIud29yZHM7XG4gIGxldCBzZWM1TGluZXMyID0gc2VjNXNwbGl0SDIubGluZXM7XG4gICQoc2VjNUxpbmVzMikuYWRkQ2xhc3MoJ2gyTGluZXMnKTtcbiAgLy8gJChzZWM1Q2hhcnMyKS5hZGRDbGFzcygnaDJDaGFycyBzZWM1Q2hhcnMyJyk7XG4gICQoc2VjNVdvcmRzMikuYWRkQ2xhc3MoJ2gyV29yZHMgc2VjNVdvcmRzMicpO1xuICBcbiAgbGV0IHNlYzVQID0gc2VjNS5maW5kKCcudGV4dC1jb250YWluZXIgcCcpO1xuICBsZXQgc2VjNXNwbGl0UCA9IG5ldyBTcGxpdFRleHQoc2VjNVAsIHsgdHlwZTogXCJsaW5lc1wiIH0pO1xuICAvLyBsZXQgc2VjNVdvcmRzUCA9IHNlYzVzcGxpdFAud29yZHM7XG4gIGxldCBzZWM1TGluZXNQID0gc2VjNXNwbGl0UC5saW5lcztcbiAgLy8gJChzZWM1V29yZHNQKS5hZGRDbGFzcygnaDNXb3JkcyBzZWM1V29yZHNQJyk7XG4gICQoc2VjNUxpbmVzUCkuYWRkQ2xhc3MoJ3BMaW5lcyBzZWM1TGluZXNQJyk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRUNUSU9OIDZcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGxldCBzZWM2ID0gJCgnI3NlY3Rpb242Jyk7XG4gIGxldCBzZWM2SDIgPSBzZWM2LmZpbmQoJ2gyJyk7XG4gIGxldCBzZWM2c3BsaXRIMiA9IG5ldyBTcGxpdFRleHQoc2VjNkgyLCB7IHR5cGU6IFwibGluZXMsd29yZHNcIiB9KTtcbiAgLy8gbGV0IHNlYzZDaGFyczIgPSBzZWM2c3BsaXRIMi5jaGFycztcbiAgbGV0IHNlYzZXb3JkczIgPSBzZWM2c3BsaXRIMi53b3JkcztcbiAgbGV0IHNlYzZMaW5lczIgPSBzZWM2c3BsaXRIMi5saW5lcztcbiAgJChzZWM2TGluZXMyKS5hZGRDbGFzcygnaDJMaW5lcycpO1xuICAvLyAkKHNlYzZDaGFyczIpLmFkZENsYXNzKCdoMkNoYXJzIHNlYzZDaGFyczInKTtcbiAgJChzZWM2V29yZHMyKS5hZGRDbGFzcygnaDJXb3JkcyBzZWM2V29yZHMyJyk7XG4gIFxuICBsZXQgc2VjNlAgPSBzZWM2LmZpbmQoJy50ZXh0LWNvbnRhaW5lciBwJyk7XG4gIGxldCBzZWM2c3BsaXRQID0gbmV3IFNwbGl0VGV4dChzZWM2UCwgeyB0eXBlOiBcImxpbmVzXCIgfSk7XG4gIC8vIGxldCBzZWM2V29yZHNQID0gc2VjNnNwbGl0UC53b3JkcztcbiAgbGV0IHNlYzZMaW5lc1AgPSBzZWM2c3BsaXRQLmxpbmVzO1xuICAvLyAkKHNlYzZXb3Jkc1ApLmFkZENsYXNzKCdoM1dvcmRzIHNlYzZXb3Jkc1AnKTtcbiAgJChzZWM2TGluZXNQKS5hZGRDbGFzcygncExpbmVzIHNlYzZMaW5lc1AnKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFQ1RJT04gN1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbGV0IHNlYzcgPSAkKCcjc2VjdGlvbjcnKTtcbiAgbGV0IHNlYzdIMiA9IHNlYzcuZmluZCgnaDInKTtcbiAgbGV0IHNlYzdzcGxpdEgyID0gbmV3IFNwbGl0VGV4dChzZWM3SDIsIHsgdHlwZTogXCJsaW5lcyx3b3Jkc1wiIH0pO1xuICAvLyBsZXQgc2VjN0NoYXJzMiA9IHNlYzdzcGxpdEgyLmNoYXJzO1xuICBsZXQgc2VjN1dvcmRzMiA9IHNlYzdzcGxpdEgyLndvcmRzO1xuICBsZXQgc2VjN0xpbmVzMiA9IHNlYzdzcGxpdEgyLmxpbmVzO1xuICAkKHNlYzdMaW5lczIpLmFkZENsYXNzKCdoMkxpbmVzJyk7XG4gIC8vICQoc2VjN0NoYXJzMikuYWRkQ2xhc3MoJ2gyQ2hhcnMnKTtcbiAgJChzZWM3V29yZHMyKS5hZGRDbGFzcygnaDJXb3JkcycpO1xuICBcbiAgbGV0IHNlYzdQID0gc2VjNy5maW5kKCcudGV4dC1jb250YWluZXIgcCcpO1xuICBsZXQgc2VjN3NwbGl0UCA9IG5ldyBTcGxpdFRleHQoc2VjN1AsIHsgdHlwZTogXCJsaW5lc1wiIH0pO1xuICAvLyBsZXQgc2VjN1dvcmRzUCA9IHNlYzdzcGxpdFAud29yZHM7XG4gIGxldCBzZWM3TGluZXNQID0gc2VjN3NwbGl0UC5saW5lcztcbiAgLy8gJChzZWM3V29yZHNQKS5hZGRDbGFzcygnaDNXb3JkcyBzZWM3V29yZHNQJyk7XG4gICQoc2VjN0xpbmVzUCkuYWRkQ2xhc3MoJ3BMaW5lcyBzZWM3TGluZXNQJyk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRUNUSU9OIDhcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGxldCBzZWM4ID0gJCgnI3NlY3Rpb244Jyk7XG4gIGxldCBzZWM4SDIgPSBzZWM4LmZpbmQoJ2gyJyk7XG4gIGxldCBzZWM4c3BsaXRIMiA9IG5ldyBTcGxpdFRleHQoc2VjOEgyLCB7IHR5cGU6IFwibGluZXMsd29yZHNcIiB9KTtcbiAgLy8gbGV0IHNlYzhDaGFyczIgPSBzZWM4c3BsaXRIMi5jaGFycztcbiAgbGV0IHNlYzhXb3JkczIgPSBzZWM4c3BsaXRIMi53b3JkcztcbiAgbGV0IHNlYzhMaW5lczIgPSBzZWM4c3BsaXRIMi5saW5lcztcbiAgJChzZWM4TGluZXMyKS5hZGRDbGFzcygnaDJMaW5lcycpO1xuICAvLyAkKHNlYzhDaGFyczIpLmFkZENsYXNzKCdoMkNoYXJzJyk7XG4gICQoc2VjOFdvcmRzMikuYWRkQ2xhc3MoJ2gyV29yZHMnKTtcbiAgXG4gIGxldCBzZWM4UCA9IHNlYzguZmluZCgnLnRleHQtY29udGFpbmVyIHAnKTtcbiAgbGV0IHNlYzhzcGxpdFAgPSBuZXcgU3BsaXRUZXh0KHNlYzhQLCB7IHR5cGU6IFwibGluZXNcIiB9KTtcbiAgLy8gbGV0IHNlYzhXb3Jkc1AgPSBzZWM4c3BsaXRQLndvcmRzO1xuICBsZXQgc2VjOExpbmVzUCA9IHNlYzhzcGxpdFAubGluZXM7XG4gIC8vICQoc2VjOFdvcmRzUCkuYWRkQ2xhc3MoJ2gzV29yZHMgc2VjOFdvcmRzUCcpO1xuICAkKHNlYzhMaW5lc1ApLmFkZENsYXNzKCdwTGluZXMgc2VjOExpbmVzUCcpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VUVVAgRUxFTUVOVFNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIGdzYXAuc2V0KCcuaDJDaGFycycsIHt5OicxLjFlbSd9KTtcbn0iLCJpbXBvcnQgeyBcbiAgYW5pbWF0ZVNlY3Rpb24sXG59IGZyb20gJy4vaW5kZXguanMnO1xuXG5leHBvcnQgbGV0IHByZUxvYWRlciA9ICgpID0+IHtcbiAgbGV0IHRsID0gbmV3IGdzYXAudGltZWxpbmUoe1xuICAgIGRlZmF1bHRzOntcbiAgICAgIGR1cmF0aW9uOjAuNSxcbiAgICB9LFxuICAgIFxuICAgIC8vIGVhc2U6J3Bvd2VyNC5vdXQnLFxuICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBhbGVydCgnb3V0Jyk7XG4gICAgICAkKCcjcHJlbG9hZGVyJykucmVtb3ZlKCk7XG4gICAgfVxuICB9KVxuICB0bC50bygnLnByZWxvYWRlclNWRycsIHtzY2FsZTowfSxcImxvYWRPdXRcIik7XG5cdHRsLnRvKCcjcHJlbG9hZGVyJywge29wYWNpdHk6MCxkdXJhdGlvbjowLjN9LFwibG9hZE91dDJcIik7XG59XG5cbmV4cG9ydCBsZXQgdmlkTGlua3M9ICgpID0+IHtcblx0bGV0IHRoaXNTcmMgPSAkKCcuaWZyYW1lSG9sZGVyJykuYXR0cignZGF0YS1kZXNrdG9wLXZpZCcpO1xuICAvLyBjb25zb2xlLmxvZyh0aGlzU3JjKTtcbiAgJCgnLmlmcmFtZUVtcHR5JykuYXR0cignc3JjJywgJ2h0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8nK3RoaXNTcmMrJz9oPTI1ZjMzNGU5NTYmdGl0bGU9MCZieWxpbmU9MCZwb3J0cmFpdD0wJykgXG59XG5cbmV4cG9ydCBsZXQgbW9iaWxlVmlkTGlua3M9ICgpID0+IHtcblx0bGV0IHRoaXNTcmMgPSAkKCcuaWZyYW1lSG9sZGVyJykuYXR0cignZGF0YS1tb2JpbGUtdmlkJyk7XG4gIC8vIGNvbnNvbGUubG9nKHRoaXNTcmMpO1xuICAkKCcuaWZyYW1lRW1wdHknKS5hdHRyKCdzcmMnLCAnaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLycrdGhpc1NyYysnP2g9MjVmMzM0ZTk1NiZ0aXRsZT0wJmJ5bGluZT0wJnBvcnRyYWl0PTAnKSBcbn1cblxuZXhwb3J0IGxldCBzbW9vdGhTY3JvbGxpbmcgPSAodGhlTGluaykgPT4ge1xuICBcbiAgbGV0IHRhcmdldCA9ICQodGhlTGluaykuYXR0cignaHJlZicpO1xuICBsZXQgaGVhZGVySGVpZ2h0ID0gJCgnLmhlYWRlcicpLm91dGVySGVpZ2h0KCk7IFxuICBnc2FwLnRvKHdpbmRvdywge2R1cmF0aW9uOi41LCBlYXNlOiAnY2lyYy5vdXQnLCBcbiAgICBzY3JvbGxUbzp7XG4gICAgICB5OnRhcmdldCwgXG4gICAgICAvLyBBY3RpdmF0ZSBpZiBIZWFkZXIgSXMgRml4ZWRcbiAgICAgIC8vIG9mZnNldFk6aGVhZGVySGVpZ2h0XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgbGV0IG1vYmlsZU5hdlNldHVwID0gKCkgPT4ge1xuICBnc2FwLnNldCgnbmF2IGEnLCB7b3BhY2l0eTowLCB4Oic1MCUnfSk7XG59XG4iLCJleHBvcnQgbGV0IHNlY3Rpb25zU2V0dXAgPSAoKSA9PiB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBNRUFTVVJJTkcgVkFSU1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbGV0IHRvdGFsU2VjdGlvbnMgPSAkKFwic2VjdGlvblwiKS5sZW5ndGg7XG4gIGxldCB0b3RhbEJ1enpPbiA9ICQoXCIuYnV6ek9uQmVlc0Jsb2NrXCIpLmxlbmd0aDtcbiAgbGV0IHdpbmRvd0hlaWdodCA9IE1hdGgucm91bmQod2luZG93LmlubmVySGVpZ2h0KTtcbiAgaWYgKHNjcmVlbi53aWR0aCA8PSAxMDI0KSB7XG4gICAgdmFyIG15U2Nyb2xsSGVpZ2h0ID0gd2luZG93SGVpZ2h0ICogMS41O1xuICB9IGVsc2Uge1xuICAgIHZhciBteVNjcm9sbEhlaWdodCA9IHdpbmRvd0hlaWdodCAvIDI7XG4gIH1cbiAgbGV0IGZ1bGxIZWlnaHQgPVxuICAgIG15U2Nyb2xsSGVpZ2h0ICogKHRvdGFsU2VjdGlvbnMgKyB0b3RhbEJ1enpPbikgKyB3aW5kb3dIZWlnaHQgLSAxO1xuICBsZXQgYnV6ekJsb2NrID0gJChcIi5idXp6T25CZWVzQmxvY2tcIik7XG4gIGxldCBidXp6V2lkdGggPSBidXp6QmxvY2sub3V0ZXJXaWR0aCgpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gR0xPQkFMXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTZXQgT3ZlcmFsbCBTY3JvbGwgSGVpZ2h0XG4gIGdzYXAuc2V0KFwiLmhvbWUtcGFnZVwiLCB7IGhlaWdodDogZnVsbEhlaWdodCB9KTtcbiAgZ3NhcC5zZXQoZG9jdW1lbnQuYm9keSwgeyBvdmVyZmxvdzogXCJoaWRkZW5cIiB9KTtcbiAgLy8gSGlkZSBBbGwgTGluZXNcbiAgZ3NhcC5zZXQoJChcIi5ob21lLXBhZ2VcIikuZmluZChcInBhdGhcIiksIHsgZHJhd1NWRzogXCI1MCUgNTAlXCIgfSk7XG4gIGdzYXAuc2V0KCQoXCIuaG9tZS1wYWdlXCIpLmZpbmQoXCJwb2x5bGluZVwiKSwgeyBkcmF3U1ZHOiBcIjUwJSA1MCVcIiB9KTtcbiAgZ3NhcC5zZXQoJChcIi5ob21lLXBhZ2VcIikuZmluZChcImxpbmVcIiksIHsgZHJhd1NWRzogXCI1MCUgNTAlXCIgfSk7XG4gIGdzYXAuc2V0KCQoXCIuaG9tZS1wYWdlXCIpLmZpbmQoXCIjZG93bi1hcnJvdyBsaW5lXCIpLCB7IGRyYXdTVkc6IFwiMTAwJSAxMDAlXCIgfSk7XG4gIC8vIFNldCAxc3QgQmFja2dyb3VuZCBJbWFnZSBhcyBWaXNpYmxlXG4gIGdzYXAuc2V0KFwiI2JhY2tncm91bmQxXCIsIHsgb3BhY2l0eTogMSwgekluZGV4OiAxMDEgfSk7XG4gIC8vIFNldCBCdXp6IE9uIEJlZXMgdG8gSGlkZGVuXG4gIGdzYXAuc2V0KGJ1enpCbG9jaywgeyB4OiBidXp6V2lkdGggfSk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRUNUSU9OIDFcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGxldCBzZWMxID0gJChcIiNzZWN0aW9uMVwiKTtcbiAgbGV0IHNlYzFIMiA9IHNlYzEuZmluZChcImgyXCIpO1xuICBsZXQgc2VjMXNwbGl0SDIgPSBuZXcgU3BsaXRUZXh0KHNlYzFIMiwgeyB0eXBlOiBcImxpbmVzLHdvcmRzLGNoYXJzXCIgfSk7XG4gIGxldCBzZWMxQ2hhcnMyID0gc2VjMXNwbGl0SDIuY2hhcnM7XG4gIGxldCBzZWMxV29yZHMyID0gc2VjMXNwbGl0SDIud29yZHM7XG4gIGxldCBzZWMxTGluZXMyID0gc2VjMXNwbGl0SDIubGluZXM7XG4gICQoc2VjMUxpbmVzMikuYWRkQ2xhc3MoXCJoMkxpbmVzXCIpO1xuICAkKHNlYzFDaGFyczIpLmFkZENsYXNzKFwiaDJDaGFycyBzZWMxQ2hhcnMyXCIpO1xuICAkKHNlYzFXb3JkczIpLmFkZENsYXNzKFwiaDJXb3JkcyBzZWMxV29yZHMyXCIpO1xuXG4gIGxldCBzZWMxSDMgPSBzZWMxLmZpbmQoXCJoM1wiKTtcbiAgbGV0IHNlYzFzcGxpdEgzID0gbmV3IFNwbGl0VGV4dChzZWMxSDMsIHsgdHlwZTogXCJsaW5lcyx3b3JkcyxjaGFyc1wiIH0pO1xuICBsZXQgc2VjMUNoYXJzMyA9IHNlYzFzcGxpdEgzLmNoYXJzO1xuICBsZXQgc2VjMVdvcmRzMyA9IHNlYzFzcGxpdEgzLndvcmRzO1xuICAkKHNlYzFDaGFyczMpLmFkZENsYXNzKFwiaDNDaGFycyBzZWMxQ2hhcnMzXCIpO1xuICAkKHNlYzFXb3JkczMpLmFkZENsYXNzKFwiaDNXb3JkcyBzZWMxV29yZHMzXCIpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VDVElPTiAyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgc2VjMiA9ICQoXCIjc2VjdGlvbjJcIik7XG4gIGxldCBzZWMySDIgPSBzZWMyLmZpbmQoXCJoMlwiKTtcbiAgbGV0IHNlYzJzcGxpdEgyID0gbmV3IFNwbGl0VGV4dChzZWMySDIsIHsgdHlwZTogXCJsaW5lcyx3b3JkcyxjaGFyc1wiIH0pO1xuICBsZXQgc2VjMkNoYXJzMiA9IHNlYzJzcGxpdEgyLmNoYXJzO1xuICBsZXQgc2VjMldvcmRzMiA9IHNlYzJzcGxpdEgyLndvcmRzO1xuICBsZXQgc2VjMkxpbmVzMiA9IHNlYzJzcGxpdEgyLmxpbmVzO1xuICAkKHNlYzJMaW5lczIpLmFkZENsYXNzKFwiaDJMaW5lc1wiKTtcbiAgJChzZWMyQ2hhcnMyKS5hZGRDbGFzcyhcImgyQ2hhcnMgc2VjMkNoYXJzMlwiKTtcbiAgJChzZWMyV29yZHMyKS5hZGRDbGFzcyhcImgyV29yZHMgc2VjMldvcmRzMlwiKTtcblxuICBsZXQgc2VjMlAgPSBzZWMyLmZpbmQoXCIudGV4dC1jb250YWluZXIgcFwiKTtcbiAgbGV0IHNlYzJzcGxpdFAgPSBuZXcgU3BsaXRUZXh0KHNlYzJQLCB7IHR5cGU6IFwibGluZXNcIiB9KTtcbiAgLy8gbGV0IHNlYzJXb3Jkc1AgPSBzZWMyc3BsaXRQLndvcmRzO1xuICBsZXQgc2VjMkxpbmVzUCA9IHNlYzJzcGxpdFAubGluZXM7XG4gIC8vICQoc2VjMldvcmRzUCkuYWRkQ2xhc3MoJ2gzV29yZHMgc2VjMldvcmRzUCcpO1xuICAkKHNlYzJMaW5lc1ApLmFkZENsYXNzKFwicExpbmVzIHNlYzJMaW5lc1BcIik7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRUNUSU9OIDRcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGxldCBzZWM0ID0gJChcIiNzZWN0aW9uNFwiKTtcbiAgbGV0IHNlYzRIMiA9IHNlYzQuZmluZChcImgyXCIpO1xuICBsZXQgc2VjNHNwbGl0SDIgPSBuZXcgU3BsaXRUZXh0KHNlYzRIMiwgeyB0eXBlOiBcImxpbmVzLHdvcmRzLGNoYXJzXCIgfSk7XG4gIGxldCBzZWM0Q2hhcnMyID0gc2VjNHNwbGl0SDIuY2hhcnM7XG4gIGxldCBzZWM0V29yZHMyID0gc2VjNHNwbGl0SDIud29yZHM7XG4gIGxldCBzZWM0TGluZXMyID0gc2VjNHNwbGl0SDIubGluZXM7XG4gICQoc2VjNExpbmVzMikuYWRkQ2xhc3MoXCJoMkxpbmVzXCIpO1xuICAkKHNlYzRDaGFyczIpLmFkZENsYXNzKFwiaDJDaGFycyBzZWM0Q2hhcnMyXCIpO1xuICAkKHNlYzRXb3JkczIpLmFkZENsYXNzKFwiaDJXb3JkcyBzZWM0V29yZHMyXCIpO1xuXG4gIGxldCBzZWM0UCA9IHNlYzQuZmluZChcIi50ZXh0LWNvbnRhaW5lciBwXCIpO1xuICBsZXQgc2VjNHNwbGl0UCA9IG5ldyBTcGxpdFRleHQoc2VjNFAsIHsgdHlwZTogXCJsaW5lc1wiIH0pO1xuICAvLyBsZXQgc2VjNFdvcmRzUCA9IHNlYzRzcGxpdFAud29yZHM7XG4gIGxldCBzZWM0TGluZXNQID0gc2VjNHNwbGl0UC5saW5lcztcbiAgLy8gJChzZWM0V29yZHNQKS5hZGRDbGFzcygnaDNXb3JkcyBzZWM0V29yZHNQJyk7XG4gICQoc2VjNExpbmVzUCkuYWRkQ2xhc3MoXCJwTGluZXMgc2VjNExpbmVzUFwiKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFQ1RJT04gNVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbGV0IHNlYzUgPSAkKFwiI3NlY3Rpb241XCIpO1xuICBsZXQgc2VjNUgyID0gc2VjNS5maW5kKFwiaDJcIik7XG4gIGxldCBzZWM1c3BsaXRIMiA9IG5ldyBTcGxpdFRleHQoc2VjNUgyLCB7IHR5cGU6IFwibGluZXMsd29yZHMsY2hhcnNcIiB9KTtcbiAgbGV0IHNlYzVDaGFyczIgPSBzZWM1c3BsaXRIMi5jaGFycztcbiAgbGV0IHNlYzVXb3JkczIgPSBzZWM1c3BsaXRIMi53b3JkcztcbiAgbGV0IHNlYzVMaW5lczIgPSBzZWM1c3BsaXRIMi5saW5lcztcbiAgJChzZWM1TGluZXMyKS5hZGRDbGFzcyhcImgyTGluZXNcIik7XG4gICQoc2VjNUNoYXJzMikuYWRkQ2xhc3MoXCJoMkNoYXJzIHNlYzVDaGFyczJcIik7XG4gICQoc2VjNVdvcmRzMikuYWRkQ2xhc3MoXCJoMldvcmRzIHNlYzVXb3JkczJcIik7XG5cbiAgbGV0IHNlYzVQID0gc2VjNS5maW5kKFwiLnRleHQtY29udGFpbmVyIHBcIik7XG4gIGxldCBzZWM1c3BsaXRQID0gbmV3IFNwbGl0VGV4dChzZWM1UCwgeyB0eXBlOiBcImxpbmVzXCIgfSk7XG4gIC8vIGxldCBzZWM1V29yZHNQID0gc2VjNXNwbGl0UC53b3JkcztcbiAgbGV0IHNlYzVMaW5lc1AgPSBzZWM1c3BsaXRQLmxpbmVzO1xuICAvLyAkKHNlYzVXb3Jkc1ApLmFkZENsYXNzKCdoM1dvcmRzIHNlYzVXb3Jkc1AnKTtcbiAgJChzZWM1TGluZXNQKS5hZGRDbGFzcyhcInBMaW5lcyBzZWM1TGluZXNQXCIpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VDVElPTiA2XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgc2VjNiA9ICQoXCIjc2VjdGlvbjZcIik7XG4gIGxldCBzZWM2SDIgPSBzZWM2LmZpbmQoXCJoMlwiKTtcbiAgbGV0IHNlYzZzcGxpdEgyID0gbmV3IFNwbGl0VGV4dChzZWM2SDIsIHsgdHlwZTogXCJsaW5lcyx3b3JkcyxjaGFyc1wiIH0pO1xuICBsZXQgc2VjNkNoYXJzMiA9IHNlYzZzcGxpdEgyLmNoYXJzO1xuICBsZXQgc2VjNldvcmRzMiA9IHNlYzZzcGxpdEgyLndvcmRzO1xuICBsZXQgc2VjNkxpbmVzMiA9IHNlYzZzcGxpdEgyLmxpbmVzO1xuICAkKHNlYzZMaW5lczIpLmFkZENsYXNzKFwiaDJMaW5lc1wiKTtcbiAgJChzZWM2Q2hhcnMyKS5hZGRDbGFzcyhcImgyQ2hhcnMgc2VjNkNoYXJzMlwiKTtcbiAgJChzZWM2V29yZHMyKS5hZGRDbGFzcyhcImgyV29yZHMgc2VjNldvcmRzMlwiKTtcblxuICBsZXQgc2VjNlAgPSBzZWM2LmZpbmQoXCIudGV4dC1jb250YWluZXIgcFwiKTtcbiAgbGV0IHNlYzZzcGxpdFAgPSBuZXcgU3BsaXRUZXh0KHNlYzZQLCB7IHR5cGU6IFwibGluZXNcIiB9KTtcbiAgLy8gbGV0IHNlYzZXb3Jkc1AgPSBzZWM2c3BsaXRQLndvcmRzO1xuICBsZXQgc2VjNkxpbmVzUCA9IHNlYzZzcGxpdFAubGluZXM7XG4gIC8vICQoc2VjNldvcmRzUCkuYWRkQ2xhc3MoJ2gzV29yZHMgc2VjNldvcmRzUCcpO1xuICAkKHNlYzZMaW5lc1ApLmFkZENsYXNzKFwicExpbmVzIHNlYzZMaW5lc1BcIik7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRUNUSU9OIDdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIGxldCBzZWM3ID0gJCgnI3NlY3Rpb243Jyk7XG4gIC8vIGxldCBzZWM3SDIgPSBzZWM3LmZpbmQoJ2gyJyk7XG4gIC8vIGxldCBzZWM3c3BsaXRIMiA9IG5ldyBTcGxpdFRleHQoc2VjN0gyLCB7IHR5cGU6IFwibGluZXMsd29yZHMsY2hhcnNcIiB9KTtcbiAgLy8gbGV0IHNlYzdDaGFyczIgPSBzZWM3c3BsaXRIMi5jaGFycztcbiAgLy8gbGV0IHNlYzdXb3JkczIgPSBzZWM3c3BsaXRIMi53b3JkcztcbiAgLy8gbGV0IHNlYzdMaW5lczIgPSBzZWM3c3BsaXRIMi5saW5lcztcbiAgLy8gJChzZWM3TGluZXMyKS5hZGRDbGFzcygnaDJMaW5lcycpO1xuICAvLyAkKHNlYzdDaGFyczIpLmFkZENsYXNzKCdoMkNoYXJzJyk7XG4gIC8vICQoc2VjN1dvcmRzMikuYWRkQ2xhc3MoJ2gyV29yZHMnKTtcblxuICAvLyBsZXQgc2VjN1AgPSBzZWM3LmZpbmQoJy50ZXh0LWNvbnRhaW5lciBwJyk7XG4gIC8vIGxldCBzZWM3c3BsaXRQID0gbmV3IFNwbGl0VGV4dChzZWM3UCwgeyB0eXBlOiBcImxpbmVzXCIgfSk7XG4gIC8vIC8vIGxldCBzZWM3V29yZHNQID0gc2VjN3NwbGl0UC53b3JkcztcbiAgLy8gbGV0IHNlYzdMaW5lc1AgPSBzZWM3c3BsaXRQLmxpbmVzO1xuICAvLyAvLyAkKHNlYzdXb3Jkc1ApLmFkZENsYXNzKCdoM1dvcmRzIHNlYzdXb3Jkc1AnKTtcbiAgLy8gJChzZWM3TGluZXNQKS5hZGRDbGFzcygncExpbmVzIHNlYzdMaW5lc1AnKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFQ1RJT04gOFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gbGV0IHNlYzggPSAkKCcjc2VjdGlvbjgnKTtcbiAgLy8gbGV0IHNlYzhIMiA9IHNlYzguZmluZCgnaDInKTtcbiAgLy8gbGV0IHNlYzhzcGxpdEgyID0gbmV3IFNwbGl0VGV4dChzZWM4SDIsIHsgdHlwZTogXCJsaW5lcyx3b3JkcyxjaGFyc1wiIH0pO1xuICAvLyBsZXQgc2VjOENoYXJzMiA9IHNlYzhzcGxpdEgyLmNoYXJzO1xuICAvLyBsZXQgc2VjOFdvcmRzMiA9IHNlYzhzcGxpdEgyLndvcmRzO1xuICAvLyBsZXQgc2VjOExpbmVzMiA9IHNlYzhzcGxpdEgyLmxpbmVzO1xuICAvLyAkKHNlYzhMaW5lczIpLmFkZENsYXNzKCdoMkxpbmVzJyk7XG4gIC8vICQoc2VjOENoYXJzMikuYWRkQ2xhc3MoJ2gyQ2hhcnMnKTtcbiAgLy8gJChzZWM4V29yZHMyKS5hZGRDbGFzcygnaDJXb3JkcycpO1xuXG4gIC8vIGxldCBzZWM4UCA9IHNlYzguZmluZCgnLnRleHQtY29udGFpbmVyIHAnKTtcbiAgLy8gbGV0IHNlYzhzcGxpdFAgPSBuZXcgU3BsaXRUZXh0KHNlYzhQLCB7IHR5cGU6IFwibGluZXNcIiB9KTtcbiAgLy8gLy8gbGV0IHNlYzhXb3Jkc1AgPSBzZWM4c3BsaXRQLndvcmRzO1xuICAvLyBsZXQgc2VjOExpbmVzUCA9IHNlYzhzcGxpdFAubGluZXM7XG4gIC8vIC8vICQoc2VjOFdvcmRzUCkuYWRkQ2xhc3MoJ2gzV29yZHMgc2VjOFdvcmRzUCcpO1xuICAvLyAkKHNlYzhMaW5lc1ApLmFkZENsYXNzKCdwTGluZXMgc2VjOExpbmVzUCcpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VUVVAgRUxFTUVOVFNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIGdzYXAuc2V0KCcuaDJDaGFycycsIHt5OicxLjFlbSd9KTtcbn07XG4iLCJpbXBvcnQgeyBcbiAgcHJlTG9hZGVyLFxuICB2aWRMaW5rcyxcbiAgbW9iaWxlVmlkTGlua3MsXG4gIGdzYXBSZWdpc3RlcnMsXG4gIGNsaWNrRXZlbnRzLFxuICBtb2JpbGVOYXZTZXR1cCxcbiAgYW5pbWF0ZVNlY3Rpb24sXG4gIHNlY3Rpb25zU2V0dXAsXG4gIG1vYmlsZUFuaW1hdGVTZWN0aW9uLFxuICBtb2JpbGVTZWN0aW9uc1NldHVwXG59IGZyb20gJy4vaW5kZXguanMnO1xuIFxuXG4vLyAkKHdpbmRvdykub24oJ2JlZm9yZXVubG9hZCcsIGZ1bmN0aW9uKCkge1xuLy8gICAkKHdpbmRvdykuc2Nyb2xsVG9wKDApO1xuLy8gfSk7XG5cbndpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgIHByZUxvYWRlcigpO1xuICAgIGdzYXBSZWdpc3RlcnMoKTtcbiAgICBcbiAgICBpZiAoc2NyZWVuLndpZHRoIDw9IDEwMjQpe1xuICAgICAgbW9iaWxlU2VjdGlvbnNTZXR1cCgpO1xuICAgICAgbW9iaWxlVmlkTGlua3MoKTtcbiAgICAgIG1vYmlsZUFuaW1hdGVTZWN0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlY3Rpb25zU2V0dXAoKTtcbiAgICAgIHZpZExpbmtzKCk7XG4gICAgICBhbmltYXRlU2VjdGlvbigpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBcbiAgICAgIFxuICAgICAgXG59KVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XG5cbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=