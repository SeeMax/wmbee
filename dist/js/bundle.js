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
      }); // let arrowTL = gsap.timeline({
      //   defaults: {
      //     duration: 0.15,
      //     ease: "none",
      //   },
      //   onComplete: function () {
      //     // Bounce The Down Arrow
      //     gsap
      //       .timeline({ repeat: -1, yoyo: true })
      //       .to(downArrow, { y: -4, duration: 1, ease: "none" });
      //   },
      //   onReverseComplete: function () {
      //     // Stop Bouncin The Down Arrow and Reset it's Y position
      //     gsap.killTweensOf(downArrow);
      //     gsap.set(downArrow, { y: 0 });
      //   },
      // });
      // Set background z-index by section number / Section 2 has no back / Section 3 is z-index 110 to stay above all

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
      // arrowTL.fromTo(
      //   bottomSmall,
      //   { drawSVG: "50% 50%" },
      //   { drawSVG: "0% 100%", duration: 0.4 },
      //   "scrollIn"
      // );
      // arrowTL.fromTo(
      //   sectionText,
      //   { y: -6, opacity: 0 },
      //   { y: 0, opacity: 1 },
      //   "scrollIn+=0.15"
      // );
      // arrowTL.fromTo(
      //   downArrowLine,
      //   { drawSVG: "100% 100%" },
      //   { drawSVG: "100% 0%" },
      //   "scrollIn+=0.175"
      // );
      // arrowTL.fromTo(
      //   downArrowPoint,
      //   { drawSVG: "50% 50%" },
      //   { drawSVG: "100% 0%" },
      //   "scrollIn+=0.325"
      // );
      // Build Master TLTL

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
      tl.add(contentTL, "scrollInAll+=0.6"); // tl.add(arrowTL, "scrollInAll+=0.8");

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
          sectionAnim["sectionAnim" + myCount]().play(); // alert(myCount + " section entered");
        }
      },
      onLeave: function onLeave() {
        if (myCount < 5) {
          gsap.set(document.body, {
            overflow: "hidden"
          });
          sectionAnim["sectionAnim" + myCount]().reverse(0); // alert(myCount + " section left");
        }
      },
      onEnterBack: function onEnterBack() {
        if (myCount < 5) {
          gsap.set(document.body, {
            overflow: "hidden"
          });
          sectionAnim["sectionAnim" + myCount]().play(); // alert(myCount + " section back again");
        }
      },
      onLeaveBack: function onLeaveBack() {
        if (myCount > 1) {
          gsap.set(document.body, {
            overflow: "hidden"
          });
          sectionAnim["sectionAnim" + myCount]().reverse(0); // alert(myCount + " section left again");
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
      var thisSec = "#section1";
      var thisOverlay = $("#overlay1");
      var sectionLines = $(thisSec).find(".single-backline");
      var secArrow = $(thisSec).find(".down-arrow-svg");
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
      var thisSec = $("#section2");
      var thisBack = $("#background1");
      var thisOverlay = $("#overlay1");
      var lines = $(".single-backline");
      var sectionLines = thisSec.find(".single-backline");
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
    // sectionAnim3: () => {
    //   let thisSec = $("#section3");
    //   let thisBack = $("#background3");
    //   let sectionLines = thisSec.find(".single-backline");
    //   let center4L = $(thisSec).find("#center-4L");
    //   let center4R = $(thisSec).find("#center-4R");
    //   let center3L = $(thisSec).find("#center-3L");
    //   let center3R = $(thisSec).find("#center-3R");
    //   let center2L = $(thisSec).find("#center-2L");
    //   let center2R = $(thisSec).find("#center-2R");
    //   let bottomSmall = $(thisSec).find("#bottom-small");
    //   let tl = gsap.timeline({
    //     paused: true,
    //     defaults: {
    //       duration: 0.5,
    //       ease: "none",
    //     },
    //     onComplete: function () {
    //       // gsap.set('#background1', {opacity:0});
    //     },
    //     // onReverseComplete:function() {
    //     //   // setTimeout(() => {
    //     //     // gsap.set('body', {touchAction:'auto'});
    //     //     // gsap.set('body', {overflow:'auto'});,
    //     //   // }, 1000);
    //     //   gsap.set('#background1', {opacity:1});
    //     // },
    //   });
    //   tl.fromTo(".videoArea", { opacity: 0 }, { opacity: 1 }, "scrollInAll");
    //   tl.fromTo(center4L, { opacity: 0 }, { opacity: 1 }, "scrollInAll");
    //   tl.fromTo(center4R, { opacity: 0 }, { opacity: 1 }, "scrollInAll");
    //   tl.fromTo(center3L, { opacity: 0 }, { opacity: 1 }, "scrollInAll");
    //   tl.fromTo(center3R, { opacity: 0 }, { opacity: 1 }, "scrollInAll");
    //   tl.fromTo(center2L, { opacity: 0 }, { opacity: 1 }, "scrollInAll");
    //   tl.fromTo(center2R, { opacity: 0 }, { opacity: 1 }, "scrollInAll");
    //   tl.fromTo(bottomSmall, { opacity: 0 }, { opacity: 1 }, "scrollInAll");
    //   tl.fromTo(thisBack, { opacity: 0 }, { opacity: 1 }, "scrollInAll");
    //   tl.fromTo(sectionLines, { opacity: 0 }, { opacity: 1 }, "scrollInAll");
    //   tl.fromTo(sectionLines, { opacity: 0 }, { opacity: 1 }, "scrollInAll");
    //   return tl;
    // },
    sectionAnim3: function sectionAnim3() {
      var thisSec = $("#section4");
      var thisBack = $("#background4"); // let sectionLines = thisSec.find('.single-backline')

      var soloCenter2 = $(thisSec).find("#solo-center-2");
      var soloCenter1 = $(thisSec).find("#solo-center-1");
      var bottomSmall = $(thisSec).find("#bottom-small");
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
    sectionAnim4: function sectionAnim4() {
      var thisSec = $("#section5");
      var thisBack = $("#background5");
      var thisOverlay = $("#overlay5");
      var sectionLines = thisSec.find(".single-backline");
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
    sectionAnim5: function sectionAnim5() {
      var thisSec = $("#section6");
      var thisBack = $("#background6");
      var thisOverlay = $("#overlay6");
      var sectionLines = thisSec.find(".single-backline");
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
    } //   sectionAnim6: () => {
    //     let thisSec = $("#section7");
    //     let thisBack = $("#background7");
    //     let thisOverlay = $("#overlay7");
    //     let sectionLines = thisSec.find(".single-backline");
    //     let secArrow = $("#section1").find(".down-arrow-svg");
    //     let tl = gsap.timeline({
    //       paused: true,
    //       defaults: {
    //         duration: 0.5,
    //         ease: "none",
    //       },
    //     });
    //     tl.fromTo(thisOverlay, { opacity: 0 }, { opacity: 0.9 }, "scrollInAll");
    //     tl.fromTo(thisBack, { opacity: 0 }, { opacity: 1 }, "scrollInAll");
    //     tl.fromTo(sectionLines, { opacity: 0 }, { opacity: 0.5 }, "scrollInAll");
    //     tl.fromTo(secArrow, { opacity: 1 }, { opacity: 0 }, "scrollInAll");
    //     return tl;
    //   },

  };
  sectionAnim["sectionAnim1"]().play(); // Fire An Animation From Above for Each Section

  var sectionTrig = function sectionTrig(myCount) {
    if (myCount <= 2) {
      var startHeight = myCount;
    } else {
      var startHeight = myCount + 1;
    }

    ScrollTrigger.create({
      trigger: "#section" + startHeight,
      start: "top bottom",
      end: "bottom bottom",
      // scrub:1,
      onEnter: function onEnter() {
        if (myCount > 1) {
          // alert(myCount);
          // gsap.set('body', {touchAction:'none'});
          // gsap.set('body', {overflow:'hidden'});
          sectionAnim["sectionAnim" + myCount]().play();
        }
      },
      onLeave: function onLeave() {
        if (myCount < 5) {
          // gsap.set('body', {touchAction:'none'});
          sectionAnim["sectionAnim" + myCount]().reverse(0);
        }
      },
      onEnterBack: function onEnterBack() {
        if (myCount < 5) {
          // gsap.set('body', {touchAction:'none'});
          sectionAnim["sectionAnim" + myCount]().play();
        }
      },
      onLeaveBack: function onLeaveBack() {
        if (myCount > 1) {
          // gsap.set('body', {touchAction:'none'});
          sectionAnim["sectionAnim" + myCount]().reverse(0);
        }
      }
    });
  }; // Animation triggers are calculated in the function


  var i = 1;
  $("section").each(function () {
    sectionTrig(i);
    i++;
  }); // sectionTrig(2);

  var windowHeight = Math.round(window.innerHeight); // Single Buzz on Bees Sections
  // Buzz Animation 5

  var buzzIn4 = function buzzIn4() {
    var buzzBlock = $("#section4").find(".buzzOnBeesBlock");
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
      trigger: "#section4",
      start: "top top-=" + windowHeight / 2,
      end: "bottom bottom",
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
    var buzzBlock = $("#section5").find(".buzzOnBeesBlock");
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
      trigger: "#section5",
      start: "top top-=" + windowHeight / 2,
      end: "bottom bottom",
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
    var buzzBlock = $("#section6").find(".buzzOnBeesBlock");
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
      trigger: "#section6",
      start: "top top-=" + windowHeight / 1.5,
      end: "bottom bottom",
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
  $(".text-container").each(function () {
    var _this = this;

    var linesIn = function linesIn() {
      var theseLines = $(_this).find(".pLines");
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
      start: "top bottom-=120px",
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
  $("h2").each(function () {
    var _this2 = this;

    var linesIn = function linesIn() {
      var theseLines = $(_this2).find(".h2Words");
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
      start: "top bottom-=120px",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hbmltYXRlU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9jbGlja0V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9nc2FwUmVnaXN0ZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21lbnVUb2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbW9iaWxlQW5pbWF0ZVNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbW9iaWxlU2VjdGlvbnNTZXR1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9wYWdlU2V0dXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2VjdGlvbnNTZXR1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy93aW5kb3dMb2FkLmpzIl0sIm5hbWVzIjpbImFuaW1hdGVTZWN0aW9uIiwid2luZG93SGVpZ2h0IiwiTWF0aCIsInJvdW5kIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJzY3JlZW4iLCJ3aWR0aCIsIm15U2Nyb2xsSGVpZ2h0IiwibXlTY3JvbGxPZmZzZXQiLCJzZWN0aW9uQW5pbSIsInNlY3Rpb25BbmltMSIsInRoaXNTZWMiLCJ0aGlzT3ZlcmxheSIsIiQiLCJjaGFyc0gyIiwiZmluZCIsImNoYXJzSDMiLCJjZW50ZXI0TCIsImNlbnRlcjRSIiwiY2VudGVyM0wiLCJjZW50ZXIzUiIsImNlbnRlcjJMIiwiY2VudGVyMlIiLCJjZW50ZXIxIiwidG9wU21hbGwiLCJib3R0b21TbWFsbCIsImNlbnRlclNtYWxsIiwidG9wTGVmdFNtYWxsIiwidG9wUmlnaHR0U21hbGwiLCJib3R0b21MZWZ0U21hbGwiLCJib3R0b21SaWdodHRTbWFsbCIsInNtYWxsc0dyb3VwIiwiZG93bkFycm93IiwiZG93bkFycm93TGluZSIsImRvd25BcnJvd1BvaW50IiwidGwiLCJnc2FwIiwidGltZWxpbmUiLCJwYXVzZWQiLCJkZWZhdWx0cyIsImR1cmF0aW9uIiwiZWFzZSIsIm9uQ29tcGxldGUiLCJzZXQiLCJkb2N1bWVudCIsImJvZHkiLCJvdmVyZmxvdyIsImxpbmVUTCIsImFycm93VEwiLCJyZXBlYXQiLCJ5b3lvIiwidG8iLCJ5Iiwib25SZXZlcnNlQ29tcGxldGUiLCJraWxsVHdlZW5zT2YiLCJjb250ZW50VEwiLCJ6SW5kZXgiLCJmcm9tVG8iLCJkcmF3U1ZHIiwieCIsIm9wYWNpdHkiLCJzdGFnZ2VyIiwiYW1vdW50IiwiZnJvbSIsImFkZCIsInNlY3Rpb25BbmltMiIsImxpbmVzUCIsInNlY3Rpb25UZXh0IiwiZGVsYXkiLCJzZWN0aW9uQW5pbTMiLCJ0aGlzQmFjayIsInNvbG9DZW50ZXIyIiwic29sb0NlbnRlcjEiLCJzZWN0aW9uQW5pbTQiLCJtb3JwaFNWRyIsInNoYXBlIiwic2VjdGlvbkFuaW01Iiwic2VjdGlvbkFuaW02IiwiaW1nQ29udGFpbmVyIiwic3ViSW1nIiwicGxheSIsInNlY3Rpb25UcmlnIiwibXlDb3VudCIsInN0YXJ0SGVpZ2h0IiwiZW5kSGVpZ2h0IiwiU2Nyb2xsVHJpZ2dlciIsImNyZWF0ZSIsInN0YXJ0IiwiZW5kIiwic2NydWIiLCJvbkVudGVyIiwib25MZWF2ZSIsInJldmVyc2UiLCJvbkVudGVyQmFjayIsIm9uTGVhdmVCYWNrIiwiaSIsImVhY2giLCJidXp6SW40IiwiYnV6ekJsb2NrIiwiYnV6eldpZHRoIiwib3V0ZXJXaWR0aCIsImJ1enpUcmlnNCIsImJ1enpJbjUiLCJidXp6VHJpZzUiLCJidXp6SW42IiwiYnV6elRyaWc2IiwiY2xpY2tFdmVudHMiLCJtZW51VG9nZ2xlVEwiLCJtZW51VG9nZ2xlIiwicmV2ZXJzZWQiLCJvbiIsImhlaWdodCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNtb290aFNjcm9sbGluZyIsImdzYXBSZWdpc3RlcnMiLCJyZWdpc3RlclBsdWdpbiIsIlNjcm9sbFRvUGx1Z2luIiwiU3BsaXRUZXh0IiwiRHJhd1NWR1BsdWdpbiIsIk1vcnBoU1ZHUGx1Z2luIiwibGVmdCIsInJvdGF0aW9uIiwidHJhbnNmb3JtT3JpZ2luIiwibW9iaWxlQW5pbWF0ZVNlY3Rpb24iLCJzZWN0aW9uTGluZXMiLCJzZWNBcnJvdyIsImxpbmVzIiwidHJpZ2dlciIsImxpbmVzSW4iLCJ0aGVzZUxpbmVzIiwibW9iaWxlU2VjdGlvbnNTZXR1cCIsInRvdGFsU2VjdGlvbnMiLCJsZW5ndGgiLCJ0b3RhbEJ1enpPbiIsImZ1bGxIZWlnaHQiLCJzZWMxTGluZXMiLCJzZWMxQXJyb3ciLCJzZWMxIiwic2VjMUgyIiwic2VjMXNwbGl0SDIiLCJ0eXBlIiwic2VjMUNoYXJzMiIsImNoYXJzIiwic2VjMVdvcmRzMiIsIndvcmRzIiwic2VjMUxpbmVzMiIsImFkZENsYXNzIiwic2VjMUgzIiwic2VjMXNwbGl0SDMiLCJzZWMxQ2hhcnMzIiwic2VjMVdvcmRzMyIsInNlYzIiLCJzZWMySDIiLCJzZWMyc3BsaXRIMiIsInNlYzJXb3JkczIiLCJzZWMyTGluZXMyIiwic2VjMlAiLCJzZWMyc3BsaXRQIiwic2VjMkxpbmVzUCIsInNlYzQiLCJzZWM0SDIiLCJzZWM0c3BsaXRIMiIsInNlYzRXb3JkczIiLCJzZWM0TGluZXMyIiwic2VjNFAiLCJzZWM0c3BsaXRQIiwic2VjNExpbmVzUCIsInNlYzUiLCJzZWM1SDIiLCJzZWM1c3BsaXRIMiIsInNlYzVXb3JkczIiLCJzZWM1TGluZXMyIiwic2VjNVAiLCJzZWM1c3BsaXRQIiwic2VjNUxpbmVzUCIsInNlYzYiLCJzZWM2SDIiLCJzZWM2c3BsaXRIMiIsInNlYzZXb3JkczIiLCJzZWM2TGluZXMyIiwic2VjNlAiLCJzZWM2c3BsaXRQIiwic2VjNkxpbmVzUCIsInNlYzciLCJzZWM3SDIiLCJzZWM3c3BsaXRIMiIsInNlYzdXb3JkczIiLCJzZWM3TGluZXMyIiwic2VjN1AiLCJzZWM3c3BsaXRQIiwic2VjN0xpbmVzUCIsInNlYzgiLCJzZWM4SDIiLCJzZWM4c3BsaXRIMiIsInNlYzhXb3JkczIiLCJzZWM4TGluZXMyIiwic2VjOFAiLCJzZWM4c3BsaXRQIiwic2VjOExpbmVzUCIsInByZUxvYWRlciIsInJlbW92ZSIsInNjYWxlIiwidmlkTGlua3MiLCJ0aGlzU3JjIiwiYXR0ciIsIm1vYmlsZVZpZExpbmtzIiwidGhlTGluayIsInRhcmdldCIsImhlYWRlckhlaWdodCIsIm91dGVySGVpZ2h0Iiwic2Nyb2xsVG8iLCJtb2JpbGVOYXZTZXR1cCIsInNlY3Rpb25zU2V0dXAiLCJzZWMyQ2hhcnMyIiwic2VjNENoYXJzMiIsInNlYzVDaGFyczIiLCJzZWM2Q2hhcnMyIiwib25iZWZvcmV1bmxvYWQiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFD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Ozs7Ozs7Ozs7Ozs7QUNBUDtBQUFBO0NBY0E7QUFDQTtBQUNBOztBQUVBaEosTUFBTSxDQUFDdU4sY0FBUCxHQUF3QixZQUFZO0VBQ2xDdk4sTUFBTSxDQUFDZ04sUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNELENBRkQ7O0FBSUFoTixNQUFNLENBQUN3TixnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFXO0VBQ3ZDbkIsMkRBQVM7RUFDVHJGLCtEQUFhOztFQUViLElBQUk5RyxNQUFNLENBQUNDLEtBQVAsSUFBZ0IsSUFBcEIsRUFBeUI7SUFDdkI2SCxxRUFBbUI7SUFDbkIyRSxnRUFBYztJQUNkbEYsc0VBQW9CO0VBQ3JCLENBSkQsTUFJTztJQUNMeUYsK0RBQWE7SUFDYlYsMERBQVE7SUFDUjVNLGdFQUFjO0VBQ2Y7QUFNSixDQWxCRDtBQW9CQUksTUFBTSxDQUFDd04sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBVyxDQUU1QyxDQUZELEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICcuL2NvbXBvbmVudHMvd2luZG93TG9hZC5qcyc7IiwiZXhwb3J0IGxldCBhbmltYXRlU2VjdGlvbiA9ICgpID0+IHtcbiAgbGV0IHdpbmRvd0hlaWdodCA9IE1hdGgucm91bmQod2luZG93LmlubmVySGVpZ2h0KTtcbiAgaWYgKHNjcmVlbi53aWR0aCA8PSAxMDI0KSB7XG4gICAgdmFyIG15U2Nyb2xsSGVpZ2h0ID0gd2luZG93SGVpZ2h0ICogMjtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbXlTY3JvbGxIZWlnaHQgPSB3aW5kb3dIZWlnaHQgLyAyO1xuICB9XG4gIGxldCBteVNjcm9sbE9mZnNldCA9IDA7XG4gIC8vIEdsb2JhbCB2YXIgZm9yIGFuaW1hdGlvbnMgLyBBY2Nlc3MgdmlhIHNlY3Rpb24gdHJpZyBsb29wXG5cbiAgLy8gY29uc29sZS5sb2cobXlTY3JvbGxIZWlnaHQpO1xuICBsZXQgc2VjdGlvbkFuaW0gPSB7XG4gICAgc2VjdGlvbkFuaW0xOiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9IFwiI3NlY3Rpb24xXCI7XG4gICAgICBsZXQgdGhpc092ZXJsYXkgPSAkKFwiI292ZXJsYXkxXCIpO1xuICAgICAgbGV0IGNoYXJzSDIgPSAkKHRoaXNTZWMpLmZpbmQoXCIuc2VjMUNoYXJzMlwiKTtcbiAgICAgIGxldCBjaGFyc0gzID0gJCh0aGlzU2VjKS5maW5kKFwiLnNlYzFDaGFyczNcIik7XG4gICAgICAvLyBCYWNrZ3JvdW5kIFNoYXBlIFZhcnNcbiAgICAgIGxldCBjZW50ZXI0TCA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItNExcIik7XG4gICAgICBsZXQgY2VudGVyNFIgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTRSXCIpO1xuICAgICAgbGV0IGNlbnRlcjNMID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci0zTFwiKTtcbiAgICAgIGxldCBjZW50ZXIzUiA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItM1JcIik7XG4gICAgICBsZXQgY2VudGVyMkwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTJMXCIpO1xuICAgICAgbGV0IGNlbnRlcjJSID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci0yUlwiKTtcbiAgICAgIGxldCBjZW50ZXIxID0gJCh0aGlzU2VjKS5maW5kKFwiI3RvcC1iaWdcIik7XG4gICAgICBsZXQgdG9wU21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjdG9wLXNtYWxsXCIpO1xuICAgICAgbGV0IGJvdHRvbVNtYWxsID0gJCh0aGlzU2VjKS5maW5kKFwiI2JvdHRvbS1zbWFsbFwiKTtcbiAgICAgIGxldCBjZW50ZXJTbWFsbCA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItc21hbGxcIik7XG4gICAgICBsZXQgdG9wTGVmdFNtYWxsID0gJCh0aGlzU2VjKS5maW5kKFwiI3RvcC1sZWZ0LXNtYWxsXCIpO1xuICAgICAgbGV0IHRvcFJpZ2h0dFNtYWxsID0gJCh0aGlzU2VjKS5maW5kKFwiI3RvcC1yaWdodC1zbWFsbFwiKTtcbiAgICAgIGxldCBib3R0b21MZWZ0U21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjYm90dG9tLWxlZnQtc21hbGxcIik7XG4gICAgICBsZXQgYm90dG9tUmlnaHR0U21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjYm90dG9tLXJpZ2h0LXNtYWxsXCIpO1xuICAgICAgbGV0IHNtYWxsc0dyb3VwID0gW1xuICAgICAgICB0b3BTbWFsbCxcbiAgICAgICAgYm90dG9tU21hbGwsXG4gICAgICAgIGNlbnRlclNtYWxsLFxuICAgICAgICB0b3BMZWZ0U21hbGwsXG4gICAgICAgIHRvcFJpZ2h0dFNtYWxsLFxuICAgICAgICBib3R0b21MZWZ0U21hbGwsXG4gICAgICAgIGJvdHRvbVJpZ2h0dFNtYWxsLFxuICAgICAgXTtcbiAgICAgIC8vIEFycm93IFBpZWNlc1xuICAgICAgbGV0IGRvd25BcnJvdyA9ICQodGhpc1NlYykuZmluZChcIiNkb3duLWFycm93XCIpO1xuICAgICAgbGV0IGRvd25BcnJvd0xpbmUgPSAkKHRoaXNTZWMpLmZpbmQoXCIjZG93bi1hcnJvdy1saW5lXCIpO1xuICAgICAgbGV0IGRvd25BcnJvd1BvaW50ID0gJCh0aGlzU2VjKS5maW5kKFwiI2Rvd24tYXJyb3ctcG9pbnRcIik7XG5cbiAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBwYXVzZWQ6IHRydWUsXG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgLy8gUmVsZWFzZSBUaGUgU2Nyb2xsIExvY2tcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGdzYXAuc2V0KGRvY3VtZW50LmJvZHksIHsgb3ZlcmZsb3c6IFwiYXV0b1wiIH0pO1xuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGxldCBsaW5lVEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMC44LFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGxldCBhcnJvd1RMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246IDAuMTUsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBCb3VuY2UgVGhlIERvd24gQXJyb3dcbiAgICAgICAgICBnc2FwXG4gICAgICAgICAgICAudGltZWxpbmUoeyByZXBlYXQ6IC0xLCB5b3lvOiB0cnVlIH0pXG4gICAgICAgICAgICAudG8oZG93bkFycm93LCB7IHk6IC00LCBkdXJhdGlvbjogMSwgZWFzZTogXCJub25lXCIgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmV2ZXJzZUNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gU3RvcCBCb3VuY2luIFRoZSBEb3duIEFycm93IGFuZCBSZXNldCBpdCdzIFkgcG9zaXRpb25cbiAgICAgICAgICBnc2FwLmtpbGxUd2VlbnNPZihkb3duQXJyb3cpO1xuICAgICAgICAgIGdzYXAuc2V0KGRvd25BcnJvdywgeyB5OiAwIH0pO1xuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGxldCBjb250ZW50VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMC40LFxuICAgICAgICAgIGVhc2U6IFwiYmFjay5vdXQoMS41KVwiLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIFNldCBiYWNrZ3JvdW5kIHotaW5kZXggYnkgc2VjdGlvbiBudW1iZXIgLyBTZWN0aW9uIDIgaGFzIG5vIGJhY2sgLyBTZWN0aW9uIDMgaXMgei1pbmRleCAxMTAgdG8gc3RheSBhYm92ZSBhbGxcbiAgICAgIHRsLnNldCh0aGlzT3ZlcmxheSwgeyB6SW5kZXg6IDEwMSB9KTtcbiAgICAgIC8vIFNldCBzZWN0aW9uIHotaW5kZXggYnkgc2VjdGlvbiBudW1iZXJcbiAgICAgIHRsLmZyb21Ubyh0aGlzU2VjLCB7IHpJbmRleDogMTMgfSwgeyB6SW5kZXg6IDEwMDEgfSk7XG5cbiAgICAgIC8vIEFuaW1hdGUgTGluZXNcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGNlbnRlcjRMLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMCUgMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGNlbnRlcjRSLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAxMDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBjZW50ZXIzTCxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjAlIDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBjZW50ZXIzUixcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMTAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyMkwsXG4gICAgICAgIHsgZHJhd1NWRzogXCIwJSAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyMlIsXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDEwMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGNlbnRlcjEsXG4gICAgICAgIHsgZHJhd1NWRzogXCI1MCUgNTAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiwgZHVyYXRpb246IDAuNyB9LFxuICAgICAgICBcInNjcm9sbEluKz0wLjFcIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIHNtYWxsc0dyb3VwLFxuICAgICAgICB7IGRyYXdTVkc6IFwiNTAlIDUwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIsIGR1cmF0aW9uOiAwLjYgfSxcbiAgICAgICAgXCJzY3JvbGxJbis9MC4yXCJcbiAgICAgICk7XG5cbiAgICAgIC8vIEFuaW1hdGUgQ29udGVudFxuICAgICAgY29udGVudFRMLmZyb21UbyhcbiAgICAgICAgY2hhcnNIMixcbiAgICAgICAgeyB4OiAtMjAsIG9wYWNpdHk6IDAgfSxcbiAgICAgICAgeyB4OiAwLCBvcGFjaXR5OiAxLCBzdGFnZ2VyOiB7IGFtb3VudDogMC41IH0gfSxcbiAgICAgICAgXCJjb250ZW50XCJcbiAgICAgICk7XG4gICAgICBjb250ZW50VEwuZnJvbVRvKFxuICAgICAgICBjaGFyc0gzLFxuICAgICAgICB7IHk6IFwiMS4wMWVtXCIgfSxcbiAgICAgICAgeyB5OiAwLCBzdGFnZ2VyOiB7IGFtb3VudDogMC4yLCBmcm9tOiBcImNlbnRlclwiIH0gfSxcbiAgICAgICAgXCJjb250ZW50Kz0wLjM1XCJcbiAgICAgICk7XG5cbiAgICAgIC8vIEFuaW1hdGUgQXJyb3dcbiAgICAgIGFycm93VEwuZnJvbVRvKFxuICAgICAgICBkb3duQXJyb3dMaW5lLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAxMDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBhcnJvd1RMLmZyb21UbyhcbiAgICAgICAgZG93bkFycm93UG9pbnQsXG4gICAgICAgIHsgZHJhd1NWRzogXCI1MCUgNTAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluKz0wLjE0NVwiXG4gICAgICApO1xuXG4gICAgICAvLyBCdWlsZCBNYXN0ZXIgVExUTFxuICAgICAgdGwuZnJvbVRvKHRoaXNPdmVybGF5LCB7IG9wYWNpdHk6IDAgfSwgeyBvcGFjaXR5OiAwLjY1IH0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5hZGQobGluZVRMLCBcInNjcm9sbEluQWxsKz0wLjNcIik7XG4gICAgICB0bC5hZGQoY29udGVudFRMLCBcInNjcm9sbEluQWxsKz0wLjhcIik7XG4gICAgICB0bC5hZGQoYXJyb3dUTCwgXCJzY3JvbGxJbkFsbCs9MS40XCIpO1xuXG4gICAgICByZXR1cm4gdGw7XG4gICAgfSxcblxuICAgIHNlY3Rpb25BbmltMjogKCkgPT4ge1xuICAgICAgbGV0IHRoaXNTZWMgPSAkKFwiI3NlY3Rpb24yXCIpO1xuICAgICAgbGV0IGNoYXJzSDIgPSAkKHRoaXNTZWMpLmZpbmQoXCIuaDJDaGFyc1wiKTtcbiAgICAgIGxldCBsaW5lc1AgPSAkKHRoaXNTZWMpLmZpbmQoXCIucExpbmVzXCIpO1xuICAgICAgLy8gQmFja2dyb3VuZCBTaGFwZSBWYXJzXG4gICAgICBsZXQgY2VudGVyNEwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTRMXCIpO1xuICAgICAgbGV0IGNlbnRlcjRSID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci00UlwiKTtcbiAgICAgIGxldCBjZW50ZXIzTCA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItM0xcIik7XG4gICAgICBsZXQgY2VudGVyM1IgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTNSXCIpO1xuICAgICAgbGV0IGNlbnRlcjJMID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci0yTFwiKTtcbiAgICAgIGxldCBjZW50ZXIyUiA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItMlJcIik7XG4gICAgICBsZXQgY2VudGVyMSA9ICQodGhpc1NlYykuZmluZChcIiN0b3AtYmlnXCIpO1xuICAgICAgbGV0IHRvcFNtYWxsID0gJCh0aGlzU2VjKS5maW5kKFwiI3RvcC1zbWFsbFwiKTtcbiAgICAgIGxldCBib3R0b21TbWFsbCA9ICQodGhpc1NlYykuZmluZChcIiNib3R0b20tc21hbGxcIik7XG4gICAgICBsZXQgY2VudGVyU21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLXNtYWxsXCIpO1xuICAgICAgbGV0IHRvcExlZnRTbWFsbCA9ICQodGhpc1NlYykuZmluZChcIiN0b3AtbGVmdC1zbWFsbFwiKTtcbiAgICAgIGxldCB0b3BSaWdodHRTbWFsbCA9ICQodGhpc1NlYykuZmluZChcIiN0b3AtcmlnaHQtc21hbGxcIik7XG4gICAgICBsZXQgYm90dG9tTGVmdFNtYWxsID0gJCh0aGlzU2VjKS5maW5kKFwiI2JvdHRvbS1sZWZ0LXNtYWxsXCIpO1xuICAgICAgbGV0IGJvdHRvbVJpZ2h0dFNtYWxsID0gJCh0aGlzU2VjKS5maW5kKFwiI2JvdHRvbS1yaWdodC1zbWFsbFwiKTtcbiAgICAgIGxldCBzbWFsbHNHcm91cCA9IFtcbiAgICAgICAgdG9wU21hbGwsXG4gICAgICAgIGJvdHRvbVNtYWxsLFxuICAgICAgICBjZW50ZXJTbWFsbCxcbiAgICAgICAgdG9wTGVmdFNtYWxsLFxuICAgICAgICB0b3BSaWdodHRTbWFsbCxcbiAgICAgICAgYm90dG9tTGVmdFNtYWxsLFxuICAgICAgICBib3R0b21SaWdodHRTbWFsbCxcbiAgICAgIF07XG4gICAgICAvLyBBcnJvdyBQaWVjZXNcbiAgICAgIGxldCBkb3duQXJyb3cgPSAkKHRoaXNTZWMpLmZpbmQoXCIjZG93bi1hcnJvd1wiKTtcbiAgICAgIGxldCBkb3duQXJyb3dMaW5lID0gJCh0aGlzU2VjKS5maW5kKFwiI2Rvd24tYXJyb3ctbGluZVwiKTtcbiAgICAgIGxldCBkb3duQXJyb3dQb2ludCA9ICQodGhpc1NlYykuZmluZChcIiNkb3duLWFycm93LXBvaW50XCIpO1xuICAgICAgbGV0IHNlY3Rpb25UZXh0ID0gJCh0aGlzU2VjKS5maW5kKFwiLmRvd24tYXJyb3ctdGV4dFwiKTtcbiAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWxheTogMC42NSxcbiAgICAgICAgcGF1c2VkOiB0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIFJlbGVhc2UgVGhlIFNjcm9sbCBMb2NrXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBnc2FwLnNldChkb2N1bWVudC5ib2R5LCB7IG92ZXJmbG93OiBcImF1dG9cIiB9KTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgbGluZVRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246IDAuOCxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgY29udGVudFRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246IDAuMTUsXG4gICAgICAgICAgZWFzZTogXCJiYWNrLm91dCgxLjUpXCIsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgbGV0IGFycm93VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMC4xNSxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIEJvdW5jZSBUaGUgRG93biBBcnJvd1xuICAgICAgICAgIGdzYXBcbiAgICAgICAgICAgIC50aW1lbGluZSh7IHJlcGVhdDogLTEsIHlveW86IHRydWUgfSlcbiAgICAgICAgICAgIC50byhkb3duQXJyb3csIHsgeTogLTMsIGR1cmF0aW9uOiAxLCBlYXNlOiBcIm5vbmVcIiB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25SZXZlcnNlQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBTdG9wIEJvdW5jaW4gVGhlIERvd24gQXJyb3cgYW5kIFJlc2V0IGl0J3MgWSBwb3NpdGlvblxuICAgICAgICAgIGdzYXAua2lsbFR3ZWVuc09mKGRvd25BcnJvdyk7XG4gICAgICAgICAgZ3NhcC5zZXQoZG93bkFycm93LCB7IHk6IDAgfSk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgLy8gU2V0IHNlY3Rpb24gei1pbmRleCBieSBzZWN0aW9uIG51bWJlclxuICAgICAgdGwuZnJvbVRvKHRoaXNTZWMsIHsgekluZGV4OiAxMyB9LCB7IHpJbmRleDogMTAwMiB9KTtcblxuICAgICAgLy8gQW5pbWF0ZSBMaW5lc1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyNEwsXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDEwMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGNlbnRlcjRSLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMCUgMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGNlbnRlcjNMLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAxMDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBjZW50ZXIzUixcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjAlIDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBjZW50ZXIyTCxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMTAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyMlIsXG4gICAgICAgIHsgZHJhd1NWRzogXCIwJSAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyMSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjUwJSA1MCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiLCBkdXJhdGlvbjogMC43IH0sXG4gICAgICAgIFwic2Nyb2xsSW4rPTAuMVwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgc21hbGxzR3JvdXAsXG4gICAgICAgIHsgZHJhd1NWRzogXCI1MCUgNTAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiwgZHVyYXRpb246IDAuNiB9LFxuICAgICAgICBcInNjcm9sbEluKz0wLjJcIlxuICAgICAgKTtcblxuICAgICAgLy8gQW5pbWF0ZSBDb250ZW50XG4gICAgICBjb250ZW50VEwuZnJvbVRvKFxuICAgICAgICBjaGFyc0gyLFxuICAgICAgICB7IHg6IC0yMCwgb3BhY2l0eTogMCB9LFxuICAgICAgICB7IHg6IDAsIG9wYWNpdHk6IDEsIHN0YWdnZXI6IHsgYW1vdW50OiAwLjMsIGZyb206IFwicmFuZG9tXCIgfSB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBjb250ZW50VEwuZnJvbVRvKFxuICAgICAgICBsaW5lc1AsXG4gICAgICAgIHsgb3BhY2l0eTogMCwgeDogLTQwIH0sXG4gICAgICAgIHsgb3BhY2l0eTogMSwgeDogMCwgc3RhZ2dlcjogeyBhbW91bnQ6IDAuMyB9IH0sXG4gICAgICAgIFwic2Nyb2xsSW4rPTAuMVwiXG4gICAgICApO1xuXG4gICAgICAvLyBBbmltYXRlIEFycm93XG4gICAgICBhcnJvd1RMLmZyb21UbyhcbiAgICAgICAgc2VjdGlvblRleHQsXG4gICAgICAgIHsgeTogLTYsIG9wYWNpdHk6IDAgfSxcbiAgICAgICAgeyB5OiAwLCBvcGFjaXR5OiAxIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGFycm93VEwuZnJvbVRvKFxuICAgICAgICBkb3duQXJyb3dMaW5lLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAxMDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluKz0wLjAyNVwiXG4gICAgICApO1xuICAgICAgYXJyb3dUTC5mcm9tVG8oXG4gICAgICAgIGRvd25BcnJvd1BvaW50LFxuICAgICAgICB7IGRyYXdTVkc6IFwiNTAlIDUwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJbis9MC4xNzVcIlxuICAgICAgKTtcblxuICAgICAgLy8gQnVpbGQgTWFzdGVyIFRMVExcbiAgICAgIHRsLnRvKFxuICAgICAgICBcIi5oZWFkZXItbG9nb1wiLFxuICAgICAgICB7IGR1cmF0aW9uOiAwLjksIHdpZHRoOiAxOTAsIGVhc2U6IFwic2luZS5vdXRcIiB9LFxuICAgICAgICBcInNjcm9sbEluQWxsKz0wLjFcIlxuICAgICAgKTtcbiAgICAgIHRsLmFkZChsaW5lVEwsIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5hZGQoY29udGVudFRMLCBcInNjcm9sbEluQWxsKz0wLjc1XCIpO1xuICAgICAgdGwuYWRkKGFycm93VEwsIFwic2Nyb2xsSW5BbGwrPTAuN1wiKTtcblxuICAgICAgcmV0dXJuIHRsO1xuICAgIH0sXG5cbiAgICAvLyBzZWN0aW9uQW5pbTM6ICgpID0+IHtcbiAgICAvLyAgIGxldCB0aGlzU2VjID0gJChcIiNzZWN0aW9uM1wiKTtcbiAgICAvLyAgIGxldCB0aGlzQmFjayA9ICQoXCIjYmFja2dyb3VuZDNcIik7XG4gICAgLy8gICBsZXQgY2VudGVyNEwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTRMXCIpO1xuICAgIC8vICAgbGV0IGNlbnRlcjRSID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci00UlwiKTtcbiAgICAvLyAgIGxldCBjZW50ZXIzTCA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItM0xcIik7XG4gICAgLy8gICBsZXQgY2VudGVyM1IgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTNSXCIpO1xuICAgIC8vICAgbGV0IGNlbnRlcjJMID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci0yTFwiKTtcbiAgICAvLyAgIGxldCBjZW50ZXIyUiA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItMlJcIik7XG4gICAgLy8gICBsZXQgYm90dG9tU21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjYm90dG9tLXNtYWxsXCIpO1xuICAgIC8vICAgLy8gQXJyb3cgUGllY2VzXG4gICAgLy8gICBsZXQgZG93bkFycm93ID0gJCh0aGlzU2VjKS5maW5kKFwiI2Rvd24tYXJyb3dcIik7XG4gICAgLy8gICBsZXQgZG93bkFycm93TGluZSA9ICQodGhpc1NlYykuZmluZChcIiNkb3duLWFycm93LWxpbmVcIik7XG4gICAgLy8gICBsZXQgZG93bkFycm93UG9pbnQgPSAkKHRoaXNTZWMpLmZpbmQoXCIjZG93bi1hcnJvdy1wb2ludFwiKTtcbiAgICAvLyAgIGxldCBzZWN0aW9uVGV4dCA9ICQodGhpc1NlYykuZmluZChcIi5kb3duLWFycm93LXRleHRcIik7XG4gICAgLy8gICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAvLyAgICAgZGVsYXk6IDAuMyxcbiAgICAvLyAgICAgcGF1c2VkOiB0cnVlLFxuICAgIC8vICAgICBkZWZhdWx0czoge1xuICAgIC8vICAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgLy8gICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIC8vIFJlbGVhc2UgVGhlIFNjcm9sbCBMb2NrXG4gICAgLy8gICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgICBnc2FwLnNldChkb2N1bWVudC5ib2R5LCB7IG92ZXJmbG93OiBcImF1dG9cIiB9KTtcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgb25SZXZlcnNlQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgICAvLyBTZXQgdGhlIEJhY2tncm91bmQgQmFjayBCZWhpbmRcbiAgICAvLyAgICAgICBnc2FwLnNldCh0aGlzQmFjaywgeyB6SW5kZXg6IDk5IH0pO1xuICAgIC8vICAgICB9LFxuICAgIC8vICAgfSk7XG5cbiAgICAvLyAgIGxldCBsaW5lVEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAvLyAgICAgZGVmYXVsdHM6IHtcbiAgICAvLyAgICAgICBkdXJhdGlvbjogMC44LFxuICAgIC8vICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgfSk7XG5cbiAgICAvLyAgIGxldCBjb250ZW50VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAvLyAgICAgZGVmYXVsdHM6IHtcbiAgICAvLyAgICAgICBkdXJhdGlvbjogMC42LFxuICAgIC8vICAgICAgIGVhc2U6IFwiYmFjay5vdXQoLjIpXCIsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICB9KTtcblxuICAgIC8vICAgbGV0IGFycm93VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAvLyAgICAgZGVmYXVsdHM6IHtcbiAgICAvLyAgICAgICBkdXJhdGlvbjogMC4xNSxcbiAgICAvLyAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICAgIC8vIEJvdW5jZSBUaGUgRG93biBBcnJvd1xuICAgIC8vICAgICAgIGdzYXBcbiAgICAvLyAgICAgICAgIC50aW1lbGluZSh7IHJlcGVhdDogLTEsIHlveW86IHRydWUgfSlcbiAgICAvLyAgICAgICAgIC50byhkb3duQXJyb3csIHsgeTogLTQsIGR1cmF0aW9uOiAxLCBlYXNlOiBcIm5vbmVcIiB9KTtcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgb25SZXZlcnNlQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgICAvLyBTdG9wIEJvdW5jaW4gVGhlIERvd24gQXJyb3cgYW5kIFJlc2V0IGl0J3MgWSBwb3NpdGlvblxuICAgIC8vICAgICAgIGdzYXAua2lsbFR3ZWVuc09mKGRvd25BcnJvdyk7XG4gICAgLy8gICAgICAgZ3NhcC5zZXQoZG93bkFycm93LCB7IHk6IDAgfSk7XG4gICAgLy8gICAgIH0sXG4gICAgLy8gICB9KTtcblxuICAgIC8vICAgLy8gU2V0IGJhY2tncm91bmQgei1pbmRleCBieSBzZWN0aW9uIG51bWJlciAvIFNlY3Rpb24gMiBoYXMgbm8gYmFjayAvIFNlY3Rpb24gMyBpcyB6LWluZGV4IDExMCB0byBzdGF5IGFib3ZlIGFsbFxuICAgIC8vICAgdGwuc2V0KHRoaXNCYWNrLCB7IG9wYWNpdHk6IDEsIHpJbmRleDogMTEwIH0pO1xuICAgIC8vICAgLy8gU2V0IHNlY3Rpb24gei1pbmRleCBieSBzZWN0aW9uIG51bWJlclxuICAgIC8vICAgdGwuZnJvbVRvKHRoaXNTZWMsIHsgekluZGV4OiAxMyB9LCB7IHpJbmRleDogMTAwMyB9KTtcblxuICAgIC8vICAgLy8gQW5pbWF0ZSBMaW5lc1xuICAgIC8vICAgbGluZVRMLmZyb21UbyhcbiAgICAvLyAgICAgY2VudGVyNEwsXG4gICAgLy8gICAgIHsgZHJhd1NWRzogXCIwJSAwJVwiIH0sXG4gICAgLy8gICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAvLyAgICAgXCJzY3JvbGxJblwiXG4gICAgLy8gICApO1xuICAgIC8vICAgbGluZVRMLmZyb21UbyhcbiAgICAvLyAgICAgY2VudGVyNFIsXG4gICAgLy8gICAgIHsgZHJhd1NWRzogXCIxMDAlIDEwMCVcIiB9LFxuICAgIC8vICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgLy8gICAgIFwic2Nyb2xsSW5cIlxuICAgIC8vICAgKTtcbiAgICAvLyAgIGxpbmVUTC5mcm9tVG8oXG4gICAgLy8gICAgIGNlbnRlcjNMLFxuICAgIC8vICAgICB7IGRyYXdTVkc6IFwiMCUgMCVcIiB9LFxuICAgIC8vICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgLy8gICAgIFwic2Nyb2xsSW5cIlxuICAgIC8vICAgKTtcbiAgICAvLyAgIGxpbmVUTC5mcm9tVG8oXG4gICAgLy8gICAgIGNlbnRlcjNSLFxuICAgIC8vICAgICB7IGRyYXdTVkc6IFwiMTAwJSAxMDAlXCIgfSxcbiAgICAvLyAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgIC8vICAgICBcInNjcm9sbEluXCJcbiAgICAvLyAgICk7XG4gICAgLy8gICBsaW5lVEwuZnJvbVRvKFxuICAgIC8vICAgICBjZW50ZXIyTCxcbiAgICAvLyAgICAgeyBkcmF3U1ZHOiBcIjAlIDAlXCIgfSxcbiAgICAvLyAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgIC8vICAgICBcInNjcm9sbEluXCJcbiAgICAvLyAgICk7XG4gICAgLy8gICBsaW5lVEwuZnJvbVRvKFxuICAgIC8vICAgICBjZW50ZXIyUixcbiAgICAvLyAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMTAwJVwiIH0sXG4gICAgLy8gICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAvLyAgICAgXCJzY3JvbGxJblwiXG4gICAgLy8gICApO1xuXG4gICAgLy8gICAvLyBBbmltYXRlIENvbnRlbnRcbiAgICAvLyAgIGNvbnRlbnRUTC5mcm9tVG8oXG4gICAgLy8gICAgIGJvdHRvbVNtYWxsLFxuICAgIC8vICAgICB7IGRyYXdTVkc6IFwiNTAlIDUwJVwiIH0sXG4gICAgLy8gICAgIHsgZHJhd1NWRzogXCIwJSAxMDAlXCIgfSxcbiAgICAvLyAgICAgXCJzY3JvbGxJblwiXG4gICAgLy8gICApO1xuICAgIC8vICAgY29udGVudFRMLmZyb21UbyhcbiAgICAvLyAgICAgXCIudmlkZW9BcmVhXCIsXG4gICAgLy8gICAgIHsgaGVpZ2h0OiAwIH0sXG4gICAgLy8gICAgIHsgaGVpZ2h0OiBcImF1dG9cIiB9LFxuICAgIC8vICAgICBcInNjcm9sbEluKz0wLjJcIlxuICAgIC8vICAgKTtcblxuICAgIC8vICAgLy8gQW5pbWF0ZSBBcnJvd1xuICAgIC8vICAgYXJyb3dUTC5mcm9tVG8oXG4gICAgLy8gICAgIHNlY3Rpb25UZXh0LFxuICAgIC8vICAgICB7IHk6IC02LCBvcGFjaXR5OiAwIH0sXG4gICAgLy8gICAgIHsgeTogMCwgb3BhY2l0eTogMSB9LFxuICAgIC8vICAgICBcInNjcm9sbEluXCJcbiAgICAvLyAgICk7XG4gICAgLy8gICBhcnJvd1RMLmZyb21UbyhcbiAgICAvLyAgICAgZG93bkFycm93TGluZSxcbiAgICAvLyAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMTAwJVwiIH0sXG4gICAgLy8gICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAvLyAgICAgXCJzY3JvbGxJbis9MC4wMjVcIlxuICAgIC8vICAgKTtcbiAgICAvLyAgIGFycm93VEwuZnJvbVRvKFxuICAgIC8vICAgICBkb3duQXJyb3dQb2ludCxcbiAgICAvLyAgICAgeyBkcmF3U1ZHOiBcIjUwJSA1MCVcIiB9LFxuICAgIC8vICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgLy8gICAgIFwic2Nyb2xsSW4rPTAuMTc1XCJcbiAgICAvLyAgICk7XG5cbiAgICAvLyAgIC8vIEJ1aWxkIE1hc3RlciBUTCBUTFxuICAgIC8vICAgdGwuYWRkKGxpbmVUTCwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAvLyAgIHRsLmZyb21Ubyh0aGlzQmFjaywgeyB5OiBcIi0xMDAlXCIgfSwgeyB5OiAwIH0sIFwic2Nyb2xsSW5BbGwrPTAuNTVcIik7XG4gICAgLy8gICB0bC5hZGQoY29udGVudFRMLCBcInNjcm9sbEluQWxsKz0wLjc1XCIpO1xuICAgIC8vICAgdGwuYWRkKGFycm93VEwsIFwic2Nyb2xsSW5BbGwrPTFcIik7XG5cbiAgICAvLyAgIHJldHVybiB0bDtcbiAgICAvLyB9LFxuXG4gICAgc2VjdGlvbkFuaW0zOiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9ICQoXCIjc2VjdGlvbjRcIik7XG4gICAgICBsZXQgdGhpc0JhY2sgPSAkKFwiI2JhY2tncm91bmQ0XCIpO1xuICAgICAgbGV0IGNoYXJzSDIgPSAkKHRoaXNTZWMpLmZpbmQoXCIuaDJDaGFyc1wiKTtcbiAgICAgIGxldCBsaW5lc1AgPSAkKHRoaXNTZWMpLmZpbmQoXCIucExpbmVzXCIpO1xuICAgICAgbGV0IHNvbG9DZW50ZXIyID0gJCh0aGlzU2VjKS5maW5kKFwiI3NvbG8tY2VudGVyLTJcIik7XG4gICAgICBsZXQgc29sb0NlbnRlcjEgPSAkKHRoaXNTZWMpLmZpbmQoXCIjc29sby1jZW50ZXItMVwiKTtcbiAgICAgIGxldCBib3R0b21TbWFsbCA9ICQodGhpc1NlYykuZmluZChcIiNib3R0b20tc21hbGxcIik7XG4gICAgICAvLyBBcnJvdyBQaWVjZXNcbiAgICAgIGxldCBkb3duQXJyb3cgPSAkKHRoaXNTZWMpLmZpbmQoXCIjZG93bi1hcnJvd1wiKTtcbiAgICAgIGxldCBkb3duQXJyb3dMaW5lID0gJCh0aGlzU2VjKS5maW5kKFwiI2Rvd24tYXJyb3ctbGluZVwiKTtcbiAgICAgIGxldCBkb3duQXJyb3dQb2ludCA9ICQodGhpc1NlYykuZmluZChcIiNkb3duLWFycm93LXBvaW50XCIpO1xuICAgICAgbGV0IHNlY3Rpb25UZXh0ID0gJCh0aGlzU2VjKS5maW5kKFwiLmRvd24tYXJyb3ctdGV4dFwiKTtcbiAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBwYXVzZWQ6IHRydWUsXG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgLy8gUmVsZWFzZSBUaGUgU2Nyb2xsIExvY2tcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGdzYXAuc2V0KGRvY3VtZW50LmJvZHksIHsgb3ZlcmZsb3c6IFwiYXV0b1wiIH0pO1xuICAgICAgICAgIC8vIGdzYXAuc2V0KCcjYmFja2dyb3VuZDEnLCB7b3BhY2l0eToxfSk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgbGV0IGxpbmVUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOiAwLjYsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgbGV0IGNvbnRlbnRUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICAgICAgZWFzZTogXCJiYWNrLm91dCgxLjUpXCIsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgbGV0IGFycm93VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMC4xNSxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIEJvdW5jZSBUaGUgRG93biBBcnJvd1xuICAgICAgICAgIGdzYXBcbiAgICAgICAgICAgIC50aW1lbGluZSh7IHJlcGVhdDogLTEsIHlveW86IHRydWUgfSlcbiAgICAgICAgICAgIC50byhkb3duQXJyb3csIHsgeTogLTQsIGR1cmF0aW9uOiAxLCBlYXNlOiBcIm5vbmVcIiB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25SZXZlcnNlQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBTdG9wIEJvdW5jaW4gVGhlIERvd24gQXJyb3cgYW5kIFJlc2V0IGl0J3MgWSBwb3NpdGlvblxuICAgICAgICAgIGdzYXAua2lsbFR3ZWVuc09mKGRvd25BcnJvdyk7XG4gICAgICAgICAgZ3NhcC5zZXQoZG93bkFycm93LCB7IHk6IDAgfSk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgLy8gU2V0IGJhY2tncm91bmQgei1pbmRleCBieSBzZWN0aW9uIG51bWJlciAvIFNlY3Rpb24gMiBoYXMgbm8gYmFjayAvIFNlY3Rpb24gMyBpcyB6LWluZGV4IDExMCB0byBzdGF5IGFib3ZlIGFsbFxuICAgICAgdGwuc2V0KHRoaXNCYWNrLCB7IHpJbmRleDogMTA0IH0pO1xuICAgICAgLy8gU2V0IHNlY3Rpb24gei1pbmRleCBieSBzZWN0aW9uIG51bWJlclxuICAgICAgdGwuZnJvbVRvKHRoaXNTZWMsIHsgekluZGV4OiAxMyB9LCB7IHpJbmRleDogMTAwNCB9KTtcblxuICAgICAgLy8gQW5pbWF0ZSBMaW5lc1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgc29sb0NlbnRlcjEsXG4gICAgICAgIHsgZHJhd1NWRzogXCI1MCUgNTAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBzb2xvQ2VudGVyMixcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjUwJSA1MCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGJvdHRvbVNtYWxsLFxuICAgICAgICB7IGRyYXdTVkc6IFwiNTAlIDUwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIwJSAxMDAlXCIsIGR1cmF0aW9uOiAwLjUgfSxcbiAgICAgICAgXCJzY3JvbGxJbis9MC4zXCJcbiAgICAgICk7XG5cbiAgICAgIC8vIEFuaW1hdGUgQ29udGVudFxuICAgICAgY29udGVudFRMLmZyb21UbyhcbiAgICAgICAgY2hhcnNIMixcbiAgICAgICAgeyB4OiAtMjAsIG9wYWNpdHk6IDAgfSxcbiAgICAgICAgeyB4OiAwLCBvcGFjaXR5OiAxLCBzdGFnZ2VyOiB7IGFtb3VudDogMC4zLCBmcm9tOiBcInJhbmRvbVwiIH0gfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgY29udGVudFRMLmZyb21UbyhcbiAgICAgICAgbGluZXNQLFxuICAgICAgICB7IG9wYWNpdHk6IDAsIHg6IC00MCB9LFxuICAgICAgICB7IG9wYWNpdHk6IDEsIHg6IDAsIHN0YWdnZXI6IHsgYW1vdW50OiAwLjMgfSB9LFxuICAgICAgICBcInNjcm9sbEluKz0wLjFcIlxuICAgICAgKTtcblxuICAgICAgLy8gQW5pbWF0ZSBBcnJvd1xuICAgICAgYXJyb3dUTC5mcm9tVG8oXG4gICAgICAgIHNlY3Rpb25UZXh0LFxuICAgICAgICB7IHk6IC02LCBvcGFjaXR5OiAwIH0sXG4gICAgICAgIHsgeTogMCwgb3BhY2l0eTogMSB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBhcnJvd1RMLmZyb21UbyhcbiAgICAgICAgZG93bkFycm93TGluZSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMTAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJbis9MC4wMjVcIlxuICAgICAgKTtcbiAgICAgIGFycm93VEwuZnJvbVRvKFxuICAgICAgICBkb3duQXJyb3dQb2ludCxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjUwJSA1MCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW4rPTAuMTc1XCJcbiAgICAgICk7XG5cbiAgICAgIC8vIEJ1aWxkIE1hc3RlciBUTFRMXG4gICAgICB0bC5mcm9tVG8odGhpc0JhY2ssIHsgb3BhY2l0eTogMCB9LCB7IG9wYWNpdHk6IDEgfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmFkZChsaW5lVEwsIFwic2Nyb2xsSW5BbGwrPTAuOVwiKTtcbiAgICAgIHRsLmFkZChjb250ZW50VEwsIFwic2Nyb2xsSW5BbGwrPTEuNVwiKTtcbiAgICAgIHRsLmFkZChhcnJvd1RMLCBcInNjcm9sbEluQWxsKz0xLjVcIik7XG5cbiAgICAgIHJldHVybiB0bDtcbiAgICB9LFxuXG4gICAgc2VjdGlvbkFuaW00OiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9ICQoXCIjc2VjdGlvbjVcIik7XG4gICAgICBsZXQgdGhpc0JhY2sgPSAkKFwiI2JhY2tncm91bmQ1XCIpO1xuICAgICAgbGV0IHRoaXNPdmVybGF5ID0gJChcIiNvdmVybGF5NVwiKTtcbiAgICAgIGxldCBjaGFyc0gyID0gJCh0aGlzU2VjKS5maW5kKFwiLmgyQ2hhcnNcIik7XG4gICAgICBsZXQgbGluZXNQID0gJCh0aGlzU2VjKS5maW5kKFwiLnBMaW5lc1wiKTtcbiAgICAgIGxldCBjZW50ZXI0TCA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItNExcIik7XG4gICAgICBsZXQgY2VudGVyNFIgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTRSXCIpO1xuICAgICAgbGV0IGNlbnRlcjNMID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci0zTFwiKTtcbiAgICAgIGxldCBjZW50ZXIzUiA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItM1JcIik7XG4gICAgICBsZXQgY2VudGVyMkwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTJMXCIpO1xuICAgICAgbGV0IGNlbnRlcjJSID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci0yUlwiKTtcbiAgICAgIC8vIEFycm93IFBpZWNlc1xuICAgICAgbGV0IGRvd25BcnJvdyA9ICQodGhpc1NlYykuZmluZChcIiNkb3duLWFycm93XCIpO1xuICAgICAgbGV0IGRvd25BcnJvd0xpbmUgPSAkKHRoaXNTZWMpLmZpbmQoXCIjZG93bi1hcnJvdy1saW5lXCIpO1xuICAgICAgbGV0IGRvd25BcnJvd1BvaW50ID0gJCh0aGlzU2VjKS5maW5kKFwiI2Rvd24tYXJyb3ctcG9pbnRcIik7XG4gICAgICBsZXQgc2VjdGlvblRleHQgPSAkKHRoaXNTZWMpLmZpbmQoXCIuZG93bi1hcnJvdy10ZXh0XCIpO1xuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHBhdXNlZDogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMC41LFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9LFxuICAgICAgICAvLyBSZWxlYXNlIFRoZSBTY3JvbGwgTG9ja1xuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZ3NhcC5zZXQoZG9jdW1lbnQuYm9keSwgeyBvdmVyZmxvdzogXCJhdXRvXCIgfSk7XG4gICAgICAgICAgLy8gZ3NhcC5zZXQoJyNiYWNrZ3JvdW5kMScsIHtvcGFjaXR5OjB9KTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgbGluZVRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246IDAuNixcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgY29udGVudFRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgICAgICBlYXNlOiBcImJhY2sub3V0KDEuNSlcIixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgYXJyb3dUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOiAwLjE1LFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9LFxuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gQm91bmNlIFRoZSBEb3duIEFycm93XG4gICAgICAgICAgZ3NhcFxuICAgICAgICAgICAgLnRpbWVsaW5lKHsgcmVwZWF0OiAtMSwgeW95bzogdHJ1ZSB9KVxuICAgICAgICAgICAgLnRvKGRvd25BcnJvdywgeyB5OiAtNCwgZHVyYXRpb246IDEsIGVhc2U6IFwibm9uZVwiIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvblJldmVyc2VDb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFN0b3AgQm91bmNpbiBUaGUgRG93biBBcnJvdyBhbmQgUmVzZXQgaXQncyBZIHBvc2l0aW9uXG4gICAgICAgICAgZ3NhcC5raWxsVHdlZW5zT2YoZG93bkFycm93KTtcbiAgICAgICAgICBnc2FwLnNldChkb3duQXJyb3csIHsgeTogMCB9KTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBTZXQgYmFja2dyb3VuZCB6LWluZGV4IGJ5IHNlY3Rpb24gbnVtYmVyIC8gU2VjdGlvbiAyIGhhcyBubyBiYWNrIC8gU2VjdGlvbiAzIGlzIHotaW5kZXggMTEwIHRvIHN0YXkgYWJvdmUgYWxsXG4gICAgICB0bC5zZXQodGhpc0JhY2ssIHsgekluZGV4OiAxMDUgfSk7XG4gICAgICB0bC5zZXQodGhpc092ZXJsYXksIHsgekluZGV4OiAxMDUgfSk7XG4gICAgICAvLyBTZXQgc2VjdGlvbiB6LWluZGV4IGJ5IHNlY3Rpb24gbnVtYmVyXG4gICAgICB0bC5mcm9tVG8odGhpc1NlYywgeyB6SW5kZXg6IDEzIH0sIHsgekluZGV4OiAxMDA1IH0pO1xuXG4gICAgICAvLyBBbmltYXRlIExpbmVzXG4gICAgICAvLyBsaW5lVEwuZnJvbVRvKGNlbnRlcjRMLCB7ZHJhd1NWRzpcIjEwMCUgMTAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgLy8gbGluZVRMLmZyb21UbyhjZW50ZXI0Uiwge2RyYXdTVkc6XCIwJSAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgLy8gbGluZVRMLmZyb21UbyhjZW50ZXIzTCwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIC8vIGxpbmVUTC5mcm9tVG8oY2VudGVyM1IsIHtkcmF3U1ZHOlwiMCUgMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIC8vIGxpbmVUTC5mcm9tVG8oY2VudGVyMkwsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICAvLyBsaW5lVEwuZnJvbVRvKGNlbnRlcjJSLCB7ZHJhd1NWRzpcIjAlIDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG5cbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGNlbnRlcjRMLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMCUgMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGNlbnRlcjRSLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAxMDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBjZW50ZXIzTCxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjAlIDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBjZW50ZXIzUixcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMTAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyMkwsXG4gICAgICAgIHsgZHJhd1NWRzogXCIwJSAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyMlIsXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDEwMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIFwiI2hvbmV5Q2xpcEVuZFwiLFxuICAgICAgICB7IG1vcnBoU1ZHOiB7IHNoYXBlOiBcIiNob25leUNsaXBTdGFydFwiIH0gfSxcbiAgICAgICAge1xuICAgICAgICAgIG1vcnBoU1ZHOiB7IHNoYXBlOiBcIiNob25leUNsaXBFbmRcIiB9LFxuICAgICAgICAgIGR1cmF0aW9uOiAwLjQsXG4gICAgICAgICAgZWFzZTogXCJzaW5lLm91dFwiLFxuICAgICAgICB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG5cbiAgICAgIC8vIEFuaW1hdGUgQ29udGVudFxuICAgICAgY29udGVudFRMLmZyb21UbyhcbiAgICAgICAgY2hhcnNIMixcbiAgICAgICAgeyB4OiAtMjAsIG9wYWNpdHk6IDAgfSxcbiAgICAgICAgeyB4OiAwLCBvcGFjaXR5OiAxLCBzdGFnZ2VyOiB7IGFtb3VudDogMC4zLCBmcm9tOiBcInJhbmRvbVwiIH0gfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgY29udGVudFRMLmZyb21UbyhcbiAgICAgICAgbGluZXNQLFxuICAgICAgICB7IG9wYWNpdHk6IDAsIHg6IC00MCB9LFxuICAgICAgICB7IG9wYWNpdHk6IDEsIHg6IDAsIHN0YWdnZXI6IHsgYW1vdW50OiAwLjMgfSB9LFxuICAgICAgICBcInNjcm9sbEluKz0wLjFcIlxuICAgICAgKTtcblxuICAgICAgLy8gQW5pbWF0ZSBBcnJvd1xuICAgICAgYXJyb3dUTC5mcm9tVG8oXG4gICAgICAgIFwiI2JvdHRvbS1zbWFsbC0yXCIsXG4gICAgICAgIHsgZHJhd1NWRzogXCI1MCUgNTAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjAlIDEwMCVcIiwgZHVyYXRpb246IDAuMywgZWFzZTogXCJzaW5lLm91dFwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGFycm93VEwuZnJvbVRvKFxuICAgICAgICBzZWN0aW9uVGV4dCxcbiAgICAgICAgeyB5OiAtNiwgb3BhY2l0eTogMCB9LFxuICAgICAgICB7IHk6IDAsIG9wYWNpdHk6IDEgfSxcbiAgICAgICAgXCJzY3JvbGxJbis9MC4xXCJcbiAgICAgICk7XG4gICAgICBhcnJvd1RMLmZyb21UbyhcbiAgICAgICAgZG93bkFycm93TGluZSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMTAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJbis9MC4xMjVcIlxuICAgICAgKTtcbiAgICAgIGFycm93VEwuZnJvbVRvKFxuICAgICAgICBkb3duQXJyb3dQb2ludCxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjUwJSA1MCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW4rPTAuMjc1XCJcbiAgICAgICk7XG5cbiAgICAgIC8vIEJ1aWxkIE1hc3RlciBUTFRMXG4gICAgICB0bC5mcm9tVG8oXG4gICAgICAgIHRoaXNPdmVybGF5LFxuICAgICAgICB7IG9wYWNpdHk6IDAgfSxcbiAgICAgICAgeyBvcGFjaXR5OiAwLjkgfSxcbiAgICAgICAgXCJzY3JvbGxJbkFsbCs9MC44XCJcbiAgICAgICk7XG4gICAgICB0bC5mcm9tVG8oXG4gICAgICAgIHRoaXNCYWNrLFxuICAgICAgICB7IG9wYWNpdHk6IDAgfSxcbiAgICAgICAgeyBvcGFjaXR5OiAxLCBkdXJhdGlvbjogMSB9LFxuICAgICAgICBcInNjcm9sbEluQWxsXCJcbiAgICAgICk7XG4gICAgICB0bC5hZGQobGluZVRMLCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuYWRkKGNvbnRlbnRUTCwgXCJzY3JvbGxJbkFsbCs9MVwiKTtcbiAgICAgIHRsLmFkZChhcnJvd1RMLCBcInNjcm9sbEluQWxsKz0xXCIpO1xuXG4gICAgICByZXR1cm4gdGw7XG4gICAgfSxcblxuICAgIHNlY3Rpb25BbmltNTogKCkgPT4ge1xuICAgICAgbGV0IHRoaXNTZWMgPSAkKFwiI3NlY3Rpb242XCIpO1xuICAgICAgbGV0IHRoaXNCYWNrID0gJChcIiNiYWNrZ3JvdW5kNlwiKTtcbiAgICAgIGxldCBjaGFyc0gyID0gJCh0aGlzU2VjKS5maW5kKFwiLmgyQ2hhcnNcIik7XG4gICAgICBsZXQgbGluZXNQID0gJCh0aGlzU2VjKS5maW5kKFwiLnBMaW5lc1wiKTtcbiAgICAgIGxldCB0aGlzT3ZlcmxheSA9ICQoXCIjb3ZlcmxheTZcIik7XG4gICAgICBsZXQgY2VudGVyNEwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTRMXCIpO1xuICAgICAgbGV0IGNlbnRlcjRSID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci00UlwiKTtcbiAgICAgIGxldCBjZW50ZXIzTCA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItM0xcIik7XG4gICAgICBsZXQgY2VudGVyM1IgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTNSXCIpO1xuICAgICAgbGV0IGNlbnRlcjJMID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci0yTFwiKTtcbiAgICAgIGxldCBjZW50ZXIyUiA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItMlJcIik7XG4gICAgICBsZXQgYm90dG9tU21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjYm90dG9tLXNtYWxsXCIpO1xuICAgICAgLy8gQXJyb3cgUGllY2VzXG4gICAgICBsZXQgZG93bkFycm93ID0gJCh0aGlzU2VjKS5maW5kKFwiI2Rvd24tYXJyb3dcIik7XG4gICAgICBsZXQgZG93bkFycm93TGluZSA9ICQodGhpc1NlYykuZmluZChcIiNkb3duLWFycm93LWxpbmVcIik7XG4gICAgICBsZXQgZG93bkFycm93UG9pbnQgPSAkKHRoaXNTZWMpLmZpbmQoXCIjZG93bi1hcnJvdy1wb2ludFwiKTtcbiAgICAgIGxldCBzZWN0aW9uVGV4dCA9ICQodGhpc1NlYykuZmluZChcIi5kb3duLWFycm93LXRleHRcIik7XG4gICAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgcGF1c2VkOiB0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIFJlbGVhc2UgVGhlIFNjcm9sbCBMb2NrXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBnc2FwLnNldChkb2N1bWVudC5ib2R5LCB7IG92ZXJmbG93OiBcImF1dG9cIiB9KTtcbiAgICAgICAgICAvLyBnc2FwLnNldCgnI2JhY2tncm91bmQxJywge29wYWNpdHk6MH0pO1xuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGxldCBsaW5lVEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMC44LFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGxldCBjb250ZW50VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgICAgIGVhc2U6IFwiYmFjay5vdXQoMS41KVwiLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIGxldCBhcnJvd1RMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAvLyAgIGRlZmF1bHRzOiB7XG4gICAgICAvLyAgICAgZHVyYXRpb246IDAuMTUsXG4gICAgICAvLyAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vICAgICAvLyBCb3VuY2UgVGhlIERvd24gQXJyb3dcbiAgICAgIC8vICAgICBnc2FwXG4gICAgICAvLyAgICAgICAudGltZWxpbmUoeyByZXBlYXQ6IC0xLCB5b3lvOiB0cnVlIH0pXG4gICAgICAvLyAgICAgICAudG8oZG93bkFycm93LCB7IHk6IC00LCBkdXJhdGlvbjogMSwgZWFzZTogXCJub25lXCIgfSk7XG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIG9uUmV2ZXJzZUNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyAgICAgLy8gU3RvcCBCb3VuY2luIFRoZSBEb3duIEFycm93IGFuZCBSZXNldCBpdCdzIFkgcG9zaXRpb25cbiAgICAgIC8vICAgICBnc2FwLmtpbGxUd2VlbnNPZihkb3duQXJyb3cpO1xuICAgICAgLy8gICAgIGdzYXAuc2V0KGRvd25BcnJvdywgeyB5OiAwIH0pO1xuICAgICAgLy8gICB9LFxuICAgICAgLy8gfSk7XG5cbiAgICAgIC8vIFNldCBiYWNrZ3JvdW5kIHotaW5kZXggYnkgc2VjdGlvbiBudW1iZXIgLyBTZWN0aW9uIDIgaGFzIG5vIGJhY2sgLyBTZWN0aW9uIDMgaXMgei1pbmRleCAxMTAgdG8gc3RheSBhYm92ZSBhbGxcbiAgICAgIHRsLnNldCh0aGlzQmFjaywgeyB6SW5kZXg6IDEwNiB9KTtcbiAgICAgIHRsLnNldCh0aGlzT3ZlcmxheSwgeyB6SW5kZXg6IDEwNiB9KTtcbiAgICAgIC8vIFNldCBzZWN0aW9uIHotaW5kZXggYnkgc2VjdGlvbiBudW1iZXJcbiAgICAgIHRsLmZyb21Ubyh0aGlzU2VjLCB7IHpJbmRleDogMTMgfSwgeyB6SW5kZXg6IDEwMDYgfSk7XG5cbiAgICAgIC8vIEFuaW1hdGUgTGluZXNcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGNlbnRlcjRMLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAxMDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBjZW50ZXI0UixcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjAlIDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBjZW50ZXIzTCxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMTAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyM1IsXG4gICAgICAgIHsgZHJhd1NWRzogXCIwJSAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyMkwsXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDEwMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGNlbnRlcjJSLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMCUgMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcblxuICAgICAgLy8gQW5pbWF0ZSBDb250ZW50XG4gICAgICBjb250ZW50VEwuZnJvbVRvKFxuICAgICAgICBjaGFyc0gyLFxuICAgICAgICB7IHg6IC0yMCwgb3BhY2l0eTogMCB9LFxuICAgICAgICB7IHg6IDAsIG9wYWNpdHk6IDEsIHN0YWdnZXI6IHsgYW1vdW50OiAwLjMsIGZyb206IFwicmFuZG9tXCIgfSB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBjb250ZW50VEwuZnJvbVRvKFxuICAgICAgICBsaW5lc1AsXG4gICAgICAgIHsgb3BhY2l0eTogMCwgeDogLTQwIH0sXG4gICAgICAgIHsgb3BhY2l0eTogMSwgeDogMCwgc3RhZ2dlcjogeyBhbW91bnQ6IDAuMyB9IH0sXG4gICAgICAgIFwic2Nyb2xsSW4rPTAuMVwiXG4gICAgICApO1xuXG4gICAgICAvLyBBbmltYXRlIEFycm93XG4gICAgICAvLyBhcnJvd1RMLmZyb21UbyhcbiAgICAgIC8vICAgYm90dG9tU21hbGwsXG4gICAgICAvLyAgIHsgZHJhd1NWRzogXCI1MCUgNTAlXCIgfSxcbiAgICAgIC8vICAgeyBkcmF3U1ZHOiBcIjAlIDEwMCVcIiwgZHVyYXRpb246IDAuNCB9LFxuICAgICAgLy8gICBcInNjcm9sbEluXCJcbiAgICAgIC8vICk7XG4gICAgICAvLyBhcnJvd1RMLmZyb21UbyhcbiAgICAgIC8vICAgc2VjdGlvblRleHQsXG4gICAgICAvLyAgIHsgeTogLTYsIG9wYWNpdHk6IDAgfSxcbiAgICAgIC8vICAgeyB5OiAwLCBvcGFjaXR5OiAxIH0sXG4gICAgICAvLyAgIFwic2Nyb2xsSW4rPTAuMTVcIlxuICAgICAgLy8gKTtcbiAgICAgIC8vIGFycm93VEwuZnJvbVRvKFxuICAgICAgLy8gICBkb3duQXJyb3dMaW5lLFxuICAgICAgLy8gICB7IGRyYXdTVkc6IFwiMTAwJSAxMDAlXCIgfSxcbiAgICAgIC8vICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgLy8gICBcInNjcm9sbEluKz0wLjE3NVwiXG4gICAgICAvLyApO1xuICAgICAgLy8gYXJyb3dUTC5mcm9tVG8oXG4gICAgICAvLyAgIGRvd25BcnJvd1BvaW50LFxuICAgICAgLy8gICB7IGRyYXdTVkc6IFwiNTAlIDUwJVwiIH0sXG4gICAgICAvLyAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgIC8vICAgXCJzY3JvbGxJbis9MC4zMjVcIlxuICAgICAgLy8gKTtcblxuICAgICAgLy8gQnVpbGQgTWFzdGVyIFRMVExcbiAgICAgIHRsLmZyb21Ubyh0aGlzT3ZlcmxheSwgeyBvcGFjaXR5OiAwIH0sIHsgb3BhY2l0eTogMC4xIH0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8odGhpc0JhY2ssIHsgb3BhY2l0eTogMCB9LCB7IG9wYWNpdHk6IDEgfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmFkZChsaW5lVEwsIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5hZGQoY29udGVudFRMLCBcInNjcm9sbEluQWxsKz0wLjZcIik7XG4gICAgICAvLyB0bC5hZGQoYXJyb3dUTCwgXCJzY3JvbGxJbkFsbCs9MC44XCIpO1xuXG4gICAgICByZXR1cm4gdGw7XG4gICAgfSxcblxuICAgIHNlY3Rpb25BbmltNjogKCkgPT4ge1xuICAgICAgbGV0IHRoaXNTZWMgPSAkKFwiI3NlY3Rpb243XCIpO1xuICAgICAgbGV0IHRoaXNCYWNrID0gJChcIiNiYWNrZ3JvdW5kN1wiKTtcbiAgICAgIGxldCBjaGFyc0gyID0gJCh0aGlzU2VjKS5maW5kKFwiLmgyQ2hhcnNcIik7XG4gICAgICBsZXQgbGluZXNQID0gJCh0aGlzU2VjKS5maW5kKFwiLnBMaW5lc1wiKTtcbiAgICAgIGxldCB0aGlzT3ZlcmxheSA9ICQoXCIjb3ZlcmxheTdcIik7XG4gICAgICBsZXQgY2VudGVyNEwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTRMXCIpO1xuICAgICAgbGV0IGNlbnRlcjRSID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci00UlwiKTtcbiAgICAgIGxldCBjZW50ZXIzTCA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItM0xcIik7XG4gICAgICBsZXQgY2VudGVyM1IgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTNSXCIpO1xuICAgICAgbGV0IGNlbnRlcjJMID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci0yTFwiKTtcbiAgICAgIGxldCBjZW50ZXIyUiA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItMlJcIik7XG4gICAgICBsZXQgdG9wU21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjdG9wLXNtYWxsXCIpO1xuICAgICAgbGV0IGJvdHRvbVNtYWxsID0gJCh0aGlzU2VjKS5maW5kKFwiI2JvdHRvbS1zbWFsbFwiKTtcbiAgICAgIGxldCBjZW50ZXJTbWFsbCA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItc21hbGxcIik7XG4gICAgICBsZXQgdG9wTGVmdFNtYWxsID0gJCh0aGlzU2VjKS5maW5kKFwiI3RvcC1sZWZ0LXNtYWxsXCIpO1xuICAgICAgbGV0IHRvcFJpZ2h0dFNtYWxsID0gJCh0aGlzU2VjKS5maW5kKFwiI3RvcC1yaWdodC1zbWFsbFwiKTtcbiAgICAgIGxldCBib3R0b21MZWZ0U21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjYm90dG9tLWxlZnQtc21hbGxcIik7XG4gICAgICBsZXQgYm90dG9tUmlnaHR0U21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjYm90dG9tLXJpZ2h0LXNtYWxsXCIpO1xuICAgICAgbGV0IGltZ0NvbnRhaW5lciA9ICQodGhpc1NlYykuZmluZChcIi5pbWFnZUNvbnRhaW5lclwiKTtcbiAgICAgIGxldCBzdWJJbWcgPSAkKGltZ0NvbnRhaW5lcikuZmluZChcImltZ1wiKTtcbiAgICAgIC8vIEFycm93IFBpZWNlc1xuICAgICAgbGV0IGRvd25BcnJvdyA9ICQodGhpc1NlYykuZmluZChcIiNkb3duLWFycm93XCIpO1xuICAgICAgbGV0IGRvd25BcnJvd0xpbmUgPSAkKHRoaXNTZWMpLmZpbmQoXCIjZG93bi1hcnJvdy1saW5lXCIpO1xuICAgICAgbGV0IGRvd25BcnJvd1BvaW50ID0gJCh0aGlzU2VjKS5maW5kKFwiI2Rvd24tYXJyb3ctcG9pbnRcIik7XG4gICAgICBsZXQgc2VjdGlvblRleHQgPSAkKHRoaXNTZWMpLmZpbmQoXCIuZG93bi1hcnJvdy10ZXh0XCIpO1xuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHBhdXNlZDogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMC42LFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9LFxuICAgICAgICAvLyBSZWxlYXNlIFRoZSBTY3JvbGwgTG9ja1xuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZ3NhcC5zZXQoZG9jdW1lbnQuYm9keSwgeyBvdmVyZmxvdzogXCJhdXRvXCIgfSk7XG4gICAgICAgICAgLy8gZ3NhcC5zZXQoJyNiYWNrZ3JvdW5kMScsIHtvcGFjaXR5OjF9KTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgbGluZVRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246IDAuOCxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgY29udGVudFRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgICAgICBlYXNlOiBcImJhY2sub3V0KDEuNSlcIixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBsZXQgYXJyb3dUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgLy8gICBkZWZhdWx0czoge1xuICAgICAgLy8gICAgIGR1cmF0aW9uOjAuMTUsXG4gICAgICAvLyAgICAgZWFzZTpcIm5vbmVcIlxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgLy8gICAgIC8vIEJvdW5jZSBUaGUgRG93biBBcnJvd1xuICAgICAgLy8gICAgIGdzYXAudGltZWxpbmUoe3JlcGVhdDotMSwgeW95bzp0cnVlfSkudG8oZG93bkFycm93LCB7eTotNCwgZHVyYXRpb246MSwgZWFzZTpcIm5vbmVcIn0pO1xuICAgICAgLy8gICB9LFxuICAgICAgLy8gICBvblJldmVyc2VDb21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgIC8vICAgICAvLyBTdG9wIEJvdW5jaW4gVGhlIERvd24gQXJyb3cgYW5kIFJlc2V0IGl0J3MgWSBwb3NpdGlvblxuICAgICAgLy8gICAgIGdzYXAua2lsbFR3ZWVuc09mKGRvd25BcnJvdyk7XG4gICAgICAvLyAgICAgZ3NhcC5zZXQoZG93bkFycm93LCB7eTowfSk7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0pO1xuXG4gICAgICAvLyBTZXQgYmFja2dyb3VuZCB6LWluZGV4IGJ5IHNlY3Rpb24gbnVtYmVyIC8gU2VjdGlvbiAyIGhhcyBubyBiYWNrIC8gU2VjdGlvbiAzIGlzIHotaW5kZXggMTEwIHRvIHN0YXkgYWJvdmUgYWxsXG4gICAgICB0bC5zZXQodGhpc0JhY2ssIHsgekluZGV4OiAxMDcgfSk7XG4gICAgICB0bC5zZXQodGhpc092ZXJsYXksIHsgekluZGV4OiAxMDcgfSk7XG4gICAgICAvLyBTZXQgc2VjdGlvbiB6LWluZGV4IGJ5IHNlY3Rpb24gbnVtYmVyXG4gICAgICB0bC5mcm9tVG8odGhpc1NlYywgeyB6SW5kZXg6IDEzIH0sIHsgekluZGV4OiAxMDA3IH0pO1xuXG4gICAgICAvLyBBbmltYXRlIExpbmVzXG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBjZW50ZXI0TCxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjAlIDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBjZW50ZXI0UixcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMTAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyM0wsXG4gICAgICAgIHsgZHJhd1NWRzogXCIwJSAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyM1IsXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDEwMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGNlbnRlcjJMLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMCUgMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGNlbnRlcjJSLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAxMDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBbdG9wU21hbGwsIGJvdHRvbVNtYWxsLCBjZW50ZXJTbWFsbF0sXG4gICAgICAgIHsgZHJhd1NWRzogXCI1MCUgNTAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBbdG9wTGVmdFNtYWxsLCBib3R0b21MZWZ0U21hbGxdLFxuICAgICAgICB7IGRyYXdTVkc6IFwiNTAlIDUwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgW3RvcFJpZ2h0dFNtYWxsLCBib3R0b21SaWdodHRTbWFsbF0sXG4gICAgICAgIHsgZHJhd1NWRzogXCI1MCUgNTAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG5cbiAgICAgIC8vIEFuaW1hdGUgQ29udGVudFxuICAgICAgY29udGVudFRMLmZyb21UbyhcbiAgICAgICAgY2hhcnNIMixcbiAgICAgICAgeyB4OiAtMjAsIG9wYWNpdHk6IDAgfSxcbiAgICAgICAgeyB4OiAwLCBvcGFjaXR5OiAxLCBzdGFnZ2VyOiB7IGFtb3VudDogMC4zLCBmcm9tOiBcInJhbmRvbVwiIH0gfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgY29udGVudFRMLmZyb21UbyhcbiAgICAgICAgbGluZXNQLFxuICAgICAgICB7IG9wYWNpdHk6IDAsIHg6IC00MCB9LFxuICAgICAgICB7IG9wYWNpdHk6IDEsIHg6IDAsIHN0YWdnZXI6IHsgYW1vdW50OiAwLjMgfSB9LFxuICAgICAgICBcInNjcm9sbEluKz0wLjFcIlxuICAgICAgKTtcbiAgICAgIGNvbnRlbnRUTC5mcm9tVG8oXG4gICAgICAgIFwiLnRleHRJbWFnZVwiLFxuICAgICAgICB7IG9wYWNpdHk6IDAsIHg6IC00MCB9LFxuICAgICAgICB7IG9wYWNpdHk6IDEsIHg6IDAgfSxcbiAgICAgICAgXCJzY3JvbGxJbis9MC4xXCJcbiAgICAgICk7XG4gICAgICBjb250ZW50VEwuZnJvbVRvKFxuICAgICAgICBcIiNwYXJ0bmVyQ2xpcEVuZFwiLFxuICAgICAgICB7IG1vcnBoU1ZHOiB7IHNoYXBlOiBcIiNwYXJ0bmVyQ2xpcFN0YXJ0XCIgfSB9LFxuICAgICAgICB7XG4gICAgICAgICAgbW9ycGhTVkc6IHsgc2hhcGU6IFwiI3BhcnRuZXJDbGlwRW5kXCIgfSxcbiAgICAgICAgICBkdXJhdGlvbjogMC40LFxuICAgICAgICAgIGVhc2U6IFwic2luZS5vdXRcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCJzY3JvbGxJbis9MC4yXCJcbiAgICAgICk7XG5cbiAgICAgIC8vIC8vIEFuaW1hdGUgQXJyb3dcbiAgICAgIC8vIGFycm93VEwuZnJvbVRvKHNlY3Rpb25UZXh0LCB7eTotNiwgb3BhY2l0eTowfSwge3k6MCwgb3BhY2l0eToxfSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIC8vIGFycm93VEwuZnJvbVRvKGRvd25BcnJvd0xpbmUsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW4rPTAuMDI1XCIpO1xuICAgICAgLy8gYXJyb3dUTC5mcm9tVG8oZG93bkFycm93UG9pbnQsIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluKz0wLjE3NVwiKTtcblxuICAgICAgLy8gQnVpbGQgTWFzdGVyIFRMVExcbiAgICAgIHRsLmZyb21Ubyh0aGlzT3ZlcmxheSwgeyBvcGFjaXR5OiAwIH0sIHsgb3BhY2l0eTogMC45IH0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8odGhpc0JhY2ssIHsgb3BhY2l0eTogMCB9LCB7IG9wYWNpdHk6IDEgfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmFkZChsaW5lVEwsIFwic2Nyb2xsSW5BbGwrPTAuMlwiKTtcbiAgICAgIHRsLmFkZChjb250ZW50VEwsIFwic2Nyb2xsSW5BbGwrPTAuNlwiKTtcbiAgICAgIHRsLmZyb21UbyhcbiAgICAgICAgXCIuZm9vdGVyQXJlYVwiLFxuICAgICAgICB7IHk6IFwiMTAwJVwiIH0sXG4gICAgICAgIHsgeTogMCwgZHVyYXRpb246IDAuNywgZWFzZTogXCJiYWNrLm91dCgwLjUpXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJbkFsbCs9MC43XCJcbiAgICAgICk7XG4gICAgICAvLyB0bC5hZGQoYXJyb3dUTCwgXCJzY3JvbGxJbkFsbCs9MC44XCIpO1xuXG4gICAgICByZXR1cm4gdGw7XG4gICAgfSxcblxuICAgIC8vIHNlY3Rpb25BbmltODogKCkgPT4ge1xuICAgIC8vICAgbGV0IHRoaXNTZWMgPSAkKCcjc2VjdGlvbjgnKTtcbiAgICAvLyAgIGxldCB0aGlzQmFjayA9ICQoJyNiYWNrZ3JvdW5kOCcpO1xuICAgIC8vICAgbGV0IGNoYXJzSDIgPSAkKHRoaXNTZWMpLmZpbmQoJy5oMkNoYXJzJyk7XG4gICAgLy8gICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAvLyAgICAgcGF1c2VkOnRydWUsXG4gICAgLy8gICAgIGRlZmF1bHRzOiB7XG4gICAgLy8gICAgICAgZHVyYXRpb246MC4zLFxuICAgIC8vICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICAvLyBSZWxlYXNlIFRoZSBTY3JvbGwgTG9ja1xuICAgIC8vICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgIC8vICAgICAgIGdzYXAuc2V0KGRvY3VtZW50LmJvZHksIHtvdmVyZmxvdzogXCJhdXRvXCJ9KVxuICAgIC8vICAgICB9XG4gICAgLy8gICB9KTtcblxuICAgIC8vICAgbGV0IGNvbnRlbnRUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgIC8vICAgICBkZWZhdWx0czoge1xuICAgIC8vICAgICAgIGR1cmF0aW9uOjAuMyxcbiAgICAvLyAgICAgICBlYXNlOlwiYmFjay5vdXQoMS41KVwiXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0pO1xuXG4gICAgLy8gICAvLyBTZXQgYmFja2dyb3VuZCB6LWluZGV4IGJ5IHNlY3Rpb24gbnVtYmVyIC8gU2VjdGlvbiAyIGhhcyBubyBiYWNrIC8gU2VjdGlvbiAzIGlzIHotaW5kZXggMTEwIHRvIHN0YXkgYWJvdmUgYWxsXG4gICAgLy8gICB0bC5zZXQodGhpc0JhY2ssIHt6SW5kZXg6MTA4fSk7XG4gICAgLy8gICAvLyBTZXQgc2VjdGlvbiB6LWluZGV4IGJ5IHNlY3Rpb24gbnVtYmVyXG4gICAgLy8gICB0bC5mcm9tVG8odGhpc1NlYywge3pJbmRleDoxM30se3pJbmRleDoxMDA4fSk7XG5cbiAgICAvLyAgIC8vIEFuaW1hdGUgQ29udGVudFxuICAgIC8vICAgY29udGVudFRMLmZyb21UbyhjaGFyc0gyLFxuICAgIC8vICAgICB7eDotMjAsIG9wYWNpdHk6MH0sXG4gICAgLy8gICAgIHt4OjAsIG9wYWNpdHk6IDEsIHN0YWdnZXI6e2Ftb3VudDowLjMsIGZyb206XCJyYW5kb21cIn19LFxuICAgIC8vICAgXCJzY3JvbGxJblwiKTtcbiAgICAvLyAgIGNvbnRlbnRUTC5mcm9tVG8oJy5zaW5nbGVJbWFnZURvd25sb2FkJyx7XG4gICAgLy8gICAgIG9wYWNpdHk6MCwgeTotMjB9LFxuICAgIC8vICAgICB7b3BhY2l0eToxLHk6MCwgc3RhZ2dlcjp7YW1vdW50OjAuM319LFxuICAgIC8vICAgXCJzY3JvbGxJbis9MC4yXCIpO1xuXG4gICAgLy8gICAvLyBCdWlsZCBNYXN0ZXIgVExUTFxuICAgIC8vICAgdGwuZnJvbVRvKHRoaXNCYWNrLCB7dG9wOictMTAwJSd9LHt0b3A6MH0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgLy8gICB0bC5mcm9tVG8oJy5mb290ZXJBcmVhJywge3k6JzEwMCUnfSwge3k6MCwgZHVyYXRpb246MC41LCBlYXNlOidiYWNrLm91dCgwLjUpJ30sIFwic2Nyb2xsSW5BbGwrPTAuNVwiKTtcbiAgICAvLyAgIHRsLmFkZChjb250ZW50VEwsIFwic2Nyb2xsSW5BbGwrPTAuM1wiKTtcblxuICAgIC8vICAgcmV0dXJuIHRsO1xuICAgIC8vIH0sXG4gIH07XG5cbiAgLy8gUGxheSBTZWN0aW9uIDEgYXV0b21hdGljYWxseVxuICBzZWN0aW9uQW5pbVtcInNlY3Rpb25BbmltMVwiXSgpLnBsYXkoKTtcblxuICAvLyBGaXJlIEFuIEFuaW1hdGlvbiBGcm9tIEFib3ZlIGZvciBFYWNoIFNlY3Rpb25cbiAgbGV0IHNlY3Rpb25UcmlnID0gKG15Q291bnQpID0+IHtcbiAgICAvLyBBZGQgQW4gRXh0cmEgU2Nyb2xsIGZvciBCdXp6IE9uIEJlZXMgaW4gU2VjdGlvbiA0LCA1LCA2ICsxIHRvdGFsIGVhY2ggdGltZVxuICAgIGlmIChteUNvdW50ID09PSAxKSB7XG4gICAgICB2YXIgc3RhcnRIZWlnaHQgPSAwO1xuICAgIH0gZWxzZSBpZiAobXlDb3VudCA9PT0gMikge1xuICAgICAgdmFyIHN0YXJ0SGVpZ2h0ID0gbXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCAtIDEpIC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgfSBlbHNlIGlmIChteUNvdW50ID09PSAzKSB7XG4gICAgICB2YXIgc3RhcnRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIChteUNvdW50IC0gMSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDQpIHtcbiAgICAgIHZhciBzdGFydEhlaWdodCA9IG15U2Nyb2xsSGVpZ2h0ICogbXlDb3VudCAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgICAgLy8gdmFyIHN0YXJ0SGVpZ2h0ID0gbXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCAtIDEpIC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgfSBlbHNlIGlmIChteUNvdW50ID09PSA1KSB7XG4gICAgICB2YXIgc3RhcnRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICAgIC8vIHZhciBzdGFydEhlaWdodCA9IG15U2Nyb2xsSGVpZ2h0ICogbXlDb3VudCAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIH0gZWxzZSBpZiAobXlDb3VudCA9PT0gNikge1xuICAgICAgdmFyIHN0YXJ0SGVpZ2h0ID0gbXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCArIDIpIC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgICAvLyB2YXIgc3RhcnRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDcpIHtcbiAgICAgIHZhciBzdGFydEhlaWdodCA9IG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAyKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIH0gZWxzZSBpZiAobXlDb3VudCA9PT0gOCkge1xuICAgICAgdmFyIHN0YXJ0SGVpZ2h0ID0gbXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCArIDIpIC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgfVxuXG4gICAgaWYgKG15Q291bnQgPT09IDEpIHtcbiAgICAgIHZhciBlbmRIZWlnaHQgPSBteVNjcm9sbEhlaWdodDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDIpIHtcbiAgICAgIHZhciBlbmRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIG15Q291bnQgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDMpIHtcbiAgICAgIHZhciBlbmRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICAgIC8vIHZhciBlbmRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIG15Q291bnQgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDQpIHtcbiAgICAgIHZhciBlbmRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMikgLSBteVNjcm9sbE9mZnNldDtcbiAgICAgIC8vIHZhciBlbmRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDUpIHtcbiAgICAgIHZhciBlbmRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMykgLSBteVNjcm9sbE9mZnNldDtcbiAgICAgIC8vIHZhciBlbmRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMikgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDYpIHtcbiAgICAgIHZhciBlbmRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMykgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDcpIHtcbiAgICAgIHZhciBlbmRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMykgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDgpIHtcbiAgICAgIHZhciBlbmRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMykgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZygnc3RhcnQgaGVpZ2h0JytteUNvdW50KycgaXMgJytzdGFydEhlaWdodCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2VuZCBoZWlnaHQnK215Q291bnQrJyBpcyAnK2VuZEhlaWdodCk7XG5cbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICAvLyB0cmlnZ2VyOidib2R5JyxcbiAgICAgIHN0YXJ0OiBzdGFydEhlaWdodCxcbiAgICAgIGVuZDogZW5kSGVpZ2h0LFxuICAgICAgc2NydWI6IDEsXG4gICAgICBvbkVudGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChteUNvdW50ID4gMSkge1xuICAgICAgICAgIGdzYXAuc2V0KGRvY3VtZW50LmJvZHksIHsgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfSk7XG4gICAgICAgICAgc2VjdGlvbkFuaW1bXCJzZWN0aW9uQW5pbVwiICsgbXlDb3VudF0oKS5wbGF5KCk7XG4gICAgICAgICAgLy8gYWxlcnQobXlDb3VudCArIFwiIHNlY3Rpb24gZW50ZXJlZFwiKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTGVhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKG15Q291bnQgPCA1KSB7XG4gICAgICAgICAgZ3NhcC5zZXQoZG9jdW1lbnQuYm9keSwgeyBvdmVyZmxvdzogXCJoaWRkZW5cIiB9KTtcbiAgICAgICAgICBzZWN0aW9uQW5pbVtcInNlY3Rpb25BbmltXCIgKyBteUNvdW50XSgpLnJldmVyc2UoMCk7XG4gICAgICAgICAgLy8gYWxlcnQobXlDb3VudCArIFwiIHNlY3Rpb24gbGVmdFwiKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uRW50ZXJCYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChteUNvdW50IDwgNSkge1xuICAgICAgICAgIGdzYXAuc2V0KGRvY3VtZW50LmJvZHksIHsgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfSk7XG4gICAgICAgICAgc2VjdGlvbkFuaW1bXCJzZWN0aW9uQW5pbVwiICsgbXlDb3VudF0oKS5wbGF5KCk7XG4gICAgICAgICAgLy8gYWxlcnQobXlDb3VudCArIFwiIHNlY3Rpb24gYmFjayBhZ2FpblwiKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTGVhdmVCYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChteUNvdW50ID4gMSkge1xuICAgICAgICAgIGdzYXAuc2V0KGRvY3VtZW50LmJvZHksIHsgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfSk7XG4gICAgICAgICAgc2VjdGlvbkFuaW1bXCJzZWN0aW9uQW5pbVwiICsgbXlDb3VudF0oKS5yZXZlcnNlKDApO1xuICAgICAgICAgIC8vIGFsZXJ0KG15Q291bnQgKyBcIiBzZWN0aW9uIGxlZnQgYWdhaW5cIik7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgLy8gQ2FsbCBUaGUgVHJpZ2dlciBPbiBFdmVyeSBTZWN0aW9uXG4gIC8vIEFuaW1hdGlvbiB0cmlnZ2VycyBhcmUgY2FsY3VsYXRlZCBpbiB0aGUgZnVuY3Rpb25cbiAgbGV0IGkgPSAxO1xuICAkKFwic2VjdGlvblwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBzZWN0aW9uVHJpZyhpKTtcbiAgICBpKys7XG4gIH0pO1xuXG4gIC8vIFNpbmdsZSBCdXp6IG9uIEJlZXMgU2VjdGlvbnNcbiAgLy8gQnV6eiBBbmltYXRpb24gNVxuICBsZXQgYnV6ekluNCA9ICgpID0+IHtcbiAgICBsZXQgYnV6ekJsb2NrID0gJChcIiNzZWN0aW9uNFwiKS5maW5kKFwiLmJ1enpPbkJlZXNCbG9ja1wiKTtcbiAgICBsZXQgYnV6eldpZHRoID0gYnV6ekJsb2NrLm91dGVyV2lkdGgoKTtcbiAgICBsZXQgdGwgPSBuZXcgZ3NhcC50aW1lbGluZSh7XG4gICAgICBwYXVzZWQ6IHRydWUsXG4gICAgICBkZWZhdWx0czogeyBkdXJhdGlvbjogMC41LCBlYXNlOiBcImJhY2sub3V0KDAuMjUpO1wiIH0sXG4gICAgfSk7XG4gICAgdGwuZnJvbVRvKGJ1enpCbG9jaywgeyB4OiBidXp6V2lkdGggfSwgeyB4OiAwIH0pO1xuICAgIHJldHVybiB0bDtcbiAgfTtcblxuICBsZXQgYnV6elRyaWc0ID0gKG15Q291bnQpID0+IHtcbiAgICB2YXIgc3RhcnRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIChteUNvdW50IC0gMC41KSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIHZhciBlbmRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMC41KSAtIG15U2Nyb2xsT2Zmc2V0O1xuXG4gICAgLy8gY29uc29sZS5sb2coJ2J1eno0IHN0YXJ0IGlzICcrc3RhcnRIZWlnaHQpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdidXp6NCBlbmQgaXMgJytlbmRIZWlnaHQpO1xuXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgc3RhcnQ6IHN0YXJ0SGVpZ2h0LFxuICAgICAgZW5kOiBlbmRIZWlnaHQsXG4gICAgICBzY3J1YjogMSxcbiAgICAgIG9uRW50ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYnV6ekluNCgpLnBsYXkoKTtcbiAgICAgIH0sXG4gICAgICBvbkxlYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJ1enpJbjQoKS5yZXZlcnNlKDApO1xuICAgICAgfSxcbiAgICAgIG9uRW50ZXJCYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJ1enpJbjQoKS5wbGF5KCk7XG4gICAgICB9LFxuICAgICAgb25MZWF2ZUJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYnV6ekluNCgpLnJldmVyc2UoMCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIGJ1enpUcmlnNCgzKTtcblxuICAvLyBCdXp6IEFuaW1hdGlvbiA1XG4gIGxldCBidXp6SW41ID0gKCkgPT4ge1xuICAgIGxldCBidXp6QmxvY2sgPSAkKFwiI3NlY3Rpb241XCIpLmZpbmQoXCIuYnV6ek9uQmVlc0Jsb2NrXCIpO1xuICAgIGxldCBidXp6V2lkdGggPSBidXp6QmxvY2sub3V0ZXJXaWR0aCgpO1xuICAgIGxldCB0bCA9IG5ldyBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIHBhdXNlZDogdHJ1ZSxcbiAgICAgIGRlZmF1bHRzOiB7IGR1cmF0aW9uOiAwLjUsIGVhc2U6IFwiYmFjay5vdXQoMC4yNSk7XCIgfSxcbiAgICB9KTtcbiAgICB0bC5mcm9tVG8oYnV6ekJsb2NrLCB7IHg6IGJ1enpXaWR0aCB9LCB7IHg6IDAgfSk7XG4gICAgcmV0dXJuIHRsO1xuICB9O1xuXG4gIGxldCBidXp6VHJpZzUgPSAobXlDb3VudCkgPT4ge1xuICAgIHZhciBzdGFydEhlaWdodCA9IG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAwLjUpIC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgdmFyIGVuZEhlaWdodCA9IG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAxLjUpIC0gbXlTY3JvbGxPZmZzZXQ7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnYnV6ejUgc3RhcnQgaXMgJytzdGFydEhlaWdodCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2J1eno1IGVuZCBpcyAnK2VuZEhlaWdodCk7XG5cbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICBzdGFydDogc3RhcnRIZWlnaHQsXG4gICAgICBlbmQ6IGVuZEhlaWdodCxcbiAgICAgIHNjcnViOiAxLFxuICAgICAgb25FbnRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBidXp6SW41KCkucGxheSgpO1xuICAgICAgfSxcbiAgICAgIG9uTGVhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYnV6ekluNSgpLnJldmVyc2UoMCk7XG4gICAgICB9LFxuICAgICAgb25FbnRlckJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYnV6ekluNSgpLnBsYXkoKTtcbiAgICAgIH0sXG4gICAgICBvbkxlYXZlQmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICBidXp6SW41KCkucmV2ZXJzZSgwKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgYnV6elRyaWc1KDQpO1xuXG4gIC8vIEJ1enogQW5pbWF0aW9uIDZcbiAgbGV0IGJ1enpJbjYgPSAoKSA9PiB7XG4gICAgbGV0IGJ1enpCbG9jayA9ICQoXCIjc2VjdGlvbjZcIikuZmluZChcIi5idXp6T25CZWVzQmxvY2tcIik7XG4gICAgbGV0IGJ1enpXaWR0aCA9IGJ1enpCbG9jay5vdXRlcldpZHRoKCk7XG4gICAgbGV0IHRsID0gbmV3IGdzYXAudGltZWxpbmUoe1xuICAgICAgcGF1c2VkOiB0cnVlLFxuICAgICAgZGVmYXVsdHM6IHsgZHVyYXRpb246IDAuNSwgZWFzZTogXCJiYWNrLm91dCgwLjI1KTtcIiB9LFxuICAgIH0pO1xuICAgIHRsLmZyb21UbyhidXp6QmxvY2ssIHsgeDogYnV6eldpZHRoIH0sIHsgeDogMCB9KTtcbiAgICByZXR1cm4gdGw7XG4gIH07XG5cbiAgbGV0IGJ1enpUcmlnNiA9IChteUNvdW50KSA9PiB7XG4gICAgdmFyIHN0YXJ0SGVpZ2h0ID0gbXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCArIDEuNSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICB2YXIgZW5kSGVpZ2h0ID0gbXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCArIDIuNSkgLSBteVNjcm9sbE9mZnNldDtcblxuICAgIC8vIGNvbnNvbGUubG9nKCdidXp6NiBzdGFydCBpcyAnK3N0YXJ0SGVpZ2h0KTtcbiAgICAvLyBjb25zb2xlLmxvZygnYnV6ejYgZW5kIGlzICcrZW5kSGVpZ2h0KTtcblxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIHN0YXJ0OiBzdGFydEhlaWdodCxcbiAgICAgIGVuZDogZW5kSGVpZ2h0LFxuICAgICAgc2NydWI6IDEsXG4gICAgICBvbkVudGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJ1enpJbjYoKS5wbGF5KCk7XG4gICAgICB9LFxuICAgICAgb25MZWF2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBidXp6SW42KCkucmV2ZXJzZSgwKTtcbiAgICAgIH0sXG4gICAgICBvbkVudGVyQmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICBidXp6SW42KCkucGxheSgpO1xuICAgICAgfSxcbiAgICAgIG9uTGVhdmVCYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJ1enpJbjYoKS5yZXZlcnNlKDApO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICBidXp6VHJpZzYoNSk7XG59O1xuIiwiaW1wb3J0IHtcbiAgbWVudVRvZ2dsZSxcbiAgc21vb3RoU2Nyb2xsaW5nLFxufSBmcm9tICcuL2luZGV4LmpzJ1xuXG5leHBvcnQgbGV0IGNsaWNrRXZlbnRzID0gKCkgPT4ge1xuICBcbiAgLy8gTW9iaWxlIE5hdiBDbGljayBFdmVudFxuICBsZXQgbWVudVRvZ2dsZVRMID0gbWVudVRvZ2dsZSgpO1xuICBtZW51VG9nZ2xlVEwucmV2ZXJzZWQodHJ1ZSk7XG4gICQoJy5tZW51VG9nZ2xlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7ICBcbiAgICBpZiAobWVudVRvZ2dsZVRMLnJldmVyc2VkKCkpIHtcbiAgICAgIG1lbnVUb2dnbGVUTC5wbGF5KCk7XG4gICAgICBnc2FwLnNldCgkKCcud3JhcHBlcicpLCB7aGVpZ2h0OicxMDAlJywgb3ZlcmZsb3c6J2hpZGRlbid9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ3NhcC5zZXQoJCgnLndyYXBwZXInKSwge2hlaWdodDonYXV0bycsIG92ZXJmbG93Oid2aXNpYmxlJ30pO1xuICAgICAgbWVudVRvZ2dsZVRMLnJldmVyc2UoKTtcbiAgICB9XG5cdH0pO1xuXG4gICQoJ2FbaHJlZl49XCIjXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIFxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBjb25zb2xlLmxvZygnaGFzaCBpdCBvdXQnKTtcbiAgICBcbiAgICAvLyBJRiBJVFwiUyBNT0JJTEUgLyBJUEFEIE9SIFNNQUxMRVJcbiAgICBpZiAoc2NyZWVuLndpZHRoIDw9IDEwMjUpe1xuICAgICAgZ3NhcC5zZXQoJCgnLndyYXBwZXInKSwge2hlaWdodDonYXV0bycsIG92ZXJmbG93Oid2aXNpYmxlJ30pO1xuICAgICAgbWVudVRvZ2dsZVRMLnJldmVyc2UoKTtcbiAgICAgIHNtb290aFNjcm9sbGluZygkKHRoaXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc21vb3RoU2Nyb2xsaW5nKCQodGhpcykpO1xuICAgIH1cbiAgfSk7XG59IiwiZXhwb3J0IGxldCBnc2FwUmVnaXN0ZXJzID0gKCkgPT4ge1xuICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRvUGx1Z2luLCBTY3JvbGxUcmlnZ2VyLCBTcGxpdFRleHQsIERyYXdTVkdQbHVnaW4sIE1vcnBoU1ZHUGx1Z2luKTtcbn0iLCJleHBvcnQge1xuICBwcmVMb2FkZXIsXG4gIHZpZExpbmtzLFxuICBtb2JpbGVWaWRMaW5rcyxcbiAgc21vb3RoU2Nyb2xsaW5nLFxuICBtb2JpbGVOYXZTZXR1cFxufSBmcm9tICcuL3BhZ2VTZXR1cC5qcydcblxuZXhwb3J0IHtcbiAgbWVudVRvZ2dsZVxufSBmcm9tICcuL21lbnVUb2dnbGUuanMnXG5cbmV4cG9ydCB7XG4gIGdzYXBSZWdpc3RlcnNcbn0gZnJvbSAnLi9nc2FwUmVnaXN0ZXJzLmpzJ1xuXG5leHBvcnQge1xuICBjbGlja0V2ZW50cyxcbn0gZnJvbSAnLi9jbGlja0V2ZW50cy5qcydcblxuZXhwb3J0IHtcbiAgYW5pbWF0ZVNlY3Rpb25cbn0gZnJvbSAnLi9hbmltYXRlU2VjdGlvbi5qcydcblxuZXhwb3J0IHtcbiAgc2VjdGlvbnNTZXR1cFxufSBmcm9tICcuL3NlY3Rpb25zU2V0dXAnXG5cblxuZXhwb3J0IHtcbiAgbW9iaWxlU2VjdGlvbnNTZXR1cFxufSBmcm9tICcuL21vYmlsZVNlY3Rpb25zU2V0dXAnXG5cbmV4cG9ydCB7XG4gIG1vYmlsZUFuaW1hdGVTZWN0aW9uXG59IGZyb20gJy4vbW9iaWxlQW5pbWF0ZVNlY3Rpb24nXG5cbiIsImV4cG9ydCBsZXQgbWVudVRvZ2dsZSA9ICgpID0+IHtcblx0bGV0IHRsID0gbmV3IGdzYXAudGltZWxpbmUoe1xuXHRcdHBhdXNlZDp0cnVlLFxuXHRcdGRlZmF1bHRzOiB7XG5cdFx0XHRlYXNlOiAnY2lyYy5vdXQoKScsXG5cdFx0XHRkdXJhdGlvbjowLjMsXG5cdFx0fVxuXHR9KTtcblxuXHR0bC50bygnLm1haW4tbmF2Jywge2R1cmF0aW9uOjAuMywgbGVmdDonMCUnfSwgJ21lbnVPcGVuJyk7XG5cdHRsLnRvKCduYXYgYScsIHtvcGFjaXR5OjEsIHg6JzAlJywgc3RhZ2dlcjoge2Ftb3VudDowLjF9fSwgJ21lbnVPcGVuKz0wLjEnKTtcblx0dGwudG8oJy5oYW1Ub3AnLCB7cm90YXRpb246LTMxNSx4OjcgLHk6Mywgd2lkdGg6MTAsIHRyYW5zZm9ybU9yaWdpbjonNTAlIDUwJSd9LCAnbWVudU9wZW4nKTtcblx0dGwudG8oJy5oYW1NaWQnLCB7eDotNCwgd2lkdGg6MTh9LCAnbWVudU9wZW4nKTtcblx0dGwudG8oJy5oYW1Cb3QnLCB7cm90YXRpb246MzE1LCB4OjcsIHk6LTMsIHdpZHRoOjEwLCB0cmFuc2Zvcm1PcmlnaW46JzUwJSA1MCUnfSwgJ21lbnVPcGVuJyk7XG5cblx0cmV0dXJuIHRsO1xufSIsImV4cG9ydCBsZXQgbW9iaWxlQW5pbWF0ZVNlY3Rpb24gPSAoKSA9PiB7XG4gIC8vIGdzYXAuc2V0KCdib2R5Jywge3RvdWNoQWN0aW9uOidub25lJ30pO1xuICAvLyBkb2N1bWVudC5vbnRvdWNobW92ZSA9IChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgbGV0IHNlY3Rpb25BbmltID0ge1xuICAgIHNlY3Rpb25BbmltMTogKCkgPT4ge1xuICAgICAgbGV0IHRoaXNTZWMgPSBcIiNzZWN0aW9uMVwiO1xuICAgICAgbGV0IHRoaXNPdmVybGF5ID0gJChcIiNvdmVybGF5MVwiKTtcbiAgICAgIGxldCBzZWN0aW9uTGluZXMgPSAkKHRoaXNTZWMpLmZpbmQoXCIuc2luZ2xlLWJhY2tsaW5lXCIpO1xuICAgICAgbGV0IHNlY0Fycm93ID0gJCh0aGlzU2VjKS5maW5kKFwiLmRvd24tYXJyb3ctc3ZnXCIpO1xuXG4gICAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgcGF1c2VkOiB0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBnc2FwXG4gICAgICAgICAgICAudGltZWxpbmUoeyByZXBlYXQ6IC0xLCB5b3lvOiB0cnVlIH0pXG4gICAgICAgICAgICAudG8oc2VjQXJyb3csIHsgeTogLTMsIGR1cmF0aW9uOiAwLjUsIGVhc2U6IFwibm9uZVwiIH0pO1xuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIEJ1aWxkIE1hc3RlciBUTFRMXG4gICAgICB0bC5mcm9tVG8odGhpc092ZXJsYXksIHsgb3BhY2l0eTogMCB9LCB7IG9wYWNpdHk6IDAuNjUgfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21UbyhzZWN0aW9uTGluZXMsIHsgb3BhY2l0eTogMCB9LCB7IG9wYWNpdHk6IDAuMyB9LCBcInNjcm9sbEluQWxsXCIpO1xuXG4gICAgICByZXR1cm4gdGw7XG4gICAgfSxcblxuICAgIHNlY3Rpb25BbmltMjogKCkgPT4ge1xuICAgICAgbGV0IHRoaXNTZWMgPSAkKFwiI3NlY3Rpb24yXCIpO1xuICAgICAgbGV0IHRoaXNCYWNrID0gJChcIiNiYWNrZ3JvdW5kMVwiKTtcbiAgICAgIGxldCB0aGlzT3ZlcmxheSA9ICQoXCIjb3ZlcmxheTFcIik7XG4gICAgICBsZXQgbGluZXMgPSAkKFwiLnNpbmdsZS1iYWNrbGluZVwiKTtcbiAgICAgIGxldCBzZWN0aW9uTGluZXMgPSB0aGlzU2VjLmZpbmQoXCIuc2luZ2xlLWJhY2tsaW5lXCIpO1xuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIC8vIGRlbGF5OjAuNjUsXG4gICAgICAgIHBhdXNlZDogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMC41LFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9LFxuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgLy8gLy8gZ3NhcC5zZXQoJ2JvZHknLCB7b3ZlcmZsb3c6J2F1dG8nfSk7LFxuICAgICAgICAgIC8vIGdzYXAuc2V0KCdib2R5Jywge3RvdWNoQWN0aW9uOidhdXRvJ30pO1xuICAgICAgICAgIC8vIH0sIDEwMDApO1xuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIHRsLmZyb21Ubyh0aGlzT3ZlcmxheSwge29wYWNpdHk6MH0sIHtvcGFjaXR5OjAuMX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8oc2VjdGlvbkxpbmVzLCB7IG9wYWNpdHk6IDAgfSwgeyBvcGFjaXR5OiAwLjIgfSwgXCJzY3JvbGxJbkFsbFwiKTtcblxuICAgICAgcmV0dXJuIHRsO1xuICAgIH0sXG5cbiAgICAvLyBzZWN0aW9uQW5pbTM6ICgpID0+IHtcbiAgICAvLyAgIGxldCB0aGlzU2VjID0gJChcIiNzZWN0aW9uM1wiKTtcbiAgICAvLyAgIGxldCB0aGlzQmFjayA9ICQoXCIjYmFja2dyb3VuZDNcIik7XG4gICAgLy8gICBsZXQgc2VjdGlvbkxpbmVzID0gdGhpc1NlYy5maW5kKFwiLnNpbmdsZS1iYWNrbGluZVwiKTtcbiAgICAvLyAgIGxldCBjZW50ZXI0TCA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItNExcIik7XG4gICAgLy8gICBsZXQgY2VudGVyNFIgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTRSXCIpO1xuICAgIC8vICAgbGV0IGNlbnRlcjNMID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci0zTFwiKTtcbiAgICAvLyAgIGxldCBjZW50ZXIzUiA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItM1JcIik7XG4gICAgLy8gICBsZXQgY2VudGVyMkwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTJMXCIpO1xuICAgIC8vICAgbGV0IGNlbnRlcjJSID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci0yUlwiKTtcbiAgICAvLyAgIGxldCBib3R0b21TbWFsbCA9ICQodGhpc1NlYykuZmluZChcIiNib3R0b20tc21hbGxcIik7XG5cbiAgICAvLyAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIC8vICAgICBwYXVzZWQ6IHRydWUsXG4gICAgLy8gICAgIGRlZmF1bHRzOiB7XG4gICAgLy8gICAgICAgZHVyYXRpb246IDAuNSxcbiAgICAvLyAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICAgIC8vIGdzYXAuc2V0KCcjYmFja2dyb3VuZDEnLCB7b3BhY2l0eTowfSk7XG4gICAgLy8gICAgIH0sXG5cbiAgICAvLyAgICAgLy8gb25SZXZlcnNlQ29tcGxldGU6ZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgIC8vICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICAgIC8vICAgICAvLyBnc2FwLnNldCgnYm9keScsIHt0b3VjaEFjdGlvbjonYXV0byd9KTtcbiAgICAvLyAgICAgLy8gICAgIC8vIGdzYXAuc2V0KCdib2R5Jywge292ZXJmbG93OidhdXRvJ30pOyxcbiAgICAvLyAgICAgLy8gICAvLyB9LCAxMDAwKTtcbiAgICAvLyAgICAgLy8gICBnc2FwLnNldCgnI2JhY2tncm91bmQxJywge29wYWNpdHk6MX0pO1xuICAgIC8vICAgICAvLyB9LFxuICAgIC8vICAgfSk7XG4gICAgLy8gICB0bC5mcm9tVG8oXCIudmlkZW9BcmVhXCIsIHsgb3BhY2l0eTogMCB9LCB7IG9wYWNpdHk6IDEgfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAvLyAgIHRsLmZyb21UbyhjZW50ZXI0TCwgeyBvcGFjaXR5OiAwIH0sIHsgb3BhY2l0eTogMSB9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgIC8vICAgdGwuZnJvbVRvKGNlbnRlcjRSLCB7IG9wYWNpdHk6IDAgfSwgeyBvcGFjaXR5OiAxIH0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgLy8gICB0bC5mcm9tVG8oY2VudGVyM0wsIHsgb3BhY2l0eTogMCB9LCB7IG9wYWNpdHk6IDEgfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAvLyAgIHRsLmZyb21UbyhjZW50ZXIzUiwgeyBvcGFjaXR5OiAwIH0sIHsgb3BhY2l0eTogMSB9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgIC8vICAgdGwuZnJvbVRvKGNlbnRlcjJMLCB7IG9wYWNpdHk6IDAgfSwgeyBvcGFjaXR5OiAxIH0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgLy8gICB0bC5mcm9tVG8oY2VudGVyMlIsIHsgb3BhY2l0eTogMCB9LCB7IG9wYWNpdHk6IDEgfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAvLyAgIHRsLmZyb21Ubyhib3R0b21TbWFsbCwgeyBvcGFjaXR5OiAwIH0sIHsgb3BhY2l0eTogMSB9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgIC8vICAgdGwuZnJvbVRvKHRoaXNCYWNrLCB7IG9wYWNpdHk6IDAgfSwgeyBvcGFjaXR5OiAxIH0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgLy8gICB0bC5mcm9tVG8oc2VjdGlvbkxpbmVzLCB7IG9wYWNpdHk6IDAgfSwgeyBvcGFjaXR5OiAxIH0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgLy8gICB0bC5mcm9tVG8oc2VjdGlvbkxpbmVzLCB7IG9wYWNpdHk6IDAgfSwgeyBvcGFjaXR5OiAxIH0sIFwic2Nyb2xsSW5BbGxcIik7XG5cbiAgICAvLyAgIHJldHVybiB0bDtcbiAgICAvLyB9LFxuXG4gICAgc2VjdGlvbkFuaW0zOiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9ICQoXCIjc2VjdGlvbjRcIik7XG4gICAgICBsZXQgdGhpc0JhY2sgPSAkKFwiI2JhY2tncm91bmQ0XCIpO1xuICAgICAgLy8gbGV0IHNlY3Rpb25MaW5lcyA9IHRoaXNTZWMuZmluZCgnLnNpbmdsZS1iYWNrbGluZScpXG4gICAgICBsZXQgc29sb0NlbnRlcjIgPSAkKHRoaXNTZWMpLmZpbmQoXCIjc29sby1jZW50ZXItMlwiKTtcbiAgICAgIGxldCBzb2xvQ2VudGVyMSA9ICQodGhpc1NlYykuZmluZChcIiNzb2xvLWNlbnRlci0xXCIpO1xuICAgICAgbGV0IGJvdHRvbVNtYWxsID0gJCh0aGlzU2VjKS5maW5kKFwiI2JvdHRvbS1zbWFsbFwiKTtcbiAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBwYXVzZWQ6IHRydWUsXG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246IDAuNSxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgb25SZXZlcnNlQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBnc2FwLnNldCgnI2JhY2tncm91bmQxJywge29wYWNpdHk6MX0pO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICB0bC5mcm9tVG8oc29sb0NlbnRlcjEsIHsgb3BhY2l0eTogMCB9LCB7IG9wYWNpdHk6IDAuNSB9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKHNvbG9DZW50ZXIyLCB7IG9wYWNpdHk6IDAgfSwgeyBvcGFjaXR5OiAwLjUgfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21Ubyhib3R0b21TbWFsbCwgeyBvcGFjaXR5OiAwIH0sIHsgb3BhY2l0eTogMC41IH0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8odGhpc0JhY2ssIHsgb3BhY2l0eTogMCB9LCB7IG9wYWNpdHk6IDEgfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIC8vIHRsLmZyb21UbyhzZWN0aW9uTGluZXMsIHtvcGFjaXR5OjB9LHtvcGFjaXR5OjAuM30sIFwic2Nyb2xsSW5BbGxcIik7XG5cbiAgICAgIHJldHVybiB0bDtcbiAgICB9LFxuXG4gICAgc2VjdGlvbkFuaW00OiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9ICQoXCIjc2VjdGlvbjVcIik7XG4gICAgICBsZXQgdGhpc0JhY2sgPSAkKFwiI2JhY2tncm91bmQ1XCIpO1xuICAgICAgbGV0IHRoaXNPdmVybGF5ID0gJChcIiNvdmVybGF5NVwiKTtcbiAgICAgIGxldCBzZWN0aW9uTGluZXMgPSB0aGlzU2VjLmZpbmQoXCIuc2luZ2xlLWJhY2tsaW5lXCIpO1xuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHBhdXNlZDogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMC41LFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9LFxuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgLy8gZ3NhcC5zZXQoJ2JvZHknLCB7dG91Y2hBY3Rpb246J2F1dG8nfSk7XG4gICAgICAgICAgLy8gfSwgMTAwMCk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgdGwuZnJvbVRvKHRoaXNPdmVybGF5LCB7IG9wYWNpdHk6IDAgfSwgeyBvcGFjaXR5OiAwLjkgfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21Ubyh0aGlzQmFjaywgeyBvcGFjaXR5OiAwIH0sIHsgb3BhY2l0eTogMSB9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKHNlY3Rpb25MaW5lcywgeyBvcGFjaXR5OiAwIH0sIHsgb3BhY2l0eTogMC45IH0sIFwic2Nyb2xsSW5BbGxcIik7XG5cbiAgICAgIHJldHVybiB0bDtcbiAgICB9LFxuXG4gICAgc2VjdGlvbkFuaW01OiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9ICQoXCIjc2VjdGlvbjZcIik7XG4gICAgICBsZXQgdGhpc0JhY2sgPSAkKFwiI2JhY2tncm91bmQ2XCIpO1xuICAgICAgbGV0IHRoaXNPdmVybGF5ID0gJChcIiNvdmVybGF5NlwiKTtcbiAgICAgIGxldCBzZWN0aW9uTGluZXMgPSB0aGlzU2VjLmZpbmQoXCIuc2luZ2xlLWJhY2tsaW5lXCIpO1xuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHBhdXNlZDogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMC41LFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9LFxuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgLy8gZ3NhcC5zZXQoJ2JvZHknLCB7dG91Y2hBY3Rpb246J2F1dG8nfSk7XG4gICAgICAgICAgLy8gfSwgMTAwMCk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgdGwuZnJvbVRvKHRoaXNPdmVybGF5LCB7IG9wYWNpdHk6IDAgfSwgeyBvcGFjaXR5OiAwLjkgfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21Ubyh0aGlzQmFjaywgeyBvcGFjaXR5OiAwIH0sIHsgb3BhY2l0eTogMSB9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKHNlY3Rpb25MaW5lcywgeyBvcGFjaXR5OiAwIH0sIHsgb3BhY2l0eTogMC4yIH0sIFwic2Nyb2xsSW5BbGxcIik7XG5cbiAgICAgIHJldHVybiB0bDtcbiAgICB9LFxuXG4gICAgLy8gICBzZWN0aW9uQW5pbTY6ICgpID0+IHtcbiAgICAvLyAgICAgbGV0IHRoaXNTZWMgPSAkKFwiI3NlY3Rpb243XCIpO1xuICAgIC8vICAgICBsZXQgdGhpc0JhY2sgPSAkKFwiI2JhY2tncm91bmQ3XCIpO1xuICAgIC8vICAgICBsZXQgdGhpc092ZXJsYXkgPSAkKFwiI292ZXJsYXk3XCIpO1xuICAgIC8vICAgICBsZXQgc2VjdGlvbkxpbmVzID0gdGhpc1NlYy5maW5kKFwiLnNpbmdsZS1iYWNrbGluZVwiKTtcbiAgICAvLyAgICAgbGV0IHNlY0Fycm93ID0gJChcIiNzZWN0aW9uMVwiKS5maW5kKFwiLmRvd24tYXJyb3ctc3ZnXCIpO1xuICAgIC8vICAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAvLyAgICAgICBwYXVzZWQ6IHRydWUsXG4gICAgLy8gICAgICAgZGVmYXVsdHM6IHtcbiAgICAvLyAgICAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgLy8gICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICB9KTtcblxuICAgIC8vICAgICB0bC5mcm9tVG8odGhpc092ZXJsYXksIHsgb3BhY2l0eTogMCB9LCB7IG9wYWNpdHk6IDAuOSB9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgIC8vICAgICB0bC5mcm9tVG8odGhpc0JhY2ssIHsgb3BhY2l0eTogMCB9LCB7IG9wYWNpdHk6IDEgfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAvLyAgICAgdGwuZnJvbVRvKHNlY3Rpb25MaW5lcywgeyBvcGFjaXR5OiAwIH0sIHsgb3BhY2l0eTogMC41IH0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgLy8gICAgIHRsLmZyb21UbyhzZWNBcnJvdywgeyBvcGFjaXR5OiAxIH0sIHsgb3BhY2l0eTogMCB9LCBcInNjcm9sbEluQWxsXCIpO1xuXG4gICAgLy8gICAgIHJldHVybiB0bDtcbiAgICAvLyAgIH0sXG4gIH07XG5cbiAgc2VjdGlvbkFuaW1bXCJzZWN0aW9uQW5pbTFcIl0oKS5wbGF5KCk7XG5cbiAgLy8gRmlyZSBBbiBBbmltYXRpb24gRnJvbSBBYm92ZSBmb3IgRWFjaCBTZWN0aW9uXG4gIGxldCBzZWN0aW9uVHJpZyA9IChteUNvdW50KSA9PiB7XG4gICAgaWYgKG15Q291bnQgPD0gMikge1xuICAgICAgdmFyIHN0YXJ0SGVpZ2h0ID0gbXlDb3VudDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHN0YXJ0SGVpZ2h0ID0gbXlDb3VudCArIDE7XG4gICAgfVxuXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgdHJpZ2dlcjogXCIjc2VjdGlvblwiICsgc3RhcnRIZWlnaHQsXG4gICAgICBzdGFydDogXCJ0b3AgYm90dG9tXCIsXG4gICAgICBlbmQ6IFwiYm90dG9tIGJvdHRvbVwiLFxuICAgICAgLy8gc2NydWI6MSxcbiAgICAgIG9uRW50ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKG15Q291bnQgPiAxKSB7XG4gICAgICAgICAgLy8gYWxlcnQobXlDb3VudCk7XG4gICAgICAgICAgLy8gZ3NhcC5zZXQoJ2JvZHknLCB7dG91Y2hBY3Rpb246J25vbmUnfSk7XG4gICAgICAgICAgLy8gZ3NhcC5zZXQoJ2JvZHknLCB7b3ZlcmZsb3c6J2hpZGRlbid9KTtcbiAgICAgICAgICBzZWN0aW9uQW5pbVtcInNlY3Rpb25BbmltXCIgKyBteUNvdW50XSgpLnBsYXkoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTGVhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKG15Q291bnQgPCA1KSB7XG4gICAgICAgICAgLy8gZ3NhcC5zZXQoJ2JvZHknLCB7dG91Y2hBY3Rpb246J25vbmUnfSk7XG4gICAgICAgICAgc2VjdGlvbkFuaW1bXCJzZWN0aW9uQW5pbVwiICsgbXlDb3VudF0oKS5yZXZlcnNlKDApO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25FbnRlckJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKG15Q291bnQgPCA1KSB7XG4gICAgICAgICAgLy8gZ3NhcC5zZXQoJ2JvZHknLCB7dG91Y2hBY3Rpb246J25vbmUnfSk7XG4gICAgICAgICAgc2VjdGlvbkFuaW1bXCJzZWN0aW9uQW5pbVwiICsgbXlDb3VudF0oKS5wbGF5KCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkxlYXZlQmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobXlDb3VudCA+IDEpIHtcbiAgICAgICAgICAvLyBnc2FwLnNldCgnYm9keScsIHt0b3VjaEFjdGlvbjonbm9uZSd9KTtcbiAgICAgICAgICBzZWN0aW9uQW5pbVtcInNlY3Rpb25BbmltXCIgKyBteUNvdW50XSgpLnJldmVyc2UoMCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgLy8gQW5pbWF0aW9uIHRyaWdnZXJzIGFyZSBjYWxjdWxhdGVkIGluIHRoZSBmdW5jdGlvblxuICBsZXQgaSA9IDE7XG4gICQoXCJzZWN0aW9uXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIHNlY3Rpb25UcmlnKGkpO1xuICAgIGkrKztcbiAgfSk7XG5cbiAgLy8gc2VjdGlvblRyaWcoMik7XG4gIGxldCB3aW5kb3dIZWlnaHQgPSBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIC8vIFNpbmdsZSBCdXp6IG9uIEJlZXMgU2VjdGlvbnNcbiAgLy8gQnV6eiBBbmltYXRpb24gNVxuICBsZXQgYnV6ekluNCA9ICgpID0+IHtcbiAgICBsZXQgYnV6ekJsb2NrID0gJChcIiNzZWN0aW9uNFwiKS5maW5kKFwiLmJ1enpPbkJlZXNCbG9ja1wiKTtcbiAgICBsZXQgYnV6eldpZHRoID0gYnV6ekJsb2NrLm91dGVyV2lkdGgoKTtcbiAgICBsZXQgdGwgPSBuZXcgZ3NhcC50aW1lbGluZSh7XG4gICAgICBwYXVzZWQ6IHRydWUsXG4gICAgICBkZWZhdWx0czogeyBkdXJhdGlvbjogMC41IH0sXG4gICAgfSk7XG4gICAgdGwuZnJvbVRvKGJ1enpCbG9jaywgeyB4OiBidXp6V2lkdGggfSwgeyB4OiAwIH0pO1xuICAgIHJldHVybiB0bDtcbiAgfTtcblxuICBsZXQgYnV6elRyaWc0ID0gKG15Q291bnQpID0+IHtcbiAgICAvLyB2YXIgc3RhcnRIZWlnaHQgPSAobXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCAtIDAuNSkpIC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgLy8gdmFyIGVuZEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMC41KSkgLSBteVNjcm9sbE9mZnNldDtcblxuICAgIC8vIGNvbnNvbGUubG9nKCdidXp6NCBzdGFydCBpcyAnK3N0YXJ0SGVpZ2h0KTtcbiAgICAvLyBjb25zb2xlLmxvZygnYnV6ejQgZW5kIGlzICcrZW5kSGVpZ2h0KTtcblxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIHRyaWdnZXI6IFwiI3NlY3Rpb240XCIsXG4gICAgICBzdGFydDogXCJ0b3AgdG9wLT1cIiArIHdpbmRvd0hlaWdodCAvIDIsXG4gICAgICBlbmQ6IFwiYm90dG9tIGJvdHRvbVwiLFxuICAgICAgLy8gc2NydWI6MSxcbiAgICAgIG9uRW50ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYnV6ekluNCgpLnBsYXkoKTtcbiAgICAgIH0sXG4gICAgICBvbkxlYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJ1enpJbjQoKS5yZXZlcnNlKDApO1xuICAgICAgfSxcbiAgICAgIG9uRW50ZXJCYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJ1enpJbjQoKS5wbGF5KCk7XG4gICAgICB9LFxuICAgICAgb25MZWF2ZUJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYnV6ekluNCgpLnJldmVyc2UoMCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIGJ1enpUcmlnNCgpO1xuXG4gIC8vIEJ1enogQW5pbWF0aW9uIDVcbiAgbGV0IGJ1enpJbjUgPSAoKSA9PiB7XG4gICAgbGV0IGJ1enpCbG9jayA9ICQoXCIjc2VjdGlvbjVcIikuZmluZChcIi5idXp6T25CZWVzQmxvY2tcIik7XG4gICAgbGV0IGJ1enpXaWR0aCA9IGJ1enpCbG9jay5vdXRlcldpZHRoKCk7XG4gICAgbGV0IHRsID0gbmV3IGdzYXAudGltZWxpbmUoe1xuICAgICAgcGF1c2VkOiB0cnVlLFxuICAgICAgZGVmYXVsdHM6IHsgZHVyYXRpb246IDAuNSB9LFxuICAgIH0pO1xuICAgIHRsLmZyb21UbyhidXp6QmxvY2ssIHsgeDogYnV6eldpZHRoIH0sIHsgeDogMCB9KTtcbiAgICByZXR1cm4gdGw7XG4gIH07XG5cbiAgbGV0IGJ1enpUcmlnNSA9IChteUNvdW50KSA9PiB7XG4gICAgLy8gdmFyIHN0YXJ0SGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAwLjUpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIC8vIHZhciBlbmRIZWlnaHQgPSAobXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCArIDEuNSkpIC0gbXlTY3JvbGxPZmZzZXQ7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnYnV6ejUgc3RhcnQgaXMgJytzdGFydEhlaWdodCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2J1eno1IGVuZCBpcyAnK2VuZEhlaWdodCk7XG5cbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICB0cmlnZ2VyOiBcIiNzZWN0aW9uNVwiLFxuICAgICAgc3RhcnQ6IFwidG9wIHRvcC09XCIgKyB3aW5kb3dIZWlnaHQgLyAyLFxuICAgICAgZW5kOiBcImJvdHRvbSBib3R0b21cIixcbiAgICAgIC8vIHNjcnViOjEsXG4gICAgICBvbkVudGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJ1enpJbjUoKS5wbGF5KCk7XG4gICAgICB9LFxuICAgICAgb25MZWF2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBidXp6SW41KCkucmV2ZXJzZSgwKTtcbiAgICAgIH0sXG4gICAgICBvbkVudGVyQmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICBidXp6SW41KCkucGxheSgpO1xuICAgICAgfSxcbiAgICAgIG9uTGVhdmVCYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJ1enpJbjUoKS5yZXZlcnNlKDApO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICBidXp6VHJpZzUoKTtcblxuICAvLyBCdXp6IEFuaW1hdGlvbiA2XG4gIGxldCBidXp6SW42ID0gKCkgPT4ge1xuICAgIGxldCBidXp6QmxvY2sgPSAkKFwiI3NlY3Rpb242XCIpLmZpbmQoXCIuYnV6ek9uQmVlc0Jsb2NrXCIpO1xuICAgIGxldCBidXp6V2lkdGggPSBidXp6QmxvY2sub3V0ZXJXaWR0aCgpO1xuICAgIGxldCB0bCA9IG5ldyBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIHBhdXNlZDogdHJ1ZSxcbiAgICAgIGRlZmF1bHRzOiB7IGR1cmF0aW9uOiAwLjUgfSxcbiAgICB9KTtcbiAgICB0bC5mcm9tVG8oYnV6ekJsb2NrLCB7IHg6IGJ1enpXaWR0aCB9LCB7IHg6IDAgfSk7XG4gICAgcmV0dXJuIHRsO1xuICB9O1xuXG4gIGxldCBidXp6VHJpZzYgPSAobXlDb3VudCkgPT4ge1xuICAgIC8vIHZhciBzdGFydEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMS41KSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICAvLyB2YXIgZW5kSGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAyLjUpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuXG4gICAgLy8gY29uc29sZS5sb2coJ2J1eno2IHN0YXJ0IGlzICcrc3RhcnRIZWlnaHQpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdidXp6NiBlbmQgaXMgJytlbmRIZWlnaHQpO1xuXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgdHJpZ2dlcjogXCIjc2VjdGlvbjZcIixcbiAgICAgIHN0YXJ0OiBcInRvcCB0b3AtPVwiICsgd2luZG93SGVpZ2h0IC8gMS41LFxuICAgICAgZW5kOiBcImJvdHRvbSBib3R0b21cIixcbiAgICAgIC8vIHNjcnViOjEsXG4gICAgICBvbkVudGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJ1enpJbjYoKS5wbGF5KCk7XG4gICAgICB9LFxuICAgICAgb25MZWF2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBidXp6SW42KCkucmV2ZXJzZSgwKTtcbiAgICAgIH0sXG4gICAgICBvbkVudGVyQmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICBidXp6SW42KCkucGxheSgpO1xuICAgICAgfSxcbiAgICAgIG9uTGVhdmVCYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJ1enpJbjYoKS5yZXZlcnNlKDApO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICBidXp6VHJpZzYoKTtcblxuICAkKFwiLnRleHQtY29udGFpbmVyXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIGxldCBsaW5lc0luID0gKCkgPT4ge1xuICAgICAgbGV0IHRoZXNlTGluZXMgPSAkKHRoaXMpLmZpbmQoXCIucExpbmVzXCIpO1xuICAgICAgbGV0IHRsID0gbmV3IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBwYXVzZWQ6IHRydWUsXG4gICAgICAgIGRlZmF1bHRzOiB7IGR1cmF0aW9uOiAwLjMgfSxcbiAgICAgIH0pO1xuICAgICAgdGwuZnJvbVRvKFxuICAgICAgICB0aGVzZUxpbmVzLFxuICAgICAgICB7IG9wYWNpdHk6IDAsIHg6IC00MCB9LFxuICAgICAgICB7IG9wYWNpdHk6IDEsIHg6IDAsIHN0YWdnZXI6IHsgYW1vdW50OiAwLjMgfSB9XG4gICAgICApO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGVzZUxpbmVzKTtcbiAgICAgIHJldHVybiB0bDtcbiAgICB9O1xuXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgdHJpZ2dlcjogdGhpcyxcbiAgICAgIHN0YXJ0OiBcInRvcCBib3R0b20tPTEyMHB4XCIsXG4gICAgICAvLyBzY3J1YjoxLFxuICAgICAgb25FbnRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBsaW5lc0luKCkucGxheSgpO1xuICAgICAgfSxcbiAgICAgIC8vIG9uTGVhdmU6IGZ1bmN0aW9uKCl7YnV6ekluNigpLnJldmVyc2UoMCk7fSxcbiAgICAgIC8vIG9uRW50ZXJCYWNrOmZ1bmN0aW9uKCl7YnV6ekluNigpLnBsYXkoKTt9LFxuICAgICAgb25MZWF2ZUJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGluZXNJbigpLnJldmVyc2UoMCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICAkKFwiaDJcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGxpbmVzSW4gPSAoKSA9PiB7XG4gICAgICBsZXQgdGhlc2VMaW5lcyA9ICQodGhpcykuZmluZChcIi5oMldvcmRzXCIpO1xuICAgICAgbGV0IHRsID0gbmV3IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBwYXVzZWQ6IHRydWUsXG4gICAgICAgIGRlZmF1bHRzOiB7IGR1cmF0aW9uOiAwLjMgfSxcbiAgICAgIH0pO1xuICAgICAgdGwuZnJvbVRvKFxuICAgICAgICB0aGVzZUxpbmVzLFxuICAgICAgICB7IG9wYWNpdHk6IDAsIHg6IC00MCB9LFxuICAgICAgICB7IG9wYWNpdHk6IDEsIHg6IDAsIHN0YWdnZXI6IHsgYW1vdW50OiAwLjMgfSB9XG4gICAgICApO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGVzZUxpbmVzKTtcbiAgICAgIHJldHVybiB0bDtcbiAgICB9O1xuXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgdHJpZ2dlcjogdGhpcyxcbiAgICAgIHN0YXJ0OiBcInRvcCBib3R0b20tPTEyMHB4XCIsXG4gICAgICAvLyBzY3J1YjoxLFxuICAgICAgb25FbnRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBsaW5lc0luKCkucGxheSgpO1xuICAgICAgfSxcbiAgICAgIC8vIG9uTGVhdmU6IGZ1bmN0aW9uKCl7YnV6ekluNigpLnJldmVyc2UoMCk7fSxcbiAgICAgIC8vIG9uRW50ZXJCYWNrOmZ1bmN0aW9uKCl7YnV6ekluNigpLnBsYXkoKTt9LFxuICAgICAgb25MZWF2ZUJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGluZXNJbigpLnJldmVyc2UoMCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcbn07XG4iLCJleHBvcnQgbGV0IG1vYmlsZVNlY3Rpb25zU2V0dXAgPSAoKSA9PiB7XG5cbiAgLy8gJCgnYm9keScpLmFkZENsYXNzKCdtb2JpbGUtZGV2aWNlJyk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBNRUFTVVJJTkcgVkFSU1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbGV0IHRvdGFsU2VjdGlvbnMgPSAkKCdzZWN0aW9uJykubGVuZ3RoO1xuICBsZXQgdG90YWxCdXp6T24gPSAkKCcuYnV6ek9uQmVlc0Jsb2NrJykubGVuZ3RoO1xuICBsZXQgd2luZG93SGVpZ2h0ID0gTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICBsZXQgbXlTY3JvbGxIZWlnaHQgPSB3aW5kb3dIZWlnaHQvMjtcbiAgbGV0IGZ1bGxIZWlnaHQgPSAobXlTY3JvbGxIZWlnaHQgKiAodG90YWxTZWN0aW9ucyArIHRvdGFsQnV6ek9uKSkgKyB3aW5kb3dIZWlnaHQgLSAxO1xuICBsZXQgYnV6ekJsb2NrID0gJCgnLmJ1enpPbkJlZXNCbG9jaycpO1xuICBsZXQgYnV6eldpZHRoID0gYnV6ekJsb2NrLm91dGVyV2lkdGgoKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEdMT0JBTFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU2V0IE92ZXJhbGwgU2Nyb2xsIEhlaWdodFxuICAvLyBnc2FwLnNldCgnLmhvbWUtcGFnZScsIHtoZWlnaHQ6ZnVsbEhlaWdodH0pO1xuICAvLyBnc2FwLnNldChkb2N1bWVudC5ib2R5LCB7b3ZlcmZsb3c6IFwiaGlkZGVuXCJ9KVxuICAvLyBIaWRlIEFsbCBMaW5lc1xuICAvLyBnc2FwLnNldCgkKCcuaG9tZS1wYWdlJykuZmluZCgncGF0aCcpLCB7ZHJhd1NWRzpcIjUwJSA1MCVcIn0pO1xuICAvLyBnc2FwLnNldCgkKCcuaG9tZS1wYWdlJykuZmluZCgncG9seWxpbmUnKSwge2RyYXdTVkc6XCI1MCUgNTAlXCJ9KTtcbiAgLy8gZ3NhcC5zZXQoJCgnLmhvbWUtcGFnZScpLmZpbmQoJ2xpbmUnKSwge2RyYXdTVkc6XCI1MCUgNTAlXCJ9KTtcbiAgLy8gZ3NhcC5zZXQoJCgnLmhvbWUtcGFnZScpLmZpbmQoJyNkb3duLWFycm93IGxpbmUnKSwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0pO1xuICAvLyBTZXQgMXN0IEJhY2tncm91bmQgSW1hZ2UgYXMgVmlzaWJsZVxuXG4gIGxldCBzZWMxTGluZXMgPSAkKCcjc2VjdGlvbjEnKS5maW5kKCcuc2luZ2xlLWJhY2tsaW5lJylcbiAgbGV0IHNlYzFBcnJvdyA9ICQoJyNzZWN0aW9uMScpLmZpbmQoJy5kb3duLWFycm93LXN2ZycpXG4gIGdzYXAuc2V0KHNlYzFMaW5lcywge29wYWNpdHk6MC4yfSk7XG4gIGdzYXAuc2V0KHNlYzFBcnJvdywge29wYWNpdHk6MX0pO1xuICBnc2FwLnNldCgnI2JhY2tncm91bmQxJywge29wYWNpdHk6MSwgekluZGV4OjEwMH0pO1xuICBnc2FwLnNldCgnI2JhY2tncm91bmQzJywge3pJbmRleDoxMDZ9KTtcbiAgZ3NhcC5zZXQoJyNiYWNrZ3JvdW5kNCcsIHt6SW5kZXg6MTA1fSk7XG4gIGdzYXAuc2V0KCcjYmFja2dyb3VuZDUnLCB7ekluZGV4OjEwNH0pO1xuICBnc2FwLnNldCgnI2JhY2tncm91bmQ2Jywge3pJbmRleDoxMDN9KTtcbiAgZ3NhcC5zZXQoJyNiYWNrZ3JvdW5kNycsIHt6SW5kZXg6MTAxfSk7XG5cbiAgZ3NhcC5zZXQoJyNvdmVybGF5MScsIHtvcGFjaXR5OjAuNjUsIHpJbmRleDoxMDF9KTtcbiAgLy8gZ3NhcC5zZXQoJyNvdmVybGF5MycsIHt6SW5kZXg6MTAzfSk7XG4gIC8vIGdzYXAuc2V0KCcjb3ZlcmxheTQnLCB7ekluZGV4OjEwNH0pO1xuICBnc2FwLnNldCgnI292ZXJsYXk1Jywge3pJbmRleDoxMDV9KTtcbiAgZ3NhcC5zZXQoJyNvdmVybGF5NicsIHt6SW5kZXg6MTA2fSk7XG4gIGdzYXAuc2V0KCcjb3ZlcmxheTcnLCB7ekluZGV4OjEwN30pO1xuXG4gIC8vIGdzYXAuc2V0KCcjc2VjdGlvbjEnLCB7ekluZGV4OjIwN30pO1xuICAvLyBnc2FwLnNldCgnI3NlY3Rpb24yJywge3pJbmRleDoyMDZ9KTtcbiAgLy8gZ3NhcC5zZXQoJyNzZWN0aW9uMycsIHt6SW5kZXg6MjA1fSk7XG4gIC8vIGdzYXAuc2V0KCcjc2VjdGlvbjQnLCB7ekluZGV4OjIwNH0pO1xuICAvLyBnc2FwLnNldCgnI3NlY3Rpb241Jywge3pJbmRleDoyMDN9KTtcbiAgLy8gZ3NhcC5zZXQoJyNzZWN0aW9uNicsIHt6SW5kZXg6MjAyfSk7XG4gIC8vIGdzYXAuc2V0KCcjc2VjdGlvbjcnLCB7ekluZGV4OjIwMX0pO1xuICAvLyBnc2FwLnNldCgnI2JhY2tncm91bmQxJywge29wYWNpdHk6MX0pO1xuICAvLyBTZXQgQnV6eiBPbiBCZWVzIHRvIEhpZGRlblxuICBnc2FwLnNldChidXp6QmxvY2ssIHt4OmJ1enpXaWR0aH0pO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VDVElPTiAxXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgc2VjMSA9ICQoJyNzZWN0aW9uMScpO1xuICBsZXQgc2VjMUgyID0gc2VjMS5maW5kKCdoMicpO1xuICBsZXQgc2VjMXNwbGl0SDIgPSBuZXcgU3BsaXRUZXh0KHNlYzFIMiwgeyB0eXBlOiBcImxpbmVzLHdvcmRzLCBjaGFyc1wiIH0pO1xuICBsZXQgc2VjMUNoYXJzMiA9IHNlYzFzcGxpdEgyLmNoYXJzO1xuICBsZXQgc2VjMVdvcmRzMiA9IHNlYzFzcGxpdEgyLndvcmRzO1xuICBsZXQgc2VjMUxpbmVzMiA9IHNlYzFzcGxpdEgyLmxpbmVzO1xuICAkKHNlYzFMaW5lczIpLmFkZENsYXNzKCdoMkxpbmVzJyk7XG4gICQoc2VjMUNoYXJzMikuYWRkQ2xhc3MoJ2gyQ2hhcnMgc2VjMUNoYXJzMicpO1xuICAkKHNlYzFXb3JkczIpLmFkZENsYXNzKCdoMldvcmRzIHNlYzFXb3JkczInKTtcblxuICBsZXQgc2VjMUgzID0gc2VjMS5maW5kKCdoMycpO1xuICBsZXQgc2VjMXNwbGl0SDMgPSBuZXcgU3BsaXRUZXh0KHNlYzFIMywgeyB0eXBlOiBcImxpbmVzLHdvcmRzLGNoYXJzXCIgfSk7XG4gIGxldCBzZWMxQ2hhcnMzID0gc2VjMXNwbGl0SDMuY2hhcnM7XG4gIGxldCBzZWMxV29yZHMzID0gc2VjMXNwbGl0SDMud29yZHM7XG4gICQoc2VjMUNoYXJzMykuYWRkQ2xhc3MoJ2gzQ2hhcnMgc2VjMUNoYXJzMycpO1xuICAkKHNlYzFXb3JkczMpLmFkZENsYXNzKCdoM1dvcmRzIHNlYzFXb3JkczMnKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFQ1RJT04gMlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbGV0IHNlYzIgPSAkKCcjc2VjdGlvbjInKTtcbiAgbGV0IHNlYzJIMiA9IHNlYzIuZmluZCgnaDInKTtcbiAgbGV0IHNlYzJzcGxpdEgyID0gbmV3IFNwbGl0VGV4dChzZWMySDIsIHsgdHlwZTogXCJsaW5lcyx3b3Jkc1wiIH0pO1xuICAvLyBsZXQgc2VjMkNoYXJzMiA9IHNlYzJzcGxpdEgyLmNoYXJzO1xuICBsZXQgc2VjMldvcmRzMiA9IHNlYzJzcGxpdEgyLndvcmRzO1xuICBsZXQgc2VjMkxpbmVzMiA9IHNlYzJzcGxpdEgyLmxpbmVzO1xuICAkKHNlYzJMaW5lczIpLmFkZENsYXNzKCdoMkxpbmVzJyk7XG4gIC8vICQoc2VjMkNoYXJzMikuYWRkQ2xhc3MoJ2gyQ2hhcnMgc2VjMkNoYXJzMicpO1xuICAkKHNlYzJXb3JkczIpLmFkZENsYXNzKCdoMldvcmRzIHNlYzJXb3JkczInKTtcbiAgXG4gIGxldCBzZWMyUCA9IHNlYzIuZmluZCgnLnRleHQtY29udGFpbmVyIHAnKTtcbiAgbGV0IHNlYzJzcGxpdFAgPSBuZXcgU3BsaXRUZXh0KHNlYzJQLCB7IHR5cGU6IFwibGluZXNcIiB9KTtcbiAgLy8gbGV0IHNlYzJXb3Jkc1AgPSBzZWMyc3BsaXRQLndvcmRzO1xuICBsZXQgc2VjMkxpbmVzUCA9IHNlYzJzcGxpdFAubGluZXM7XG4gIC8vICQoc2VjMldvcmRzUCkuYWRkQ2xhc3MoJ2gzV29yZHMgc2VjMldvcmRzUCcpO1xuICAkKHNlYzJMaW5lc1ApLmFkZENsYXNzKCdwTGluZXMgc2VjMkxpbmVzUCcpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VDVElPTiA0XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgc2VjNCA9ICQoJyNzZWN0aW9uNCcpO1xuICBsZXQgc2VjNEgyID0gc2VjNC5maW5kKCdoMicpO1xuICBsZXQgc2VjNHNwbGl0SDIgPSBuZXcgU3BsaXRUZXh0KHNlYzRIMiwgeyB0eXBlOiBcImxpbmVzLHdvcmRzXCIgfSk7XG4gIC8vIGxldCBzZWM0Q2hhcnMyID0gc2VjNHNwbGl0SDIuY2hhcnM7XG4gIGxldCBzZWM0V29yZHMyID0gc2VjNHNwbGl0SDIud29yZHM7XG4gIGxldCBzZWM0TGluZXMyID0gc2VjNHNwbGl0SDIubGluZXM7XG4gICQoc2VjNExpbmVzMikuYWRkQ2xhc3MoJ2gyTGluZXMnKTtcbiAgLy8gJChzZWM0Q2hhcnMyKS5hZGRDbGFzcygnaDJDaGFycyBzZWM0Q2hhcnMyJyk7XG4gICQoc2VjNFdvcmRzMikuYWRkQ2xhc3MoJ2gyV29yZHMgc2VjNFdvcmRzMicpO1xuICBcbiAgbGV0IHNlYzRQID0gc2VjNC5maW5kKCcudGV4dC1jb250YWluZXIgcCcpO1xuICBsZXQgc2VjNHNwbGl0UCA9IG5ldyBTcGxpdFRleHQoc2VjNFAsIHsgdHlwZTogXCJsaW5lc1wiIH0pO1xuICAvLyBsZXQgc2VjNFdvcmRzUCA9IHNlYzRzcGxpdFAud29yZHM7XG4gIGxldCBzZWM0TGluZXNQID0gc2VjNHNwbGl0UC5saW5lcztcbiAgLy8gJChzZWM0V29yZHNQKS5hZGRDbGFzcygnaDNXb3JkcyBzZWM0V29yZHNQJyk7XG4gICQoc2VjNExpbmVzUCkuYWRkQ2xhc3MoJ3BMaW5lcyBzZWM0TGluZXNQJyk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRUNUSU9OIDVcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGxldCBzZWM1ID0gJCgnI3NlY3Rpb241Jyk7XG4gIGxldCBzZWM1SDIgPSBzZWM1LmZpbmQoJ2gyJyk7XG4gIGxldCBzZWM1c3BsaXRIMiA9IG5ldyBTcGxpdFRleHQoc2VjNUgyLCB7IHR5cGU6IFwibGluZXMsd29yZHNcIiB9KTtcbiAgLy8gbGV0IHNlYzVDaGFyczIgPSBzZWM1c3BsaXRIMi5jaGFycztcbiAgbGV0IHNlYzVXb3JkczIgPSBzZWM1c3BsaXRIMi53b3JkcztcbiAgbGV0IHNlYzVMaW5lczIgPSBzZWM1c3BsaXRIMi5saW5lcztcbiAgJChzZWM1TGluZXMyKS5hZGRDbGFzcygnaDJMaW5lcycpO1xuICAvLyAkKHNlYzVDaGFyczIpLmFkZENsYXNzKCdoMkNoYXJzIHNlYzVDaGFyczInKTtcbiAgJChzZWM1V29yZHMyKS5hZGRDbGFzcygnaDJXb3JkcyBzZWM1V29yZHMyJyk7XG4gIFxuICBsZXQgc2VjNVAgPSBzZWM1LmZpbmQoJy50ZXh0LWNvbnRhaW5lciBwJyk7XG4gIGxldCBzZWM1c3BsaXRQID0gbmV3IFNwbGl0VGV4dChzZWM1UCwgeyB0eXBlOiBcImxpbmVzXCIgfSk7XG4gIC8vIGxldCBzZWM1V29yZHNQID0gc2VjNXNwbGl0UC53b3JkcztcbiAgbGV0IHNlYzVMaW5lc1AgPSBzZWM1c3BsaXRQLmxpbmVzO1xuICAvLyAkKHNlYzVXb3Jkc1ApLmFkZENsYXNzKCdoM1dvcmRzIHNlYzVXb3Jkc1AnKTtcbiAgJChzZWM1TGluZXNQKS5hZGRDbGFzcygncExpbmVzIHNlYzVMaW5lc1AnKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFQ1RJT04gNlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbGV0IHNlYzYgPSAkKCcjc2VjdGlvbjYnKTtcbiAgbGV0IHNlYzZIMiA9IHNlYzYuZmluZCgnaDInKTtcbiAgbGV0IHNlYzZzcGxpdEgyID0gbmV3IFNwbGl0VGV4dChzZWM2SDIsIHsgdHlwZTogXCJsaW5lcyx3b3Jkc1wiIH0pO1xuICAvLyBsZXQgc2VjNkNoYXJzMiA9IHNlYzZzcGxpdEgyLmNoYXJzO1xuICBsZXQgc2VjNldvcmRzMiA9IHNlYzZzcGxpdEgyLndvcmRzO1xuICBsZXQgc2VjNkxpbmVzMiA9IHNlYzZzcGxpdEgyLmxpbmVzO1xuICAkKHNlYzZMaW5lczIpLmFkZENsYXNzKCdoMkxpbmVzJyk7XG4gIC8vICQoc2VjNkNoYXJzMikuYWRkQ2xhc3MoJ2gyQ2hhcnMgc2VjNkNoYXJzMicpO1xuICAkKHNlYzZXb3JkczIpLmFkZENsYXNzKCdoMldvcmRzIHNlYzZXb3JkczInKTtcbiAgXG4gIGxldCBzZWM2UCA9IHNlYzYuZmluZCgnLnRleHQtY29udGFpbmVyIHAnKTtcbiAgbGV0IHNlYzZzcGxpdFAgPSBuZXcgU3BsaXRUZXh0KHNlYzZQLCB7IHR5cGU6IFwibGluZXNcIiB9KTtcbiAgLy8gbGV0IHNlYzZXb3Jkc1AgPSBzZWM2c3BsaXRQLndvcmRzO1xuICBsZXQgc2VjNkxpbmVzUCA9IHNlYzZzcGxpdFAubGluZXM7XG4gIC8vICQoc2VjNldvcmRzUCkuYWRkQ2xhc3MoJ2gzV29yZHMgc2VjNldvcmRzUCcpO1xuICAkKHNlYzZMaW5lc1ApLmFkZENsYXNzKCdwTGluZXMgc2VjNkxpbmVzUCcpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VDVElPTiA3XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgc2VjNyA9ICQoJyNzZWN0aW9uNycpO1xuICBsZXQgc2VjN0gyID0gc2VjNy5maW5kKCdoMicpO1xuICBsZXQgc2VjN3NwbGl0SDIgPSBuZXcgU3BsaXRUZXh0KHNlYzdIMiwgeyB0eXBlOiBcImxpbmVzLHdvcmRzXCIgfSk7XG4gIC8vIGxldCBzZWM3Q2hhcnMyID0gc2VjN3NwbGl0SDIuY2hhcnM7XG4gIGxldCBzZWM3V29yZHMyID0gc2VjN3NwbGl0SDIud29yZHM7XG4gIGxldCBzZWM3TGluZXMyID0gc2VjN3NwbGl0SDIubGluZXM7XG4gICQoc2VjN0xpbmVzMikuYWRkQ2xhc3MoJ2gyTGluZXMnKTtcbiAgLy8gJChzZWM3Q2hhcnMyKS5hZGRDbGFzcygnaDJDaGFycycpO1xuICAkKHNlYzdXb3JkczIpLmFkZENsYXNzKCdoMldvcmRzJyk7XG4gIFxuICBsZXQgc2VjN1AgPSBzZWM3LmZpbmQoJy50ZXh0LWNvbnRhaW5lciBwJyk7XG4gIGxldCBzZWM3c3BsaXRQID0gbmV3IFNwbGl0VGV4dChzZWM3UCwgeyB0eXBlOiBcImxpbmVzXCIgfSk7XG4gIC8vIGxldCBzZWM3V29yZHNQID0gc2VjN3NwbGl0UC53b3JkcztcbiAgbGV0IHNlYzdMaW5lc1AgPSBzZWM3c3BsaXRQLmxpbmVzO1xuICAvLyAkKHNlYzdXb3Jkc1ApLmFkZENsYXNzKCdoM1dvcmRzIHNlYzdXb3Jkc1AnKTtcbiAgJChzZWM3TGluZXNQKS5hZGRDbGFzcygncExpbmVzIHNlYzdMaW5lc1AnKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFQ1RJT04gOFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbGV0IHNlYzggPSAkKCcjc2VjdGlvbjgnKTtcbiAgbGV0IHNlYzhIMiA9IHNlYzguZmluZCgnaDInKTtcbiAgbGV0IHNlYzhzcGxpdEgyID0gbmV3IFNwbGl0VGV4dChzZWM4SDIsIHsgdHlwZTogXCJsaW5lcyx3b3Jkc1wiIH0pO1xuICAvLyBsZXQgc2VjOENoYXJzMiA9IHNlYzhzcGxpdEgyLmNoYXJzO1xuICBsZXQgc2VjOFdvcmRzMiA9IHNlYzhzcGxpdEgyLndvcmRzO1xuICBsZXQgc2VjOExpbmVzMiA9IHNlYzhzcGxpdEgyLmxpbmVzO1xuICAkKHNlYzhMaW5lczIpLmFkZENsYXNzKCdoMkxpbmVzJyk7XG4gIC8vICQoc2VjOENoYXJzMikuYWRkQ2xhc3MoJ2gyQ2hhcnMnKTtcbiAgJChzZWM4V29yZHMyKS5hZGRDbGFzcygnaDJXb3JkcycpO1xuICBcbiAgbGV0IHNlYzhQID0gc2VjOC5maW5kKCcudGV4dC1jb250YWluZXIgcCcpO1xuICBsZXQgc2VjOHNwbGl0UCA9IG5ldyBTcGxpdFRleHQoc2VjOFAsIHsgdHlwZTogXCJsaW5lc1wiIH0pO1xuICAvLyBsZXQgc2VjOFdvcmRzUCA9IHNlYzhzcGxpdFAud29yZHM7XG4gIGxldCBzZWM4TGluZXNQID0gc2VjOHNwbGl0UC5saW5lcztcbiAgLy8gJChzZWM4V29yZHNQKS5hZGRDbGFzcygnaDNXb3JkcyBzZWM4V29yZHNQJyk7XG4gICQoc2VjOExpbmVzUCkuYWRkQ2xhc3MoJ3BMaW5lcyBzZWM4TGluZXNQJyk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRVRVUCBFTEVNRU5UU1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gZ3NhcC5zZXQoJy5oMkNoYXJzJywge3k6JzEuMWVtJ30pO1xufSIsImltcG9ydCB7IFxuICBhbmltYXRlU2VjdGlvbixcbn0gZnJvbSAnLi9pbmRleC5qcyc7XG5cbmV4cG9ydCBsZXQgcHJlTG9hZGVyID0gKCkgPT4ge1xuICBsZXQgdGwgPSBuZXcgZ3NhcC50aW1lbGluZSh7XG4gICAgZGVmYXVsdHM6e1xuICAgICAgZHVyYXRpb246MC41LFxuICAgIH0sXG4gICAgXG4gICAgLy8gZWFzZToncG93ZXI0Lm91dCcsXG4gICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgIC8vIGFsZXJ0KCdvdXQnKTtcbiAgICAgICQoJyNwcmVsb2FkZXInKS5yZW1vdmUoKTtcbiAgICB9XG4gIH0pXG4gIHRsLnRvKCcucHJlbG9hZGVyU1ZHJywge3NjYWxlOjB9LFwibG9hZE91dFwiKTtcblx0dGwudG8oJyNwcmVsb2FkZXInLCB7b3BhY2l0eTowLGR1cmF0aW9uOjAuM30sXCJsb2FkT3V0MlwiKTtcbn1cblxuZXhwb3J0IGxldCB2aWRMaW5rcz0gKCkgPT4ge1xuXHRsZXQgdGhpc1NyYyA9ICQoJy5pZnJhbWVIb2xkZXInKS5hdHRyKCdkYXRhLWRlc2t0b3AtdmlkJyk7XG4gIC8vIGNvbnNvbGUubG9nKHRoaXNTcmMpO1xuICAkKCcuaWZyYW1lRW1wdHknKS5hdHRyKCdzcmMnLCAnaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLycrdGhpc1NyYysnP2g9MjVmMzM0ZTk1NiZ0aXRsZT0wJmJ5bGluZT0wJnBvcnRyYWl0PTAnKSBcbn1cblxuZXhwb3J0IGxldCBtb2JpbGVWaWRMaW5rcz0gKCkgPT4ge1xuXHRsZXQgdGhpc1NyYyA9ICQoJy5pZnJhbWVIb2xkZXInKS5hdHRyKCdkYXRhLW1vYmlsZS12aWQnKTtcbiAgLy8gY29uc29sZS5sb2codGhpc1NyYyk7XG4gICQoJy5pZnJhbWVFbXB0eScpLmF0dHIoJ3NyYycsICdodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vJyt0aGlzU3JjKyc/aD0yNWYzMzRlOTU2JnRpdGxlPTAmYnlsaW5lPTAmcG9ydHJhaXQ9MCcpIFxufVxuXG5leHBvcnQgbGV0IHNtb290aFNjcm9sbGluZyA9ICh0aGVMaW5rKSA9PiB7XG4gIFxuICBsZXQgdGFyZ2V0ID0gJCh0aGVMaW5rKS5hdHRyKCdocmVmJyk7XG4gIGxldCBoZWFkZXJIZWlnaHQgPSAkKCcuaGVhZGVyJykub3V0ZXJIZWlnaHQoKTsgXG4gIGdzYXAudG8od2luZG93LCB7ZHVyYXRpb246LjUsIGVhc2U6ICdjaXJjLm91dCcsIFxuICAgIHNjcm9sbFRvOntcbiAgICAgIHk6dGFyZ2V0LCBcbiAgICAgIC8vIEFjdGl2YXRlIGlmIEhlYWRlciBJcyBGaXhlZFxuICAgICAgLy8gb2Zmc2V0WTpoZWFkZXJIZWlnaHRcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBsZXQgbW9iaWxlTmF2U2V0dXAgPSAoKSA9PiB7XG4gIGdzYXAuc2V0KCduYXYgYScsIHtvcGFjaXR5OjAsIHg6JzUwJSd9KTtcbn1cbiIsImV4cG9ydCBsZXQgc2VjdGlvbnNTZXR1cCA9ICgpID0+IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIE1FQVNVUklORyBWQVJTXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgdG90YWxTZWN0aW9ucyA9ICQoXCJzZWN0aW9uXCIpLmxlbmd0aDtcbiAgbGV0IHRvdGFsQnV6ek9uID0gJChcIi5idXp6T25CZWVzQmxvY2tcIikubGVuZ3RoO1xuICBsZXQgd2luZG93SGVpZ2h0ID0gTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICBpZiAoc2NyZWVuLndpZHRoIDw9IDEwMjQpIHtcbiAgICB2YXIgbXlTY3JvbGxIZWlnaHQgPSB3aW5kb3dIZWlnaHQgKiAxLjU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG15U2Nyb2xsSGVpZ2h0ID0gd2luZG93SGVpZ2h0IC8gMjtcbiAgfVxuICBsZXQgZnVsbEhlaWdodCA9XG4gICAgbXlTY3JvbGxIZWlnaHQgKiAodG90YWxTZWN0aW9ucyArIHRvdGFsQnV6ek9uKSArIHdpbmRvd0hlaWdodCAtIDE7XG4gIGxldCBidXp6QmxvY2sgPSAkKFwiLmJ1enpPbkJlZXNCbG9ja1wiKTtcbiAgbGV0IGJ1enpXaWR0aCA9IGJ1enpCbG9jay5vdXRlcldpZHRoKCk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBHTE9CQUxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNldCBPdmVyYWxsIFNjcm9sbCBIZWlnaHRcbiAgZ3NhcC5zZXQoXCIuaG9tZS1wYWdlXCIsIHsgaGVpZ2h0OiBmdWxsSGVpZ2h0IH0pO1xuICBnc2FwLnNldChkb2N1bWVudC5ib2R5LCB7IG92ZXJmbG93OiBcImhpZGRlblwiIH0pO1xuICAvLyBIaWRlIEFsbCBMaW5lc1xuICBnc2FwLnNldCgkKFwiLmhvbWUtcGFnZVwiKS5maW5kKFwicGF0aFwiKSwgeyBkcmF3U1ZHOiBcIjUwJSA1MCVcIiB9KTtcbiAgZ3NhcC5zZXQoJChcIi5ob21lLXBhZ2VcIikuZmluZChcInBvbHlsaW5lXCIpLCB7IGRyYXdTVkc6IFwiNTAlIDUwJVwiIH0pO1xuICBnc2FwLnNldCgkKFwiLmhvbWUtcGFnZVwiKS5maW5kKFwibGluZVwiKSwgeyBkcmF3U1ZHOiBcIjUwJSA1MCVcIiB9KTtcbiAgZ3NhcC5zZXQoJChcIi5ob21lLXBhZ2VcIikuZmluZChcIiNkb3duLWFycm93IGxpbmVcIiksIHsgZHJhd1NWRzogXCIxMDAlIDEwMCVcIiB9KTtcbiAgLy8gU2V0IDFzdCBCYWNrZ3JvdW5kIEltYWdlIGFzIFZpc2libGVcbiAgZ3NhcC5zZXQoXCIjYmFja2dyb3VuZDFcIiwgeyBvcGFjaXR5OiAxLCB6SW5kZXg6IDEwMSB9KTtcbiAgLy8gU2V0IEJ1enogT24gQmVlcyB0byBIaWRkZW5cbiAgZ3NhcC5zZXQoYnV6ekJsb2NrLCB7IHg6IGJ1enpXaWR0aCB9KTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFQ1RJT04gMVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbGV0IHNlYzEgPSAkKFwiI3NlY3Rpb24xXCIpO1xuICBsZXQgc2VjMUgyID0gc2VjMS5maW5kKFwiaDJcIik7XG4gIGxldCBzZWMxc3BsaXRIMiA9IG5ldyBTcGxpdFRleHQoc2VjMUgyLCB7IHR5cGU6IFwibGluZXMsd29yZHMsY2hhcnNcIiB9KTtcbiAgbGV0IHNlYzFDaGFyczIgPSBzZWMxc3BsaXRIMi5jaGFycztcbiAgbGV0IHNlYzFXb3JkczIgPSBzZWMxc3BsaXRIMi53b3JkcztcbiAgbGV0IHNlYzFMaW5lczIgPSBzZWMxc3BsaXRIMi5saW5lcztcbiAgJChzZWMxTGluZXMyKS5hZGRDbGFzcyhcImgyTGluZXNcIik7XG4gICQoc2VjMUNoYXJzMikuYWRkQ2xhc3MoXCJoMkNoYXJzIHNlYzFDaGFyczJcIik7XG4gICQoc2VjMVdvcmRzMikuYWRkQ2xhc3MoXCJoMldvcmRzIHNlYzFXb3JkczJcIik7XG5cbiAgbGV0IHNlYzFIMyA9IHNlYzEuZmluZChcImgzXCIpO1xuICBsZXQgc2VjMXNwbGl0SDMgPSBuZXcgU3BsaXRUZXh0KHNlYzFIMywgeyB0eXBlOiBcImxpbmVzLHdvcmRzLGNoYXJzXCIgfSk7XG4gIGxldCBzZWMxQ2hhcnMzID0gc2VjMXNwbGl0SDMuY2hhcnM7XG4gIGxldCBzZWMxV29yZHMzID0gc2VjMXNwbGl0SDMud29yZHM7XG4gICQoc2VjMUNoYXJzMykuYWRkQ2xhc3MoXCJoM0NoYXJzIHNlYzFDaGFyczNcIik7XG4gICQoc2VjMVdvcmRzMykuYWRkQ2xhc3MoXCJoM1dvcmRzIHNlYzFXb3JkczNcIik7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRUNUSU9OIDJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGxldCBzZWMyID0gJChcIiNzZWN0aW9uMlwiKTtcbiAgbGV0IHNlYzJIMiA9IHNlYzIuZmluZChcImgyXCIpO1xuICBsZXQgc2VjMnNwbGl0SDIgPSBuZXcgU3BsaXRUZXh0KHNlYzJIMiwgeyB0eXBlOiBcImxpbmVzLHdvcmRzLGNoYXJzXCIgfSk7XG4gIGxldCBzZWMyQ2hhcnMyID0gc2VjMnNwbGl0SDIuY2hhcnM7XG4gIGxldCBzZWMyV29yZHMyID0gc2VjMnNwbGl0SDIud29yZHM7XG4gIGxldCBzZWMyTGluZXMyID0gc2VjMnNwbGl0SDIubGluZXM7XG4gICQoc2VjMkxpbmVzMikuYWRkQ2xhc3MoXCJoMkxpbmVzXCIpO1xuICAkKHNlYzJDaGFyczIpLmFkZENsYXNzKFwiaDJDaGFycyBzZWMyQ2hhcnMyXCIpO1xuICAkKHNlYzJXb3JkczIpLmFkZENsYXNzKFwiaDJXb3JkcyBzZWMyV29yZHMyXCIpO1xuXG4gIGxldCBzZWMyUCA9IHNlYzIuZmluZChcIi50ZXh0LWNvbnRhaW5lciBwXCIpO1xuICBsZXQgc2VjMnNwbGl0UCA9IG5ldyBTcGxpdFRleHQoc2VjMlAsIHsgdHlwZTogXCJsaW5lc1wiIH0pO1xuICAvLyBsZXQgc2VjMldvcmRzUCA9IHNlYzJzcGxpdFAud29yZHM7XG4gIGxldCBzZWMyTGluZXNQID0gc2VjMnNwbGl0UC5saW5lcztcbiAgLy8gJChzZWMyV29yZHNQKS5hZGRDbGFzcygnaDNXb3JkcyBzZWMyV29yZHNQJyk7XG4gICQoc2VjMkxpbmVzUCkuYWRkQ2xhc3MoXCJwTGluZXMgc2VjMkxpbmVzUFwiKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFQ1RJT04gNFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbGV0IHNlYzQgPSAkKFwiI3NlY3Rpb240XCIpO1xuICBsZXQgc2VjNEgyID0gc2VjNC5maW5kKFwiaDJcIik7XG4gIGxldCBzZWM0c3BsaXRIMiA9IG5ldyBTcGxpdFRleHQoc2VjNEgyLCB7IHR5cGU6IFwibGluZXMsd29yZHMsY2hhcnNcIiB9KTtcbiAgbGV0IHNlYzRDaGFyczIgPSBzZWM0c3BsaXRIMi5jaGFycztcbiAgbGV0IHNlYzRXb3JkczIgPSBzZWM0c3BsaXRIMi53b3JkcztcbiAgbGV0IHNlYzRMaW5lczIgPSBzZWM0c3BsaXRIMi5saW5lcztcbiAgJChzZWM0TGluZXMyKS5hZGRDbGFzcyhcImgyTGluZXNcIik7XG4gICQoc2VjNENoYXJzMikuYWRkQ2xhc3MoXCJoMkNoYXJzIHNlYzRDaGFyczJcIik7XG4gICQoc2VjNFdvcmRzMikuYWRkQ2xhc3MoXCJoMldvcmRzIHNlYzRXb3JkczJcIik7XG5cbiAgbGV0IHNlYzRQID0gc2VjNC5maW5kKFwiLnRleHQtY29udGFpbmVyIHBcIik7XG4gIGxldCBzZWM0c3BsaXRQID0gbmV3IFNwbGl0VGV4dChzZWM0UCwgeyB0eXBlOiBcImxpbmVzXCIgfSk7XG4gIC8vIGxldCBzZWM0V29yZHNQID0gc2VjNHNwbGl0UC53b3JkcztcbiAgbGV0IHNlYzRMaW5lc1AgPSBzZWM0c3BsaXRQLmxpbmVzO1xuICAvLyAkKHNlYzRXb3Jkc1ApLmFkZENsYXNzKCdoM1dvcmRzIHNlYzRXb3Jkc1AnKTtcbiAgJChzZWM0TGluZXNQKS5hZGRDbGFzcyhcInBMaW5lcyBzZWM0TGluZXNQXCIpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VDVElPTiA1XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgc2VjNSA9ICQoXCIjc2VjdGlvbjVcIik7XG4gIGxldCBzZWM1SDIgPSBzZWM1LmZpbmQoXCJoMlwiKTtcbiAgbGV0IHNlYzVzcGxpdEgyID0gbmV3IFNwbGl0VGV4dChzZWM1SDIsIHsgdHlwZTogXCJsaW5lcyx3b3JkcyxjaGFyc1wiIH0pO1xuICBsZXQgc2VjNUNoYXJzMiA9IHNlYzVzcGxpdEgyLmNoYXJzO1xuICBsZXQgc2VjNVdvcmRzMiA9IHNlYzVzcGxpdEgyLndvcmRzO1xuICBsZXQgc2VjNUxpbmVzMiA9IHNlYzVzcGxpdEgyLmxpbmVzO1xuICAkKHNlYzVMaW5lczIpLmFkZENsYXNzKFwiaDJMaW5lc1wiKTtcbiAgJChzZWM1Q2hhcnMyKS5hZGRDbGFzcyhcImgyQ2hhcnMgc2VjNUNoYXJzMlwiKTtcbiAgJChzZWM1V29yZHMyKS5hZGRDbGFzcyhcImgyV29yZHMgc2VjNVdvcmRzMlwiKTtcblxuICBsZXQgc2VjNVAgPSBzZWM1LmZpbmQoXCIudGV4dC1jb250YWluZXIgcFwiKTtcbiAgbGV0IHNlYzVzcGxpdFAgPSBuZXcgU3BsaXRUZXh0KHNlYzVQLCB7IHR5cGU6IFwibGluZXNcIiB9KTtcbiAgLy8gbGV0IHNlYzVXb3Jkc1AgPSBzZWM1c3BsaXRQLndvcmRzO1xuICBsZXQgc2VjNUxpbmVzUCA9IHNlYzVzcGxpdFAubGluZXM7XG4gIC8vICQoc2VjNVdvcmRzUCkuYWRkQ2xhc3MoJ2gzV29yZHMgc2VjNVdvcmRzUCcpO1xuICAkKHNlYzVMaW5lc1ApLmFkZENsYXNzKFwicExpbmVzIHNlYzVMaW5lc1BcIik7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRUNUSU9OIDZcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGxldCBzZWM2ID0gJChcIiNzZWN0aW9uNlwiKTtcbiAgbGV0IHNlYzZIMiA9IHNlYzYuZmluZChcImgyXCIpO1xuICBsZXQgc2VjNnNwbGl0SDIgPSBuZXcgU3BsaXRUZXh0KHNlYzZIMiwgeyB0eXBlOiBcImxpbmVzLHdvcmRzLGNoYXJzXCIgfSk7XG4gIGxldCBzZWM2Q2hhcnMyID0gc2VjNnNwbGl0SDIuY2hhcnM7XG4gIGxldCBzZWM2V29yZHMyID0gc2VjNnNwbGl0SDIud29yZHM7XG4gIGxldCBzZWM2TGluZXMyID0gc2VjNnNwbGl0SDIubGluZXM7XG4gICQoc2VjNkxpbmVzMikuYWRkQ2xhc3MoXCJoMkxpbmVzXCIpO1xuICAkKHNlYzZDaGFyczIpLmFkZENsYXNzKFwiaDJDaGFycyBzZWM2Q2hhcnMyXCIpO1xuICAkKHNlYzZXb3JkczIpLmFkZENsYXNzKFwiaDJXb3JkcyBzZWM2V29yZHMyXCIpO1xuXG4gIGxldCBzZWM2UCA9IHNlYzYuZmluZChcIi50ZXh0LWNvbnRhaW5lciBwXCIpO1xuICBsZXQgc2VjNnNwbGl0UCA9IG5ldyBTcGxpdFRleHQoc2VjNlAsIHsgdHlwZTogXCJsaW5lc1wiIH0pO1xuICAvLyBsZXQgc2VjNldvcmRzUCA9IHNlYzZzcGxpdFAud29yZHM7XG4gIGxldCBzZWM2TGluZXNQID0gc2VjNnNwbGl0UC5saW5lcztcbiAgLy8gJChzZWM2V29yZHNQKS5hZGRDbGFzcygnaDNXb3JkcyBzZWM2V29yZHNQJyk7XG4gICQoc2VjNkxpbmVzUCkuYWRkQ2xhc3MoXCJwTGluZXMgc2VjNkxpbmVzUFwiKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFQ1RJT04gN1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gbGV0IHNlYzcgPSAkKCcjc2VjdGlvbjcnKTtcbiAgLy8gbGV0IHNlYzdIMiA9IHNlYzcuZmluZCgnaDInKTtcbiAgLy8gbGV0IHNlYzdzcGxpdEgyID0gbmV3IFNwbGl0VGV4dChzZWM3SDIsIHsgdHlwZTogXCJsaW5lcyx3b3JkcyxjaGFyc1wiIH0pO1xuICAvLyBsZXQgc2VjN0NoYXJzMiA9IHNlYzdzcGxpdEgyLmNoYXJzO1xuICAvLyBsZXQgc2VjN1dvcmRzMiA9IHNlYzdzcGxpdEgyLndvcmRzO1xuICAvLyBsZXQgc2VjN0xpbmVzMiA9IHNlYzdzcGxpdEgyLmxpbmVzO1xuICAvLyAkKHNlYzdMaW5lczIpLmFkZENsYXNzKCdoMkxpbmVzJyk7XG4gIC8vICQoc2VjN0NoYXJzMikuYWRkQ2xhc3MoJ2gyQ2hhcnMnKTtcbiAgLy8gJChzZWM3V29yZHMyKS5hZGRDbGFzcygnaDJXb3JkcycpO1xuXG4gIC8vIGxldCBzZWM3UCA9IHNlYzcuZmluZCgnLnRleHQtY29udGFpbmVyIHAnKTtcbiAgLy8gbGV0IHNlYzdzcGxpdFAgPSBuZXcgU3BsaXRUZXh0KHNlYzdQLCB7IHR5cGU6IFwibGluZXNcIiB9KTtcbiAgLy8gLy8gbGV0IHNlYzdXb3Jkc1AgPSBzZWM3c3BsaXRQLndvcmRzO1xuICAvLyBsZXQgc2VjN0xpbmVzUCA9IHNlYzdzcGxpdFAubGluZXM7XG4gIC8vIC8vICQoc2VjN1dvcmRzUCkuYWRkQ2xhc3MoJ2gzV29yZHMgc2VjN1dvcmRzUCcpO1xuICAvLyAkKHNlYzdMaW5lc1ApLmFkZENsYXNzKCdwTGluZXMgc2VjN0xpbmVzUCcpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VDVElPTiA4XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBsZXQgc2VjOCA9ICQoJyNzZWN0aW9uOCcpO1xuICAvLyBsZXQgc2VjOEgyID0gc2VjOC5maW5kKCdoMicpO1xuICAvLyBsZXQgc2VjOHNwbGl0SDIgPSBuZXcgU3BsaXRUZXh0KHNlYzhIMiwgeyB0eXBlOiBcImxpbmVzLHdvcmRzLGNoYXJzXCIgfSk7XG4gIC8vIGxldCBzZWM4Q2hhcnMyID0gc2VjOHNwbGl0SDIuY2hhcnM7XG4gIC8vIGxldCBzZWM4V29yZHMyID0gc2VjOHNwbGl0SDIud29yZHM7XG4gIC8vIGxldCBzZWM4TGluZXMyID0gc2VjOHNwbGl0SDIubGluZXM7XG4gIC8vICQoc2VjOExpbmVzMikuYWRkQ2xhc3MoJ2gyTGluZXMnKTtcbiAgLy8gJChzZWM4Q2hhcnMyKS5hZGRDbGFzcygnaDJDaGFycycpO1xuICAvLyAkKHNlYzhXb3JkczIpLmFkZENsYXNzKCdoMldvcmRzJyk7XG5cbiAgLy8gbGV0IHNlYzhQID0gc2VjOC5maW5kKCcudGV4dC1jb250YWluZXIgcCcpO1xuICAvLyBsZXQgc2VjOHNwbGl0UCA9IG5ldyBTcGxpdFRleHQoc2VjOFAsIHsgdHlwZTogXCJsaW5lc1wiIH0pO1xuICAvLyAvLyBsZXQgc2VjOFdvcmRzUCA9IHNlYzhzcGxpdFAud29yZHM7XG4gIC8vIGxldCBzZWM4TGluZXNQID0gc2VjOHNwbGl0UC5saW5lcztcbiAgLy8gLy8gJChzZWM4V29yZHNQKS5hZGRDbGFzcygnaDNXb3JkcyBzZWM4V29yZHNQJyk7XG4gIC8vICQoc2VjOExpbmVzUCkuYWRkQ2xhc3MoJ3BMaW5lcyBzZWM4TGluZXNQJyk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRVRVUCBFTEVNRU5UU1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gZ3NhcC5zZXQoJy5oMkNoYXJzJywge3k6JzEuMWVtJ30pO1xufTtcbiIsImltcG9ydCB7IFxuICBwcmVMb2FkZXIsXG4gIHZpZExpbmtzLFxuICBtb2JpbGVWaWRMaW5rcyxcbiAgZ3NhcFJlZ2lzdGVycyxcbiAgY2xpY2tFdmVudHMsXG4gIG1vYmlsZU5hdlNldHVwLFxuICBhbmltYXRlU2VjdGlvbixcbiAgc2VjdGlvbnNTZXR1cCxcbiAgbW9iaWxlQW5pbWF0ZVNlY3Rpb24sXG4gIG1vYmlsZVNlY3Rpb25zU2V0dXBcbn0gZnJvbSAnLi9pbmRleC5qcyc7XG4gXG5cbi8vICQod2luZG93KS5vbignYmVmb3JldW5sb2FkJywgZnVuY3Rpb24oKSB7XG4vLyAgICQod2luZG93KS5zY3JvbGxUb3AoMCk7XG4vLyB9KTtcblxud2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24gKCkge1xuICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgcHJlTG9hZGVyKCk7XG4gICAgZ3NhcFJlZ2lzdGVycygpO1xuICAgIFxuICAgIGlmIChzY3JlZW4ud2lkdGggPD0gMTAyNCl7XG4gICAgICBtb2JpbGVTZWN0aW9uc1NldHVwKCk7XG4gICAgICBtb2JpbGVWaWRMaW5rcygpO1xuICAgICAgbW9iaWxlQW5pbWF0ZVNlY3Rpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VjdGlvbnNTZXR1cCgpO1xuICAgICAgdmlkTGlua3MoKTtcbiAgICAgIGFuaW1hdGVTZWN0aW9uKCk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIFxuICAgICAgXG4gICAgICBcbn0pXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcblxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==