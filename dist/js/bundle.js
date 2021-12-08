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

  console.log(myScrollHeight);
  var sectionAnim = {
    sectionAnim1: function sectionAnim1() {
      var thisSec = '#section1';
      var thisOverlay = $('#overlay1');
      var charsH2 = $(thisSec).find('.sec1Chars2');
      var charsH3 = $(thisSec).find('.sec1Chars3'); // Background Shape Vars

      var center4L = $(thisSec).find('#center-4L');
      var center4R = $(thisSec).find('#center-4R');
      var center3L = $(thisSec).find('#center-3L');
      var center3R = $(thisSec).find('#center-3R');
      var center2L = $(thisSec).find('#center-2L');
      var center2R = $(thisSec).find('#center-2R');
      var center1 = $(thisSec).find('#top-big');
      var topSmall = $(thisSec).find('#top-small');
      var bottomSmall = $(thisSec).find('#bottom-small');
      var centerSmall = $(thisSec).find('#center-small');
      var topLeftSmall = $(thisSec).find('#top-left-small');
      var topRighttSmall = $(thisSec).find('#top-right-small');
      var bottomLeftSmall = $(thisSec).find('#bottom-left-small');
      var bottomRighttSmall = $(thisSec).find('#bottom-right-small');
      var smallsGroup = [topSmall, bottomSmall, centerSmall, topLeftSmall, topRighttSmall, bottomLeftSmall, bottomRighttSmall]; // Arrow Pieces

      var downArrow = $(thisSec).find('#down-arrow');
      var downArrowLine = $(thisSec).find('#down-arrow-line');
      var downArrowPoint = $(thisSec).find('#down-arrow-point');
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
        y: '1.01em'
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
      var thisSec = $('#section2');
      var charsH2 = $(thisSec).find('.h2Chars');
      var linesP = $(thisSec).find('.pLines'); // Background Shape Vars

      var center4L = $(thisSec).find('#center-4L');
      var center4R = $(thisSec).find('#center-4R');
      var center3L = $(thisSec).find('#center-3L');
      var center3R = $(thisSec).find('#center-3R');
      var center2L = $(thisSec).find('#center-2L');
      var center2R = $(thisSec).find('#center-2R');
      var center1 = $(thisSec).find('#top-big');
      var topSmall = $(thisSec).find('#top-small');
      var bottomSmall = $(thisSec).find('#bottom-small');
      var centerSmall = $(thisSec).find('#center-small');
      var topLeftSmall = $(thisSec).find('#top-left-small');
      var topRighttSmall = $(thisSec).find('#top-right-small');
      var bottomLeftSmall = $(thisSec).find('#bottom-left-small');
      var bottomRighttSmall = $(thisSec).find('#bottom-right-small');
      var smallsGroup = [topSmall, bottomSmall, centerSmall, topLeftSmall, topRighttSmall, bottomLeftSmall, bottomRighttSmall]; // Arrow Pieces

      var downArrow = $(thisSec).find('#down-arrow');
      var downArrowLine = $(thisSec).find('#down-arrow-line');
      var downArrowPoint = $(thisSec).find('#down-arrow-point');
      var sectionText = $(thisSec).find('.down-arrow-text');
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

      tl.to('.header-logo', {
        duration: 0.9,
        width: 190,
        ease: "sine.out"
      }, "scrollInAll+=0.1");
      tl.add(lineTL, "scrollInAll");
      tl.add(contentTL, "scrollInAll+=0.75");
      tl.add(arrowTL, "scrollInAll+=0.7");
      return tl;
    },
    sectionAnim3: function sectionAnim3() {
      var thisSec = $('#section3');
      var thisBack = $('#background3');
      var center4L = $(thisSec).find('#center-4L');
      var center4R = $(thisSec).find('#center-4R');
      var center3L = $(thisSec).find('#center-3L');
      var center3R = $(thisSec).find('#center-3R');
      var center2L = $(thisSec).find('#center-2L');
      var center2R = $(thisSec).find('#center-2R');
      var bottomSmall = $(thisSec).find('#bottom-small'); // Arrow Pieces

      var downArrow = $(thisSec).find('#down-arrow');
      var downArrowLine = $(thisSec).find('#down-arrow-line');
      var downArrowPoint = $(thisSec).find('#down-arrow-point');
      var sectionText = $(thisSec).find('.down-arrow-text');
      var tl = gsap.timeline({
        delay: 0.3,
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
        },
        onReverseComplete: function onReverseComplete() {
          // Set the Background Back Behind
          gsap.set(thisBack, {
            zIndex: 99
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
          duration: 0.6,
          ease: "back.out(.2)"
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
        opacity: 1,
        zIndex: 110
      }); // Set section z-index by section number

      tl.fromTo(thisSec, {
        zIndex: 13
      }, {
        zIndex: 1003
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
      }, "scrollIn"); // Animate Content

      contentTL.fromTo(bottomSmall, {
        drawSVG: "50% 50%"
      }, {
        drawSVG: "0% 100%"
      }, "scrollIn");
      contentTL.fromTo('.videoArea', {
        height: 0
      }, {
        height: 'auto'
      }, "scrollIn+=0.2"); // Animate Arrow

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
      }, "scrollIn+=0.175"); // Build Master TL TL

      tl.add(lineTL, "scrollInAll");
      tl.fromTo(thisBack, {
        y: '-100%'
      }, {
        y: 0
      }, "scrollInAll+=0.55");
      tl.add(contentTL, "scrollInAll+=0.75");
      tl.add(arrowTL, "scrollInAll+=1");
      return tl;
    },
    sectionAnim4: function sectionAnim4() {
      var thisSec = $('#section4');
      var thisBack = $('#background4');
      var charsH2 = $(thisSec).find('.h2Chars');
      var linesP = $(thisSec).find('.pLines');
      var soloCenter2 = $(thisSec).find('#solo-center-2');
      var soloCenter1 = $(thisSec).find('#solo-center-1');
      var bottomSmall = $(thisSec).find('#bottom-small'); // Arrow Pieces

      var downArrow = $(thisSec).find('#down-arrow');
      var downArrowLine = $(thisSec).find('#down-arrow-line');
      var downArrowPoint = $(thisSec).find('#down-arrow-point');
      var sectionText = $(thisSec).find('.down-arrow-text');
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
    sectionAnim5: function sectionAnim5() {
      var thisSec = $('#section5');
      var thisBack = $('#background5');
      var thisOverlay = $('#overlay5');
      var charsH2 = $(thisSec).find('.h2Chars');
      var linesP = $(thisSec).find('.pLines');
      var center4L = $(thisSec).find('#center-4L');
      var center4R = $(thisSec).find('#center-4R');
      var center3L = $(thisSec).find('#center-3L');
      var center3R = $(thisSec).find('#center-3R');
      var center2L = $(thisSec).find('#center-2L');
      var center2R = $(thisSec).find('#center-2R'); // Arrow Pieces

      var downArrow = $(thisSec).find('#down-arrow');
      var downArrowLine = $(thisSec).find('#down-arrow-line');
      var downArrowPoint = $(thisSec).find('#down-arrow-point');
      var sectionText = $(thisSec).find('.down-arrow-text');
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
      lineTL.fromTo('#honeyClipEnd', {
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

      arrowTL.fromTo('#bottom-small-2', {
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
    sectionAnim6: function sectionAnim6() {
      var thisSec = $('#section6');
      var thisBack = $('#background6');
      var charsH2 = $(thisSec).find('.h2Chars');
      var linesP = $(thisSec).find('.pLines');
      var thisOverlay = $('#overlay6');
      var center4L = $(thisSec).find('#center-4L');
      var center4R = $(thisSec).find('#center-4R');
      var center3L = $(thisSec).find('#center-3L');
      var center3R = $(thisSec).find('#center-3R');
      var center2L = $(thisSec).find('#center-2L');
      var center2R = $(thisSec).find('#center-2R');
      var bottomSmall = $(thisSec).find('#bottom-small'); // Arrow Pieces

      var downArrow = $(thisSec).find('#down-arrow');
      var downArrowLine = $(thisSec).find('#down-arrow-line');
      var downArrowPoint = $(thisSec).find('#down-arrow-point');
      var sectionText = $(thisSec).find('.down-arrow-text');
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
    sectionAnim7: function sectionAnim7() {
      var thisSec = $('#section7');
      var thisBack = $('#background7');
      var charsH2 = $(thisSec).find('.h2Chars');
      var linesP = $(thisSec).find('.pLines');
      var thisOverlay = $('#overlay7');
      var center4L = $(thisSec).find('#center-4L');
      var center4R = $(thisSec).find('#center-4R');
      var center3L = $(thisSec).find('#center-3L');
      var center3R = $(thisSec).find('#center-3R');
      var center2L = $(thisSec).find('#center-2L');
      var center2R = $(thisSec).find('#center-2R');
      var topSmall = $(thisSec).find('#top-small');
      var bottomSmall = $(thisSec).find('#bottom-small');
      var centerSmall = $(thisSec).find('#center-small');
      var topLeftSmall = $(thisSec).find('#top-left-small');
      var topRighttSmall = $(thisSec).find('#top-right-small');
      var bottomLeftSmall = $(thisSec).find('#bottom-left-small');
      var bottomRighttSmall = $(thisSec).find('#bottom-right-small');
      var imgContainer = $(thisSec).find('.imageContainer');
      var subImg = $(imgContainer).find('img'); // Arrow Pieces

      var downArrow = $(thisSec).find('#down-arrow');
      var downArrowLine = $(thisSec).find('#down-arrow-line');
      var downArrowPoint = $(thisSec).find('#down-arrow-point');
      var sectionText = $(thisSec).find('.down-arrow-text');
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
      contentTL.fromTo('#partnerClipEnd', {
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
      tl.fromTo('.footerArea', {
        y: '100%'
      }, {
        y: 0,
        duration: 0.7,
        ease: 'back.out(0.5)'
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

  sectionAnim['sectionAnim1']().play(); // Fire An Animation From Above for Each Section

  var sectionTrig = function sectionTrig(myCount) {
    // Add An Extra Scroll for Buzz On Bees in Section 4, 5, 6 +1 total each time
    if (myCount === 1) {
      var startHeight = 0;
    } else if (myCount === 2) {
      var startHeight = myScrollHeight * (myCount - 1) - myScrollOffset;
    } else if (myCount === 3) {
      var startHeight = myScrollHeight * (myCount - 1) - myScrollOffset;
    } else if (myCount === 4) {
      var startHeight = myScrollHeight * (myCount - 1) - myScrollOffset;
    } else if (myCount === 5) {
      var startHeight = myScrollHeight * myCount - myScrollOffset;
    } else if (myCount === 6) {
      var startHeight = myScrollHeight * (myCount + 1) - myScrollOffset;
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
      var endHeight = myScrollHeight * myCount - myScrollOffset;
    } else if (myCount === 4) {
      var endHeight = myScrollHeight * (myCount + 1) - myScrollOffset;
    } else if (myCount === 5) {
      var endHeight = myScrollHeight * (myCount + 2) - myScrollOffset;
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
          sectionAnim['sectionAnim' + myCount]().play(); // alert(myCount+' section entered');
        }
      },
      onLeave: function onLeave() {
        if (myCount < 7) {
          gsap.set(document.body, {
            overflow: "hidden"
          });
          sectionAnim['sectionAnim' + myCount]().reverse(0); // alert(myCount+' section left');
        }
      },
      onEnterBack: function onEnterBack() {
        if (myCount < 7) {
          gsap.set(document.body, {
            overflow: "hidden"
          });
          sectionAnim['sectionAnim' + myCount]().play(); // alert(myCount+' section back again');
        }
      },
      onLeaveBack: function onLeaveBack() {
        if (myCount > 1) {
          gsap.set(document.body, {
            overflow: "hidden"
          });
          sectionAnim['sectionAnim' + myCount]().reverse(0); // alert(myCount+' section left again');
        }
      }
    });
  }; // Call The Trigger On Every Section
  // Animation triggers are calculated in the function


  var i = 1;
  $('section').each(function () {
    sectionTrig(i);
    i++;
  }); // Single Buzz on Bees Sections
  // Buzz Animation 5

  var buzzIn4 = function buzzIn4() {
    var buzzBlock = $('#section4').find('.buzzOnBeesBlock');
    var buzzWidth = buzzBlock.outerWidth();
    var tl = new gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.5,
        ease: 'back.out(0.25);'
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

  buzzTrig4(4); // Buzz Animation 5

  var buzzIn5 = function buzzIn5() {
    var buzzBlock = $('#section5').find('.buzzOnBeesBlock');
    var buzzWidth = buzzBlock.outerWidth();
    var tl = new gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.5,
        ease: 'back.out(0.25);'
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

  buzzTrig5(5); // Buzz Animation 6

  var buzzIn6 = function buzzIn6() {
    var buzzBlock = $('#section6').find('.buzzOnBeesBlock');
    var buzzWidth = buzzBlock.outerWidth();
    var tl = new gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.5,
        ease: 'back.out(0.25);'
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

  buzzTrig6(6);
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
    e.preventDefault();
    console.log('hash it out'); // IF IT"S MOBILE / IPAD OR SMALLER

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
  gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin, MorphSVGPlugin);
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
  var thisSrc = $('.iframeHolder').attr('data-desktop-vid');
  console.log(thisSrc);
  $('.iframeEmpty').attr('src', 'https://player.vimeo.com/video/' + thisSrc + '?h=25f334e956&title=0&byline=0&portrait=0');
};
var mobileVidLinks = function mobileVidLinks() {
  var thisSrc = $('.iframeHolder').attr('data-mobile-vid');
  console.log(thisSrc);
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
  var totalSections = $('section').length;
  var totalBuzzOn = $('.buzzOnBeesBlock').length;
  var windowHeight = Math.round(window.innerHeight);

  if (screen.width <= 1024) {
    var myScrollHeight = windowHeight * 1.5;
  } else {
    var myScrollHeight = windowHeight / 2;
  }

  var fullHeight = myScrollHeight * (totalSections + totalBuzzOn) + windowHeight - 1;
  var buzzBlock = $('.buzzOnBeesBlock');
  var buzzWidth = buzzBlock.outerWidth(); // ---------------------------------------------------------------
  // GLOBAL
  // ---------------------------------------------------------------
  // Set Overall Scroll Height

  gsap.set('.home-page', {
    height: fullHeight
  });
  gsap.set(document.body, {
    overflow: "hidden"
  }); // Hide All Lines

  gsap.set($('.home-page').find('path'), {
    drawSVG: "50% 50%"
  });
  gsap.set($('.home-page').find('polyline'), {
    drawSVG: "50% 50%"
  });
  gsap.set($('.home-page').find('line'), {
    drawSVG: "50% 50%"
  });
  gsap.set($('.home-page').find('#down-arrow line'), {
    drawSVG: "100% 100%"
  }); // Set 1st Background Image as Visible

  gsap.set('#background1', {
    opacity: 1,
    zIndex: 101
  }); // Set Buzz On Bees to Hidden

  gsap.set(buzzBlock, {
    x: buzzWidth
  }); // ---------------------------------------------------------------
  // SECTION 1
  // ---------------------------------------------------------------

  var sec1 = $('#section1');
  var sec1H2 = sec1.find('h2');
  var sec1splitH2 = new SplitText(sec1H2, {
    type: "lines,words,chars"
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
    type: "lines,words,chars"
  });
  var sec2Chars2 = sec2splitH2.chars;
  var sec2Words2 = sec2splitH2.words;
  var sec2Lines2 = sec2splitH2.lines;
  $(sec2Lines2).addClass('h2Lines');
  $(sec2Chars2).addClass('h2Chars sec2Chars2');
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
    type: "lines,words,chars"
  });
  var sec4Chars2 = sec4splitH2.chars;
  var sec4Words2 = sec4splitH2.words;
  var sec4Lines2 = sec4splitH2.lines;
  $(sec4Lines2).addClass('h2Lines');
  $(sec4Chars2).addClass('h2Chars sec4Chars2');
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
    type: "lines,words,chars"
  });
  var sec5Chars2 = sec5splitH2.chars;
  var sec5Words2 = sec5splitH2.words;
  var sec5Lines2 = sec5splitH2.lines;
  $(sec5Lines2).addClass('h2Lines');
  $(sec5Chars2).addClass('h2Chars sec5Chars2');
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
    type: "lines,words,chars"
  });
  var sec6Chars2 = sec6splitH2.chars;
  var sec6Words2 = sec6splitH2.words;
  var sec6Lines2 = sec6splitH2.lines;
  $(sec6Lines2).addClass('h2Lines');
  $(sec6Chars2).addClass('h2Chars sec6Chars2');
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
    type: "lines,words,chars"
  });
  var sec7Chars2 = sec7splitH2.chars;
  var sec7Words2 = sec7splitH2.words;
  var sec7Lines2 = sec7splitH2.lines;
  $(sec7Lines2).addClass('h2Lines');
  $(sec7Chars2).addClass('h2Chars');
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
    type: "lines,words,chars"
  });
  var sec8Chars2 = sec8splitH2.chars;
  var sec8Words2 = sec8splitH2.words;
  var sec8Lines2 = sec8splitH2.lines;
  $(sec8Lines2).addClass('h2Lines');
  $(sec8Chars2).addClass('h2Chars');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hbmltYXRlU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9jbGlja0V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9nc2FwUmVnaXN0ZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21lbnVUb2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbW9iaWxlQW5pbWF0ZVNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbW9iaWxlU2VjdGlvbnNTZXR1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9wYWdlU2V0dXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2VjdGlvbnNTZXR1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy93aW5kb3dMb2FkLmpzIl0sIm5hbWVzIjpbImFuaW1hdGVTZWN0aW9uIiwid2luZG93SGVpZ2h0IiwiTWF0aCIsInJvdW5kIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJzY3JlZW4iLCJ3aWR0aCIsIm15U2Nyb2xsSGVpZ2h0IiwibXlTY3JvbGxPZmZzZXQiLCJjb25zb2xlIiwibG9nIiwic2VjdGlvbkFuaW0iLCJzZWN0aW9uQW5pbTEiLCJ0aGlzU2VjIiwidGhpc092ZXJsYXkiLCIkIiwiY2hhcnNIMiIsImZpbmQiLCJjaGFyc0gzIiwiY2VudGVyNEwiLCJjZW50ZXI0UiIsImNlbnRlcjNMIiwiY2VudGVyM1IiLCJjZW50ZXIyTCIsImNlbnRlcjJSIiwiY2VudGVyMSIsInRvcFNtYWxsIiwiYm90dG9tU21hbGwiLCJjZW50ZXJTbWFsbCIsInRvcExlZnRTbWFsbCIsInRvcFJpZ2h0dFNtYWxsIiwiYm90dG9tTGVmdFNtYWxsIiwiYm90dG9tUmlnaHR0U21hbGwiLCJzbWFsbHNHcm91cCIsImRvd25BcnJvdyIsImRvd25BcnJvd0xpbmUiLCJkb3duQXJyb3dQb2ludCIsInRsIiwiZ3NhcCIsInRpbWVsaW5lIiwicGF1c2VkIiwiZGVmYXVsdHMiLCJkdXJhdGlvbiIsImVhc2UiLCJvbkNvbXBsZXRlIiwic2V0IiwiZG9jdW1lbnQiLCJib2R5Iiwib3ZlcmZsb3ciLCJsaW5lVEwiLCJhcnJvd1RMIiwicmVwZWF0IiwieW95byIsInRvIiwieSIsIm9uUmV2ZXJzZUNvbXBsZXRlIiwia2lsbFR3ZWVuc09mIiwiY29udGVudFRMIiwiekluZGV4IiwiZnJvbVRvIiwiZHJhd1NWRyIsIngiLCJvcGFjaXR5Iiwic3RhZ2dlciIsImFtb3VudCIsImZyb20iLCJhZGQiLCJzZWN0aW9uQW5pbTIiLCJsaW5lc1AiLCJzZWN0aW9uVGV4dCIsImRlbGF5Iiwic2VjdGlvbkFuaW0zIiwidGhpc0JhY2siLCJoZWlnaHQiLCJzZWN0aW9uQW5pbTQiLCJzb2xvQ2VudGVyMiIsInNvbG9DZW50ZXIxIiwic2VjdGlvbkFuaW01IiwibW9ycGhTVkciLCJzaGFwZSIsInNlY3Rpb25BbmltNiIsInNlY3Rpb25BbmltNyIsImltZ0NvbnRhaW5lciIsInN1YkltZyIsInBsYXkiLCJzZWN0aW9uVHJpZyIsIm15Q291bnQiLCJzdGFydEhlaWdodCIsImVuZEhlaWdodCIsIlNjcm9sbFRyaWdnZXIiLCJjcmVhdGUiLCJzdGFydCIsImVuZCIsInNjcnViIiwib25FbnRlciIsIm9uTGVhdmUiLCJyZXZlcnNlIiwib25FbnRlckJhY2siLCJvbkxlYXZlQmFjayIsImkiLCJlYWNoIiwiYnV6ekluNCIsImJ1enpCbG9jayIsImJ1enpXaWR0aCIsIm91dGVyV2lkdGgiLCJidXp6VHJpZzQiLCJidXp6SW41IiwiYnV6elRyaWc1IiwiYnV6ekluNiIsImJ1enpUcmlnNiIsImNsaWNrRXZlbnRzIiwibWVudVRvZ2dsZVRMIiwibWVudVRvZ2dsZSIsInJldmVyc2VkIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJzbW9vdGhTY3JvbGxpbmciLCJnc2FwUmVnaXN0ZXJzIiwicmVnaXN0ZXJQbHVnaW4iLCJTcGxpdFRleHQiLCJEcmF3U1ZHUGx1Z2luIiwiTW9ycGhTVkdQbHVnaW4iLCJsZWZ0Iiwicm90YXRpb24iLCJ0cmFuc2Zvcm1PcmlnaW4iLCJtb2JpbGVBbmltYXRlU2VjdGlvbiIsInNlY3Rpb25MaW5lcyIsInNlY0Fycm93IiwibGluZXMiLCJ0cmlnZ2VyIiwibGluZXNJbiIsInRoZXNlTGluZXMiLCJtb2JpbGVTZWN0aW9uc1NldHVwIiwidG90YWxTZWN0aW9ucyIsImxlbmd0aCIsInRvdGFsQnV6ek9uIiwiZnVsbEhlaWdodCIsInNlYzFMaW5lcyIsInNlYzFBcnJvdyIsInNlYzEiLCJzZWMxSDIiLCJzZWMxc3BsaXRIMiIsInR5cGUiLCJzZWMxQ2hhcnMyIiwiY2hhcnMiLCJzZWMxV29yZHMyIiwid29yZHMiLCJzZWMxTGluZXMyIiwiYWRkQ2xhc3MiLCJzZWMxSDMiLCJzZWMxc3BsaXRIMyIsInNlYzFDaGFyczMiLCJzZWMxV29yZHMzIiwic2VjMiIsInNlYzJIMiIsInNlYzJzcGxpdEgyIiwic2VjMldvcmRzMiIsInNlYzJMaW5lczIiLCJzZWMyUCIsInNlYzJzcGxpdFAiLCJzZWMyTGluZXNQIiwic2VjNCIsInNlYzRIMiIsInNlYzRzcGxpdEgyIiwic2VjNFdvcmRzMiIsInNlYzRMaW5lczIiLCJzZWM0UCIsInNlYzRzcGxpdFAiLCJzZWM0TGluZXNQIiwic2VjNSIsInNlYzVIMiIsInNlYzVzcGxpdEgyIiwic2VjNVdvcmRzMiIsInNlYzVMaW5lczIiLCJzZWM1UCIsInNlYzVzcGxpdFAiLCJzZWM1TGluZXNQIiwic2VjNiIsInNlYzZIMiIsInNlYzZzcGxpdEgyIiwic2VjNldvcmRzMiIsInNlYzZMaW5lczIiLCJzZWM2UCIsInNlYzZzcGxpdFAiLCJzZWM2TGluZXNQIiwic2VjNyIsInNlYzdIMiIsInNlYzdzcGxpdEgyIiwic2VjN1dvcmRzMiIsInNlYzdMaW5lczIiLCJzZWM3UCIsInNlYzdzcGxpdFAiLCJzZWM3TGluZXNQIiwic2VjOCIsInNlYzhIMiIsInNlYzhzcGxpdEgyIiwic2VjOFdvcmRzMiIsInNlYzhMaW5lczIiLCJzZWM4UCIsInNlYzhzcGxpdFAiLCJzZWM4TGluZXNQIiwicHJlTG9hZGVyIiwicmVtb3ZlIiwic2NhbGUiLCJ2aWRMaW5rcyIsInRoaXNTcmMiLCJhdHRyIiwibW9iaWxlVmlkTGlua3MiLCJ0aGVMaW5rIiwidGFyZ2V0IiwiaGVhZGVySGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJzY3JvbGxUbyIsIm1vYmlsZU5hdlNldHVwIiwic2VjdGlvbnNTZXR1cCIsInNlYzJDaGFyczIiLCJzZWM0Q2hhcnMyIiwic2VjNUNoYXJzMiIsInNlYzZDaGFyczIiLCJzZWM3Q2hhcnMyIiwic2VjOENoYXJzMiIsIm9uYmVmb3JldW5sb2FkIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFD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UjlNLG9FQUFjO0FBQ2Y7QUFNSixDQWxCRDtBQW9CQUksTUFBTSxDQUFDNE4sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBVyxDQUU1QyxDQUZELEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICcuL2NvbXBvbmVudHMvd2luZG93TG9hZC5qcyc7IiwiZXhwb3J0IGxldCBhbmltYXRlU2VjdGlvbiA9ICgpID0+IHtcbiAgXG4gIGxldCB3aW5kb3dIZWlnaHQgPSBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIGlmIChzY3JlZW4ud2lkdGggPD0gMTAyNCl7XG4gICAgdmFyIG15U2Nyb2xsSGVpZ2h0ID0gd2luZG93SGVpZ2h0KjI7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG15U2Nyb2xsSGVpZ2h0ID0gd2luZG93SGVpZ2h0LzI7XG4gIH1cbiAgbGV0IG15U2Nyb2xsT2Zmc2V0ID0gMDtcbiAgLy8gR2xvYmFsIHZhciBmb3IgYW5pbWF0aW9ucyAvIEFjY2VzcyB2aWEgc2VjdGlvbiB0cmlnIGxvb3AgXG5cbiAgY29uc29sZS5sb2cobXlTY3JvbGxIZWlnaHQpO1xuICBsZXQgc2VjdGlvbkFuaW0gPSB7XG5cbiAgICBzZWN0aW9uQW5pbTEgOiAoKSA9PiB7XG5cbiAgICAgIGxldCB0aGlzU2VjID0gKCcjc2VjdGlvbjEnKTtcbiAgICAgIGxldCB0aGlzT3ZlcmxheSA9ICQoJyNvdmVybGF5MScpO1xuICAgICAgbGV0IGNoYXJzSDIgPSAkKHRoaXNTZWMpLmZpbmQoJy5zZWMxQ2hhcnMyJyk7XG4gICAgICBsZXQgY2hhcnNIMyA9ICQodGhpc1NlYykuZmluZCgnLnNlYzFDaGFyczMnKTtcbiAgICAgIC8vIEJhY2tncm91bmQgU2hhcGUgVmFyc1xuICAgICAgbGV0IGNlbnRlcjRMID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTRMJyk7XG4gICAgICBsZXQgY2VudGVyNFIgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItNFInKTtcbiAgICAgIGxldCBjZW50ZXIzTCA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci0zTCcpO1xuICAgICAgbGV0IGNlbnRlcjNSID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTNSJyk7XG4gICAgICBsZXQgY2VudGVyMkwgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItMkwnKTtcbiAgICAgIGxldCBjZW50ZXIyUiA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci0yUicpO1xuICAgICAgbGV0IGNlbnRlcjEgPSAkKHRoaXNTZWMpLmZpbmQoJyN0b3AtYmlnJyk7XG4gICAgICBsZXQgdG9wU21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoJyN0b3Atc21hbGwnKTtcbiAgICAgIGxldCBib3R0b21TbWFsbCA9ICQodGhpc1NlYykuZmluZCgnI2JvdHRvbS1zbWFsbCcpO1xuICAgICAgbGV0IGNlbnRlclNtYWxsID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLXNtYWxsJyk7XG4gICAgICBsZXQgdG9wTGVmdFNtYWxsID0gJCh0aGlzU2VjKS5maW5kKCcjdG9wLWxlZnQtc21hbGwnKTtcbiAgICAgIGxldCB0b3BSaWdodHRTbWFsbCA9ICQodGhpc1NlYykuZmluZCgnI3RvcC1yaWdodC1zbWFsbCcpO1xuICAgICAgbGV0IGJvdHRvbUxlZnRTbWFsbCA9ICQodGhpc1NlYykuZmluZCgnI2JvdHRvbS1sZWZ0LXNtYWxsJyk7XG4gICAgICBsZXQgYm90dG9tUmlnaHR0U21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoJyNib3R0b20tcmlnaHQtc21hbGwnKTtcbiAgICAgIGxldCBzbWFsbHNHcm91cCA9IFt0b3BTbWFsbCwgYm90dG9tU21hbGwsIGNlbnRlclNtYWxsLCB0b3BMZWZ0U21hbGwsIHRvcFJpZ2h0dFNtYWxsLCBib3R0b21MZWZ0U21hbGwsIGJvdHRvbVJpZ2h0dFNtYWxsXTtcbiAgICAgIC8vIEFycm93IFBpZWNlc1xuICAgICAgbGV0IGRvd25BcnJvdyA9ICQodGhpc1NlYykuZmluZCgnI2Rvd24tYXJyb3cnKTtcbiAgICAgIGxldCBkb3duQXJyb3dMaW5lID0gJCh0aGlzU2VjKS5maW5kKCcjZG93bi1hcnJvdy1saW5lJyk7XG4gICAgICBsZXQgZG93bkFycm93UG9pbnQgPSAkKHRoaXNTZWMpLmZpbmQoJyNkb3duLWFycm93LXBvaW50Jyk7XG5cbiAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjMsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIFJlbGVhc2UgVGhlIFNjcm9sbCBMb2NrXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgZ3NhcC5zZXQoZG9jdW1lbnQuYm9keSwge292ZXJmbG93OiBcImF1dG9cIn0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbGV0IGxpbmVUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuOCxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGxldCBhcnJvd1RMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246MC4xNSxcbiAgICAgICAgICBlYXNlOlwibm9uZVwiXG4gICAgICAgIH0sIFxuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgICAgIC8vIEJvdW5jZSBUaGUgRG93biBBcnJvd1xuICAgICAgICAgIGdzYXAudGltZWxpbmUoe3JlcGVhdDotMSwgeW95bzp0cnVlfSkudG8oZG93bkFycm93LCB7eTotNCwgZHVyYXRpb246MSwgZWFzZTpcIm5vbmVcIn0pO1xuICAgICAgICB9LFxuICAgICAgICBvblJldmVyc2VDb21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAvLyBTdG9wIEJvdW5jaW4gVGhlIERvd24gQXJyb3cgYW5kIFJlc2V0IGl0J3MgWSBwb3NpdGlvblxuICAgICAgICAgIGdzYXAua2lsbFR3ZWVuc09mKGRvd25BcnJvdyk7XG4gICAgICAgICAgZ3NhcC5zZXQoZG93bkFycm93LCB7eTowfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBsZXQgY29udGVudFRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246MC40LFxuICAgICAgICAgIGVhc2U6XCJiYWNrLm91dCgxLjUpXCJcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIC8vIFNldCBiYWNrZ3JvdW5kIHotaW5kZXggYnkgc2VjdGlvbiBudW1iZXIgLyBTZWN0aW9uIDIgaGFzIG5vIGJhY2sgLyBTZWN0aW9uIDMgaXMgei1pbmRleCAxMTAgdG8gc3RheSBhYm92ZSBhbGxcbiAgICAgIHRsLnNldCh0aGlzT3ZlcmxheSwge3pJbmRleDoxMDF9KTtcbiAgICAgIC8vIFNldCBzZWN0aW9uIHotaW5kZXggYnkgc2VjdGlvbiBudW1iZXJcbiAgICAgIHRsLmZyb21Ubyh0aGlzU2VjLCB7ekluZGV4OjEzfSx7ekluZGV4OjEwMDF9KTtcbiAgICAgIFxuICAgICAgLy8gQW5pbWF0ZSBMaW5lc1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXI0TCwge2RyYXdTVkc6XCIwJSAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXI0Uiwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyM0wsIHtkcmF3U1ZHOlwiMCUgMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyM1IsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjJMLCB7ZHJhd1NWRzpcIjAlIDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjJSLCB7ZHJhd1NWRzpcIjEwMCUgMTAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXIxLCB7ZHJhd1NWRzpcIjUwJSA1MCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwiLCBkdXJhdGlvbjowLjd9LCBcInNjcm9sbEluKz0wLjFcIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKHNtYWxsc0dyb3VwLCB7ZHJhd1NWRzpcIjUwJSA1MCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwiLCBkdXJhdGlvbjowLjZ9LCBcInNjcm9sbEluKz0wLjJcIik7XG4gICAgICBcbiAgICAgIC8vIEFuaW1hdGUgQ29udGVudFxuICAgICAgY29udGVudFRMLmZyb21UbyhjaGFyc0gyLCBcbiAgICAgICAge3g6LTIwLCBvcGFjaXR5OjB9LFxuICAgICAgICB7eDowLCBvcGFjaXR5OjEsIHN0YWdnZXI6e2Ftb3VudDowLjV9XG4gICAgICB9LCBcImNvbnRlbnRcIik7XG4gICAgICBjb250ZW50VEwuZnJvbVRvKGNoYXJzSDMsIFxuICAgICAgICB7eTonMS4wMWVtJ30sXG4gICAgICAgIHt5OjAsIHN0YWdnZXI6IHthbW91bnQ6MC4yLCBmcm9tOlwiY2VudGVyXCJ9XG4gICAgICB9LCBcImNvbnRlbnQrPTAuMzVcIik7XG4gICAgICBcbiAgICAgIC8vIEFuaW1hdGUgQXJyb3dcbiAgICAgIGFycm93VEwuZnJvbVRvKGRvd25BcnJvd0xpbmUsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBhcnJvd1RMLmZyb21Ubyhkb3duQXJyb3dQb2ludCwge2RyYXdTVkc6XCI1MCUgNTAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW4rPTAuMTQ1XCIpO1xuICAgICAgXG4gICAgICAvLyBCdWlsZCBNYXN0ZXIgVExUTFxuICAgICAgdGwuZnJvbVRvKHRoaXNPdmVybGF5LCB7b3BhY2l0eTowfSwge29wYWNpdHk6MC42NX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5hZGQobGluZVRMLCBcInNjcm9sbEluQWxsKz0wLjNcIik7XG4gICAgICB0bC5hZGQoY29udGVudFRMLCBcInNjcm9sbEluQWxsKz0wLjhcIik7XG4gICAgICB0bC5hZGQoYXJyb3dUTCwgXCJzY3JvbGxJbkFsbCs9MS40XCIpO1xuICAgICAgICAgICAgXG4gICAgICByZXR1cm4gdGw7XG4gICAgfSxcblxuICAgIHNlY3Rpb25BbmltMiA6ICgpID0+IHtcbiAgICAgIGxldCB0aGlzU2VjID0gJCgnI3NlY3Rpb24yJyk7XG4gICAgICBsZXQgY2hhcnNIMiA9ICQodGhpc1NlYykuZmluZCgnLmgyQ2hhcnMnKTtcbiAgICAgIGxldCBsaW5lc1AgPSAkKHRoaXNTZWMpLmZpbmQoJy5wTGluZXMnKTtcbiAgICAgIC8vIEJhY2tncm91bmQgU2hhcGUgVmFyc1xuICAgICAgbGV0IGNlbnRlcjRMID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTRMJyk7XG4gICAgICBsZXQgY2VudGVyNFIgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItNFInKTtcbiAgICAgIGxldCBjZW50ZXIzTCA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci0zTCcpO1xuICAgICAgbGV0IGNlbnRlcjNSID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTNSJyk7XG4gICAgICBsZXQgY2VudGVyMkwgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItMkwnKTtcbiAgICAgIGxldCBjZW50ZXIyUiA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci0yUicpO1xuICAgICAgbGV0IGNlbnRlcjEgPSAkKHRoaXNTZWMpLmZpbmQoJyN0b3AtYmlnJyk7XG4gICAgICBsZXQgdG9wU21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoJyN0b3Atc21hbGwnKTtcbiAgICAgIGxldCBib3R0b21TbWFsbCA9ICQodGhpc1NlYykuZmluZCgnI2JvdHRvbS1zbWFsbCcpO1xuICAgICAgbGV0IGNlbnRlclNtYWxsID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLXNtYWxsJyk7XG4gICAgICBsZXQgdG9wTGVmdFNtYWxsID0gJCh0aGlzU2VjKS5maW5kKCcjdG9wLWxlZnQtc21hbGwnKTtcbiAgICAgIGxldCB0b3BSaWdodHRTbWFsbCA9ICQodGhpc1NlYykuZmluZCgnI3RvcC1yaWdodC1zbWFsbCcpO1xuICAgICAgbGV0IGJvdHRvbUxlZnRTbWFsbCA9ICQodGhpc1NlYykuZmluZCgnI2JvdHRvbS1sZWZ0LXNtYWxsJyk7XG4gICAgICBsZXQgYm90dG9tUmlnaHR0U21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoJyNib3R0b20tcmlnaHQtc21hbGwnKTtcbiAgICAgIGxldCBzbWFsbHNHcm91cCA9IFt0b3BTbWFsbCwgYm90dG9tU21hbGwsIGNlbnRlclNtYWxsLCB0b3BMZWZ0U21hbGwsIHRvcFJpZ2h0dFNtYWxsLCBib3R0b21MZWZ0U21hbGwsIGJvdHRvbVJpZ2h0dFNtYWxsXTtcbiAgICAgIC8vIEFycm93IFBpZWNlc1xuICAgICAgbGV0IGRvd25BcnJvdyA9ICQodGhpc1NlYykuZmluZCgnI2Rvd24tYXJyb3cnKTtcbiAgICAgIGxldCBkb3duQXJyb3dMaW5lID0gJCh0aGlzU2VjKS5maW5kKCcjZG93bi1hcnJvdy1saW5lJyk7XG4gICAgICBsZXQgZG93bkFycm93UG9pbnQgPSAkKHRoaXNTZWMpLmZpbmQoJyNkb3duLWFycm93LXBvaW50Jyk7XG4gICAgICBsZXQgc2VjdGlvblRleHQgPSAkKHRoaXNTZWMpLmZpbmQoJy5kb3duLWFycm93LXRleHQnKTtcbiAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWxheTowLjY1LFxuICAgICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjMsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIFJlbGVhc2UgVGhlIFNjcm9sbCBMb2NrXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgZ3NhcC5zZXQoZG9jdW1lbnQuYm9keSwge292ZXJmbG93OiBcImF1dG9cIn0pXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBsZXQgbGluZVRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246MC44LFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbGV0IGNvbnRlbnRUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuMTUsXG4gICAgICAgICAgZWFzZTpcImJhY2sub3V0KDEuNSlcIlxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbGV0IGFycm93VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjE1LFxuICAgICAgICAgIGVhc2U6XCJub25lXCJcbiAgICAgICAgfSwgXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgLy8gQm91bmNlIFRoZSBEb3duIEFycm93XG4gICAgICAgICAgZ3NhcC50aW1lbGluZSh7cmVwZWF0Oi0xLCB5b3lvOnRydWV9KS50byhkb3duQXJyb3csIHt5Oi0zLCBkdXJhdGlvbjoxLCBlYXNlOlwibm9uZVwifSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmV2ZXJzZUNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgICAgIC8vIFN0b3AgQm91bmNpbiBUaGUgRG93biBBcnJvdyBhbmQgUmVzZXQgaXQncyBZIHBvc2l0aW9uXG4gICAgICAgICAgZ3NhcC5raWxsVHdlZW5zT2YoZG93bkFycm93KTtcbiAgICAgICAgICBnc2FwLnNldChkb3duQXJyb3csIHt5OjB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIFNldCBzZWN0aW9uIHotaW5kZXggYnkgc2VjdGlvbiBudW1iZXJcbiAgICAgIHRsLmZyb21Ubyh0aGlzU2VjLCB7ekluZGV4OjEzfSx7ekluZGV4OjEwMDJ9KTtcbiAgICAgIFxuICAgICAgLy8gQW5pbWF0ZSBMaW5lc1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXI0TCwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyNFIsIHtkcmF3U1ZHOlwiMCUgMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyM0wsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjNSLCB7ZHJhd1NWRzpcIjAlIDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjJMLCB7ZHJhd1NWRzpcIjEwMCUgMTAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXIyUiwge2RyYXdTVkc6XCIwJSAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXIxLCB7ZHJhd1NWRzpcIjUwJSA1MCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwiLCBkdXJhdGlvbjowLjd9LCBcInNjcm9sbEluKz0wLjFcIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKHNtYWxsc0dyb3VwLCB7ZHJhd1NWRzpcIjUwJSA1MCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwiLCBkdXJhdGlvbjowLjZ9LCBcInNjcm9sbEluKz0wLjJcIik7XG4gICAgICBcbiAgICAgIC8vIEFuaW1hdGUgQ29udGVudFxuICAgICAgY29udGVudFRMLmZyb21UbyhjaGFyc0gyLCBcbiAgICAgICAge3g6LTIwLCBvcGFjaXR5OjB9LFxuICAgICAgICB7eDowLCBvcGFjaXR5OiAxLCBzdGFnZ2VyOnthbW91bnQ6MC4zLCBmcm9tOlwicmFuZG9tXCJ9fSwgXG4gICAgICBcInNjcm9sbEluXCIpO1xuICAgICAgY29udGVudFRMLmZyb21UbyhsaW5lc1AsXG4gICAgICAgIHtvcGFjaXR5OjAsIHg6LTQwfSxcbiAgICAgICAge29wYWNpdHk6MSwgeDowLCBzdGFnZ2VyOnthbW91bnQ6MC4zfX0sIFxuICAgICAgXCJzY3JvbGxJbis9MC4xXCIpO1xuICAgICAgXG4gICAgICAvLyBBbmltYXRlIEFycm93XG4gICAgICBhcnJvd1RMLmZyb21UbyhzZWN0aW9uVGV4dCwge3k6LTYsIG9wYWNpdHk6MH0sIHt5OjAsIG9wYWNpdHk6MX0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBhcnJvd1RMLmZyb21Ubyhkb3duQXJyb3dMaW5lLCB7ZHJhd1NWRzpcIjEwMCUgMTAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluKz0wLjAyNVwiKTtcbiAgICAgIGFycm93VEwuZnJvbVRvKGRvd25BcnJvd1BvaW50LCB7ZHJhd1NWRzpcIjUwJSA1MCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJbis9MC4xNzVcIik7XG4gICAgICBcbiAgICAgIC8vIEJ1aWxkIE1hc3RlciBUTFRMXG4gICAgICB0bC50bygnLmhlYWRlci1sb2dvJywge2R1cmF0aW9uOjAuOSx3aWR0aDoxOTAsIGVhc2U6XCJzaW5lLm91dFwifSxcInNjcm9sbEluQWxsKz0wLjFcIik7XG4gICAgICB0bC5hZGQobGluZVRMLCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuYWRkKGNvbnRlbnRUTCwgXCJzY3JvbGxJbkFsbCs9MC43NVwiKTtcbiAgICAgIHRsLmFkZChhcnJvd1RMLCBcInNjcm9sbEluQWxsKz0wLjdcIik7XG4gICAgICBcbiAgICAgIHJldHVybiB0bDtcbiAgICB9LFxuICAgIFxuXG4gICAgc2VjdGlvbkFuaW0zIDogKCkgPT4ge1xuICAgICAgbGV0IHRoaXNTZWMgPSAkKCcjc2VjdGlvbjMnKTtcbiAgICAgIGxldCB0aGlzQmFjayA9ICQoJyNiYWNrZ3JvdW5kMycpO1xuICAgICAgbGV0IGNlbnRlcjRMID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTRMJyk7XG4gICAgICBsZXQgY2VudGVyNFIgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItNFInKTtcbiAgICAgIGxldCBjZW50ZXIzTCA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci0zTCcpO1xuICAgICAgbGV0IGNlbnRlcjNSID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTNSJyk7XG4gICAgICBsZXQgY2VudGVyMkwgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItMkwnKTtcbiAgICAgIGxldCBjZW50ZXIyUiA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci0yUicpO1xuICAgICAgbGV0IGJvdHRvbVNtYWxsID0gJCh0aGlzU2VjKS5maW5kKCcjYm90dG9tLXNtYWxsJyk7XG4gICAgICAvLyBBcnJvdyBQaWVjZXNcbiAgICAgIGxldCBkb3duQXJyb3cgPSAkKHRoaXNTZWMpLmZpbmQoJyNkb3duLWFycm93Jyk7XG4gICAgICBsZXQgZG93bkFycm93TGluZSA9ICQodGhpc1NlYykuZmluZCgnI2Rvd24tYXJyb3ctbGluZScpO1xuICAgICAgbGV0IGRvd25BcnJvd1BvaW50ID0gJCh0aGlzU2VjKS5maW5kKCcjZG93bi1hcnJvdy1wb2ludCcpO1xuICAgICAgbGV0IHNlY3Rpb25UZXh0ID0gJCh0aGlzU2VjKS5maW5kKCcuZG93bi1hcnJvdy10ZXh0Jyk7XG4gICAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVsYXk6MC4zLFxuICAgICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjMsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIFJlbGVhc2UgVGhlIFNjcm9sbCBMb2NrXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgZ3NhcC5zZXQoZG9jdW1lbnQuYm9keSwge292ZXJmbG93OiBcImF1dG9cIn0pXG4gICAgICAgIH0sXG4gICAgICAgIG9uUmV2ZXJzZUNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgICAgIC8vIFNldCB0aGUgQmFja2dyb3VuZCBCYWNrIEJlaGluZFxuICAgICAgICAgIGdzYXAuc2V0KHRoaXNCYWNrLCB7ekluZGV4Ojk5fSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBsZXQgbGluZVRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246MC44LFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbGV0IGNvbnRlbnRUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuNixcbiAgICAgICAgICBlYXNlOlwiYmFjay5vdXQoLjIpXCJcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGxldCBhcnJvd1RMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246MC4xNSxcbiAgICAgICAgICBlYXNlOlwibm9uZVwiXG4gICAgICAgIH0sIFxuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgICAgIC8vIEJvdW5jZSBUaGUgRG93biBBcnJvd1xuICAgICAgICAgIGdzYXAudGltZWxpbmUoe3JlcGVhdDotMSwgeW95bzp0cnVlfSkudG8oZG93bkFycm93LCB7eTotNCwgZHVyYXRpb246MSwgZWFzZTpcIm5vbmVcIn0pO1xuICAgICAgICB9LFxuICAgICAgICBvblJldmVyc2VDb21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAvLyBTdG9wIEJvdW5jaW4gVGhlIERvd24gQXJyb3cgYW5kIFJlc2V0IGl0J3MgWSBwb3NpdGlvblxuICAgICAgICAgIGdzYXAua2lsbFR3ZWVuc09mKGRvd25BcnJvdyk7XG4gICAgICAgICAgZ3NhcC5zZXQoZG93bkFycm93LCB7eTowfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBTZXQgYmFja2dyb3VuZCB6LWluZGV4IGJ5IHNlY3Rpb24gbnVtYmVyIC8gU2VjdGlvbiAyIGhhcyBubyBiYWNrIC8gU2VjdGlvbiAzIGlzIHotaW5kZXggMTEwIHRvIHN0YXkgYWJvdmUgYWxsXG4gICAgICB0bC5zZXQodGhpc0JhY2ssIHtvcGFjaXR5OjEsIHpJbmRleDoxMTB9KTtcbiAgICAgIC8vIFNldCBzZWN0aW9uIHotaW5kZXggYnkgc2VjdGlvbiBudW1iZXJcbiAgICAgIHRsLmZyb21Ubyh0aGlzU2VjLCB7ekluZGV4OjEzfSx7ekluZGV4OjEwMDN9KTtcbiAgICAgIFxuICAgICAgLy8gQW5pbWF0ZSBMaW5lc1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXI0TCwge2RyYXdTVkc6XCIwJSAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXI0Uiwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyM0wsIHtkcmF3U1ZHOlwiMCUgMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyM1IsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjJMLCB7ZHJhd1NWRzpcIjAlIDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjJSLCB7ZHJhd1NWRzpcIjEwMCUgMTAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgICAgIFxuICAgICAgLy8gQW5pbWF0ZSBDb250ZW50XG4gICAgICBjb250ZW50VEwuZnJvbVRvKGJvdHRvbVNtYWxsLCB7ZHJhd1NWRzpcIjUwJSA1MCVcIn0sIHtkcmF3U1ZHOlwiMCUgMTAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGNvbnRlbnRUTC5mcm9tVG8oJy52aWRlb0FyZWEnLCB7aGVpZ2h0OjB9LCB7aGVpZ2h0OidhdXRvJ30sIFwic2Nyb2xsSW4rPTAuMlwiKTtcbiAgICAgIFxuICAgICAgLy8gQW5pbWF0ZSBBcnJvd1xuICAgICAgYXJyb3dUTC5mcm9tVG8oc2VjdGlvblRleHQsIHt5Oi02LCBvcGFjaXR5OjB9LCB7eTowLCBvcGFjaXR5OjF9LCBcInNjcm9sbEluXCIpO1xuICAgICAgYXJyb3dUTC5mcm9tVG8oZG93bkFycm93TGluZSwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJbis9MC4wMjVcIik7XG4gICAgICBhcnJvd1RMLmZyb21Ubyhkb3duQXJyb3dQb2ludCwge2RyYXdTVkc6XCI1MCUgNTAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW4rPTAuMTc1XCIpO1xuICAgICAgXG4gICAgICAvLyBCdWlsZCBNYXN0ZXIgVEwgVExcbiAgICAgIHRsLmFkZChsaW5lVEwsIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8odGhpc0JhY2ssIHt5OictMTAwJSd9LHt5OjB9LCBcInNjcm9sbEluQWxsKz0wLjU1XCIpO1xuICAgICAgdGwuYWRkKGNvbnRlbnRUTCwgXCJzY3JvbGxJbkFsbCs9MC43NVwiKTtcbiAgICAgIHRsLmFkZChhcnJvd1RMLCBcInNjcm9sbEluQWxsKz0xXCIpO1xuICAgICAgXG4gICAgICByZXR1cm4gdGw7XG4gICAgfSxcblxuICAgIHNlY3Rpb25BbmltNDogKCkgPT4ge1xuICAgICAgbGV0IHRoaXNTZWMgPSAkKCcjc2VjdGlvbjQnKTtcbiAgICAgIGxldCB0aGlzQmFjayA9ICQoJyNiYWNrZ3JvdW5kNCcpO1xuICAgICAgbGV0IGNoYXJzSDIgPSAkKHRoaXNTZWMpLmZpbmQoJy5oMkNoYXJzJyk7XG4gICAgICBsZXQgbGluZXNQID0gJCh0aGlzU2VjKS5maW5kKCcucExpbmVzJyk7XG4gICAgICBsZXQgc29sb0NlbnRlcjIgPSAkKHRoaXNTZWMpLmZpbmQoJyNzb2xvLWNlbnRlci0yJyk7XG4gICAgICBsZXQgc29sb0NlbnRlcjEgPSAkKHRoaXNTZWMpLmZpbmQoJyNzb2xvLWNlbnRlci0xJyk7XG4gICAgICBsZXQgYm90dG9tU21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoJyNib3R0b20tc21hbGwnKTtcbiAgICAgIC8vIEFycm93IFBpZWNlc1xuICAgICAgbGV0IGRvd25BcnJvdyA9ICQodGhpc1NlYykuZmluZCgnI2Rvd24tYXJyb3cnKTtcbiAgICAgIGxldCBkb3duQXJyb3dMaW5lID0gJCh0aGlzU2VjKS5maW5kKCcjZG93bi1hcnJvdy1saW5lJyk7XG4gICAgICBsZXQgZG93bkFycm93UG9pbnQgPSAkKHRoaXNTZWMpLmZpbmQoJyNkb3duLWFycm93LXBvaW50Jyk7XG4gICAgICBsZXQgc2VjdGlvblRleHQgPSAkKHRoaXNTZWMpLmZpbmQoJy5kb3duLWFycm93LXRleHQnKTsgIFxuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuMyxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgLy8gUmVsZWFzZSBUaGUgU2Nyb2xsIExvY2tcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICBnc2FwLnNldChkb2N1bWVudC5ib2R5LCB7b3ZlcmZsb3c6IFwiYXV0b1wifSlcbiAgICAgICAgICAvLyBnc2FwLnNldCgnI2JhY2tncm91bmQxJywge29wYWNpdHk6MX0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbGV0IGxpbmVUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuNixcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGxldCBjb250ZW50VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjMsXG4gICAgICAgICAgZWFzZTpcImJhY2sub3V0KDEuNSlcIlxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbGV0IGFycm93VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjE1LFxuICAgICAgICAgIGVhc2U6XCJub25lXCJcbiAgICAgICAgfSwgXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgLy8gQm91bmNlIFRoZSBEb3duIEFycm93XG4gICAgICAgICAgZ3NhcC50aW1lbGluZSh7cmVwZWF0Oi0xLCB5b3lvOnRydWV9KS50byhkb3duQXJyb3csIHt5Oi00LCBkdXJhdGlvbjoxLCBlYXNlOlwibm9uZVwifSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmV2ZXJzZUNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgICAgIC8vIFN0b3AgQm91bmNpbiBUaGUgRG93biBBcnJvdyBhbmQgUmVzZXQgaXQncyBZIHBvc2l0aW9uXG4gICAgICAgICAgZ3NhcC5raWxsVHdlZW5zT2YoZG93bkFycm93KTtcbiAgICAgICAgICBnc2FwLnNldChkb3duQXJyb3csIHt5OjB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIFNldCBiYWNrZ3JvdW5kIHotaW5kZXggYnkgc2VjdGlvbiBudW1iZXIgLyBTZWN0aW9uIDIgaGFzIG5vIGJhY2sgLyBTZWN0aW9uIDMgaXMgei1pbmRleCAxMTAgdG8gc3RheSBhYm92ZSBhbGxcbiAgICAgIHRsLnNldCh0aGlzQmFjaywge3pJbmRleDoxMDR9KTtcbiAgICAgIC8vIFNldCBzZWN0aW9uIHotaW5kZXggYnkgc2VjdGlvbiBudW1iZXJcbiAgICAgIHRsLmZyb21Ubyh0aGlzU2VjLCB7ekluZGV4OjEzfSx7ekluZGV4OjEwMDR9KTtcbiAgICAgIFxuICAgICAgLy8gQW5pbWF0ZSBMaW5lc1xuICAgICAgbGluZVRMLmZyb21Ubyhzb2xvQ2VudGVyMSwge2RyYXdTVkc6XCI1MCUgNTAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKHNvbG9DZW50ZXIyLCB7ZHJhd1NWRzpcIjUwJSA1MCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oYm90dG9tU21hbGwsIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSwge2RyYXdTVkc6XCIwJSAxMDAlXCIsIGR1cmF0aW9uOjAuNX0sIFwic2Nyb2xsSW4rPTAuM1wiKTtcbiAgICAgIFxuICAgICAgLy8gQW5pbWF0ZSBDb250ZW50XG4gICAgICBjb250ZW50VEwuZnJvbVRvKGNoYXJzSDIsIFxuICAgICAgICB7eDotMjAsIG9wYWNpdHk6MH0sXG4gICAgICAgIHt4OjAsIG9wYWNpdHk6IDEsIHN0YWdnZXI6e2Ftb3VudDowLjMsIGZyb206XCJyYW5kb21cIn19LCBcbiAgICAgIFwic2Nyb2xsSW5cIik7XG4gICAgICBjb250ZW50VEwuZnJvbVRvKGxpbmVzUCxcbiAgICAgICAge29wYWNpdHk6MCwgeDotNDB9LFxuICAgICAgICB7b3BhY2l0eToxLCB4OjAsIHN0YWdnZXI6e2Ftb3VudDowLjN9fSwgXG4gICAgICBcInNjcm9sbEluKz0wLjFcIik7XG4gICAgICBcbiAgICAgIC8vIEFuaW1hdGUgQXJyb3dcbiAgICAgIGFycm93VEwuZnJvbVRvKHNlY3Rpb25UZXh0LCB7eTotNiwgb3BhY2l0eTowfSwge3k6MCwgb3BhY2l0eToxfSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGFycm93VEwuZnJvbVRvKGRvd25BcnJvd0xpbmUsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW4rPTAuMDI1XCIpO1xuICAgICAgYXJyb3dUTC5mcm9tVG8oZG93bkFycm93UG9pbnQsIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluKz0wLjE3NVwiKTtcbiAgICAgIFxuICAgICAgLy8gQnVpbGQgTWFzdGVyIFRMVExcbiAgICAgIHRsLmZyb21Ubyh0aGlzQmFjaywge29wYWNpdHk6MH0se29wYWNpdHk6MX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5hZGQobGluZVRMLCBcInNjcm9sbEluQWxsKz0wLjlcIik7XG4gICAgICB0bC5hZGQoY29udGVudFRMLCBcInNjcm9sbEluQWxsKz0xLjVcIik7XG4gICAgICB0bC5hZGQoYXJyb3dUTCwgXCJzY3JvbGxJbkFsbCs9MS41XCIpO1xuICAgICAgXG4gICAgICByZXR1cm4gdGw7XG4gICAgfSxcblxuICAgIHNlY3Rpb25BbmltNTogKCkgPT4ge1xuICAgICAgbGV0IHRoaXNTZWMgPSAkKCcjc2VjdGlvbjUnKTtcbiAgICAgIGxldCB0aGlzQmFjayA9ICQoJyNiYWNrZ3JvdW5kNScpO1xuICAgICAgbGV0IHRoaXNPdmVybGF5ID0gJCgnI292ZXJsYXk1Jyk7XG4gICAgICBsZXQgY2hhcnNIMiA9ICQodGhpc1NlYykuZmluZCgnLmgyQ2hhcnMnKTtcbiAgICAgIGxldCBsaW5lc1AgPSAkKHRoaXNTZWMpLmZpbmQoJy5wTGluZXMnKTtcbiAgICAgIGxldCBjZW50ZXI0TCA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci00TCcpO1xuICAgICAgbGV0IGNlbnRlcjRSID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTRSJyk7XG4gICAgICBsZXQgY2VudGVyM0wgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItM0wnKTtcbiAgICAgIGxldCBjZW50ZXIzUiA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci0zUicpO1xuICAgICAgbGV0IGNlbnRlcjJMID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTJMJyk7XG4gICAgICBsZXQgY2VudGVyMlIgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItMlInKTtcbiAgICAgIC8vIEFycm93IFBpZWNlc1xuICAgICAgbGV0IGRvd25BcnJvdyA9ICQodGhpc1NlYykuZmluZCgnI2Rvd24tYXJyb3cnKTtcbiAgICAgIGxldCBkb3duQXJyb3dMaW5lID0gJCh0aGlzU2VjKS5maW5kKCcjZG93bi1hcnJvdy1saW5lJyk7XG4gICAgICBsZXQgZG93bkFycm93UG9pbnQgPSAkKHRoaXNTZWMpLmZpbmQoJyNkb3duLWFycm93LXBvaW50Jyk7XG4gICAgICBsZXQgc2VjdGlvblRleHQgPSAkKHRoaXNTZWMpLmZpbmQoJy5kb3duLWFycm93LXRleHQnKTtcbiAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjUsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIFJlbGVhc2UgVGhlIFNjcm9sbCBMb2NrXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgZ3NhcC5zZXQoZG9jdW1lbnQuYm9keSwge292ZXJmbG93OiBcImF1dG9cIn0pXG4gICAgICAgICAgLy8gZ3NhcC5zZXQoJyNiYWNrZ3JvdW5kMScsIHtvcGFjaXR5OjB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGxldCBsaW5lVEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjYsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBsZXQgY29udGVudFRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246MC4zLFxuICAgICAgICAgIGVhc2U6XCJiYWNrLm91dCgxLjUpXCJcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGxldCBhcnJvd1RMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246MC4xNSxcbiAgICAgICAgICBlYXNlOlwibm9uZVwiXG4gICAgICAgIH0sIFxuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgICAgIC8vIEJvdW5jZSBUaGUgRG93biBBcnJvd1xuICAgICAgICAgIGdzYXAudGltZWxpbmUoe3JlcGVhdDotMSwgeW95bzp0cnVlfSkudG8oZG93bkFycm93LCB7eTotNCwgZHVyYXRpb246MSwgZWFzZTpcIm5vbmVcIn0pO1xuICAgICAgICB9LFxuICAgICAgICBvblJldmVyc2VDb21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAvLyBTdG9wIEJvdW5jaW4gVGhlIERvd24gQXJyb3cgYW5kIFJlc2V0IGl0J3MgWSBwb3NpdGlvblxuICAgICAgICAgIGdzYXAua2lsbFR3ZWVuc09mKGRvd25BcnJvdyk7XG4gICAgICAgICAgZ3NhcC5zZXQoZG93bkFycm93LCB7eTowfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgXG4gICAgICAvLyBTZXQgYmFja2dyb3VuZCB6LWluZGV4IGJ5IHNlY3Rpb24gbnVtYmVyIC8gU2VjdGlvbiAyIGhhcyBubyBiYWNrIC8gU2VjdGlvbiAzIGlzIHotaW5kZXggMTEwIHRvIHN0YXkgYWJvdmUgYWxsXG4gICAgICB0bC5zZXQodGhpc0JhY2ssIHt6SW5kZXg6MTA1fSk7XG4gICAgICB0bC5zZXQodGhpc092ZXJsYXksIHt6SW5kZXg6MTA1fSk7XG4gICAgICAvLyBTZXQgc2VjdGlvbiB6LWluZGV4IGJ5IHNlY3Rpb24gbnVtYmVyXG4gICAgICB0bC5mcm9tVG8odGhpc1NlYywge3pJbmRleDoxM30se3pJbmRleDoxMDA1fSk7XG5cbiAgICAgIC8vIEFuaW1hdGUgTGluZXNcbiAgICAgIC8vIGxpbmVUTC5mcm9tVG8oY2VudGVyNEwsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICAvLyBsaW5lVEwuZnJvbVRvKGNlbnRlcjRSLCB7ZHJhd1NWRzpcIjAlIDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICAvLyBsaW5lVEwuZnJvbVRvKGNlbnRlcjNMLCB7ZHJhd1NWRzpcIjEwMCUgMTAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgLy8gbGluZVRMLmZyb21UbyhjZW50ZXIzUiwge2RyYXdTVkc6XCIwJSAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgLy8gbGluZVRMLmZyb21UbyhjZW50ZXIyTCwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIC8vIGxpbmVUTC5mcm9tVG8oY2VudGVyMlIsIHtkcmF3U1ZHOlwiMCUgMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcblxuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXI0TCwge2RyYXdTVkc6XCIwJSAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXI0Uiwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyM0wsIHtkcmF3U1ZHOlwiMCUgMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyM1IsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjJMLCB7ZHJhd1NWRzpcIjAlIDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjJSLCB7ZHJhd1NWRzpcIjEwMCUgMTAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbygnI2hvbmV5Q2xpcEVuZCcsXG4gICAgICAgIHttb3JwaFNWRzoge3NoYXBlOlwiI2hvbmV5Q2xpcFN0YXJ0XCJ9fSxcbiAgICAgICAge21vcnBoU1ZHOiB7c2hhcGU6XCIjaG9uZXlDbGlwRW5kXCJ9LGR1cmF0aW9uOjAuNCwgZWFzZTpcInNpbmUub3V0XCJ9LFxuICAgICAgXCJzY3JvbGxJblwiKTtcblxuICAgICAgLy8gQW5pbWF0ZSBDb250ZW50XG4gICAgICBjb250ZW50VEwuZnJvbVRvKGNoYXJzSDIsIFxuICAgICAgICB7eDotMjAsIG9wYWNpdHk6MH0sXG4gICAgICAgIHt4OjAsIG9wYWNpdHk6IDEsIHN0YWdnZXI6e2Ftb3VudDowLjMsIGZyb206XCJyYW5kb21cIn19LCBcbiAgICAgIFwic2Nyb2xsSW5cIik7XG4gICAgICBjb250ZW50VEwuZnJvbVRvKGxpbmVzUCxcbiAgICAgICAge29wYWNpdHk6MCwgeDotNDB9LFxuICAgICAgICB7b3BhY2l0eToxLCB4OjAsIHN0YWdnZXI6e2Ftb3VudDowLjN9fSwgXG4gICAgICBcInNjcm9sbEluKz0wLjFcIik7XG4gICBcbiAgXG4gICAgICAvLyBBbmltYXRlIEFycm93XG4gICAgICBhcnJvd1RMLmZyb21UbygnI2JvdHRvbS1zbWFsbC0yJywge2RyYXdTVkc6XCI1MCUgNTAlXCJ9LCB7ZHJhd1NWRzpcIjAlIDEwMCVcIiwgZHVyYXRpb246MC4zLCBlYXNlOlwic2luZS5vdXRcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBhcnJvd1RMLmZyb21UbyhzZWN0aW9uVGV4dCwge3k6LTYsIG9wYWNpdHk6MH0sIHt5OjAsIG9wYWNpdHk6MX0sIFwic2Nyb2xsSW4rPTAuMVwiKTtcbiAgICAgIGFycm93VEwuZnJvbVRvKGRvd25BcnJvd0xpbmUsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW4rPTAuMTI1XCIpO1xuICAgICAgYXJyb3dUTC5mcm9tVG8oZG93bkFycm93UG9pbnQsIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluKz0wLjI3NVwiKTtcbiAgICAgIFxuICAgICAgLy8gQnVpbGQgTWFzdGVyIFRMVExcbiAgICAgIHRsLmZyb21Ubyh0aGlzT3ZlcmxheSwge29wYWNpdHk6MH0sIHtvcGFjaXR5OjAuOX0sIFwic2Nyb2xsSW5BbGwrPTAuOFwiKTtcbiAgICAgIHRsLmZyb21Ubyh0aGlzQmFjaywge29wYWNpdHk6MH0se29wYWNpdHk6MSwgZHVyYXRpb246MX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5hZGQobGluZVRMLCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuYWRkKGNvbnRlbnRUTCwgXCJzY3JvbGxJbkFsbCs9MVwiKTtcbiAgICAgIHRsLmFkZChhcnJvd1RMLCBcInNjcm9sbEluQWxsKz0xXCIpO1xuXG4gICAgICByZXR1cm4gdGw7XG4gICAgICBcbiAgICB9LFxuXG4gICAgc2VjdGlvbkFuaW02OiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9ICQoJyNzZWN0aW9uNicpO1xuICAgICAgbGV0IHRoaXNCYWNrID0gJCgnI2JhY2tncm91bmQ2Jyk7XG4gICAgICBsZXQgY2hhcnNIMiA9ICQodGhpc1NlYykuZmluZCgnLmgyQ2hhcnMnKTtcbiAgICAgIGxldCBsaW5lc1AgPSAkKHRoaXNTZWMpLmZpbmQoJy5wTGluZXMnKTtcbiAgICAgIGxldCB0aGlzT3ZlcmxheSA9ICQoJyNvdmVybGF5NicpO1xuICAgICAgbGV0IGNlbnRlcjRMID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTRMJyk7XG4gICAgICBsZXQgY2VudGVyNFIgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItNFInKTtcbiAgICAgIGxldCBjZW50ZXIzTCA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci0zTCcpO1xuICAgICAgbGV0IGNlbnRlcjNSID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTNSJyk7XG4gICAgICBsZXQgY2VudGVyMkwgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItMkwnKTtcbiAgICAgIGxldCBjZW50ZXIyUiA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci0yUicpO1xuICAgICAgbGV0IGJvdHRvbVNtYWxsID0gJCh0aGlzU2VjKS5maW5kKCcjYm90dG9tLXNtYWxsJyk7XG4gICAgICAvLyBBcnJvdyBQaWVjZXNcbiAgICAgIGxldCBkb3duQXJyb3cgPSAkKHRoaXNTZWMpLmZpbmQoJyNkb3duLWFycm93Jyk7XG4gICAgICBsZXQgZG93bkFycm93TGluZSA9ICQodGhpc1NlYykuZmluZCgnI2Rvd24tYXJyb3ctbGluZScpO1xuICAgICAgbGV0IGRvd25BcnJvd1BvaW50ID0gJCh0aGlzU2VjKS5maW5kKCcjZG93bi1hcnJvdy1wb2ludCcpO1xuICAgICAgbGV0IHNlY3Rpb25UZXh0ID0gJCh0aGlzU2VjKS5maW5kKCcuZG93bi1hcnJvdy10ZXh0Jyk7XG4gICAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgcGF1c2VkOnRydWUsXG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246MC41LFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9LFxuICAgICAgICAvLyBSZWxlYXNlIFRoZSBTY3JvbGwgTG9ja1xuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgICAgIGdzYXAuc2V0KGRvY3VtZW50LmJvZHksIHtvdmVyZmxvdzogXCJhdXRvXCJ9KVxuICAgICAgICAgIC8vIGdzYXAuc2V0KCcjYmFja2dyb3VuZDEnLCB7b3BhY2l0eTowfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBsZXQgbGluZVRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246MC44LFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbGV0IGNvbnRlbnRUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuMyxcbiAgICAgICAgICBlYXNlOlwiYmFjay5vdXQoMS41KVwiXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBsZXQgYXJyb3dUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuMTUsXG4gICAgICAgICAgZWFzZTpcIm5vbmVcIlxuICAgICAgICB9LCBcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAvLyBCb3VuY2UgVGhlIERvd24gQXJyb3dcbiAgICAgICAgICBnc2FwLnRpbWVsaW5lKHtyZXBlYXQ6LTEsIHlveW86dHJ1ZX0pLnRvKGRvd25BcnJvdywge3k6LTQsIGR1cmF0aW9uOjEsIGVhc2U6XCJub25lXCJ9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25SZXZlcnNlQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgLy8gU3RvcCBCb3VuY2luIFRoZSBEb3duIEFycm93IGFuZCBSZXNldCBpdCdzIFkgcG9zaXRpb25cbiAgICAgICAgICBnc2FwLmtpbGxUd2VlbnNPZihkb3duQXJyb3cpO1xuICAgICAgICAgIGdzYXAuc2V0KGRvd25BcnJvdywge3k6MH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgLy8gU2V0IGJhY2tncm91bmQgei1pbmRleCBieSBzZWN0aW9uIG51bWJlciAvIFNlY3Rpb24gMiBoYXMgbm8gYmFjayAvIFNlY3Rpb24gMyBpcyB6LWluZGV4IDExMCB0byBzdGF5IGFib3ZlIGFsbFxuICAgICAgdGwuc2V0KHRoaXNCYWNrLCB7ekluZGV4OjEwNn0pO1xuICAgICAgdGwuc2V0KHRoaXNPdmVybGF5LCB7ekluZGV4OjEwNn0pO1xuICAgICAgLy8gU2V0IHNlY3Rpb24gei1pbmRleCBieSBzZWN0aW9uIG51bWJlclxuICAgICAgdGwuZnJvbVRvKHRoaXNTZWMsIHt6SW5kZXg6MTN9LHt6SW5kZXg6MTAwNn0pO1xuXG4gICAgICAvLyBBbmltYXRlIExpbmVzXG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjRMLCB7ZHJhd1NWRzpcIjEwMCUgMTAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXI0Uiwge2RyYXdTVkc6XCIwJSAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXIzTCwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyM1IsIHtkcmF3U1ZHOlwiMCUgMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyMkwsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjJSLCB7ZHJhd1NWRzpcIjAlIDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBcbiAgICAgIC8vIEFuaW1hdGUgQ29udGVudFxuICAgICAgY29udGVudFRMLmZyb21UbyhjaGFyc0gyLCBcbiAgICAgICAge3g6LTIwLCBvcGFjaXR5OjB9LFxuICAgICAgICB7eDowLCBvcGFjaXR5OiAxLCBzdGFnZ2VyOnthbW91bnQ6MC4zLCBmcm9tOlwicmFuZG9tXCJ9fSwgXG4gICAgICBcInNjcm9sbEluXCIpO1xuICAgICAgY29udGVudFRMLmZyb21UbyhsaW5lc1AsXG4gICAgICAgIHtvcGFjaXR5OjAsIHg6LTQwfSxcbiAgICAgICAge29wYWNpdHk6MSwgeDowLCBzdGFnZ2VyOnthbW91bnQ6MC4zfX0sIFxuICAgICAgXCJzY3JvbGxJbis9MC4xXCIpO1xuICAgICAgXG4gICAgICAvLyBBbmltYXRlIEFycm93XG4gICAgICBhcnJvd1RMLmZyb21Ubyhib3R0b21TbWFsbCwge2RyYXdTVkc6XCI1MCUgNTAlXCJ9LCB7ZHJhd1NWRzpcIjAlIDEwMCVcIiwgZHVyYXRpb246MC40fSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGFycm93VEwuZnJvbVRvKHNlY3Rpb25UZXh0LCB7eTotNiwgb3BhY2l0eTowfSwge3k6MCwgb3BhY2l0eToxfSwgXCJzY3JvbGxJbis9MC4xNVwiKTtcbiAgICAgIGFycm93VEwuZnJvbVRvKGRvd25BcnJvd0xpbmUsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW4rPTAuMTc1XCIpO1xuICAgICAgYXJyb3dUTC5mcm9tVG8oZG93bkFycm93UG9pbnQsIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluKz0wLjMyNVwiKTtcbiAgICAgIFxuICAgICAgLy8gQnVpbGQgTWFzdGVyIFRMVExcbiAgICAgIHRsLmZyb21Ubyh0aGlzT3ZlcmxheSwge29wYWNpdHk6MH0sIHtvcGFjaXR5OjAuMX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8odGhpc0JhY2ssIHtvcGFjaXR5OjB9LHtvcGFjaXR5OjF9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuYWRkKGxpbmVUTCwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmFkZChjb250ZW50VEwsIFwic2Nyb2xsSW5BbGwrPTAuNlwiKTtcbiAgICAgIHRsLmFkZChhcnJvd1RMLCBcInNjcm9sbEluQWxsKz0wLjhcIik7XG4gICAgICBcbiAgICAgIHJldHVybiB0bDsgIFxuICAgIH0sXG5cbiAgICBzZWN0aW9uQW5pbTc6ICgpID0+IHtcbiAgICAgIGxldCB0aGlzU2VjID0gJCgnI3NlY3Rpb243Jyk7XG4gICAgICBsZXQgdGhpc0JhY2sgPSAkKCcjYmFja2dyb3VuZDcnKTtcbiAgICAgIGxldCBjaGFyc0gyID0gJCh0aGlzU2VjKS5maW5kKCcuaDJDaGFycycpO1xuICAgICAgbGV0IGxpbmVzUCA9ICQodGhpc1NlYykuZmluZCgnLnBMaW5lcycpO1xuICAgICAgbGV0IHRoaXNPdmVybGF5ID0gJCgnI292ZXJsYXk3Jyk7XG4gICAgICBsZXQgY2VudGVyNEwgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItNEwnKTtcbiAgICAgIGxldCBjZW50ZXI0UiA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci00UicpO1xuICAgICAgbGV0IGNlbnRlcjNMID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTNMJyk7XG4gICAgICBsZXQgY2VudGVyM1IgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItM1InKTtcbiAgICAgIGxldCBjZW50ZXIyTCA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci0yTCcpO1xuICAgICAgbGV0IGNlbnRlcjJSID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTJSJyk7XG4gICAgICBsZXQgdG9wU21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoJyN0b3Atc21hbGwnKTtcbiAgICAgIGxldCBib3R0b21TbWFsbCA9ICQodGhpc1NlYykuZmluZCgnI2JvdHRvbS1zbWFsbCcpO1xuICAgICAgbGV0IGNlbnRlclNtYWxsID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLXNtYWxsJyk7XG4gICAgICBsZXQgdG9wTGVmdFNtYWxsID0gJCh0aGlzU2VjKS5maW5kKCcjdG9wLWxlZnQtc21hbGwnKTtcbiAgICAgIGxldCB0b3BSaWdodHRTbWFsbCA9ICQodGhpc1NlYykuZmluZCgnI3RvcC1yaWdodC1zbWFsbCcpO1xuICAgICAgbGV0IGJvdHRvbUxlZnRTbWFsbCA9ICQodGhpc1NlYykuZmluZCgnI2JvdHRvbS1sZWZ0LXNtYWxsJyk7XG4gICAgICBsZXQgYm90dG9tUmlnaHR0U21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoJyNib3R0b20tcmlnaHQtc21hbGwnKTtcbiAgICAgIGxldCBpbWdDb250YWluZXIgPSAkKHRoaXNTZWMpLmZpbmQoJy5pbWFnZUNvbnRhaW5lcicpO1xuICAgICAgbGV0IHN1YkltZyA9ICQoaW1nQ29udGFpbmVyKS5maW5kKCdpbWcnKTtcbiAgICAgIC8vIEFycm93IFBpZWNlc1xuICAgICAgbGV0IGRvd25BcnJvdyA9ICQodGhpc1NlYykuZmluZCgnI2Rvd24tYXJyb3cnKTtcbiAgICAgIGxldCBkb3duQXJyb3dMaW5lID0gJCh0aGlzU2VjKS5maW5kKCcjZG93bi1hcnJvdy1saW5lJyk7XG4gICAgICBsZXQgZG93bkFycm93UG9pbnQgPSAkKHRoaXNTZWMpLmZpbmQoJyNkb3duLWFycm93LXBvaW50Jyk7XG4gICAgICBsZXQgc2VjdGlvblRleHQgPSAkKHRoaXNTZWMpLmZpbmQoJy5kb3duLWFycm93LXRleHQnKTtcbiAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjYsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIFJlbGVhc2UgVGhlIFNjcm9sbCBMb2NrXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgZ3NhcC5zZXQoZG9jdW1lbnQuYm9keSwge292ZXJmbG93OiBcImF1dG9cIn0pXG4gICAgICAgICAgLy8gZ3NhcC5zZXQoJyNiYWNrZ3JvdW5kMScsIHtvcGFjaXR5OjF9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGxldCBsaW5lVEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjgsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBsZXQgY29udGVudFRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246MC4zLFxuICAgICAgICAgIGVhc2U6XCJiYWNrLm91dCgxLjUpXCJcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIGxldCBhcnJvd1RMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAvLyAgIGRlZmF1bHRzOiB7XG4gICAgICAvLyAgICAgZHVyYXRpb246MC4xNSxcbiAgICAgIC8vICAgICBlYXNlOlwibm9uZVwiXG4gICAgICAvLyAgIH0sIFxuICAgICAgLy8gICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgLy8gICAgIC8vIEJvdW5jZSBUaGUgRG93biBBcnJvd1xuICAgICAgLy8gICAgIGdzYXAudGltZWxpbmUoe3JlcGVhdDotMSwgeW95bzp0cnVlfSkudG8oZG93bkFycm93LCB7eTotNCwgZHVyYXRpb246MSwgZWFzZTpcIm5vbmVcIn0pO1xuICAgICAgLy8gICB9LFxuICAgICAgLy8gICBvblJldmVyc2VDb21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgIC8vICAgICAvLyBTdG9wIEJvdW5jaW4gVGhlIERvd24gQXJyb3cgYW5kIFJlc2V0IGl0J3MgWSBwb3NpdGlvblxuICAgICAgLy8gICAgIGdzYXAua2lsbFR3ZWVuc09mKGRvd25BcnJvdyk7XG4gICAgICAvLyAgICAgZ3NhcC5zZXQoZG93bkFycm93LCB7eTowfSk7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0pO1xuICAgICAgXG4gICAgICAvLyBTZXQgYmFja2dyb3VuZCB6LWluZGV4IGJ5IHNlY3Rpb24gbnVtYmVyIC8gU2VjdGlvbiAyIGhhcyBubyBiYWNrIC8gU2VjdGlvbiAzIGlzIHotaW5kZXggMTEwIHRvIHN0YXkgYWJvdmUgYWxsXG4gICAgICB0bC5zZXQodGhpc0JhY2ssIHt6SW5kZXg6MTA3fSk7XG4gICAgICB0bC5zZXQodGhpc092ZXJsYXksIHt6SW5kZXg6MTA3fSk7XG4gICAgICAvLyBTZXQgc2VjdGlvbiB6LWluZGV4IGJ5IHNlY3Rpb24gbnVtYmVyXG4gICAgICB0bC5mcm9tVG8odGhpc1NlYywge3pJbmRleDoxM30se3pJbmRleDoxMDA3fSk7XG5cbiAgICAgIC8vIEFuaW1hdGUgTGluZXNcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyNEwsIHtkcmF3U1ZHOlwiMCUgMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyNFIsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjNMLCB7ZHJhd1NWRzpcIjAlIDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjNSLCB7ZHJhd1NWRzpcIjEwMCUgMTAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXIyTCwge2RyYXdTVkc6XCIwJSAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXIyUiwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oW3RvcFNtYWxsLCBib3R0b21TbWFsbCwgY2VudGVyU21hbGxdLCB7ZHJhd1NWRzpcIjUwJSA1MCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oW3RvcExlZnRTbWFsbCwgYm90dG9tTGVmdFNtYWxsXSwge2RyYXdTVkc6XCI1MCUgNTAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKFt0b3BSaWdodHRTbWFsbCwgYm90dG9tUmlnaHR0U21hbGxdLCB7ZHJhd1NWRzpcIjUwJSA1MCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgXG4gICAgICAvLyBBbmltYXRlIENvbnRlbnRcbiAgICAgIGNvbnRlbnRUTC5mcm9tVG8oY2hhcnNIMiwgXG4gICAgICAgIHt4Oi0yMCwgb3BhY2l0eTowfSxcbiAgICAgICAge3g6MCwgb3BhY2l0eTogMSwgc3RhZ2dlcjp7YW1vdW50OjAuMywgZnJvbTpcInJhbmRvbVwifX0sIFxuICAgICAgXCJzY3JvbGxJblwiKTtcbiAgICAgIGNvbnRlbnRUTC5mcm9tVG8obGluZXNQLFxuICAgICAgICB7b3BhY2l0eTowLCB4Oi00MH0sXG4gICAgICAgIHtvcGFjaXR5OjEsIHg6MCwgc3RhZ2dlcjp7YW1vdW50OjAuM319LCBcbiAgICAgIFwic2Nyb2xsSW4rPTAuMVwiKTtcbiAgICAgIGNvbnRlbnRUTC5mcm9tVG8oXCIudGV4dEltYWdlXCIsXG4gICAgICAgIHtvcGFjaXR5OjAsIHg6LTQwfSxcbiAgICAgICAge29wYWNpdHk6MSwgeDowfSwgXG4gICAgICBcInNjcm9sbEluKz0wLjFcIik7XG4gICAgICBjb250ZW50VEwuZnJvbVRvKCcjcGFydG5lckNsaXBFbmQnLFxuICAgICAgICB7bW9ycGhTVkc6IHtzaGFwZTpcIiNwYXJ0bmVyQ2xpcFN0YXJ0XCJ9fSxcbiAgICAgICAge21vcnBoU1ZHOiB7c2hhcGU6XCIjcGFydG5lckNsaXBFbmRcIn0sZHVyYXRpb246MC40LCBlYXNlOlwic2luZS5vdXRcIn0sXG4gICAgICBcInNjcm9sbEluKz0wLjJcIik7XG4gICAgICBcbiAgICAgIC8vIC8vIEFuaW1hdGUgQXJyb3dcbiAgICAgIC8vIGFycm93VEwuZnJvbVRvKHNlY3Rpb25UZXh0LCB7eTotNiwgb3BhY2l0eTowfSwge3k6MCwgb3BhY2l0eToxfSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIC8vIGFycm93VEwuZnJvbVRvKGRvd25BcnJvd0xpbmUsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW4rPTAuMDI1XCIpO1xuICAgICAgLy8gYXJyb3dUTC5mcm9tVG8oZG93bkFycm93UG9pbnQsIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluKz0wLjE3NVwiKTtcbiAgICAgIFxuICAgICAgLy8gQnVpbGQgTWFzdGVyIFRMVExcbiAgICAgIHRsLmZyb21Ubyh0aGlzT3ZlcmxheSwge29wYWNpdHk6MH0sIHtvcGFjaXR5OjAuOX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8odGhpc0JhY2ssIHtvcGFjaXR5OjB9LHtvcGFjaXR5OjF9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuYWRkKGxpbmVUTCwgXCJzY3JvbGxJbkFsbCs9MC4yXCIpO1xuICAgICAgdGwuYWRkKGNvbnRlbnRUTCwgXCJzY3JvbGxJbkFsbCs9MC42XCIpO1xuICAgICAgdGwuZnJvbVRvKCcuZm9vdGVyQXJlYScsIHt5OicxMDAlJ30sIHt5OjAsIGR1cmF0aW9uOjAuNywgZWFzZTonYmFjay5vdXQoMC41KSd9LCBcInNjcm9sbEluQWxsKz0wLjdcIik7XG4gICAgICAvLyB0bC5hZGQoYXJyb3dUTCwgXCJzY3JvbGxJbkFsbCs9MC44XCIpO1xuXG4gICAgICByZXR1cm4gdGw7ICBcbiAgICB9LFxuXG4gICAgLy8gc2VjdGlvbkFuaW04OiAoKSA9PiB7XG4gICAgLy8gICBsZXQgdGhpc1NlYyA9ICQoJyNzZWN0aW9uOCcpO1xuICAgIC8vICAgbGV0IHRoaXNCYWNrID0gJCgnI2JhY2tncm91bmQ4Jyk7XG4gICAgLy8gICBsZXQgY2hhcnNIMiA9ICQodGhpc1NlYykuZmluZCgnLmgyQ2hhcnMnKTtcbiAgICAvLyAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIC8vICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAvLyAgICAgZGVmYXVsdHM6IHtcbiAgICAvLyAgICAgICBkdXJhdGlvbjowLjMsXG4gICAgLy8gICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIC8vIFJlbGVhc2UgVGhlIFNjcm9sbCBMb2NrXG4gICAgLy8gICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgLy8gICAgICAgZ3NhcC5zZXQoZG9jdW1lbnQuYm9keSwge292ZXJmbG93OiBcImF1dG9cIn0pXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0pO1xuXG4gICAgLy8gICBsZXQgY29udGVudFRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgLy8gICAgIGRlZmF1bHRzOiB7XG4gICAgLy8gICAgICAgZHVyYXRpb246MC4zLFxuICAgIC8vICAgICAgIGVhc2U6XCJiYWNrLm91dCgxLjUpXCJcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSk7XG4gICAgICBcbiAgICAvLyAgIC8vIFNldCBiYWNrZ3JvdW5kIHotaW5kZXggYnkgc2VjdGlvbiBudW1iZXIgLyBTZWN0aW9uIDIgaGFzIG5vIGJhY2sgLyBTZWN0aW9uIDMgaXMgei1pbmRleCAxMTAgdG8gc3RheSBhYm92ZSBhbGxcbiAgICAvLyAgIHRsLnNldCh0aGlzQmFjaywge3pJbmRleDoxMDh9KTtcbiAgICAvLyAgIC8vIFNldCBzZWN0aW9uIHotaW5kZXggYnkgc2VjdGlvbiBudW1iZXJcbiAgICAvLyAgIHRsLmZyb21Ubyh0aGlzU2VjLCB7ekluZGV4OjEzfSx7ekluZGV4OjEwMDh9KTtcbiAgICAgICAgICAgIFxuICAgIC8vICAgLy8gQW5pbWF0ZSBDb250ZW50XG4gICAgLy8gICBjb250ZW50VEwuZnJvbVRvKGNoYXJzSDIsIFxuICAgIC8vICAgICB7eDotMjAsIG9wYWNpdHk6MH0sXG4gICAgLy8gICAgIHt4OjAsIG9wYWNpdHk6IDEsIHN0YWdnZXI6e2Ftb3VudDowLjMsIGZyb206XCJyYW5kb21cIn19LCBcbiAgICAvLyAgIFwic2Nyb2xsSW5cIik7XG4gICAgLy8gICBjb250ZW50VEwuZnJvbVRvKCcuc2luZ2xlSW1hZ2VEb3dubG9hZCcse1xuICAgIC8vICAgICBvcGFjaXR5OjAsIHk6LTIwfSwgXG4gICAgLy8gICAgIHtvcGFjaXR5OjEseTowLCBzdGFnZ2VyOnthbW91bnQ6MC4zfX0sIFxuICAgIC8vICAgXCJzY3JvbGxJbis9MC4yXCIpO1xuICAgICAgXG4gICAgLy8gICAvLyBCdWlsZCBNYXN0ZXIgVExUTFxuICAgIC8vICAgdGwuZnJvbVRvKHRoaXNCYWNrLCB7dG9wOictMTAwJSd9LHt0b3A6MH0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgLy8gICB0bC5mcm9tVG8oJy5mb290ZXJBcmVhJywge3k6JzEwMCUnfSwge3k6MCwgZHVyYXRpb246MC41LCBlYXNlOidiYWNrLm91dCgwLjUpJ30sIFwic2Nyb2xsSW5BbGwrPTAuNVwiKTtcbiAgICAvLyAgIHRsLmFkZChjb250ZW50VEwsIFwic2Nyb2xsSW5BbGwrPTAuM1wiKTtcblxuICAgIC8vICAgcmV0dXJuIHRsOyAgXG4gICAgLy8gfSxcbiAgfTtcblxuICAvLyBQbGF5IFNlY3Rpb24gMSBhdXRvbWF0aWNhbGx5XG4gIHNlY3Rpb25BbmltWydzZWN0aW9uQW5pbTEnXSgpLnBsYXkoKTtcbiAgXG4gIC8vIEZpcmUgQW4gQW5pbWF0aW9uIEZyb20gQWJvdmUgZm9yIEVhY2ggU2VjdGlvblxuICBsZXQgc2VjdGlvblRyaWcgPSAobXlDb3VudCkgPT4ge1xuICAgIC8vIEFkZCBBbiBFeHRyYSBTY3JvbGwgZm9yIEJ1enogT24gQmVlcyBpbiBTZWN0aW9uIDQsIDUsIDYgKzEgdG90YWwgZWFjaCB0aW1lXG4gICAgaWYgKG15Q291bnQgPT09IDEpIHtcbiAgICAgIHZhciBzdGFydEhlaWdodCA9IDA7XG4gICAgfSBlbHNlIGlmIChteUNvdW50ID09PSAyKSB7XG4gICAgICB2YXIgc3RhcnRIZWlnaHQgPSAobXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCAtIDEpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIH0gZWxzZSBpZiAobXlDb3VudCA9PT0gMykge1xuICAgICAgdmFyIHN0YXJ0SGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgLSAxKSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDQpIHtcbiAgICAgIHZhciBzdGFydEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqIChteUNvdW50IC0gMSkpIC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgfSBlbHNlIGlmIChteUNvdW50ID09PSA1KSB7XG4gICAgICB2YXIgc3RhcnRIZWlnaHQgPSAobXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCkpIC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgfSBlbHNlIGlmIChteUNvdW50ID09PSA2KSB7XG4gICAgICB2YXIgc3RhcnRIZWlnaHQgPSAobXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCArIDEpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIH0gZWxzZSBpZiAobXlDb3VudCA9PT0gNykge1xuICAgICAgdmFyIHN0YXJ0SGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAyKSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDgpIHtcbiAgICAgIHZhciBzdGFydEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMikpIC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgfSBcblxuICAgIGlmIChteUNvdW50ID09PSAxKSB7XG4gICAgICB2YXIgZW5kSGVpZ2h0ID0gbXlTY3JvbGxIZWlnaHQ7XG4gICAgfSBlbHNlIGlmIChteUNvdW50ID09PSAyKSB7XG4gICAgICB2YXIgZW5kSGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIH0gZWxzZSBpZiAobXlDb3VudCA9PT0gMykge1xuICAgICAgdmFyIGVuZEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqIChteUNvdW50KSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDQpIHtcbiAgICAgIHZhciBlbmRIZWlnaHQgPSAobXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCArIDEpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIH0gZWxzZSBpZiAobXlDb3VudCA9PT0gNSkge1xuICAgICAgdmFyIGVuZEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMikpIC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgfSBlbHNlIGlmIChteUNvdW50ID09PSA2KSB7XG4gICAgICB2YXIgZW5kSGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAzKSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDcpIHtcbiAgICAgIHZhciBlbmRIZWlnaHQgPSAobXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCArIDMpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIH0gZWxzZSBpZiAobXlDb3VudCA9PT0gOCkge1xuICAgICAgdmFyIGVuZEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMykpIC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgfSBcblxuICAgIC8vIGNvbnNvbGUubG9nKCdzdGFydCBoZWlnaHQnK215Q291bnQrJyBpcyAnK3N0YXJ0SGVpZ2h0KTtcbiAgICAvLyBjb25zb2xlLmxvZygnZW5kIGhlaWdodCcrbXlDb3VudCsnIGlzICcrZW5kSGVpZ2h0KTtcbiAgICBcbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICAvLyB0cmlnZ2VyOidib2R5JyxcbiAgICAgIHN0YXJ0OnN0YXJ0SGVpZ2h0LFxuICAgICAgZW5kOmVuZEhlaWdodCwgXG4gICAgICBzY3J1YjoxLFxuICAgICAgb25FbnRlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKG15Q291bnQgPiAxKSB7XG4gICAgICAgICAgZ3NhcC5zZXQoZG9jdW1lbnQuYm9keSwge292ZXJmbG93OiBcImhpZGRlblwifSlcbiAgICAgICAgICBzZWN0aW9uQW5pbVsnc2VjdGlvbkFuaW0nK215Q291bnRdKCkucGxheSgpO1xuICAgICAgICAgIC8vIGFsZXJ0KG15Q291bnQrJyBzZWN0aW9uIGVudGVyZWQnKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTGVhdmU6IGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgaWYgKG15Q291bnQgPCA3KSB7XG4gICAgICAgICAgZ3NhcC5zZXQoZG9jdW1lbnQuYm9keSwge292ZXJmbG93OiBcImhpZGRlblwifSlcbiAgICAgICAgICBzZWN0aW9uQW5pbVsnc2VjdGlvbkFuaW0nK215Q291bnRdKCkucmV2ZXJzZSgwKTtcbiAgICAgICAgICAvLyBhbGVydChteUNvdW50Kycgc2VjdGlvbiBsZWZ0Jyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkVudGVyQmFjazpmdW5jdGlvbigpe1xuICAgICAgICBpZiAobXlDb3VudCA8IDcpIHtcbiAgICAgICAgICBnc2FwLnNldChkb2N1bWVudC5ib2R5LCB7b3ZlcmZsb3c6IFwiaGlkZGVuXCJ9KVxuICAgICAgICAgIHNlY3Rpb25BbmltWydzZWN0aW9uQW5pbScrbXlDb3VudF0oKS5wbGF5KCk7XG4gICAgICAgICAgLy8gYWxlcnQobXlDb3VudCsnIHNlY3Rpb24gYmFjayBhZ2FpbicpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25MZWF2ZUJhY2s6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmIChteUNvdW50ID4gMSkge1xuICAgICAgICAgIGdzYXAuc2V0KGRvY3VtZW50LmJvZHksIHtvdmVyZmxvdzogXCJoaWRkZW5cIn0pXG4gICAgICAgICAgc2VjdGlvbkFuaW1bJ3NlY3Rpb25BbmltJytteUNvdW50XSgpLnJldmVyc2UoMCk7XG4gICAgICAgICAgLy8gYWxlcnQobXlDb3VudCsnIHNlY3Rpb24gbGVmdCBhZ2FpbicpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgLy8gQ2FsbCBUaGUgVHJpZ2dlciBPbiBFdmVyeSBTZWN0aW9uXG4gIC8vIEFuaW1hdGlvbiB0cmlnZ2VycyBhcmUgY2FsY3VsYXRlZCBpbiB0aGUgZnVuY3Rpb25cbiAgbGV0IGkgPSAxO1xuICAkKCdzZWN0aW9uJykuZWFjaChmdW5jdGlvbigpe1xuICAgIHNlY3Rpb25UcmlnKGkpO1xuICAgIGkrK1xuICB9KVxuXG4gIC8vIFNpbmdsZSBCdXp6IG9uIEJlZXMgU2VjdGlvbnNcbiAgLy8gQnV6eiBBbmltYXRpb24gNVxuICBsZXQgYnV6ekluNCA9ICgpID0+IHtcblxuICAgIGxldCBidXp6QmxvY2sgPSAkKCcjc2VjdGlvbjQnKS5maW5kKCcuYnV6ek9uQmVlc0Jsb2NrJyk7XG4gICAgbGV0IGJ1enpXaWR0aCA9IGJ1enpCbG9jay5vdXRlcldpZHRoKCk7XG4gICAgbGV0IHRsID0gbmV3IGdzYXAudGltZWxpbmUoe1xuICAgICAgcGF1c2VkOnRydWUsXG4gICAgICBkZWZhdWx0czoge2R1cmF0aW9uOjAuNSxlYXNlOidiYWNrLm91dCgwLjI1KTsnfVxuICAgIH0pO1xuICAgIHRsLmZyb21UbyhidXp6QmxvY2ssIHt4OmJ1enpXaWR0aH0sIHt4OjB9KTtcbiAgICByZXR1cm4gdGxcbiAgfVxuXG4gIGxldCBidXp6VHJpZzQgPSAobXlDb3VudCkgPT4ge1xuICAgIHZhciBzdGFydEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqIChteUNvdW50IC0gMC41KSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICB2YXIgZW5kSGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAwLjUpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuXG4gICAgLy8gY29uc29sZS5sb2coJ2J1eno0IHN0YXJ0IGlzICcrc3RhcnRIZWlnaHQpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdidXp6NCBlbmQgaXMgJytlbmRIZWlnaHQpO1xuICAgIFxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIHN0YXJ0OnN0YXJ0SGVpZ2h0LFxuICAgICAgZW5kOmVuZEhlaWdodCwgXG4gICAgICBzY3J1YjoxLFxuICAgICAgb25FbnRlcjogZnVuY3Rpb24oKXtidXp6SW40KCkucGxheSgpO30sXG4gICAgICBvbkxlYXZlOiBmdW5jdGlvbigpe2J1enpJbjQoKS5yZXZlcnNlKDApO30sXG4gICAgICBvbkVudGVyQmFjazpmdW5jdGlvbigpe2J1enpJbjQoKS5wbGF5KCk7fSxcbiAgICAgIG9uTGVhdmVCYWNrOiBmdW5jdGlvbigpe2J1enpJbjQoKS5yZXZlcnNlKDApO30sXG4gICAgfSk7XG4gIH1cblxuICBidXp6VHJpZzQoNCk7XG5cbiAgLy8gQnV6eiBBbmltYXRpb24gNVxuICBsZXQgYnV6ekluNSA9ICgpID0+IHtcbiAgICBsZXQgYnV6ekJsb2NrID0gJCgnI3NlY3Rpb241JykuZmluZCgnLmJ1enpPbkJlZXNCbG9jaycpO1xuICAgIGxldCBidXp6V2lkdGggPSBidXp6QmxvY2sub3V0ZXJXaWR0aCgpO1xuICAgIGxldCB0bCA9IG5ldyBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgZGVmYXVsdHM6IHtkdXJhdGlvbjowLjUsZWFzZTonYmFjay5vdXQoMC4yNSk7J31cbiAgICB9KTtcbiAgICB0bC5mcm9tVG8oYnV6ekJsb2NrLCB7eDpidXp6V2lkdGh9LCB7eDowfSk7XG4gICAgcmV0dXJuIHRsXG4gIH1cblxuICBsZXQgYnV6elRyaWc1ID0gKG15Q291bnQpID0+IHtcbiAgICB2YXIgc3RhcnRIZWlnaHQgPSAobXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCArIDAuNSkpIC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgdmFyIGVuZEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMS41KSkgLSBteVNjcm9sbE9mZnNldDtcblxuICAgIC8vIGNvbnNvbGUubG9nKCdidXp6NSBzdGFydCBpcyAnK3N0YXJ0SGVpZ2h0KTtcbiAgICAvLyBjb25zb2xlLmxvZygnYnV6ejUgZW5kIGlzICcrZW5kSGVpZ2h0KTtcbiAgICBcbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICBzdGFydDpzdGFydEhlaWdodCxcbiAgICAgIGVuZDplbmRIZWlnaHQsIFxuICAgICAgc2NydWI6MSxcbiAgICAgIG9uRW50ZXI6IGZ1bmN0aW9uKCl7YnV6ekluNSgpLnBsYXkoKTt9LFxuICAgICAgb25MZWF2ZTogZnVuY3Rpb24oKXtidXp6SW41KCkucmV2ZXJzZSgwKTt9LFxuICAgICAgb25FbnRlckJhY2s6ZnVuY3Rpb24oKXtidXp6SW41KCkucGxheSgpO30sXG4gICAgICBvbkxlYXZlQmFjazogZnVuY3Rpb24oKXtidXp6SW41KCkucmV2ZXJzZSgwKTt9LFxuICAgIH0pO1xuICB9XG5cbiAgYnV6elRyaWc1KDUpO1xuXG4gIC8vIEJ1enogQW5pbWF0aW9uIDZcbiAgbGV0IGJ1enpJbjYgPSAoKSA9PiB7XG4gICAgbGV0IGJ1enpCbG9jayA9ICQoJyNzZWN0aW9uNicpLmZpbmQoJy5idXp6T25CZWVzQmxvY2snKTtcbiAgICBsZXQgYnV6eldpZHRoID0gYnV6ekJsb2NrLm91dGVyV2lkdGgoKTtcbiAgICBsZXQgdGwgPSBuZXcgZ3NhcC50aW1lbGluZSh7XG4gICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgIGRlZmF1bHRzOiB7ZHVyYXRpb246MC41LGVhc2U6J2JhY2sub3V0KDAuMjUpOyd9XG4gICAgfSk7XG4gICAgdGwuZnJvbVRvKGJ1enpCbG9jaywge3g6YnV6eldpZHRofSwge3g6MH0pO1xuICAgIHJldHVybiB0bFxuICB9XG5cbiAgbGV0IGJ1enpUcmlnNiA9IChteUNvdW50KSA9PiB7XG4gICAgdmFyIHN0YXJ0SGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAxLjUpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIHZhciBlbmRIZWlnaHQgPSAobXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCArIDIuNSkpIC0gbXlTY3JvbGxPZmZzZXQ7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnYnV6ejYgc3RhcnQgaXMgJytzdGFydEhlaWdodCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2J1eno2IGVuZCBpcyAnK2VuZEhlaWdodCk7XG4gICAgXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgc3RhcnQ6c3RhcnRIZWlnaHQsXG4gICAgICBlbmQ6ZW5kSGVpZ2h0LCBcbiAgICAgIHNjcnViOjEsXG4gICAgICBvbkVudGVyOiBmdW5jdGlvbigpe2J1enpJbjYoKS5wbGF5KCk7fSxcbiAgICAgIG9uTGVhdmU6IGZ1bmN0aW9uKCl7YnV6ekluNigpLnJldmVyc2UoMCk7fSxcbiAgICAgIG9uRW50ZXJCYWNrOmZ1bmN0aW9uKCl7YnV6ekluNigpLnBsYXkoKTt9LFxuICAgICAgb25MZWF2ZUJhY2s6IGZ1bmN0aW9uKCl7YnV6ekluNigpLnJldmVyc2UoMCk7fSxcbiAgICB9KTtcbiAgfVxuXG4gIGJ1enpUcmlnNig2KTtcblxufVxuIiwiaW1wb3J0IHtcbiAgbWVudVRvZ2dsZSxcbiAgc21vb3RoU2Nyb2xsaW5nLFxufSBmcm9tICcuL2luZGV4LmpzJ1xuXG5leHBvcnQgbGV0IGNsaWNrRXZlbnRzID0gKCkgPT4ge1xuICBcbiAgLy8gTW9iaWxlIE5hdiBDbGljayBFdmVudFxuICBsZXQgbWVudVRvZ2dsZVRMID0gbWVudVRvZ2dsZSgpO1xuICBtZW51VG9nZ2xlVEwucmV2ZXJzZWQodHJ1ZSk7XG4gICQoJy5tZW51VG9nZ2xlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7ICBcbiAgICBpZiAobWVudVRvZ2dsZVRMLnJldmVyc2VkKCkpIHtcbiAgICAgIG1lbnVUb2dnbGVUTC5wbGF5KCk7XG4gICAgICBnc2FwLnNldCgkKCcud3JhcHBlcicpLCB7aGVpZ2h0OicxMDAlJywgb3ZlcmZsb3c6J2hpZGRlbid9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ3NhcC5zZXQoJCgnLndyYXBwZXInKSwge2hlaWdodDonYXV0bycsIG92ZXJmbG93Oid2aXNpYmxlJ30pO1xuICAgICAgbWVudVRvZ2dsZVRMLnJldmVyc2UoKTtcbiAgICB9XG5cdH0pO1xuXG4gICQoJ2FbaHJlZl49XCIjXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIFxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZygnaGFzaCBpdCBvdXQnKTtcbiAgICBcbiAgICAvLyBJRiBJVFwiUyBNT0JJTEUgLyBJUEFEIE9SIFNNQUxMRVJcbiAgICBpZiAoc2NyZWVuLndpZHRoIDw9IDEwMjUpe1xuICAgICAgZ3NhcC5zZXQoJCgnLndyYXBwZXInKSwge2hlaWdodDonYXV0bycsIG92ZXJmbG93Oid2aXNpYmxlJ30pO1xuICAgICAgbWVudVRvZ2dsZVRMLnJldmVyc2UoKTtcbiAgICAgIHNtb290aFNjcm9sbGluZygkKHRoaXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc21vb3RoU2Nyb2xsaW5nKCQodGhpcykpO1xuICAgIH1cbiAgfSk7XG59IiwiZXhwb3J0IGxldCBnc2FwUmVnaXN0ZXJzID0gKCkgPT4ge1xuICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIsIFNwbGl0VGV4dCwgRHJhd1NWR1BsdWdpbiwgTW9ycGhTVkdQbHVnaW4pO1xufSIsImV4cG9ydCB7XG4gIHByZUxvYWRlcixcbiAgdmlkTGlua3MsXG4gIG1vYmlsZVZpZExpbmtzLFxuICBzbW9vdGhTY3JvbGxpbmcsXG4gIG1vYmlsZU5hdlNldHVwXG59IGZyb20gJy4vcGFnZVNldHVwLmpzJ1xuXG5leHBvcnQge1xuICBtZW51VG9nZ2xlXG59IGZyb20gJy4vbWVudVRvZ2dsZS5qcydcblxuZXhwb3J0IHtcbiAgZ3NhcFJlZ2lzdGVyc1xufSBmcm9tICcuL2dzYXBSZWdpc3RlcnMuanMnXG5cbmV4cG9ydCB7XG4gIGNsaWNrRXZlbnRzLFxufSBmcm9tICcuL2NsaWNrRXZlbnRzLmpzJ1xuXG5leHBvcnQge1xuICBhbmltYXRlU2VjdGlvblxufSBmcm9tICcuL2FuaW1hdGVTZWN0aW9uLmpzJ1xuXG5leHBvcnQge1xuICBzZWN0aW9uc1NldHVwXG59IGZyb20gJy4vc2VjdGlvbnNTZXR1cCdcblxuXG5leHBvcnQge1xuICBtb2JpbGVTZWN0aW9uc1NldHVwXG59IGZyb20gJy4vbW9iaWxlU2VjdGlvbnNTZXR1cCdcblxuZXhwb3J0IHtcbiAgbW9iaWxlQW5pbWF0ZVNlY3Rpb25cbn0gZnJvbSAnLi9tb2JpbGVBbmltYXRlU2VjdGlvbidcblxuIiwiZXhwb3J0IGxldCBtZW51VG9nZ2xlID0gKCkgPT4ge1xuXHRsZXQgdGwgPSBuZXcgZ3NhcC50aW1lbGluZSh7XG5cdFx0cGF1c2VkOnRydWUsXG5cdFx0ZGVmYXVsdHM6IHtcblx0XHRcdGVhc2U6ICdjaXJjLm91dCgpJyxcblx0XHRcdGR1cmF0aW9uOjAuMyxcblx0XHR9XG5cdH0pO1xuXG5cdHRsLnRvKCcubWFpbi1uYXYnLCB7ZHVyYXRpb246MC4zLCBsZWZ0OicwJSd9LCAnbWVudU9wZW4nKTtcblx0dGwudG8oJ25hdiBhJywge29wYWNpdHk6MSwgeDonMCUnLCBzdGFnZ2VyOiB7YW1vdW50OjAuMX19LCAnbWVudU9wZW4rPTAuMScpO1xuXHR0bC50bygnLmhhbVRvcCcsIHtyb3RhdGlvbjotMzE1LHg6NyAseTozLCB3aWR0aDoxMCwgdHJhbnNmb3JtT3JpZ2luOic1MCUgNTAlJ30sICdtZW51T3BlbicpO1xuXHR0bC50bygnLmhhbU1pZCcsIHt4Oi00LCB3aWR0aDoxOH0sICdtZW51T3BlbicpO1xuXHR0bC50bygnLmhhbUJvdCcsIHtyb3RhdGlvbjozMTUsIHg6NywgeTotMywgd2lkdGg6MTAsIHRyYW5zZm9ybU9yaWdpbjonNTAlIDUwJSd9LCAnbWVudU9wZW4nKTtcblxuXHRyZXR1cm4gdGw7XG59IiwiZXhwb3J0IGxldCBtb2JpbGVBbmltYXRlU2VjdGlvbiA9ICgpID0+IHtcblxuICAvLyBnc2FwLnNldCgnYm9keScsIHt0b3VjaEFjdGlvbjonbm9uZSd9KTtcbiAgLy8gZG9jdW1lbnQub250b3VjaG1vdmUgPSAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBcbiAgbGV0IHNlY3Rpb25BbmltID0ge1xuXG4gICAgc2VjdGlvbkFuaW0xIDogKCkgPT4ge1xuICAgICAgbGV0IHRoaXNTZWMgPSAoJyNzZWN0aW9uMScpO1xuICAgICAgbGV0IHRoaXNPdmVybGF5ID0gJCgnI292ZXJsYXkxJyk7XG4gICAgICBsZXQgc2VjdGlvbkxpbmVzID0gJCh0aGlzU2VjKS5maW5kKCcuc2luZ2xlLWJhY2tsaW5lJyk7XG4gICAgICBsZXQgc2VjQXJyb3cgPSAkKHRoaXNTZWMpLmZpbmQoJy5kb3duLWFycm93LXN2ZycpXG5cbiAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjUsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGU6ZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZ3NhcC50aW1lbGluZSh7cmVwZWF0Oi0xLCB5b3lvOnRydWV9KS50byhzZWNBcnJvdywge3k6LTMsIGR1cmF0aW9uOjAuNSwgZWFzZTpcIm5vbmVcIn0pOyBcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBcbiAgICAgIC8vIEJ1aWxkIE1hc3RlciBUTFRMXG4gICAgICB0bC5mcm9tVG8odGhpc092ZXJsYXksIHtvcGFjaXR5OjB9LCB7b3BhY2l0eTowLjY1fSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21UbyhzZWN0aW9uTGluZXMsIHtvcGFjaXR5OjB9LHtvcGFjaXR5OjAuM30sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICAgICAgICBcbiAgICAgIHJldHVybiB0bDtcbiAgICB9LFxuXG4gICAgc2VjdGlvbkFuaW0yIDogKCkgPT4ge1xuICAgICAgbGV0IHRoaXNTZWMgPSAkKCcjc2VjdGlvbjInKTtcbiAgICAgIGxldCB0aGlzQmFjayA9ICQoJyNiYWNrZ3JvdW5kMScpO1xuICAgICAgbGV0IHRoaXNPdmVybGF5ID0gJCgnI292ZXJsYXkxJyk7XG4gICAgICBsZXQgbGluZXMgPSAkKCcuc2luZ2xlLWJhY2tsaW5lJyk7XG4gICAgICBsZXQgc2VjdGlvbkxpbmVzID0gdGhpc1NlYy5maW5kKCcuc2luZ2xlLWJhY2tsaW5lJylcbiAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICAvLyBkZWxheTowLjY1LFxuICAgICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjUsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sb25Db21wbGV0ZTpmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8vIC8vIGdzYXAuc2V0KCdib2R5Jywge292ZXJmbG93OidhdXRvJ30pOyxcbiAgICAgICAgICAgIC8vIGdzYXAuc2V0KCdib2R5Jywge3RvdWNoQWN0aW9uOidhdXRvJ30pOyAgXG4gICAgICAgICAgLy8gfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyB0bC5mcm9tVG8odGhpc092ZXJsYXksIHtvcGFjaXR5OjB9LCB7b3BhY2l0eTowLjF9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKHNlY3Rpb25MaW5lcywge29wYWNpdHk6MH0se29wYWNpdHk6MC4yfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHRsO1xuICAgIH0sXG4gICAgXG5cbiAgICBzZWN0aW9uQW5pbTMgOiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9ICQoJyNzZWN0aW9uMycpO1xuICAgICAgbGV0IHRoaXNCYWNrID0gJCgnI2JhY2tncm91bmQzJyk7XG4gICAgICBsZXQgc2VjdGlvbkxpbmVzID0gdGhpc1NlYy5maW5kKCcuc2luZ2xlLWJhY2tsaW5lJyk7XG4gICAgICBsZXQgY2VudGVyNEwgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItNEwnKTtcbiAgICAgIGxldCBjZW50ZXI0UiA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci00UicpO1xuICAgICAgbGV0IGNlbnRlcjNMID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTNMJyk7XG4gICAgICBsZXQgY2VudGVyM1IgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItM1InKTtcbiAgICAgIGxldCBjZW50ZXIyTCA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci0yTCcpO1xuICAgICAgbGV0IGNlbnRlcjJSID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTJSJyk7XG4gICAgICBsZXQgYm90dG9tU21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoJyNib3R0b20tc21hbGwnKTtcbiAgICAgIFxuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuNSxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgb25Db21wbGV0ZTpmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBnc2FwLnNldCgnI2JhY2tncm91bmQxJywge29wYWNpdHk6MH0pO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLy8gb25SZXZlcnNlQ29tcGxldGU6ZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vICAgICAvLyBnc2FwLnNldCgnYm9keScsIHt0b3VjaEFjdGlvbjonYXV0byd9KTsgIFxuICAgICAgICAvLyAgICAgLy8gZ3NhcC5zZXQoJ2JvZHknLCB7b3ZlcmZsb3c6J2F1dG8nfSk7LFxuICAgICAgICAvLyAgIC8vIH0sIDEwMDApOyAgICAgIFxuICAgICAgICAvLyAgIGdzYXAuc2V0KCcjYmFja2dyb3VuZDEnLCB7b3BhY2l0eToxfSk7XG4gICAgICAgIC8vIH0sXG4gICAgICB9KTtcbiAgICAgIHRsLmZyb21UbygnLnZpZGVvQXJlYScsIHtvcGFjaXR5OjB9LCB7b3BhY2l0eToxfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21UbyhjZW50ZXI0TCwge29wYWNpdHk6MH0se29wYWNpdHk6MX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8oY2VudGVyNFIsIHtvcGFjaXR5OjB9LHtvcGFjaXR5OjF9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKGNlbnRlcjNMLCB7b3BhY2l0eTowfSx7b3BhY2l0eToxfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21UbyhjZW50ZXIzUiwge29wYWNpdHk6MH0se29wYWNpdHk6MX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8oY2VudGVyMkwsIHtvcGFjaXR5OjB9LHtvcGFjaXR5OjF9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKGNlbnRlcjJSLCB7b3BhY2l0eTowfSx7b3BhY2l0eToxfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21Ubyhib3R0b21TbWFsbCwge29wYWNpdHk6MH0se29wYWNpdHk6MX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8odGhpc0JhY2ssIHtvcGFjaXR5OjB9LHtvcGFjaXR5OjF9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKHNlY3Rpb25MaW5lcywge29wYWNpdHk6MH0se29wYWNpdHk6MX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8oc2VjdGlvbkxpbmVzLCB7b3BhY2l0eTowfSx7b3BhY2l0eToxfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHRsO1xuICAgIH0sXG4gICAgXG4gICAgc2VjdGlvbkFuaW00IDogKCkgPT4ge1xuICAgICAgbGV0IHRoaXNTZWMgPSAkKCcjc2VjdGlvbjQnKTtcbiAgICAgIGxldCB0aGlzQmFjayA9ICQoJyNiYWNrZ3JvdW5kNCcpO1xuICAgICAgLy8gbGV0IHNlY3Rpb25MaW5lcyA9IHRoaXNTZWMuZmluZCgnLnNpbmdsZS1iYWNrbGluZScpXG4gICAgICBsZXQgc29sb0NlbnRlcjIgPSAkKHRoaXNTZWMpLmZpbmQoJyNzb2xvLWNlbnRlci0yJyk7XG4gICAgICBsZXQgc29sb0NlbnRlcjEgPSAkKHRoaXNTZWMpLmZpbmQoJyNzb2xvLWNlbnRlci0xJyk7XG4gICAgICBsZXQgYm90dG9tU21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoJyNib3R0b20tc21hbGwnKTtcbiAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjUsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG9uUmV2ZXJzZUNvbXBsZXRlOmZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIGdzYXAuc2V0KCcjYmFja2dyb3VuZDEnLCB7b3BhY2l0eToxfSk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIHRsLmZyb21Ubyhzb2xvQ2VudGVyMSwge29wYWNpdHk6MH0se29wYWNpdHk6MC41fSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21Ubyhzb2xvQ2VudGVyMiwge29wYWNpdHk6MH0se29wYWNpdHk6MC41fSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21Ubyhib3R0b21TbWFsbCwge29wYWNpdHk6MH0se29wYWNpdHk6MC41fSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21Ubyh0aGlzQmFjaywge29wYWNpdHk6MH0se29wYWNpdHk6MX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICAvLyB0bC5mcm9tVG8oc2VjdGlvbkxpbmVzLCB7b3BhY2l0eTowfSx7b3BhY2l0eTowLjN9LCBcInNjcm9sbEluQWxsXCIpO1xuXG4gICAgICByZXR1cm4gdGw7XG4gICAgfSxcblxuICAgIHNlY3Rpb25BbmltNSA6ICgpID0+IHtcbiAgICAgIGxldCB0aGlzU2VjID0gJCgnI3NlY3Rpb241Jyk7XG4gICAgICBsZXQgdGhpc0JhY2sgPSAkKCcjYmFja2dyb3VuZDUnKTtcbiAgICAgIGxldCB0aGlzT3ZlcmxheSA9ICQoJyNvdmVybGF5NScpO1xuICAgICAgbGV0IHNlY3Rpb25MaW5lcyA9IHRoaXNTZWMuZmluZCgnLnNpbmdsZS1iYWNrbGluZScpXG4gICAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgcGF1c2VkOnRydWUsXG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246MC41LFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9LFxuICAgICAgICBvbkNvbXBsZXRlOmZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gZ3NhcC5zZXQoJ2JvZHknLCB7dG91Y2hBY3Rpb246J2F1dG8nfSk7ICBcbiAgICAgICAgICAvLyB9LCAxMDAwKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICB0bC5mcm9tVG8odGhpc092ZXJsYXksIHtvcGFjaXR5OjB9LCB7b3BhY2l0eTowLjl9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKHRoaXNCYWNrLCB7b3BhY2l0eTowfSx7b3BhY2l0eToxfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21UbyhzZWN0aW9uTGluZXMsIHtvcGFjaXR5OjB9LHtvcGFjaXR5OjAuOX0sIFwic2Nyb2xsSW5BbGxcIik7XG5cbiAgICAgIHJldHVybiB0bDtcbiAgICB9LFxuXG4gICAgc2VjdGlvbkFuaW02IDogKCkgPT4ge1xuICAgICAgbGV0IHRoaXNTZWMgPSAkKCcjc2VjdGlvbjYnKTtcbiAgICAgIGxldCB0aGlzQmFjayA9ICQoJyNiYWNrZ3JvdW5kNicpO1xuICAgICAgbGV0IHRoaXNPdmVybGF5ID0gJCgnI292ZXJsYXk2Jyk7XG4gICAgICBsZXQgc2VjdGlvbkxpbmVzID0gdGhpc1NlYy5maW5kKCcuc2luZ2xlLWJhY2tsaW5lJylcbiAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjUsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGU6ZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBnc2FwLnNldCgnYm9keScsIHt0b3VjaEFjdGlvbjonYXV0byd9KTsgIFxuICAgICAgICAgIC8vIH0sIDEwMDApO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIHRsLmZyb21Ubyh0aGlzT3ZlcmxheSwge29wYWNpdHk6MH0sIHtvcGFjaXR5OjAuOX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8odGhpc0JhY2ssIHtvcGFjaXR5OjB9LHtvcGFjaXR5OjF9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKHNlY3Rpb25MaW5lcywge29wYWNpdHk6MH0se29wYWNpdHk6MC4yfSwgXCJzY3JvbGxJbkFsbFwiKTtcblxuICAgICAgcmV0dXJuIHRsO1xuICAgIH0sXG5cbiAgICBzZWN0aW9uQW5pbTcgOiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9ICQoJyNzZWN0aW9uNycpO1xuICAgICAgbGV0IHRoaXNCYWNrID0gJCgnI2JhY2tncm91bmQ3Jyk7XG4gICAgICBsZXQgdGhpc092ZXJsYXkgPSAkKCcjb3ZlcmxheTcnKTtcbiAgICAgIGxldCBzZWN0aW9uTGluZXMgPSB0aGlzU2VjLmZpbmQoJy5zaW5nbGUtYmFja2xpbmUnKVxuICAgICAgbGV0IHNlY0Fycm93ID0gJCgnI3NlY3Rpb24xJykuZmluZCgnLmRvd24tYXJyb3ctc3ZnJylcbiAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjUsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIHRsLmZyb21Ubyh0aGlzT3ZlcmxheSwge29wYWNpdHk6MH0sIHtvcGFjaXR5OjAuOX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8odGhpc0JhY2ssIHtvcGFjaXR5OjB9LHtvcGFjaXR5OjF9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKHNlY3Rpb25MaW5lcywge29wYWNpdHk6MH0se29wYWNpdHk6MC41fSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21UbyhzZWNBcnJvdywge29wYWNpdHk6MX0se29wYWNpdHk6MH0sIFwic2Nyb2xsSW5BbGxcIik7XG5cbiAgICAgIHJldHVybiB0bDtcbiAgICB9LFxuICAgIFxuICB9O1xuICBcbiAgc2VjdGlvbkFuaW1bJ3NlY3Rpb25BbmltMSddKCkucGxheSgpO1xuXG4gIC8vIEZpcmUgQW4gQW5pbWF0aW9uIEZyb20gQWJvdmUgZm9yIEVhY2ggU2VjdGlvblxuICBsZXQgc2VjdGlvblRyaWcgPSAobXlDb3VudCkgPT4ge1xuICAgIFxuICAgIC8vIFBsYXkgU2VjdGlvbiAxIGF1dG9tYXRpY2FsbHlcbiAgICBcblxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIHRyaWdnZXI6JyNzZWN0aW9uJytteUNvdW50LFxuICAgICAgc3RhcnQ6XCJ0b3AgYm90dG9tXCIsXG4gICAgICBlbmQ6XCJib3R0b20gYm90dG9tXCIsXG4gICAgICAvLyBzY3J1YjoxLFxuICAgICAgb25FbnRlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKG15Q291bnQgPiAxKSB7XG4gICAgICAgICAgLy8gYWxlcnQobXlDb3VudCk7XG4gICAgICAgICAgLy8gZ3NhcC5zZXQoJ2JvZHknLCB7dG91Y2hBY3Rpb246J25vbmUnfSk7XG4gICAgICAgICAgLy8gZ3NhcC5zZXQoJ2JvZHknLCB7b3ZlcmZsb3c6J2hpZGRlbid9KTtcbiAgICAgICAgICBzZWN0aW9uQW5pbVsnc2VjdGlvbkFuaW0nK215Q291bnRdKCkucGxheSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25MZWF2ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKG15Q291bnQgPCA3KSB7XG4gICAgICAgICAgLy8gZ3NhcC5zZXQoJ2JvZHknLCB7dG91Y2hBY3Rpb246J25vbmUnfSk7XG4gICAgICAgICAgc2VjdGlvbkFuaW1bJ3NlY3Rpb25BbmltJytteUNvdW50XSgpLnJldmVyc2UoMCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkVudGVyQmFjazpmdW5jdGlvbigpe1xuICAgICAgICBpZiAobXlDb3VudCA8IDcpIHtcbiAgICAgICAgICAvLyBnc2FwLnNldCgnYm9keScsIHt0b3VjaEFjdGlvbjonbm9uZSd9KTtcbiAgICAgICAgICBzZWN0aW9uQW5pbVsnc2VjdGlvbkFuaW0nK215Q291bnRdKCkucGxheSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25MZWF2ZUJhY2s6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmIChteUNvdW50ID4gMSkge1xuICAgICAgICAgIC8vIGdzYXAuc2V0KCdib2R5Jywge3RvdWNoQWN0aW9uOidub25lJ30pO1xuICAgICAgICAgIHNlY3Rpb25BbmltWydzZWN0aW9uQW5pbScrbXlDb3VudF0oKS5yZXZlcnNlKDApO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgXG4gIC8vIEFuaW1hdGlvbiB0cmlnZ2VycyBhcmUgY2FsY3VsYXRlZCBpbiB0aGUgZnVuY3Rpb25cbiAgbGV0IGkgPSAxO1xuICAkKCdzZWN0aW9uJykuZWFjaChmdW5jdGlvbigpe1xuICAgIHNlY3Rpb25UcmlnKGkpO1xuICAgIGkrK1xuICB9KVxuXG4gIC8vIHNlY3Rpb25UcmlnKDIpO1xuICBsZXQgd2luZG93SGVpZ2h0ID0gTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAvLyBTaW5nbGUgQnV6eiBvbiBCZWVzIFNlY3Rpb25zXG4gIC8vIEJ1enogQW5pbWF0aW9uIDVcbiAgbGV0IGJ1enpJbjQgPSAoKSA9PiB7XG4gICAgXG4gICAgbGV0IGJ1enpCbG9jayA9ICQoJyNzZWN0aW9uNCcpLmZpbmQoJy5idXp6T25CZWVzQmxvY2snKTtcbiAgICBsZXQgYnV6eldpZHRoID0gYnV6ekJsb2NrLm91dGVyV2lkdGgoKTtcbiAgICBsZXQgdGwgPSBuZXcgZ3NhcC50aW1lbGluZSh7XG4gICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgIGRlZmF1bHRzOiB7ZHVyYXRpb246MC41fVxuICAgIH0pO1xuICAgIHRsLmZyb21UbyhidXp6QmxvY2ssIHt4OmJ1enpXaWR0aH0sIHt4OjB9KTtcbiAgICByZXR1cm4gdGxcbiAgfVxuXG4gIGxldCBidXp6VHJpZzQgPSAobXlDb3VudCkgPT4ge1xuICAgIC8vIHZhciBzdGFydEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqIChteUNvdW50IC0gMC41KSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICAvLyB2YXIgZW5kSGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAwLjUpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuXG4gICAgLy8gY29uc29sZS5sb2coJ2J1eno0IHN0YXJ0IGlzICcrc3RhcnRIZWlnaHQpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdidXp6NCBlbmQgaXMgJytlbmRIZWlnaHQpO1xuICAgIFxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIHRyaWdnZXI6JyNzZWN0aW9uNCcsXG4gICAgICBzdGFydDondG9wIHRvcC09Jysod2luZG93SGVpZ2h0IC8gMiksXG4gICAgICBlbmQ6J2JvdHRvbSBib3R0b20nLCBcbiAgICAgIC8vIHNjcnViOjEsXG4gICAgICBvbkVudGVyOiBmdW5jdGlvbigpe2J1enpJbjQoKS5wbGF5KCk7fSxcbiAgICAgIG9uTGVhdmU6IGZ1bmN0aW9uKCl7YnV6ekluNCgpLnJldmVyc2UoMCk7fSxcbiAgICAgIG9uRW50ZXJCYWNrOmZ1bmN0aW9uKCl7YnV6ekluNCgpLnBsYXkoKTt9LFxuICAgICAgb25MZWF2ZUJhY2s6IGZ1bmN0aW9uKCl7YnV6ekluNCgpLnJldmVyc2UoMCk7fSxcbiAgICB9KTtcbiAgfVxuXG4gIGJ1enpUcmlnNCgpO1xuXG4gIC8vIEJ1enogQW5pbWF0aW9uIDVcbiAgbGV0IGJ1enpJbjUgPSAoKSA9PiB7XG4gICAgbGV0IGJ1enpCbG9jayA9ICQoJyNzZWN0aW9uNScpLmZpbmQoJy5idXp6T25CZWVzQmxvY2snKTtcbiAgICBsZXQgYnV6eldpZHRoID0gYnV6ekJsb2NrLm91dGVyV2lkdGgoKTtcbiAgICBsZXQgdGwgPSBuZXcgZ3NhcC50aW1lbGluZSh7XG4gICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgIGRlZmF1bHRzOiB7ZHVyYXRpb246MC41fVxuICAgIH0pO1xuICAgIHRsLmZyb21UbyhidXp6QmxvY2ssIHt4OmJ1enpXaWR0aH0sIHt4OjB9KTtcbiAgICByZXR1cm4gdGxcbiAgfVxuXG4gIGxldCBidXp6VHJpZzUgPSAobXlDb3VudCkgPT4ge1xuICAgIC8vIHZhciBzdGFydEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMC41KSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICAvLyB2YXIgZW5kSGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAxLjUpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuXG4gICAgLy8gY29uc29sZS5sb2coJ2J1eno1IHN0YXJ0IGlzICcrc3RhcnRIZWlnaHQpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdidXp6NSBlbmQgaXMgJytlbmRIZWlnaHQpO1xuICAgIFxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIHRyaWdnZXI6JyNzZWN0aW9uNScsXG4gICAgICBzdGFydDondG9wIHRvcC09Jysod2luZG93SGVpZ2h0IC8gMiksXG4gICAgICBlbmQ6J2JvdHRvbSBib3R0b20nLCBcbiAgICAgIC8vIHNjcnViOjEsXG4gICAgICBvbkVudGVyOiBmdW5jdGlvbigpe2J1enpJbjUoKS5wbGF5KCk7fSxcbiAgICAgIG9uTGVhdmU6IGZ1bmN0aW9uKCl7YnV6ekluNSgpLnJldmVyc2UoMCk7fSxcbiAgICAgIG9uRW50ZXJCYWNrOmZ1bmN0aW9uKCl7YnV6ekluNSgpLnBsYXkoKTt9LFxuICAgICAgb25MZWF2ZUJhY2s6IGZ1bmN0aW9uKCl7YnV6ekluNSgpLnJldmVyc2UoMCk7fSxcbiAgICB9KTtcbiAgfVxuXG4gIGJ1enpUcmlnNSgpO1xuXG4gIC8vIEJ1enogQW5pbWF0aW9uIDZcbiAgbGV0IGJ1enpJbjYgPSAoKSA9PiB7XG4gICAgbGV0IGJ1enpCbG9jayA9ICQoJyNzZWN0aW9uNicpLmZpbmQoJy5idXp6T25CZWVzQmxvY2snKTtcbiAgICBsZXQgYnV6eldpZHRoID0gYnV6ekJsb2NrLm91dGVyV2lkdGgoKTtcbiAgICBsZXQgdGwgPSBuZXcgZ3NhcC50aW1lbGluZSh7XG4gICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgIGRlZmF1bHRzOiB7ZHVyYXRpb246MC41fVxuICAgIH0pO1xuICAgIHRsLmZyb21UbyhidXp6QmxvY2ssIHt4OmJ1enpXaWR0aH0sIHt4OjB9KTtcbiAgICByZXR1cm4gdGxcbiAgfVxuXG4gIGxldCBidXp6VHJpZzYgPSAobXlDb3VudCkgPT4ge1xuICAgIC8vIHZhciBzdGFydEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMS41KSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICAvLyB2YXIgZW5kSGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAyLjUpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuXG4gICAgLy8gY29uc29sZS5sb2coJ2J1eno2IHN0YXJ0IGlzICcrc3RhcnRIZWlnaHQpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdidXp6NiBlbmQgaXMgJytlbmRIZWlnaHQpO1xuICAgIFxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIHRyaWdnZXI6JyNzZWN0aW9uNicsXG4gICAgICBzdGFydDondG9wIHRvcC09Jysod2luZG93SGVpZ2h0IC8gMS41KSxcbiAgICAgIGVuZDonYm90dG9tIGJvdHRvbScsIFxuICAgICAgLy8gc2NydWI6MSxcbiAgICAgIG9uRW50ZXI6IGZ1bmN0aW9uKCl7YnV6ekluNigpLnBsYXkoKTt9LFxuICAgICAgb25MZWF2ZTogZnVuY3Rpb24oKXtidXp6SW42KCkucmV2ZXJzZSgwKTt9LFxuICAgICAgb25FbnRlckJhY2s6ZnVuY3Rpb24oKXtidXp6SW42KCkucGxheSgpO30sXG4gICAgICBvbkxlYXZlQmFjazogZnVuY3Rpb24oKXtidXp6SW42KCkucmV2ZXJzZSgwKTt9LFxuICAgIH0pO1xuICB9XG5cbiAgYnV6elRyaWc2KCk7XG5cblxuICAkKCcudGV4dC1jb250YWluZXInKS5lYWNoKCBmdW5jdGlvbigpIHtcblxuICAgIFxuICAgIGxldCBsaW5lc0luID0gKCkgPT4ge1xuICAgICAgbGV0IHRoZXNlTGluZXMgPSAkKHRoaXMpLmZpbmQoJy5wTGluZXMnKTtcbiAgICAgIGxldCB0bCA9IG5ldyBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgcGF1c2VkOnRydWUsXG4gICAgICAgIGRlZmF1bHRzOiB7ZHVyYXRpb246MC4zfVxuICAgICAgfSk7XG4gICAgICB0bC5mcm9tVG8oIHRoZXNlTGluZXMsIFxuICAgICAgICB7b3BhY2l0eTowLCB4Oi00MH0sXG4gICAgICAgIHtvcGFjaXR5OjEsIHg6MCwgc3RhZ2dlcjp7YW1vdW50OjAuM31cbiAgICAgIH0pOyBcblxuICAgICAgLy8gY29uc29sZS5sb2codGhlc2VMaW5lcyk7XG4gICAgICByZXR1cm4gdGxcbiAgICB9XG4gICAgXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgdHJpZ2dlcjp0aGlzLFxuICAgICAgc3RhcnQ6J3RvcCBib3R0b20tPTEyMHB4JyxcbiAgICAgIC8vIHNjcnViOjEsXG4gICAgICBvbkVudGVyOiBmdW5jdGlvbigpe2xpbmVzSW4oKS5wbGF5KCk7fSxcbiAgICAgIC8vIG9uTGVhdmU6IGZ1bmN0aW9uKCl7YnV6ekluNigpLnJldmVyc2UoMCk7fSxcbiAgICAgIC8vIG9uRW50ZXJCYWNrOmZ1bmN0aW9uKCl7YnV6ekluNigpLnBsYXkoKTt9LFxuICAgICAgb25MZWF2ZUJhY2s6IGZ1bmN0aW9uKCl7bGluZXNJbigpLnJldmVyc2UoMCk7fSxcbiAgICB9KTtcbiAgfSk7XG5cblxuICAkKCdoMicpLmVhY2goIGZ1bmN0aW9uKCkge1xuXG4gICAgXG4gICAgbGV0IGxpbmVzSW4gPSAoKSA9PiB7XG4gICAgICBsZXQgdGhlc2VMaW5lcyA9ICQodGhpcykuZmluZCgnLmgyV29yZHMnKTtcbiAgICAgIGxldCB0bCA9IG5ldyBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgcGF1c2VkOnRydWUsXG4gICAgICAgIGRlZmF1bHRzOiB7ZHVyYXRpb246MC4zfVxuICAgICAgfSk7XG4gICAgICB0bC5mcm9tVG8oIHRoZXNlTGluZXMsIFxuICAgICAgICB7b3BhY2l0eTowLCB4Oi00MH0sXG4gICAgICAgIHtvcGFjaXR5OjEsIHg6MCwgc3RhZ2dlcjp7YW1vdW50OjAuM31cbiAgICAgIH0pOyBcblxuICAgICAgLy8gY29uc29sZS5sb2codGhlc2VMaW5lcyk7XG4gICAgICByZXR1cm4gdGxcbiAgICB9XG4gICAgXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgdHJpZ2dlcjp0aGlzLFxuICAgICAgc3RhcnQ6J3RvcCBib3R0b20tPTEyMHB4JyxcbiAgICAgIC8vIHNjcnViOjEsXG4gICAgICBvbkVudGVyOiBmdW5jdGlvbigpe2xpbmVzSW4oKS5wbGF5KCk7fSxcbiAgICAgIC8vIG9uTGVhdmU6IGZ1bmN0aW9uKCl7YnV6ekluNigpLnJldmVyc2UoMCk7fSxcbiAgICAgIC8vIG9uRW50ZXJCYWNrOmZ1bmN0aW9uKCl7YnV6ekluNigpLnBsYXkoKTt9LFxuICAgICAgb25MZWF2ZUJhY2s6IGZ1bmN0aW9uKCl7bGluZXNJbigpLnJldmVyc2UoMCk7fSxcbiAgICB9KTtcbiAgfSk7XG5cblxufVxuXG5cbiIsImV4cG9ydCBsZXQgbW9iaWxlU2VjdGlvbnNTZXR1cCA9ICgpID0+IHtcblxuICAvLyAkKCdib2R5JykuYWRkQ2xhc3MoJ21vYmlsZS1kZXZpY2UnKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIE1FQVNVUklORyBWQVJTXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgdG90YWxTZWN0aW9ucyA9ICQoJ3NlY3Rpb24nKS5sZW5ndGg7XG4gIGxldCB0b3RhbEJ1enpPbiA9ICQoJy5idXp6T25CZWVzQmxvY2snKS5sZW5ndGg7XG4gIGxldCB3aW5kb3dIZWlnaHQgPSBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIGxldCBteVNjcm9sbEhlaWdodCA9IHdpbmRvd0hlaWdodC8yO1xuICBsZXQgZnVsbEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqICh0b3RhbFNlY3Rpb25zICsgdG90YWxCdXp6T24pKSArIHdpbmRvd0hlaWdodCAtIDE7XG4gIGxldCBidXp6QmxvY2sgPSAkKCcuYnV6ek9uQmVlc0Jsb2NrJyk7XG4gIGxldCBidXp6V2lkdGggPSBidXp6QmxvY2sub3V0ZXJXaWR0aCgpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gR0xPQkFMXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTZXQgT3ZlcmFsbCBTY3JvbGwgSGVpZ2h0XG4gIC8vIGdzYXAuc2V0KCcuaG9tZS1wYWdlJywge2hlaWdodDpmdWxsSGVpZ2h0fSk7XG4gIC8vIGdzYXAuc2V0KGRvY3VtZW50LmJvZHksIHtvdmVyZmxvdzogXCJoaWRkZW5cIn0pXG4gIC8vIEhpZGUgQWxsIExpbmVzXG4gIC8vIGdzYXAuc2V0KCQoJy5ob21lLXBhZ2UnKS5maW5kKCdwYXRoJyksIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSk7XG4gIC8vIGdzYXAuc2V0KCQoJy5ob21lLXBhZ2UnKS5maW5kKCdwb2x5bGluZScpLCB7ZHJhd1NWRzpcIjUwJSA1MCVcIn0pO1xuICAvLyBnc2FwLnNldCgkKCcuaG9tZS1wYWdlJykuZmluZCgnbGluZScpLCB7ZHJhd1NWRzpcIjUwJSA1MCVcIn0pO1xuICAvLyBnc2FwLnNldCgkKCcuaG9tZS1wYWdlJykuZmluZCgnI2Rvd24tYXJyb3cgbGluZScpLCB7ZHJhd1NWRzpcIjEwMCUgMTAwJVwifSk7XG4gIC8vIFNldCAxc3QgQmFja2dyb3VuZCBJbWFnZSBhcyBWaXNpYmxlXG5cbiAgbGV0IHNlYzFMaW5lcyA9ICQoJyNzZWN0aW9uMScpLmZpbmQoJy5zaW5nbGUtYmFja2xpbmUnKVxuICBsZXQgc2VjMUFycm93ID0gJCgnI3NlY3Rpb24xJykuZmluZCgnLmRvd24tYXJyb3ctc3ZnJylcbiAgZ3NhcC5zZXQoc2VjMUxpbmVzLCB7b3BhY2l0eTowLjJ9KTtcbiAgZ3NhcC5zZXQoc2VjMUFycm93LCB7b3BhY2l0eToxfSk7XG4gIGdzYXAuc2V0KCcjYmFja2dyb3VuZDEnLCB7b3BhY2l0eToxLCB6SW5kZXg6MTAwfSk7XG4gIGdzYXAuc2V0KCcjYmFja2dyb3VuZDMnLCB7ekluZGV4OjEwNn0pO1xuICBnc2FwLnNldCgnI2JhY2tncm91bmQ0Jywge3pJbmRleDoxMDV9KTtcbiAgZ3NhcC5zZXQoJyNiYWNrZ3JvdW5kNScsIHt6SW5kZXg6MTA0fSk7XG4gIGdzYXAuc2V0KCcjYmFja2dyb3VuZDYnLCB7ekluZGV4OjEwM30pO1xuICBnc2FwLnNldCgnI2JhY2tncm91bmQ3Jywge3pJbmRleDoxMDF9KTtcblxuICBnc2FwLnNldCgnI292ZXJsYXkxJywge29wYWNpdHk6MC42NSwgekluZGV4OjEwMX0pO1xuICAvLyBnc2FwLnNldCgnI292ZXJsYXkzJywge3pJbmRleDoxMDN9KTtcbiAgLy8gZ3NhcC5zZXQoJyNvdmVybGF5NCcsIHt6SW5kZXg6MTA0fSk7XG4gIGdzYXAuc2V0KCcjb3ZlcmxheTUnLCB7ekluZGV4OjEwNX0pO1xuICBnc2FwLnNldCgnI292ZXJsYXk2Jywge3pJbmRleDoxMDZ9KTtcbiAgZ3NhcC5zZXQoJyNvdmVybGF5NycsIHt6SW5kZXg6MTA3fSk7XG5cbiAgLy8gZ3NhcC5zZXQoJyNzZWN0aW9uMScsIHt6SW5kZXg6MjA3fSk7XG4gIC8vIGdzYXAuc2V0KCcjc2VjdGlvbjInLCB7ekluZGV4OjIwNn0pO1xuICAvLyBnc2FwLnNldCgnI3NlY3Rpb24zJywge3pJbmRleDoyMDV9KTtcbiAgLy8gZ3NhcC5zZXQoJyNzZWN0aW9uNCcsIHt6SW5kZXg6MjA0fSk7XG4gIC8vIGdzYXAuc2V0KCcjc2VjdGlvbjUnLCB7ekluZGV4OjIwM30pO1xuICAvLyBnc2FwLnNldCgnI3NlY3Rpb242Jywge3pJbmRleDoyMDJ9KTtcbiAgLy8gZ3NhcC5zZXQoJyNzZWN0aW9uNycsIHt6SW5kZXg6MjAxfSk7XG4gIC8vIGdzYXAuc2V0KCcjYmFja2dyb3VuZDEnLCB7b3BhY2l0eToxfSk7XG4gIC8vIFNldCBCdXp6IE9uIEJlZXMgdG8gSGlkZGVuXG4gIGdzYXAuc2V0KGJ1enpCbG9jaywge3g6YnV6eldpZHRofSk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRUNUSU9OIDFcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGxldCBzZWMxID0gJCgnI3NlY3Rpb24xJyk7XG4gIGxldCBzZWMxSDIgPSBzZWMxLmZpbmQoJ2gyJyk7XG4gIGxldCBzZWMxc3BsaXRIMiA9IG5ldyBTcGxpdFRleHQoc2VjMUgyLCB7IHR5cGU6IFwibGluZXMsd29yZHMsIGNoYXJzXCIgfSk7XG4gIGxldCBzZWMxQ2hhcnMyID0gc2VjMXNwbGl0SDIuY2hhcnM7XG4gIGxldCBzZWMxV29yZHMyID0gc2VjMXNwbGl0SDIud29yZHM7XG4gIGxldCBzZWMxTGluZXMyID0gc2VjMXNwbGl0SDIubGluZXM7XG4gICQoc2VjMUxpbmVzMikuYWRkQ2xhc3MoJ2gyTGluZXMnKTtcbiAgJChzZWMxQ2hhcnMyKS5hZGRDbGFzcygnaDJDaGFycyBzZWMxQ2hhcnMyJyk7XG4gICQoc2VjMVdvcmRzMikuYWRkQ2xhc3MoJ2gyV29yZHMgc2VjMVdvcmRzMicpO1xuXG4gIGxldCBzZWMxSDMgPSBzZWMxLmZpbmQoJ2gzJyk7XG4gIGxldCBzZWMxc3BsaXRIMyA9IG5ldyBTcGxpdFRleHQoc2VjMUgzLCB7IHR5cGU6IFwibGluZXMsd29yZHMsY2hhcnNcIiB9KTtcbiAgbGV0IHNlYzFDaGFyczMgPSBzZWMxc3BsaXRIMy5jaGFycztcbiAgbGV0IHNlYzFXb3JkczMgPSBzZWMxc3BsaXRIMy53b3JkcztcbiAgJChzZWMxQ2hhcnMzKS5hZGRDbGFzcygnaDNDaGFycyBzZWMxQ2hhcnMzJyk7XG4gICQoc2VjMVdvcmRzMykuYWRkQ2xhc3MoJ2gzV29yZHMgc2VjMVdvcmRzMycpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VDVElPTiAyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgc2VjMiA9ICQoJyNzZWN0aW9uMicpO1xuICBsZXQgc2VjMkgyID0gc2VjMi5maW5kKCdoMicpO1xuICBsZXQgc2VjMnNwbGl0SDIgPSBuZXcgU3BsaXRUZXh0KHNlYzJIMiwgeyB0eXBlOiBcImxpbmVzLHdvcmRzXCIgfSk7XG4gIC8vIGxldCBzZWMyQ2hhcnMyID0gc2VjMnNwbGl0SDIuY2hhcnM7XG4gIGxldCBzZWMyV29yZHMyID0gc2VjMnNwbGl0SDIud29yZHM7XG4gIGxldCBzZWMyTGluZXMyID0gc2VjMnNwbGl0SDIubGluZXM7XG4gICQoc2VjMkxpbmVzMikuYWRkQ2xhc3MoJ2gyTGluZXMnKTtcbiAgLy8gJChzZWMyQ2hhcnMyKS5hZGRDbGFzcygnaDJDaGFycyBzZWMyQ2hhcnMyJyk7XG4gICQoc2VjMldvcmRzMikuYWRkQ2xhc3MoJ2gyV29yZHMgc2VjMldvcmRzMicpO1xuICBcbiAgbGV0IHNlYzJQID0gc2VjMi5maW5kKCcudGV4dC1jb250YWluZXIgcCcpO1xuICBsZXQgc2VjMnNwbGl0UCA9IG5ldyBTcGxpdFRleHQoc2VjMlAsIHsgdHlwZTogXCJsaW5lc1wiIH0pO1xuICAvLyBsZXQgc2VjMldvcmRzUCA9IHNlYzJzcGxpdFAud29yZHM7XG4gIGxldCBzZWMyTGluZXNQID0gc2VjMnNwbGl0UC5saW5lcztcbiAgLy8gJChzZWMyV29yZHNQKS5hZGRDbGFzcygnaDNXb3JkcyBzZWMyV29yZHNQJyk7XG4gICQoc2VjMkxpbmVzUCkuYWRkQ2xhc3MoJ3BMaW5lcyBzZWMyTGluZXNQJyk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRUNUSU9OIDRcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGxldCBzZWM0ID0gJCgnI3NlY3Rpb240Jyk7XG4gIGxldCBzZWM0SDIgPSBzZWM0LmZpbmQoJ2gyJyk7XG4gIGxldCBzZWM0c3BsaXRIMiA9IG5ldyBTcGxpdFRleHQoc2VjNEgyLCB7IHR5cGU6IFwibGluZXMsd29yZHNcIiB9KTtcbiAgLy8gbGV0IHNlYzRDaGFyczIgPSBzZWM0c3BsaXRIMi5jaGFycztcbiAgbGV0IHNlYzRXb3JkczIgPSBzZWM0c3BsaXRIMi53b3JkcztcbiAgbGV0IHNlYzRMaW5lczIgPSBzZWM0c3BsaXRIMi5saW5lcztcbiAgJChzZWM0TGluZXMyKS5hZGRDbGFzcygnaDJMaW5lcycpO1xuICAvLyAkKHNlYzRDaGFyczIpLmFkZENsYXNzKCdoMkNoYXJzIHNlYzRDaGFyczInKTtcbiAgJChzZWM0V29yZHMyKS5hZGRDbGFzcygnaDJXb3JkcyBzZWM0V29yZHMyJyk7XG4gIFxuICBsZXQgc2VjNFAgPSBzZWM0LmZpbmQoJy50ZXh0LWNvbnRhaW5lciBwJyk7XG4gIGxldCBzZWM0c3BsaXRQID0gbmV3IFNwbGl0VGV4dChzZWM0UCwgeyB0eXBlOiBcImxpbmVzXCIgfSk7XG4gIC8vIGxldCBzZWM0V29yZHNQID0gc2VjNHNwbGl0UC53b3JkcztcbiAgbGV0IHNlYzRMaW5lc1AgPSBzZWM0c3BsaXRQLmxpbmVzO1xuICAvLyAkKHNlYzRXb3Jkc1ApLmFkZENsYXNzKCdoM1dvcmRzIHNlYzRXb3Jkc1AnKTtcbiAgJChzZWM0TGluZXNQKS5hZGRDbGFzcygncExpbmVzIHNlYzRMaW5lc1AnKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFQ1RJT04gNVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbGV0IHNlYzUgPSAkKCcjc2VjdGlvbjUnKTtcbiAgbGV0IHNlYzVIMiA9IHNlYzUuZmluZCgnaDInKTtcbiAgbGV0IHNlYzVzcGxpdEgyID0gbmV3IFNwbGl0VGV4dChzZWM1SDIsIHsgdHlwZTogXCJsaW5lcyx3b3Jkc1wiIH0pO1xuICAvLyBsZXQgc2VjNUNoYXJzMiA9IHNlYzVzcGxpdEgyLmNoYXJzO1xuICBsZXQgc2VjNVdvcmRzMiA9IHNlYzVzcGxpdEgyLndvcmRzO1xuICBsZXQgc2VjNUxpbmVzMiA9IHNlYzVzcGxpdEgyLmxpbmVzO1xuICAkKHNlYzVMaW5lczIpLmFkZENsYXNzKCdoMkxpbmVzJyk7XG4gIC8vICQoc2VjNUNoYXJzMikuYWRkQ2xhc3MoJ2gyQ2hhcnMgc2VjNUNoYXJzMicpO1xuICAkKHNlYzVXb3JkczIpLmFkZENsYXNzKCdoMldvcmRzIHNlYzVXb3JkczInKTtcbiAgXG4gIGxldCBzZWM1UCA9IHNlYzUuZmluZCgnLnRleHQtY29udGFpbmVyIHAnKTtcbiAgbGV0IHNlYzVzcGxpdFAgPSBuZXcgU3BsaXRUZXh0KHNlYzVQLCB7IHR5cGU6IFwibGluZXNcIiB9KTtcbiAgLy8gbGV0IHNlYzVXb3Jkc1AgPSBzZWM1c3BsaXRQLndvcmRzO1xuICBsZXQgc2VjNUxpbmVzUCA9IHNlYzVzcGxpdFAubGluZXM7XG4gIC8vICQoc2VjNVdvcmRzUCkuYWRkQ2xhc3MoJ2gzV29yZHMgc2VjNVdvcmRzUCcpO1xuICAkKHNlYzVMaW5lc1ApLmFkZENsYXNzKCdwTGluZXMgc2VjNUxpbmVzUCcpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VDVElPTiA2XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgc2VjNiA9ICQoJyNzZWN0aW9uNicpO1xuICBsZXQgc2VjNkgyID0gc2VjNi5maW5kKCdoMicpO1xuICBsZXQgc2VjNnNwbGl0SDIgPSBuZXcgU3BsaXRUZXh0KHNlYzZIMiwgeyB0eXBlOiBcImxpbmVzLHdvcmRzXCIgfSk7XG4gIC8vIGxldCBzZWM2Q2hhcnMyID0gc2VjNnNwbGl0SDIuY2hhcnM7XG4gIGxldCBzZWM2V29yZHMyID0gc2VjNnNwbGl0SDIud29yZHM7XG4gIGxldCBzZWM2TGluZXMyID0gc2VjNnNwbGl0SDIubGluZXM7XG4gICQoc2VjNkxpbmVzMikuYWRkQ2xhc3MoJ2gyTGluZXMnKTtcbiAgLy8gJChzZWM2Q2hhcnMyKS5hZGRDbGFzcygnaDJDaGFycyBzZWM2Q2hhcnMyJyk7XG4gICQoc2VjNldvcmRzMikuYWRkQ2xhc3MoJ2gyV29yZHMgc2VjNldvcmRzMicpO1xuICBcbiAgbGV0IHNlYzZQID0gc2VjNi5maW5kKCcudGV4dC1jb250YWluZXIgcCcpO1xuICBsZXQgc2VjNnNwbGl0UCA9IG5ldyBTcGxpdFRleHQoc2VjNlAsIHsgdHlwZTogXCJsaW5lc1wiIH0pO1xuICAvLyBsZXQgc2VjNldvcmRzUCA9IHNlYzZzcGxpdFAud29yZHM7XG4gIGxldCBzZWM2TGluZXNQID0gc2VjNnNwbGl0UC5saW5lcztcbiAgLy8gJChzZWM2V29yZHNQKS5hZGRDbGFzcygnaDNXb3JkcyBzZWM2V29yZHNQJyk7XG4gICQoc2VjNkxpbmVzUCkuYWRkQ2xhc3MoJ3BMaW5lcyBzZWM2TGluZXNQJyk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRUNUSU9OIDdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGxldCBzZWM3ID0gJCgnI3NlY3Rpb243Jyk7XG4gIGxldCBzZWM3SDIgPSBzZWM3LmZpbmQoJ2gyJyk7XG4gIGxldCBzZWM3c3BsaXRIMiA9IG5ldyBTcGxpdFRleHQoc2VjN0gyLCB7IHR5cGU6IFwibGluZXMsd29yZHNcIiB9KTtcbiAgLy8gbGV0IHNlYzdDaGFyczIgPSBzZWM3c3BsaXRIMi5jaGFycztcbiAgbGV0IHNlYzdXb3JkczIgPSBzZWM3c3BsaXRIMi53b3JkcztcbiAgbGV0IHNlYzdMaW5lczIgPSBzZWM3c3BsaXRIMi5saW5lcztcbiAgJChzZWM3TGluZXMyKS5hZGRDbGFzcygnaDJMaW5lcycpO1xuICAvLyAkKHNlYzdDaGFyczIpLmFkZENsYXNzKCdoMkNoYXJzJyk7XG4gICQoc2VjN1dvcmRzMikuYWRkQ2xhc3MoJ2gyV29yZHMnKTtcbiAgXG4gIGxldCBzZWM3UCA9IHNlYzcuZmluZCgnLnRleHQtY29udGFpbmVyIHAnKTtcbiAgbGV0IHNlYzdzcGxpdFAgPSBuZXcgU3BsaXRUZXh0KHNlYzdQLCB7IHR5cGU6IFwibGluZXNcIiB9KTtcbiAgLy8gbGV0IHNlYzdXb3Jkc1AgPSBzZWM3c3BsaXRQLndvcmRzO1xuICBsZXQgc2VjN0xpbmVzUCA9IHNlYzdzcGxpdFAubGluZXM7XG4gIC8vICQoc2VjN1dvcmRzUCkuYWRkQ2xhc3MoJ2gzV29yZHMgc2VjN1dvcmRzUCcpO1xuICAkKHNlYzdMaW5lc1ApLmFkZENsYXNzKCdwTGluZXMgc2VjN0xpbmVzUCcpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VDVElPTiA4XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgc2VjOCA9ICQoJyNzZWN0aW9uOCcpO1xuICBsZXQgc2VjOEgyID0gc2VjOC5maW5kKCdoMicpO1xuICBsZXQgc2VjOHNwbGl0SDIgPSBuZXcgU3BsaXRUZXh0KHNlYzhIMiwgeyB0eXBlOiBcImxpbmVzLHdvcmRzXCIgfSk7XG4gIC8vIGxldCBzZWM4Q2hhcnMyID0gc2VjOHNwbGl0SDIuY2hhcnM7XG4gIGxldCBzZWM4V29yZHMyID0gc2VjOHNwbGl0SDIud29yZHM7XG4gIGxldCBzZWM4TGluZXMyID0gc2VjOHNwbGl0SDIubGluZXM7XG4gICQoc2VjOExpbmVzMikuYWRkQ2xhc3MoJ2gyTGluZXMnKTtcbiAgLy8gJChzZWM4Q2hhcnMyKS5hZGRDbGFzcygnaDJDaGFycycpO1xuICAkKHNlYzhXb3JkczIpLmFkZENsYXNzKCdoMldvcmRzJyk7XG4gIFxuICBsZXQgc2VjOFAgPSBzZWM4LmZpbmQoJy50ZXh0LWNvbnRhaW5lciBwJyk7XG4gIGxldCBzZWM4c3BsaXRQID0gbmV3IFNwbGl0VGV4dChzZWM4UCwgeyB0eXBlOiBcImxpbmVzXCIgfSk7XG4gIC8vIGxldCBzZWM4V29yZHNQID0gc2VjOHNwbGl0UC53b3JkcztcbiAgbGV0IHNlYzhMaW5lc1AgPSBzZWM4c3BsaXRQLmxpbmVzO1xuICAvLyAkKHNlYzhXb3Jkc1ApLmFkZENsYXNzKCdoM1dvcmRzIHNlYzhXb3Jkc1AnKTtcbiAgJChzZWM4TGluZXNQKS5hZGRDbGFzcygncExpbmVzIHNlYzhMaW5lc1AnKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFVFVQIEVMRU1FTlRTXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBnc2FwLnNldCgnLmgyQ2hhcnMnLCB7eTonMS4xZW0nfSk7XG59IiwiaW1wb3J0IHsgXG4gIGFuaW1hdGVTZWN0aW9uLFxufSBmcm9tICcuL2luZGV4LmpzJztcblxuZXhwb3J0IGxldCBwcmVMb2FkZXIgPSAoKSA9PiB7XG4gIGxldCB0bCA9IG5ldyBnc2FwLnRpbWVsaW5lKHtcbiAgICBkZWZhdWx0czp7XG4gICAgICBkdXJhdGlvbjowLjUsXG4gICAgfSxcbiAgICBcbiAgICAvLyBlYXNlOidwb3dlcjQub3V0JyxcbiAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgLy8gYWxlcnQoJ291dCcpO1xuICAgICAgJCgnI3ByZWxvYWRlcicpLnJlbW92ZSgpO1xuICAgIH1cbiAgfSlcbiAgdGwudG8oJy5wcmVsb2FkZXJTVkcnLCB7c2NhbGU6MH0sXCJsb2FkT3V0XCIpO1xuXHR0bC50bygnI3ByZWxvYWRlcicsIHtvcGFjaXR5OjAsZHVyYXRpb246MC4zfSxcImxvYWRPdXQyXCIpO1xufVxuXG5leHBvcnQgbGV0IHZpZExpbmtzPSAoKSA9PiB7XG5cdGxldCB0aGlzU3JjID0gJCgnLmlmcmFtZUhvbGRlcicpLmF0dHIoJ2RhdGEtZGVza3RvcC12aWQnKTtcbiAgY29uc29sZS5sb2codGhpc1NyYyk7XG4gICQoJy5pZnJhbWVFbXB0eScpLmF0dHIoJ3NyYycsICdodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vJyt0aGlzU3JjKyc/aD0yNWYzMzRlOTU2JnRpdGxlPTAmYnlsaW5lPTAmcG9ydHJhaXQ9MCcpIFxufVxuXG5leHBvcnQgbGV0IG1vYmlsZVZpZExpbmtzPSAoKSA9PiB7XG5cdGxldCB0aGlzU3JjID0gJCgnLmlmcmFtZUhvbGRlcicpLmF0dHIoJ2RhdGEtbW9iaWxlLXZpZCcpO1xuICBjb25zb2xlLmxvZyh0aGlzU3JjKTtcbiAgJCgnLmlmcmFtZUVtcHR5JykuYXR0cignc3JjJywgJ2h0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8nK3RoaXNTcmMrJz9oPTI1ZjMzNGU5NTYmdGl0bGU9MCZieWxpbmU9MCZwb3J0cmFpdD0wJykgXG59XG5cbmV4cG9ydCBsZXQgc21vb3RoU2Nyb2xsaW5nID0gKHRoZUxpbmspID0+IHtcbiAgXG4gIGxldCB0YXJnZXQgPSAkKHRoZUxpbmspLmF0dHIoJ2hyZWYnKTtcbiAgbGV0IGhlYWRlckhlaWdodCA9ICQoJy5oZWFkZXInKS5vdXRlckhlaWdodCgpOyBcbiAgZ3NhcC50byh3aW5kb3csIHtkdXJhdGlvbjouNSwgZWFzZTogJ2NpcmMub3V0JywgXG4gICAgc2Nyb2xsVG86e1xuICAgICAgeTp0YXJnZXQsIFxuICAgICAgLy8gQWN0aXZhdGUgaWYgSGVhZGVyIElzIEZpeGVkXG4gICAgICAvLyBvZmZzZXRZOmhlYWRlckhlaWdodFxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGxldCBtb2JpbGVOYXZTZXR1cCA9ICgpID0+IHtcbiAgZ3NhcC5zZXQoJ25hdiBhJywge29wYWNpdHk6MCwgeDonNTAlJ30pO1xufVxuIiwiZXhwb3J0IGxldCBzZWN0aW9uc1NldHVwID0gKCkgPT4ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gTUVBU1VSSU5HIFZBUlNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGxldCB0b3RhbFNlY3Rpb25zID0gJCgnc2VjdGlvbicpLmxlbmd0aDtcbiAgbGV0IHRvdGFsQnV6ek9uID0gJCgnLmJ1enpPbkJlZXNCbG9jaycpLmxlbmd0aDtcbiAgbGV0IHdpbmRvd0hlaWdodCA9IE1hdGgucm91bmQod2luZG93LmlubmVySGVpZ2h0KTtcbiAgaWYgKHNjcmVlbi53aWR0aCA8PSAxMDI0KXtcbiAgICB2YXIgbXlTY3JvbGxIZWlnaHQgPSB3aW5kb3dIZWlnaHQqMS41O1xuICB9IGVsc2Uge1xuICAgIHZhciBteVNjcm9sbEhlaWdodCA9IHdpbmRvd0hlaWdodC8yO1xuICB9XG4gIGxldCBmdWxsSGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKHRvdGFsU2VjdGlvbnMgKyB0b3RhbEJ1enpPbikpICsgd2luZG93SGVpZ2h0IC0gMTtcbiAgbGV0IGJ1enpCbG9jayA9ICQoJy5idXp6T25CZWVzQmxvY2snKTtcbiAgbGV0IGJ1enpXaWR0aCA9IGJ1enpCbG9jay5vdXRlcldpZHRoKCk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBHTE9CQUxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNldCBPdmVyYWxsIFNjcm9sbCBIZWlnaHRcbiAgZ3NhcC5zZXQoJy5ob21lLXBhZ2UnLCB7aGVpZ2h0OmZ1bGxIZWlnaHR9KTtcbiAgZ3NhcC5zZXQoZG9jdW1lbnQuYm9keSwge292ZXJmbG93OiBcImhpZGRlblwifSlcbiAgLy8gSGlkZSBBbGwgTGluZXNcbiAgZ3NhcC5zZXQoJCgnLmhvbWUtcGFnZScpLmZpbmQoJ3BhdGgnKSwge2RyYXdTVkc6XCI1MCUgNTAlXCJ9KTtcbiAgZ3NhcC5zZXQoJCgnLmhvbWUtcGFnZScpLmZpbmQoJ3BvbHlsaW5lJyksIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSk7XG4gIGdzYXAuc2V0KCQoJy5ob21lLXBhZ2UnKS5maW5kKCdsaW5lJyksIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSk7XG4gIGdzYXAuc2V0KCQoJy5ob21lLXBhZ2UnKS5maW5kKCcjZG93bi1hcnJvdyBsaW5lJyksIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9KTtcbiAgLy8gU2V0IDFzdCBCYWNrZ3JvdW5kIEltYWdlIGFzIFZpc2libGVcbiAgZ3NhcC5zZXQoJyNiYWNrZ3JvdW5kMScsIHtvcGFjaXR5OjEsIHpJbmRleDoxMDF9KTtcbiAgLy8gU2V0IEJ1enogT24gQmVlcyB0byBIaWRkZW5cbiAgZ3NhcC5zZXQoYnV6ekJsb2NrLCB7eDpidXp6V2lkdGh9KTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFQ1RJT04gMVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbGV0IHNlYzEgPSAkKCcjc2VjdGlvbjEnKTtcbiAgbGV0IHNlYzFIMiA9IHNlYzEuZmluZCgnaDInKTtcbiAgbGV0IHNlYzFzcGxpdEgyID0gbmV3IFNwbGl0VGV4dChzZWMxSDIsIHsgdHlwZTogXCJsaW5lcyx3b3JkcyxjaGFyc1wiIH0pO1xuICBsZXQgc2VjMUNoYXJzMiA9IHNlYzFzcGxpdEgyLmNoYXJzO1xuICBsZXQgc2VjMVdvcmRzMiA9IHNlYzFzcGxpdEgyLndvcmRzO1xuICBsZXQgc2VjMUxpbmVzMiA9IHNlYzFzcGxpdEgyLmxpbmVzO1xuICAkKHNlYzFMaW5lczIpLmFkZENsYXNzKCdoMkxpbmVzJyk7XG4gICQoc2VjMUNoYXJzMikuYWRkQ2xhc3MoJ2gyQ2hhcnMgc2VjMUNoYXJzMicpO1xuICAkKHNlYzFXb3JkczIpLmFkZENsYXNzKCdoMldvcmRzIHNlYzFXb3JkczInKTtcblxuICBsZXQgc2VjMUgzID0gc2VjMS5maW5kKCdoMycpO1xuICBsZXQgc2VjMXNwbGl0SDMgPSBuZXcgU3BsaXRUZXh0KHNlYzFIMywgeyB0eXBlOiBcImxpbmVzLHdvcmRzLGNoYXJzXCIgfSk7XG4gIGxldCBzZWMxQ2hhcnMzID0gc2VjMXNwbGl0SDMuY2hhcnM7XG4gIGxldCBzZWMxV29yZHMzID0gc2VjMXNwbGl0SDMud29yZHM7XG4gICQoc2VjMUNoYXJzMykuYWRkQ2xhc3MoJ2gzQ2hhcnMgc2VjMUNoYXJzMycpO1xuICAkKHNlYzFXb3JkczMpLmFkZENsYXNzKCdoM1dvcmRzIHNlYzFXb3JkczMnKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFQ1RJT04gMlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbGV0IHNlYzIgPSAkKCcjc2VjdGlvbjInKTtcbiAgbGV0IHNlYzJIMiA9IHNlYzIuZmluZCgnaDInKTtcbiAgbGV0IHNlYzJzcGxpdEgyID0gbmV3IFNwbGl0VGV4dChzZWMySDIsIHsgdHlwZTogXCJsaW5lcyx3b3JkcyxjaGFyc1wiIH0pO1xuICBsZXQgc2VjMkNoYXJzMiA9IHNlYzJzcGxpdEgyLmNoYXJzO1xuICBsZXQgc2VjMldvcmRzMiA9IHNlYzJzcGxpdEgyLndvcmRzO1xuICBsZXQgc2VjMkxpbmVzMiA9IHNlYzJzcGxpdEgyLmxpbmVzO1xuICAkKHNlYzJMaW5lczIpLmFkZENsYXNzKCdoMkxpbmVzJyk7XG4gICQoc2VjMkNoYXJzMikuYWRkQ2xhc3MoJ2gyQ2hhcnMgc2VjMkNoYXJzMicpO1xuICAkKHNlYzJXb3JkczIpLmFkZENsYXNzKCdoMldvcmRzIHNlYzJXb3JkczInKTtcbiAgXG4gIGxldCBzZWMyUCA9IHNlYzIuZmluZCgnLnRleHQtY29udGFpbmVyIHAnKTtcbiAgbGV0IHNlYzJzcGxpdFAgPSBuZXcgU3BsaXRUZXh0KHNlYzJQLCB7IHR5cGU6IFwibGluZXNcIiB9KTtcbiAgLy8gbGV0IHNlYzJXb3Jkc1AgPSBzZWMyc3BsaXRQLndvcmRzO1xuICBsZXQgc2VjMkxpbmVzUCA9IHNlYzJzcGxpdFAubGluZXM7XG4gIC8vICQoc2VjMldvcmRzUCkuYWRkQ2xhc3MoJ2gzV29yZHMgc2VjMldvcmRzUCcpO1xuICAkKHNlYzJMaW5lc1ApLmFkZENsYXNzKCdwTGluZXMgc2VjMkxpbmVzUCcpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VDVElPTiA0XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgc2VjNCA9ICQoJyNzZWN0aW9uNCcpO1xuICBsZXQgc2VjNEgyID0gc2VjNC5maW5kKCdoMicpO1xuICBsZXQgc2VjNHNwbGl0SDIgPSBuZXcgU3BsaXRUZXh0KHNlYzRIMiwgeyB0eXBlOiBcImxpbmVzLHdvcmRzLGNoYXJzXCIgfSk7XG4gIGxldCBzZWM0Q2hhcnMyID0gc2VjNHNwbGl0SDIuY2hhcnM7XG4gIGxldCBzZWM0V29yZHMyID0gc2VjNHNwbGl0SDIud29yZHM7XG4gIGxldCBzZWM0TGluZXMyID0gc2VjNHNwbGl0SDIubGluZXM7XG4gICQoc2VjNExpbmVzMikuYWRkQ2xhc3MoJ2gyTGluZXMnKTtcbiAgJChzZWM0Q2hhcnMyKS5hZGRDbGFzcygnaDJDaGFycyBzZWM0Q2hhcnMyJyk7XG4gICQoc2VjNFdvcmRzMikuYWRkQ2xhc3MoJ2gyV29yZHMgc2VjNFdvcmRzMicpO1xuICBcbiAgbGV0IHNlYzRQID0gc2VjNC5maW5kKCcudGV4dC1jb250YWluZXIgcCcpO1xuICBsZXQgc2VjNHNwbGl0UCA9IG5ldyBTcGxpdFRleHQoc2VjNFAsIHsgdHlwZTogXCJsaW5lc1wiIH0pO1xuICAvLyBsZXQgc2VjNFdvcmRzUCA9IHNlYzRzcGxpdFAud29yZHM7XG4gIGxldCBzZWM0TGluZXNQID0gc2VjNHNwbGl0UC5saW5lcztcbiAgLy8gJChzZWM0V29yZHNQKS5hZGRDbGFzcygnaDNXb3JkcyBzZWM0V29yZHNQJyk7XG4gICQoc2VjNExpbmVzUCkuYWRkQ2xhc3MoJ3BMaW5lcyBzZWM0TGluZXNQJyk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRUNUSU9OIDVcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGxldCBzZWM1ID0gJCgnI3NlY3Rpb241Jyk7XG4gIGxldCBzZWM1SDIgPSBzZWM1LmZpbmQoJ2gyJyk7XG4gIGxldCBzZWM1c3BsaXRIMiA9IG5ldyBTcGxpdFRleHQoc2VjNUgyLCB7IHR5cGU6IFwibGluZXMsd29yZHMsY2hhcnNcIiB9KTtcbiAgbGV0IHNlYzVDaGFyczIgPSBzZWM1c3BsaXRIMi5jaGFycztcbiAgbGV0IHNlYzVXb3JkczIgPSBzZWM1c3BsaXRIMi53b3JkcztcbiAgbGV0IHNlYzVMaW5lczIgPSBzZWM1c3BsaXRIMi5saW5lcztcbiAgJChzZWM1TGluZXMyKS5hZGRDbGFzcygnaDJMaW5lcycpO1xuICAkKHNlYzVDaGFyczIpLmFkZENsYXNzKCdoMkNoYXJzIHNlYzVDaGFyczInKTtcbiAgJChzZWM1V29yZHMyKS5hZGRDbGFzcygnaDJXb3JkcyBzZWM1V29yZHMyJyk7XG4gIFxuICBsZXQgc2VjNVAgPSBzZWM1LmZpbmQoJy50ZXh0LWNvbnRhaW5lciBwJyk7XG4gIGxldCBzZWM1c3BsaXRQID0gbmV3IFNwbGl0VGV4dChzZWM1UCwgeyB0eXBlOiBcImxpbmVzXCIgfSk7XG4gIC8vIGxldCBzZWM1V29yZHNQID0gc2VjNXNwbGl0UC53b3JkcztcbiAgbGV0IHNlYzVMaW5lc1AgPSBzZWM1c3BsaXRQLmxpbmVzO1xuICAvLyAkKHNlYzVXb3Jkc1ApLmFkZENsYXNzKCdoM1dvcmRzIHNlYzVXb3Jkc1AnKTtcbiAgJChzZWM1TGluZXNQKS5hZGRDbGFzcygncExpbmVzIHNlYzVMaW5lc1AnKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFQ1RJT04gNlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbGV0IHNlYzYgPSAkKCcjc2VjdGlvbjYnKTtcbiAgbGV0IHNlYzZIMiA9IHNlYzYuZmluZCgnaDInKTtcbiAgbGV0IHNlYzZzcGxpdEgyID0gbmV3IFNwbGl0VGV4dChzZWM2SDIsIHsgdHlwZTogXCJsaW5lcyx3b3JkcyxjaGFyc1wiIH0pO1xuICBsZXQgc2VjNkNoYXJzMiA9IHNlYzZzcGxpdEgyLmNoYXJzO1xuICBsZXQgc2VjNldvcmRzMiA9IHNlYzZzcGxpdEgyLndvcmRzO1xuICBsZXQgc2VjNkxpbmVzMiA9IHNlYzZzcGxpdEgyLmxpbmVzO1xuICAkKHNlYzZMaW5lczIpLmFkZENsYXNzKCdoMkxpbmVzJyk7XG4gICQoc2VjNkNoYXJzMikuYWRkQ2xhc3MoJ2gyQ2hhcnMgc2VjNkNoYXJzMicpO1xuICAkKHNlYzZXb3JkczIpLmFkZENsYXNzKCdoMldvcmRzIHNlYzZXb3JkczInKTtcbiAgXG4gIGxldCBzZWM2UCA9IHNlYzYuZmluZCgnLnRleHQtY29udGFpbmVyIHAnKTtcbiAgbGV0IHNlYzZzcGxpdFAgPSBuZXcgU3BsaXRUZXh0KHNlYzZQLCB7IHR5cGU6IFwibGluZXNcIiB9KTtcbiAgLy8gbGV0IHNlYzZXb3Jkc1AgPSBzZWM2c3BsaXRQLndvcmRzO1xuICBsZXQgc2VjNkxpbmVzUCA9IHNlYzZzcGxpdFAubGluZXM7XG4gIC8vICQoc2VjNldvcmRzUCkuYWRkQ2xhc3MoJ2gzV29yZHMgc2VjNldvcmRzUCcpO1xuICAkKHNlYzZMaW5lc1ApLmFkZENsYXNzKCdwTGluZXMgc2VjNkxpbmVzUCcpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VDVElPTiA3XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgc2VjNyA9ICQoJyNzZWN0aW9uNycpO1xuICBsZXQgc2VjN0gyID0gc2VjNy5maW5kKCdoMicpO1xuICBsZXQgc2VjN3NwbGl0SDIgPSBuZXcgU3BsaXRUZXh0KHNlYzdIMiwgeyB0eXBlOiBcImxpbmVzLHdvcmRzLGNoYXJzXCIgfSk7XG4gIGxldCBzZWM3Q2hhcnMyID0gc2VjN3NwbGl0SDIuY2hhcnM7XG4gIGxldCBzZWM3V29yZHMyID0gc2VjN3NwbGl0SDIud29yZHM7XG4gIGxldCBzZWM3TGluZXMyID0gc2VjN3NwbGl0SDIubGluZXM7XG4gICQoc2VjN0xpbmVzMikuYWRkQ2xhc3MoJ2gyTGluZXMnKTtcbiAgJChzZWM3Q2hhcnMyKS5hZGRDbGFzcygnaDJDaGFycycpO1xuICAkKHNlYzdXb3JkczIpLmFkZENsYXNzKCdoMldvcmRzJyk7XG4gIFxuICBsZXQgc2VjN1AgPSBzZWM3LmZpbmQoJy50ZXh0LWNvbnRhaW5lciBwJyk7XG4gIGxldCBzZWM3c3BsaXRQID0gbmV3IFNwbGl0VGV4dChzZWM3UCwgeyB0eXBlOiBcImxpbmVzXCIgfSk7XG4gIC8vIGxldCBzZWM3V29yZHNQID0gc2VjN3NwbGl0UC53b3JkcztcbiAgbGV0IHNlYzdMaW5lc1AgPSBzZWM3c3BsaXRQLmxpbmVzO1xuICAvLyAkKHNlYzdXb3Jkc1ApLmFkZENsYXNzKCdoM1dvcmRzIHNlYzdXb3Jkc1AnKTtcbiAgJChzZWM3TGluZXNQKS5hZGRDbGFzcygncExpbmVzIHNlYzdMaW5lc1AnKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFQ1RJT04gOFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbGV0IHNlYzggPSAkKCcjc2VjdGlvbjgnKTtcbiAgbGV0IHNlYzhIMiA9IHNlYzguZmluZCgnaDInKTtcbiAgbGV0IHNlYzhzcGxpdEgyID0gbmV3IFNwbGl0VGV4dChzZWM4SDIsIHsgdHlwZTogXCJsaW5lcyx3b3JkcyxjaGFyc1wiIH0pO1xuICBsZXQgc2VjOENoYXJzMiA9IHNlYzhzcGxpdEgyLmNoYXJzO1xuICBsZXQgc2VjOFdvcmRzMiA9IHNlYzhzcGxpdEgyLndvcmRzO1xuICBsZXQgc2VjOExpbmVzMiA9IHNlYzhzcGxpdEgyLmxpbmVzO1xuICAkKHNlYzhMaW5lczIpLmFkZENsYXNzKCdoMkxpbmVzJyk7XG4gICQoc2VjOENoYXJzMikuYWRkQ2xhc3MoJ2gyQ2hhcnMnKTtcbiAgJChzZWM4V29yZHMyKS5hZGRDbGFzcygnaDJXb3JkcycpO1xuICBcbiAgbGV0IHNlYzhQID0gc2VjOC5maW5kKCcudGV4dC1jb250YWluZXIgcCcpO1xuICBsZXQgc2VjOHNwbGl0UCA9IG5ldyBTcGxpdFRleHQoc2VjOFAsIHsgdHlwZTogXCJsaW5lc1wiIH0pO1xuICAvLyBsZXQgc2VjOFdvcmRzUCA9IHNlYzhzcGxpdFAud29yZHM7XG4gIGxldCBzZWM4TGluZXNQID0gc2VjOHNwbGl0UC5saW5lcztcbiAgLy8gJChzZWM4V29yZHNQKS5hZGRDbGFzcygnaDNXb3JkcyBzZWM4V29yZHNQJyk7XG4gICQoc2VjOExpbmVzUCkuYWRkQ2xhc3MoJ3BMaW5lcyBzZWM4TGluZXNQJyk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRVRVUCBFTEVNRU5UU1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gZ3NhcC5zZXQoJy5oMkNoYXJzJywge3k6JzEuMWVtJ30pO1xufSIsImltcG9ydCB7IFxuICBwcmVMb2FkZXIsXG4gIHZpZExpbmtzLFxuICBtb2JpbGVWaWRMaW5rcyxcbiAgZ3NhcFJlZ2lzdGVycyxcbiAgY2xpY2tFdmVudHMsXG4gIG1vYmlsZU5hdlNldHVwLFxuICBhbmltYXRlU2VjdGlvbixcbiAgc2VjdGlvbnNTZXR1cCxcbiAgbW9iaWxlQW5pbWF0ZVNlY3Rpb24sXG4gIG1vYmlsZVNlY3Rpb25zU2V0dXBcbn0gZnJvbSAnLi9pbmRleC5qcyc7XG4gXG5cbi8vICQod2luZG93KS5vbignYmVmb3JldW5sb2FkJywgZnVuY3Rpb24oKSB7XG4vLyAgICQod2luZG93KS5zY3JvbGxUb3AoMCk7XG4vLyB9KTtcblxud2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24gKCkge1xuICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgcHJlTG9hZGVyKCk7XG4gICAgZ3NhcFJlZ2lzdGVycygpO1xuICAgIFxuICAgIGlmIChzY3JlZW4ud2lkdGggPD0gMTAyNCl7XG4gICAgICBtb2JpbGVTZWN0aW9uc1NldHVwKCk7XG4gICAgICBtb2JpbGVWaWRMaW5rcygpO1xuICAgICAgbW9iaWxlQW5pbWF0ZVNlY3Rpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VjdGlvbnNTZXR1cCgpO1xuICAgICAgdmlkTGlua3MoKTtcbiAgICAgIGFuaW1hdGVTZWN0aW9uKCk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIFxuICAgICAgXG4gICAgICBcbn0pXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcblxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==