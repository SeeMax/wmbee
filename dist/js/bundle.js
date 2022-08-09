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
    sectionAnim3: function sectionAnim3() {
      var thisSec = $("#section3");
      var thisBack = $("#background3");
      var sectionLines = thisSec.find(".single-backline");
      var center4L = $(thisSec).find("#center-4L");
      var center4R = $(thisSec).find("#center-4R");
      var center3L = $(thisSec).find("#center-3L");
      var center3R = $(thisSec).find("#center-3R");
      var center2L = $(thisSec).find("#center-2L");
      var center2R = $(thisSec).find("#center-2R");
      var bottomSmall = $(thisSec).find("#bottom-small");
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
      tl.fromTo(".videoArea", {
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
    sectionAnim5: function sectionAnim5() {
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
    sectionAnim6: function sectionAnim6() {
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
    },
    sectionAnim7: function sectionAnim7() {
      var thisSec = $("#section7");
      var thisBack = $("#background7");
      var thisOverlay = $("#overlay7");
      var sectionLines = thisSec.find(".single-backline");
      var secArrow = $("#section1").find(".down-arrow-svg");
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
  sectionAnim["sectionAnim1"]().play(); // Fire An Animation From Above for Each Section

  var sectionTrig = function sectionTrig(myCount) {
    // Play Section 1 automatically
    ScrollTrigger.create({
      trigger: "#section" + myCount,
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
        if (myCount < 7) {
          // gsap.set('body', {touchAction:'none'});
          sectionAnim["sectionAnim" + myCount]().reverse(0);
        }
      },
      onEnterBack: function onEnterBack() {
        if (myCount < 7) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hbmltYXRlU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9jbGlja0V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9nc2FwUmVnaXN0ZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21lbnVUb2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbW9iaWxlQW5pbWF0ZVNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbW9iaWxlU2VjdGlvbnNTZXR1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9wYWdlU2V0dXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2VjdGlvbnNTZXR1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy93aW5kb3dMb2FkLmpzIl0sIm5hbWVzIjpbImFuaW1hdGVTZWN0aW9uIiwid2luZG93SGVpZ2h0IiwiTWF0aCIsInJvdW5kIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJzY3JlZW4iLCJ3aWR0aCIsIm15U2Nyb2xsSGVpZ2h0IiwibXlTY3JvbGxPZmZzZXQiLCJzZWN0aW9uQW5pbSIsInNlY3Rpb25BbmltMSIsInRoaXNTZWMiLCJ0aGlzT3ZlcmxheSIsIiQiLCJjaGFyc0gyIiwiZmluZCIsImNoYXJzSDMiLCJjZW50ZXI0TCIsImNlbnRlcjRSIiwiY2VudGVyM0wiLCJjZW50ZXIzUiIsImNlbnRlcjJMIiwiY2VudGVyMlIiLCJjZW50ZXIxIiwidG9wU21hbGwiLCJib3R0b21TbWFsbCIsImNlbnRlclNtYWxsIiwidG9wTGVmdFNtYWxsIiwidG9wUmlnaHR0U21hbGwiLCJib3R0b21MZWZ0U21hbGwiLCJib3R0b21SaWdodHRTbWFsbCIsInNtYWxsc0dyb3VwIiwiZG93bkFycm93IiwiZG93bkFycm93TGluZSIsImRvd25BcnJvd1BvaW50IiwidGwiLCJnc2FwIiwidGltZWxpbmUiLCJwYXVzZWQiLCJkZWZhdWx0cyIsImR1cmF0aW9uIiwiZWFzZSIsIm9uQ29tcGxldGUiLCJzZXQiLCJkb2N1bWVudCIsImJvZHkiLCJvdmVyZmxvdyIsImxpbmVUTCIsImFycm93VEwiLCJyZXBlYXQiLCJ5b3lvIiwidG8iLCJ5Iiwib25SZXZlcnNlQ29tcGxldGUiLCJraWxsVHdlZW5zT2YiLCJjb250ZW50VEwiLCJ6SW5kZXgiLCJmcm9tVG8iLCJkcmF3U1ZHIiwieCIsIm9wYWNpdHkiLCJzdGFnZ2VyIiwiYW1vdW50IiwiZnJvbSIsImFkZCIsInNlY3Rpb25BbmltMiIsImxpbmVzUCIsInNlY3Rpb25UZXh0IiwiZGVsYXkiLCJzZWN0aW9uQW5pbTMiLCJ0aGlzQmFjayIsInNvbG9DZW50ZXIyIiwic29sb0NlbnRlcjEiLCJzZWN0aW9uQW5pbTQiLCJtb3JwaFNWRyIsInNoYXBlIiwic2VjdGlvbkFuaW01Iiwic2VjdGlvbkFuaW02IiwiaW1nQ29udGFpbmVyIiwic3ViSW1nIiwicGxheSIsInNlY3Rpb25UcmlnIiwibXlDb3VudCIsInN0YXJ0SGVpZ2h0IiwiZW5kSGVpZ2h0IiwiU2Nyb2xsVHJpZ2dlciIsImNyZWF0ZSIsInN0YXJ0IiwiZW5kIiwic2NydWIiLCJvbkVudGVyIiwib25MZWF2ZSIsInJldmVyc2UiLCJvbkVudGVyQmFjayIsIm9uTGVhdmVCYWNrIiwiaSIsImVhY2giLCJidXp6SW40IiwiYnV6ekJsb2NrIiwiYnV6eldpZHRoIiwib3V0ZXJXaWR0aCIsImJ1enpUcmlnNCIsImJ1enpJbjUiLCJidXp6VHJpZzUiLCJidXp6SW42IiwiYnV6elRyaWc2IiwiY2xpY2tFdmVudHMiLCJtZW51VG9nZ2xlVEwiLCJtZW51VG9nZ2xlIiwicmV2ZXJzZWQiLCJvbiIsImhlaWdodCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNtb290aFNjcm9sbGluZyIsImdzYXBSZWdpc3RlcnMiLCJyZWdpc3RlclBsdWdpbiIsIlNjcm9sbFRvUGx1Z2luIiwiU3BsaXRUZXh0IiwiRHJhd1NWR1BsdWdpbiIsIk1vcnBoU1ZHUGx1Z2luIiwibGVmdCIsInJvdGF0aW9uIiwidHJhbnNmb3JtT3JpZ2luIiwibW9iaWxlQW5pbWF0ZVNlY3Rpb24iLCJzZWN0aW9uTGluZXMiLCJzZWNBcnJvdyIsImxpbmVzIiwic2VjdGlvbkFuaW03IiwidHJpZ2dlciIsImxpbmVzSW4iLCJ0aGVzZUxpbmVzIiwibW9iaWxlU2VjdGlvbnNTZXR1cCIsInRvdGFsU2VjdGlvbnMiLCJsZW5ndGgiLCJ0b3RhbEJ1enpPbiIsImZ1bGxIZWlnaHQiLCJzZWMxTGluZXMiLCJzZWMxQXJyb3ciLCJzZWMxIiwic2VjMUgyIiwic2VjMXNwbGl0SDIiLCJ0eXBlIiwic2VjMUNoYXJzMiIsImNoYXJzIiwic2VjMVdvcmRzMiIsIndvcmRzIiwic2VjMUxpbmVzMiIsImFkZENsYXNzIiwic2VjMUgzIiwic2VjMXNwbGl0SDMiLCJzZWMxQ2hhcnMzIiwic2VjMVdvcmRzMyIsInNlYzIiLCJzZWMySDIiLCJzZWMyc3BsaXRIMiIsInNlYzJXb3JkczIiLCJzZWMyTGluZXMyIiwic2VjMlAiLCJzZWMyc3BsaXRQIiwic2VjMkxpbmVzUCIsInNlYzQiLCJzZWM0SDIiLCJzZWM0c3BsaXRIMiIsInNlYzRXb3JkczIiLCJzZWM0TGluZXMyIiwic2VjNFAiLCJzZWM0c3BsaXRQIiwic2VjNExpbmVzUCIsInNlYzUiLCJzZWM1SDIiLCJzZWM1c3BsaXRIMiIsInNlYzVXb3JkczIiLCJzZWM1TGluZXMyIiwic2VjNVAiLCJzZWM1c3BsaXRQIiwic2VjNUxpbmVzUCIsInNlYzYiLCJzZWM2SDIiLCJzZWM2c3BsaXRIMiIsInNlYzZXb3JkczIiLCJzZWM2TGluZXMyIiwic2VjNlAiLCJzZWM2c3BsaXRQIiwic2VjNkxpbmVzUCIsInNlYzciLCJzZWM3SDIiLCJzZWM3c3BsaXRIMiIsInNlYzdXb3JkczIiLCJzZWM3TGluZXMyIiwic2VjN1AiLCJzZWM3c3BsaXRQIiwic2VjN0xpbmVzUCIsInNlYzgiLCJzZWM4SDIiLCJzZWM4c3BsaXRIMiIsInNlYzhXb3JkczIiLCJzZWM4TGluZXMyIiwic2VjOFAiLCJzZWM4c3BsaXRQIiwic2VjOExpbmVzUCIsInByZUxvYWRlciIsInJlbW92ZSIsInNjYWxlIiwidmlkTGlua3MiLCJ0aGlzU3JjIiwiYXR0ciIsIm1vYmlsZVZpZExpbmtzIiwidGhlTGluayIsInRhcmdldCIsImhlYWRlckhlaWdodCIsIm91dGVySGVpZ2h0Iiwic2Nyb2xsVG8iLCJtb2JpbGVOYXZTZXR1cCIsInNlY3Rpb25zU2V0dXAiLCJzZWMyQ2hhcnMyIiwic2VjNENoYXJzMiIsInNlYzVDaGFyczIiLCJzZWM2Q2hhcnMyIiwib25iZWZvcmV1bmxvYWQiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNB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TSxDQUFDaU4sUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNELENBRkQ7O0FBSUFqTixNQUFNLENBQUN5TixnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFXO0VBQ3ZDbkIsMkRBQVM7RUFDVHRGLCtEQUFhOztFQUViLElBQUk5RyxNQUFNLENBQUNDLEtBQVAsSUFBZ0IsSUFBcEIsRUFBeUI7SUFDdkI4SCxxRUFBbUI7SUFDbkIyRSxnRUFBYztJQUNkbkYsc0VBQW9CO0VBQ3JCLENBSkQsTUFJTztJQUNMMEYsK0RBQWE7SUFDYlYsMERBQVE7SUFDUjdNLGdFQUFjO0VBQ2Y7QUFNSixDQWxCRDtBQW9CQUksTUFBTSxDQUFDeU4sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBVyxDQUU1QyxDQUZELEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICcuL2NvbXBvbmVudHMvd2luZG93TG9hZC5qcyc7IiwiZXhwb3J0IGxldCBhbmltYXRlU2VjdGlvbiA9ICgpID0+IHtcbiAgbGV0IHdpbmRvd0hlaWdodCA9IE1hdGgucm91bmQod2luZG93LmlubmVySGVpZ2h0KTtcbiAgaWYgKHNjcmVlbi53aWR0aCA8PSAxMDI0KSB7XG4gICAgdmFyIG15U2Nyb2xsSGVpZ2h0ID0gd2luZG93SGVpZ2h0ICogMjtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbXlTY3JvbGxIZWlnaHQgPSB3aW5kb3dIZWlnaHQgLyAyO1xuICB9XG4gIGxldCBteVNjcm9sbE9mZnNldCA9IDA7XG4gIC8vIEdsb2JhbCB2YXIgZm9yIGFuaW1hdGlvbnMgLyBBY2Nlc3MgdmlhIHNlY3Rpb24gdHJpZyBsb29wXG5cbiAgLy8gY29uc29sZS5sb2cobXlTY3JvbGxIZWlnaHQpO1xuICBsZXQgc2VjdGlvbkFuaW0gPSB7XG4gICAgc2VjdGlvbkFuaW0xOiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9IFwiI3NlY3Rpb24xXCI7XG4gICAgICBsZXQgdGhpc092ZXJsYXkgPSAkKFwiI292ZXJsYXkxXCIpO1xuICAgICAgbGV0IGNoYXJzSDIgPSAkKHRoaXNTZWMpLmZpbmQoXCIuc2VjMUNoYXJzMlwiKTtcbiAgICAgIGxldCBjaGFyc0gzID0gJCh0aGlzU2VjKS5maW5kKFwiLnNlYzFDaGFyczNcIik7XG4gICAgICAvLyBCYWNrZ3JvdW5kIFNoYXBlIFZhcnNcbiAgICAgIGxldCBjZW50ZXI0TCA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItNExcIik7XG4gICAgICBsZXQgY2VudGVyNFIgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTRSXCIpO1xuICAgICAgbGV0IGNlbnRlcjNMID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci0zTFwiKTtcbiAgICAgIGxldCBjZW50ZXIzUiA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItM1JcIik7XG4gICAgICBsZXQgY2VudGVyMkwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTJMXCIpO1xuICAgICAgbGV0IGNlbnRlcjJSID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci0yUlwiKTtcbiAgICAgIGxldCBjZW50ZXIxID0gJCh0aGlzU2VjKS5maW5kKFwiI3RvcC1iaWdcIik7XG4gICAgICBsZXQgdG9wU21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjdG9wLXNtYWxsXCIpO1xuICAgICAgbGV0IGJvdHRvbVNtYWxsID0gJCh0aGlzU2VjKS5maW5kKFwiI2JvdHRvbS1zbWFsbFwiKTtcbiAgICAgIGxldCBjZW50ZXJTbWFsbCA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItc21hbGxcIik7XG4gICAgICBsZXQgdG9wTGVmdFNtYWxsID0gJCh0aGlzU2VjKS5maW5kKFwiI3RvcC1sZWZ0LXNtYWxsXCIpO1xuICAgICAgbGV0IHRvcFJpZ2h0dFNtYWxsID0gJCh0aGlzU2VjKS5maW5kKFwiI3RvcC1yaWdodC1zbWFsbFwiKTtcbiAgICAgIGxldCBib3R0b21MZWZ0U21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjYm90dG9tLWxlZnQtc21hbGxcIik7XG4gICAgICBsZXQgYm90dG9tUmlnaHR0U21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjYm90dG9tLXJpZ2h0LXNtYWxsXCIpO1xuICAgICAgbGV0IHNtYWxsc0dyb3VwID0gW1xuICAgICAgICB0b3BTbWFsbCxcbiAgICAgICAgYm90dG9tU21hbGwsXG4gICAgICAgIGNlbnRlclNtYWxsLFxuICAgICAgICB0b3BMZWZ0U21hbGwsXG4gICAgICAgIHRvcFJpZ2h0dFNtYWxsLFxuICAgICAgICBib3R0b21MZWZ0U21hbGwsXG4gICAgICAgIGJvdHRvbVJpZ2h0dFNtYWxsLFxuICAgICAgXTtcbiAgICAgIC8vIEFycm93IFBpZWNlc1xuICAgICAgbGV0IGRvd25BcnJvdyA9ICQodGhpc1NlYykuZmluZChcIiNkb3duLWFycm93XCIpO1xuICAgICAgbGV0IGRvd25BcnJvd0xpbmUgPSAkKHRoaXNTZWMpLmZpbmQoXCIjZG93bi1hcnJvdy1saW5lXCIpO1xuICAgICAgbGV0IGRvd25BcnJvd1BvaW50ID0gJCh0aGlzU2VjKS5maW5kKFwiI2Rvd24tYXJyb3ctcG9pbnRcIik7XG5cbiAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBwYXVzZWQ6IHRydWUsXG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgLy8gUmVsZWFzZSBUaGUgU2Nyb2xsIExvY2tcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGdzYXAuc2V0KGRvY3VtZW50LmJvZHksIHsgb3ZlcmZsb3c6IFwiYXV0b1wiIH0pO1xuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGxldCBsaW5lVEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMC44LFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGxldCBhcnJvd1RMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246IDAuMTUsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBCb3VuY2UgVGhlIERvd24gQXJyb3dcbiAgICAgICAgICBnc2FwXG4gICAgICAgICAgICAudGltZWxpbmUoeyByZXBlYXQ6IC0xLCB5b3lvOiB0cnVlIH0pXG4gICAgICAgICAgICAudG8oZG93bkFycm93LCB7IHk6IC00LCBkdXJhdGlvbjogMSwgZWFzZTogXCJub25lXCIgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmV2ZXJzZUNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gU3RvcCBCb3VuY2luIFRoZSBEb3duIEFycm93IGFuZCBSZXNldCBpdCdzIFkgcG9zaXRpb25cbiAgICAgICAgICBnc2FwLmtpbGxUd2VlbnNPZihkb3duQXJyb3cpO1xuICAgICAgICAgIGdzYXAuc2V0KGRvd25BcnJvdywgeyB5OiAwIH0pO1xuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGxldCBjb250ZW50VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMC40LFxuICAgICAgICAgIGVhc2U6IFwiYmFjay5vdXQoMS41KVwiLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIFNldCBiYWNrZ3JvdW5kIHotaW5kZXggYnkgc2VjdGlvbiBudW1iZXIgLyBTZWN0aW9uIDIgaGFzIG5vIGJhY2sgLyBTZWN0aW9uIDMgaXMgei1pbmRleCAxMTAgdG8gc3RheSBhYm92ZSBhbGxcbiAgICAgIHRsLnNldCh0aGlzT3ZlcmxheSwgeyB6SW5kZXg6IDEwMSB9KTtcbiAgICAgIC8vIFNldCBzZWN0aW9uIHotaW5kZXggYnkgc2VjdGlvbiBudW1iZXJcbiAgICAgIHRsLmZyb21Ubyh0aGlzU2VjLCB7IHpJbmRleDogMTMgfSwgeyB6SW5kZXg6IDEwMDEgfSk7XG5cbiAgICAgIC8vIEFuaW1hdGUgTGluZXNcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGNlbnRlcjRMLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMCUgMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGNlbnRlcjRSLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAxMDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBjZW50ZXIzTCxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjAlIDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBjZW50ZXIzUixcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMTAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyMkwsXG4gICAgICAgIHsgZHJhd1NWRzogXCIwJSAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyMlIsXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDEwMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGNlbnRlcjEsXG4gICAgICAgIHsgZHJhd1NWRzogXCI1MCUgNTAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiwgZHVyYXRpb246IDAuNyB9LFxuICAgICAgICBcInNjcm9sbEluKz0wLjFcIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIHNtYWxsc0dyb3VwLFxuICAgICAgICB7IGRyYXdTVkc6IFwiNTAlIDUwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIsIGR1cmF0aW9uOiAwLjYgfSxcbiAgICAgICAgXCJzY3JvbGxJbis9MC4yXCJcbiAgICAgICk7XG5cbiAgICAgIC8vIEFuaW1hdGUgQ29udGVudFxuICAgICAgY29udGVudFRMLmZyb21UbyhcbiAgICAgICAgY2hhcnNIMixcbiAgICAgICAgeyB4OiAtMjAsIG9wYWNpdHk6IDAgfSxcbiAgICAgICAgeyB4OiAwLCBvcGFjaXR5OiAxLCBzdGFnZ2VyOiB7IGFtb3VudDogMC41IH0gfSxcbiAgICAgICAgXCJjb250ZW50XCJcbiAgICAgICk7XG4gICAgICBjb250ZW50VEwuZnJvbVRvKFxuICAgICAgICBjaGFyc0gzLFxuICAgICAgICB7IHk6IFwiMS4wMWVtXCIgfSxcbiAgICAgICAgeyB5OiAwLCBzdGFnZ2VyOiB7IGFtb3VudDogMC4yLCBmcm9tOiBcImNlbnRlclwiIH0gfSxcbiAgICAgICAgXCJjb250ZW50Kz0wLjM1XCJcbiAgICAgICk7XG5cbiAgICAgIC8vIEFuaW1hdGUgQXJyb3dcbiAgICAgIGFycm93VEwuZnJvbVRvKFxuICAgICAgICBkb3duQXJyb3dMaW5lLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAxMDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBhcnJvd1RMLmZyb21UbyhcbiAgICAgICAgZG93bkFycm93UG9pbnQsXG4gICAgICAgIHsgZHJhd1NWRzogXCI1MCUgNTAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluKz0wLjE0NVwiXG4gICAgICApO1xuXG4gICAgICAvLyBCdWlsZCBNYXN0ZXIgVExUTFxuICAgICAgdGwuZnJvbVRvKHRoaXNPdmVybGF5LCB7IG9wYWNpdHk6IDAgfSwgeyBvcGFjaXR5OiAwLjY1IH0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5hZGQobGluZVRMLCBcInNjcm9sbEluQWxsKz0wLjNcIik7XG4gICAgICB0bC5hZGQoY29udGVudFRMLCBcInNjcm9sbEluQWxsKz0wLjhcIik7XG4gICAgICB0bC5hZGQoYXJyb3dUTCwgXCJzY3JvbGxJbkFsbCs9MS40XCIpO1xuXG4gICAgICByZXR1cm4gdGw7XG4gICAgfSxcblxuICAgIHNlY3Rpb25BbmltMjogKCkgPT4ge1xuICAgICAgbGV0IHRoaXNTZWMgPSAkKFwiI3NlY3Rpb24yXCIpO1xuICAgICAgbGV0IGNoYXJzSDIgPSAkKHRoaXNTZWMpLmZpbmQoXCIuaDJDaGFyc1wiKTtcbiAgICAgIGxldCBsaW5lc1AgPSAkKHRoaXNTZWMpLmZpbmQoXCIucExpbmVzXCIpO1xuICAgICAgLy8gQmFja2dyb3VuZCBTaGFwZSBWYXJzXG4gICAgICBsZXQgY2VudGVyNEwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTRMXCIpO1xuICAgICAgbGV0IGNlbnRlcjRSID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci00UlwiKTtcbiAgICAgIGxldCBjZW50ZXIzTCA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItM0xcIik7XG4gICAgICBsZXQgY2VudGVyM1IgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTNSXCIpO1xuICAgICAgbGV0IGNlbnRlcjJMID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci0yTFwiKTtcbiAgICAgIGxldCBjZW50ZXIyUiA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItMlJcIik7XG4gICAgICBsZXQgY2VudGVyMSA9ICQodGhpc1NlYykuZmluZChcIiN0b3AtYmlnXCIpO1xuICAgICAgbGV0IHRvcFNtYWxsID0gJCh0aGlzU2VjKS5maW5kKFwiI3RvcC1zbWFsbFwiKTtcbiAgICAgIGxldCBib3R0b21TbWFsbCA9ICQodGhpc1NlYykuZmluZChcIiNib3R0b20tc21hbGxcIik7XG4gICAgICBsZXQgY2VudGVyU21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLXNtYWxsXCIpO1xuICAgICAgbGV0IHRvcExlZnRTbWFsbCA9ICQodGhpc1NlYykuZmluZChcIiN0b3AtbGVmdC1zbWFsbFwiKTtcbiAgICAgIGxldCB0b3BSaWdodHRTbWFsbCA9ICQodGhpc1NlYykuZmluZChcIiN0b3AtcmlnaHQtc21hbGxcIik7XG4gICAgICBsZXQgYm90dG9tTGVmdFNtYWxsID0gJCh0aGlzU2VjKS5maW5kKFwiI2JvdHRvbS1sZWZ0LXNtYWxsXCIpO1xuICAgICAgbGV0IGJvdHRvbVJpZ2h0dFNtYWxsID0gJCh0aGlzU2VjKS5maW5kKFwiI2JvdHRvbS1yaWdodC1zbWFsbFwiKTtcbiAgICAgIGxldCBzbWFsbHNHcm91cCA9IFtcbiAgICAgICAgdG9wU21hbGwsXG4gICAgICAgIGJvdHRvbVNtYWxsLFxuICAgICAgICBjZW50ZXJTbWFsbCxcbiAgICAgICAgdG9wTGVmdFNtYWxsLFxuICAgICAgICB0b3BSaWdodHRTbWFsbCxcbiAgICAgICAgYm90dG9tTGVmdFNtYWxsLFxuICAgICAgICBib3R0b21SaWdodHRTbWFsbCxcbiAgICAgIF07XG4gICAgICAvLyBBcnJvdyBQaWVjZXNcbiAgICAgIGxldCBkb3duQXJyb3cgPSAkKHRoaXNTZWMpLmZpbmQoXCIjZG93bi1hcnJvd1wiKTtcbiAgICAgIGxldCBkb3duQXJyb3dMaW5lID0gJCh0aGlzU2VjKS5maW5kKFwiI2Rvd24tYXJyb3ctbGluZVwiKTtcbiAgICAgIGxldCBkb3duQXJyb3dQb2ludCA9ICQodGhpc1NlYykuZmluZChcIiNkb3duLWFycm93LXBvaW50XCIpO1xuICAgICAgbGV0IHNlY3Rpb25UZXh0ID0gJCh0aGlzU2VjKS5maW5kKFwiLmRvd24tYXJyb3ctdGV4dFwiKTtcbiAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWxheTogMC42NSxcbiAgICAgICAgcGF1c2VkOiB0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIFJlbGVhc2UgVGhlIFNjcm9sbCBMb2NrXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBnc2FwLnNldChkb2N1bWVudC5ib2R5LCB7IG92ZXJmbG93OiBcImF1dG9cIiB9KTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgbGluZVRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246IDAuOCxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgY29udGVudFRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246IDAuMTUsXG4gICAgICAgICAgZWFzZTogXCJiYWNrLm91dCgxLjUpXCIsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgbGV0IGFycm93VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMC4xNSxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIEJvdW5jZSBUaGUgRG93biBBcnJvd1xuICAgICAgICAgIGdzYXBcbiAgICAgICAgICAgIC50aW1lbGluZSh7IHJlcGVhdDogLTEsIHlveW86IHRydWUgfSlcbiAgICAgICAgICAgIC50byhkb3duQXJyb3csIHsgeTogLTMsIGR1cmF0aW9uOiAxLCBlYXNlOiBcIm5vbmVcIiB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25SZXZlcnNlQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBTdG9wIEJvdW5jaW4gVGhlIERvd24gQXJyb3cgYW5kIFJlc2V0IGl0J3MgWSBwb3NpdGlvblxuICAgICAgICAgIGdzYXAua2lsbFR3ZWVuc09mKGRvd25BcnJvdyk7XG4gICAgICAgICAgZ3NhcC5zZXQoZG93bkFycm93LCB7IHk6IDAgfSk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgLy8gU2V0IHNlY3Rpb24gei1pbmRleCBieSBzZWN0aW9uIG51bWJlclxuICAgICAgdGwuZnJvbVRvKHRoaXNTZWMsIHsgekluZGV4OiAxMyB9LCB7IHpJbmRleDogMTAwMiB9KTtcblxuICAgICAgLy8gQW5pbWF0ZSBMaW5lc1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyNEwsXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDEwMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGNlbnRlcjRSLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMCUgMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGNlbnRlcjNMLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAxMDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBjZW50ZXIzUixcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjAlIDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBjZW50ZXIyTCxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMTAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyMlIsXG4gICAgICAgIHsgZHJhd1NWRzogXCIwJSAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyMSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjUwJSA1MCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiLCBkdXJhdGlvbjogMC43IH0sXG4gICAgICAgIFwic2Nyb2xsSW4rPTAuMVwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgc21hbGxzR3JvdXAsXG4gICAgICAgIHsgZHJhd1NWRzogXCI1MCUgNTAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiwgZHVyYXRpb246IDAuNiB9LFxuICAgICAgICBcInNjcm9sbEluKz0wLjJcIlxuICAgICAgKTtcblxuICAgICAgLy8gQW5pbWF0ZSBDb250ZW50XG4gICAgICBjb250ZW50VEwuZnJvbVRvKFxuICAgICAgICBjaGFyc0gyLFxuICAgICAgICB7IHg6IC0yMCwgb3BhY2l0eTogMCB9LFxuICAgICAgICB7IHg6IDAsIG9wYWNpdHk6IDEsIHN0YWdnZXI6IHsgYW1vdW50OiAwLjMsIGZyb206IFwicmFuZG9tXCIgfSB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBjb250ZW50VEwuZnJvbVRvKFxuICAgICAgICBsaW5lc1AsXG4gICAgICAgIHsgb3BhY2l0eTogMCwgeDogLTQwIH0sXG4gICAgICAgIHsgb3BhY2l0eTogMSwgeDogMCwgc3RhZ2dlcjogeyBhbW91bnQ6IDAuMyB9IH0sXG4gICAgICAgIFwic2Nyb2xsSW4rPTAuMVwiXG4gICAgICApO1xuXG4gICAgICAvLyBBbmltYXRlIEFycm93XG4gICAgICBhcnJvd1RMLmZyb21UbyhcbiAgICAgICAgc2VjdGlvblRleHQsXG4gICAgICAgIHsgeTogLTYsIG9wYWNpdHk6IDAgfSxcbiAgICAgICAgeyB5OiAwLCBvcGFjaXR5OiAxIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGFycm93VEwuZnJvbVRvKFxuICAgICAgICBkb3duQXJyb3dMaW5lLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAxMDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluKz0wLjAyNVwiXG4gICAgICApO1xuICAgICAgYXJyb3dUTC5mcm9tVG8oXG4gICAgICAgIGRvd25BcnJvd1BvaW50LFxuICAgICAgICB7IGRyYXdTVkc6IFwiNTAlIDUwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJbis9MC4xNzVcIlxuICAgICAgKTtcblxuICAgICAgLy8gQnVpbGQgTWFzdGVyIFRMVExcbiAgICAgIHRsLnRvKFxuICAgICAgICBcIi5oZWFkZXItbG9nb1wiLFxuICAgICAgICB7IGR1cmF0aW9uOiAwLjksIHdpZHRoOiAxOTAsIGVhc2U6IFwic2luZS5vdXRcIiB9LFxuICAgICAgICBcInNjcm9sbEluQWxsKz0wLjFcIlxuICAgICAgKTtcbiAgICAgIHRsLmFkZChsaW5lVEwsIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5hZGQoY29udGVudFRMLCBcInNjcm9sbEluQWxsKz0wLjc1XCIpO1xuICAgICAgdGwuYWRkKGFycm93VEwsIFwic2Nyb2xsSW5BbGwrPTAuN1wiKTtcblxuICAgICAgcmV0dXJuIHRsO1xuICAgIH0sXG5cbiAgICAvLyBzZWN0aW9uQW5pbTM6ICgpID0+IHtcbiAgICAvLyAgIGxldCB0aGlzU2VjID0gJChcIiNzZWN0aW9uM1wiKTtcbiAgICAvLyAgIGxldCB0aGlzQmFjayA9ICQoXCIjYmFja2dyb3VuZDNcIik7XG4gICAgLy8gICBsZXQgY2VudGVyNEwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTRMXCIpO1xuICAgIC8vICAgbGV0IGNlbnRlcjRSID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci00UlwiKTtcbiAgICAvLyAgIGxldCBjZW50ZXIzTCA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItM0xcIik7XG4gICAgLy8gICBsZXQgY2VudGVyM1IgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTNSXCIpO1xuICAgIC8vICAgbGV0IGNlbnRlcjJMID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci0yTFwiKTtcbiAgICAvLyAgIGxldCBjZW50ZXIyUiA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItMlJcIik7XG4gICAgLy8gICBsZXQgYm90dG9tU21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjYm90dG9tLXNtYWxsXCIpO1xuICAgIC8vICAgLy8gQXJyb3cgUGllY2VzXG4gICAgLy8gICBsZXQgZG93bkFycm93ID0gJCh0aGlzU2VjKS5maW5kKFwiI2Rvd24tYXJyb3dcIik7XG4gICAgLy8gICBsZXQgZG93bkFycm93TGluZSA9ICQodGhpc1NlYykuZmluZChcIiNkb3duLWFycm93LWxpbmVcIik7XG4gICAgLy8gICBsZXQgZG93bkFycm93UG9pbnQgPSAkKHRoaXNTZWMpLmZpbmQoXCIjZG93bi1hcnJvdy1wb2ludFwiKTtcbiAgICAvLyAgIGxldCBzZWN0aW9uVGV4dCA9ICQodGhpc1NlYykuZmluZChcIi5kb3duLWFycm93LXRleHRcIik7XG4gICAgLy8gICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAvLyAgICAgZGVsYXk6IDAuMyxcbiAgICAvLyAgICAgcGF1c2VkOiB0cnVlLFxuICAgIC8vICAgICBkZWZhdWx0czoge1xuICAgIC8vICAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgLy8gICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIC8vIFJlbGVhc2UgVGhlIFNjcm9sbCBMb2NrXG4gICAgLy8gICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgICBnc2FwLnNldChkb2N1bWVudC5ib2R5LCB7IG92ZXJmbG93OiBcImF1dG9cIiB9KTtcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgb25SZXZlcnNlQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgICAvLyBTZXQgdGhlIEJhY2tncm91bmQgQmFjayBCZWhpbmRcbiAgICAvLyAgICAgICBnc2FwLnNldCh0aGlzQmFjaywgeyB6SW5kZXg6IDk5IH0pO1xuICAgIC8vICAgICB9LFxuICAgIC8vICAgfSk7XG5cbiAgICAvLyAgIGxldCBsaW5lVEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAvLyAgICAgZGVmYXVsdHM6IHtcbiAgICAvLyAgICAgICBkdXJhdGlvbjogMC44LFxuICAgIC8vICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgfSk7XG5cbiAgICAvLyAgIGxldCBjb250ZW50VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAvLyAgICAgZGVmYXVsdHM6IHtcbiAgICAvLyAgICAgICBkdXJhdGlvbjogMC42LFxuICAgIC8vICAgICAgIGVhc2U6IFwiYmFjay5vdXQoLjIpXCIsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICB9KTtcblxuICAgIC8vICAgbGV0IGFycm93VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAvLyAgICAgZGVmYXVsdHM6IHtcbiAgICAvLyAgICAgICBkdXJhdGlvbjogMC4xNSxcbiAgICAvLyAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICAgIC8vIEJvdW5jZSBUaGUgRG93biBBcnJvd1xuICAgIC8vICAgICAgIGdzYXBcbiAgICAvLyAgICAgICAgIC50aW1lbGluZSh7IHJlcGVhdDogLTEsIHlveW86IHRydWUgfSlcbiAgICAvLyAgICAgICAgIC50byhkb3duQXJyb3csIHsgeTogLTQsIGR1cmF0aW9uOiAxLCBlYXNlOiBcIm5vbmVcIiB9KTtcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgb25SZXZlcnNlQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgICAvLyBTdG9wIEJvdW5jaW4gVGhlIERvd24gQXJyb3cgYW5kIFJlc2V0IGl0J3MgWSBwb3NpdGlvblxuICAgIC8vICAgICAgIGdzYXAua2lsbFR3ZWVuc09mKGRvd25BcnJvdyk7XG4gICAgLy8gICAgICAgZ3NhcC5zZXQoZG93bkFycm93LCB7IHk6IDAgfSk7XG4gICAgLy8gICAgIH0sXG4gICAgLy8gICB9KTtcblxuICAgIC8vICAgLy8gU2V0IGJhY2tncm91bmQgei1pbmRleCBieSBzZWN0aW9uIG51bWJlciAvIFNlY3Rpb24gMiBoYXMgbm8gYmFjayAvIFNlY3Rpb24gMyBpcyB6LWluZGV4IDExMCB0byBzdGF5IGFib3ZlIGFsbFxuICAgIC8vICAgdGwuc2V0KHRoaXNCYWNrLCB7IG9wYWNpdHk6IDEsIHpJbmRleDogMTEwIH0pO1xuICAgIC8vICAgLy8gU2V0IHNlY3Rpb24gei1pbmRleCBieSBzZWN0aW9uIG51bWJlclxuICAgIC8vICAgdGwuZnJvbVRvKHRoaXNTZWMsIHsgekluZGV4OiAxMyB9LCB7IHpJbmRleDogMTAwMyB9KTtcblxuICAgIC8vICAgLy8gQW5pbWF0ZSBMaW5lc1xuICAgIC8vICAgbGluZVRMLmZyb21UbyhcbiAgICAvLyAgICAgY2VudGVyNEwsXG4gICAgLy8gICAgIHsgZHJhd1NWRzogXCIwJSAwJVwiIH0sXG4gICAgLy8gICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAvLyAgICAgXCJzY3JvbGxJblwiXG4gICAgLy8gICApO1xuICAgIC8vICAgbGluZVRMLmZyb21UbyhcbiAgICAvLyAgICAgY2VudGVyNFIsXG4gICAgLy8gICAgIHsgZHJhd1NWRzogXCIxMDAlIDEwMCVcIiB9LFxuICAgIC8vICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgLy8gICAgIFwic2Nyb2xsSW5cIlxuICAgIC8vICAgKTtcbiAgICAvLyAgIGxpbmVUTC5mcm9tVG8oXG4gICAgLy8gICAgIGNlbnRlcjNMLFxuICAgIC8vICAgICB7IGRyYXdTVkc6IFwiMCUgMCVcIiB9LFxuICAgIC8vICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgLy8gICAgIFwic2Nyb2xsSW5cIlxuICAgIC8vICAgKTtcbiAgICAvLyAgIGxpbmVUTC5mcm9tVG8oXG4gICAgLy8gICAgIGNlbnRlcjNSLFxuICAgIC8vICAgICB7IGRyYXdTVkc6IFwiMTAwJSAxMDAlXCIgfSxcbiAgICAvLyAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgIC8vICAgICBcInNjcm9sbEluXCJcbiAgICAvLyAgICk7XG4gICAgLy8gICBsaW5lVEwuZnJvbVRvKFxuICAgIC8vICAgICBjZW50ZXIyTCxcbiAgICAvLyAgICAgeyBkcmF3U1ZHOiBcIjAlIDAlXCIgfSxcbiAgICAvLyAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgIC8vICAgICBcInNjcm9sbEluXCJcbiAgICAvLyAgICk7XG4gICAgLy8gICBsaW5lVEwuZnJvbVRvKFxuICAgIC8vICAgICBjZW50ZXIyUixcbiAgICAvLyAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMTAwJVwiIH0sXG4gICAgLy8gICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAvLyAgICAgXCJzY3JvbGxJblwiXG4gICAgLy8gICApO1xuXG4gICAgLy8gICAvLyBBbmltYXRlIENvbnRlbnRcbiAgICAvLyAgIGNvbnRlbnRUTC5mcm9tVG8oXG4gICAgLy8gICAgIGJvdHRvbVNtYWxsLFxuICAgIC8vICAgICB7IGRyYXdTVkc6IFwiNTAlIDUwJVwiIH0sXG4gICAgLy8gICAgIHsgZHJhd1NWRzogXCIwJSAxMDAlXCIgfSxcbiAgICAvLyAgICAgXCJzY3JvbGxJblwiXG4gICAgLy8gICApO1xuICAgIC8vICAgY29udGVudFRMLmZyb21UbyhcbiAgICAvLyAgICAgXCIudmlkZW9BcmVhXCIsXG4gICAgLy8gICAgIHsgaGVpZ2h0OiAwIH0sXG4gICAgLy8gICAgIHsgaGVpZ2h0OiBcImF1dG9cIiB9LFxuICAgIC8vICAgICBcInNjcm9sbEluKz0wLjJcIlxuICAgIC8vICAgKTtcblxuICAgIC8vICAgLy8gQW5pbWF0ZSBBcnJvd1xuICAgIC8vICAgYXJyb3dUTC5mcm9tVG8oXG4gICAgLy8gICAgIHNlY3Rpb25UZXh0LFxuICAgIC8vICAgICB7IHk6IC02LCBvcGFjaXR5OiAwIH0sXG4gICAgLy8gICAgIHsgeTogMCwgb3BhY2l0eTogMSB9LFxuICAgIC8vICAgICBcInNjcm9sbEluXCJcbiAgICAvLyAgICk7XG4gICAgLy8gICBhcnJvd1RMLmZyb21UbyhcbiAgICAvLyAgICAgZG93bkFycm93TGluZSxcbiAgICAvLyAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMTAwJVwiIH0sXG4gICAgLy8gICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAvLyAgICAgXCJzY3JvbGxJbis9MC4wMjVcIlxuICAgIC8vICAgKTtcbiAgICAvLyAgIGFycm93VEwuZnJvbVRvKFxuICAgIC8vICAgICBkb3duQXJyb3dQb2ludCxcbiAgICAvLyAgICAgeyBkcmF3U1ZHOiBcIjUwJSA1MCVcIiB9LFxuICAgIC8vICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgLy8gICAgIFwic2Nyb2xsSW4rPTAuMTc1XCJcbiAgICAvLyAgICk7XG5cbiAgICAvLyAgIC8vIEJ1aWxkIE1hc3RlciBUTCBUTFxuICAgIC8vICAgdGwuYWRkKGxpbmVUTCwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAvLyAgIHRsLmZyb21Ubyh0aGlzQmFjaywgeyB5OiBcIi0xMDAlXCIgfSwgeyB5OiAwIH0sIFwic2Nyb2xsSW5BbGwrPTAuNTVcIik7XG4gICAgLy8gICB0bC5hZGQoY29udGVudFRMLCBcInNjcm9sbEluQWxsKz0wLjc1XCIpO1xuICAgIC8vICAgdGwuYWRkKGFycm93VEwsIFwic2Nyb2xsSW5BbGwrPTFcIik7XG5cbiAgICAvLyAgIHJldHVybiB0bDtcbiAgICAvLyB9LFxuXG4gICAgc2VjdGlvbkFuaW0zOiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9ICQoXCIjc2VjdGlvbjRcIik7XG4gICAgICBsZXQgdGhpc0JhY2sgPSAkKFwiI2JhY2tncm91bmQ0XCIpO1xuICAgICAgbGV0IGNoYXJzSDIgPSAkKHRoaXNTZWMpLmZpbmQoXCIuaDJDaGFyc1wiKTtcbiAgICAgIGxldCBsaW5lc1AgPSAkKHRoaXNTZWMpLmZpbmQoXCIucExpbmVzXCIpO1xuICAgICAgbGV0IHNvbG9DZW50ZXIyID0gJCh0aGlzU2VjKS5maW5kKFwiI3NvbG8tY2VudGVyLTJcIik7XG4gICAgICBsZXQgc29sb0NlbnRlcjEgPSAkKHRoaXNTZWMpLmZpbmQoXCIjc29sby1jZW50ZXItMVwiKTtcbiAgICAgIGxldCBib3R0b21TbWFsbCA9ICQodGhpc1NlYykuZmluZChcIiNib3R0b20tc21hbGxcIik7XG4gICAgICAvLyBBcnJvdyBQaWVjZXNcbiAgICAgIGxldCBkb3duQXJyb3cgPSAkKHRoaXNTZWMpLmZpbmQoXCIjZG93bi1hcnJvd1wiKTtcbiAgICAgIGxldCBkb3duQXJyb3dMaW5lID0gJCh0aGlzU2VjKS5maW5kKFwiI2Rvd24tYXJyb3ctbGluZVwiKTtcbiAgICAgIGxldCBkb3duQXJyb3dQb2ludCA9ICQodGhpc1NlYykuZmluZChcIiNkb3duLWFycm93LXBvaW50XCIpO1xuICAgICAgbGV0IHNlY3Rpb25UZXh0ID0gJCh0aGlzU2VjKS5maW5kKFwiLmRvd24tYXJyb3ctdGV4dFwiKTtcbiAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBwYXVzZWQ6IHRydWUsXG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgLy8gUmVsZWFzZSBUaGUgU2Nyb2xsIExvY2tcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGdzYXAuc2V0KGRvY3VtZW50LmJvZHksIHsgb3ZlcmZsb3c6IFwiYXV0b1wiIH0pO1xuICAgICAgICAgIC8vIGdzYXAuc2V0KCcjYmFja2dyb3VuZDEnLCB7b3BhY2l0eToxfSk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgbGV0IGxpbmVUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOiAwLjYsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgbGV0IGNvbnRlbnRUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICAgICAgZWFzZTogXCJiYWNrLm91dCgxLjUpXCIsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgbGV0IGFycm93VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMC4xNSxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIEJvdW5jZSBUaGUgRG93biBBcnJvd1xuICAgICAgICAgIGdzYXBcbiAgICAgICAgICAgIC50aW1lbGluZSh7IHJlcGVhdDogLTEsIHlveW86IHRydWUgfSlcbiAgICAgICAgICAgIC50byhkb3duQXJyb3csIHsgeTogLTQsIGR1cmF0aW9uOiAxLCBlYXNlOiBcIm5vbmVcIiB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25SZXZlcnNlQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBTdG9wIEJvdW5jaW4gVGhlIERvd24gQXJyb3cgYW5kIFJlc2V0IGl0J3MgWSBwb3NpdGlvblxuICAgICAgICAgIGdzYXAua2lsbFR3ZWVuc09mKGRvd25BcnJvdyk7XG4gICAgICAgICAgZ3NhcC5zZXQoZG93bkFycm93LCB7IHk6IDAgfSk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgLy8gU2V0IGJhY2tncm91bmQgei1pbmRleCBieSBzZWN0aW9uIG51bWJlciAvIFNlY3Rpb24gMiBoYXMgbm8gYmFjayAvIFNlY3Rpb24gMyBpcyB6LWluZGV4IDExMCB0byBzdGF5IGFib3ZlIGFsbFxuICAgICAgdGwuc2V0KHRoaXNCYWNrLCB7IHpJbmRleDogMTA0IH0pO1xuICAgICAgLy8gU2V0IHNlY3Rpb24gei1pbmRleCBieSBzZWN0aW9uIG51bWJlclxuICAgICAgdGwuZnJvbVRvKHRoaXNTZWMsIHsgekluZGV4OiAxMyB9LCB7IHpJbmRleDogMTAwNCB9KTtcblxuICAgICAgLy8gQW5pbWF0ZSBMaW5lc1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgc29sb0NlbnRlcjEsXG4gICAgICAgIHsgZHJhd1NWRzogXCI1MCUgNTAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBzb2xvQ2VudGVyMixcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjUwJSA1MCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGJvdHRvbVNtYWxsLFxuICAgICAgICB7IGRyYXdTVkc6IFwiNTAlIDUwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIwJSAxMDAlXCIsIGR1cmF0aW9uOiAwLjUgfSxcbiAgICAgICAgXCJzY3JvbGxJbis9MC4zXCJcbiAgICAgICk7XG5cbiAgICAgIC8vIEFuaW1hdGUgQ29udGVudFxuICAgICAgY29udGVudFRMLmZyb21UbyhcbiAgICAgICAgY2hhcnNIMixcbiAgICAgICAgeyB4OiAtMjAsIG9wYWNpdHk6IDAgfSxcbiAgICAgICAgeyB4OiAwLCBvcGFjaXR5OiAxLCBzdGFnZ2VyOiB7IGFtb3VudDogMC4zLCBmcm9tOiBcInJhbmRvbVwiIH0gfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgY29udGVudFRMLmZyb21UbyhcbiAgICAgICAgbGluZXNQLFxuICAgICAgICB7IG9wYWNpdHk6IDAsIHg6IC00MCB9LFxuICAgICAgICB7IG9wYWNpdHk6IDEsIHg6IDAsIHN0YWdnZXI6IHsgYW1vdW50OiAwLjMgfSB9LFxuICAgICAgICBcInNjcm9sbEluKz0wLjFcIlxuICAgICAgKTtcblxuICAgICAgLy8gQW5pbWF0ZSBBcnJvd1xuICAgICAgYXJyb3dUTC5mcm9tVG8oXG4gICAgICAgIHNlY3Rpb25UZXh0LFxuICAgICAgICB7IHk6IC02LCBvcGFjaXR5OiAwIH0sXG4gICAgICAgIHsgeTogMCwgb3BhY2l0eTogMSB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBhcnJvd1RMLmZyb21UbyhcbiAgICAgICAgZG93bkFycm93TGluZSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMTAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJbis9MC4wMjVcIlxuICAgICAgKTtcbiAgICAgIGFycm93VEwuZnJvbVRvKFxuICAgICAgICBkb3duQXJyb3dQb2ludCxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjUwJSA1MCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW4rPTAuMTc1XCJcbiAgICAgICk7XG5cbiAgICAgIC8vIEJ1aWxkIE1hc3RlciBUTFRMXG4gICAgICB0bC5mcm9tVG8odGhpc0JhY2ssIHsgb3BhY2l0eTogMCB9LCB7IG9wYWNpdHk6IDEgfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmFkZChsaW5lVEwsIFwic2Nyb2xsSW5BbGwrPTAuOVwiKTtcbiAgICAgIHRsLmFkZChjb250ZW50VEwsIFwic2Nyb2xsSW5BbGwrPTEuNVwiKTtcbiAgICAgIHRsLmFkZChhcnJvd1RMLCBcInNjcm9sbEluQWxsKz0xLjVcIik7XG5cbiAgICAgIHJldHVybiB0bDtcbiAgICB9LFxuXG4gICAgc2VjdGlvbkFuaW00OiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9ICQoXCIjc2VjdGlvbjVcIik7XG4gICAgICBsZXQgdGhpc0JhY2sgPSAkKFwiI2JhY2tncm91bmQ1XCIpO1xuICAgICAgbGV0IHRoaXNPdmVybGF5ID0gJChcIiNvdmVybGF5NVwiKTtcbiAgICAgIGxldCBjaGFyc0gyID0gJCh0aGlzU2VjKS5maW5kKFwiLmgyQ2hhcnNcIik7XG4gICAgICBsZXQgbGluZXNQID0gJCh0aGlzU2VjKS5maW5kKFwiLnBMaW5lc1wiKTtcbiAgICAgIGxldCBjZW50ZXI0TCA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItNExcIik7XG4gICAgICBsZXQgY2VudGVyNFIgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTRSXCIpO1xuICAgICAgbGV0IGNlbnRlcjNMID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci0zTFwiKTtcbiAgICAgIGxldCBjZW50ZXIzUiA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItM1JcIik7XG4gICAgICBsZXQgY2VudGVyMkwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTJMXCIpO1xuICAgICAgbGV0IGNlbnRlcjJSID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci0yUlwiKTtcbiAgICAgIC8vIEFycm93IFBpZWNlc1xuICAgICAgbGV0IGRvd25BcnJvdyA9ICQodGhpc1NlYykuZmluZChcIiNkb3duLWFycm93XCIpO1xuICAgICAgbGV0IGRvd25BcnJvd0xpbmUgPSAkKHRoaXNTZWMpLmZpbmQoXCIjZG93bi1hcnJvdy1saW5lXCIpO1xuICAgICAgbGV0IGRvd25BcnJvd1BvaW50ID0gJCh0aGlzU2VjKS5maW5kKFwiI2Rvd24tYXJyb3ctcG9pbnRcIik7XG4gICAgICBsZXQgc2VjdGlvblRleHQgPSAkKHRoaXNTZWMpLmZpbmQoXCIuZG93bi1hcnJvdy10ZXh0XCIpO1xuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHBhdXNlZDogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMC41LFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9LFxuICAgICAgICAvLyBSZWxlYXNlIFRoZSBTY3JvbGwgTG9ja1xuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZ3NhcC5zZXQoZG9jdW1lbnQuYm9keSwgeyBvdmVyZmxvdzogXCJhdXRvXCIgfSk7XG4gICAgICAgICAgLy8gZ3NhcC5zZXQoJyNiYWNrZ3JvdW5kMScsIHtvcGFjaXR5OjB9KTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgbGluZVRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246IDAuNixcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgY29udGVudFRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgICAgICBlYXNlOiBcImJhY2sub3V0KDEuNSlcIixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgYXJyb3dUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOiAwLjE1LFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9LFxuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gQm91bmNlIFRoZSBEb3duIEFycm93XG4gICAgICAgICAgZ3NhcFxuICAgICAgICAgICAgLnRpbWVsaW5lKHsgcmVwZWF0OiAtMSwgeW95bzogdHJ1ZSB9KVxuICAgICAgICAgICAgLnRvKGRvd25BcnJvdywgeyB5OiAtNCwgZHVyYXRpb246IDEsIGVhc2U6IFwibm9uZVwiIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvblJldmVyc2VDb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFN0b3AgQm91bmNpbiBUaGUgRG93biBBcnJvdyBhbmQgUmVzZXQgaXQncyBZIHBvc2l0aW9uXG4gICAgICAgICAgZ3NhcC5raWxsVHdlZW5zT2YoZG93bkFycm93KTtcbiAgICAgICAgICBnc2FwLnNldChkb3duQXJyb3csIHsgeTogMCB9KTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBTZXQgYmFja2dyb3VuZCB6LWluZGV4IGJ5IHNlY3Rpb24gbnVtYmVyIC8gU2VjdGlvbiAyIGhhcyBubyBiYWNrIC8gU2VjdGlvbiAzIGlzIHotaW5kZXggMTEwIHRvIHN0YXkgYWJvdmUgYWxsXG4gICAgICB0bC5zZXQodGhpc0JhY2ssIHsgekluZGV4OiAxMDUgfSk7XG4gICAgICB0bC5zZXQodGhpc092ZXJsYXksIHsgekluZGV4OiAxMDUgfSk7XG4gICAgICAvLyBTZXQgc2VjdGlvbiB6LWluZGV4IGJ5IHNlY3Rpb24gbnVtYmVyXG4gICAgICB0bC5mcm9tVG8odGhpc1NlYywgeyB6SW5kZXg6IDEzIH0sIHsgekluZGV4OiAxMDA1IH0pO1xuXG4gICAgICAvLyBBbmltYXRlIExpbmVzXG4gICAgICAvLyBsaW5lVEwuZnJvbVRvKGNlbnRlcjRMLCB7ZHJhd1NWRzpcIjEwMCUgMTAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgLy8gbGluZVRMLmZyb21UbyhjZW50ZXI0Uiwge2RyYXdTVkc6XCIwJSAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgLy8gbGluZVRMLmZyb21UbyhjZW50ZXIzTCwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIC8vIGxpbmVUTC5mcm9tVG8oY2VudGVyM1IsIHtkcmF3U1ZHOlwiMCUgMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIC8vIGxpbmVUTC5mcm9tVG8oY2VudGVyMkwsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICAvLyBsaW5lVEwuZnJvbVRvKGNlbnRlcjJSLCB7ZHJhd1NWRzpcIjAlIDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG5cbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGNlbnRlcjRMLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMCUgMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGNlbnRlcjRSLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAxMDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBjZW50ZXIzTCxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjAlIDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBjZW50ZXIzUixcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMTAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyMkwsXG4gICAgICAgIHsgZHJhd1NWRzogXCIwJSAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyMlIsXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDEwMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIFwiI2hvbmV5Q2xpcEVuZFwiLFxuICAgICAgICB7IG1vcnBoU1ZHOiB7IHNoYXBlOiBcIiNob25leUNsaXBTdGFydFwiIH0gfSxcbiAgICAgICAge1xuICAgICAgICAgIG1vcnBoU1ZHOiB7IHNoYXBlOiBcIiNob25leUNsaXBFbmRcIiB9LFxuICAgICAgICAgIGR1cmF0aW9uOiAwLjQsXG4gICAgICAgICAgZWFzZTogXCJzaW5lLm91dFwiLFxuICAgICAgICB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG5cbiAgICAgIC8vIEFuaW1hdGUgQ29udGVudFxuICAgICAgY29udGVudFRMLmZyb21UbyhcbiAgICAgICAgY2hhcnNIMixcbiAgICAgICAgeyB4OiAtMjAsIG9wYWNpdHk6IDAgfSxcbiAgICAgICAgeyB4OiAwLCBvcGFjaXR5OiAxLCBzdGFnZ2VyOiB7IGFtb3VudDogMC4zLCBmcm9tOiBcInJhbmRvbVwiIH0gfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgY29udGVudFRMLmZyb21UbyhcbiAgICAgICAgbGluZXNQLFxuICAgICAgICB7IG9wYWNpdHk6IDAsIHg6IC00MCB9LFxuICAgICAgICB7IG9wYWNpdHk6IDEsIHg6IDAsIHN0YWdnZXI6IHsgYW1vdW50OiAwLjMgfSB9LFxuICAgICAgICBcInNjcm9sbEluKz0wLjFcIlxuICAgICAgKTtcblxuICAgICAgLy8gQW5pbWF0ZSBBcnJvd1xuICAgICAgYXJyb3dUTC5mcm9tVG8oXG4gICAgICAgIFwiI2JvdHRvbS1zbWFsbC0yXCIsXG4gICAgICAgIHsgZHJhd1NWRzogXCI1MCUgNTAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjAlIDEwMCVcIiwgZHVyYXRpb246IDAuMywgZWFzZTogXCJzaW5lLm91dFwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGFycm93VEwuZnJvbVRvKFxuICAgICAgICBzZWN0aW9uVGV4dCxcbiAgICAgICAgeyB5OiAtNiwgb3BhY2l0eTogMCB9LFxuICAgICAgICB7IHk6IDAsIG9wYWNpdHk6IDEgfSxcbiAgICAgICAgXCJzY3JvbGxJbis9MC4xXCJcbiAgICAgICk7XG4gICAgICBhcnJvd1RMLmZyb21UbyhcbiAgICAgICAgZG93bkFycm93TGluZSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMTAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJbis9MC4xMjVcIlxuICAgICAgKTtcbiAgICAgIGFycm93VEwuZnJvbVRvKFxuICAgICAgICBkb3duQXJyb3dQb2ludCxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjUwJSA1MCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW4rPTAuMjc1XCJcbiAgICAgICk7XG5cbiAgICAgIC8vIEJ1aWxkIE1hc3RlciBUTFRMXG4gICAgICB0bC5mcm9tVG8oXG4gICAgICAgIHRoaXNPdmVybGF5LFxuICAgICAgICB7IG9wYWNpdHk6IDAgfSxcbiAgICAgICAgeyBvcGFjaXR5OiAwLjkgfSxcbiAgICAgICAgXCJzY3JvbGxJbkFsbCs9MC44XCJcbiAgICAgICk7XG4gICAgICB0bC5mcm9tVG8oXG4gICAgICAgIHRoaXNCYWNrLFxuICAgICAgICB7IG9wYWNpdHk6IDAgfSxcbiAgICAgICAgeyBvcGFjaXR5OiAxLCBkdXJhdGlvbjogMSB9LFxuICAgICAgICBcInNjcm9sbEluQWxsXCJcbiAgICAgICk7XG4gICAgICB0bC5hZGQobGluZVRMLCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuYWRkKGNvbnRlbnRUTCwgXCJzY3JvbGxJbkFsbCs9MVwiKTtcbiAgICAgIHRsLmFkZChhcnJvd1RMLCBcInNjcm9sbEluQWxsKz0xXCIpO1xuXG4gICAgICByZXR1cm4gdGw7XG4gICAgfSxcblxuICAgIHNlY3Rpb25BbmltNTogKCkgPT4ge1xuICAgICAgbGV0IHRoaXNTZWMgPSAkKFwiI3NlY3Rpb242XCIpO1xuICAgICAgbGV0IHRoaXNCYWNrID0gJChcIiNiYWNrZ3JvdW5kNlwiKTtcbiAgICAgIGxldCBjaGFyc0gyID0gJCh0aGlzU2VjKS5maW5kKFwiLmgyQ2hhcnNcIik7XG4gICAgICBsZXQgbGluZXNQID0gJCh0aGlzU2VjKS5maW5kKFwiLnBMaW5lc1wiKTtcbiAgICAgIGxldCB0aGlzT3ZlcmxheSA9ICQoXCIjb3ZlcmxheTZcIik7XG4gICAgICBsZXQgY2VudGVyNEwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTRMXCIpO1xuICAgICAgbGV0IGNlbnRlcjRSID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci00UlwiKTtcbiAgICAgIGxldCBjZW50ZXIzTCA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItM0xcIik7XG4gICAgICBsZXQgY2VudGVyM1IgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTNSXCIpO1xuICAgICAgbGV0IGNlbnRlcjJMID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci0yTFwiKTtcbiAgICAgIGxldCBjZW50ZXIyUiA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItMlJcIik7XG4gICAgICBsZXQgYm90dG9tU21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjYm90dG9tLXNtYWxsXCIpO1xuICAgICAgLy8gQXJyb3cgUGllY2VzXG4gICAgICBsZXQgZG93bkFycm93ID0gJCh0aGlzU2VjKS5maW5kKFwiI2Rvd24tYXJyb3dcIik7XG4gICAgICBsZXQgZG93bkFycm93TGluZSA9ICQodGhpc1NlYykuZmluZChcIiNkb3duLWFycm93LWxpbmVcIik7XG4gICAgICBsZXQgZG93bkFycm93UG9pbnQgPSAkKHRoaXNTZWMpLmZpbmQoXCIjZG93bi1hcnJvdy1wb2ludFwiKTtcbiAgICAgIGxldCBzZWN0aW9uVGV4dCA9ICQodGhpc1NlYykuZmluZChcIi5kb3duLWFycm93LXRleHRcIik7XG4gICAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgcGF1c2VkOiB0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIFJlbGVhc2UgVGhlIFNjcm9sbCBMb2NrXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBnc2FwLnNldChkb2N1bWVudC5ib2R5LCB7IG92ZXJmbG93OiBcImF1dG9cIiB9KTtcbiAgICAgICAgICAvLyBnc2FwLnNldCgnI2JhY2tncm91bmQxJywge29wYWNpdHk6MH0pO1xuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGxldCBsaW5lVEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMC44LFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGxldCBjb250ZW50VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgICAgIGVhc2U6IFwiYmFjay5vdXQoMS41KVwiLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGxldCBhcnJvd1RMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246IDAuMTUsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBCb3VuY2UgVGhlIERvd24gQXJyb3dcbiAgICAgICAgICBnc2FwXG4gICAgICAgICAgICAudGltZWxpbmUoeyByZXBlYXQ6IC0xLCB5b3lvOiB0cnVlIH0pXG4gICAgICAgICAgICAudG8oZG93bkFycm93LCB7IHk6IC00LCBkdXJhdGlvbjogMSwgZWFzZTogXCJub25lXCIgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmV2ZXJzZUNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gU3RvcCBCb3VuY2luIFRoZSBEb3duIEFycm93IGFuZCBSZXNldCBpdCdzIFkgcG9zaXRpb25cbiAgICAgICAgICBnc2FwLmtpbGxUd2VlbnNPZihkb3duQXJyb3cpO1xuICAgICAgICAgIGdzYXAuc2V0KGRvd25BcnJvdywgeyB5OiAwIH0pO1xuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIFNldCBiYWNrZ3JvdW5kIHotaW5kZXggYnkgc2VjdGlvbiBudW1iZXIgLyBTZWN0aW9uIDIgaGFzIG5vIGJhY2sgLyBTZWN0aW9uIDMgaXMgei1pbmRleCAxMTAgdG8gc3RheSBhYm92ZSBhbGxcbiAgICAgIHRsLnNldCh0aGlzQmFjaywgeyB6SW5kZXg6IDEwNiB9KTtcbiAgICAgIHRsLnNldCh0aGlzT3ZlcmxheSwgeyB6SW5kZXg6IDEwNiB9KTtcbiAgICAgIC8vIFNldCBzZWN0aW9uIHotaW5kZXggYnkgc2VjdGlvbiBudW1iZXJcbiAgICAgIHRsLmZyb21Ubyh0aGlzU2VjLCB7IHpJbmRleDogMTMgfSwgeyB6SW5kZXg6IDEwMDYgfSk7XG5cbiAgICAgIC8vIEFuaW1hdGUgTGluZXNcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGNlbnRlcjRMLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAxMDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBjZW50ZXI0UixcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjAlIDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBjZW50ZXIzTCxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMTAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyM1IsXG4gICAgICAgIHsgZHJhd1NWRzogXCIwJSAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyMkwsXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDEwMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGNlbnRlcjJSLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMCUgMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcblxuICAgICAgLy8gQW5pbWF0ZSBDb250ZW50XG4gICAgICBjb250ZW50VEwuZnJvbVRvKFxuICAgICAgICBjaGFyc0gyLFxuICAgICAgICB7IHg6IC0yMCwgb3BhY2l0eTogMCB9LFxuICAgICAgICB7IHg6IDAsIG9wYWNpdHk6IDEsIHN0YWdnZXI6IHsgYW1vdW50OiAwLjMsIGZyb206IFwicmFuZG9tXCIgfSB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBjb250ZW50VEwuZnJvbVRvKFxuICAgICAgICBsaW5lc1AsXG4gICAgICAgIHsgb3BhY2l0eTogMCwgeDogLTQwIH0sXG4gICAgICAgIHsgb3BhY2l0eTogMSwgeDogMCwgc3RhZ2dlcjogeyBhbW91bnQ6IDAuMyB9IH0sXG4gICAgICAgIFwic2Nyb2xsSW4rPTAuMVwiXG4gICAgICApO1xuXG4gICAgICAvLyBBbmltYXRlIEFycm93XG4gICAgICBhcnJvd1RMLmZyb21UbyhcbiAgICAgICAgYm90dG9tU21hbGwsXG4gICAgICAgIHsgZHJhd1NWRzogXCI1MCUgNTAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjAlIDEwMCVcIiwgZHVyYXRpb246IDAuNCB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBhcnJvd1RMLmZyb21UbyhcbiAgICAgICAgc2VjdGlvblRleHQsXG4gICAgICAgIHsgeTogLTYsIG9wYWNpdHk6IDAgfSxcbiAgICAgICAgeyB5OiAwLCBvcGFjaXR5OiAxIH0sXG4gICAgICAgIFwic2Nyb2xsSW4rPTAuMTVcIlxuICAgICAgKTtcbiAgICAgIGFycm93VEwuZnJvbVRvKFxuICAgICAgICBkb3duQXJyb3dMaW5lLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAxMDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluKz0wLjE3NVwiXG4gICAgICApO1xuICAgICAgYXJyb3dUTC5mcm9tVG8oXG4gICAgICAgIGRvd25BcnJvd1BvaW50LFxuICAgICAgICB7IGRyYXdTVkc6IFwiNTAlIDUwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJbis9MC4zMjVcIlxuICAgICAgKTtcblxuICAgICAgLy8gQnVpbGQgTWFzdGVyIFRMVExcbiAgICAgIHRsLmZyb21Ubyh0aGlzT3ZlcmxheSwgeyBvcGFjaXR5OiAwIH0sIHsgb3BhY2l0eTogMC4xIH0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8odGhpc0JhY2ssIHsgb3BhY2l0eTogMCB9LCB7IG9wYWNpdHk6IDEgfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmFkZChsaW5lVEwsIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5hZGQoY29udGVudFRMLCBcInNjcm9sbEluQWxsKz0wLjZcIik7XG4gICAgICB0bC5hZGQoYXJyb3dUTCwgXCJzY3JvbGxJbkFsbCs9MC44XCIpO1xuXG4gICAgICByZXR1cm4gdGw7XG4gICAgfSxcblxuICAgIHNlY3Rpb25BbmltNjogKCkgPT4ge1xuICAgICAgbGV0IHRoaXNTZWMgPSAkKFwiI3NlY3Rpb243XCIpO1xuICAgICAgbGV0IHRoaXNCYWNrID0gJChcIiNiYWNrZ3JvdW5kN1wiKTtcbiAgICAgIGxldCBjaGFyc0gyID0gJCh0aGlzU2VjKS5maW5kKFwiLmgyQ2hhcnNcIik7XG4gICAgICBsZXQgbGluZXNQID0gJCh0aGlzU2VjKS5maW5kKFwiLnBMaW5lc1wiKTtcbiAgICAgIGxldCB0aGlzT3ZlcmxheSA9ICQoXCIjb3ZlcmxheTdcIik7XG4gICAgICBsZXQgY2VudGVyNEwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTRMXCIpO1xuICAgICAgbGV0IGNlbnRlcjRSID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci00UlwiKTtcbiAgICAgIGxldCBjZW50ZXIzTCA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItM0xcIik7XG4gICAgICBsZXQgY2VudGVyM1IgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTNSXCIpO1xuICAgICAgbGV0IGNlbnRlcjJMID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci0yTFwiKTtcbiAgICAgIGxldCBjZW50ZXIyUiA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItMlJcIik7XG4gICAgICBsZXQgdG9wU21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjdG9wLXNtYWxsXCIpO1xuICAgICAgbGV0IGJvdHRvbVNtYWxsID0gJCh0aGlzU2VjKS5maW5kKFwiI2JvdHRvbS1zbWFsbFwiKTtcbiAgICAgIGxldCBjZW50ZXJTbWFsbCA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItc21hbGxcIik7XG4gICAgICBsZXQgdG9wTGVmdFNtYWxsID0gJCh0aGlzU2VjKS5maW5kKFwiI3RvcC1sZWZ0LXNtYWxsXCIpO1xuICAgICAgbGV0IHRvcFJpZ2h0dFNtYWxsID0gJCh0aGlzU2VjKS5maW5kKFwiI3RvcC1yaWdodC1zbWFsbFwiKTtcbiAgICAgIGxldCBib3R0b21MZWZ0U21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjYm90dG9tLWxlZnQtc21hbGxcIik7XG4gICAgICBsZXQgYm90dG9tUmlnaHR0U21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjYm90dG9tLXJpZ2h0LXNtYWxsXCIpO1xuICAgICAgbGV0IGltZ0NvbnRhaW5lciA9ICQodGhpc1NlYykuZmluZChcIi5pbWFnZUNvbnRhaW5lclwiKTtcbiAgICAgIGxldCBzdWJJbWcgPSAkKGltZ0NvbnRhaW5lcikuZmluZChcImltZ1wiKTtcbiAgICAgIC8vIEFycm93IFBpZWNlc1xuICAgICAgbGV0IGRvd25BcnJvdyA9ICQodGhpc1NlYykuZmluZChcIiNkb3duLWFycm93XCIpO1xuICAgICAgbGV0IGRvd25BcnJvd0xpbmUgPSAkKHRoaXNTZWMpLmZpbmQoXCIjZG93bi1hcnJvdy1saW5lXCIpO1xuICAgICAgbGV0IGRvd25BcnJvd1BvaW50ID0gJCh0aGlzU2VjKS5maW5kKFwiI2Rvd24tYXJyb3ctcG9pbnRcIik7XG4gICAgICBsZXQgc2VjdGlvblRleHQgPSAkKHRoaXNTZWMpLmZpbmQoXCIuZG93bi1hcnJvdy10ZXh0XCIpO1xuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHBhdXNlZDogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMC42LFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9LFxuICAgICAgICAvLyBSZWxlYXNlIFRoZSBTY3JvbGwgTG9ja1xuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZ3NhcC5zZXQoZG9jdW1lbnQuYm9keSwgeyBvdmVyZmxvdzogXCJhdXRvXCIgfSk7XG4gICAgICAgICAgLy8gZ3NhcC5zZXQoJyNiYWNrZ3JvdW5kMScsIHtvcGFjaXR5OjF9KTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgbGluZVRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246IDAuOCxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgY29udGVudFRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgICAgICBlYXNlOiBcImJhY2sub3V0KDEuNSlcIixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBsZXQgYXJyb3dUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgLy8gICBkZWZhdWx0czoge1xuICAgICAgLy8gICAgIGR1cmF0aW9uOjAuMTUsXG4gICAgICAvLyAgICAgZWFzZTpcIm5vbmVcIlxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgLy8gICAgIC8vIEJvdW5jZSBUaGUgRG93biBBcnJvd1xuICAgICAgLy8gICAgIGdzYXAudGltZWxpbmUoe3JlcGVhdDotMSwgeW95bzp0cnVlfSkudG8oZG93bkFycm93LCB7eTotNCwgZHVyYXRpb246MSwgZWFzZTpcIm5vbmVcIn0pO1xuICAgICAgLy8gICB9LFxuICAgICAgLy8gICBvblJldmVyc2VDb21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgIC8vICAgICAvLyBTdG9wIEJvdW5jaW4gVGhlIERvd24gQXJyb3cgYW5kIFJlc2V0IGl0J3MgWSBwb3NpdGlvblxuICAgICAgLy8gICAgIGdzYXAua2lsbFR3ZWVuc09mKGRvd25BcnJvdyk7XG4gICAgICAvLyAgICAgZ3NhcC5zZXQoZG93bkFycm93LCB7eTowfSk7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0pO1xuXG4gICAgICAvLyBTZXQgYmFja2dyb3VuZCB6LWluZGV4IGJ5IHNlY3Rpb24gbnVtYmVyIC8gU2VjdGlvbiAyIGhhcyBubyBiYWNrIC8gU2VjdGlvbiAzIGlzIHotaW5kZXggMTEwIHRvIHN0YXkgYWJvdmUgYWxsXG4gICAgICB0bC5zZXQodGhpc0JhY2ssIHsgekluZGV4OiAxMDcgfSk7XG4gICAgICB0bC5zZXQodGhpc092ZXJsYXksIHsgekluZGV4OiAxMDcgfSk7XG4gICAgICAvLyBTZXQgc2VjdGlvbiB6LWluZGV4IGJ5IHNlY3Rpb24gbnVtYmVyXG4gICAgICB0bC5mcm9tVG8odGhpc1NlYywgeyB6SW5kZXg6IDEzIH0sIHsgekluZGV4OiAxMDA3IH0pO1xuXG4gICAgICAvLyBBbmltYXRlIExpbmVzXG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBjZW50ZXI0TCxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjAlIDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBjZW50ZXI0UixcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMTAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyM0wsXG4gICAgICAgIHsgZHJhd1NWRzogXCIwJSAwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgY2VudGVyM1IsXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDEwMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGNlbnRlcjJMLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMCUgMCVcIiB9LFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAwJVwiIH0sXG4gICAgICAgIFwic2Nyb2xsSW5cIlxuICAgICAgKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oXG4gICAgICAgIGNlbnRlcjJSLFxuICAgICAgICB7IGRyYXdTVkc6IFwiMTAwJSAxMDAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBbdG9wU21hbGwsIGJvdHRvbVNtYWxsLCBjZW50ZXJTbWFsbF0sXG4gICAgICAgIHsgZHJhd1NWRzogXCI1MCUgNTAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG4gICAgICBsaW5lVEwuZnJvbVRvKFxuICAgICAgICBbdG9wTGVmdFNtYWxsLCBib3R0b21MZWZ0U21hbGxdLFxuICAgICAgICB7IGRyYXdTVkc6IFwiNTAlIDUwJVwiIH0sXG4gICAgICAgIHsgZHJhd1NWRzogXCIxMDAlIDAlXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgbGluZVRMLmZyb21UbyhcbiAgICAgICAgW3RvcFJpZ2h0dFNtYWxsLCBib3R0b21SaWdodHRTbWFsbF0sXG4gICAgICAgIHsgZHJhd1NWRzogXCI1MCUgNTAlXCIgfSxcbiAgICAgICAgeyBkcmF3U1ZHOiBcIjEwMCUgMCVcIiB9LFxuICAgICAgICBcInNjcm9sbEluXCJcbiAgICAgICk7XG5cbiAgICAgIC8vIEFuaW1hdGUgQ29udGVudFxuICAgICAgY29udGVudFRMLmZyb21UbyhcbiAgICAgICAgY2hhcnNIMixcbiAgICAgICAgeyB4OiAtMjAsIG9wYWNpdHk6IDAgfSxcbiAgICAgICAgeyB4OiAwLCBvcGFjaXR5OiAxLCBzdGFnZ2VyOiB7IGFtb3VudDogMC4zLCBmcm9tOiBcInJhbmRvbVwiIH0gfSxcbiAgICAgICAgXCJzY3JvbGxJblwiXG4gICAgICApO1xuICAgICAgY29udGVudFRMLmZyb21UbyhcbiAgICAgICAgbGluZXNQLFxuICAgICAgICB7IG9wYWNpdHk6IDAsIHg6IC00MCB9LFxuICAgICAgICB7IG9wYWNpdHk6IDEsIHg6IDAsIHN0YWdnZXI6IHsgYW1vdW50OiAwLjMgfSB9LFxuICAgICAgICBcInNjcm9sbEluKz0wLjFcIlxuICAgICAgKTtcbiAgICAgIGNvbnRlbnRUTC5mcm9tVG8oXG4gICAgICAgIFwiLnRleHRJbWFnZVwiLFxuICAgICAgICB7IG9wYWNpdHk6IDAsIHg6IC00MCB9LFxuICAgICAgICB7IG9wYWNpdHk6IDEsIHg6IDAgfSxcbiAgICAgICAgXCJzY3JvbGxJbis9MC4xXCJcbiAgICAgICk7XG4gICAgICBjb250ZW50VEwuZnJvbVRvKFxuICAgICAgICBcIiNwYXJ0bmVyQ2xpcEVuZFwiLFxuICAgICAgICB7IG1vcnBoU1ZHOiB7IHNoYXBlOiBcIiNwYXJ0bmVyQ2xpcFN0YXJ0XCIgfSB9LFxuICAgICAgICB7XG4gICAgICAgICAgbW9ycGhTVkc6IHsgc2hhcGU6IFwiI3BhcnRuZXJDbGlwRW5kXCIgfSxcbiAgICAgICAgICBkdXJhdGlvbjogMC40LFxuICAgICAgICAgIGVhc2U6IFwic2luZS5vdXRcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCJzY3JvbGxJbis9MC4yXCJcbiAgICAgICk7XG5cbiAgICAgIC8vIC8vIEFuaW1hdGUgQXJyb3dcbiAgICAgIC8vIGFycm93VEwuZnJvbVRvKHNlY3Rpb25UZXh0LCB7eTotNiwgb3BhY2l0eTowfSwge3k6MCwgb3BhY2l0eToxfSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIC8vIGFycm93VEwuZnJvbVRvKGRvd25BcnJvd0xpbmUsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW4rPTAuMDI1XCIpO1xuICAgICAgLy8gYXJyb3dUTC5mcm9tVG8oZG93bkFycm93UG9pbnQsIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluKz0wLjE3NVwiKTtcblxuICAgICAgLy8gQnVpbGQgTWFzdGVyIFRMVExcbiAgICAgIHRsLmZyb21Ubyh0aGlzT3ZlcmxheSwgeyBvcGFjaXR5OiAwIH0sIHsgb3BhY2l0eTogMC45IH0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8odGhpc0JhY2ssIHsgb3BhY2l0eTogMCB9LCB7IG9wYWNpdHk6IDEgfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmFkZChsaW5lVEwsIFwic2Nyb2xsSW5BbGwrPTAuMlwiKTtcbiAgICAgIHRsLmFkZChjb250ZW50VEwsIFwic2Nyb2xsSW5BbGwrPTAuNlwiKTtcbiAgICAgIHRsLmZyb21UbyhcbiAgICAgICAgXCIuZm9vdGVyQXJlYVwiLFxuICAgICAgICB7IHk6IFwiMTAwJVwiIH0sXG4gICAgICAgIHsgeTogMCwgZHVyYXRpb246IDAuNywgZWFzZTogXCJiYWNrLm91dCgwLjUpXCIgfSxcbiAgICAgICAgXCJzY3JvbGxJbkFsbCs9MC43XCJcbiAgICAgICk7XG4gICAgICAvLyB0bC5hZGQoYXJyb3dUTCwgXCJzY3JvbGxJbkFsbCs9MC44XCIpO1xuXG4gICAgICByZXR1cm4gdGw7XG4gICAgfSxcblxuICAgIC8vIHNlY3Rpb25BbmltODogKCkgPT4ge1xuICAgIC8vICAgbGV0IHRoaXNTZWMgPSAkKCcjc2VjdGlvbjgnKTtcbiAgICAvLyAgIGxldCB0aGlzQmFjayA9ICQoJyNiYWNrZ3JvdW5kOCcpO1xuICAgIC8vICAgbGV0IGNoYXJzSDIgPSAkKHRoaXNTZWMpLmZpbmQoJy5oMkNoYXJzJyk7XG4gICAgLy8gICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAvLyAgICAgcGF1c2VkOnRydWUsXG4gICAgLy8gICAgIGRlZmF1bHRzOiB7XG4gICAgLy8gICAgICAgZHVyYXRpb246MC4zLFxuICAgIC8vICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICAvLyBSZWxlYXNlIFRoZSBTY3JvbGwgTG9ja1xuICAgIC8vICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgIC8vICAgICAgIGdzYXAuc2V0KGRvY3VtZW50LmJvZHksIHtvdmVyZmxvdzogXCJhdXRvXCJ9KVxuICAgIC8vICAgICB9XG4gICAgLy8gICB9KTtcblxuICAgIC8vICAgbGV0IGNvbnRlbnRUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgIC8vICAgICBkZWZhdWx0czoge1xuICAgIC8vICAgICAgIGR1cmF0aW9uOjAuMyxcbiAgICAvLyAgICAgICBlYXNlOlwiYmFjay5vdXQoMS41KVwiXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0pO1xuXG4gICAgLy8gICAvLyBTZXQgYmFja2dyb3VuZCB6LWluZGV4IGJ5IHNlY3Rpb24gbnVtYmVyIC8gU2VjdGlvbiAyIGhhcyBubyBiYWNrIC8gU2VjdGlvbiAzIGlzIHotaW5kZXggMTEwIHRvIHN0YXkgYWJvdmUgYWxsXG4gICAgLy8gICB0bC5zZXQodGhpc0JhY2ssIHt6SW5kZXg6MTA4fSk7XG4gICAgLy8gICAvLyBTZXQgc2VjdGlvbiB6LWluZGV4IGJ5IHNlY3Rpb24gbnVtYmVyXG4gICAgLy8gICB0bC5mcm9tVG8odGhpc1NlYywge3pJbmRleDoxM30se3pJbmRleDoxMDA4fSk7XG5cbiAgICAvLyAgIC8vIEFuaW1hdGUgQ29udGVudFxuICAgIC8vICAgY29udGVudFRMLmZyb21UbyhjaGFyc0gyLFxuICAgIC8vICAgICB7eDotMjAsIG9wYWNpdHk6MH0sXG4gICAgLy8gICAgIHt4OjAsIG9wYWNpdHk6IDEsIHN0YWdnZXI6e2Ftb3VudDowLjMsIGZyb206XCJyYW5kb21cIn19LFxuICAgIC8vICAgXCJzY3JvbGxJblwiKTtcbiAgICAvLyAgIGNvbnRlbnRUTC5mcm9tVG8oJy5zaW5nbGVJbWFnZURvd25sb2FkJyx7XG4gICAgLy8gICAgIG9wYWNpdHk6MCwgeTotMjB9LFxuICAgIC8vICAgICB7b3BhY2l0eToxLHk6MCwgc3RhZ2dlcjp7YW1vdW50OjAuM319LFxuICAgIC8vICAgXCJzY3JvbGxJbis9MC4yXCIpO1xuXG4gICAgLy8gICAvLyBCdWlsZCBNYXN0ZXIgVExUTFxuICAgIC8vICAgdGwuZnJvbVRvKHRoaXNCYWNrLCB7dG9wOictMTAwJSd9LHt0b3A6MH0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgLy8gICB0bC5mcm9tVG8oJy5mb290ZXJBcmVhJywge3k6JzEwMCUnfSwge3k6MCwgZHVyYXRpb246MC41LCBlYXNlOidiYWNrLm91dCgwLjUpJ30sIFwic2Nyb2xsSW5BbGwrPTAuNVwiKTtcbiAgICAvLyAgIHRsLmFkZChjb250ZW50VEwsIFwic2Nyb2xsSW5BbGwrPTAuM1wiKTtcblxuICAgIC8vICAgcmV0dXJuIHRsO1xuICAgIC8vIH0sXG4gIH07XG5cbiAgLy8gUGxheSBTZWN0aW9uIDEgYXV0b21hdGljYWxseVxuICBzZWN0aW9uQW5pbVtcInNlY3Rpb25BbmltMVwiXSgpLnBsYXkoKTtcblxuICAvLyBGaXJlIEFuIEFuaW1hdGlvbiBGcm9tIEFib3ZlIGZvciBFYWNoIFNlY3Rpb25cbiAgbGV0IHNlY3Rpb25UcmlnID0gKG15Q291bnQpID0+IHtcbiAgICAvLyBBZGQgQW4gRXh0cmEgU2Nyb2xsIGZvciBCdXp6IE9uIEJlZXMgaW4gU2VjdGlvbiA0LCA1LCA2ICsxIHRvdGFsIGVhY2ggdGltZVxuICAgIGlmIChteUNvdW50ID09PSAxKSB7XG4gICAgICB2YXIgc3RhcnRIZWlnaHQgPSAwO1xuICAgIH0gZWxzZSBpZiAobXlDb3VudCA9PT0gMikge1xuICAgICAgdmFyIHN0YXJ0SGVpZ2h0ID0gbXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCAtIDEpIC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgfSBlbHNlIGlmIChteUNvdW50ID09PSAzKSB7XG4gICAgICB2YXIgc3RhcnRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIChteUNvdW50IC0gMSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDQpIHtcbiAgICAgIHZhciBzdGFydEhlaWdodCA9IG15U2Nyb2xsSGVpZ2h0ICogbXlDb3VudCAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgICAgLy8gdmFyIHN0YXJ0SGVpZ2h0ID0gbXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCAtIDEpIC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgfSBlbHNlIGlmIChteUNvdW50ID09PSA1KSB7XG4gICAgICB2YXIgc3RhcnRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICAgIC8vIHZhciBzdGFydEhlaWdodCA9IG15U2Nyb2xsSGVpZ2h0ICogbXlDb3VudCAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIH0gZWxzZSBpZiAobXlDb3VudCA9PT0gNikge1xuICAgICAgdmFyIHN0YXJ0SGVpZ2h0ID0gbXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCArIDIpIC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgICAvLyB2YXIgc3RhcnRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDcpIHtcbiAgICAgIHZhciBzdGFydEhlaWdodCA9IG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAyKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIH0gZWxzZSBpZiAobXlDb3VudCA9PT0gOCkge1xuICAgICAgdmFyIHN0YXJ0SGVpZ2h0ID0gbXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCArIDIpIC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgfVxuXG4gICAgaWYgKG15Q291bnQgPT09IDEpIHtcbiAgICAgIHZhciBlbmRIZWlnaHQgPSBteVNjcm9sbEhlaWdodDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDIpIHtcbiAgICAgIHZhciBlbmRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIG15Q291bnQgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDMpIHtcbiAgICAgIHZhciBlbmRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICAgIC8vIHZhciBlbmRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIG15Q291bnQgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDQpIHtcbiAgICAgIHZhciBlbmRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMikgLSBteVNjcm9sbE9mZnNldDtcbiAgICAgIC8vIHZhciBlbmRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDUpIHtcbiAgICAgIHZhciBlbmRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMykgLSBteVNjcm9sbE9mZnNldDtcbiAgICAgIC8vIHZhciBlbmRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMikgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDYpIHtcbiAgICAgIHZhciBlbmRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMykgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDcpIHtcbiAgICAgIHZhciBlbmRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMykgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDgpIHtcbiAgICAgIHZhciBlbmRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMykgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZygnc3RhcnQgaGVpZ2h0JytteUNvdW50KycgaXMgJytzdGFydEhlaWdodCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2VuZCBoZWlnaHQnK215Q291bnQrJyBpcyAnK2VuZEhlaWdodCk7XG5cbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICAvLyB0cmlnZ2VyOidib2R5JyxcbiAgICAgIHN0YXJ0OiBzdGFydEhlaWdodCxcbiAgICAgIGVuZDogZW5kSGVpZ2h0LFxuICAgICAgc2NydWI6IDEsXG4gICAgICBvbkVudGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChteUNvdW50ID4gMSkge1xuICAgICAgICAgIGdzYXAuc2V0KGRvY3VtZW50LmJvZHksIHsgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfSk7XG4gICAgICAgICAgc2VjdGlvbkFuaW1bXCJzZWN0aW9uQW5pbVwiICsgbXlDb3VudF0oKS5wbGF5KCk7XG4gICAgICAgICAgLy8gYWxlcnQobXlDb3VudCsnIHNlY3Rpb24gZW50ZXJlZCcpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25MZWF2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobXlDb3VudCA8IDYpIHtcbiAgICAgICAgICBnc2FwLnNldChkb2N1bWVudC5ib2R5LCB7IG92ZXJmbG93OiBcImhpZGRlblwiIH0pO1xuICAgICAgICAgIHNlY3Rpb25BbmltW1wic2VjdGlvbkFuaW1cIiArIG15Q291bnRdKCkucmV2ZXJzZSgwKTtcbiAgICAgICAgICAvLyBhbGVydChteUNvdW50Kycgc2VjdGlvbiBsZWZ0Jyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkVudGVyQmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobXlDb3VudCA8IDYpIHtcbiAgICAgICAgICBnc2FwLnNldChkb2N1bWVudC5ib2R5LCB7IG92ZXJmbG93OiBcImhpZGRlblwiIH0pO1xuICAgICAgICAgIHNlY3Rpb25BbmltW1wic2VjdGlvbkFuaW1cIiArIG15Q291bnRdKCkucGxheSgpO1xuICAgICAgICAgIC8vIGFsZXJ0KG15Q291bnQrJyBzZWN0aW9uIGJhY2sgYWdhaW4nKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTGVhdmVCYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChteUNvdW50ID4gMSkge1xuICAgICAgICAgIGdzYXAuc2V0KGRvY3VtZW50LmJvZHksIHsgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfSk7XG4gICAgICAgICAgc2VjdGlvbkFuaW1bXCJzZWN0aW9uQW5pbVwiICsgbXlDb3VudF0oKS5yZXZlcnNlKDApO1xuICAgICAgICAgIC8vIGFsZXJ0KG15Q291bnQrJyBzZWN0aW9uIGxlZnQgYWdhaW4nKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICAvLyBDYWxsIFRoZSBUcmlnZ2VyIE9uIEV2ZXJ5IFNlY3Rpb25cbiAgLy8gQW5pbWF0aW9uIHRyaWdnZXJzIGFyZSBjYWxjdWxhdGVkIGluIHRoZSBmdW5jdGlvblxuICBsZXQgaSA9IDE7XG4gICQoXCJzZWN0aW9uXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIHNlY3Rpb25UcmlnKGkpO1xuICAgIGkrKztcbiAgfSk7XG5cbiAgLy8gU2luZ2xlIEJ1enogb24gQmVlcyBTZWN0aW9uc1xuICAvLyBCdXp6IEFuaW1hdGlvbiA1XG4gIGxldCBidXp6SW40ID0gKCkgPT4ge1xuICAgIGxldCBidXp6QmxvY2sgPSAkKFwiI3NlY3Rpb240XCIpLmZpbmQoXCIuYnV6ek9uQmVlc0Jsb2NrXCIpO1xuICAgIGxldCBidXp6V2lkdGggPSBidXp6QmxvY2sub3V0ZXJXaWR0aCgpO1xuICAgIGxldCB0bCA9IG5ldyBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIHBhdXNlZDogdHJ1ZSxcbiAgICAgIGRlZmF1bHRzOiB7IGR1cmF0aW9uOiAwLjUsIGVhc2U6IFwiYmFjay5vdXQoMC4yNSk7XCIgfSxcbiAgICB9KTtcbiAgICB0bC5mcm9tVG8oYnV6ekJsb2NrLCB7IHg6IGJ1enpXaWR0aCB9LCB7IHg6IDAgfSk7XG4gICAgcmV0dXJuIHRsO1xuICB9O1xuXG4gIGxldCBidXp6VHJpZzQgPSAobXlDb3VudCkgPT4ge1xuICAgIHZhciBzdGFydEhlaWdodCA9IG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgLSAwLjUpIC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgdmFyIGVuZEhlaWdodCA9IG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAwLjUpIC0gbXlTY3JvbGxPZmZzZXQ7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnYnV6ejQgc3RhcnQgaXMgJytzdGFydEhlaWdodCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2J1eno0IGVuZCBpcyAnK2VuZEhlaWdodCk7XG5cbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICBzdGFydDogc3RhcnRIZWlnaHQsXG4gICAgICBlbmQ6IGVuZEhlaWdodCxcbiAgICAgIHNjcnViOiAxLFxuICAgICAgb25FbnRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBidXp6SW40KCkucGxheSgpO1xuICAgICAgfSxcbiAgICAgIG9uTGVhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYnV6ekluNCgpLnJldmVyc2UoMCk7XG4gICAgICB9LFxuICAgICAgb25FbnRlckJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYnV6ekluNCgpLnBsYXkoKTtcbiAgICAgIH0sXG4gICAgICBvbkxlYXZlQmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICBidXp6SW40KCkucmV2ZXJzZSgwKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgYnV6elRyaWc0KDMpO1xuXG4gIC8vIEJ1enogQW5pbWF0aW9uIDVcbiAgbGV0IGJ1enpJbjUgPSAoKSA9PiB7XG4gICAgbGV0IGJ1enpCbG9jayA9ICQoXCIjc2VjdGlvbjVcIikuZmluZChcIi5idXp6T25CZWVzQmxvY2tcIik7XG4gICAgbGV0IGJ1enpXaWR0aCA9IGJ1enpCbG9jay5vdXRlcldpZHRoKCk7XG4gICAgbGV0IHRsID0gbmV3IGdzYXAudGltZWxpbmUoe1xuICAgICAgcGF1c2VkOiB0cnVlLFxuICAgICAgZGVmYXVsdHM6IHsgZHVyYXRpb246IDAuNSwgZWFzZTogXCJiYWNrLm91dCgwLjI1KTtcIiB9LFxuICAgIH0pO1xuICAgIHRsLmZyb21UbyhidXp6QmxvY2ssIHsgeDogYnV6eldpZHRoIH0sIHsgeDogMCB9KTtcbiAgICByZXR1cm4gdGw7XG4gIH07XG5cbiAgbGV0IGJ1enpUcmlnNSA9IChteUNvdW50KSA9PiB7XG4gICAgdmFyIHN0YXJ0SGVpZ2h0ID0gbXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCArIDAuNSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICB2YXIgZW5kSGVpZ2h0ID0gbXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCArIDEuNSkgLSBteVNjcm9sbE9mZnNldDtcblxuICAgIC8vIGNvbnNvbGUubG9nKCdidXp6NSBzdGFydCBpcyAnK3N0YXJ0SGVpZ2h0KTtcbiAgICAvLyBjb25zb2xlLmxvZygnYnV6ejUgZW5kIGlzICcrZW5kSGVpZ2h0KTtcblxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIHN0YXJ0OiBzdGFydEhlaWdodCxcbiAgICAgIGVuZDogZW5kSGVpZ2h0LFxuICAgICAgc2NydWI6IDEsXG4gICAgICBvbkVudGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJ1enpJbjUoKS5wbGF5KCk7XG4gICAgICB9LFxuICAgICAgb25MZWF2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBidXp6SW41KCkucmV2ZXJzZSgwKTtcbiAgICAgIH0sXG4gICAgICBvbkVudGVyQmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICBidXp6SW41KCkucGxheSgpO1xuICAgICAgfSxcbiAgICAgIG9uTGVhdmVCYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJ1enpJbjUoKS5yZXZlcnNlKDApO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICBidXp6VHJpZzUoNCk7XG5cbiAgLy8gQnV6eiBBbmltYXRpb24gNlxuICBsZXQgYnV6ekluNiA9ICgpID0+IHtcbiAgICBsZXQgYnV6ekJsb2NrID0gJChcIiNzZWN0aW9uNlwiKS5maW5kKFwiLmJ1enpPbkJlZXNCbG9ja1wiKTtcbiAgICBsZXQgYnV6eldpZHRoID0gYnV6ekJsb2NrLm91dGVyV2lkdGgoKTtcbiAgICBsZXQgdGwgPSBuZXcgZ3NhcC50aW1lbGluZSh7XG4gICAgICBwYXVzZWQ6IHRydWUsXG4gICAgICBkZWZhdWx0czogeyBkdXJhdGlvbjogMC41LCBlYXNlOiBcImJhY2sub3V0KDAuMjUpO1wiIH0sXG4gICAgfSk7XG4gICAgdGwuZnJvbVRvKGJ1enpCbG9jaywgeyB4OiBidXp6V2lkdGggfSwgeyB4OiAwIH0pO1xuICAgIHJldHVybiB0bDtcbiAgfTtcblxuICBsZXQgYnV6elRyaWc2ID0gKG15Q291bnQpID0+IHtcbiAgICB2YXIgc3RhcnRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMS41KSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIHZhciBlbmRIZWlnaHQgPSBteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMi41KSAtIG15U2Nyb2xsT2Zmc2V0O1xuXG4gICAgLy8gY29uc29sZS5sb2coJ2J1eno2IHN0YXJ0IGlzICcrc3RhcnRIZWlnaHQpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdidXp6NiBlbmQgaXMgJytlbmRIZWlnaHQpO1xuXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgc3RhcnQ6IHN0YXJ0SGVpZ2h0LFxuICAgICAgZW5kOiBlbmRIZWlnaHQsXG4gICAgICBzY3J1YjogMSxcbiAgICAgIG9uRW50ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYnV6ekluNigpLnBsYXkoKTtcbiAgICAgIH0sXG4gICAgICBvbkxlYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJ1enpJbjYoKS5yZXZlcnNlKDApO1xuICAgICAgfSxcbiAgICAgIG9uRW50ZXJCYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJ1enpJbjYoKS5wbGF5KCk7XG4gICAgICB9LFxuICAgICAgb25MZWF2ZUJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYnV6ekluNigpLnJldmVyc2UoMCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIGJ1enpUcmlnNig1KTtcbn07XG4iLCJpbXBvcnQge1xuICBtZW51VG9nZ2xlLFxuICBzbW9vdGhTY3JvbGxpbmcsXG59IGZyb20gJy4vaW5kZXguanMnXG5cbmV4cG9ydCBsZXQgY2xpY2tFdmVudHMgPSAoKSA9PiB7XG4gIFxuICAvLyBNb2JpbGUgTmF2IENsaWNrIEV2ZW50XG4gIGxldCBtZW51VG9nZ2xlVEwgPSBtZW51VG9nZ2xlKCk7XG4gIG1lbnVUb2dnbGVUTC5yZXZlcnNlZCh0cnVlKTtcbiAgJCgnLm1lbnVUb2dnbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHsgIFxuICAgIGlmIChtZW51VG9nZ2xlVEwucmV2ZXJzZWQoKSkge1xuICAgICAgbWVudVRvZ2dsZVRMLnBsYXkoKTtcbiAgICAgIGdzYXAuc2V0KCQoJy53cmFwcGVyJyksIHtoZWlnaHQ6JzEwMCUnLCBvdmVyZmxvdzonaGlkZGVuJ30pO1xuICAgIH0gZWxzZSB7XG4gICAgICBnc2FwLnNldCgkKCcud3JhcHBlcicpLCB7aGVpZ2h0OidhdXRvJywgb3ZlcmZsb3c6J3Zpc2libGUnfSk7XG4gICAgICBtZW51VG9nZ2xlVEwucmV2ZXJzZSgpO1xuICAgIH1cblx0fSk7XG5cbiAgJCgnYVtocmVmXj1cIiNcIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdoYXNoIGl0IG91dCcpO1xuICAgIFxuICAgIC8vIElGIElUXCJTIE1PQklMRSAvIElQQUQgT1IgU01BTExFUlxuICAgIGlmIChzY3JlZW4ud2lkdGggPD0gMTAyNSl7XG4gICAgICBnc2FwLnNldCgkKCcud3JhcHBlcicpLCB7aGVpZ2h0OidhdXRvJywgb3ZlcmZsb3c6J3Zpc2libGUnfSk7XG4gICAgICBtZW51VG9nZ2xlVEwucmV2ZXJzZSgpO1xuICAgICAgc21vb3RoU2Nyb2xsaW5nKCQodGhpcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzbW9vdGhTY3JvbGxpbmcoJCh0aGlzKSk7XG4gICAgfVxuICB9KTtcbn0iLCJleHBvcnQgbGV0IGdzYXBSZWdpc3RlcnMgPSAoKSA9PiB7XG4gIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVG9QbHVnaW4sIFNjcm9sbFRyaWdnZXIsIFNwbGl0VGV4dCwgRHJhd1NWR1BsdWdpbiwgTW9ycGhTVkdQbHVnaW4pO1xufSIsImV4cG9ydCB7XG4gIHByZUxvYWRlcixcbiAgdmlkTGlua3MsXG4gIG1vYmlsZVZpZExpbmtzLFxuICBzbW9vdGhTY3JvbGxpbmcsXG4gIG1vYmlsZU5hdlNldHVwXG59IGZyb20gJy4vcGFnZVNldHVwLmpzJ1xuXG5leHBvcnQge1xuICBtZW51VG9nZ2xlXG59IGZyb20gJy4vbWVudVRvZ2dsZS5qcydcblxuZXhwb3J0IHtcbiAgZ3NhcFJlZ2lzdGVyc1xufSBmcm9tICcuL2dzYXBSZWdpc3RlcnMuanMnXG5cbmV4cG9ydCB7XG4gIGNsaWNrRXZlbnRzLFxufSBmcm9tICcuL2NsaWNrRXZlbnRzLmpzJ1xuXG5leHBvcnQge1xuICBhbmltYXRlU2VjdGlvblxufSBmcm9tICcuL2FuaW1hdGVTZWN0aW9uLmpzJ1xuXG5leHBvcnQge1xuICBzZWN0aW9uc1NldHVwXG59IGZyb20gJy4vc2VjdGlvbnNTZXR1cCdcblxuXG5leHBvcnQge1xuICBtb2JpbGVTZWN0aW9uc1NldHVwXG59IGZyb20gJy4vbW9iaWxlU2VjdGlvbnNTZXR1cCdcblxuZXhwb3J0IHtcbiAgbW9iaWxlQW5pbWF0ZVNlY3Rpb25cbn0gZnJvbSAnLi9tb2JpbGVBbmltYXRlU2VjdGlvbidcblxuIiwiZXhwb3J0IGxldCBtZW51VG9nZ2xlID0gKCkgPT4ge1xuXHRsZXQgdGwgPSBuZXcgZ3NhcC50aW1lbGluZSh7XG5cdFx0cGF1c2VkOnRydWUsXG5cdFx0ZGVmYXVsdHM6IHtcblx0XHRcdGVhc2U6ICdjaXJjLm91dCgpJyxcblx0XHRcdGR1cmF0aW9uOjAuMyxcblx0XHR9XG5cdH0pO1xuXG5cdHRsLnRvKCcubWFpbi1uYXYnLCB7ZHVyYXRpb246MC4zLCBsZWZ0OicwJSd9LCAnbWVudU9wZW4nKTtcblx0dGwudG8oJ25hdiBhJywge29wYWNpdHk6MSwgeDonMCUnLCBzdGFnZ2VyOiB7YW1vdW50OjAuMX19LCAnbWVudU9wZW4rPTAuMScpO1xuXHR0bC50bygnLmhhbVRvcCcsIHtyb3RhdGlvbjotMzE1LHg6NyAseTozLCB3aWR0aDoxMCwgdHJhbnNmb3JtT3JpZ2luOic1MCUgNTAlJ30sICdtZW51T3BlbicpO1xuXHR0bC50bygnLmhhbU1pZCcsIHt4Oi00LCB3aWR0aDoxOH0sICdtZW51T3BlbicpO1xuXHR0bC50bygnLmhhbUJvdCcsIHtyb3RhdGlvbjozMTUsIHg6NywgeTotMywgd2lkdGg6MTAsIHRyYW5zZm9ybU9yaWdpbjonNTAlIDUwJSd9LCAnbWVudU9wZW4nKTtcblxuXHRyZXR1cm4gdGw7XG59IiwiZXhwb3J0IGxldCBtb2JpbGVBbmltYXRlU2VjdGlvbiA9ICgpID0+IHtcbiAgLy8gZ3NhcC5zZXQoJ2JvZHknLCB7dG91Y2hBY3Rpb246J25vbmUnfSk7XG4gIC8vIGRvY3VtZW50Lm9udG91Y2htb3ZlID0gKGUpID0+IGUucHJldmVudERlZmF1bHQoKTtcblxuICBsZXQgc2VjdGlvbkFuaW0gPSB7XG4gICAgc2VjdGlvbkFuaW0xOiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9IFwiI3NlY3Rpb24xXCI7XG4gICAgICBsZXQgdGhpc092ZXJsYXkgPSAkKFwiI292ZXJsYXkxXCIpO1xuICAgICAgbGV0IHNlY3Rpb25MaW5lcyA9ICQodGhpc1NlYykuZmluZChcIi5zaW5nbGUtYmFja2xpbmVcIik7XG4gICAgICBsZXQgc2VjQXJyb3cgPSAkKHRoaXNTZWMpLmZpbmQoXCIuZG93bi1hcnJvdy1zdmdcIik7XG5cbiAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBwYXVzZWQ6IHRydWUsXG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246IDAuNSxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGdzYXBcbiAgICAgICAgICAgIC50aW1lbGluZSh7IHJlcGVhdDogLTEsIHlveW86IHRydWUgfSlcbiAgICAgICAgICAgIC50byhzZWNBcnJvdywgeyB5OiAtMywgZHVyYXRpb246IDAuNSwgZWFzZTogXCJub25lXCIgfSk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgLy8gQnVpbGQgTWFzdGVyIFRMVExcbiAgICAgIHRsLmZyb21Ubyh0aGlzT3ZlcmxheSwgeyBvcGFjaXR5OiAwIH0sIHsgb3BhY2l0eTogMC42NSB9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKHNlY3Rpb25MaW5lcywgeyBvcGFjaXR5OiAwIH0sIHsgb3BhY2l0eTogMC4zIH0sIFwic2Nyb2xsSW5BbGxcIik7XG5cbiAgICAgIHJldHVybiB0bDtcbiAgICB9LFxuXG4gICAgc2VjdGlvbkFuaW0yOiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9ICQoXCIjc2VjdGlvbjJcIik7XG4gICAgICBsZXQgdGhpc0JhY2sgPSAkKFwiI2JhY2tncm91bmQxXCIpO1xuICAgICAgbGV0IHRoaXNPdmVybGF5ID0gJChcIiNvdmVybGF5MVwiKTtcbiAgICAgIGxldCBsaW5lcyA9ICQoXCIuc2luZ2xlLWJhY2tsaW5lXCIpO1xuICAgICAgbGV0IHNlY3Rpb25MaW5lcyA9IHRoaXNTZWMuZmluZChcIi5zaW5nbGUtYmFja2xpbmVcIik7XG4gICAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgLy8gZGVsYXk6MC42NSxcbiAgICAgICAgcGF1c2VkOiB0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAvLyAvLyBnc2FwLnNldCgnYm9keScsIHtvdmVyZmxvdzonYXV0byd9KTssXG4gICAgICAgICAgLy8gZ3NhcC5zZXQoJ2JvZHknLCB7dG91Y2hBY3Rpb246J2F1dG8nfSk7XG4gICAgICAgICAgLy8gfSwgMTAwMCk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgLy8gdGwuZnJvbVRvKHRoaXNPdmVybGF5LCB7b3BhY2l0eTowfSwge29wYWNpdHk6MC4xfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21UbyhzZWN0aW9uTGluZXMsIHsgb3BhY2l0eTogMCB9LCB7IG9wYWNpdHk6IDAuMiB9LCBcInNjcm9sbEluQWxsXCIpO1xuXG4gICAgICByZXR1cm4gdGw7XG4gICAgfSxcblxuICAgIHNlY3Rpb25BbmltMzogKCkgPT4ge1xuICAgICAgbGV0IHRoaXNTZWMgPSAkKFwiI3NlY3Rpb24zXCIpO1xuICAgICAgbGV0IHRoaXNCYWNrID0gJChcIiNiYWNrZ3JvdW5kM1wiKTtcbiAgICAgIGxldCBzZWN0aW9uTGluZXMgPSB0aGlzU2VjLmZpbmQoXCIuc2luZ2xlLWJhY2tsaW5lXCIpO1xuICAgICAgbGV0IGNlbnRlcjRMID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci00TFwiKTtcbiAgICAgIGxldCBjZW50ZXI0UiA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItNFJcIik7XG4gICAgICBsZXQgY2VudGVyM0wgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTNMXCIpO1xuICAgICAgbGV0IGNlbnRlcjNSID0gJCh0aGlzU2VjKS5maW5kKFwiI2NlbnRlci0zUlwiKTtcbiAgICAgIGxldCBjZW50ZXIyTCA9ICQodGhpc1NlYykuZmluZChcIiNjZW50ZXItMkxcIik7XG4gICAgICBsZXQgY2VudGVyMlIgPSAkKHRoaXNTZWMpLmZpbmQoXCIjY2VudGVyLTJSXCIpO1xuICAgICAgbGV0IGJvdHRvbVNtYWxsID0gJCh0aGlzU2VjKS5maW5kKFwiI2JvdHRvbS1zbWFsbFwiKTtcblxuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHBhdXNlZDogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMC41LFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9LFxuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gZ3NhcC5zZXQoJyNiYWNrZ3JvdW5kMScsIHtvcGFjaXR5OjB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBvblJldmVyc2VDb21wbGV0ZTpmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gICAgIC8vIGdzYXAuc2V0KCdib2R5Jywge3RvdWNoQWN0aW9uOidhdXRvJ30pO1xuICAgICAgICAvLyAgICAgLy8gZ3NhcC5zZXQoJ2JvZHknLCB7b3ZlcmZsb3c6J2F1dG8nfSk7LFxuICAgICAgICAvLyAgIC8vIH0sIDEwMDApO1xuICAgICAgICAvLyAgIGdzYXAuc2V0KCcjYmFja2dyb3VuZDEnLCB7b3BhY2l0eToxfSk7XG4gICAgICAgIC8vIH0sXG4gICAgICB9KTtcbiAgICAgIHRsLmZyb21UbyhcIi52aWRlb0FyZWFcIiwgeyBvcGFjaXR5OiAwIH0sIHsgb3BhY2l0eTogMSB9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKGNlbnRlcjRMLCB7IG9wYWNpdHk6IDAgfSwgeyBvcGFjaXR5OiAxIH0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8oY2VudGVyNFIsIHsgb3BhY2l0eTogMCB9LCB7IG9wYWNpdHk6IDEgfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21UbyhjZW50ZXIzTCwgeyBvcGFjaXR5OiAwIH0sIHsgb3BhY2l0eTogMSB9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKGNlbnRlcjNSLCB7IG9wYWNpdHk6IDAgfSwgeyBvcGFjaXR5OiAxIH0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8oY2VudGVyMkwsIHsgb3BhY2l0eTogMCB9LCB7IG9wYWNpdHk6IDEgfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21UbyhjZW50ZXIyUiwgeyBvcGFjaXR5OiAwIH0sIHsgb3BhY2l0eTogMSB9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKGJvdHRvbVNtYWxsLCB7IG9wYWNpdHk6IDAgfSwgeyBvcGFjaXR5OiAxIH0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8odGhpc0JhY2ssIHsgb3BhY2l0eTogMCB9LCB7IG9wYWNpdHk6IDEgfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21UbyhzZWN0aW9uTGluZXMsIHsgb3BhY2l0eTogMCB9LCB7IG9wYWNpdHk6IDEgfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21UbyhzZWN0aW9uTGluZXMsIHsgb3BhY2l0eTogMCB9LCB7IG9wYWNpdHk6IDEgfSwgXCJzY3JvbGxJbkFsbFwiKTtcblxuICAgICAgcmV0dXJuIHRsO1xuICAgIH0sXG5cbiAgICBzZWN0aW9uQW5pbTQ6ICgpID0+IHtcbiAgICAgIGxldCB0aGlzU2VjID0gJChcIiNzZWN0aW9uNFwiKTtcbiAgICAgIGxldCB0aGlzQmFjayA9ICQoXCIjYmFja2dyb3VuZDRcIik7XG4gICAgICAvLyBsZXQgc2VjdGlvbkxpbmVzID0gdGhpc1NlYy5maW5kKCcuc2luZ2xlLWJhY2tsaW5lJylcbiAgICAgIGxldCBzb2xvQ2VudGVyMiA9ICQodGhpc1NlYykuZmluZChcIiNzb2xvLWNlbnRlci0yXCIpO1xuICAgICAgbGV0IHNvbG9DZW50ZXIxID0gJCh0aGlzU2VjKS5maW5kKFwiI3NvbG8tY2VudGVyLTFcIik7XG4gICAgICBsZXQgYm90dG9tU21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoXCIjYm90dG9tLXNtYWxsXCIpO1xuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHBhdXNlZDogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMC41LFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9LFxuICAgICAgICBvblJldmVyc2VDb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIGdzYXAuc2V0KCcjYmFja2dyb3VuZDEnLCB7b3BhY2l0eToxfSk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIHRsLmZyb21Ubyhzb2xvQ2VudGVyMSwgeyBvcGFjaXR5OiAwIH0sIHsgb3BhY2l0eTogMC41IH0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8oc29sb0NlbnRlcjIsIHsgb3BhY2l0eTogMCB9LCB7IG9wYWNpdHk6IDAuNSB9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKGJvdHRvbVNtYWxsLCB7IG9wYWNpdHk6IDAgfSwgeyBvcGFjaXR5OiAwLjUgfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21Ubyh0aGlzQmFjaywgeyBvcGFjaXR5OiAwIH0sIHsgb3BhY2l0eTogMSB9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgLy8gdGwuZnJvbVRvKHNlY3Rpb25MaW5lcywge29wYWNpdHk6MH0se29wYWNpdHk6MC4zfSwgXCJzY3JvbGxJbkFsbFwiKTtcblxuICAgICAgcmV0dXJuIHRsO1xuICAgIH0sXG5cbiAgICBzZWN0aW9uQW5pbTU6ICgpID0+IHtcbiAgICAgIGxldCB0aGlzU2VjID0gJChcIiNzZWN0aW9uNVwiKTtcbiAgICAgIGxldCB0aGlzQmFjayA9ICQoXCIjYmFja2dyb3VuZDVcIik7XG4gICAgICBsZXQgdGhpc092ZXJsYXkgPSAkKFwiI292ZXJsYXk1XCIpO1xuICAgICAgbGV0IHNlY3Rpb25MaW5lcyA9IHRoaXNTZWMuZmluZChcIi5zaW5nbGUtYmFja2xpbmVcIik7XG4gICAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgcGF1c2VkOiB0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAvLyBnc2FwLnNldCgnYm9keScsIHt0b3VjaEFjdGlvbjonYXV0byd9KTtcbiAgICAgICAgICAvLyB9LCAxMDAwKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICB0bC5mcm9tVG8odGhpc092ZXJsYXksIHsgb3BhY2l0eTogMCB9LCB7IG9wYWNpdHk6IDAuOSB9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKHRoaXNCYWNrLCB7IG9wYWNpdHk6IDAgfSwgeyBvcGFjaXR5OiAxIH0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8oc2VjdGlvbkxpbmVzLCB7IG9wYWNpdHk6IDAgfSwgeyBvcGFjaXR5OiAwLjkgfSwgXCJzY3JvbGxJbkFsbFwiKTtcblxuICAgICAgcmV0dXJuIHRsO1xuICAgIH0sXG5cbiAgICBzZWN0aW9uQW5pbTY6ICgpID0+IHtcbiAgICAgIGxldCB0aGlzU2VjID0gJChcIiNzZWN0aW9uNlwiKTtcbiAgICAgIGxldCB0aGlzQmFjayA9ICQoXCIjYmFja2dyb3VuZDZcIik7XG4gICAgICBsZXQgdGhpc092ZXJsYXkgPSAkKFwiI292ZXJsYXk2XCIpO1xuICAgICAgbGV0IHNlY3Rpb25MaW5lcyA9IHRoaXNTZWMuZmluZChcIi5zaW5nbGUtYmFja2xpbmVcIik7XG4gICAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgcGF1c2VkOiB0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAvLyBnc2FwLnNldCgnYm9keScsIHt0b3VjaEFjdGlvbjonYXV0byd9KTtcbiAgICAgICAgICAvLyB9LCAxMDAwKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICB0bC5mcm9tVG8odGhpc092ZXJsYXksIHsgb3BhY2l0eTogMCB9LCB7IG9wYWNpdHk6IDAuOSB9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKHRoaXNCYWNrLCB7IG9wYWNpdHk6IDAgfSwgeyBvcGFjaXR5OiAxIH0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8oc2VjdGlvbkxpbmVzLCB7IG9wYWNpdHk6IDAgfSwgeyBvcGFjaXR5OiAwLjIgfSwgXCJzY3JvbGxJbkFsbFwiKTtcblxuICAgICAgcmV0dXJuIHRsO1xuICAgIH0sXG5cbiAgICBzZWN0aW9uQW5pbTc6ICgpID0+IHtcbiAgICAgIGxldCB0aGlzU2VjID0gJChcIiNzZWN0aW9uN1wiKTtcbiAgICAgIGxldCB0aGlzQmFjayA9ICQoXCIjYmFja2dyb3VuZDdcIik7XG4gICAgICBsZXQgdGhpc092ZXJsYXkgPSAkKFwiI292ZXJsYXk3XCIpO1xuICAgICAgbGV0IHNlY3Rpb25MaW5lcyA9IHRoaXNTZWMuZmluZChcIi5zaW5nbGUtYmFja2xpbmVcIik7XG4gICAgICBsZXQgc2VjQXJyb3cgPSAkKFwiI3NlY3Rpb24xXCIpLmZpbmQoXCIuZG93bi1hcnJvdy1zdmdcIik7XG4gICAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgcGF1c2VkOiB0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgdGwuZnJvbVRvKHRoaXNPdmVybGF5LCB7IG9wYWNpdHk6IDAgfSwgeyBvcGFjaXR5OiAwLjkgfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21Ubyh0aGlzQmFjaywgeyBvcGFjaXR5OiAwIH0sIHsgb3BhY2l0eTogMSB9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKHNlY3Rpb25MaW5lcywgeyBvcGFjaXR5OiAwIH0sIHsgb3BhY2l0eTogMC41IH0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8oc2VjQXJyb3csIHsgb3BhY2l0eTogMSB9LCB7IG9wYWNpdHk6IDAgfSwgXCJzY3JvbGxJbkFsbFwiKTtcblxuICAgICAgcmV0dXJuIHRsO1xuICAgIH0sXG4gIH07XG5cbiAgc2VjdGlvbkFuaW1bXCJzZWN0aW9uQW5pbTFcIl0oKS5wbGF5KCk7XG5cbiAgLy8gRmlyZSBBbiBBbmltYXRpb24gRnJvbSBBYm92ZSBmb3IgRWFjaCBTZWN0aW9uXG4gIGxldCBzZWN0aW9uVHJpZyA9IChteUNvdW50KSA9PiB7XG4gICAgLy8gUGxheSBTZWN0aW9uIDEgYXV0b21hdGljYWxseVxuXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgdHJpZ2dlcjogXCIjc2VjdGlvblwiICsgbXlDb3VudCxcbiAgICAgIHN0YXJ0OiBcInRvcCBib3R0b21cIixcbiAgICAgIGVuZDogXCJib3R0b20gYm90dG9tXCIsXG4gICAgICAvLyBzY3J1YjoxLFxuICAgICAgb25FbnRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobXlDb3VudCA+IDEpIHtcbiAgICAgICAgICAvLyBhbGVydChteUNvdW50KTtcbiAgICAgICAgICAvLyBnc2FwLnNldCgnYm9keScsIHt0b3VjaEFjdGlvbjonbm9uZSd9KTtcbiAgICAgICAgICAvLyBnc2FwLnNldCgnYm9keScsIHtvdmVyZmxvdzonaGlkZGVuJ30pO1xuICAgICAgICAgIHNlY3Rpb25BbmltW1wic2VjdGlvbkFuaW1cIiArIG15Q291bnRdKCkucGxheSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25MZWF2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobXlDb3VudCA8IDcpIHtcbiAgICAgICAgICAvLyBnc2FwLnNldCgnYm9keScsIHt0b3VjaEFjdGlvbjonbm9uZSd9KTtcbiAgICAgICAgICBzZWN0aW9uQW5pbVtcInNlY3Rpb25BbmltXCIgKyBteUNvdW50XSgpLnJldmVyc2UoMCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkVudGVyQmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobXlDb3VudCA8IDcpIHtcbiAgICAgICAgICAvLyBnc2FwLnNldCgnYm9keScsIHt0b3VjaEFjdGlvbjonbm9uZSd9KTtcbiAgICAgICAgICBzZWN0aW9uQW5pbVtcInNlY3Rpb25BbmltXCIgKyBteUNvdW50XSgpLnBsYXkoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTGVhdmVCYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChteUNvdW50ID4gMSkge1xuICAgICAgICAgIC8vIGdzYXAuc2V0KCdib2R5Jywge3RvdWNoQWN0aW9uOidub25lJ30pO1xuICAgICAgICAgIHNlY3Rpb25BbmltW1wic2VjdGlvbkFuaW1cIiArIG15Q291bnRdKCkucmV2ZXJzZSgwKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICAvLyBBbmltYXRpb24gdHJpZ2dlcnMgYXJlIGNhbGN1bGF0ZWQgaW4gdGhlIGZ1bmN0aW9uXG4gIGxldCBpID0gMTtcbiAgJChcInNlY3Rpb25cIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgc2VjdGlvblRyaWcoaSk7XG4gICAgaSsrO1xuICB9KTtcblxuICAvLyBzZWN0aW9uVHJpZygyKTtcbiAgbGV0IHdpbmRvd0hlaWdodCA9IE1hdGgucm91bmQod2luZG93LmlubmVySGVpZ2h0KTtcbiAgLy8gU2luZ2xlIEJ1enogb24gQmVlcyBTZWN0aW9uc1xuICAvLyBCdXp6IEFuaW1hdGlvbiA1XG4gIGxldCBidXp6SW40ID0gKCkgPT4ge1xuICAgIGxldCBidXp6QmxvY2sgPSAkKFwiI3NlY3Rpb240XCIpLmZpbmQoXCIuYnV6ek9uQmVlc0Jsb2NrXCIpO1xuICAgIGxldCBidXp6V2lkdGggPSBidXp6QmxvY2sub3V0ZXJXaWR0aCgpO1xuICAgIGxldCB0bCA9IG5ldyBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIHBhdXNlZDogdHJ1ZSxcbiAgICAgIGRlZmF1bHRzOiB7IGR1cmF0aW9uOiAwLjUgfSxcbiAgICB9KTtcbiAgICB0bC5mcm9tVG8oYnV6ekJsb2NrLCB7IHg6IGJ1enpXaWR0aCB9LCB7IHg6IDAgfSk7XG4gICAgcmV0dXJuIHRsO1xuICB9O1xuXG4gIGxldCBidXp6VHJpZzQgPSAobXlDb3VudCkgPT4ge1xuICAgIC8vIHZhciBzdGFydEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqIChteUNvdW50IC0gMC41KSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICAvLyB2YXIgZW5kSGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAwLjUpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuXG4gICAgLy8gY29uc29sZS5sb2coJ2J1eno0IHN0YXJ0IGlzICcrc3RhcnRIZWlnaHQpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdidXp6NCBlbmQgaXMgJytlbmRIZWlnaHQpO1xuXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgdHJpZ2dlcjogXCIjc2VjdGlvbjRcIixcbiAgICAgIHN0YXJ0OiBcInRvcCB0b3AtPVwiICsgd2luZG93SGVpZ2h0IC8gMixcbiAgICAgIGVuZDogXCJib3R0b20gYm90dG9tXCIsXG4gICAgICAvLyBzY3J1YjoxLFxuICAgICAgb25FbnRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBidXp6SW40KCkucGxheSgpO1xuICAgICAgfSxcbiAgICAgIG9uTGVhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYnV6ekluNCgpLnJldmVyc2UoMCk7XG4gICAgICB9LFxuICAgICAgb25FbnRlckJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYnV6ekluNCgpLnBsYXkoKTtcbiAgICAgIH0sXG4gICAgICBvbkxlYXZlQmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICBidXp6SW40KCkucmV2ZXJzZSgwKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgYnV6elRyaWc0KCk7XG5cbiAgLy8gQnV6eiBBbmltYXRpb24gNVxuICBsZXQgYnV6ekluNSA9ICgpID0+IHtcbiAgICBsZXQgYnV6ekJsb2NrID0gJChcIiNzZWN0aW9uNVwiKS5maW5kKFwiLmJ1enpPbkJlZXNCbG9ja1wiKTtcbiAgICBsZXQgYnV6eldpZHRoID0gYnV6ekJsb2NrLm91dGVyV2lkdGgoKTtcbiAgICBsZXQgdGwgPSBuZXcgZ3NhcC50aW1lbGluZSh7XG4gICAgICBwYXVzZWQ6IHRydWUsXG4gICAgICBkZWZhdWx0czogeyBkdXJhdGlvbjogMC41IH0sXG4gICAgfSk7XG4gICAgdGwuZnJvbVRvKGJ1enpCbG9jaywgeyB4OiBidXp6V2lkdGggfSwgeyB4OiAwIH0pO1xuICAgIHJldHVybiB0bDtcbiAgfTtcblxuICBsZXQgYnV6elRyaWc1ID0gKG15Q291bnQpID0+IHtcbiAgICAvLyB2YXIgc3RhcnRIZWlnaHQgPSAobXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCArIDAuNSkpIC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgLy8gdmFyIGVuZEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMS41KSkgLSBteVNjcm9sbE9mZnNldDtcblxuICAgIC8vIGNvbnNvbGUubG9nKCdidXp6NSBzdGFydCBpcyAnK3N0YXJ0SGVpZ2h0KTtcbiAgICAvLyBjb25zb2xlLmxvZygnYnV6ejUgZW5kIGlzICcrZW5kSGVpZ2h0KTtcblxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIHRyaWdnZXI6IFwiI3NlY3Rpb241XCIsXG4gICAgICBzdGFydDogXCJ0b3AgdG9wLT1cIiArIHdpbmRvd0hlaWdodCAvIDIsXG4gICAgICBlbmQ6IFwiYm90dG9tIGJvdHRvbVwiLFxuICAgICAgLy8gc2NydWI6MSxcbiAgICAgIG9uRW50ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYnV6ekluNSgpLnBsYXkoKTtcbiAgICAgIH0sXG4gICAgICBvbkxlYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJ1enpJbjUoKS5yZXZlcnNlKDApO1xuICAgICAgfSxcbiAgICAgIG9uRW50ZXJCYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJ1enpJbjUoKS5wbGF5KCk7XG4gICAgICB9LFxuICAgICAgb25MZWF2ZUJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYnV6ekluNSgpLnJldmVyc2UoMCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIGJ1enpUcmlnNSgpO1xuXG4gIC8vIEJ1enogQW5pbWF0aW9uIDZcbiAgbGV0IGJ1enpJbjYgPSAoKSA9PiB7XG4gICAgbGV0IGJ1enpCbG9jayA9ICQoXCIjc2VjdGlvbjZcIikuZmluZChcIi5idXp6T25CZWVzQmxvY2tcIik7XG4gICAgbGV0IGJ1enpXaWR0aCA9IGJ1enpCbG9jay5vdXRlcldpZHRoKCk7XG4gICAgbGV0IHRsID0gbmV3IGdzYXAudGltZWxpbmUoe1xuICAgICAgcGF1c2VkOiB0cnVlLFxuICAgICAgZGVmYXVsdHM6IHsgZHVyYXRpb246IDAuNSB9LFxuICAgIH0pO1xuICAgIHRsLmZyb21UbyhidXp6QmxvY2ssIHsgeDogYnV6eldpZHRoIH0sIHsgeDogMCB9KTtcbiAgICByZXR1cm4gdGw7XG4gIH07XG5cbiAgbGV0IGJ1enpUcmlnNiA9IChteUNvdW50KSA9PiB7XG4gICAgLy8gdmFyIHN0YXJ0SGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAxLjUpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIC8vIHZhciBlbmRIZWlnaHQgPSAobXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCArIDIuNSkpIC0gbXlTY3JvbGxPZmZzZXQ7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnYnV6ejYgc3RhcnQgaXMgJytzdGFydEhlaWdodCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2J1eno2IGVuZCBpcyAnK2VuZEhlaWdodCk7XG5cbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICB0cmlnZ2VyOiBcIiNzZWN0aW9uNlwiLFxuICAgICAgc3RhcnQ6IFwidG9wIHRvcC09XCIgKyB3aW5kb3dIZWlnaHQgLyAxLjUsXG4gICAgICBlbmQ6IFwiYm90dG9tIGJvdHRvbVwiLFxuICAgICAgLy8gc2NydWI6MSxcbiAgICAgIG9uRW50ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYnV6ekluNigpLnBsYXkoKTtcbiAgICAgIH0sXG4gICAgICBvbkxlYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJ1enpJbjYoKS5yZXZlcnNlKDApO1xuICAgICAgfSxcbiAgICAgIG9uRW50ZXJCYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJ1enpJbjYoKS5wbGF5KCk7XG4gICAgICB9LFxuICAgICAgb25MZWF2ZUJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYnV6ekluNigpLnJldmVyc2UoMCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIGJ1enpUcmlnNigpO1xuXG4gICQoXCIudGV4dC1jb250YWluZXJcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGxpbmVzSW4gPSAoKSA9PiB7XG4gICAgICBsZXQgdGhlc2VMaW5lcyA9ICQodGhpcykuZmluZChcIi5wTGluZXNcIik7XG4gICAgICBsZXQgdGwgPSBuZXcgZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHBhdXNlZDogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHsgZHVyYXRpb246IDAuMyB9LFxuICAgICAgfSk7XG4gICAgICB0bC5mcm9tVG8oXG4gICAgICAgIHRoZXNlTGluZXMsXG4gICAgICAgIHsgb3BhY2l0eTogMCwgeDogLTQwIH0sXG4gICAgICAgIHsgb3BhY2l0eTogMSwgeDogMCwgc3RhZ2dlcjogeyBhbW91bnQ6IDAuMyB9IH1cbiAgICAgICk7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoZXNlTGluZXMpO1xuICAgICAgcmV0dXJuIHRsO1xuICAgIH07XG5cbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICB0cmlnZ2VyOiB0aGlzLFxuICAgICAgc3RhcnQ6IFwidG9wIGJvdHRvbS09MTIwcHhcIixcbiAgICAgIC8vIHNjcnViOjEsXG4gICAgICBvbkVudGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxpbmVzSW4oKS5wbGF5KCk7XG4gICAgICB9LFxuICAgICAgLy8gb25MZWF2ZTogZnVuY3Rpb24oKXtidXp6SW42KCkucmV2ZXJzZSgwKTt9LFxuICAgICAgLy8gb25FbnRlckJhY2s6ZnVuY3Rpb24oKXtidXp6SW42KCkucGxheSgpO30sXG4gICAgICBvbkxlYXZlQmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICBsaW5lc0luKCkucmV2ZXJzZSgwKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gICQoXCJoMlwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbGluZXNJbiA9ICgpID0+IHtcbiAgICAgIGxldCB0aGVzZUxpbmVzID0gJCh0aGlzKS5maW5kKFwiLmgyV29yZHNcIik7XG4gICAgICBsZXQgdGwgPSBuZXcgZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHBhdXNlZDogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHsgZHVyYXRpb246IDAuMyB9LFxuICAgICAgfSk7XG4gICAgICB0bC5mcm9tVG8oXG4gICAgICAgIHRoZXNlTGluZXMsXG4gICAgICAgIHsgb3BhY2l0eTogMCwgeDogLTQwIH0sXG4gICAgICAgIHsgb3BhY2l0eTogMSwgeDogMCwgc3RhZ2dlcjogeyBhbW91bnQ6IDAuMyB9IH1cbiAgICAgICk7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoZXNlTGluZXMpO1xuICAgICAgcmV0dXJuIHRsO1xuICAgIH07XG5cbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICB0cmlnZ2VyOiB0aGlzLFxuICAgICAgc3RhcnQ6IFwidG9wIGJvdHRvbS09MTIwcHhcIixcbiAgICAgIC8vIHNjcnViOjEsXG4gICAgICBvbkVudGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxpbmVzSW4oKS5wbGF5KCk7XG4gICAgICB9LFxuICAgICAgLy8gb25MZWF2ZTogZnVuY3Rpb24oKXtidXp6SW42KCkucmV2ZXJzZSgwKTt9LFxuICAgICAgLy8gb25FbnRlckJhY2s6ZnVuY3Rpb24oKXtidXp6SW42KCkucGxheSgpO30sXG4gICAgICBvbkxlYXZlQmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICBsaW5lc0luKCkucmV2ZXJzZSgwKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xufTtcbiIsImV4cG9ydCBsZXQgbW9iaWxlU2VjdGlvbnNTZXR1cCA9ICgpID0+IHtcblxuICAvLyAkKCdib2R5JykuYWRkQ2xhc3MoJ21vYmlsZS1kZXZpY2UnKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIE1FQVNVUklORyBWQVJTXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgdG90YWxTZWN0aW9ucyA9ICQoJ3NlY3Rpb24nKS5sZW5ndGg7XG4gIGxldCB0b3RhbEJ1enpPbiA9ICQoJy5idXp6T25CZWVzQmxvY2snKS5sZW5ndGg7XG4gIGxldCB3aW5kb3dIZWlnaHQgPSBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIGxldCBteVNjcm9sbEhlaWdodCA9IHdpbmRvd0hlaWdodC8yO1xuICBsZXQgZnVsbEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqICh0b3RhbFNlY3Rpb25zICsgdG90YWxCdXp6T24pKSArIHdpbmRvd0hlaWdodCAtIDE7XG4gIGxldCBidXp6QmxvY2sgPSAkKCcuYnV6ek9uQmVlc0Jsb2NrJyk7XG4gIGxldCBidXp6V2lkdGggPSBidXp6QmxvY2sub3V0ZXJXaWR0aCgpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gR0xPQkFMXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTZXQgT3ZlcmFsbCBTY3JvbGwgSGVpZ2h0XG4gIC8vIGdzYXAuc2V0KCcuaG9tZS1wYWdlJywge2hlaWdodDpmdWxsSGVpZ2h0fSk7XG4gIC8vIGdzYXAuc2V0KGRvY3VtZW50LmJvZHksIHtvdmVyZmxvdzogXCJoaWRkZW5cIn0pXG4gIC8vIEhpZGUgQWxsIExpbmVzXG4gIC8vIGdzYXAuc2V0KCQoJy5ob21lLXBhZ2UnKS5maW5kKCdwYXRoJyksIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSk7XG4gIC8vIGdzYXAuc2V0KCQoJy5ob21lLXBhZ2UnKS5maW5kKCdwb2x5bGluZScpLCB7ZHJhd1NWRzpcIjUwJSA1MCVcIn0pO1xuICAvLyBnc2FwLnNldCgkKCcuaG9tZS1wYWdlJykuZmluZCgnbGluZScpLCB7ZHJhd1NWRzpcIjUwJSA1MCVcIn0pO1xuICAvLyBnc2FwLnNldCgkKCcuaG9tZS1wYWdlJykuZmluZCgnI2Rvd24tYXJyb3cgbGluZScpLCB7ZHJhd1NWRzpcIjEwMCUgMTAwJVwifSk7XG4gIC8vIFNldCAxc3QgQmFja2dyb3VuZCBJbWFnZSBhcyBWaXNpYmxlXG5cbiAgbGV0IHNlYzFMaW5lcyA9ICQoJyNzZWN0aW9uMScpLmZpbmQoJy5zaW5nbGUtYmFja2xpbmUnKVxuICBsZXQgc2VjMUFycm93ID0gJCgnI3NlY3Rpb24xJykuZmluZCgnLmRvd24tYXJyb3ctc3ZnJylcbiAgZ3NhcC5zZXQoc2VjMUxpbmVzLCB7b3BhY2l0eTowLjJ9KTtcbiAgZ3NhcC5zZXQoc2VjMUFycm93LCB7b3BhY2l0eToxfSk7XG4gIGdzYXAuc2V0KCcjYmFja2dyb3VuZDEnLCB7b3BhY2l0eToxLCB6SW5kZXg6MTAwfSk7XG4gIGdzYXAuc2V0KCcjYmFja2dyb3VuZDMnLCB7ekluZGV4OjEwNn0pO1xuICBnc2FwLnNldCgnI2JhY2tncm91bmQ0Jywge3pJbmRleDoxMDV9KTtcbiAgZ3NhcC5zZXQoJyNiYWNrZ3JvdW5kNScsIHt6SW5kZXg6MTA0fSk7XG4gIGdzYXAuc2V0KCcjYmFja2dyb3VuZDYnLCB7ekluZGV4OjEwM30pO1xuICBnc2FwLnNldCgnI2JhY2tncm91bmQ3Jywge3pJbmRleDoxMDF9KTtcblxuICBnc2FwLnNldCgnI292ZXJsYXkxJywge29wYWNpdHk6MC42NSwgekluZGV4OjEwMX0pO1xuICAvLyBnc2FwLnNldCgnI292ZXJsYXkzJywge3pJbmRleDoxMDN9KTtcbiAgLy8gZ3NhcC5zZXQoJyNvdmVybGF5NCcsIHt6SW5kZXg6MTA0fSk7XG4gIGdzYXAuc2V0KCcjb3ZlcmxheTUnLCB7ekluZGV4OjEwNX0pO1xuICBnc2FwLnNldCgnI292ZXJsYXk2Jywge3pJbmRleDoxMDZ9KTtcbiAgZ3NhcC5zZXQoJyNvdmVybGF5NycsIHt6SW5kZXg6MTA3fSk7XG5cbiAgLy8gZ3NhcC5zZXQoJyNzZWN0aW9uMScsIHt6SW5kZXg6MjA3fSk7XG4gIC8vIGdzYXAuc2V0KCcjc2VjdGlvbjInLCB7ekluZGV4OjIwNn0pO1xuICAvLyBnc2FwLnNldCgnI3NlY3Rpb24zJywge3pJbmRleDoyMDV9KTtcbiAgLy8gZ3NhcC5zZXQoJyNzZWN0aW9uNCcsIHt6SW5kZXg6MjA0fSk7XG4gIC8vIGdzYXAuc2V0KCcjc2VjdGlvbjUnLCB7ekluZGV4OjIwM30pO1xuICAvLyBnc2FwLnNldCgnI3NlY3Rpb242Jywge3pJbmRleDoyMDJ9KTtcbiAgLy8gZ3NhcC5zZXQoJyNzZWN0aW9uNycsIHt6SW5kZXg6MjAxfSk7XG4gIC8vIGdzYXAuc2V0KCcjYmFja2dyb3VuZDEnLCB7b3BhY2l0eToxfSk7XG4gIC8vIFNldCBCdXp6IE9uIEJlZXMgdG8gSGlkZGVuXG4gIGdzYXAuc2V0KGJ1enpCbG9jaywge3g6YnV6eldpZHRofSk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRUNUSU9OIDFcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGxldCBzZWMxID0gJCgnI3NlY3Rpb24xJyk7XG4gIGxldCBzZWMxSDIgPSBzZWMxLmZpbmQoJ2gyJyk7XG4gIGxldCBzZWMxc3BsaXRIMiA9IG5ldyBTcGxpdFRleHQoc2VjMUgyLCB7IHR5cGU6IFwibGluZXMsd29yZHMsIGNoYXJzXCIgfSk7XG4gIGxldCBzZWMxQ2hhcnMyID0gc2VjMXNwbGl0SDIuY2hhcnM7XG4gIGxldCBzZWMxV29yZHMyID0gc2VjMXNwbGl0SDIud29yZHM7XG4gIGxldCBzZWMxTGluZXMyID0gc2VjMXNwbGl0SDIubGluZXM7XG4gICQoc2VjMUxpbmVzMikuYWRkQ2xhc3MoJ2gyTGluZXMnKTtcbiAgJChzZWMxQ2hhcnMyKS5hZGRDbGFzcygnaDJDaGFycyBzZWMxQ2hhcnMyJyk7XG4gICQoc2VjMVdvcmRzMikuYWRkQ2xhc3MoJ2gyV29yZHMgc2VjMVdvcmRzMicpO1xuXG4gIGxldCBzZWMxSDMgPSBzZWMxLmZpbmQoJ2gzJyk7XG4gIGxldCBzZWMxc3BsaXRIMyA9IG5ldyBTcGxpdFRleHQoc2VjMUgzLCB7IHR5cGU6IFwibGluZXMsd29yZHMsY2hhcnNcIiB9KTtcbiAgbGV0IHNlYzFDaGFyczMgPSBzZWMxc3BsaXRIMy5jaGFycztcbiAgbGV0IHNlYzFXb3JkczMgPSBzZWMxc3BsaXRIMy53b3JkcztcbiAgJChzZWMxQ2hhcnMzKS5hZGRDbGFzcygnaDNDaGFycyBzZWMxQ2hhcnMzJyk7XG4gICQoc2VjMVdvcmRzMykuYWRkQ2xhc3MoJ2gzV29yZHMgc2VjMVdvcmRzMycpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VDVElPTiAyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgc2VjMiA9ICQoJyNzZWN0aW9uMicpO1xuICBsZXQgc2VjMkgyID0gc2VjMi5maW5kKCdoMicpO1xuICBsZXQgc2VjMnNwbGl0SDIgPSBuZXcgU3BsaXRUZXh0KHNlYzJIMiwgeyB0eXBlOiBcImxpbmVzLHdvcmRzXCIgfSk7XG4gIC8vIGxldCBzZWMyQ2hhcnMyID0gc2VjMnNwbGl0SDIuY2hhcnM7XG4gIGxldCBzZWMyV29yZHMyID0gc2VjMnNwbGl0SDIud29yZHM7XG4gIGxldCBzZWMyTGluZXMyID0gc2VjMnNwbGl0SDIubGluZXM7XG4gICQoc2VjMkxpbmVzMikuYWRkQ2xhc3MoJ2gyTGluZXMnKTtcbiAgLy8gJChzZWMyQ2hhcnMyKS5hZGRDbGFzcygnaDJDaGFycyBzZWMyQ2hhcnMyJyk7XG4gICQoc2VjMldvcmRzMikuYWRkQ2xhc3MoJ2gyV29yZHMgc2VjMldvcmRzMicpO1xuICBcbiAgbGV0IHNlYzJQID0gc2VjMi5maW5kKCcudGV4dC1jb250YWluZXIgcCcpO1xuICBsZXQgc2VjMnNwbGl0UCA9IG5ldyBTcGxpdFRleHQoc2VjMlAsIHsgdHlwZTogXCJsaW5lc1wiIH0pO1xuICAvLyBsZXQgc2VjMldvcmRzUCA9IHNlYzJzcGxpdFAud29yZHM7XG4gIGxldCBzZWMyTGluZXNQID0gc2VjMnNwbGl0UC5saW5lcztcbiAgLy8gJChzZWMyV29yZHNQKS5hZGRDbGFzcygnaDNXb3JkcyBzZWMyV29yZHNQJyk7XG4gICQoc2VjMkxpbmVzUCkuYWRkQ2xhc3MoJ3BMaW5lcyBzZWMyTGluZXNQJyk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRUNUSU9OIDRcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGxldCBzZWM0ID0gJCgnI3NlY3Rpb240Jyk7XG4gIGxldCBzZWM0SDIgPSBzZWM0LmZpbmQoJ2gyJyk7XG4gIGxldCBzZWM0c3BsaXRIMiA9IG5ldyBTcGxpdFRleHQoc2VjNEgyLCB7IHR5cGU6IFwibGluZXMsd29yZHNcIiB9KTtcbiAgLy8gbGV0IHNlYzRDaGFyczIgPSBzZWM0c3BsaXRIMi5jaGFycztcbiAgbGV0IHNlYzRXb3JkczIgPSBzZWM0c3BsaXRIMi53b3JkcztcbiAgbGV0IHNlYzRMaW5lczIgPSBzZWM0c3BsaXRIMi5saW5lcztcbiAgJChzZWM0TGluZXMyKS5hZGRDbGFzcygnaDJMaW5lcycpO1xuICAvLyAkKHNlYzRDaGFyczIpLmFkZENsYXNzKCdoMkNoYXJzIHNlYzRDaGFyczInKTtcbiAgJChzZWM0V29yZHMyKS5hZGRDbGFzcygnaDJXb3JkcyBzZWM0V29yZHMyJyk7XG4gIFxuICBsZXQgc2VjNFAgPSBzZWM0LmZpbmQoJy50ZXh0LWNvbnRhaW5lciBwJyk7XG4gIGxldCBzZWM0c3BsaXRQID0gbmV3IFNwbGl0VGV4dChzZWM0UCwgeyB0eXBlOiBcImxpbmVzXCIgfSk7XG4gIC8vIGxldCBzZWM0V29yZHNQID0gc2VjNHNwbGl0UC53b3JkcztcbiAgbGV0IHNlYzRMaW5lc1AgPSBzZWM0c3BsaXRQLmxpbmVzO1xuICAvLyAkKHNlYzRXb3Jkc1ApLmFkZENsYXNzKCdoM1dvcmRzIHNlYzRXb3Jkc1AnKTtcbiAgJChzZWM0TGluZXNQKS5hZGRDbGFzcygncExpbmVzIHNlYzRMaW5lc1AnKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFQ1RJT04gNVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbGV0IHNlYzUgPSAkKCcjc2VjdGlvbjUnKTtcbiAgbGV0IHNlYzVIMiA9IHNlYzUuZmluZCgnaDInKTtcbiAgbGV0IHNlYzVzcGxpdEgyID0gbmV3IFNwbGl0VGV4dChzZWM1SDIsIHsgdHlwZTogXCJsaW5lcyx3b3Jkc1wiIH0pO1xuICAvLyBsZXQgc2VjNUNoYXJzMiA9IHNlYzVzcGxpdEgyLmNoYXJzO1xuICBsZXQgc2VjNVdvcmRzMiA9IHNlYzVzcGxpdEgyLndvcmRzO1xuICBsZXQgc2VjNUxpbmVzMiA9IHNlYzVzcGxpdEgyLmxpbmVzO1xuICAkKHNlYzVMaW5lczIpLmFkZENsYXNzKCdoMkxpbmVzJyk7XG4gIC8vICQoc2VjNUNoYXJzMikuYWRkQ2xhc3MoJ2gyQ2hhcnMgc2VjNUNoYXJzMicpO1xuICAkKHNlYzVXb3JkczIpLmFkZENsYXNzKCdoMldvcmRzIHNlYzVXb3JkczInKTtcbiAgXG4gIGxldCBzZWM1UCA9IHNlYzUuZmluZCgnLnRleHQtY29udGFpbmVyIHAnKTtcbiAgbGV0IHNlYzVzcGxpdFAgPSBuZXcgU3BsaXRUZXh0KHNlYzVQLCB7IHR5cGU6IFwibGluZXNcIiB9KTtcbiAgLy8gbGV0IHNlYzVXb3Jkc1AgPSBzZWM1c3BsaXRQLndvcmRzO1xuICBsZXQgc2VjNUxpbmVzUCA9IHNlYzVzcGxpdFAubGluZXM7XG4gIC8vICQoc2VjNVdvcmRzUCkuYWRkQ2xhc3MoJ2gzV29yZHMgc2VjNVdvcmRzUCcpO1xuICAkKHNlYzVMaW5lc1ApLmFkZENsYXNzKCdwTGluZXMgc2VjNUxpbmVzUCcpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VDVElPTiA2XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgc2VjNiA9ICQoJyNzZWN0aW9uNicpO1xuICBsZXQgc2VjNkgyID0gc2VjNi5maW5kKCdoMicpO1xuICBsZXQgc2VjNnNwbGl0SDIgPSBuZXcgU3BsaXRUZXh0KHNlYzZIMiwgeyB0eXBlOiBcImxpbmVzLHdvcmRzXCIgfSk7XG4gIC8vIGxldCBzZWM2Q2hhcnMyID0gc2VjNnNwbGl0SDIuY2hhcnM7XG4gIGxldCBzZWM2V29yZHMyID0gc2VjNnNwbGl0SDIud29yZHM7XG4gIGxldCBzZWM2TGluZXMyID0gc2VjNnNwbGl0SDIubGluZXM7XG4gICQoc2VjNkxpbmVzMikuYWRkQ2xhc3MoJ2gyTGluZXMnKTtcbiAgLy8gJChzZWM2Q2hhcnMyKS5hZGRDbGFzcygnaDJDaGFycyBzZWM2Q2hhcnMyJyk7XG4gICQoc2VjNldvcmRzMikuYWRkQ2xhc3MoJ2gyV29yZHMgc2VjNldvcmRzMicpO1xuICBcbiAgbGV0IHNlYzZQID0gc2VjNi5maW5kKCcudGV4dC1jb250YWluZXIgcCcpO1xuICBsZXQgc2VjNnNwbGl0UCA9IG5ldyBTcGxpdFRleHQoc2VjNlAsIHsgdHlwZTogXCJsaW5lc1wiIH0pO1xuICAvLyBsZXQgc2VjNldvcmRzUCA9IHNlYzZzcGxpdFAud29yZHM7XG4gIGxldCBzZWM2TGluZXNQID0gc2VjNnNwbGl0UC5saW5lcztcbiAgLy8gJChzZWM2V29yZHNQKS5hZGRDbGFzcygnaDNXb3JkcyBzZWM2V29yZHNQJyk7XG4gICQoc2VjNkxpbmVzUCkuYWRkQ2xhc3MoJ3BMaW5lcyBzZWM2TGluZXNQJyk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRUNUSU9OIDdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGxldCBzZWM3ID0gJCgnI3NlY3Rpb243Jyk7XG4gIGxldCBzZWM3SDIgPSBzZWM3LmZpbmQoJ2gyJyk7XG4gIGxldCBzZWM3c3BsaXRIMiA9IG5ldyBTcGxpdFRleHQoc2VjN0gyLCB7IHR5cGU6IFwibGluZXMsd29yZHNcIiB9KTtcbiAgLy8gbGV0IHNlYzdDaGFyczIgPSBzZWM3c3BsaXRIMi5jaGFycztcbiAgbGV0IHNlYzdXb3JkczIgPSBzZWM3c3BsaXRIMi53b3JkcztcbiAgbGV0IHNlYzdMaW5lczIgPSBzZWM3c3BsaXRIMi5saW5lcztcbiAgJChzZWM3TGluZXMyKS5hZGRDbGFzcygnaDJMaW5lcycpO1xuICAvLyAkKHNlYzdDaGFyczIpLmFkZENsYXNzKCdoMkNoYXJzJyk7XG4gICQoc2VjN1dvcmRzMikuYWRkQ2xhc3MoJ2gyV29yZHMnKTtcbiAgXG4gIGxldCBzZWM3UCA9IHNlYzcuZmluZCgnLnRleHQtY29udGFpbmVyIHAnKTtcbiAgbGV0IHNlYzdzcGxpdFAgPSBuZXcgU3BsaXRUZXh0KHNlYzdQLCB7IHR5cGU6IFwibGluZXNcIiB9KTtcbiAgLy8gbGV0IHNlYzdXb3Jkc1AgPSBzZWM3c3BsaXRQLndvcmRzO1xuICBsZXQgc2VjN0xpbmVzUCA9IHNlYzdzcGxpdFAubGluZXM7XG4gIC8vICQoc2VjN1dvcmRzUCkuYWRkQ2xhc3MoJ2gzV29yZHMgc2VjN1dvcmRzUCcpO1xuICAkKHNlYzdMaW5lc1ApLmFkZENsYXNzKCdwTGluZXMgc2VjN0xpbmVzUCcpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VDVElPTiA4XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgc2VjOCA9ICQoJyNzZWN0aW9uOCcpO1xuICBsZXQgc2VjOEgyID0gc2VjOC5maW5kKCdoMicpO1xuICBsZXQgc2VjOHNwbGl0SDIgPSBuZXcgU3BsaXRUZXh0KHNlYzhIMiwgeyB0eXBlOiBcImxpbmVzLHdvcmRzXCIgfSk7XG4gIC8vIGxldCBzZWM4Q2hhcnMyID0gc2VjOHNwbGl0SDIuY2hhcnM7XG4gIGxldCBzZWM4V29yZHMyID0gc2VjOHNwbGl0SDIud29yZHM7XG4gIGxldCBzZWM4TGluZXMyID0gc2VjOHNwbGl0SDIubGluZXM7XG4gICQoc2VjOExpbmVzMikuYWRkQ2xhc3MoJ2gyTGluZXMnKTtcbiAgLy8gJChzZWM4Q2hhcnMyKS5hZGRDbGFzcygnaDJDaGFycycpO1xuICAkKHNlYzhXb3JkczIpLmFkZENsYXNzKCdoMldvcmRzJyk7XG4gIFxuICBsZXQgc2VjOFAgPSBzZWM4LmZpbmQoJy50ZXh0LWNvbnRhaW5lciBwJyk7XG4gIGxldCBzZWM4c3BsaXRQID0gbmV3IFNwbGl0VGV4dChzZWM4UCwgeyB0eXBlOiBcImxpbmVzXCIgfSk7XG4gIC8vIGxldCBzZWM4V29yZHNQID0gc2VjOHNwbGl0UC53b3JkcztcbiAgbGV0IHNlYzhMaW5lc1AgPSBzZWM4c3BsaXRQLmxpbmVzO1xuICAvLyAkKHNlYzhXb3Jkc1ApLmFkZENsYXNzKCdoM1dvcmRzIHNlYzhXb3Jkc1AnKTtcbiAgJChzZWM4TGluZXNQKS5hZGRDbGFzcygncExpbmVzIHNlYzhMaW5lc1AnKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFVFVQIEVMRU1FTlRTXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBnc2FwLnNldCgnLmgyQ2hhcnMnLCB7eTonMS4xZW0nfSk7XG59IiwiaW1wb3J0IHsgXG4gIGFuaW1hdGVTZWN0aW9uLFxufSBmcm9tICcuL2luZGV4LmpzJztcblxuZXhwb3J0IGxldCBwcmVMb2FkZXIgPSAoKSA9PiB7XG4gIGxldCB0bCA9IG5ldyBnc2FwLnRpbWVsaW5lKHtcbiAgICBkZWZhdWx0czp7XG4gICAgICBkdXJhdGlvbjowLjUsXG4gICAgfSxcbiAgICBcbiAgICAvLyBlYXNlOidwb3dlcjQub3V0JyxcbiAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgLy8gYWxlcnQoJ291dCcpO1xuICAgICAgJCgnI3ByZWxvYWRlcicpLnJlbW92ZSgpO1xuICAgIH1cbiAgfSlcbiAgdGwudG8oJy5wcmVsb2FkZXJTVkcnLCB7c2NhbGU6MH0sXCJsb2FkT3V0XCIpO1xuXHR0bC50bygnI3ByZWxvYWRlcicsIHtvcGFjaXR5OjAsZHVyYXRpb246MC4zfSxcImxvYWRPdXQyXCIpO1xufVxuXG5leHBvcnQgbGV0IHZpZExpbmtzPSAoKSA9PiB7XG5cdGxldCB0aGlzU3JjID0gJCgnLmlmcmFtZUhvbGRlcicpLmF0dHIoJ2RhdGEtZGVza3RvcC12aWQnKTtcbiAgLy8gY29uc29sZS5sb2codGhpc1NyYyk7XG4gICQoJy5pZnJhbWVFbXB0eScpLmF0dHIoJ3NyYycsICdodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vJyt0aGlzU3JjKyc/aD0yNWYzMzRlOTU2JnRpdGxlPTAmYnlsaW5lPTAmcG9ydHJhaXQ9MCcpIFxufVxuXG5leHBvcnQgbGV0IG1vYmlsZVZpZExpbmtzPSAoKSA9PiB7XG5cdGxldCB0aGlzU3JjID0gJCgnLmlmcmFtZUhvbGRlcicpLmF0dHIoJ2RhdGEtbW9iaWxlLXZpZCcpO1xuICAvLyBjb25zb2xlLmxvZyh0aGlzU3JjKTtcbiAgJCgnLmlmcmFtZUVtcHR5JykuYXR0cignc3JjJywgJ2h0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8nK3RoaXNTcmMrJz9oPTI1ZjMzNGU5NTYmdGl0bGU9MCZieWxpbmU9MCZwb3J0cmFpdD0wJykgXG59XG5cbmV4cG9ydCBsZXQgc21vb3RoU2Nyb2xsaW5nID0gKHRoZUxpbmspID0+IHtcbiAgXG4gIGxldCB0YXJnZXQgPSAkKHRoZUxpbmspLmF0dHIoJ2hyZWYnKTtcbiAgbGV0IGhlYWRlckhlaWdodCA9ICQoJy5oZWFkZXInKS5vdXRlckhlaWdodCgpOyBcbiAgZ3NhcC50byh3aW5kb3csIHtkdXJhdGlvbjouNSwgZWFzZTogJ2NpcmMub3V0JywgXG4gICAgc2Nyb2xsVG86e1xuICAgICAgeTp0YXJnZXQsIFxuICAgICAgLy8gQWN0aXZhdGUgaWYgSGVhZGVyIElzIEZpeGVkXG4gICAgICAvLyBvZmZzZXRZOmhlYWRlckhlaWdodFxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGxldCBtb2JpbGVOYXZTZXR1cCA9ICgpID0+IHtcbiAgZ3NhcC5zZXQoJ25hdiBhJywge29wYWNpdHk6MCwgeDonNTAlJ30pO1xufVxuIiwiZXhwb3J0IGxldCBzZWN0aW9uc1NldHVwID0gKCkgPT4ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gTUVBU1VSSU5HIFZBUlNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGxldCB0b3RhbFNlY3Rpb25zID0gJChcInNlY3Rpb25cIikubGVuZ3RoO1xuICBsZXQgdG90YWxCdXp6T24gPSAkKFwiLmJ1enpPbkJlZXNCbG9ja1wiKS5sZW5ndGg7XG4gIGxldCB3aW5kb3dIZWlnaHQgPSBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIGlmIChzY3JlZW4ud2lkdGggPD0gMTAyNCkge1xuICAgIHZhciBteVNjcm9sbEhlaWdodCA9IHdpbmRvd0hlaWdodCAqIDEuNTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbXlTY3JvbGxIZWlnaHQgPSB3aW5kb3dIZWlnaHQgLyAyO1xuICB9XG4gIGxldCBmdWxsSGVpZ2h0ID1cbiAgICBteVNjcm9sbEhlaWdodCAqICh0b3RhbFNlY3Rpb25zICsgdG90YWxCdXp6T24pICsgd2luZG93SGVpZ2h0IC0gMTtcbiAgbGV0IGJ1enpCbG9jayA9ICQoXCIuYnV6ek9uQmVlc0Jsb2NrXCIpO1xuICBsZXQgYnV6eldpZHRoID0gYnV6ekJsb2NrLm91dGVyV2lkdGgoKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEdMT0JBTFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU2V0IE92ZXJhbGwgU2Nyb2xsIEhlaWdodFxuICBnc2FwLnNldChcIi5ob21lLXBhZ2VcIiwgeyBoZWlnaHQ6IGZ1bGxIZWlnaHQgfSk7XG4gIGdzYXAuc2V0KGRvY3VtZW50LmJvZHksIHsgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfSk7XG4gIC8vIEhpZGUgQWxsIExpbmVzXG4gIGdzYXAuc2V0KCQoXCIuaG9tZS1wYWdlXCIpLmZpbmQoXCJwYXRoXCIpLCB7IGRyYXdTVkc6IFwiNTAlIDUwJVwiIH0pO1xuICBnc2FwLnNldCgkKFwiLmhvbWUtcGFnZVwiKS5maW5kKFwicG9seWxpbmVcIiksIHsgZHJhd1NWRzogXCI1MCUgNTAlXCIgfSk7XG4gIGdzYXAuc2V0KCQoXCIuaG9tZS1wYWdlXCIpLmZpbmQoXCJsaW5lXCIpLCB7IGRyYXdTVkc6IFwiNTAlIDUwJVwiIH0pO1xuICBnc2FwLnNldCgkKFwiLmhvbWUtcGFnZVwiKS5maW5kKFwiI2Rvd24tYXJyb3cgbGluZVwiKSwgeyBkcmF3U1ZHOiBcIjEwMCUgMTAwJVwiIH0pO1xuICAvLyBTZXQgMXN0IEJhY2tncm91bmQgSW1hZ2UgYXMgVmlzaWJsZVxuICBnc2FwLnNldChcIiNiYWNrZ3JvdW5kMVwiLCB7IG9wYWNpdHk6IDEsIHpJbmRleDogMTAxIH0pO1xuICAvLyBTZXQgQnV6eiBPbiBCZWVzIHRvIEhpZGRlblxuICBnc2FwLnNldChidXp6QmxvY2ssIHsgeDogYnV6eldpZHRoIH0pO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VDVElPTiAxXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgc2VjMSA9ICQoXCIjc2VjdGlvbjFcIik7XG4gIGxldCBzZWMxSDIgPSBzZWMxLmZpbmQoXCJoMlwiKTtcbiAgbGV0IHNlYzFzcGxpdEgyID0gbmV3IFNwbGl0VGV4dChzZWMxSDIsIHsgdHlwZTogXCJsaW5lcyx3b3JkcyxjaGFyc1wiIH0pO1xuICBsZXQgc2VjMUNoYXJzMiA9IHNlYzFzcGxpdEgyLmNoYXJzO1xuICBsZXQgc2VjMVdvcmRzMiA9IHNlYzFzcGxpdEgyLndvcmRzO1xuICBsZXQgc2VjMUxpbmVzMiA9IHNlYzFzcGxpdEgyLmxpbmVzO1xuICAkKHNlYzFMaW5lczIpLmFkZENsYXNzKFwiaDJMaW5lc1wiKTtcbiAgJChzZWMxQ2hhcnMyKS5hZGRDbGFzcyhcImgyQ2hhcnMgc2VjMUNoYXJzMlwiKTtcbiAgJChzZWMxV29yZHMyKS5hZGRDbGFzcyhcImgyV29yZHMgc2VjMVdvcmRzMlwiKTtcblxuICBsZXQgc2VjMUgzID0gc2VjMS5maW5kKFwiaDNcIik7XG4gIGxldCBzZWMxc3BsaXRIMyA9IG5ldyBTcGxpdFRleHQoc2VjMUgzLCB7IHR5cGU6IFwibGluZXMsd29yZHMsY2hhcnNcIiB9KTtcbiAgbGV0IHNlYzFDaGFyczMgPSBzZWMxc3BsaXRIMy5jaGFycztcbiAgbGV0IHNlYzFXb3JkczMgPSBzZWMxc3BsaXRIMy53b3JkcztcbiAgJChzZWMxQ2hhcnMzKS5hZGRDbGFzcyhcImgzQ2hhcnMgc2VjMUNoYXJzM1wiKTtcbiAgJChzZWMxV29yZHMzKS5hZGRDbGFzcyhcImgzV29yZHMgc2VjMVdvcmRzM1wiKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFQ1RJT04gMlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbGV0IHNlYzIgPSAkKFwiI3NlY3Rpb24yXCIpO1xuICBsZXQgc2VjMkgyID0gc2VjMi5maW5kKFwiaDJcIik7XG4gIGxldCBzZWMyc3BsaXRIMiA9IG5ldyBTcGxpdFRleHQoc2VjMkgyLCB7IHR5cGU6IFwibGluZXMsd29yZHMsY2hhcnNcIiB9KTtcbiAgbGV0IHNlYzJDaGFyczIgPSBzZWMyc3BsaXRIMi5jaGFycztcbiAgbGV0IHNlYzJXb3JkczIgPSBzZWMyc3BsaXRIMi53b3JkcztcbiAgbGV0IHNlYzJMaW5lczIgPSBzZWMyc3BsaXRIMi5saW5lcztcbiAgJChzZWMyTGluZXMyKS5hZGRDbGFzcyhcImgyTGluZXNcIik7XG4gICQoc2VjMkNoYXJzMikuYWRkQ2xhc3MoXCJoMkNoYXJzIHNlYzJDaGFyczJcIik7XG4gICQoc2VjMldvcmRzMikuYWRkQ2xhc3MoXCJoMldvcmRzIHNlYzJXb3JkczJcIik7XG5cbiAgbGV0IHNlYzJQID0gc2VjMi5maW5kKFwiLnRleHQtY29udGFpbmVyIHBcIik7XG4gIGxldCBzZWMyc3BsaXRQID0gbmV3IFNwbGl0VGV4dChzZWMyUCwgeyB0eXBlOiBcImxpbmVzXCIgfSk7XG4gIC8vIGxldCBzZWMyV29yZHNQID0gc2VjMnNwbGl0UC53b3JkcztcbiAgbGV0IHNlYzJMaW5lc1AgPSBzZWMyc3BsaXRQLmxpbmVzO1xuICAvLyAkKHNlYzJXb3Jkc1ApLmFkZENsYXNzKCdoM1dvcmRzIHNlYzJXb3Jkc1AnKTtcbiAgJChzZWMyTGluZXNQKS5hZGRDbGFzcyhcInBMaW5lcyBzZWMyTGluZXNQXCIpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VDVElPTiA0XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgc2VjNCA9ICQoXCIjc2VjdGlvbjRcIik7XG4gIGxldCBzZWM0SDIgPSBzZWM0LmZpbmQoXCJoMlwiKTtcbiAgbGV0IHNlYzRzcGxpdEgyID0gbmV3IFNwbGl0VGV4dChzZWM0SDIsIHsgdHlwZTogXCJsaW5lcyx3b3JkcyxjaGFyc1wiIH0pO1xuICBsZXQgc2VjNENoYXJzMiA9IHNlYzRzcGxpdEgyLmNoYXJzO1xuICBsZXQgc2VjNFdvcmRzMiA9IHNlYzRzcGxpdEgyLndvcmRzO1xuICBsZXQgc2VjNExpbmVzMiA9IHNlYzRzcGxpdEgyLmxpbmVzO1xuICAkKHNlYzRMaW5lczIpLmFkZENsYXNzKFwiaDJMaW5lc1wiKTtcbiAgJChzZWM0Q2hhcnMyKS5hZGRDbGFzcyhcImgyQ2hhcnMgc2VjNENoYXJzMlwiKTtcbiAgJChzZWM0V29yZHMyKS5hZGRDbGFzcyhcImgyV29yZHMgc2VjNFdvcmRzMlwiKTtcblxuICBsZXQgc2VjNFAgPSBzZWM0LmZpbmQoXCIudGV4dC1jb250YWluZXIgcFwiKTtcbiAgbGV0IHNlYzRzcGxpdFAgPSBuZXcgU3BsaXRUZXh0KHNlYzRQLCB7IHR5cGU6IFwibGluZXNcIiB9KTtcbiAgLy8gbGV0IHNlYzRXb3Jkc1AgPSBzZWM0c3BsaXRQLndvcmRzO1xuICBsZXQgc2VjNExpbmVzUCA9IHNlYzRzcGxpdFAubGluZXM7XG4gIC8vICQoc2VjNFdvcmRzUCkuYWRkQ2xhc3MoJ2gzV29yZHMgc2VjNFdvcmRzUCcpO1xuICAkKHNlYzRMaW5lc1ApLmFkZENsYXNzKFwicExpbmVzIHNlYzRMaW5lc1BcIik7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRUNUSU9OIDVcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGxldCBzZWM1ID0gJChcIiNzZWN0aW9uNVwiKTtcbiAgbGV0IHNlYzVIMiA9IHNlYzUuZmluZChcImgyXCIpO1xuICBsZXQgc2VjNXNwbGl0SDIgPSBuZXcgU3BsaXRUZXh0KHNlYzVIMiwgeyB0eXBlOiBcImxpbmVzLHdvcmRzLGNoYXJzXCIgfSk7XG4gIGxldCBzZWM1Q2hhcnMyID0gc2VjNXNwbGl0SDIuY2hhcnM7XG4gIGxldCBzZWM1V29yZHMyID0gc2VjNXNwbGl0SDIud29yZHM7XG4gIGxldCBzZWM1TGluZXMyID0gc2VjNXNwbGl0SDIubGluZXM7XG4gICQoc2VjNUxpbmVzMikuYWRkQ2xhc3MoXCJoMkxpbmVzXCIpO1xuICAkKHNlYzVDaGFyczIpLmFkZENsYXNzKFwiaDJDaGFycyBzZWM1Q2hhcnMyXCIpO1xuICAkKHNlYzVXb3JkczIpLmFkZENsYXNzKFwiaDJXb3JkcyBzZWM1V29yZHMyXCIpO1xuXG4gIGxldCBzZWM1UCA9IHNlYzUuZmluZChcIi50ZXh0LWNvbnRhaW5lciBwXCIpO1xuICBsZXQgc2VjNXNwbGl0UCA9IG5ldyBTcGxpdFRleHQoc2VjNVAsIHsgdHlwZTogXCJsaW5lc1wiIH0pO1xuICAvLyBsZXQgc2VjNVdvcmRzUCA9IHNlYzVzcGxpdFAud29yZHM7XG4gIGxldCBzZWM1TGluZXNQID0gc2VjNXNwbGl0UC5saW5lcztcbiAgLy8gJChzZWM1V29yZHNQKS5hZGRDbGFzcygnaDNXb3JkcyBzZWM1V29yZHNQJyk7XG4gICQoc2VjNUxpbmVzUCkuYWRkQ2xhc3MoXCJwTGluZXMgc2VjNUxpbmVzUFwiKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFQ1RJT04gNlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbGV0IHNlYzYgPSAkKFwiI3NlY3Rpb242XCIpO1xuICBsZXQgc2VjNkgyID0gc2VjNi5maW5kKFwiaDJcIik7XG4gIGxldCBzZWM2c3BsaXRIMiA9IG5ldyBTcGxpdFRleHQoc2VjNkgyLCB7IHR5cGU6IFwibGluZXMsd29yZHMsY2hhcnNcIiB9KTtcbiAgbGV0IHNlYzZDaGFyczIgPSBzZWM2c3BsaXRIMi5jaGFycztcbiAgbGV0IHNlYzZXb3JkczIgPSBzZWM2c3BsaXRIMi53b3JkcztcbiAgbGV0IHNlYzZMaW5lczIgPSBzZWM2c3BsaXRIMi5saW5lcztcbiAgJChzZWM2TGluZXMyKS5hZGRDbGFzcyhcImgyTGluZXNcIik7XG4gICQoc2VjNkNoYXJzMikuYWRkQ2xhc3MoXCJoMkNoYXJzIHNlYzZDaGFyczJcIik7XG4gICQoc2VjNldvcmRzMikuYWRkQ2xhc3MoXCJoMldvcmRzIHNlYzZXb3JkczJcIik7XG5cbiAgbGV0IHNlYzZQID0gc2VjNi5maW5kKFwiLnRleHQtY29udGFpbmVyIHBcIik7XG4gIGxldCBzZWM2c3BsaXRQID0gbmV3IFNwbGl0VGV4dChzZWM2UCwgeyB0eXBlOiBcImxpbmVzXCIgfSk7XG4gIC8vIGxldCBzZWM2V29yZHNQID0gc2VjNnNwbGl0UC53b3JkcztcbiAgbGV0IHNlYzZMaW5lc1AgPSBzZWM2c3BsaXRQLmxpbmVzO1xuICAvLyAkKHNlYzZXb3Jkc1ApLmFkZENsYXNzKCdoM1dvcmRzIHNlYzZXb3Jkc1AnKTtcbiAgJChzZWM2TGluZXNQKS5hZGRDbGFzcyhcInBMaW5lcyBzZWM2TGluZXNQXCIpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VDVElPTiA3XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBsZXQgc2VjNyA9ICQoJyNzZWN0aW9uNycpO1xuICAvLyBsZXQgc2VjN0gyID0gc2VjNy5maW5kKCdoMicpO1xuICAvLyBsZXQgc2VjN3NwbGl0SDIgPSBuZXcgU3BsaXRUZXh0KHNlYzdIMiwgeyB0eXBlOiBcImxpbmVzLHdvcmRzLGNoYXJzXCIgfSk7XG4gIC8vIGxldCBzZWM3Q2hhcnMyID0gc2VjN3NwbGl0SDIuY2hhcnM7XG4gIC8vIGxldCBzZWM3V29yZHMyID0gc2VjN3NwbGl0SDIud29yZHM7XG4gIC8vIGxldCBzZWM3TGluZXMyID0gc2VjN3NwbGl0SDIubGluZXM7XG4gIC8vICQoc2VjN0xpbmVzMikuYWRkQ2xhc3MoJ2gyTGluZXMnKTtcbiAgLy8gJChzZWM3Q2hhcnMyKS5hZGRDbGFzcygnaDJDaGFycycpO1xuICAvLyAkKHNlYzdXb3JkczIpLmFkZENsYXNzKCdoMldvcmRzJyk7XG5cbiAgLy8gbGV0IHNlYzdQID0gc2VjNy5maW5kKCcudGV4dC1jb250YWluZXIgcCcpO1xuICAvLyBsZXQgc2VjN3NwbGl0UCA9IG5ldyBTcGxpdFRleHQoc2VjN1AsIHsgdHlwZTogXCJsaW5lc1wiIH0pO1xuICAvLyAvLyBsZXQgc2VjN1dvcmRzUCA9IHNlYzdzcGxpdFAud29yZHM7XG4gIC8vIGxldCBzZWM3TGluZXNQID0gc2VjN3NwbGl0UC5saW5lcztcbiAgLy8gLy8gJChzZWM3V29yZHNQKS5hZGRDbGFzcygnaDNXb3JkcyBzZWM3V29yZHNQJyk7XG4gIC8vICQoc2VjN0xpbmVzUCkuYWRkQ2xhc3MoJ3BMaW5lcyBzZWM3TGluZXNQJyk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRUNUSU9OIDhcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIGxldCBzZWM4ID0gJCgnI3NlY3Rpb244Jyk7XG4gIC8vIGxldCBzZWM4SDIgPSBzZWM4LmZpbmQoJ2gyJyk7XG4gIC8vIGxldCBzZWM4c3BsaXRIMiA9IG5ldyBTcGxpdFRleHQoc2VjOEgyLCB7IHR5cGU6IFwibGluZXMsd29yZHMsY2hhcnNcIiB9KTtcbiAgLy8gbGV0IHNlYzhDaGFyczIgPSBzZWM4c3BsaXRIMi5jaGFycztcbiAgLy8gbGV0IHNlYzhXb3JkczIgPSBzZWM4c3BsaXRIMi53b3JkcztcbiAgLy8gbGV0IHNlYzhMaW5lczIgPSBzZWM4c3BsaXRIMi5saW5lcztcbiAgLy8gJChzZWM4TGluZXMyKS5hZGRDbGFzcygnaDJMaW5lcycpO1xuICAvLyAkKHNlYzhDaGFyczIpLmFkZENsYXNzKCdoMkNoYXJzJyk7XG4gIC8vICQoc2VjOFdvcmRzMikuYWRkQ2xhc3MoJ2gyV29yZHMnKTtcblxuICAvLyBsZXQgc2VjOFAgPSBzZWM4LmZpbmQoJy50ZXh0LWNvbnRhaW5lciBwJyk7XG4gIC8vIGxldCBzZWM4c3BsaXRQID0gbmV3IFNwbGl0VGV4dChzZWM4UCwgeyB0eXBlOiBcImxpbmVzXCIgfSk7XG4gIC8vIC8vIGxldCBzZWM4V29yZHNQID0gc2VjOHNwbGl0UC53b3JkcztcbiAgLy8gbGV0IHNlYzhMaW5lc1AgPSBzZWM4c3BsaXRQLmxpbmVzO1xuICAvLyAvLyAkKHNlYzhXb3Jkc1ApLmFkZENsYXNzKCdoM1dvcmRzIHNlYzhXb3Jkc1AnKTtcbiAgLy8gJChzZWM4TGluZXNQKS5hZGRDbGFzcygncExpbmVzIHNlYzhMaW5lc1AnKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFVFVQIEVMRU1FTlRTXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBnc2FwLnNldCgnLmgyQ2hhcnMnLCB7eTonMS4xZW0nfSk7XG59O1xuIiwiaW1wb3J0IHsgXG4gIHByZUxvYWRlcixcbiAgdmlkTGlua3MsXG4gIG1vYmlsZVZpZExpbmtzLFxuICBnc2FwUmVnaXN0ZXJzLFxuICBjbGlja0V2ZW50cyxcbiAgbW9iaWxlTmF2U2V0dXAsXG4gIGFuaW1hdGVTZWN0aW9uLFxuICBzZWN0aW9uc1NldHVwLFxuICBtb2JpbGVBbmltYXRlU2VjdGlvbixcbiAgbW9iaWxlU2VjdGlvbnNTZXR1cFxufSBmcm9tICcuL2luZGV4LmpzJztcbiBcblxuLy8gJCh3aW5kb3cpLm9uKCdiZWZvcmV1bmxvYWQnLCBmdW5jdGlvbigpIHtcbi8vICAgJCh3aW5kb3cpLnNjcm9sbFRvcCgwKTtcbi8vIH0pO1xuXG53aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICBwcmVMb2FkZXIoKTtcbiAgICBnc2FwUmVnaXN0ZXJzKCk7XG4gICAgXG4gICAgaWYgKHNjcmVlbi53aWR0aCA8PSAxMDI0KXtcbiAgICAgIG1vYmlsZVNlY3Rpb25zU2V0dXAoKTtcbiAgICAgIG1vYmlsZVZpZExpbmtzKCk7XG4gICAgICBtb2JpbGVBbmltYXRlU2VjdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWN0aW9uc1NldHVwKCk7XG4gICAgICB2aWRMaW5rcygpO1xuICAgICAgYW5pbWF0ZVNlY3Rpb24oKTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgXG4gICAgICBcbiAgICAgIFxufSlcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuXG59KTsiXSwic291cmNlUm9vdCI6IiJ9