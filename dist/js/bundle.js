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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hbmltYXRlU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9jbGlja0V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9nc2FwUmVnaXN0ZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21lbnVUb2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbW9iaWxlQW5pbWF0ZVNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbW9iaWxlU2VjdGlvbnNTZXR1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9wYWdlU2V0dXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2VjdGlvbnNTZXR1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy93aW5kb3dMb2FkLmpzIl0sIm5hbWVzIjpbImFuaW1hdGVTZWN0aW9uIiwid2luZG93SGVpZ2h0IiwiTWF0aCIsInJvdW5kIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJzY3JlZW4iLCJ3aWR0aCIsIm15U2Nyb2xsSGVpZ2h0IiwibXlTY3JvbGxPZmZzZXQiLCJzZWN0aW9uQW5pbSIsInNlY3Rpb25BbmltMSIsInRoaXNTZWMiLCJ0aGlzT3ZlcmxheSIsIiQiLCJjaGFyc0gyIiwiZmluZCIsImNoYXJzSDMiLCJjZW50ZXI0TCIsImNlbnRlcjRSIiwiY2VudGVyM0wiLCJjZW50ZXIzUiIsImNlbnRlcjJMIiwiY2VudGVyMlIiLCJjZW50ZXIxIiwidG9wU21hbGwiLCJib3R0b21TbWFsbCIsImNlbnRlclNtYWxsIiwidG9wTGVmdFNtYWxsIiwidG9wUmlnaHR0U21hbGwiLCJib3R0b21MZWZ0U21hbGwiLCJib3R0b21SaWdodHRTbWFsbCIsInNtYWxsc0dyb3VwIiwiZG93bkFycm93IiwiZG93bkFycm93TGluZSIsImRvd25BcnJvd1BvaW50IiwidGwiLCJnc2FwIiwidGltZWxpbmUiLCJwYXVzZWQiLCJkZWZhdWx0cyIsImR1cmF0aW9uIiwiZWFzZSIsIm9uQ29tcGxldGUiLCJzZXQiLCJkb2N1bWVudCIsImJvZHkiLCJvdmVyZmxvdyIsImxpbmVUTCIsImFycm93VEwiLCJyZXBlYXQiLCJ5b3lvIiwidG8iLCJ5Iiwib25SZXZlcnNlQ29tcGxldGUiLCJraWxsVHdlZW5zT2YiLCJjb250ZW50VEwiLCJ6SW5kZXgiLCJmcm9tVG8iLCJkcmF3U1ZHIiwieCIsIm9wYWNpdHkiLCJzdGFnZ2VyIiwiYW1vdW50IiwiZnJvbSIsImFkZCIsInNlY3Rpb25BbmltMiIsImxpbmVzUCIsInNlY3Rpb25UZXh0IiwiZGVsYXkiLCJzZWN0aW9uQW5pbTMiLCJ0aGlzQmFjayIsImhlaWdodCIsInNlY3Rpb25BbmltNCIsInNvbG9DZW50ZXIyIiwic29sb0NlbnRlcjEiLCJzZWN0aW9uQW5pbTUiLCJtb3JwaFNWRyIsInNoYXBlIiwic2VjdGlvbkFuaW02Iiwic2VjdGlvbkFuaW03IiwiaW1nQ29udGFpbmVyIiwic3ViSW1nIiwicGxheSIsInNlY3Rpb25UcmlnIiwibXlDb3VudCIsInN0YXJ0SGVpZ2h0IiwiZW5kSGVpZ2h0IiwiU2Nyb2xsVHJpZ2dlciIsImNyZWF0ZSIsInN0YXJ0IiwiZW5kIiwic2NydWIiLCJvbkVudGVyIiwib25MZWF2ZSIsInJldmVyc2UiLCJvbkVudGVyQmFjayIsIm9uTGVhdmVCYWNrIiwiaSIsImVhY2giLCJidXp6SW40IiwiYnV6ekJsb2NrIiwiYnV6eldpZHRoIiwib3V0ZXJXaWR0aCIsImJ1enpUcmlnNCIsImJ1enpJbjUiLCJidXp6VHJpZzUiLCJidXp6SW42IiwiYnV6elRyaWc2IiwiY2xpY2tFdmVudHMiLCJtZW51VG9nZ2xlVEwiLCJtZW51VG9nZ2xlIiwicmV2ZXJzZWQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNtb290aFNjcm9sbGluZyIsImdzYXBSZWdpc3RlcnMiLCJyZWdpc3RlclBsdWdpbiIsIlNjcm9sbFRvUGx1Z2luIiwiU3BsaXRUZXh0IiwiRHJhd1NWR1BsdWdpbiIsIk1vcnBoU1ZHUGx1Z2luIiwibGVmdCIsInJvdGF0aW9uIiwidHJhbnNmb3JtT3JpZ2luIiwibW9iaWxlQW5pbWF0ZVNlY3Rpb24iLCJzZWN0aW9uTGluZXMiLCJzZWNBcnJvdyIsImxpbmVzIiwidHJpZ2dlciIsImxpbmVzSW4iLCJ0aGVzZUxpbmVzIiwibW9iaWxlU2VjdGlvbnNTZXR1cCIsInRvdGFsU2VjdGlvbnMiLCJsZW5ndGgiLCJ0b3RhbEJ1enpPbiIsImZ1bGxIZWlnaHQiLCJzZWMxTGluZXMiLCJzZWMxQXJyb3ciLCJzZWMxIiwic2VjMUgyIiwic2VjMXNwbGl0SDIiLCJ0eXBlIiwic2VjMUNoYXJzMiIsImNoYXJzIiwic2VjMVdvcmRzMiIsIndvcmRzIiwic2VjMUxpbmVzMiIsImFkZENsYXNzIiwic2VjMUgzIiwic2VjMXNwbGl0SDMiLCJzZWMxQ2hhcnMzIiwic2VjMVdvcmRzMyIsInNlYzIiLCJzZWMySDIiLCJzZWMyc3BsaXRIMiIsInNlYzJXb3JkczIiLCJzZWMyTGluZXMyIiwic2VjMlAiLCJzZWMyc3BsaXRQIiwic2VjMkxpbmVzUCIsInNlYzQiLCJzZWM0SDIiLCJzZWM0c3BsaXRIMiIsInNlYzRXb3JkczIiLCJzZWM0TGluZXMyIiwic2VjNFAiLCJzZWM0c3BsaXRQIiwic2VjNExpbmVzUCIsInNlYzUiLCJzZWM1SDIiLCJzZWM1c3BsaXRIMiIsInNlYzVXb3JkczIiLCJzZWM1TGluZXMyIiwic2VjNVAiLCJzZWM1c3BsaXRQIiwic2VjNUxpbmVzUCIsInNlYzYiLCJzZWM2SDIiLCJzZWM2c3BsaXRIMiIsInNlYzZXb3JkczIiLCJzZWM2TGluZXMyIiwic2VjNlAiLCJzZWM2c3BsaXRQIiwic2VjNkxpbmVzUCIsInNlYzciLCJzZWM3SDIiLCJzZWM3c3BsaXRIMiIsInNlYzdXb3JkczIiLCJzZWM3TGluZXMyIiwic2VjN1AiLCJzZWM3c3BsaXRQIiwic2VjN0xpbmVzUCIsInNlYzgiLCJzZWM4SDIiLCJzZWM4c3BsaXRIMiIsInNlYzhXb3JkczIiLCJzZWM4TGluZXMyIiwic2VjOFAiLCJzZWM4c3BsaXRQIiwic2VjOExpbmVzUCIsInByZUxvYWRlciIsInJlbW92ZSIsInNjYWxlIiwidmlkTGlua3MiLCJ0aGlzU3JjIiwiYXR0ciIsIm1vYmlsZVZpZExpbmtzIiwidGhlTGluayIsInRhcmdldCIsImhlYWRlckhlaWdodCIsIm91dGVySGVpZ2h0Iiwic2Nyb2xsVG8iLCJtb2JpbGVOYXZTZXR1cCIsInNlY3Rpb25zU2V0dXAiLCJzZWMyQ2hhcnMyIiwic2VjNENoYXJzMiIsInNlYzVDaGFyczIiLCJzZWM2Q2hhcnMyIiwic2VjN0NoYXJzMiIsInNlYzhDaGFyczIiLCJvbmJlZm9yZXVubG9hZCIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FB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RSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgJy4vY29tcG9uZW50cy93aW5kb3dMb2FkLmpzJzsiLCJleHBvcnQgbGV0IGFuaW1hdGVTZWN0aW9uID0gKCkgPT4ge1xuICBcbiAgbGV0IHdpbmRvd0hlaWdodCA9IE1hdGgucm91bmQod2luZG93LmlubmVySGVpZ2h0KTtcbiAgaWYgKHNjcmVlbi53aWR0aCA8PSAxMDI0KXtcbiAgICB2YXIgbXlTY3JvbGxIZWlnaHQgPSB3aW5kb3dIZWlnaHQqMjtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbXlTY3JvbGxIZWlnaHQgPSB3aW5kb3dIZWlnaHQvMjtcbiAgfVxuICBsZXQgbXlTY3JvbGxPZmZzZXQgPSAwO1xuICAvLyBHbG9iYWwgdmFyIGZvciBhbmltYXRpb25zIC8gQWNjZXNzIHZpYSBzZWN0aW9uIHRyaWcgbG9vcCBcblxuICAvLyBjb25zb2xlLmxvZyhteVNjcm9sbEhlaWdodCk7XG4gIGxldCBzZWN0aW9uQW5pbSA9IHtcblxuICAgIHNlY3Rpb25BbmltMSA6ICgpID0+IHtcblxuICAgICAgbGV0IHRoaXNTZWMgPSAoJyNzZWN0aW9uMScpO1xuICAgICAgbGV0IHRoaXNPdmVybGF5ID0gJCgnI292ZXJsYXkxJyk7XG4gICAgICBsZXQgY2hhcnNIMiA9ICQodGhpc1NlYykuZmluZCgnLnNlYzFDaGFyczInKTtcbiAgICAgIGxldCBjaGFyc0gzID0gJCh0aGlzU2VjKS5maW5kKCcuc2VjMUNoYXJzMycpO1xuICAgICAgLy8gQmFja2dyb3VuZCBTaGFwZSBWYXJzXG4gICAgICBsZXQgY2VudGVyNEwgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItNEwnKTtcbiAgICAgIGxldCBjZW50ZXI0UiA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci00UicpO1xuICAgICAgbGV0IGNlbnRlcjNMID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTNMJyk7XG4gICAgICBsZXQgY2VudGVyM1IgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItM1InKTtcbiAgICAgIGxldCBjZW50ZXIyTCA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci0yTCcpO1xuICAgICAgbGV0IGNlbnRlcjJSID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTJSJyk7XG4gICAgICBsZXQgY2VudGVyMSA9ICQodGhpc1NlYykuZmluZCgnI3RvcC1iaWcnKTtcbiAgICAgIGxldCB0b3BTbWFsbCA9ICQodGhpc1NlYykuZmluZCgnI3RvcC1zbWFsbCcpO1xuICAgICAgbGV0IGJvdHRvbVNtYWxsID0gJCh0aGlzU2VjKS5maW5kKCcjYm90dG9tLXNtYWxsJyk7XG4gICAgICBsZXQgY2VudGVyU21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItc21hbGwnKTtcbiAgICAgIGxldCB0b3BMZWZ0U21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoJyN0b3AtbGVmdC1zbWFsbCcpO1xuICAgICAgbGV0IHRvcFJpZ2h0dFNtYWxsID0gJCh0aGlzU2VjKS5maW5kKCcjdG9wLXJpZ2h0LXNtYWxsJyk7XG4gICAgICBsZXQgYm90dG9tTGVmdFNtYWxsID0gJCh0aGlzU2VjKS5maW5kKCcjYm90dG9tLWxlZnQtc21hbGwnKTtcbiAgICAgIGxldCBib3R0b21SaWdodHRTbWFsbCA9ICQodGhpc1NlYykuZmluZCgnI2JvdHRvbS1yaWdodC1zbWFsbCcpO1xuICAgICAgbGV0IHNtYWxsc0dyb3VwID0gW3RvcFNtYWxsLCBib3R0b21TbWFsbCwgY2VudGVyU21hbGwsIHRvcExlZnRTbWFsbCwgdG9wUmlnaHR0U21hbGwsIGJvdHRvbUxlZnRTbWFsbCwgYm90dG9tUmlnaHR0U21hbGxdO1xuICAgICAgLy8gQXJyb3cgUGllY2VzXG4gICAgICBsZXQgZG93bkFycm93ID0gJCh0aGlzU2VjKS5maW5kKCcjZG93bi1hcnJvdycpO1xuICAgICAgbGV0IGRvd25BcnJvd0xpbmUgPSAkKHRoaXNTZWMpLmZpbmQoJyNkb3duLWFycm93LWxpbmUnKTtcbiAgICAgIGxldCBkb3duQXJyb3dQb2ludCA9ICQodGhpc1NlYykuZmluZCgnI2Rvd24tYXJyb3ctcG9pbnQnKTtcblxuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuMyxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgLy8gUmVsZWFzZSBUaGUgU2Nyb2xsIExvY2tcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICBnc2FwLnNldChkb2N1bWVudC5ib2R5LCB7b3ZlcmZsb3c6IFwiYXV0b1wifSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBsZXQgbGluZVRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246MC44LFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbGV0IGFycm93VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjE1LFxuICAgICAgICAgIGVhc2U6XCJub25lXCJcbiAgICAgICAgfSwgXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgLy8gQm91bmNlIFRoZSBEb3duIEFycm93XG4gICAgICAgICAgZ3NhcC50aW1lbGluZSh7cmVwZWF0Oi0xLCB5b3lvOnRydWV9KS50byhkb3duQXJyb3csIHt5Oi00LCBkdXJhdGlvbjoxLCBlYXNlOlwibm9uZVwifSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmV2ZXJzZUNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgICAgIC8vIFN0b3AgQm91bmNpbiBUaGUgRG93biBBcnJvdyBhbmQgUmVzZXQgaXQncyBZIHBvc2l0aW9uXG4gICAgICAgICAgZ3NhcC5raWxsVHdlZW5zT2YoZG93bkFycm93KTtcbiAgICAgICAgICBnc2FwLnNldChkb3duQXJyb3csIHt5OjB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGxldCBjb250ZW50VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjQsXG4gICAgICAgICAgZWFzZTpcImJhY2sub3V0KDEuNSlcIlxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgLy8gU2V0IGJhY2tncm91bmQgei1pbmRleCBieSBzZWN0aW9uIG51bWJlciAvIFNlY3Rpb24gMiBoYXMgbm8gYmFjayAvIFNlY3Rpb24gMyBpcyB6LWluZGV4IDExMCB0byBzdGF5IGFib3ZlIGFsbFxuICAgICAgdGwuc2V0KHRoaXNPdmVybGF5LCB7ekluZGV4OjEwMX0pO1xuICAgICAgLy8gU2V0IHNlY3Rpb24gei1pbmRleCBieSBzZWN0aW9uIG51bWJlclxuICAgICAgdGwuZnJvbVRvKHRoaXNTZWMsIHt6SW5kZXg6MTN9LHt6SW5kZXg6MTAwMX0pO1xuICAgICAgXG4gICAgICAvLyBBbmltYXRlIExpbmVzXG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjRMLCB7ZHJhd1NWRzpcIjAlIDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjRSLCB7ZHJhd1NWRzpcIjEwMCUgMTAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXIzTCwge2RyYXdTVkc6XCIwJSAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXIzUiwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyMkwsIHtkcmF3U1ZHOlwiMCUgMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyMlIsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjEsIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCIsIGR1cmF0aW9uOjAuN30sIFwic2Nyb2xsSW4rPTAuMVwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oc21hbGxzR3JvdXAsIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCIsIGR1cmF0aW9uOjAuNn0sIFwic2Nyb2xsSW4rPTAuMlwiKTtcbiAgICAgIFxuICAgICAgLy8gQW5pbWF0ZSBDb250ZW50XG4gICAgICBjb250ZW50VEwuZnJvbVRvKGNoYXJzSDIsIFxuICAgICAgICB7eDotMjAsIG9wYWNpdHk6MH0sXG4gICAgICAgIHt4OjAsIG9wYWNpdHk6MSwgc3RhZ2dlcjp7YW1vdW50OjAuNX1cbiAgICAgIH0sIFwiY29udGVudFwiKTtcbiAgICAgIGNvbnRlbnRUTC5mcm9tVG8oY2hhcnNIMywgXG4gICAgICAgIHt5OicxLjAxZW0nfSxcbiAgICAgICAge3k6MCwgc3RhZ2dlcjoge2Ftb3VudDowLjIsIGZyb206XCJjZW50ZXJcIn1cbiAgICAgIH0sIFwiY29udGVudCs9MC4zNVwiKTtcbiAgICAgIFxuICAgICAgLy8gQW5pbWF0ZSBBcnJvd1xuICAgICAgYXJyb3dUTC5mcm9tVG8oZG93bkFycm93TGluZSwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGFycm93VEwuZnJvbVRvKGRvd25BcnJvd1BvaW50LCB7ZHJhd1NWRzpcIjUwJSA1MCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJbis9MC4xNDVcIik7XG4gICAgICBcbiAgICAgIC8vIEJ1aWxkIE1hc3RlciBUTFRMXG4gICAgICB0bC5mcm9tVG8odGhpc092ZXJsYXksIHtvcGFjaXR5OjB9LCB7b3BhY2l0eTowLjY1fSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmFkZChsaW5lVEwsIFwic2Nyb2xsSW5BbGwrPTAuM1wiKTtcbiAgICAgIHRsLmFkZChjb250ZW50VEwsIFwic2Nyb2xsSW5BbGwrPTAuOFwiKTtcbiAgICAgIHRsLmFkZChhcnJvd1RMLCBcInNjcm9sbEluQWxsKz0xLjRcIik7XG4gICAgICAgICAgICBcbiAgICAgIHJldHVybiB0bDtcbiAgICB9LFxuXG4gICAgc2VjdGlvbkFuaW0yIDogKCkgPT4ge1xuICAgICAgbGV0IHRoaXNTZWMgPSAkKCcjc2VjdGlvbjInKTtcbiAgICAgIGxldCBjaGFyc0gyID0gJCh0aGlzU2VjKS5maW5kKCcuaDJDaGFycycpO1xuICAgICAgbGV0IGxpbmVzUCA9ICQodGhpc1NlYykuZmluZCgnLnBMaW5lcycpO1xuICAgICAgLy8gQmFja2dyb3VuZCBTaGFwZSBWYXJzXG4gICAgICBsZXQgY2VudGVyNEwgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItNEwnKTtcbiAgICAgIGxldCBjZW50ZXI0UiA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci00UicpO1xuICAgICAgbGV0IGNlbnRlcjNMID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTNMJyk7XG4gICAgICBsZXQgY2VudGVyM1IgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItM1InKTtcbiAgICAgIGxldCBjZW50ZXIyTCA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci0yTCcpO1xuICAgICAgbGV0IGNlbnRlcjJSID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTJSJyk7XG4gICAgICBsZXQgY2VudGVyMSA9ICQodGhpc1NlYykuZmluZCgnI3RvcC1iaWcnKTtcbiAgICAgIGxldCB0b3BTbWFsbCA9ICQodGhpc1NlYykuZmluZCgnI3RvcC1zbWFsbCcpO1xuICAgICAgbGV0IGJvdHRvbVNtYWxsID0gJCh0aGlzU2VjKS5maW5kKCcjYm90dG9tLXNtYWxsJyk7XG4gICAgICBsZXQgY2VudGVyU21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItc21hbGwnKTtcbiAgICAgIGxldCB0b3BMZWZ0U21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoJyN0b3AtbGVmdC1zbWFsbCcpO1xuICAgICAgbGV0IHRvcFJpZ2h0dFNtYWxsID0gJCh0aGlzU2VjKS5maW5kKCcjdG9wLXJpZ2h0LXNtYWxsJyk7XG4gICAgICBsZXQgYm90dG9tTGVmdFNtYWxsID0gJCh0aGlzU2VjKS5maW5kKCcjYm90dG9tLWxlZnQtc21hbGwnKTtcbiAgICAgIGxldCBib3R0b21SaWdodHRTbWFsbCA9ICQodGhpc1NlYykuZmluZCgnI2JvdHRvbS1yaWdodC1zbWFsbCcpO1xuICAgICAgbGV0IHNtYWxsc0dyb3VwID0gW3RvcFNtYWxsLCBib3R0b21TbWFsbCwgY2VudGVyU21hbGwsIHRvcExlZnRTbWFsbCwgdG9wUmlnaHR0U21hbGwsIGJvdHRvbUxlZnRTbWFsbCwgYm90dG9tUmlnaHR0U21hbGxdO1xuICAgICAgLy8gQXJyb3cgUGllY2VzXG4gICAgICBsZXQgZG93bkFycm93ID0gJCh0aGlzU2VjKS5maW5kKCcjZG93bi1hcnJvdycpO1xuICAgICAgbGV0IGRvd25BcnJvd0xpbmUgPSAkKHRoaXNTZWMpLmZpbmQoJyNkb3duLWFycm93LWxpbmUnKTtcbiAgICAgIGxldCBkb3duQXJyb3dQb2ludCA9ICQodGhpc1NlYykuZmluZCgnI2Rvd24tYXJyb3ctcG9pbnQnKTtcbiAgICAgIGxldCBzZWN0aW9uVGV4dCA9ICQodGhpc1NlYykuZmluZCgnLmRvd24tYXJyb3ctdGV4dCcpO1xuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlbGF5OjAuNjUsXG4gICAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuMyxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgLy8gUmVsZWFzZSBUaGUgU2Nyb2xsIExvY2tcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICBnc2FwLnNldChkb2N1bWVudC5ib2R5LCB7b3ZlcmZsb3c6IFwiYXV0b1wifSlcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGxldCBsaW5lVEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjgsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBsZXQgY29udGVudFRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246MC4xNSxcbiAgICAgICAgICBlYXNlOlwiYmFjay5vdXQoMS41KVwiXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBsZXQgYXJyb3dUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuMTUsXG4gICAgICAgICAgZWFzZTpcIm5vbmVcIlxuICAgICAgICB9LCBcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAvLyBCb3VuY2UgVGhlIERvd24gQXJyb3dcbiAgICAgICAgICBnc2FwLnRpbWVsaW5lKHtyZXBlYXQ6LTEsIHlveW86dHJ1ZX0pLnRvKGRvd25BcnJvdywge3k6LTMsIGR1cmF0aW9uOjEsIGVhc2U6XCJub25lXCJ9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25SZXZlcnNlQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgLy8gU3RvcCBCb3VuY2luIFRoZSBEb3duIEFycm93IGFuZCBSZXNldCBpdCdzIFkgcG9zaXRpb25cbiAgICAgICAgICBnc2FwLmtpbGxUd2VlbnNPZihkb3duQXJyb3cpO1xuICAgICAgICAgIGdzYXAuc2V0KGRvd25BcnJvdywge3k6MH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gU2V0IHNlY3Rpb24gei1pbmRleCBieSBzZWN0aW9uIG51bWJlclxuICAgICAgdGwuZnJvbVRvKHRoaXNTZWMsIHt6SW5kZXg6MTN9LHt6SW5kZXg6MTAwMn0pO1xuICAgICAgXG4gICAgICAvLyBBbmltYXRlIExpbmVzXG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjRMLCB7ZHJhd1NWRzpcIjEwMCUgMTAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXI0Uiwge2RyYXdTVkc6XCIwJSAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXIzTCwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyM1IsIHtkcmF3U1ZHOlwiMCUgMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyMkwsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjJSLCB7ZHJhd1NWRzpcIjAlIDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjEsIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCIsIGR1cmF0aW9uOjAuN30sIFwic2Nyb2xsSW4rPTAuMVwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oc21hbGxzR3JvdXAsIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCIsIGR1cmF0aW9uOjAuNn0sIFwic2Nyb2xsSW4rPTAuMlwiKTtcbiAgICAgIFxuICAgICAgLy8gQW5pbWF0ZSBDb250ZW50XG4gICAgICBjb250ZW50VEwuZnJvbVRvKGNoYXJzSDIsIFxuICAgICAgICB7eDotMjAsIG9wYWNpdHk6MH0sXG4gICAgICAgIHt4OjAsIG9wYWNpdHk6IDEsIHN0YWdnZXI6e2Ftb3VudDowLjMsIGZyb206XCJyYW5kb21cIn19LCBcbiAgICAgIFwic2Nyb2xsSW5cIik7XG4gICAgICBjb250ZW50VEwuZnJvbVRvKGxpbmVzUCxcbiAgICAgICAge29wYWNpdHk6MCwgeDotNDB9LFxuICAgICAgICB7b3BhY2l0eToxLCB4OjAsIHN0YWdnZXI6e2Ftb3VudDowLjN9fSwgXG4gICAgICBcInNjcm9sbEluKz0wLjFcIik7XG4gICAgICBcbiAgICAgIC8vIEFuaW1hdGUgQXJyb3dcbiAgICAgIGFycm93VEwuZnJvbVRvKHNlY3Rpb25UZXh0LCB7eTotNiwgb3BhY2l0eTowfSwge3k6MCwgb3BhY2l0eToxfSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGFycm93VEwuZnJvbVRvKGRvd25BcnJvd0xpbmUsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW4rPTAuMDI1XCIpO1xuICAgICAgYXJyb3dUTC5mcm9tVG8oZG93bkFycm93UG9pbnQsIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluKz0wLjE3NVwiKTtcbiAgICAgIFxuICAgICAgLy8gQnVpbGQgTWFzdGVyIFRMVExcbiAgICAgIHRsLnRvKCcuaGVhZGVyLWxvZ28nLCB7ZHVyYXRpb246MC45LHdpZHRoOjE5MCwgZWFzZTpcInNpbmUub3V0XCJ9LFwic2Nyb2xsSW5BbGwrPTAuMVwiKTtcbiAgICAgIHRsLmFkZChsaW5lVEwsIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5hZGQoY29udGVudFRMLCBcInNjcm9sbEluQWxsKz0wLjc1XCIpO1xuICAgICAgdGwuYWRkKGFycm93VEwsIFwic2Nyb2xsSW5BbGwrPTAuN1wiKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHRsO1xuICAgIH0sXG4gICAgXG5cbiAgICBzZWN0aW9uQW5pbTMgOiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9ICQoJyNzZWN0aW9uMycpO1xuICAgICAgbGV0IHRoaXNCYWNrID0gJCgnI2JhY2tncm91bmQzJyk7XG4gICAgICBsZXQgY2VudGVyNEwgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItNEwnKTtcbiAgICAgIGxldCBjZW50ZXI0UiA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci00UicpO1xuICAgICAgbGV0IGNlbnRlcjNMID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTNMJyk7XG4gICAgICBsZXQgY2VudGVyM1IgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItM1InKTtcbiAgICAgIGxldCBjZW50ZXIyTCA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci0yTCcpO1xuICAgICAgbGV0IGNlbnRlcjJSID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTJSJyk7XG4gICAgICBsZXQgYm90dG9tU21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoJyNib3R0b20tc21hbGwnKTtcbiAgICAgIC8vIEFycm93IFBpZWNlc1xuICAgICAgbGV0IGRvd25BcnJvdyA9ICQodGhpc1NlYykuZmluZCgnI2Rvd24tYXJyb3cnKTtcbiAgICAgIGxldCBkb3duQXJyb3dMaW5lID0gJCh0aGlzU2VjKS5maW5kKCcjZG93bi1hcnJvdy1saW5lJyk7XG4gICAgICBsZXQgZG93bkFycm93UG9pbnQgPSAkKHRoaXNTZWMpLmZpbmQoJyNkb3duLWFycm93LXBvaW50Jyk7XG4gICAgICBsZXQgc2VjdGlvblRleHQgPSAkKHRoaXNTZWMpLmZpbmQoJy5kb3duLWFycm93LXRleHQnKTtcbiAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWxheTowLjMsXG4gICAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuMyxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgLy8gUmVsZWFzZSBUaGUgU2Nyb2xsIExvY2tcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICBnc2FwLnNldChkb2N1bWVudC5ib2R5LCB7b3ZlcmZsb3c6IFwiYXV0b1wifSlcbiAgICAgICAgfSxcbiAgICAgICAgb25SZXZlcnNlQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgLy8gU2V0IHRoZSBCYWNrZ3JvdW5kIEJhY2sgQmVoaW5kXG4gICAgICAgICAgZ3NhcC5zZXQodGhpc0JhY2ssIHt6SW5kZXg6OTl9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGxldCBsaW5lVEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjgsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBsZXQgY29udGVudFRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246MC42LFxuICAgICAgICAgIGVhc2U6XCJiYWNrLm91dCguMilcIlxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbGV0IGFycm93VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjE1LFxuICAgICAgICAgIGVhc2U6XCJub25lXCJcbiAgICAgICAgfSwgXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgLy8gQm91bmNlIFRoZSBEb3duIEFycm93XG4gICAgICAgICAgZ3NhcC50aW1lbGluZSh7cmVwZWF0Oi0xLCB5b3lvOnRydWV9KS50byhkb3duQXJyb3csIHt5Oi00LCBkdXJhdGlvbjoxLCBlYXNlOlwibm9uZVwifSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmV2ZXJzZUNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgICAgIC8vIFN0b3AgQm91bmNpbiBUaGUgRG93biBBcnJvdyBhbmQgUmVzZXQgaXQncyBZIHBvc2l0aW9uXG4gICAgICAgICAgZ3NhcC5raWxsVHdlZW5zT2YoZG93bkFycm93KTtcbiAgICAgICAgICBnc2FwLnNldChkb3duQXJyb3csIHt5OjB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIFNldCBiYWNrZ3JvdW5kIHotaW5kZXggYnkgc2VjdGlvbiBudW1iZXIgLyBTZWN0aW9uIDIgaGFzIG5vIGJhY2sgLyBTZWN0aW9uIDMgaXMgei1pbmRleCAxMTAgdG8gc3RheSBhYm92ZSBhbGxcbiAgICAgIHRsLnNldCh0aGlzQmFjaywge29wYWNpdHk6MSwgekluZGV4OjExMH0pO1xuICAgICAgLy8gU2V0IHNlY3Rpb24gei1pbmRleCBieSBzZWN0aW9uIG51bWJlclxuICAgICAgdGwuZnJvbVRvKHRoaXNTZWMsIHt6SW5kZXg6MTN9LHt6SW5kZXg6MTAwM30pO1xuICAgICAgXG4gICAgICAvLyBBbmltYXRlIExpbmVzXG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjRMLCB7ZHJhd1NWRzpcIjAlIDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjRSLCB7ZHJhd1NWRzpcIjEwMCUgMTAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXIzTCwge2RyYXdTVkc6XCIwJSAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXIzUiwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyMkwsIHtkcmF3U1ZHOlwiMCUgMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyMlIsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICAgICAgXG4gICAgICAvLyBBbmltYXRlIENvbnRlbnRcbiAgICAgIGNvbnRlbnRUTC5mcm9tVG8oYm90dG9tU21hbGwsIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSwge2RyYXdTVkc6XCIwJSAxMDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgY29udGVudFRMLmZyb21UbygnLnZpZGVvQXJlYScsIHtoZWlnaHQ6MH0sIHtoZWlnaHQ6J2F1dG8nfSwgXCJzY3JvbGxJbis9MC4yXCIpO1xuICAgICAgXG4gICAgICAvLyBBbmltYXRlIEFycm93XG4gICAgICBhcnJvd1RMLmZyb21UbyhzZWN0aW9uVGV4dCwge3k6LTYsIG9wYWNpdHk6MH0sIHt5OjAsIG9wYWNpdHk6MX0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBhcnJvd1RMLmZyb21Ubyhkb3duQXJyb3dMaW5lLCB7ZHJhd1NWRzpcIjEwMCUgMTAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluKz0wLjAyNVwiKTtcbiAgICAgIGFycm93VEwuZnJvbVRvKGRvd25BcnJvd1BvaW50LCB7ZHJhd1NWRzpcIjUwJSA1MCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJbis9MC4xNzVcIik7XG4gICAgICBcbiAgICAgIC8vIEJ1aWxkIE1hc3RlciBUTCBUTFxuICAgICAgdGwuYWRkKGxpbmVUTCwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21Ubyh0aGlzQmFjaywge3k6Jy0xMDAlJ30se3k6MH0sIFwic2Nyb2xsSW5BbGwrPTAuNTVcIik7XG4gICAgICB0bC5hZGQoY29udGVudFRMLCBcInNjcm9sbEluQWxsKz0wLjc1XCIpO1xuICAgICAgdGwuYWRkKGFycm93VEwsIFwic2Nyb2xsSW5BbGwrPTFcIik7XG4gICAgICBcbiAgICAgIHJldHVybiB0bDtcbiAgICB9LFxuXG4gICAgc2VjdGlvbkFuaW00OiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9ICQoJyNzZWN0aW9uNCcpO1xuICAgICAgbGV0IHRoaXNCYWNrID0gJCgnI2JhY2tncm91bmQ0Jyk7XG4gICAgICBsZXQgY2hhcnNIMiA9ICQodGhpc1NlYykuZmluZCgnLmgyQ2hhcnMnKTtcbiAgICAgIGxldCBsaW5lc1AgPSAkKHRoaXNTZWMpLmZpbmQoJy5wTGluZXMnKTtcbiAgICAgIGxldCBzb2xvQ2VudGVyMiA9ICQodGhpc1NlYykuZmluZCgnI3NvbG8tY2VudGVyLTInKTtcbiAgICAgIGxldCBzb2xvQ2VudGVyMSA9ICQodGhpc1NlYykuZmluZCgnI3NvbG8tY2VudGVyLTEnKTtcbiAgICAgIGxldCBib3R0b21TbWFsbCA9ICQodGhpc1NlYykuZmluZCgnI2JvdHRvbS1zbWFsbCcpO1xuICAgICAgLy8gQXJyb3cgUGllY2VzXG4gICAgICBsZXQgZG93bkFycm93ID0gJCh0aGlzU2VjKS5maW5kKCcjZG93bi1hcnJvdycpO1xuICAgICAgbGV0IGRvd25BcnJvd0xpbmUgPSAkKHRoaXNTZWMpLmZpbmQoJyNkb3duLWFycm93LWxpbmUnKTtcbiAgICAgIGxldCBkb3duQXJyb3dQb2ludCA9ICQodGhpc1NlYykuZmluZCgnI2Rvd24tYXJyb3ctcG9pbnQnKTtcbiAgICAgIGxldCBzZWN0aW9uVGV4dCA9ICQodGhpc1NlYykuZmluZCgnLmRvd24tYXJyb3ctdGV4dCcpOyAgXG4gICAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgcGF1c2VkOnRydWUsXG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246MC4zLFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9LFxuICAgICAgICAvLyBSZWxlYXNlIFRoZSBTY3JvbGwgTG9ja1xuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgICAgIGdzYXAuc2V0KGRvY3VtZW50LmJvZHksIHtvdmVyZmxvdzogXCJhdXRvXCJ9KVxuICAgICAgICAgIC8vIGdzYXAuc2V0KCcjYmFja2dyb3VuZDEnLCB7b3BhY2l0eToxfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBsZXQgbGluZVRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246MC42LFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbGV0IGNvbnRlbnRUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuMyxcbiAgICAgICAgICBlYXNlOlwiYmFjay5vdXQoMS41KVwiXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBsZXQgYXJyb3dUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuMTUsXG4gICAgICAgICAgZWFzZTpcIm5vbmVcIlxuICAgICAgICB9LCBcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAvLyBCb3VuY2UgVGhlIERvd24gQXJyb3dcbiAgICAgICAgICBnc2FwLnRpbWVsaW5lKHtyZXBlYXQ6LTEsIHlveW86dHJ1ZX0pLnRvKGRvd25BcnJvdywge3k6LTQsIGR1cmF0aW9uOjEsIGVhc2U6XCJub25lXCJ9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25SZXZlcnNlQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgLy8gU3RvcCBCb3VuY2luIFRoZSBEb3duIEFycm93IGFuZCBSZXNldCBpdCdzIFkgcG9zaXRpb25cbiAgICAgICAgICBnc2FwLmtpbGxUd2VlbnNPZihkb3duQXJyb3cpO1xuICAgICAgICAgIGdzYXAuc2V0KGRvd25BcnJvdywge3k6MH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gU2V0IGJhY2tncm91bmQgei1pbmRleCBieSBzZWN0aW9uIG51bWJlciAvIFNlY3Rpb24gMiBoYXMgbm8gYmFjayAvIFNlY3Rpb24gMyBpcyB6LWluZGV4IDExMCB0byBzdGF5IGFib3ZlIGFsbFxuICAgICAgdGwuc2V0KHRoaXNCYWNrLCB7ekluZGV4OjEwNH0pO1xuICAgICAgLy8gU2V0IHNlY3Rpb24gei1pbmRleCBieSBzZWN0aW9uIG51bWJlclxuICAgICAgdGwuZnJvbVRvKHRoaXNTZWMsIHt6SW5kZXg6MTN9LHt6SW5kZXg6MTAwNH0pO1xuICAgICAgXG4gICAgICAvLyBBbmltYXRlIExpbmVzXG4gICAgICBsaW5lVEwuZnJvbVRvKHNvbG9DZW50ZXIxLCB7ZHJhd1NWRzpcIjUwJSA1MCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oc29sb0NlbnRlcjIsIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21Ubyhib3R0b21TbWFsbCwge2RyYXdTVkc6XCI1MCUgNTAlXCJ9LCB7ZHJhd1NWRzpcIjAlIDEwMCVcIiwgZHVyYXRpb246MC41fSwgXCJzY3JvbGxJbis9MC4zXCIpO1xuICAgICAgXG4gICAgICAvLyBBbmltYXRlIENvbnRlbnRcbiAgICAgIGNvbnRlbnRUTC5mcm9tVG8oY2hhcnNIMiwgXG4gICAgICAgIHt4Oi0yMCwgb3BhY2l0eTowfSxcbiAgICAgICAge3g6MCwgb3BhY2l0eTogMSwgc3RhZ2dlcjp7YW1vdW50OjAuMywgZnJvbTpcInJhbmRvbVwifX0sIFxuICAgICAgXCJzY3JvbGxJblwiKTtcbiAgICAgIGNvbnRlbnRUTC5mcm9tVG8obGluZXNQLFxuICAgICAgICB7b3BhY2l0eTowLCB4Oi00MH0sXG4gICAgICAgIHtvcGFjaXR5OjEsIHg6MCwgc3RhZ2dlcjp7YW1vdW50OjAuM319LCBcbiAgICAgIFwic2Nyb2xsSW4rPTAuMVwiKTtcbiAgICAgIFxuICAgICAgLy8gQW5pbWF0ZSBBcnJvd1xuICAgICAgYXJyb3dUTC5mcm9tVG8oc2VjdGlvblRleHQsIHt5Oi02LCBvcGFjaXR5OjB9LCB7eTowLCBvcGFjaXR5OjF9LCBcInNjcm9sbEluXCIpO1xuICAgICAgYXJyb3dUTC5mcm9tVG8oZG93bkFycm93TGluZSwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJbis9MC4wMjVcIik7XG4gICAgICBhcnJvd1RMLmZyb21Ubyhkb3duQXJyb3dQb2ludCwge2RyYXdTVkc6XCI1MCUgNTAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW4rPTAuMTc1XCIpO1xuICAgICAgXG4gICAgICAvLyBCdWlsZCBNYXN0ZXIgVExUTFxuICAgICAgdGwuZnJvbVRvKHRoaXNCYWNrLCB7b3BhY2l0eTowfSx7b3BhY2l0eToxfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmFkZChsaW5lVEwsIFwic2Nyb2xsSW5BbGwrPTAuOVwiKTtcbiAgICAgIHRsLmFkZChjb250ZW50VEwsIFwic2Nyb2xsSW5BbGwrPTEuNVwiKTtcbiAgICAgIHRsLmFkZChhcnJvd1RMLCBcInNjcm9sbEluQWxsKz0xLjVcIik7XG4gICAgICBcbiAgICAgIHJldHVybiB0bDtcbiAgICB9LFxuXG4gICAgc2VjdGlvbkFuaW01OiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9ICQoJyNzZWN0aW9uNScpO1xuICAgICAgbGV0IHRoaXNCYWNrID0gJCgnI2JhY2tncm91bmQ1Jyk7XG4gICAgICBsZXQgdGhpc092ZXJsYXkgPSAkKCcjb3ZlcmxheTUnKTtcbiAgICAgIGxldCBjaGFyc0gyID0gJCh0aGlzU2VjKS5maW5kKCcuaDJDaGFycycpO1xuICAgICAgbGV0IGxpbmVzUCA9ICQodGhpc1NlYykuZmluZCgnLnBMaW5lcycpO1xuICAgICAgbGV0IGNlbnRlcjRMID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTRMJyk7XG4gICAgICBsZXQgY2VudGVyNFIgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItNFInKTtcbiAgICAgIGxldCBjZW50ZXIzTCA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci0zTCcpO1xuICAgICAgbGV0IGNlbnRlcjNSID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTNSJyk7XG4gICAgICBsZXQgY2VudGVyMkwgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItMkwnKTtcbiAgICAgIGxldCBjZW50ZXIyUiA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci0yUicpO1xuICAgICAgLy8gQXJyb3cgUGllY2VzXG4gICAgICBsZXQgZG93bkFycm93ID0gJCh0aGlzU2VjKS5maW5kKCcjZG93bi1hcnJvdycpO1xuICAgICAgbGV0IGRvd25BcnJvd0xpbmUgPSAkKHRoaXNTZWMpLmZpbmQoJyNkb3duLWFycm93LWxpbmUnKTtcbiAgICAgIGxldCBkb3duQXJyb3dQb2ludCA9ICQodGhpc1NlYykuZmluZCgnI2Rvd24tYXJyb3ctcG9pbnQnKTtcbiAgICAgIGxldCBzZWN0aW9uVGV4dCA9ICQodGhpc1NlYykuZmluZCgnLmRvd24tYXJyb3ctdGV4dCcpO1xuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuNSxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgLy8gUmVsZWFzZSBUaGUgU2Nyb2xsIExvY2tcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICBnc2FwLnNldChkb2N1bWVudC5ib2R5LCB7b3ZlcmZsb3c6IFwiYXV0b1wifSlcbiAgICAgICAgICAvLyBnc2FwLnNldCgnI2JhY2tncm91bmQxJywge29wYWNpdHk6MH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbGV0IGxpbmVUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuNixcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGxldCBjb250ZW50VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjMsXG4gICAgICAgICAgZWFzZTpcImJhY2sub3V0KDEuNSlcIlxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbGV0IGFycm93VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjE1LFxuICAgICAgICAgIGVhc2U6XCJub25lXCJcbiAgICAgICAgfSwgXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgLy8gQm91bmNlIFRoZSBEb3duIEFycm93XG4gICAgICAgICAgZ3NhcC50aW1lbGluZSh7cmVwZWF0Oi0xLCB5b3lvOnRydWV9KS50byhkb3duQXJyb3csIHt5Oi00LCBkdXJhdGlvbjoxLCBlYXNlOlwibm9uZVwifSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmV2ZXJzZUNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgICAgIC8vIFN0b3AgQm91bmNpbiBUaGUgRG93biBBcnJvdyBhbmQgUmVzZXQgaXQncyBZIHBvc2l0aW9uXG4gICAgICAgICAgZ3NhcC5raWxsVHdlZW5zT2YoZG93bkFycm93KTtcbiAgICAgICAgICBnc2FwLnNldChkb3duQXJyb3csIHt5OjB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIC8vIFNldCBiYWNrZ3JvdW5kIHotaW5kZXggYnkgc2VjdGlvbiBudW1iZXIgLyBTZWN0aW9uIDIgaGFzIG5vIGJhY2sgLyBTZWN0aW9uIDMgaXMgei1pbmRleCAxMTAgdG8gc3RheSBhYm92ZSBhbGxcbiAgICAgIHRsLnNldCh0aGlzQmFjaywge3pJbmRleDoxMDV9KTtcbiAgICAgIHRsLnNldCh0aGlzT3ZlcmxheSwge3pJbmRleDoxMDV9KTtcbiAgICAgIC8vIFNldCBzZWN0aW9uIHotaW5kZXggYnkgc2VjdGlvbiBudW1iZXJcbiAgICAgIHRsLmZyb21Ubyh0aGlzU2VjLCB7ekluZGV4OjEzfSx7ekluZGV4OjEwMDV9KTtcblxuICAgICAgLy8gQW5pbWF0ZSBMaW5lc1xuICAgICAgLy8gbGluZVRMLmZyb21UbyhjZW50ZXI0TCwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIC8vIGxpbmVUTC5mcm9tVG8oY2VudGVyNFIsIHtkcmF3U1ZHOlwiMCUgMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIC8vIGxpbmVUTC5mcm9tVG8oY2VudGVyM0wsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICAvLyBsaW5lVEwuZnJvbVRvKGNlbnRlcjNSLCB7ZHJhd1NWRzpcIjAlIDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICAvLyBsaW5lVEwuZnJvbVRvKGNlbnRlcjJMLCB7ZHJhd1NWRzpcIjEwMCUgMTAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgLy8gbGluZVRMLmZyb21UbyhjZW50ZXIyUiwge2RyYXdTVkc6XCIwJSAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuXG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjRMLCB7ZHJhd1NWRzpcIjAlIDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjRSLCB7ZHJhd1NWRzpcIjEwMCUgMTAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXIzTCwge2RyYXdTVkc6XCIwJSAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXIzUiwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyMkwsIHtkcmF3U1ZHOlwiMCUgMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyMlIsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKCcjaG9uZXlDbGlwRW5kJyxcbiAgICAgICAge21vcnBoU1ZHOiB7c2hhcGU6XCIjaG9uZXlDbGlwU3RhcnRcIn19LFxuICAgICAgICB7bW9ycGhTVkc6IHtzaGFwZTpcIiNob25leUNsaXBFbmRcIn0sZHVyYXRpb246MC40LCBlYXNlOlwic2luZS5vdXRcIn0sXG4gICAgICBcInNjcm9sbEluXCIpO1xuXG4gICAgICAvLyBBbmltYXRlIENvbnRlbnRcbiAgICAgIGNvbnRlbnRUTC5mcm9tVG8oY2hhcnNIMiwgXG4gICAgICAgIHt4Oi0yMCwgb3BhY2l0eTowfSxcbiAgICAgICAge3g6MCwgb3BhY2l0eTogMSwgc3RhZ2dlcjp7YW1vdW50OjAuMywgZnJvbTpcInJhbmRvbVwifX0sIFxuICAgICAgXCJzY3JvbGxJblwiKTtcbiAgICAgIGNvbnRlbnRUTC5mcm9tVG8obGluZXNQLFxuICAgICAgICB7b3BhY2l0eTowLCB4Oi00MH0sXG4gICAgICAgIHtvcGFjaXR5OjEsIHg6MCwgc3RhZ2dlcjp7YW1vdW50OjAuM319LCBcbiAgICAgIFwic2Nyb2xsSW4rPTAuMVwiKTtcbiAgIFxuICBcbiAgICAgIC8vIEFuaW1hdGUgQXJyb3dcbiAgICAgIGFycm93VEwuZnJvbVRvKCcjYm90dG9tLXNtYWxsLTInLCB7ZHJhd1NWRzpcIjUwJSA1MCVcIn0sIHtkcmF3U1ZHOlwiMCUgMTAwJVwiLCBkdXJhdGlvbjowLjMsIGVhc2U6XCJzaW5lLm91dFwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGFycm93VEwuZnJvbVRvKHNlY3Rpb25UZXh0LCB7eTotNiwgb3BhY2l0eTowfSwge3k6MCwgb3BhY2l0eToxfSwgXCJzY3JvbGxJbis9MC4xXCIpO1xuICAgICAgYXJyb3dUTC5mcm9tVG8oZG93bkFycm93TGluZSwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJbis9MC4xMjVcIik7XG4gICAgICBhcnJvd1RMLmZyb21Ubyhkb3duQXJyb3dQb2ludCwge2RyYXdTVkc6XCI1MCUgNTAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW4rPTAuMjc1XCIpO1xuICAgICAgXG4gICAgICAvLyBCdWlsZCBNYXN0ZXIgVExUTFxuICAgICAgdGwuZnJvbVRvKHRoaXNPdmVybGF5LCB7b3BhY2l0eTowfSwge29wYWNpdHk6MC45fSwgXCJzY3JvbGxJbkFsbCs9MC44XCIpO1xuICAgICAgdGwuZnJvbVRvKHRoaXNCYWNrLCB7b3BhY2l0eTowfSx7b3BhY2l0eToxLCBkdXJhdGlvbjoxfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmFkZChsaW5lVEwsIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5hZGQoY29udGVudFRMLCBcInNjcm9sbEluQWxsKz0xXCIpO1xuICAgICAgdGwuYWRkKGFycm93VEwsIFwic2Nyb2xsSW5BbGwrPTFcIik7XG5cbiAgICAgIHJldHVybiB0bDtcbiAgICAgIFxuICAgIH0sXG5cbiAgICBzZWN0aW9uQW5pbTY6ICgpID0+IHtcbiAgICAgIGxldCB0aGlzU2VjID0gJCgnI3NlY3Rpb242Jyk7XG4gICAgICBsZXQgdGhpc0JhY2sgPSAkKCcjYmFja2dyb3VuZDYnKTtcbiAgICAgIGxldCBjaGFyc0gyID0gJCh0aGlzU2VjKS5maW5kKCcuaDJDaGFycycpO1xuICAgICAgbGV0IGxpbmVzUCA9ICQodGhpc1NlYykuZmluZCgnLnBMaW5lcycpO1xuICAgICAgbGV0IHRoaXNPdmVybGF5ID0gJCgnI292ZXJsYXk2Jyk7XG4gICAgICBsZXQgY2VudGVyNEwgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItNEwnKTtcbiAgICAgIGxldCBjZW50ZXI0UiA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci00UicpO1xuICAgICAgbGV0IGNlbnRlcjNMID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTNMJyk7XG4gICAgICBsZXQgY2VudGVyM1IgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItM1InKTtcbiAgICAgIGxldCBjZW50ZXIyTCA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci0yTCcpO1xuICAgICAgbGV0IGNlbnRlcjJSID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTJSJyk7XG4gICAgICBsZXQgYm90dG9tU21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoJyNib3R0b20tc21hbGwnKTtcbiAgICAgIC8vIEFycm93IFBpZWNlc1xuICAgICAgbGV0IGRvd25BcnJvdyA9ICQodGhpc1NlYykuZmluZCgnI2Rvd24tYXJyb3cnKTtcbiAgICAgIGxldCBkb3duQXJyb3dMaW5lID0gJCh0aGlzU2VjKS5maW5kKCcjZG93bi1hcnJvdy1saW5lJyk7XG4gICAgICBsZXQgZG93bkFycm93UG9pbnQgPSAkKHRoaXNTZWMpLmZpbmQoJyNkb3duLWFycm93LXBvaW50Jyk7XG4gICAgICBsZXQgc2VjdGlvblRleHQgPSAkKHRoaXNTZWMpLmZpbmQoJy5kb3duLWFycm93LXRleHQnKTtcbiAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjUsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIFJlbGVhc2UgVGhlIFNjcm9sbCBMb2NrXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgZ3NhcC5zZXQoZG9jdW1lbnQuYm9keSwge292ZXJmbG93OiBcImF1dG9cIn0pXG4gICAgICAgICAgLy8gZ3NhcC5zZXQoJyNiYWNrZ3JvdW5kMScsIHtvcGFjaXR5OjB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGxldCBsaW5lVEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjgsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBsZXQgY29udGVudFRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246MC4zLFxuICAgICAgICAgIGVhc2U6XCJiYWNrLm91dCgxLjUpXCJcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGxldCBhcnJvd1RMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246MC4xNSxcbiAgICAgICAgICBlYXNlOlwibm9uZVwiXG4gICAgICAgIH0sIFxuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgICAgIC8vIEJvdW5jZSBUaGUgRG93biBBcnJvd1xuICAgICAgICAgIGdzYXAudGltZWxpbmUoe3JlcGVhdDotMSwgeW95bzp0cnVlfSkudG8oZG93bkFycm93LCB7eTotNCwgZHVyYXRpb246MSwgZWFzZTpcIm5vbmVcIn0pO1xuICAgICAgICB9LFxuICAgICAgICBvblJldmVyc2VDb21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAvLyBTdG9wIEJvdW5jaW4gVGhlIERvd24gQXJyb3cgYW5kIFJlc2V0IGl0J3MgWSBwb3NpdGlvblxuICAgICAgICAgIGdzYXAua2lsbFR3ZWVuc09mKGRvd25BcnJvdyk7XG4gICAgICAgICAgZ3NhcC5zZXQoZG93bkFycm93LCB7eTowfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgXG4gICAgICAvLyBTZXQgYmFja2dyb3VuZCB6LWluZGV4IGJ5IHNlY3Rpb24gbnVtYmVyIC8gU2VjdGlvbiAyIGhhcyBubyBiYWNrIC8gU2VjdGlvbiAzIGlzIHotaW5kZXggMTEwIHRvIHN0YXkgYWJvdmUgYWxsXG4gICAgICB0bC5zZXQodGhpc0JhY2ssIHt6SW5kZXg6MTA2fSk7XG4gICAgICB0bC5zZXQodGhpc092ZXJsYXksIHt6SW5kZXg6MTA2fSk7XG4gICAgICAvLyBTZXQgc2VjdGlvbiB6LWluZGV4IGJ5IHNlY3Rpb24gbnVtYmVyXG4gICAgICB0bC5mcm9tVG8odGhpc1NlYywge3pJbmRleDoxM30se3pJbmRleDoxMDA2fSk7XG5cbiAgICAgIC8vIEFuaW1hdGUgTGluZXNcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyNEwsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjRSLCB7ZHJhd1NWRzpcIjAlIDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjNMLCB7ZHJhd1NWRzpcIjEwMCUgMTAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXIzUiwge2RyYXdTVkc6XCIwJSAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXIyTCwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyMlIsIHtkcmF3U1ZHOlwiMCUgMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIFxuICAgICAgLy8gQW5pbWF0ZSBDb250ZW50XG4gICAgICBjb250ZW50VEwuZnJvbVRvKGNoYXJzSDIsIFxuICAgICAgICB7eDotMjAsIG9wYWNpdHk6MH0sXG4gICAgICAgIHt4OjAsIG9wYWNpdHk6IDEsIHN0YWdnZXI6e2Ftb3VudDowLjMsIGZyb206XCJyYW5kb21cIn19LCBcbiAgICAgIFwic2Nyb2xsSW5cIik7XG4gICAgICBjb250ZW50VEwuZnJvbVRvKGxpbmVzUCxcbiAgICAgICAge29wYWNpdHk6MCwgeDotNDB9LFxuICAgICAgICB7b3BhY2l0eToxLCB4OjAsIHN0YWdnZXI6e2Ftb3VudDowLjN9fSwgXG4gICAgICBcInNjcm9sbEluKz0wLjFcIik7XG4gICAgICBcbiAgICAgIC8vIEFuaW1hdGUgQXJyb3dcbiAgICAgIGFycm93VEwuZnJvbVRvKGJvdHRvbVNtYWxsLCB7ZHJhd1NWRzpcIjUwJSA1MCVcIn0sIHtkcmF3U1ZHOlwiMCUgMTAwJVwiLCBkdXJhdGlvbjowLjR9LCBcInNjcm9sbEluXCIpO1xuICAgICAgYXJyb3dUTC5mcm9tVG8oc2VjdGlvblRleHQsIHt5Oi02LCBvcGFjaXR5OjB9LCB7eTowLCBvcGFjaXR5OjF9LCBcInNjcm9sbEluKz0wLjE1XCIpO1xuICAgICAgYXJyb3dUTC5mcm9tVG8oZG93bkFycm93TGluZSwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJbis9MC4xNzVcIik7XG4gICAgICBhcnJvd1RMLmZyb21Ubyhkb3duQXJyb3dQb2ludCwge2RyYXdTVkc6XCI1MCUgNTAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW4rPTAuMzI1XCIpO1xuICAgICAgXG4gICAgICAvLyBCdWlsZCBNYXN0ZXIgVExUTFxuICAgICAgdGwuZnJvbVRvKHRoaXNPdmVybGF5LCB7b3BhY2l0eTowfSwge29wYWNpdHk6MC4xfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21Ubyh0aGlzQmFjaywge29wYWNpdHk6MH0se29wYWNpdHk6MX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5hZGQobGluZVRMLCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuYWRkKGNvbnRlbnRUTCwgXCJzY3JvbGxJbkFsbCs9MC42XCIpO1xuICAgICAgdGwuYWRkKGFycm93VEwsIFwic2Nyb2xsSW5BbGwrPTAuOFwiKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHRsOyAgXG4gICAgfSxcblxuICAgIHNlY3Rpb25BbmltNzogKCkgPT4ge1xuICAgICAgbGV0IHRoaXNTZWMgPSAkKCcjc2VjdGlvbjcnKTtcbiAgICAgIGxldCB0aGlzQmFjayA9ICQoJyNiYWNrZ3JvdW5kNycpO1xuICAgICAgbGV0IGNoYXJzSDIgPSAkKHRoaXNTZWMpLmZpbmQoJy5oMkNoYXJzJyk7XG4gICAgICBsZXQgbGluZXNQID0gJCh0aGlzU2VjKS5maW5kKCcucExpbmVzJyk7XG4gICAgICBsZXQgdGhpc092ZXJsYXkgPSAkKCcjb3ZlcmxheTcnKTtcbiAgICAgIGxldCBjZW50ZXI0TCA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci00TCcpO1xuICAgICAgbGV0IGNlbnRlcjRSID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTRSJyk7XG4gICAgICBsZXQgY2VudGVyM0wgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItM0wnKTtcbiAgICAgIGxldCBjZW50ZXIzUiA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci0zUicpO1xuICAgICAgbGV0IGNlbnRlcjJMID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTJMJyk7XG4gICAgICBsZXQgY2VudGVyMlIgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItMlInKTtcbiAgICAgIGxldCB0b3BTbWFsbCA9ICQodGhpc1NlYykuZmluZCgnI3RvcC1zbWFsbCcpO1xuICAgICAgbGV0IGJvdHRvbVNtYWxsID0gJCh0aGlzU2VjKS5maW5kKCcjYm90dG9tLXNtYWxsJyk7XG4gICAgICBsZXQgY2VudGVyU21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItc21hbGwnKTtcbiAgICAgIGxldCB0b3BMZWZ0U21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoJyN0b3AtbGVmdC1zbWFsbCcpO1xuICAgICAgbGV0IHRvcFJpZ2h0dFNtYWxsID0gJCh0aGlzU2VjKS5maW5kKCcjdG9wLXJpZ2h0LXNtYWxsJyk7XG4gICAgICBsZXQgYm90dG9tTGVmdFNtYWxsID0gJCh0aGlzU2VjKS5maW5kKCcjYm90dG9tLWxlZnQtc21hbGwnKTtcbiAgICAgIGxldCBib3R0b21SaWdodHRTbWFsbCA9ICQodGhpc1NlYykuZmluZCgnI2JvdHRvbS1yaWdodC1zbWFsbCcpO1xuICAgICAgbGV0IGltZ0NvbnRhaW5lciA9ICQodGhpc1NlYykuZmluZCgnLmltYWdlQ29udGFpbmVyJyk7XG4gICAgICBsZXQgc3ViSW1nID0gJChpbWdDb250YWluZXIpLmZpbmQoJ2ltZycpO1xuICAgICAgLy8gQXJyb3cgUGllY2VzXG4gICAgICBsZXQgZG93bkFycm93ID0gJCh0aGlzU2VjKS5maW5kKCcjZG93bi1hcnJvdycpO1xuICAgICAgbGV0IGRvd25BcnJvd0xpbmUgPSAkKHRoaXNTZWMpLmZpbmQoJyNkb3duLWFycm93LWxpbmUnKTtcbiAgICAgIGxldCBkb3duQXJyb3dQb2ludCA9ICQodGhpc1NlYykuZmluZCgnI2Rvd24tYXJyb3ctcG9pbnQnKTtcbiAgICAgIGxldCBzZWN0aW9uVGV4dCA9ICQodGhpc1NlYykuZmluZCgnLmRvd24tYXJyb3ctdGV4dCcpO1xuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuNixcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgLy8gUmVsZWFzZSBUaGUgU2Nyb2xsIExvY2tcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICBnc2FwLnNldChkb2N1bWVudC5ib2R5LCB7b3ZlcmZsb3c6IFwiYXV0b1wifSlcbiAgICAgICAgICAvLyBnc2FwLnNldCgnI2JhY2tncm91bmQxJywge29wYWNpdHk6MX0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbGV0IGxpbmVUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuOCxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGxldCBjb250ZW50VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjMsXG4gICAgICAgICAgZWFzZTpcImJhY2sub3V0KDEuNSlcIlxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gbGV0IGFycm93VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIC8vICAgZGVmYXVsdHM6IHtcbiAgICAgIC8vICAgICBkdXJhdGlvbjowLjE1LFxuICAgICAgLy8gICAgIGVhc2U6XCJub25lXCJcbiAgICAgIC8vICAgfSwgXG4gICAgICAvLyAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAvLyAgICAgLy8gQm91bmNlIFRoZSBEb3duIEFycm93XG4gICAgICAvLyAgICAgZ3NhcC50aW1lbGluZSh7cmVwZWF0Oi0xLCB5b3lvOnRydWV9KS50byhkb3duQXJyb3csIHt5Oi00LCBkdXJhdGlvbjoxLCBlYXNlOlwibm9uZVwifSk7XG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIG9uUmV2ZXJzZUNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgLy8gICAgIC8vIFN0b3AgQm91bmNpbiBUaGUgRG93biBBcnJvdyBhbmQgUmVzZXQgaXQncyBZIHBvc2l0aW9uXG4gICAgICAvLyAgICAgZ3NhcC5raWxsVHdlZW5zT2YoZG93bkFycm93KTtcbiAgICAgIC8vICAgICBnc2FwLnNldChkb3duQXJyb3csIHt5OjB9KTtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSk7XG4gICAgICBcbiAgICAgIC8vIFNldCBiYWNrZ3JvdW5kIHotaW5kZXggYnkgc2VjdGlvbiBudW1iZXIgLyBTZWN0aW9uIDIgaGFzIG5vIGJhY2sgLyBTZWN0aW9uIDMgaXMgei1pbmRleCAxMTAgdG8gc3RheSBhYm92ZSBhbGxcbiAgICAgIHRsLnNldCh0aGlzQmFjaywge3pJbmRleDoxMDd9KTtcbiAgICAgIHRsLnNldCh0aGlzT3ZlcmxheSwge3pJbmRleDoxMDd9KTtcbiAgICAgIC8vIFNldCBzZWN0aW9uIHotaW5kZXggYnkgc2VjdGlvbiBudW1iZXJcbiAgICAgIHRsLmZyb21Ubyh0aGlzU2VjLCB7ekluZGV4OjEzfSx7ekluZGV4OjEwMDd9KTtcblxuICAgICAgLy8gQW5pbWF0ZSBMaW5lc1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXI0TCwge2RyYXdTVkc6XCIwJSAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXI0Uiwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyM0wsIHtkcmF3U1ZHOlwiMCUgMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyM1IsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjJMLCB7ZHJhd1NWRzpcIjAlIDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjJSLCB7ZHJhd1NWRzpcIjEwMCUgMTAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhbdG9wU21hbGwsIGJvdHRvbVNtYWxsLCBjZW50ZXJTbWFsbF0sIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhbdG9wTGVmdFNtYWxsLCBib3R0b21MZWZ0U21hbGxdLCB7ZHJhd1NWRzpcIjUwJSA1MCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oW3RvcFJpZ2h0dFNtYWxsLCBib3R0b21SaWdodHRTbWFsbF0sIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICBcbiAgICAgIC8vIEFuaW1hdGUgQ29udGVudFxuICAgICAgY29udGVudFRMLmZyb21UbyhjaGFyc0gyLCBcbiAgICAgICAge3g6LTIwLCBvcGFjaXR5OjB9LFxuICAgICAgICB7eDowLCBvcGFjaXR5OiAxLCBzdGFnZ2VyOnthbW91bnQ6MC4zLCBmcm9tOlwicmFuZG9tXCJ9fSwgXG4gICAgICBcInNjcm9sbEluXCIpO1xuICAgICAgY29udGVudFRMLmZyb21UbyhsaW5lc1AsXG4gICAgICAgIHtvcGFjaXR5OjAsIHg6LTQwfSxcbiAgICAgICAge29wYWNpdHk6MSwgeDowLCBzdGFnZ2VyOnthbW91bnQ6MC4zfX0sIFxuICAgICAgXCJzY3JvbGxJbis9MC4xXCIpO1xuICAgICAgY29udGVudFRMLmZyb21UbyhcIi50ZXh0SW1hZ2VcIixcbiAgICAgICAge29wYWNpdHk6MCwgeDotNDB9LFxuICAgICAgICB7b3BhY2l0eToxLCB4OjB9LCBcbiAgICAgIFwic2Nyb2xsSW4rPTAuMVwiKTtcbiAgICAgIGNvbnRlbnRUTC5mcm9tVG8oJyNwYXJ0bmVyQ2xpcEVuZCcsXG4gICAgICAgIHttb3JwaFNWRzoge3NoYXBlOlwiI3BhcnRuZXJDbGlwU3RhcnRcIn19LFxuICAgICAgICB7bW9ycGhTVkc6IHtzaGFwZTpcIiNwYXJ0bmVyQ2xpcEVuZFwifSxkdXJhdGlvbjowLjQsIGVhc2U6XCJzaW5lLm91dFwifSxcbiAgICAgIFwic2Nyb2xsSW4rPTAuMlwiKTtcbiAgICAgIFxuICAgICAgLy8gLy8gQW5pbWF0ZSBBcnJvd1xuICAgICAgLy8gYXJyb3dUTC5mcm9tVG8oc2VjdGlvblRleHQsIHt5Oi02LCBvcGFjaXR5OjB9LCB7eTowLCBvcGFjaXR5OjF9LCBcInNjcm9sbEluXCIpO1xuICAgICAgLy8gYXJyb3dUTC5mcm9tVG8oZG93bkFycm93TGluZSwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJbis9MC4wMjVcIik7XG4gICAgICAvLyBhcnJvd1RMLmZyb21Ubyhkb3duQXJyb3dQb2ludCwge2RyYXdTVkc6XCI1MCUgNTAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW4rPTAuMTc1XCIpO1xuICAgICAgXG4gICAgICAvLyBCdWlsZCBNYXN0ZXIgVExUTFxuICAgICAgdGwuZnJvbVRvKHRoaXNPdmVybGF5LCB7b3BhY2l0eTowfSwge29wYWNpdHk6MC45fSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21Ubyh0aGlzQmFjaywge29wYWNpdHk6MH0se29wYWNpdHk6MX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5hZGQobGluZVRMLCBcInNjcm9sbEluQWxsKz0wLjJcIik7XG4gICAgICB0bC5hZGQoY29udGVudFRMLCBcInNjcm9sbEluQWxsKz0wLjZcIik7XG4gICAgICB0bC5mcm9tVG8oJy5mb290ZXJBcmVhJywge3k6JzEwMCUnfSwge3k6MCwgZHVyYXRpb246MC43LCBlYXNlOidiYWNrLm91dCgwLjUpJ30sIFwic2Nyb2xsSW5BbGwrPTAuN1wiKTtcbiAgICAgIC8vIHRsLmFkZChhcnJvd1RMLCBcInNjcm9sbEluQWxsKz0wLjhcIik7XG5cbiAgICAgIHJldHVybiB0bDsgIFxuICAgIH0sXG5cbiAgICAvLyBzZWN0aW9uQW5pbTg6ICgpID0+IHtcbiAgICAvLyAgIGxldCB0aGlzU2VjID0gJCgnI3NlY3Rpb244Jyk7XG4gICAgLy8gICBsZXQgdGhpc0JhY2sgPSAkKCcjYmFja2dyb3VuZDgnKTtcbiAgICAvLyAgIGxldCBjaGFyc0gyID0gJCh0aGlzU2VjKS5maW5kKCcuaDJDaGFycycpO1xuICAgIC8vICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgLy8gICAgIHBhdXNlZDp0cnVlLFxuICAgIC8vICAgICBkZWZhdWx0czoge1xuICAgIC8vICAgICAgIGR1cmF0aW9uOjAuMyxcbiAgICAvLyAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgLy8gUmVsZWFzZSBUaGUgU2Nyb2xsIExvY2tcbiAgICAvLyAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAvLyAgICAgICBnc2FwLnNldChkb2N1bWVudC5ib2R5LCB7b3ZlcmZsb3c6IFwiYXV0b1wifSlcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSk7XG5cbiAgICAvLyAgIGxldCBjb250ZW50VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAvLyAgICAgZGVmYXVsdHM6IHtcbiAgICAvLyAgICAgICBkdXJhdGlvbjowLjMsXG4gICAgLy8gICAgICAgZWFzZTpcImJhY2sub3V0KDEuNSlcIlxuICAgIC8vICAgICB9XG4gICAgLy8gICB9KTtcbiAgICAgIFxuICAgIC8vICAgLy8gU2V0IGJhY2tncm91bmQgei1pbmRleCBieSBzZWN0aW9uIG51bWJlciAvIFNlY3Rpb24gMiBoYXMgbm8gYmFjayAvIFNlY3Rpb24gMyBpcyB6LWluZGV4IDExMCB0byBzdGF5IGFib3ZlIGFsbFxuICAgIC8vICAgdGwuc2V0KHRoaXNCYWNrLCB7ekluZGV4OjEwOH0pO1xuICAgIC8vICAgLy8gU2V0IHNlY3Rpb24gei1pbmRleCBieSBzZWN0aW9uIG51bWJlclxuICAgIC8vICAgdGwuZnJvbVRvKHRoaXNTZWMsIHt6SW5kZXg6MTN9LHt6SW5kZXg6MTAwOH0pO1xuICAgICAgICAgICAgXG4gICAgLy8gICAvLyBBbmltYXRlIENvbnRlbnRcbiAgICAvLyAgIGNvbnRlbnRUTC5mcm9tVG8oY2hhcnNIMiwgXG4gICAgLy8gICAgIHt4Oi0yMCwgb3BhY2l0eTowfSxcbiAgICAvLyAgICAge3g6MCwgb3BhY2l0eTogMSwgc3RhZ2dlcjp7YW1vdW50OjAuMywgZnJvbTpcInJhbmRvbVwifX0sIFxuICAgIC8vICAgXCJzY3JvbGxJblwiKTtcbiAgICAvLyAgIGNvbnRlbnRUTC5mcm9tVG8oJy5zaW5nbGVJbWFnZURvd25sb2FkJyx7XG4gICAgLy8gICAgIG9wYWNpdHk6MCwgeTotMjB9LCBcbiAgICAvLyAgICAge29wYWNpdHk6MSx5OjAsIHN0YWdnZXI6e2Ftb3VudDowLjN9fSwgXG4gICAgLy8gICBcInNjcm9sbEluKz0wLjJcIik7XG4gICAgICBcbiAgICAvLyAgIC8vIEJ1aWxkIE1hc3RlciBUTFRMXG4gICAgLy8gICB0bC5mcm9tVG8odGhpc0JhY2ssIHt0b3A6Jy0xMDAlJ30se3RvcDowfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAvLyAgIHRsLmZyb21UbygnLmZvb3RlckFyZWEnLCB7eTonMTAwJSd9LCB7eTowLCBkdXJhdGlvbjowLjUsIGVhc2U6J2JhY2sub3V0KDAuNSknfSwgXCJzY3JvbGxJbkFsbCs9MC41XCIpO1xuICAgIC8vICAgdGwuYWRkKGNvbnRlbnRUTCwgXCJzY3JvbGxJbkFsbCs9MC4zXCIpO1xuXG4gICAgLy8gICByZXR1cm4gdGw7ICBcbiAgICAvLyB9LFxuICB9O1xuXG4gIC8vIFBsYXkgU2VjdGlvbiAxIGF1dG9tYXRpY2FsbHlcbiAgc2VjdGlvbkFuaW1bJ3NlY3Rpb25BbmltMSddKCkucGxheSgpO1xuICBcbiAgLy8gRmlyZSBBbiBBbmltYXRpb24gRnJvbSBBYm92ZSBmb3IgRWFjaCBTZWN0aW9uXG4gIGxldCBzZWN0aW9uVHJpZyA9IChteUNvdW50KSA9PiB7XG4gICAgLy8gQWRkIEFuIEV4dHJhIFNjcm9sbCBmb3IgQnV6eiBPbiBCZWVzIGluIFNlY3Rpb24gNCwgNSwgNiArMSB0b3RhbCBlYWNoIHRpbWVcbiAgICBpZiAobXlDb3VudCA9PT0gMSkge1xuICAgICAgdmFyIHN0YXJ0SGVpZ2h0ID0gMDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDIpIHtcbiAgICAgIHZhciBzdGFydEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqIChteUNvdW50IC0gMSkpIC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgfSBlbHNlIGlmIChteUNvdW50ID09PSAzKSB7XG4gICAgICB2YXIgc3RhcnRIZWlnaHQgPSAobXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCAtIDEpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIH0gZWxzZSBpZiAobXlDb3VudCA9PT0gNCkge1xuICAgICAgdmFyIHN0YXJ0SGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgLSAxKSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDUpIHtcbiAgICAgIHZhciBzdGFydEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqIChteUNvdW50KSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDYpIHtcbiAgICAgIHZhciBzdGFydEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMSkpIC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgfSBlbHNlIGlmIChteUNvdW50ID09PSA3KSB7XG4gICAgICB2YXIgc3RhcnRIZWlnaHQgPSAobXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCArIDIpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIH0gZWxzZSBpZiAobXlDb3VudCA9PT0gOCkge1xuICAgICAgdmFyIHN0YXJ0SGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAyKSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9IFxuXG4gICAgaWYgKG15Q291bnQgPT09IDEpIHtcbiAgICAgIHZhciBlbmRIZWlnaHQgPSBteVNjcm9sbEhlaWdodDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDIpIHtcbiAgICAgIHZhciBlbmRIZWlnaHQgPSAobXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCkpIC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgfSBlbHNlIGlmIChteUNvdW50ID09PSAzKSB7XG4gICAgICB2YXIgZW5kSGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIH0gZWxzZSBpZiAobXlDb3VudCA9PT0gNCkge1xuICAgICAgdmFyIGVuZEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMSkpIC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgfSBlbHNlIGlmIChteUNvdW50ID09PSA1KSB7XG4gICAgICB2YXIgZW5kSGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAyKSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDYpIHtcbiAgICAgIHZhciBlbmRIZWlnaHQgPSAobXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCArIDMpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIH0gZWxzZSBpZiAobXlDb3VudCA9PT0gNykge1xuICAgICAgdmFyIGVuZEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMykpIC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgfSBlbHNlIGlmIChteUNvdW50ID09PSA4KSB7XG4gICAgICB2YXIgZW5kSGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAzKSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9IFxuXG4gICAgLy8gY29uc29sZS5sb2coJ3N0YXJ0IGhlaWdodCcrbXlDb3VudCsnIGlzICcrc3RhcnRIZWlnaHQpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdlbmQgaGVpZ2h0JytteUNvdW50KycgaXMgJytlbmRIZWlnaHQpO1xuICAgIFxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIC8vIHRyaWdnZXI6J2JvZHknLFxuICAgICAgc3RhcnQ6c3RhcnRIZWlnaHQsXG4gICAgICBlbmQ6ZW5kSGVpZ2h0LCBcbiAgICAgIHNjcnViOjEsXG4gICAgICBvbkVudGVyOiBmdW5jdGlvbigpe1xuICAgICAgICBpZiAobXlDb3VudCA+IDEpIHtcbiAgICAgICAgICBnc2FwLnNldChkb2N1bWVudC5ib2R5LCB7b3ZlcmZsb3c6IFwiaGlkZGVuXCJ9KVxuICAgICAgICAgIHNlY3Rpb25BbmltWydzZWN0aW9uQW5pbScrbXlDb3VudF0oKS5wbGF5KCk7XG4gICAgICAgICAgLy8gYWxlcnQobXlDb3VudCsnIHNlY3Rpb24gZW50ZXJlZCcpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25MZWF2ZTogZnVuY3Rpb24oKXtcblxuICAgICAgICBpZiAobXlDb3VudCA8IDcpIHtcbiAgICAgICAgICBnc2FwLnNldChkb2N1bWVudC5ib2R5LCB7b3ZlcmZsb3c6IFwiaGlkZGVuXCJ9KVxuICAgICAgICAgIHNlY3Rpb25BbmltWydzZWN0aW9uQW5pbScrbXlDb3VudF0oKS5yZXZlcnNlKDApO1xuICAgICAgICAgIC8vIGFsZXJ0KG15Q291bnQrJyBzZWN0aW9uIGxlZnQnKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uRW50ZXJCYWNrOmZ1bmN0aW9uKCl7XG4gICAgICAgIGlmIChteUNvdW50IDwgNykge1xuICAgICAgICAgIGdzYXAuc2V0KGRvY3VtZW50LmJvZHksIHtvdmVyZmxvdzogXCJoaWRkZW5cIn0pXG4gICAgICAgICAgc2VjdGlvbkFuaW1bJ3NlY3Rpb25BbmltJytteUNvdW50XSgpLnBsYXkoKTtcbiAgICAgICAgICAvLyBhbGVydChteUNvdW50Kycgc2VjdGlvbiBiYWNrIGFnYWluJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkxlYXZlQmFjazogZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKG15Q291bnQgPiAxKSB7XG4gICAgICAgICAgZ3NhcC5zZXQoZG9jdW1lbnQuYm9keSwge292ZXJmbG93OiBcImhpZGRlblwifSlcbiAgICAgICAgICBzZWN0aW9uQW5pbVsnc2VjdGlvbkFuaW0nK215Q291bnRdKCkucmV2ZXJzZSgwKTtcbiAgICAgICAgICAvLyBhbGVydChteUNvdW50Kycgc2VjdGlvbiBsZWZ0IGFnYWluJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICAvLyBDYWxsIFRoZSBUcmlnZ2VyIE9uIEV2ZXJ5IFNlY3Rpb25cbiAgLy8gQW5pbWF0aW9uIHRyaWdnZXJzIGFyZSBjYWxjdWxhdGVkIGluIHRoZSBmdW5jdGlvblxuICBsZXQgaSA9IDE7XG4gICQoJ3NlY3Rpb24nKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgc2VjdGlvblRyaWcoaSk7XG4gICAgaSsrXG4gIH0pXG5cbiAgLy8gU2luZ2xlIEJ1enogb24gQmVlcyBTZWN0aW9uc1xuICAvLyBCdXp6IEFuaW1hdGlvbiA1XG4gIGxldCBidXp6SW40ID0gKCkgPT4ge1xuXG4gICAgbGV0IGJ1enpCbG9jayA9ICQoJyNzZWN0aW9uNCcpLmZpbmQoJy5idXp6T25CZWVzQmxvY2snKTtcbiAgICBsZXQgYnV6eldpZHRoID0gYnV6ekJsb2NrLm91dGVyV2lkdGgoKTtcbiAgICBsZXQgdGwgPSBuZXcgZ3NhcC50aW1lbGluZSh7XG4gICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgIGRlZmF1bHRzOiB7ZHVyYXRpb246MC41LGVhc2U6J2JhY2sub3V0KDAuMjUpOyd9XG4gICAgfSk7XG4gICAgdGwuZnJvbVRvKGJ1enpCbG9jaywge3g6YnV6eldpZHRofSwge3g6MH0pO1xuICAgIHJldHVybiB0bFxuICB9XG5cbiAgbGV0IGJ1enpUcmlnNCA9IChteUNvdW50KSA9PiB7XG4gICAgdmFyIHN0YXJ0SGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgLSAwLjUpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIHZhciBlbmRIZWlnaHQgPSAobXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCArIDAuNSkpIC0gbXlTY3JvbGxPZmZzZXQ7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnYnV6ejQgc3RhcnQgaXMgJytzdGFydEhlaWdodCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2J1eno0IGVuZCBpcyAnK2VuZEhlaWdodCk7XG4gICAgXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgc3RhcnQ6c3RhcnRIZWlnaHQsXG4gICAgICBlbmQ6ZW5kSGVpZ2h0LCBcbiAgICAgIHNjcnViOjEsXG4gICAgICBvbkVudGVyOiBmdW5jdGlvbigpe2J1enpJbjQoKS5wbGF5KCk7fSxcbiAgICAgIG9uTGVhdmU6IGZ1bmN0aW9uKCl7YnV6ekluNCgpLnJldmVyc2UoMCk7fSxcbiAgICAgIG9uRW50ZXJCYWNrOmZ1bmN0aW9uKCl7YnV6ekluNCgpLnBsYXkoKTt9LFxuICAgICAgb25MZWF2ZUJhY2s6IGZ1bmN0aW9uKCl7YnV6ekluNCgpLnJldmVyc2UoMCk7fSxcbiAgICB9KTtcbiAgfVxuXG4gIGJ1enpUcmlnNCg0KTtcblxuICAvLyBCdXp6IEFuaW1hdGlvbiA1XG4gIGxldCBidXp6SW41ID0gKCkgPT4ge1xuICAgIGxldCBidXp6QmxvY2sgPSAkKCcjc2VjdGlvbjUnKS5maW5kKCcuYnV6ek9uQmVlc0Jsb2NrJyk7XG4gICAgbGV0IGJ1enpXaWR0aCA9IGJ1enpCbG9jay5vdXRlcldpZHRoKCk7XG4gICAgbGV0IHRsID0gbmV3IGdzYXAudGltZWxpbmUoe1xuICAgICAgcGF1c2VkOnRydWUsXG4gICAgICBkZWZhdWx0czoge2R1cmF0aW9uOjAuNSxlYXNlOidiYWNrLm91dCgwLjI1KTsnfVxuICAgIH0pO1xuICAgIHRsLmZyb21UbyhidXp6QmxvY2ssIHt4OmJ1enpXaWR0aH0sIHt4OjB9KTtcbiAgICByZXR1cm4gdGxcbiAgfVxuXG4gIGxldCBidXp6VHJpZzUgPSAobXlDb3VudCkgPT4ge1xuICAgIHZhciBzdGFydEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMC41KSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICB2YXIgZW5kSGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAxLjUpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuXG4gICAgLy8gY29uc29sZS5sb2coJ2J1eno1IHN0YXJ0IGlzICcrc3RhcnRIZWlnaHQpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdidXp6NSBlbmQgaXMgJytlbmRIZWlnaHQpO1xuICAgIFxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIHN0YXJ0OnN0YXJ0SGVpZ2h0LFxuICAgICAgZW5kOmVuZEhlaWdodCwgXG4gICAgICBzY3J1YjoxLFxuICAgICAgb25FbnRlcjogZnVuY3Rpb24oKXtidXp6SW41KCkucGxheSgpO30sXG4gICAgICBvbkxlYXZlOiBmdW5jdGlvbigpe2J1enpJbjUoKS5yZXZlcnNlKDApO30sXG4gICAgICBvbkVudGVyQmFjazpmdW5jdGlvbigpe2J1enpJbjUoKS5wbGF5KCk7fSxcbiAgICAgIG9uTGVhdmVCYWNrOiBmdW5jdGlvbigpe2J1enpJbjUoKS5yZXZlcnNlKDApO30sXG4gICAgfSk7XG4gIH1cblxuICBidXp6VHJpZzUoNSk7XG5cbiAgLy8gQnV6eiBBbmltYXRpb24gNlxuICBsZXQgYnV6ekluNiA9ICgpID0+IHtcbiAgICBsZXQgYnV6ekJsb2NrID0gJCgnI3NlY3Rpb242JykuZmluZCgnLmJ1enpPbkJlZXNCbG9jaycpO1xuICAgIGxldCBidXp6V2lkdGggPSBidXp6QmxvY2sub3V0ZXJXaWR0aCgpO1xuICAgIGxldCB0bCA9IG5ldyBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgZGVmYXVsdHM6IHtkdXJhdGlvbjowLjUsZWFzZTonYmFjay5vdXQoMC4yNSk7J31cbiAgICB9KTtcbiAgICB0bC5mcm9tVG8oYnV6ekJsb2NrLCB7eDpidXp6V2lkdGh9LCB7eDowfSk7XG4gICAgcmV0dXJuIHRsXG4gIH1cblxuICBsZXQgYnV6elRyaWc2ID0gKG15Q291bnQpID0+IHtcbiAgICB2YXIgc3RhcnRIZWlnaHQgPSAobXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCArIDEuNSkpIC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgdmFyIGVuZEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMi41KSkgLSBteVNjcm9sbE9mZnNldDtcblxuICAgIC8vIGNvbnNvbGUubG9nKCdidXp6NiBzdGFydCBpcyAnK3N0YXJ0SGVpZ2h0KTtcbiAgICAvLyBjb25zb2xlLmxvZygnYnV6ejYgZW5kIGlzICcrZW5kSGVpZ2h0KTtcbiAgICBcbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICBzdGFydDpzdGFydEhlaWdodCxcbiAgICAgIGVuZDplbmRIZWlnaHQsIFxuICAgICAgc2NydWI6MSxcbiAgICAgIG9uRW50ZXI6IGZ1bmN0aW9uKCl7YnV6ekluNigpLnBsYXkoKTt9LFxuICAgICAgb25MZWF2ZTogZnVuY3Rpb24oKXtidXp6SW42KCkucmV2ZXJzZSgwKTt9LFxuICAgICAgb25FbnRlckJhY2s6ZnVuY3Rpb24oKXtidXp6SW42KCkucGxheSgpO30sXG4gICAgICBvbkxlYXZlQmFjazogZnVuY3Rpb24oKXtidXp6SW42KCkucmV2ZXJzZSgwKTt9LFxuICAgIH0pO1xuICB9XG5cbiAgYnV6elRyaWc2KDYpO1xuXG59XG4iLCJpbXBvcnQge1xuICBtZW51VG9nZ2xlLFxuICBzbW9vdGhTY3JvbGxpbmcsXG59IGZyb20gJy4vaW5kZXguanMnXG5cbmV4cG9ydCBsZXQgY2xpY2tFdmVudHMgPSAoKSA9PiB7XG4gIFxuICAvLyBNb2JpbGUgTmF2IENsaWNrIEV2ZW50XG4gIGxldCBtZW51VG9nZ2xlVEwgPSBtZW51VG9nZ2xlKCk7XG4gIG1lbnVUb2dnbGVUTC5yZXZlcnNlZCh0cnVlKTtcbiAgJCgnLm1lbnVUb2dnbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHsgIFxuICAgIGlmIChtZW51VG9nZ2xlVEwucmV2ZXJzZWQoKSkge1xuICAgICAgbWVudVRvZ2dsZVRMLnBsYXkoKTtcbiAgICAgIGdzYXAuc2V0KCQoJy53cmFwcGVyJyksIHtoZWlnaHQ6JzEwMCUnLCBvdmVyZmxvdzonaGlkZGVuJ30pO1xuICAgIH0gZWxzZSB7XG4gICAgICBnc2FwLnNldCgkKCcud3JhcHBlcicpLCB7aGVpZ2h0OidhdXRvJywgb3ZlcmZsb3c6J3Zpc2libGUnfSk7XG4gICAgICBtZW51VG9nZ2xlVEwucmV2ZXJzZSgpO1xuICAgIH1cblx0fSk7XG5cbiAgJCgnYVtocmVmXj1cIiNcIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdoYXNoIGl0IG91dCcpO1xuICAgIFxuICAgIC8vIElGIElUXCJTIE1PQklMRSAvIElQQUQgT1IgU01BTExFUlxuICAgIGlmIChzY3JlZW4ud2lkdGggPD0gMTAyNSl7XG4gICAgICBnc2FwLnNldCgkKCcud3JhcHBlcicpLCB7aGVpZ2h0OidhdXRvJywgb3ZlcmZsb3c6J3Zpc2libGUnfSk7XG4gICAgICBtZW51VG9nZ2xlVEwucmV2ZXJzZSgpO1xuICAgICAgc21vb3RoU2Nyb2xsaW5nKCQodGhpcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzbW9vdGhTY3JvbGxpbmcoJCh0aGlzKSk7XG4gICAgfVxuICB9KTtcbn0iLCJleHBvcnQgbGV0IGdzYXBSZWdpc3RlcnMgPSAoKSA9PiB7XG4gIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVG9QbHVnaW4sIFNjcm9sbFRyaWdnZXIsIFNwbGl0VGV4dCwgRHJhd1NWR1BsdWdpbiwgTW9ycGhTVkdQbHVnaW4pO1xufSIsImV4cG9ydCB7XG4gIHByZUxvYWRlcixcbiAgdmlkTGlua3MsXG4gIG1vYmlsZVZpZExpbmtzLFxuICBzbW9vdGhTY3JvbGxpbmcsXG4gIG1vYmlsZU5hdlNldHVwXG59IGZyb20gJy4vcGFnZVNldHVwLmpzJ1xuXG5leHBvcnQge1xuICBtZW51VG9nZ2xlXG59IGZyb20gJy4vbWVudVRvZ2dsZS5qcydcblxuZXhwb3J0IHtcbiAgZ3NhcFJlZ2lzdGVyc1xufSBmcm9tICcuL2dzYXBSZWdpc3RlcnMuanMnXG5cbmV4cG9ydCB7XG4gIGNsaWNrRXZlbnRzLFxufSBmcm9tICcuL2NsaWNrRXZlbnRzLmpzJ1xuXG5leHBvcnQge1xuICBhbmltYXRlU2VjdGlvblxufSBmcm9tICcuL2FuaW1hdGVTZWN0aW9uLmpzJ1xuXG5leHBvcnQge1xuICBzZWN0aW9uc1NldHVwXG59IGZyb20gJy4vc2VjdGlvbnNTZXR1cCdcblxuXG5leHBvcnQge1xuICBtb2JpbGVTZWN0aW9uc1NldHVwXG59IGZyb20gJy4vbW9iaWxlU2VjdGlvbnNTZXR1cCdcblxuZXhwb3J0IHtcbiAgbW9iaWxlQW5pbWF0ZVNlY3Rpb25cbn0gZnJvbSAnLi9tb2JpbGVBbmltYXRlU2VjdGlvbidcblxuIiwiZXhwb3J0IGxldCBtZW51VG9nZ2xlID0gKCkgPT4ge1xuXHRsZXQgdGwgPSBuZXcgZ3NhcC50aW1lbGluZSh7XG5cdFx0cGF1c2VkOnRydWUsXG5cdFx0ZGVmYXVsdHM6IHtcblx0XHRcdGVhc2U6ICdjaXJjLm91dCgpJyxcblx0XHRcdGR1cmF0aW9uOjAuMyxcblx0XHR9XG5cdH0pO1xuXG5cdHRsLnRvKCcubWFpbi1uYXYnLCB7ZHVyYXRpb246MC4zLCBsZWZ0OicwJSd9LCAnbWVudU9wZW4nKTtcblx0dGwudG8oJ25hdiBhJywge29wYWNpdHk6MSwgeDonMCUnLCBzdGFnZ2VyOiB7YW1vdW50OjAuMX19LCAnbWVudU9wZW4rPTAuMScpO1xuXHR0bC50bygnLmhhbVRvcCcsIHtyb3RhdGlvbjotMzE1LHg6NyAseTozLCB3aWR0aDoxMCwgdHJhbnNmb3JtT3JpZ2luOic1MCUgNTAlJ30sICdtZW51T3BlbicpO1xuXHR0bC50bygnLmhhbU1pZCcsIHt4Oi00LCB3aWR0aDoxOH0sICdtZW51T3BlbicpO1xuXHR0bC50bygnLmhhbUJvdCcsIHtyb3RhdGlvbjozMTUsIHg6NywgeTotMywgd2lkdGg6MTAsIHRyYW5zZm9ybU9yaWdpbjonNTAlIDUwJSd9LCAnbWVudU9wZW4nKTtcblxuXHRyZXR1cm4gdGw7XG59IiwiZXhwb3J0IGxldCBtb2JpbGVBbmltYXRlU2VjdGlvbiA9ICgpID0+IHtcblxuICAvLyBnc2FwLnNldCgnYm9keScsIHt0b3VjaEFjdGlvbjonbm9uZSd9KTtcbiAgLy8gZG9jdW1lbnQub250b3VjaG1vdmUgPSAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBcbiAgbGV0IHNlY3Rpb25BbmltID0ge1xuXG4gICAgc2VjdGlvbkFuaW0xIDogKCkgPT4ge1xuICAgICAgbGV0IHRoaXNTZWMgPSAoJyNzZWN0aW9uMScpO1xuICAgICAgbGV0IHRoaXNPdmVybGF5ID0gJCgnI292ZXJsYXkxJyk7XG4gICAgICBsZXQgc2VjdGlvbkxpbmVzID0gJCh0aGlzU2VjKS5maW5kKCcuc2luZ2xlLWJhY2tsaW5lJyk7XG4gICAgICBsZXQgc2VjQXJyb3cgPSAkKHRoaXNTZWMpLmZpbmQoJy5kb3duLWFycm93LXN2ZycpXG5cbiAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjUsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGU6ZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZ3NhcC50aW1lbGluZSh7cmVwZWF0Oi0xLCB5b3lvOnRydWV9KS50byhzZWNBcnJvdywge3k6LTMsIGR1cmF0aW9uOjAuNSwgZWFzZTpcIm5vbmVcIn0pOyBcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBcbiAgICAgIC8vIEJ1aWxkIE1hc3RlciBUTFRMXG4gICAgICB0bC5mcm9tVG8odGhpc092ZXJsYXksIHtvcGFjaXR5OjB9LCB7b3BhY2l0eTowLjY1fSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21UbyhzZWN0aW9uTGluZXMsIHtvcGFjaXR5OjB9LHtvcGFjaXR5OjAuM30sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICAgICAgICBcbiAgICAgIHJldHVybiB0bDtcbiAgICB9LFxuXG4gICAgc2VjdGlvbkFuaW0yIDogKCkgPT4ge1xuICAgICAgbGV0IHRoaXNTZWMgPSAkKCcjc2VjdGlvbjInKTtcbiAgICAgIGxldCB0aGlzQmFjayA9ICQoJyNiYWNrZ3JvdW5kMScpO1xuICAgICAgbGV0IHRoaXNPdmVybGF5ID0gJCgnI292ZXJsYXkxJyk7XG4gICAgICBsZXQgbGluZXMgPSAkKCcuc2luZ2xlLWJhY2tsaW5lJyk7XG4gICAgICBsZXQgc2VjdGlvbkxpbmVzID0gdGhpc1NlYy5maW5kKCcuc2luZ2xlLWJhY2tsaW5lJylcbiAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICAvLyBkZWxheTowLjY1LFxuICAgICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjUsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sb25Db21wbGV0ZTpmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8vIC8vIGdzYXAuc2V0KCdib2R5Jywge292ZXJmbG93OidhdXRvJ30pOyxcbiAgICAgICAgICAgIC8vIGdzYXAuc2V0KCdib2R5Jywge3RvdWNoQWN0aW9uOidhdXRvJ30pOyAgXG4gICAgICAgICAgLy8gfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyB0bC5mcm9tVG8odGhpc092ZXJsYXksIHtvcGFjaXR5OjB9LCB7b3BhY2l0eTowLjF9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKHNlY3Rpb25MaW5lcywge29wYWNpdHk6MH0se29wYWNpdHk6MC4yfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHRsO1xuICAgIH0sXG4gICAgXG5cbiAgICBzZWN0aW9uQW5pbTMgOiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9ICQoJyNzZWN0aW9uMycpO1xuICAgICAgbGV0IHRoaXNCYWNrID0gJCgnI2JhY2tncm91bmQzJyk7XG4gICAgICBsZXQgc2VjdGlvbkxpbmVzID0gdGhpc1NlYy5maW5kKCcuc2luZ2xlLWJhY2tsaW5lJyk7XG4gICAgICBsZXQgY2VudGVyNEwgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItNEwnKTtcbiAgICAgIGxldCBjZW50ZXI0UiA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci00UicpO1xuICAgICAgbGV0IGNlbnRlcjNMID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTNMJyk7XG4gICAgICBsZXQgY2VudGVyM1IgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItM1InKTtcbiAgICAgIGxldCBjZW50ZXIyTCA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci0yTCcpO1xuICAgICAgbGV0IGNlbnRlcjJSID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTJSJyk7XG4gICAgICBsZXQgYm90dG9tU21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoJyNib3R0b20tc21hbGwnKTtcbiAgICAgIFxuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuNSxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgb25Db21wbGV0ZTpmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBnc2FwLnNldCgnI2JhY2tncm91bmQxJywge29wYWNpdHk6MH0pO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLy8gb25SZXZlcnNlQ29tcGxldGU6ZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vICAgICAvLyBnc2FwLnNldCgnYm9keScsIHt0b3VjaEFjdGlvbjonYXV0byd9KTsgIFxuICAgICAgICAvLyAgICAgLy8gZ3NhcC5zZXQoJ2JvZHknLCB7b3ZlcmZsb3c6J2F1dG8nfSk7LFxuICAgICAgICAvLyAgIC8vIH0sIDEwMDApOyAgICAgIFxuICAgICAgICAvLyAgIGdzYXAuc2V0KCcjYmFja2dyb3VuZDEnLCB7b3BhY2l0eToxfSk7XG4gICAgICAgIC8vIH0sXG4gICAgICB9KTtcbiAgICAgIHRsLmZyb21UbygnLnZpZGVvQXJlYScsIHtvcGFjaXR5OjB9LCB7b3BhY2l0eToxfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21UbyhjZW50ZXI0TCwge29wYWNpdHk6MH0se29wYWNpdHk6MX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8oY2VudGVyNFIsIHtvcGFjaXR5OjB9LHtvcGFjaXR5OjF9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKGNlbnRlcjNMLCB7b3BhY2l0eTowfSx7b3BhY2l0eToxfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21UbyhjZW50ZXIzUiwge29wYWNpdHk6MH0se29wYWNpdHk6MX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8oY2VudGVyMkwsIHtvcGFjaXR5OjB9LHtvcGFjaXR5OjF9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKGNlbnRlcjJSLCB7b3BhY2l0eTowfSx7b3BhY2l0eToxfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21Ubyhib3R0b21TbWFsbCwge29wYWNpdHk6MH0se29wYWNpdHk6MX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8odGhpc0JhY2ssIHtvcGFjaXR5OjB9LHtvcGFjaXR5OjF9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKHNlY3Rpb25MaW5lcywge29wYWNpdHk6MH0se29wYWNpdHk6MX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8oc2VjdGlvbkxpbmVzLCB7b3BhY2l0eTowfSx7b3BhY2l0eToxfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHRsO1xuICAgIH0sXG4gICAgXG4gICAgc2VjdGlvbkFuaW00IDogKCkgPT4ge1xuICAgICAgbGV0IHRoaXNTZWMgPSAkKCcjc2VjdGlvbjQnKTtcbiAgICAgIGxldCB0aGlzQmFjayA9ICQoJyNiYWNrZ3JvdW5kNCcpO1xuICAgICAgLy8gbGV0IHNlY3Rpb25MaW5lcyA9IHRoaXNTZWMuZmluZCgnLnNpbmdsZS1iYWNrbGluZScpXG4gICAgICBsZXQgc29sb0NlbnRlcjIgPSAkKHRoaXNTZWMpLmZpbmQoJyNzb2xvLWNlbnRlci0yJyk7XG4gICAgICBsZXQgc29sb0NlbnRlcjEgPSAkKHRoaXNTZWMpLmZpbmQoJyNzb2xvLWNlbnRlci0xJyk7XG4gICAgICBsZXQgYm90dG9tU21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoJyNib3R0b20tc21hbGwnKTtcbiAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjUsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG9uUmV2ZXJzZUNvbXBsZXRlOmZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIGdzYXAuc2V0KCcjYmFja2dyb3VuZDEnLCB7b3BhY2l0eToxfSk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIHRsLmZyb21Ubyhzb2xvQ2VudGVyMSwge29wYWNpdHk6MH0se29wYWNpdHk6MC41fSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21Ubyhzb2xvQ2VudGVyMiwge29wYWNpdHk6MH0se29wYWNpdHk6MC41fSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21Ubyhib3R0b21TbWFsbCwge29wYWNpdHk6MH0se29wYWNpdHk6MC41fSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21Ubyh0aGlzQmFjaywge29wYWNpdHk6MH0se29wYWNpdHk6MX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICAvLyB0bC5mcm9tVG8oc2VjdGlvbkxpbmVzLCB7b3BhY2l0eTowfSx7b3BhY2l0eTowLjN9LCBcInNjcm9sbEluQWxsXCIpO1xuXG4gICAgICByZXR1cm4gdGw7XG4gICAgfSxcblxuICAgIHNlY3Rpb25BbmltNSA6ICgpID0+IHtcbiAgICAgIGxldCB0aGlzU2VjID0gJCgnI3NlY3Rpb241Jyk7XG4gICAgICBsZXQgdGhpc0JhY2sgPSAkKCcjYmFja2dyb3VuZDUnKTtcbiAgICAgIGxldCB0aGlzT3ZlcmxheSA9ICQoJyNvdmVybGF5NScpO1xuICAgICAgbGV0IHNlY3Rpb25MaW5lcyA9IHRoaXNTZWMuZmluZCgnLnNpbmdsZS1iYWNrbGluZScpXG4gICAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgcGF1c2VkOnRydWUsXG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246MC41LFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9LFxuICAgICAgICBvbkNvbXBsZXRlOmZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gZ3NhcC5zZXQoJ2JvZHknLCB7dG91Y2hBY3Rpb246J2F1dG8nfSk7ICBcbiAgICAgICAgICAvLyB9LCAxMDAwKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICB0bC5mcm9tVG8odGhpc092ZXJsYXksIHtvcGFjaXR5OjB9LCB7b3BhY2l0eTowLjl9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKHRoaXNCYWNrLCB7b3BhY2l0eTowfSx7b3BhY2l0eToxfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21UbyhzZWN0aW9uTGluZXMsIHtvcGFjaXR5OjB9LHtvcGFjaXR5OjAuOX0sIFwic2Nyb2xsSW5BbGxcIik7XG5cbiAgICAgIHJldHVybiB0bDtcbiAgICB9LFxuXG4gICAgc2VjdGlvbkFuaW02IDogKCkgPT4ge1xuICAgICAgbGV0IHRoaXNTZWMgPSAkKCcjc2VjdGlvbjYnKTtcbiAgICAgIGxldCB0aGlzQmFjayA9ICQoJyNiYWNrZ3JvdW5kNicpO1xuICAgICAgbGV0IHRoaXNPdmVybGF5ID0gJCgnI292ZXJsYXk2Jyk7XG4gICAgICBsZXQgc2VjdGlvbkxpbmVzID0gdGhpc1NlYy5maW5kKCcuc2luZ2xlLWJhY2tsaW5lJylcbiAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjUsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGU6ZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBnc2FwLnNldCgnYm9keScsIHt0b3VjaEFjdGlvbjonYXV0byd9KTsgIFxuICAgICAgICAgIC8vIH0sIDEwMDApO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIHRsLmZyb21Ubyh0aGlzT3ZlcmxheSwge29wYWNpdHk6MH0sIHtvcGFjaXR5OjAuOX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8odGhpc0JhY2ssIHtvcGFjaXR5OjB9LHtvcGFjaXR5OjF9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKHNlY3Rpb25MaW5lcywge29wYWNpdHk6MH0se29wYWNpdHk6MC4yfSwgXCJzY3JvbGxJbkFsbFwiKTtcblxuICAgICAgcmV0dXJuIHRsO1xuICAgIH0sXG5cbiAgICBzZWN0aW9uQW5pbTcgOiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9ICQoJyNzZWN0aW9uNycpO1xuICAgICAgbGV0IHRoaXNCYWNrID0gJCgnI2JhY2tncm91bmQ3Jyk7XG4gICAgICBsZXQgdGhpc092ZXJsYXkgPSAkKCcjb3ZlcmxheTcnKTtcbiAgICAgIGxldCBzZWN0aW9uTGluZXMgPSB0aGlzU2VjLmZpbmQoJy5zaW5nbGUtYmFja2xpbmUnKVxuICAgICAgbGV0IHNlY0Fycm93ID0gJCgnI3NlY3Rpb24xJykuZmluZCgnLmRvd24tYXJyb3ctc3ZnJylcbiAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjUsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIHRsLmZyb21Ubyh0aGlzT3ZlcmxheSwge29wYWNpdHk6MH0sIHtvcGFjaXR5OjAuOX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8odGhpc0JhY2ssIHtvcGFjaXR5OjB9LHtvcGFjaXR5OjF9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKHNlY3Rpb25MaW5lcywge29wYWNpdHk6MH0se29wYWNpdHk6MC41fSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21UbyhzZWNBcnJvdywge29wYWNpdHk6MX0se29wYWNpdHk6MH0sIFwic2Nyb2xsSW5BbGxcIik7XG5cbiAgICAgIHJldHVybiB0bDtcbiAgICB9LFxuICAgIFxuICB9O1xuICBcbiAgc2VjdGlvbkFuaW1bJ3NlY3Rpb25BbmltMSddKCkucGxheSgpO1xuXG4gIC8vIEZpcmUgQW4gQW5pbWF0aW9uIEZyb20gQWJvdmUgZm9yIEVhY2ggU2VjdGlvblxuICBsZXQgc2VjdGlvblRyaWcgPSAobXlDb3VudCkgPT4ge1xuICAgIFxuICAgIC8vIFBsYXkgU2VjdGlvbiAxIGF1dG9tYXRpY2FsbHlcbiAgICBcblxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIHRyaWdnZXI6JyNzZWN0aW9uJytteUNvdW50LFxuICAgICAgc3RhcnQ6XCJ0b3AgYm90dG9tXCIsXG4gICAgICBlbmQ6XCJib3R0b20gYm90dG9tXCIsXG4gICAgICAvLyBzY3J1YjoxLFxuICAgICAgb25FbnRlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKG15Q291bnQgPiAxKSB7XG4gICAgICAgICAgLy8gYWxlcnQobXlDb3VudCk7XG4gICAgICAgICAgLy8gZ3NhcC5zZXQoJ2JvZHknLCB7dG91Y2hBY3Rpb246J25vbmUnfSk7XG4gICAgICAgICAgLy8gZ3NhcC5zZXQoJ2JvZHknLCB7b3ZlcmZsb3c6J2hpZGRlbid9KTtcbiAgICAgICAgICBzZWN0aW9uQW5pbVsnc2VjdGlvbkFuaW0nK215Q291bnRdKCkucGxheSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25MZWF2ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKG15Q291bnQgPCA3KSB7XG4gICAgICAgICAgLy8gZ3NhcC5zZXQoJ2JvZHknLCB7dG91Y2hBY3Rpb246J25vbmUnfSk7XG4gICAgICAgICAgc2VjdGlvbkFuaW1bJ3NlY3Rpb25BbmltJytteUNvdW50XSgpLnJldmVyc2UoMCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkVudGVyQmFjazpmdW5jdGlvbigpe1xuICAgICAgICBpZiAobXlDb3VudCA8IDcpIHtcbiAgICAgICAgICAvLyBnc2FwLnNldCgnYm9keScsIHt0b3VjaEFjdGlvbjonbm9uZSd9KTtcbiAgICAgICAgICBzZWN0aW9uQW5pbVsnc2VjdGlvbkFuaW0nK215Q291bnRdKCkucGxheSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25MZWF2ZUJhY2s6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmIChteUNvdW50ID4gMSkge1xuICAgICAgICAgIC8vIGdzYXAuc2V0KCdib2R5Jywge3RvdWNoQWN0aW9uOidub25lJ30pO1xuICAgICAgICAgIHNlY3Rpb25BbmltWydzZWN0aW9uQW5pbScrbXlDb3VudF0oKS5yZXZlcnNlKDApO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgXG4gIC8vIEFuaW1hdGlvbiB0cmlnZ2VycyBhcmUgY2FsY3VsYXRlZCBpbiB0aGUgZnVuY3Rpb25cbiAgbGV0IGkgPSAxO1xuICAkKCdzZWN0aW9uJykuZWFjaChmdW5jdGlvbigpe1xuICAgIHNlY3Rpb25UcmlnKGkpO1xuICAgIGkrK1xuICB9KVxuXG4gIC8vIHNlY3Rpb25UcmlnKDIpO1xuICBsZXQgd2luZG93SGVpZ2h0ID0gTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAvLyBTaW5nbGUgQnV6eiBvbiBCZWVzIFNlY3Rpb25zXG4gIC8vIEJ1enogQW5pbWF0aW9uIDVcbiAgbGV0IGJ1enpJbjQgPSAoKSA9PiB7XG4gICAgXG4gICAgbGV0IGJ1enpCbG9jayA9ICQoJyNzZWN0aW9uNCcpLmZpbmQoJy5idXp6T25CZWVzQmxvY2snKTtcbiAgICBsZXQgYnV6eldpZHRoID0gYnV6ekJsb2NrLm91dGVyV2lkdGgoKTtcbiAgICBsZXQgdGwgPSBuZXcgZ3NhcC50aW1lbGluZSh7XG4gICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgIGRlZmF1bHRzOiB7ZHVyYXRpb246MC41fVxuICAgIH0pO1xuICAgIHRsLmZyb21UbyhidXp6QmxvY2ssIHt4OmJ1enpXaWR0aH0sIHt4OjB9KTtcbiAgICByZXR1cm4gdGxcbiAgfVxuXG4gIGxldCBidXp6VHJpZzQgPSAobXlDb3VudCkgPT4ge1xuICAgIC8vIHZhciBzdGFydEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqIChteUNvdW50IC0gMC41KSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICAvLyB2YXIgZW5kSGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAwLjUpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuXG4gICAgLy8gY29uc29sZS5sb2coJ2J1eno0IHN0YXJ0IGlzICcrc3RhcnRIZWlnaHQpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdidXp6NCBlbmQgaXMgJytlbmRIZWlnaHQpO1xuICAgIFxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIHRyaWdnZXI6JyNzZWN0aW9uNCcsXG4gICAgICBzdGFydDondG9wIHRvcC09Jysod2luZG93SGVpZ2h0IC8gMiksXG4gICAgICBlbmQ6J2JvdHRvbSBib3R0b20nLCBcbiAgICAgIC8vIHNjcnViOjEsXG4gICAgICBvbkVudGVyOiBmdW5jdGlvbigpe2J1enpJbjQoKS5wbGF5KCk7fSxcbiAgICAgIG9uTGVhdmU6IGZ1bmN0aW9uKCl7YnV6ekluNCgpLnJldmVyc2UoMCk7fSxcbiAgICAgIG9uRW50ZXJCYWNrOmZ1bmN0aW9uKCl7YnV6ekluNCgpLnBsYXkoKTt9LFxuICAgICAgb25MZWF2ZUJhY2s6IGZ1bmN0aW9uKCl7YnV6ekluNCgpLnJldmVyc2UoMCk7fSxcbiAgICB9KTtcbiAgfVxuXG4gIGJ1enpUcmlnNCgpO1xuXG4gIC8vIEJ1enogQW5pbWF0aW9uIDVcbiAgbGV0IGJ1enpJbjUgPSAoKSA9PiB7XG4gICAgbGV0IGJ1enpCbG9jayA9ICQoJyNzZWN0aW9uNScpLmZpbmQoJy5idXp6T25CZWVzQmxvY2snKTtcbiAgICBsZXQgYnV6eldpZHRoID0gYnV6ekJsb2NrLm91dGVyV2lkdGgoKTtcbiAgICBsZXQgdGwgPSBuZXcgZ3NhcC50aW1lbGluZSh7XG4gICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgIGRlZmF1bHRzOiB7ZHVyYXRpb246MC41fVxuICAgIH0pO1xuICAgIHRsLmZyb21UbyhidXp6QmxvY2ssIHt4OmJ1enpXaWR0aH0sIHt4OjB9KTtcbiAgICByZXR1cm4gdGxcbiAgfVxuXG4gIGxldCBidXp6VHJpZzUgPSAobXlDb3VudCkgPT4ge1xuICAgIC8vIHZhciBzdGFydEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMC41KSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICAvLyB2YXIgZW5kSGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAxLjUpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuXG4gICAgLy8gY29uc29sZS5sb2coJ2J1eno1IHN0YXJ0IGlzICcrc3RhcnRIZWlnaHQpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdidXp6NSBlbmQgaXMgJytlbmRIZWlnaHQpO1xuICAgIFxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIHRyaWdnZXI6JyNzZWN0aW9uNScsXG4gICAgICBzdGFydDondG9wIHRvcC09Jysod2luZG93SGVpZ2h0IC8gMiksXG4gICAgICBlbmQ6J2JvdHRvbSBib3R0b20nLCBcbiAgICAgIC8vIHNjcnViOjEsXG4gICAgICBvbkVudGVyOiBmdW5jdGlvbigpe2J1enpJbjUoKS5wbGF5KCk7fSxcbiAgICAgIG9uTGVhdmU6IGZ1bmN0aW9uKCl7YnV6ekluNSgpLnJldmVyc2UoMCk7fSxcbiAgICAgIG9uRW50ZXJCYWNrOmZ1bmN0aW9uKCl7YnV6ekluNSgpLnBsYXkoKTt9LFxuICAgICAgb25MZWF2ZUJhY2s6IGZ1bmN0aW9uKCl7YnV6ekluNSgpLnJldmVyc2UoMCk7fSxcbiAgICB9KTtcbiAgfVxuXG4gIGJ1enpUcmlnNSgpO1xuXG4gIC8vIEJ1enogQW5pbWF0aW9uIDZcbiAgbGV0IGJ1enpJbjYgPSAoKSA9PiB7XG4gICAgbGV0IGJ1enpCbG9jayA9ICQoJyNzZWN0aW9uNicpLmZpbmQoJy5idXp6T25CZWVzQmxvY2snKTtcbiAgICBsZXQgYnV6eldpZHRoID0gYnV6ekJsb2NrLm91dGVyV2lkdGgoKTtcbiAgICBsZXQgdGwgPSBuZXcgZ3NhcC50aW1lbGluZSh7XG4gICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgIGRlZmF1bHRzOiB7ZHVyYXRpb246MC41fVxuICAgIH0pO1xuICAgIHRsLmZyb21UbyhidXp6QmxvY2ssIHt4OmJ1enpXaWR0aH0sIHt4OjB9KTtcbiAgICByZXR1cm4gdGxcbiAgfVxuXG4gIGxldCBidXp6VHJpZzYgPSAobXlDb3VudCkgPT4ge1xuICAgIC8vIHZhciBzdGFydEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMS41KSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICAvLyB2YXIgZW5kSGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAyLjUpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuXG4gICAgLy8gY29uc29sZS5sb2coJ2J1eno2IHN0YXJ0IGlzICcrc3RhcnRIZWlnaHQpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdidXp6NiBlbmQgaXMgJytlbmRIZWlnaHQpO1xuICAgIFxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIHRyaWdnZXI6JyNzZWN0aW9uNicsXG4gICAgICBzdGFydDondG9wIHRvcC09Jysod2luZG93SGVpZ2h0IC8gMS41KSxcbiAgICAgIGVuZDonYm90dG9tIGJvdHRvbScsIFxuICAgICAgLy8gc2NydWI6MSxcbiAgICAgIG9uRW50ZXI6IGZ1bmN0aW9uKCl7YnV6ekluNigpLnBsYXkoKTt9LFxuICAgICAgb25MZWF2ZTogZnVuY3Rpb24oKXtidXp6SW42KCkucmV2ZXJzZSgwKTt9LFxuICAgICAgb25FbnRlckJhY2s6ZnVuY3Rpb24oKXtidXp6SW42KCkucGxheSgpO30sXG4gICAgICBvbkxlYXZlQmFjazogZnVuY3Rpb24oKXtidXp6SW42KCkucmV2ZXJzZSgwKTt9LFxuICAgIH0pO1xuICB9XG5cbiAgYnV6elRyaWc2KCk7XG5cblxuICAkKCcudGV4dC1jb250YWluZXInKS5lYWNoKCBmdW5jdGlvbigpIHtcblxuICAgIFxuICAgIGxldCBsaW5lc0luID0gKCkgPT4ge1xuICAgICAgbGV0IHRoZXNlTGluZXMgPSAkKHRoaXMpLmZpbmQoJy5wTGluZXMnKTtcbiAgICAgIGxldCB0bCA9IG5ldyBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgcGF1c2VkOnRydWUsXG4gICAgICAgIGRlZmF1bHRzOiB7ZHVyYXRpb246MC4zfVxuICAgICAgfSk7XG4gICAgICB0bC5mcm9tVG8oIHRoZXNlTGluZXMsIFxuICAgICAgICB7b3BhY2l0eTowLCB4Oi00MH0sXG4gICAgICAgIHtvcGFjaXR5OjEsIHg6MCwgc3RhZ2dlcjp7YW1vdW50OjAuM31cbiAgICAgIH0pOyBcblxuICAgICAgLy8gY29uc29sZS5sb2codGhlc2VMaW5lcyk7XG4gICAgICByZXR1cm4gdGxcbiAgICB9XG4gICAgXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgdHJpZ2dlcjp0aGlzLFxuICAgICAgc3RhcnQ6J3RvcCBib3R0b20tPTEyMHB4JyxcbiAgICAgIC8vIHNjcnViOjEsXG4gICAgICBvbkVudGVyOiBmdW5jdGlvbigpe2xpbmVzSW4oKS5wbGF5KCk7fSxcbiAgICAgIC8vIG9uTGVhdmU6IGZ1bmN0aW9uKCl7YnV6ekluNigpLnJldmVyc2UoMCk7fSxcbiAgICAgIC8vIG9uRW50ZXJCYWNrOmZ1bmN0aW9uKCl7YnV6ekluNigpLnBsYXkoKTt9LFxuICAgICAgb25MZWF2ZUJhY2s6IGZ1bmN0aW9uKCl7bGluZXNJbigpLnJldmVyc2UoMCk7fSxcbiAgICB9KTtcbiAgfSk7XG5cblxuICAkKCdoMicpLmVhY2goIGZ1bmN0aW9uKCkge1xuXG4gICAgXG4gICAgbGV0IGxpbmVzSW4gPSAoKSA9PiB7XG4gICAgICBsZXQgdGhlc2VMaW5lcyA9ICQodGhpcykuZmluZCgnLmgyV29yZHMnKTtcbiAgICAgIGxldCB0bCA9IG5ldyBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgcGF1c2VkOnRydWUsXG4gICAgICAgIGRlZmF1bHRzOiB7ZHVyYXRpb246MC4zfVxuICAgICAgfSk7XG4gICAgICB0bC5mcm9tVG8oIHRoZXNlTGluZXMsIFxuICAgICAgICB7b3BhY2l0eTowLCB4Oi00MH0sXG4gICAgICAgIHtvcGFjaXR5OjEsIHg6MCwgc3RhZ2dlcjp7YW1vdW50OjAuM31cbiAgICAgIH0pOyBcblxuICAgICAgLy8gY29uc29sZS5sb2codGhlc2VMaW5lcyk7XG4gICAgICByZXR1cm4gdGxcbiAgICB9XG4gICAgXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgdHJpZ2dlcjp0aGlzLFxuICAgICAgc3RhcnQ6J3RvcCBib3R0b20tPTEyMHB4JyxcbiAgICAgIC8vIHNjcnViOjEsXG4gICAgICBvbkVudGVyOiBmdW5jdGlvbigpe2xpbmVzSW4oKS5wbGF5KCk7fSxcbiAgICAgIC8vIG9uTGVhdmU6IGZ1bmN0aW9uKCl7YnV6ekluNigpLnJldmVyc2UoMCk7fSxcbiAgICAgIC8vIG9uRW50ZXJCYWNrOmZ1bmN0aW9uKCl7YnV6ekluNigpLnBsYXkoKTt9LFxuICAgICAgb25MZWF2ZUJhY2s6IGZ1bmN0aW9uKCl7bGluZXNJbigpLnJldmVyc2UoMCk7fSxcbiAgICB9KTtcbiAgfSk7XG5cblxufVxuXG5cbiIsImV4cG9ydCBsZXQgbW9iaWxlU2VjdGlvbnNTZXR1cCA9ICgpID0+IHtcblxuICAvLyAkKCdib2R5JykuYWRkQ2xhc3MoJ21vYmlsZS1kZXZpY2UnKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIE1FQVNVUklORyBWQVJTXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgdG90YWxTZWN0aW9ucyA9ICQoJ3NlY3Rpb24nKS5sZW5ndGg7XG4gIGxldCB0b3RhbEJ1enpPbiA9ICQoJy5idXp6T25CZWVzQmxvY2snKS5sZW5ndGg7XG4gIGxldCB3aW5kb3dIZWlnaHQgPSBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIGxldCBteVNjcm9sbEhlaWdodCA9IHdpbmRvd0hlaWdodC8yO1xuICBsZXQgZnVsbEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqICh0b3RhbFNlY3Rpb25zICsgdG90YWxCdXp6T24pKSArIHdpbmRvd0hlaWdodCAtIDE7XG4gIGxldCBidXp6QmxvY2sgPSAkKCcuYnV6ek9uQmVlc0Jsb2NrJyk7XG4gIGxldCBidXp6V2lkdGggPSBidXp6QmxvY2sub3V0ZXJXaWR0aCgpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gR0xPQkFMXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTZXQgT3ZlcmFsbCBTY3JvbGwgSGVpZ2h0XG4gIC8vIGdzYXAuc2V0KCcuaG9tZS1wYWdlJywge2hlaWdodDpmdWxsSGVpZ2h0fSk7XG4gIC8vIGdzYXAuc2V0KGRvY3VtZW50LmJvZHksIHtvdmVyZmxvdzogXCJoaWRkZW5cIn0pXG4gIC8vIEhpZGUgQWxsIExpbmVzXG4gIC8vIGdzYXAuc2V0KCQoJy5ob21lLXBhZ2UnKS5maW5kKCdwYXRoJyksIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSk7XG4gIC8vIGdzYXAuc2V0KCQoJy5ob21lLXBhZ2UnKS5maW5kKCdwb2x5bGluZScpLCB7ZHJhd1NWRzpcIjUwJSA1MCVcIn0pO1xuICAvLyBnc2FwLnNldCgkKCcuaG9tZS1wYWdlJykuZmluZCgnbGluZScpLCB7ZHJhd1NWRzpcIjUwJSA1MCVcIn0pO1xuICAvLyBnc2FwLnNldCgkKCcuaG9tZS1wYWdlJykuZmluZCgnI2Rvd24tYXJyb3cgbGluZScpLCB7ZHJhd1NWRzpcIjEwMCUgMTAwJVwifSk7XG4gIC8vIFNldCAxc3QgQmFja2dyb3VuZCBJbWFnZSBhcyBWaXNpYmxlXG5cbiAgbGV0IHNlYzFMaW5lcyA9ICQoJyNzZWN0aW9uMScpLmZpbmQoJy5zaW5nbGUtYmFja2xpbmUnKVxuICBsZXQgc2VjMUFycm93ID0gJCgnI3NlY3Rpb24xJykuZmluZCgnLmRvd24tYXJyb3ctc3ZnJylcbiAgZ3NhcC5zZXQoc2VjMUxpbmVzLCB7b3BhY2l0eTowLjJ9KTtcbiAgZ3NhcC5zZXQoc2VjMUFycm93LCB7b3BhY2l0eToxfSk7XG4gIGdzYXAuc2V0KCcjYmFja2dyb3VuZDEnLCB7b3BhY2l0eToxLCB6SW5kZXg6MTAwfSk7XG4gIGdzYXAuc2V0KCcjYmFja2dyb3VuZDMnLCB7ekluZGV4OjEwNn0pO1xuICBnc2FwLnNldCgnI2JhY2tncm91bmQ0Jywge3pJbmRleDoxMDV9KTtcbiAgZ3NhcC5zZXQoJyNiYWNrZ3JvdW5kNScsIHt6SW5kZXg6MTA0fSk7XG4gIGdzYXAuc2V0KCcjYmFja2dyb3VuZDYnLCB7ekluZGV4OjEwM30pO1xuICBnc2FwLnNldCgnI2JhY2tncm91bmQ3Jywge3pJbmRleDoxMDF9KTtcblxuICBnc2FwLnNldCgnI292ZXJsYXkxJywge29wYWNpdHk6MC42NSwgekluZGV4OjEwMX0pO1xuICAvLyBnc2FwLnNldCgnI292ZXJsYXkzJywge3pJbmRleDoxMDN9KTtcbiAgLy8gZ3NhcC5zZXQoJyNvdmVybGF5NCcsIHt6SW5kZXg6MTA0fSk7XG4gIGdzYXAuc2V0KCcjb3ZlcmxheTUnLCB7ekluZGV4OjEwNX0pO1xuICBnc2FwLnNldCgnI292ZXJsYXk2Jywge3pJbmRleDoxMDZ9KTtcbiAgZ3NhcC5zZXQoJyNvdmVybGF5NycsIHt6SW5kZXg6MTA3fSk7XG5cbiAgLy8gZ3NhcC5zZXQoJyNzZWN0aW9uMScsIHt6SW5kZXg6MjA3fSk7XG4gIC8vIGdzYXAuc2V0KCcjc2VjdGlvbjInLCB7ekluZGV4OjIwNn0pO1xuICAvLyBnc2FwLnNldCgnI3NlY3Rpb24zJywge3pJbmRleDoyMDV9KTtcbiAgLy8gZ3NhcC5zZXQoJyNzZWN0aW9uNCcsIHt6SW5kZXg6MjA0fSk7XG4gIC8vIGdzYXAuc2V0KCcjc2VjdGlvbjUnLCB7ekluZGV4OjIwM30pO1xuICAvLyBnc2FwLnNldCgnI3NlY3Rpb242Jywge3pJbmRleDoyMDJ9KTtcbiAgLy8gZ3NhcC5zZXQoJyNzZWN0aW9uNycsIHt6SW5kZXg6MjAxfSk7XG4gIC8vIGdzYXAuc2V0KCcjYmFja2dyb3VuZDEnLCB7b3BhY2l0eToxfSk7XG4gIC8vIFNldCBCdXp6IE9uIEJlZXMgdG8gSGlkZGVuXG4gIGdzYXAuc2V0KGJ1enpCbG9jaywge3g6YnV6eldpZHRofSk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRUNUSU9OIDFcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGxldCBzZWMxID0gJCgnI3NlY3Rpb24xJyk7XG4gIGxldCBzZWMxSDIgPSBzZWMxLmZpbmQoJ2gyJyk7XG4gIGxldCBzZWMxc3BsaXRIMiA9IG5ldyBTcGxpdFRleHQoc2VjMUgyLCB7IHR5cGU6IFwibGluZXMsd29yZHMsIGNoYXJzXCIgfSk7XG4gIGxldCBzZWMxQ2hhcnMyID0gc2VjMXNwbGl0SDIuY2hhcnM7XG4gIGxldCBzZWMxV29yZHMyID0gc2VjMXNwbGl0SDIud29yZHM7XG4gIGxldCBzZWMxTGluZXMyID0gc2VjMXNwbGl0SDIubGluZXM7XG4gICQoc2VjMUxpbmVzMikuYWRkQ2xhc3MoJ2gyTGluZXMnKTtcbiAgJChzZWMxQ2hhcnMyKS5hZGRDbGFzcygnaDJDaGFycyBzZWMxQ2hhcnMyJyk7XG4gICQoc2VjMVdvcmRzMikuYWRkQ2xhc3MoJ2gyV29yZHMgc2VjMVdvcmRzMicpO1xuXG4gIGxldCBzZWMxSDMgPSBzZWMxLmZpbmQoJ2gzJyk7XG4gIGxldCBzZWMxc3BsaXRIMyA9IG5ldyBTcGxpdFRleHQoc2VjMUgzLCB7IHR5cGU6IFwibGluZXMsd29yZHMsY2hhcnNcIiB9KTtcbiAgbGV0IHNlYzFDaGFyczMgPSBzZWMxc3BsaXRIMy5jaGFycztcbiAgbGV0IHNlYzFXb3JkczMgPSBzZWMxc3BsaXRIMy53b3JkcztcbiAgJChzZWMxQ2hhcnMzKS5hZGRDbGFzcygnaDNDaGFycyBzZWMxQ2hhcnMzJyk7XG4gICQoc2VjMVdvcmRzMykuYWRkQ2xhc3MoJ2gzV29yZHMgc2VjMVdvcmRzMycpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VDVElPTiAyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgc2VjMiA9ICQoJyNzZWN0aW9uMicpO1xuICBsZXQgc2VjMkgyID0gc2VjMi5maW5kKCdoMicpO1xuICBsZXQgc2VjMnNwbGl0SDIgPSBuZXcgU3BsaXRUZXh0KHNlYzJIMiwgeyB0eXBlOiBcImxpbmVzLHdvcmRzXCIgfSk7XG4gIC8vIGxldCBzZWMyQ2hhcnMyID0gc2VjMnNwbGl0SDIuY2hhcnM7XG4gIGxldCBzZWMyV29yZHMyID0gc2VjMnNwbGl0SDIud29yZHM7XG4gIGxldCBzZWMyTGluZXMyID0gc2VjMnNwbGl0SDIubGluZXM7XG4gICQoc2VjMkxpbmVzMikuYWRkQ2xhc3MoJ2gyTGluZXMnKTtcbiAgLy8gJChzZWMyQ2hhcnMyKS5hZGRDbGFzcygnaDJDaGFycyBzZWMyQ2hhcnMyJyk7XG4gICQoc2VjMldvcmRzMikuYWRkQ2xhc3MoJ2gyV29yZHMgc2VjMldvcmRzMicpO1xuICBcbiAgbGV0IHNlYzJQID0gc2VjMi5maW5kKCcudGV4dC1jb250YWluZXIgcCcpO1xuICBsZXQgc2VjMnNwbGl0UCA9IG5ldyBTcGxpdFRleHQoc2VjMlAsIHsgdHlwZTogXCJsaW5lc1wiIH0pO1xuICAvLyBsZXQgc2VjMldvcmRzUCA9IHNlYzJzcGxpdFAud29yZHM7XG4gIGxldCBzZWMyTGluZXNQID0gc2VjMnNwbGl0UC5saW5lcztcbiAgLy8gJChzZWMyV29yZHNQKS5hZGRDbGFzcygnaDNXb3JkcyBzZWMyV29yZHNQJyk7XG4gICQoc2VjMkxpbmVzUCkuYWRkQ2xhc3MoJ3BMaW5lcyBzZWMyTGluZXNQJyk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRUNUSU9OIDRcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGxldCBzZWM0ID0gJCgnI3NlY3Rpb240Jyk7XG4gIGxldCBzZWM0SDIgPSBzZWM0LmZpbmQoJ2gyJyk7XG4gIGxldCBzZWM0c3BsaXRIMiA9IG5ldyBTcGxpdFRleHQoc2VjNEgyLCB7IHR5cGU6IFwibGluZXMsd29yZHNcIiB9KTtcbiAgLy8gbGV0IHNlYzRDaGFyczIgPSBzZWM0c3BsaXRIMi5jaGFycztcbiAgbGV0IHNlYzRXb3JkczIgPSBzZWM0c3BsaXRIMi53b3JkcztcbiAgbGV0IHNlYzRMaW5lczIgPSBzZWM0c3BsaXRIMi5saW5lcztcbiAgJChzZWM0TGluZXMyKS5hZGRDbGFzcygnaDJMaW5lcycpO1xuICAvLyAkKHNlYzRDaGFyczIpLmFkZENsYXNzKCdoMkNoYXJzIHNlYzRDaGFyczInKTtcbiAgJChzZWM0V29yZHMyKS5hZGRDbGFzcygnaDJXb3JkcyBzZWM0V29yZHMyJyk7XG4gIFxuICBsZXQgc2VjNFAgPSBzZWM0LmZpbmQoJy50ZXh0LWNvbnRhaW5lciBwJyk7XG4gIGxldCBzZWM0c3BsaXRQID0gbmV3IFNwbGl0VGV4dChzZWM0UCwgeyB0eXBlOiBcImxpbmVzXCIgfSk7XG4gIC8vIGxldCBzZWM0V29yZHNQID0gc2VjNHNwbGl0UC53b3JkcztcbiAgbGV0IHNlYzRMaW5lc1AgPSBzZWM0c3BsaXRQLmxpbmVzO1xuICAvLyAkKHNlYzRXb3Jkc1ApLmFkZENsYXNzKCdoM1dvcmRzIHNlYzRXb3Jkc1AnKTtcbiAgJChzZWM0TGluZXNQKS5hZGRDbGFzcygncExpbmVzIHNlYzRMaW5lc1AnKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFQ1RJT04gNVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbGV0IHNlYzUgPSAkKCcjc2VjdGlvbjUnKTtcbiAgbGV0IHNlYzVIMiA9IHNlYzUuZmluZCgnaDInKTtcbiAgbGV0IHNlYzVzcGxpdEgyID0gbmV3IFNwbGl0VGV4dChzZWM1SDIsIHsgdHlwZTogXCJsaW5lcyx3b3Jkc1wiIH0pO1xuICAvLyBsZXQgc2VjNUNoYXJzMiA9IHNlYzVzcGxpdEgyLmNoYXJzO1xuICBsZXQgc2VjNVdvcmRzMiA9IHNlYzVzcGxpdEgyLndvcmRzO1xuICBsZXQgc2VjNUxpbmVzMiA9IHNlYzVzcGxpdEgyLmxpbmVzO1xuICAkKHNlYzVMaW5lczIpLmFkZENsYXNzKCdoMkxpbmVzJyk7XG4gIC8vICQoc2VjNUNoYXJzMikuYWRkQ2xhc3MoJ2gyQ2hhcnMgc2VjNUNoYXJzMicpO1xuICAkKHNlYzVXb3JkczIpLmFkZENsYXNzKCdoMldvcmRzIHNlYzVXb3JkczInKTtcbiAgXG4gIGxldCBzZWM1UCA9IHNlYzUuZmluZCgnLnRleHQtY29udGFpbmVyIHAnKTtcbiAgbGV0IHNlYzVzcGxpdFAgPSBuZXcgU3BsaXRUZXh0KHNlYzVQLCB7IHR5cGU6IFwibGluZXNcIiB9KTtcbiAgLy8gbGV0IHNlYzVXb3Jkc1AgPSBzZWM1c3BsaXRQLndvcmRzO1xuICBsZXQgc2VjNUxpbmVzUCA9IHNlYzVzcGxpdFAubGluZXM7XG4gIC8vICQoc2VjNVdvcmRzUCkuYWRkQ2xhc3MoJ2gzV29yZHMgc2VjNVdvcmRzUCcpO1xuICAkKHNlYzVMaW5lc1ApLmFkZENsYXNzKCdwTGluZXMgc2VjNUxpbmVzUCcpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VDVElPTiA2XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgc2VjNiA9ICQoJyNzZWN0aW9uNicpO1xuICBsZXQgc2VjNkgyID0gc2VjNi5maW5kKCdoMicpO1xuICBsZXQgc2VjNnNwbGl0SDIgPSBuZXcgU3BsaXRUZXh0KHNlYzZIMiwgeyB0eXBlOiBcImxpbmVzLHdvcmRzXCIgfSk7XG4gIC8vIGxldCBzZWM2Q2hhcnMyID0gc2VjNnNwbGl0SDIuY2hhcnM7XG4gIGxldCBzZWM2V29yZHMyID0gc2VjNnNwbGl0SDIud29yZHM7XG4gIGxldCBzZWM2TGluZXMyID0gc2VjNnNwbGl0SDIubGluZXM7XG4gICQoc2VjNkxpbmVzMikuYWRkQ2xhc3MoJ2gyTGluZXMnKTtcbiAgLy8gJChzZWM2Q2hhcnMyKS5hZGRDbGFzcygnaDJDaGFycyBzZWM2Q2hhcnMyJyk7XG4gICQoc2VjNldvcmRzMikuYWRkQ2xhc3MoJ2gyV29yZHMgc2VjNldvcmRzMicpO1xuICBcbiAgbGV0IHNlYzZQID0gc2VjNi5maW5kKCcudGV4dC1jb250YWluZXIgcCcpO1xuICBsZXQgc2VjNnNwbGl0UCA9IG5ldyBTcGxpdFRleHQoc2VjNlAsIHsgdHlwZTogXCJsaW5lc1wiIH0pO1xuICAvLyBsZXQgc2VjNldvcmRzUCA9IHNlYzZzcGxpdFAud29yZHM7XG4gIGxldCBzZWM2TGluZXNQID0gc2VjNnNwbGl0UC5saW5lcztcbiAgLy8gJChzZWM2V29yZHNQKS5hZGRDbGFzcygnaDNXb3JkcyBzZWM2V29yZHNQJyk7XG4gICQoc2VjNkxpbmVzUCkuYWRkQ2xhc3MoJ3BMaW5lcyBzZWM2TGluZXNQJyk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRUNUSU9OIDdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGxldCBzZWM3ID0gJCgnI3NlY3Rpb243Jyk7XG4gIGxldCBzZWM3SDIgPSBzZWM3LmZpbmQoJ2gyJyk7XG4gIGxldCBzZWM3c3BsaXRIMiA9IG5ldyBTcGxpdFRleHQoc2VjN0gyLCB7IHR5cGU6IFwibGluZXMsd29yZHNcIiB9KTtcbiAgLy8gbGV0IHNlYzdDaGFyczIgPSBzZWM3c3BsaXRIMi5jaGFycztcbiAgbGV0IHNlYzdXb3JkczIgPSBzZWM3c3BsaXRIMi53b3JkcztcbiAgbGV0IHNlYzdMaW5lczIgPSBzZWM3c3BsaXRIMi5saW5lcztcbiAgJChzZWM3TGluZXMyKS5hZGRDbGFzcygnaDJMaW5lcycpO1xuICAvLyAkKHNlYzdDaGFyczIpLmFkZENsYXNzKCdoMkNoYXJzJyk7XG4gICQoc2VjN1dvcmRzMikuYWRkQ2xhc3MoJ2gyV29yZHMnKTtcbiAgXG4gIGxldCBzZWM3UCA9IHNlYzcuZmluZCgnLnRleHQtY29udGFpbmVyIHAnKTtcbiAgbGV0IHNlYzdzcGxpdFAgPSBuZXcgU3BsaXRUZXh0KHNlYzdQLCB7IHR5cGU6IFwibGluZXNcIiB9KTtcbiAgLy8gbGV0IHNlYzdXb3Jkc1AgPSBzZWM3c3BsaXRQLndvcmRzO1xuICBsZXQgc2VjN0xpbmVzUCA9IHNlYzdzcGxpdFAubGluZXM7XG4gIC8vICQoc2VjN1dvcmRzUCkuYWRkQ2xhc3MoJ2gzV29yZHMgc2VjN1dvcmRzUCcpO1xuICAkKHNlYzdMaW5lc1ApLmFkZENsYXNzKCdwTGluZXMgc2VjN0xpbmVzUCcpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VDVElPTiA4XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgc2VjOCA9ICQoJyNzZWN0aW9uOCcpO1xuICBsZXQgc2VjOEgyID0gc2VjOC5maW5kKCdoMicpO1xuICBsZXQgc2VjOHNwbGl0SDIgPSBuZXcgU3BsaXRUZXh0KHNlYzhIMiwgeyB0eXBlOiBcImxpbmVzLHdvcmRzXCIgfSk7XG4gIC8vIGxldCBzZWM4Q2hhcnMyID0gc2VjOHNwbGl0SDIuY2hhcnM7XG4gIGxldCBzZWM4V29yZHMyID0gc2VjOHNwbGl0SDIud29yZHM7XG4gIGxldCBzZWM4TGluZXMyID0gc2VjOHNwbGl0SDIubGluZXM7XG4gICQoc2VjOExpbmVzMikuYWRkQ2xhc3MoJ2gyTGluZXMnKTtcbiAgLy8gJChzZWM4Q2hhcnMyKS5hZGRDbGFzcygnaDJDaGFycycpO1xuICAkKHNlYzhXb3JkczIpLmFkZENsYXNzKCdoMldvcmRzJyk7XG4gIFxuICBsZXQgc2VjOFAgPSBzZWM4LmZpbmQoJy50ZXh0LWNvbnRhaW5lciBwJyk7XG4gIGxldCBzZWM4c3BsaXRQID0gbmV3IFNwbGl0VGV4dChzZWM4UCwgeyB0eXBlOiBcImxpbmVzXCIgfSk7XG4gIC8vIGxldCBzZWM4V29yZHNQID0gc2VjOHNwbGl0UC53b3JkcztcbiAgbGV0IHNlYzhMaW5lc1AgPSBzZWM4c3BsaXRQLmxpbmVzO1xuICAvLyAkKHNlYzhXb3Jkc1ApLmFkZENsYXNzKCdoM1dvcmRzIHNlYzhXb3Jkc1AnKTtcbiAgJChzZWM4TGluZXNQKS5hZGRDbGFzcygncExpbmVzIHNlYzhMaW5lc1AnKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFVFVQIEVMRU1FTlRTXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBnc2FwLnNldCgnLmgyQ2hhcnMnLCB7eTonMS4xZW0nfSk7XG59IiwiaW1wb3J0IHsgXG4gIGFuaW1hdGVTZWN0aW9uLFxufSBmcm9tICcuL2luZGV4LmpzJztcblxuZXhwb3J0IGxldCBwcmVMb2FkZXIgPSAoKSA9PiB7XG4gIGxldCB0bCA9IG5ldyBnc2FwLnRpbWVsaW5lKHtcbiAgICBkZWZhdWx0czp7XG4gICAgICBkdXJhdGlvbjowLjUsXG4gICAgfSxcbiAgICBcbiAgICAvLyBlYXNlOidwb3dlcjQub3V0JyxcbiAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgLy8gYWxlcnQoJ291dCcpO1xuICAgICAgJCgnI3ByZWxvYWRlcicpLnJlbW92ZSgpO1xuICAgIH1cbiAgfSlcbiAgdGwudG8oJy5wcmVsb2FkZXJTVkcnLCB7c2NhbGU6MH0sXCJsb2FkT3V0XCIpO1xuXHR0bC50bygnI3ByZWxvYWRlcicsIHtvcGFjaXR5OjAsZHVyYXRpb246MC4zfSxcImxvYWRPdXQyXCIpO1xufVxuXG5leHBvcnQgbGV0IHZpZExpbmtzPSAoKSA9PiB7XG5cdGxldCB0aGlzU3JjID0gJCgnLmlmcmFtZUhvbGRlcicpLmF0dHIoJ2RhdGEtZGVza3RvcC12aWQnKTtcbiAgLy8gY29uc29sZS5sb2codGhpc1NyYyk7XG4gICQoJy5pZnJhbWVFbXB0eScpLmF0dHIoJ3NyYycsICdodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vJyt0aGlzU3JjKyc/aD0yNWYzMzRlOTU2JnRpdGxlPTAmYnlsaW5lPTAmcG9ydHJhaXQ9MCcpIFxufVxuXG5leHBvcnQgbGV0IG1vYmlsZVZpZExpbmtzPSAoKSA9PiB7XG5cdGxldCB0aGlzU3JjID0gJCgnLmlmcmFtZUhvbGRlcicpLmF0dHIoJ2RhdGEtbW9iaWxlLXZpZCcpO1xuICAvLyBjb25zb2xlLmxvZyh0aGlzU3JjKTtcbiAgJCgnLmlmcmFtZUVtcHR5JykuYXR0cignc3JjJywgJ2h0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8nK3RoaXNTcmMrJz9oPTI1ZjMzNGU5NTYmdGl0bGU9MCZieWxpbmU9MCZwb3J0cmFpdD0wJykgXG59XG5cbmV4cG9ydCBsZXQgc21vb3RoU2Nyb2xsaW5nID0gKHRoZUxpbmspID0+IHtcbiAgXG4gIGxldCB0YXJnZXQgPSAkKHRoZUxpbmspLmF0dHIoJ2hyZWYnKTtcbiAgbGV0IGhlYWRlckhlaWdodCA9ICQoJy5oZWFkZXInKS5vdXRlckhlaWdodCgpOyBcbiAgZ3NhcC50byh3aW5kb3csIHtkdXJhdGlvbjouNSwgZWFzZTogJ2NpcmMub3V0JywgXG4gICAgc2Nyb2xsVG86e1xuICAgICAgeTp0YXJnZXQsIFxuICAgICAgLy8gQWN0aXZhdGUgaWYgSGVhZGVyIElzIEZpeGVkXG4gICAgICAvLyBvZmZzZXRZOmhlYWRlckhlaWdodFxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGxldCBtb2JpbGVOYXZTZXR1cCA9ICgpID0+IHtcbiAgZ3NhcC5zZXQoJ25hdiBhJywge29wYWNpdHk6MCwgeDonNTAlJ30pO1xufVxuIiwiZXhwb3J0IGxldCBzZWN0aW9uc1NldHVwID0gKCkgPT4ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gTUVBU1VSSU5HIFZBUlNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGxldCB0b3RhbFNlY3Rpb25zID0gJCgnc2VjdGlvbicpLmxlbmd0aDtcbiAgbGV0IHRvdGFsQnV6ek9uID0gJCgnLmJ1enpPbkJlZXNCbG9jaycpLmxlbmd0aDtcbiAgbGV0IHdpbmRvd0hlaWdodCA9IE1hdGgucm91bmQod2luZG93LmlubmVySGVpZ2h0KTtcbiAgaWYgKHNjcmVlbi53aWR0aCA8PSAxMDI0KXtcbiAgICB2YXIgbXlTY3JvbGxIZWlnaHQgPSB3aW5kb3dIZWlnaHQqMS41O1xuICB9IGVsc2Uge1xuICAgIHZhciBteVNjcm9sbEhlaWdodCA9IHdpbmRvd0hlaWdodC8yO1xuICB9XG4gIGxldCBmdWxsSGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKHRvdGFsU2VjdGlvbnMgKyB0b3RhbEJ1enpPbikpICsgd2luZG93SGVpZ2h0IC0gMTtcbiAgbGV0IGJ1enpCbG9jayA9ICQoJy5idXp6T25CZWVzQmxvY2snKTtcbiAgbGV0IGJ1enpXaWR0aCA9IGJ1enpCbG9jay5vdXRlcldpZHRoKCk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBHTE9CQUxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNldCBPdmVyYWxsIFNjcm9sbCBIZWlnaHRcbiAgZ3NhcC5zZXQoJy5ob21lLXBhZ2UnLCB7aGVpZ2h0OmZ1bGxIZWlnaHR9KTtcbiAgZ3NhcC5zZXQoZG9jdW1lbnQuYm9keSwge292ZXJmbG93OiBcImhpZGRlblwifSlcbiAgLy8gSGlkZSBBbGwgTGluZXNcbiAgZ3NhcC5zZXQoJCgnLmhvbWUtcGFnZScpLmZpbmQoJ3BhdGgnKSwge2RyYXdTVkc6XCI1MCUgNTAlXCJ9KTtcbiAgZ3NhcC5zZXQoJCgnLmhvbWUtcGFnZScpLmZpbmQoJ3BvbHlsaW5lJyksIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSk7XG4gIGdzYXAuc2V0KCQoJy5ob21lLXBhZ2UnKS5maW5kKCdsaW5lJyksIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSk7XG4gIGdzYXAuc2V0KCQoJy5ob21lLXBhZ2UnKS5maW5kKCcjZG93bi1hcnJvdyBsaW5lJyksIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9KTtcbiAgLy8gU2V0IDFzdCBCYWNrZ3JvdW5kIEltYWdlIGFzIFZpc2libGVcbiAgZ3NhcC5zZXQoJyNiYWNrZ3JvdW5kMScsIHtvcGFjaXR5OjEsIHpJbmRleDoxMDF9KTtcbiAgLy8gU2V0IEJ1enogT24gQmVlcyB0byBIaWRkZW5cbiAgZ3NhcC5zZXQoYnV6ekJsb2NrLCB7eDpidXp6V2lkdGh9KTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFQ1RJT04gMVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbGV0IHNlYzEgPSAkKCcjc2VjdGlvbjEnKTtcbiAgbGV0IHNlYzFIMiA9IHNlYzEuZmluZCgnaDInKTtcbiAgbGV0IHNlYzFzcGxpdEgyID0gbmV3IFNwbGl0VGV4dChzZWMxSDIsIHsgdHlwZTogXCJsaW5lcyx3b3JkcyxjaGFyc1wiIH0pO1xuICBsZXQgc2VjMUNoYXJzMiA9IHNlYzFzcGxpdEgyLmNoYXJzO1xuICBsZXQgc2VjMVdvcmRzMiA9IHNlYzFzcGxpdEgyLndvcmRzO1xuICBsZXQgc2VjMUxpbmVzMiA9IHNlYzFzcGxpdEgyLmxpbmVzO1xuICAkKHNlYzFMaW5lczIpLmFkZENsYXNzKCdoMkxpbmVzJyk7XG4gICQoc2VjMUNoYXJzMikuYWRkQ2xhc3MoJ2gyQ2hhcnMgc2VjMUNoYXJzMicpO1xuICAkKHNlYzFXb3JkczIpLmFkZENsYXNzKCdoMldvcmRzIHNlYzFXb3JkczInKTtcblxuICBsZXQgc2VjMUgzID0gc2VjMS5maW5kKCdoMycpO1xuICBsZXQgc2VjMXNwbGl0SDMgPSBuZXcgU3BsaXRUZXh0KHNlYzFIMywgeyB0eXBlOiBcImxpbmVzLHdvcmRzLGNoYXJzXCIgfSk7XG4gIGxldCBzZWMxQ2hhcnMzID0gc2VjMXNwbGl0SDMuY2hhcnM7XG4gIGxldCBzZWMxV29yZHMzID0gc2VjMXNwbGl0SDMud29yZHM7XG4gICQoc2VjMUNoYXJzMykuYWRkQ2xhc3MoJ2gzQ2hhcnMgc2VjMUNoYXJzMycpO1xuICAkKHNlYzFXb3JkczMpLmFkZENsYXNzKCdoM1dvcmRzIHNlYzFXb3JkczMnKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFQ1RJT04gMlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbGV0IHNlYzIgPSAkKCcjc2VjdGlvbjInKTtcbiAgbGV0IHNlYzJIMiA9IHNlYzIuZmluZCgnaDInKTtcbiAgbGV0IHNlYzJzcGxpdEgyID0gbmV3IFNwbGl0VGV4dChzZWMySDIsIHsgdHlwZTogXCJsaW5lcyx3b3JkcyxjaGFyc1wiIH0pO1xuICBsZXQgc2VjMkNoYXJzMiA9IHNlYzJzcGxpdEgyLmNoYXJzO1xuICBsZXQgc2VjMldvcmRzMiA9IHNlYzJzcGxpdEgyLndvcmRzO1xuICBsZXQgc2VjMkxpbmVzMiA9IHNlYzJzcGxpdEgyLmxpbmVzO1xuICAkKHNlYzJMaW5lczIpLmFkZENsYXNzKCdoMkxpbmVzJyk7XG4gICQoc2VjMkNoYXJzMikuYWRkQ2xhc3MoJ2gyQ2hhcnMgc2VjMkNoYXJzMicpO1xuICAkKHNlYzJXb3JkczIpLmFkZENsYXNzKCdoMldvcmRzIHNlYzJXb3JkczInKTtcbiAgXG4gIGxldCBzZWMyUCA9IHNlYzIuZmluZCgnLnRleHQtY29udGFpbmVyIHAnKTtcbiAgbGV0IHNlYzJzcGxpdFAgPSBuZXcgU3BsaXRUZXh0KHNlYzJQLCB7IHR5cGU6IFwibGluZXNcIiB9KTtcbiAgLy8gbGV0IHNlYzJXb3Jkc1AgPSBzZWMyc3BsaXRQLndvcmRzO1xuICBsZXQgc2VjMkxpbmVzUCA9IHNlYzJzcGxpdFAubGluZXM7XG4gIC8vICQoc2VjMldvcmRzUCkuYWRkQ2xhc3MoJ2gzV29yZHMgc2VjMldvcmRzUCcpO1xuICAkKHNlYzJMaW5lc1ApLmFkZENsYXNzKCdwTGluZXMgc2VjMkxpbmVzUCcpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VDVElPTiA0XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgc2VjNCA9ICQoJyNzZWN0aW9uNCcpO1xuICBsZXQgc2VjNEgyID0gc2VjNC5maW5kKCdoMicpO1xuICBsZXQgc2VjNHNwbGl0SDIgPSBuZXcgU3BsaXRUZXh0KHNlYzRIMiwgeyB0eXBlOiBcImxpbmVzLHdvcmRzLGNoYXJzXCIgfSk7XG4gIGxldCBzZWM0Q2hhcnMyID0gc2VjNHNwbGl0SDIuY2hhcnM7XG4gIGxldCBzZWM0V29yZHMyID0gc2VjNHNwbGl0SDIud29yZHM7XG4gIGxldCBzZWM0TGluZXMyID0gc2VjNHNwbGl0SDIubGluZXM7XG4gICQoc2VjNExpbmVzMikuYWRkQ2xhc3MoJ2gyTGluZXMnKTtcbiAgJChzZWM0Q2hhcnMyKS5hZGRDbGFzcygnaDJDaGFycyBzZWM0Q2hhcnMyJyk7XG4gICQoc2VjNFdvcmRzMikuYWRkQ2xhc3MoJ2gyV29yZHMgc2VjNFdvcmRzMicpO1xuICBcbiAgbGV0IHNlYzRQID0gc2VjNC5maW5kKCcudGV4dC1jb250YWluZXIgcCcpO1xuICBsZXQgc2VjNHNwbGl0UCA9IG5ldyBTcGxpdFRleHQoc2VjNFAsIHsgdHlwZTogXCJsaW5lc1wiIH0pO1xuICAvLyBsZXQgc2VjNFdvcmRzUCA9IHNlYzRzcGxpdFAud29yZHM7XG4gIGxldCBzZWM0TGluZXNQID0gc2VjNHNwbGl0UC5saW5lcztcbiAgLy8gJChzZWM0V29yZHNQKS5hZGRDbGFzcygnaDNXb3JkcyBzZWM0V29yZHNQJyk7XG4gICQoc2VjNExpbmVzUCkuYWRkQ2xhc3MoJ3BMaW5lcyBzZWM0TGluZXNQJyk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRUNUSU9OIDVcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGxldCBzZWM1ID0gJCgnI3NlY3Rpb241Jyk7XG4gIGxldCBzZWM1SDIgPSBzZWM1LmZpbmQoJ2gyJyk7XG4gIGxldCBzZWM1c3BsaXRIMiA9IG5ldyBTcGxpdFRleHQoc2VjNUgyLCB7IHR5cGU6IFwibGluZXMsd29yZHMsY2hhcnNcIiB9KTtcbiAgbGV0IHNlYzVDaGFyczIgPSBzZWM1c3BsaXRIMi5jaGFycztcbiAgbGV0IHNlYzVXb3JkczIgPSBzZWM1c3BsaXRIMi53b3JkcztcbiAgbGV0IHNlYzVMaW5lczIgPSBzZWM1c3BsaXRIMi5saW5lcztcbiAgJChzZWM1TGluZXMyKS5hZGRDbGFzcygnaDJMaW5lcycpO1xuICAkKHNlYzVDaGFyczIpLmFkZENsYXNzKCdoMkNoYXJzIHNlYzVDaGFyczInKTtcbiAgJChzZWM1V29yZHMyKS5hZGRDbGFzcygnaDJXb3JkcyBzZWM1V29yZHMyJyk7XG4gIFxuICBsZXQgc2VjNVAgPSBzZWM1LmZpbmQoJy50ZXh0LWNvbnRhaW5lciBwJyk7XG4gIGxldCBzZWM1c3BsaXRQID0gbmV3IFNwbGl0VGV4dChzZWM1UCwgeyB0eXBlOiBcImxpbmVzXCIgfSk7XG4gIC8vIGxldCBzZWM1V29yZHNQID0gc2VjNXNwbGl0UC53b3JkcztcbiAgbGV0IHNlYzVMaW5lc1AgPSBzZWM1c3BsaXRQLmxpbmVzO1xuICAvLyAkKHNlYzVXb3Jkc1ApLmFkZENsYXNzKCdoM1dvcmRzIHNlYzVXb3Jkc1AnKTtcbiAgJChzZWM1TGluZXNQKS5hZGRDbGFzcygncExpbmVzIHNlYzVMaW5lc1AnKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFQ1RJT04gNlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbGV0IHNlYzYgPSAkKCcjc2VjdGlvbjYnKTtcbiAgbGV0IHNlYzZIMiA9IHNlYzYuZmluZCgnaDInKTtcbiAgbGV0IHNlYzZzcGxpdEgyID0gbmV3IFNwbGl0VGV4dChzZWM2SDIsIHsgdHlwZTogXCJsaW5lcyx3b3JkcyxjaGFyc1wiIH0pO1xuICBsZXQgc2VjNkNoYXJzMiA9IHNlYzZzcGxpdEgyLmNoYXJzO1xuICBsZXQgc2VjNldvcmRzMiA9IHNlYzZzcGxpdEgyLndvcmRzO1xuICBsZXQgc2VjNkxpbmVzMiA9IHNlYzZzcGxpdEgyLmxpbmVzO1xuICAkKHNlYzZMaW5lczIpLmFkZENsYXNzKCdoMkxpbmVzJyk7XG4gICQoc2VjNkNoYXJzMikuYWRkQ2xhc3MoJ2gyQ2hhcnMgc2VjNkNoYXJzMicpO1xuICAkKHNlYzZXb3JkczIpLmFkZENsYXNzKCdoMldvcmRzIHNlYzZXb3JkczInKTtcbiAgXG4gIGxldCBzZWM2UCA9IHNlYzYuZmluZCgnLnRleHQtY29udGFpbmVyIHAnKTtcbiAgbGV0IHNlYzZzcGxpdFAgPSBuZXcgU3BsaXRUZXh0KHNlYzZQLCB7IHR5cGU6IFwibGluZXNcIiB9KTtcbiAgLy8gbGV0IHNlYzZXb3Jkc1AgPSBzZWM2c3BsaXRQLndvcmRzO1xuICBsZXQgc2VjNkxpbmVzUCA9IHNlYzZzcGxpdFAubGluZXM7XG4gIC8vICQoc2VjNldvcmRzUCkuYWRkQ2xhc3MoJ2gzV29yZHMgc2VjNldvcmRzUCcpO1xuICAkKHNlYzZMaW5lc1ApLmFkZENsYXNzKCdwTGluZXMgc2VjNkxpbmVzUCcpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VDVElPTiA3XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgc2VjNyA9ICQoJyNzZWN0aW9uNycpO1xuICBsZXQgc2VjN0gyID0gc2VjNy5maW5kKCdoMicpO1xuICBsZXQgc2VjN3NwbGl0SDIgPSBuZXcgU3BsaXRUZXh0KHNlYzdIMiwgeyB0eXBlOiBcImxpbmVzLHdvcmRzLGNoYXJzXCIgfSk7XG4gIGxldCBzZWM3Q2hhcnMyID0gc2VjN3NwbGl0SDIuY2hhcnM7XG4gIGxldCBzZWM3V29yZHMyID0gc2VjN3NwbGl0SDIud29yZHM7XG4gIGxldCBzZWM3TGluZXMyID0gc2VjN3NwbGl0SDIubGluZXM7XG4gICQoc2VjN0xpbmVzMikuYWRkQ2xhc3MoJ2gyTGluZXMnKTtcbiAgJChzZWM3Q2hhcnMyKS5hZGRDbGFzcygnaDJDaGFycycpO1xuICAkKHNlYzdXb3JkczIpLmFkZENsYXNzKCdoMldvcmRzJyk7XG4gIFxuICBsZXQgc2VjN1AgPSBzZWM3LmZpbmQoJy50ZXh0LWNvbnRhaW5lciBwJyk7XG4gIGxldCBzZWM3c3BsaXRQID0gbmV3IFNwbGl0VGV4dChzZWM3UCwgeyB0eXBlOiBcImxpbmVzXCIgfSk7XG4gIC8vIGxldCBzZWM3V29yZHNQID0gc2VjN3NwbGl0UC53b3JkcztcbiAgbGV0IHNlYzdMaW5lc1AgPSBzZWM3c3BsaXRQLmxpbmVzO1xuICAvLyAkKHNlYzdXb3Jkc1ApLmFkZENsYXNzKCdoM1dvcmRzIHNlYzdXb3Jkc1AnKTtcbiAgJChzZWM3TGluZXNQKS5hZGRDbGFzcygncExpbmVzIHNlYzdMaW5lc1AnKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFQ1RJT04gOFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbGV0IHNlYzggPSAkKCcjc2VjdGlvbjgnKTtcbiAgbGV0IHNlYzhIMiA9IHNlYzguZmluZCgnaDInKTtcbiAgbGV0IHNlYzhzcGxpdEgyID0gbmV3IFNwbGl0VGV4dChzZWM4SDIsIHsgdHlwZTogXCJsaW5lcyx3b3JkcyxjaGFyc1wiIH0pO1xuICBsZXQgc2VjOENoYXJzMiA9IHNlYzhzcGxpdEgyLmNoYXJzO1xuICBsZXQgc2VjOFdvcmRzMiA9IHNlYzhzcGxpdEgyLndvcmRzO1xuICBsZXQgc2VjOExpbmVzMiA9IHNlYzhzcGxpdEgyLmxpbmVzO1xuICAkKHNlYzhMaW5lczIpLmFkZENsYXNzKCdoMkxpbmVzJyk7XG4gICQoc2VjOENoYXJzMikuYWRkQ2xhc3MoJ2gyQ2hhcnMnKTtcbiAgJChzZWM4V29yZHMyKS5hZGRDbGFzcygnaDJXb3JkcycpO1xuICBcbiAgbGV0IHNlYzhQID0gc2VjOC5maW5kKCcudGV4dC1jb250YWluZXIgcCcpO1xuICBsZXQgc2VjOHNwbGl0UCA9IG5ldyBTcGxpdFRleHQoc2VjOFAsIHsgdHlwZTogXCJsaW5lc1wiIH0pO1xuICAvLyBsZXQgc2VjOFdvcmRzUCA9IHNlYzhzcGxpdFAud29yZHM7XG4gIGxldCBzZWM4TGluZXNQID0gc2VjOHNwbGl0UC5saW5lcztcbiAgLy8gJChzZWM4V29yZHNQKS5hZGRDbGFzcygnaDNXb3JkcyBzZWM4V29yZHNQJyk7XG4gICQoc2VjOExpbmVzUCkuYWRkQ2xhc3MoJ3BMaW5lcyBzZWM4TGluZXNQJyk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRVRVUCBFTEVNRU5UU1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gZ3NhcC5zZXQoJy5oMkNoYXJzJywge3k6JzEuMWVtJ30pO1xufSIsImltcG9ydCB7IFxuICBwcmVMb2FkZXIsXG4gIHZpZExpbmtzLFxuICBtb2JpbGVWaWRMaW5rcyxcbiAgZ3NhcFJlZ2lzdGVycyxcbiAgY2xpY2tFdmVudHMsXG4gIG1vYmlsZU5hdlNldHVwLFxuICBhbmltYXRlU2VjdGlvbixcbiAgc2VjdGlvbnNTZXR1cCxcbiAgbW9iaWxlQW5pbWF0ZVNlY3Rpb24sXG4gIG1vYmlsZVNlY3Rpb25zU2V0dXBcbn0gZnJvbSAnLi9pbmRleC5qcyc7XG4gXG5cbi8vICQod2luZG93KS5vbignYmVmb3JldW5sb2FkJywgZnVuY3Rpb24oKSB7XG4vLyAgICQod2luZG93KS5zY3JvbGxUb3AoMCk7XG4vLyB9KTtcblxud2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24gKCkge1xuICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgcHJlTG9hZGVyKCk7XG4gICAgZ3NhcFJlZ2lzdGVycygpO1xuICAgIFxuICAgIGlmIChzY3JlZW4ud2lkdGggPD0gMTAyNCl7XG4gICAgICBtb2JpbGVTZWN0aW9uc1NldHVwKCk7XG4gICAgICBtb2JpbGVWaWRMaW5rcygpO1xuICAgICAgbW9iaWxlQW5pbWF0ZVNlY3Rpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VjdGlvbnNTZXR1cCgpO1xuICAgICAgdmlkTGlua3MoKTtcbiAgICAgIGFuaW1hdGVTZWN0aW9uKCk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIFxuICAgICAgXG4gICAgICBcbn0pXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcblxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==