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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hbmltYXRlU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9jbGlja0V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9nc2FwUmVnaXN0ZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21lbnVUb2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbW9iaWxlQW5pbWF0ZVNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbW9iaWxlU2VjdGlvbnNTZXR1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9wYWdlU2V0dXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2VjdGlvbnNTZXR1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy93aW5kb3dMb2FkLmpzIl0sIm5hbWVzIjpbImFuaW1hdGVTZWN0aW9uIiwid2luZG93SGVpZ2h0IiwiTWF0aCIsInJvdW5kIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJzY3JlZW4iLCJ3aWR0aCIsIm15U2Nyb2xsSGVpZ2h0IiwibXlTY3JvbGxPZmZzZXQiLCJzZWN0aW9uQW5pbSIsInNlY3Rpb25BbmltMSIsInRoaXNTZWMiLCJ0aGlzT3ZlcmxheSIsIiQiLCJjaGFyc0gyIiwiZmluZCIsImNoYXJzSDMiLCJjZW50ZXI0TCIsImNlbnRlcjRSIiwiY2VudGVyM0wiLCJjZW50ZXIzUiIsImNlbnRlcjJMIiwiY2VudGVyMlIiLCJjZW50ZXIxIiwidG9wU21hbGwiLCJib3R0b21TbWFsbCIsImNlbnRlclNtYWxsIiwidG9wTGVmdFNtYWxsIiwidG9wUmlnaHR0U21hbGwiLCJib3R0b21MZWZ0U21hbGwiLCJib3R0b21SaWdodHRTbWFsbCIsInNtYWxsc0dyb3VwIiwiZG93bkFycm93IiwiZG93bkFycm93TGluZSIsImRvd25BcnJvd1BvaW50IiwidGwiLCJnc2FwIiwidGltZWxpbmUiLCJwYXVzZWQiLCJkZWZhdWx0cyIsImR1cmF0aW9uIiwiZWFzZSIsIm9uQ29tcGxldGUiLCJzZXQiLCJkb2N1bWVudCIsImJvZHkiLCJvdmVyZmxvdyIsImxpbmVUTCIsImFycm93VEwiLCJyZXBlYXQiLCJ5b3lvIiwidG8iLCJ5Iiwib25SZXZlcnNlQ29tcGxldGUiLCJraWxsVHdlZW5zT2YiLCJjb250ZW50VEwiLCJ6SW5kZXgiLCJmcm9tVG8iLCJkcmF3U1ZHIiwieCIsIm9wYWNpdHkiLCJzdGFnZ2VyIiwiYW1vdW50IiwiZnJvbSIsImFkZCIsInNlY3Rpb25BbmltMiIsImxpbmVzUCIsInNlY3Rpb25UZXh0IiwiZGVsYXkiLCJzZWN0aW9uQW5pbTMiLCJ0aGlzQmFjayIsImhlaWdodCIsInNlY3Rpb25BbmltNCIsInNvbG9DZW50ZXIyIiwic29sb0NlbnRlcjEiLCJzZWN0aW9uQW5pbTUiLCJtb3JwaFNWRyIsInNoYXBlIiwic2VjdGlvbkFuaW02Iiwic2VjdGlvbkFuaW03IiwiaW1nQ29udGFpbmVyIiwic3ViSW1nIiwicGxheSIsInNlY3Rpb25UcmlnIiwibXlDb3VudCIsInN0YXJ0SGVpZ2h0IiwiZW5kSGVpZ2h0IiwiU2Nyb2xsVHJpZ2dlciIsImNyZWF0ZSIsInN0YXJ0IiwiZW5kIiwic2NydWIiLCJvbkVudGVyIiwib25MZWF2ZSIsInJldmVyc2UiLCJvbkVudGVyQmFjayIsIm9uTGVhdmVCYWNrIiwiaSIsImVhY2giLCJidXp6SW40IiwiYnV6ekJsb2NrIiwiYnV6eldpZHRoIiwib3V0ZXJXaWR0aCIsImJ1enpUcmlnNCIsImJ1enpJbjUiLCJidXp6VHJpZzUiLCJidXp6SW42IiwiYnV6elRyaWc2IiwiY2xpY2tFdmVudHMiLCJtZW51VG9nZ2xlVEwiLCJtZW51VG9nZ2xlIiwicmV2ZXJzZWQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNtb290aFNjcm9sbGluZyIsImdzYXBSZWdpc3RlcnMiLCJyZWdpc3RlclBsdWdpbiIsIlNwbGl0VGV4dCIsIkRyYXdTVkdQbHVnaW4iLCJNb3JwaFNWR1BsdWdpbiIsImxlZnQiLCJyb3RhdGlvbiIsInRyYW5zZm9ybU9yaWdpbiIsIm1vYmlsZUFuaW1hdGVTZWN0aW9uIiwic2VjdGlvbkxpbmVzIiwic2VjQXJyb3ciLCJsaW5lcyIsInRyaWdnZXIiLCJsaW5lc0luIiwidGhlc2VMaW5lcyIsIm1vYmlsZVNlY3Rpb25zU2V0dXAiLCJ0b3RhbFNlY3Rpb25zIiwibGVuZ3RoIiwidG90YWxCdXp6T24iLCJmdWxsSGVpZ2h0Iiwic2VjMUxpbmVzIiwic2VjMUFycm93Iiwic2VjMSIsInNlYzFIMiIsInNlYzFzcGxpdEgyIiwidHlwZSIsInNlYzFDaGFyczIiLCJjaGFycyIsInNlYzFXb3JkczIiLCJ3b3JkcyIsInNlYzFMaW5lczIiLCJhZGRDbGFzcyIsInNlYzFIMyIsInNlYzFzcGxpdEgzIiwic2VjMUNoYXJzMyIsInNlYzFXb3JkczMiLCJzZWMyIiwic2VjMkgyIiwic2VjMnNwbGl0SDIiLCJzZWMyV29yZHMyIiwic2VjMkxpbmVzMiIsInNlYzJQIiwic2VjMnNwbGl0UCIsInNlYzJMaW5lc1AiLCJzZWM0Iiwic2VjNEgyIiwic2VjNHNwbGl0SDIiLCJzZWM0V29yZHMyIiwic2VjNExpbmVzMiIsInNlYzRQIiwic2VjNHNwbGl0UCIsInNlYzRMaW5lc1AiLCJzZWM1Iiwic2VjNUgyIiwic2VjNXNwbGl0SDIiLCJzZWM1V29yZHMyIiwic2VjNUxpbmVzMiIsInNlYzVQIiwic2VjNXNwbGl0UCIsInNlYzVMaW5lc1AiLCJzZWM2Iiwic2VjNkgyIiwic2VjNnNwbGl0SDIiLCJzZWM2V29yZHMyIiwic2VjNkxpbmVzMiIsInNlYzZQIiwic2VjNnNwbGl0UCIsInNlYzZMaW5lc1AiLCJzZWM3Iiwic2VjN0gyIiwic2VjN3NwbGl0SDIiLCJzZWM3V29yZHMyIiwic2VjN0xpbmVzMiIsInNlYzdQIiwic2VjN3NwbGl0UCIsInNlYzdMaW5lc1AiLCJzZWM4Iiwic2VjOEgyIiwic2VjOHNwbGl0SDIiLCJzZWM4V29yZHMyIiwic2VjOExpbmVzMiIsInNlYzhQIiwic2VjOHNwbGl0UCIsInNlYzhMaW5lc1AiLCJwcmVMb2FkZXIiLCJyZW1vdmUiLCJzY2FsZSIsInZpZExpbmtzIiwidGhpc1NyYyIsImF0dHIiLCJtb2JpbGVWaWRMaW5rcyIsInRoZUxpbmsiLCJ0YXJnZXQiLCJoZWFkZXJIZWlnaHQiLCJvdXRlckhlaWdodCIsInNjcm9sbFRvIiwibW9iaWxlTmF2U2V0dXAiLCJzZWN0aW9uc1NldHVwIiwic2VjMkNoYXJzMiIsInNlYzRDaGFyczIiLCJzZWM1Q2hhcnMyIiwic2VjNkNoYXJzMiIsInNlYzdDaGFyczIiLCJzZWM4Q2hhcnMyIiwib25iZWZvcmV1bmxvYWQiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtR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Q29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgJy4vY29tcG9uZW50cy93aW5kb3dMb2FkLmpzJzsiLCJleHBvcnQgbGV0IGFuaW1hdGVTZWN0aW9uID0gKCkgPT4ge1xuICBcbiAgbGV0IHdpbmRvd0hlaWdodCA9IE1hdGgucm91bmQod2luZG93LmlubmVySGVpZ2h0KTtcbiAgaWYgKHNjcmVlbi53aWR0aCA8PSAxMDI0KXtcbiAgICB2YXIgbXlTY3JvbGxIZWlnaHQgPSB3aW5kb3dIZWlnaHQqMjtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbXlTY3JvbGxIZWlnaHQgPSB3aW5kb3dIZWlnaHQvMjtcbiAgfVxuICBsZXQgbXlTY3JvbGxPZmZzZXQgPSAwO1xuICAvLyBHbG9iYWwgdmFyIGZvciBhbmltYXRpb25zIC8gQWNjZXNzIHZpYSBzZWN0aW9uIHRyaWcgbG9vcCBcblxuICAvLyBjb25zb2xlLmxvZyhteVNjcm9sbEhlaWdodCk7XG4gIGxldCBzZWN0aW9uQW5pbSA9IHtcblxuICAgIHNlY3Rpb25BbmltMSA6ICgpID0+IHtcblxuICAgICAgbGV0IHRoaXNTZWMgPSAoJyNzZWN0aW9uMScpO1xuICAgICAgbGV0IHRoaXNPdmVybGF5ID0gJCgnI292ZXJsYXkxJyk7XG4gICAgICBsZXQgY2hhcnNIMiA9ICQodGhpc1NlYykuZmluZCgnLnNlYzFDaGFyczInKTtcbiAgICAgIGxldCBjaGFyc0gzID0gJCh0aGlzU2VjKS5maW5kKCcuc2VjMUNoYXJzMycpO1xuICAgICAgLy8gQmFja2dyb3VuZCBTaGFwZSBWYXJzXG4gICAgICBsZXQgY2VudGVyNEwgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItNEwnKTtcbiAgICAgIGxldCBjZW50ZXI0UiA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci00UicpO1xuICAgICAgbGV0IGNlbnRlcjNMID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTNMJyk7XG4gICAgICBsZXQgY2VudGVyM1IgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItM1InKTtcbiAgICAgIGxldCBjZW50ZXIyTCA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci0yTCcpO1xuICAgICAgbGV0IGNlbnRlcjJSID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTJSJyk7XG4gICAgICBsZXQgY2VudGVyMSA9ICQodGhpc1NlYykuZmluZCgnI3RvcC1iaWcnKTtcbiAgICAgIGxldCB0b3BTbWFsbCA9ICQodGhpc1NlYykuZmluZCgnI3RvcC1zbWFsbCcpO1xuICAgICAgbGV0IGJvdHRvbVNtYWxsID0gJCh0aGlzU2VjKS5maW5kKCcjYm90dG9tLXNtYWxsJyk7XG4gICAgICBsZXQgY2VudGVyU21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItc21hbGwnKTtcbiAgICAgIGxldCB0b3BMZWZ0U21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoJyN0b3AtbGVmdC1zbWFsbCcpO1xuICAgICAgbGV0IHRvcFJpZ2h0dFNtYWxsID0gJCh0aGlzU2VjKS5maW5kKCcjdG9wLXJpZ2h0LXNtYWxsJyk7XG4gICAgICBsZXQgYm90dG9tTGVmdFNtYWxsID0gJCh0aGlzU2VjKS5maW5kKCcjYm90dG9tLWxlZnQtc21hbGwnKTtcbiAgICAgIGxldCBib3R0b21SaWdodHRTbWFsbCA9ICQodGhpc1NlYykuZmluZCgnI2JvdHRvbS1yaWdodC1zbWFsbCcpO1xuICAgICAgbGV0IHNtYWxsc0dyb3VwID0gW3RvcFNtYWxsLCBib3R0b21TbWFsbCwgY2VudGVyU21hbGwsIHRvcExlZnRTbWFsbCwgdG9wUmlnaHR0U21hbGwsIGJvdHRvbUxlZnRTbWFsbCwgYm90dG9tUmlnaHR0U21hbGxdO1xuICAgICAgLy8gQXJyb3cgUGllY2VzXG4gICAgICBsZXQgZG93bkFycm93ID0gJCh0aGlzU2VjKS5maW5kKCcjZG93bi1hcnJvdycpO1xuICAgICAgbGV0IGRvd25BcnJvd0xpbmUgPSAkKHRoaXNTZWMpLmZpbmQoJyNkb3duLWFycm93LWxpbmUnKTtcbiAgICAgIGxldCBkb3duQXJyb3dQb2ludCA9ICQodGhpc1NlYykuZmluZCgnI2Rvd24tYXJyb3ctcG9pbnQnKTtcblxuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuMyxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgLy8gUmVsZWFzZSBUaGUgU2Nyb2xsIExvY2tcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICBnc2FwLnNldChkb2N1bWVudC5ib2R5LCB7b3ZlcmZsb3c6IFwiYXV0b1wifSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBsZXQgbGluZVRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246MC44LFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbGV0IGFycm93VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjE1LFxuICAgICAgICAgIGVhc2U6XCJub25lXCJcbiAgICAgICAgfSwgXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgLy8gQm91bmNlIFRoZSBEb3duIEFycm93XG4gICAgICAgICAgZ3NhcC50aW1lbGluZSh7cmVwZWF0Oi0xLCB5b3lvOnRydWV9KS50byhkb3duQXJyb3csIHt5Oi00LCBkdXJhdGlvbjoxLCBlYXNlOlwibm9uZVwifSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmV2ZXJzZUNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgICAgIC8vIFN0b3AgQm91bmNpbiBUaGUgRG93biBBcnJvdyBhbmQgUmVzZXQgaXQncyBZIHBvc2l0aW9uXG4gICAgICAgICAgZ3NhcC5raWxsVHdlZW5zT2YoZG93bkFycm93KTtcbiAgICAgICAgICBnc2FwLnNldChkb3duQXJyb3csIHt5OjB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGxldCBjb250ZW50VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjQsXG4gICAgICAgICAgZWFzZTpcImJhY2sub3V0KDEuNSlcIlxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgLy8gU2V0IGJhY2tncm91bmQgei1pbmRleCBieSBzZWN0aW9uIG51bWJlciAvIFNlY3Rpb24gMiBoYXMgbm8gYmFjayAvIFNlY3Rpb24gMyBpcyB6LWluZGV4IDExMCB0byBzdGF5IGFib3ZlIGFsbFxuICAgICAgdGwuc2V0KHRoaXNPdmVybGF5LCB7ekluZGV4OjEwMX0pO1xuICAgICAgLy8gU2V0IHNlY3Rpb24gei1pbmRleCBieSBzZWN0aW9uIG51bWJlclxuICAgICAgdGwuZnJvbVRvKHRoaXNTZWMsIHt6SW5kZXg6MTN9LHt6SW5kZXg6MTAwMX0pO1xuICAgICAgXG4gICAgICAvLyBBbmltYXRlIExpbmVzXG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjRMLCB7ZHJhd1NWRzpcIjAlIDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjRSLCB7ZHJhd1NWRzpcIjEwMCUgMTAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXIzTCwge2RyYXdTVkc6XCIwJSAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXIzUiwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyMkwsIHtkcmF3U1ZHOlwiMCUgMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyMlIsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjEsIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCIsIGR1cmF0aW9uOjAuN30sIFwic2Nyb2xsSW4rPTAuMVwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oc21hbGxzR3JvdXAsIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCIsIGR1cmF0aW9uOjAuNn0sIFwic2Nyb2xsSW4rPTAuMlwiKTtcbiAgICAgIFxuICAgICAgLy8gQW5pbWF0ZSBDb250ZW50XG4gICAgICBjb250ZW50VEwuZnJvbVRvKGNoYXJzSDIsIFxuICAgICAgICB7eDotMjAsIG9wYWNpdHk6MH0sXG4gICAgICAgIHt4OjAsIG9wYWNpdHk6MSwgc3RhZ2dlcjp7YW1vdW50OjAuNX1cbiAgICAgIH0sIFwiY29udGVudFwiKTtcbiAgICAgIGNvbnRlbnRUTC5mcm9tVG8oY2hhcnNIMywgXG4gICAgICAgIHt5OicxLjAxZW0nfSxcbiAgICAgICAge3k6MCwgc3RhZ2dlcjoge2Ftb3VudDowLjIsIGZyb206XCJjZW50ZXJcIn1cbiAgICAgIH0sIFwiY29udGVudCs9MC4zNVwiKTtcbiAgICAgIFxuICAgICAgLy8gQW5pbWF0ZSBBcnJvd1xuICAgICAgYXJyb3dUTC5mcm9tVG8oZG93bkFycm93TGluZSwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGFycm93VEwuZnJvbVRvKGRvd25BcnJvd1BvaW50LCB7ZHJhd1NWRzpcIjUwJSA1MCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJbis9MC4xNDVcIik7XG4gICAgICBcbiAgICAgIC8vIEJ1aWxkIE1hc3RlciBUTFRMXG4gICAgICB0bC5mcm9tVG8odGhpc092ZXJsYXksIHtvcGFjaXR5OjB9LCB7b3BhY2l0eTowLjY1fSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmFkZChsaW5lVEwsIFwic2Nyb2xsSW5BbGwrPTAuM1wiKTtcbiAgICAgIHRsLmFkZChjb250ZW50VEwsIFwic2Nyb2xsSW5BbGwrPTAuOFwiKTtcbiAgICAgIHRsLmFkZChhcnJvd1RMLCBcInNjcm9sbEluQWxsKz0xLjRcIik7XG4gICAgICAgICAgICBcbiAgICAgIHJldHVybiB0bDtcbiAgICB9LFxuXG4gICAgc2VjdGlvbkFuaW0yIDogKCkgPT4ge1xuICAgICAgbGV0IHRoaXNTZWMgPSAkKCcjc2VjdGlvbjInKTtcbiAgICAgIGxldCBjaGFyc0gyID0gJCh0aGlzU2VjKS5maW5kKCcuaDJDaGFycycpO1xuICAgICAgbGV0IGxpbmVzUCA9ICQodGhpc1NlYykuZmluZCgnLnBMaW5lcycpO1xuICAgICAgLy8gQmFja2dyb3VuZCBTaGFwZSBWYXJzXG4gICAgICBsZXQgY2VudGVyNEwgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItNEwnKTtcbiAgICAgIGxldCBjZW50ZXI0UiA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci00UicpO1xuICAgICAgbGV0IGNlbnRlcjNMID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTNMJyk7XG4gICAgICBsZXQgY2VudGVyM1IgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItM1InKTtcbiAgICAgIGxldCBjZW50ZXIyTCA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci0yTCcpO1xuICAgICAgbGV0IGNlbnRlcjJSID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTJSJyk7XG4gICAgICBsZXQgY2VudGVyMSA9ICQodGhpc1NlYykuZmluZCgnI3RvcC1iaWcnKTtcbiAgICAgIGxldCB0b3BTbWFsbCA9ICQodGhpc1NlYykuZmluZCgnI3RvcC1zbWFsbCcpO1xuICAgICAgbGV0IGJvdHRvbVNtYWxsID0gJCh0aGlzU2VjKS5maW5kKCcjYm90dG9tLXNtYWxsJyk7XG4gICAgICBsZXQgY2VudGVyU21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItc21hbGwnKTtcbiAgICAgIGxldCB0b3BMZWZ0U21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoJyN0b3AtbGVmdC1zbWFsbCcpO1xuICAgICAgbGV0IHRvcFJpZ2h0dFNtYWxsID0gJCh0aGlzU2VjKS5maW5kKCcjdG9wLXJpZ2h0LXNtYWxsJyk7XG4gICAgICBsZXQgYm90dG9tTGVmdFNtYWxsID0gJCh0aGlzU2VjKS5maW5kKCcjYm90dG9tLWxlZnQtc21hbGwnKTtcbiAgICAgIGxldCBib3R0b21SaWdodHRTbWFsbCA9ICQodGhpc1NlYykuZmluZCgnI2JvdHRvbS1yaWdodC1zbWFsbCcpO1xuICAgICAgbGV0IHNtYWxsc0dyb3VwID0gW3RvcFNtYWxsLCBib3R0b21TbWFsbCwgY2VudGVyU21hbGwsIHRvcExlZnRTbWFsbCwgdG9wUmlnaHR0U21hbGwsIGJvdHRvbUxlZnRTbWFsbCwgYm90dG9tUmlnaHR0U21hbGxdO1xuICAgICAgLy8gQXJyb3cgUGllY2VzXG4gICAgICBsZXQgZG93bkFycm93ID0gJCh0aGlzU2VjKS5maW5kKCcjZG93bi1hcnJvdycpO1xuICAgICAgbGV0IGRvd25BcnJvd0xpbmUgPSAkKHRoaXNTZWMpLmZpbmQoJyNkb3duLWFycm93LWxpbmUnKTtcbiAgICAgIGxldCBkb3duQXJyb3dQb2ludCA9ICQodGhpc1NlYykuZmluZCgnI2Rvd24tYXJyb3ctcG9pbnQnKTtcbiAgICAgIGxldCBzZWN0aW9uVGV4dCA9ICQodGhpc1NlYykuZmluZCgnLmRvd24tYXJyb3ctdGV4dCcpO1xuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlbGF5OjAuNjUsXG4gICAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuMyxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgLy8gUmVsZWFzZSBUaGUgU2Nyb2xsIExvY2tcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICBnc2FwLnNldChkb2N1bWVudC5ib2R5LCB7b3ZlcmZsb3c6IFwiYXV0b1wifSlcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGxldCBsaW5lVEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjgsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBsZXQgY29udGVudFRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246MC4xNSxcbiAgICAgICAgICBlYXNlOlwiYmFjay5vdXQoMS41KVwiXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBsZXQgYXJyb3dUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuMTUsXG4gICAgICAgICAgZWFzZTpcIm5vbmVcIlxuICAgICAgICB9LCBcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAvLyBCb3VuY2UgVGhlIERvd24gQXJyb3dcbiAgICAgICAgICBnc2FwLnRpbWVsaW5lKHtyZXBlYXQ6LTEsIHlveW86dHJ1ZX0pLnRvKGRvd25BcnJvdywge3k6LTMsIGR1cmF0aW9uOjEsIGVhc2U6XCJub25lXCJ9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25SZXZlcnNlQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgLy8gU3RvcCBCb3VuY2luIFRoZSBEb3duIEFycm93IGFuZCBSZXNldCBpdCdzIFkgcG9zaXRpb25cbiAgICAgICAgICBnc2FwLmtpbGxUd2VlbnNPZihkb3duQXJyb3cpO1xuICAgICAgICAgIGdzYXAuc2V0KGRvd25BcnJvdywge3k6MH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gU2V0IHNlY3Rpb24gei1pbmRleCBieSBzZWN0aW9uIG51bWJlclxuICAgICAgdGwuZnJvbVRvKHRoaXNTZWMsIHt6SW5kZXg6MTN9LHt6SW5kZXg6MTAwMn0pO1xuICAgICAgXG4gICAgICAvLyBBbmltYXRlIExpbmVzXG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjRMLCB7ZHJhd1NWRzpcIjEwMCUgMTAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXI0Uiwge2RyYXdTVkc6XCIwJSAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXIzTCwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyM1IsIHtkcmF3U1ZHOlwiMCUgMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyMkwsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjJSLCB7ZHJhd1NWRzpcIjAlIDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjEsIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCIsIGR1cmF0aW9uOjAuN30sIFwic2Nyb2xsSW4rPTAuMVwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oc21hbGxzR3JvdXAsIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCIsIGR1cmF0aW9uOjAuNn0sIFwic2Nyb2xsSW4rPTAuMlwiKTtcbiAgICAgIFxuICAgICAgLy8gQW5pbWF0ZSBDb250ZW50XG4gICAgICBjb250ZW50VEwuZnJvbVRvKGNoYXJzSDIsIFxuICAgICAgICB7eDotMjAsIG9wYWNpdHk6MH0sXG4gICAgICAgIHt4OjAsIG9wYWNpdHk6IDEsIHN0YWdnZXI6e2Ftb3VudDowLjMsIGZyb206XCJyYW5kb21cIn19LCBcbiAgICAgIFwic2Nyb2xsSW5cIik7XG4gICAgICBjb250ZW50VEwuZnJvbVRvKGxpbmVzUCxcbiAgICAgICAge29wYWNpdHk6MCwgeDotNDB9LFxuICAgICAgICB7b3BhY2l0eToxLCB4OjAsIHN0YWdnZXI6e2Ftb3VudDowLjN9fSwgXG4gICAgICBcInNjcm9sbEluKz0wLjFcIik7XG4gICAgICBcbiAgICAgIC8vIEFuaW1hdGUgQXJyb3dcbiAgICAgIGFycm93VEwuZnJvbVRvKHNlY3Rpb25UZXh0LCB7eTotNiwgb3BhY2l0eTowfSwge3k6MCwgb3BhY2l0eToxfSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGFycm93VEwuZnJvbVRvKGRvd25BcnJvd0xpbmUsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW4rPTAuMDI1XCIpO1xuICAgICAgYXJyb3dUTC5mcm9tVG8oZG93bkFycm93UG9pbnQsIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluKz0wLjE3NVwiKTtcbiAgICAgIFxuICAgICAgLy8gQnVpbGQgTWFzdGVyIFRMVExcbiAgICAgIHRsLnRvKCcuaGVhZGVyLWxvZ28nLCB7ZHVyYXRpb246MC45LHdpZHRoOjE5MCwgZWFzZTpcInNpbmUub3V0XCJ9LFwic2Nyb2xsSW5BbGwrPTAuMVwiKTtcbiAgICAgIHRsLmFkZChsaW5lVEwsIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5hZGQoY29udGVudFRMLCBcInNjcm9sbEluQWxsKz0wLjc1XCIpO1xuICAgICAgdGwuYWRkKGFycm93VEwsIFwic2Nyb2xsSW5BbGwrPTAuN1wiKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHRsO1xuICAgIH0sXG4gICAgXG5cbiAgICBzZWN0aW9uQW5pbTMgOiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9ICQoJyNzZWN0aW9uMycpO1xuICAgICAgbGV0IHRoaXNCYWNrID0gJCgnI2JhY2tncm91bmQzJyk7XG4gICAgICBsZXQgY2VudGVyNEwgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItNEwnKTtcbiAgICAgIGxldCBjZW50ZXI0UiA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci00UicpO1xuICAgICAgbGV0IGNlbnRlcjNMID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTNMJyk7XG4gICAgICBsZXQgY2VudGVyM1IgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItM1InKTtcbiAgICAgIGxldCBjZW50ZXIyTCA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci0yTCcpO1xuICAgICAgbGV0IGNlbnRlcjJSID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTJSJyk7XG4gICAgICBsZXQgYm90dG9tU21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoJyNib3R0b20tc21hbGwnKTtcbiAgICAgIC8vIEFycm93IFBpZWNlc1xuICAgICAgbGV0IGRvd25BcnJvdyA9ICQodGhpc1NlYykuZmluZCgnI2Rvd24tYXJyb3cnKTtcbiAgICAgIGxldCBkb3duQXJyb3dMaW5lID0gJCh0aGlzU2VjKS5maW5kKCcjZG93bi1hcnJvdy1saW5lJyk7XG4gICAgICBsZXQgZG93bkFycm93UG9pbnQgPSAkKHRoaXNTZWMpLmZpbmQoJyNkb3duLWFycm93LXBvaW50Jyk7XG4gICAgICBsZXQgc2VjdGlvblRleHQgPSAkKHRoaXNTZWMpLmZpbmQoJy5kb3duLWFycm93LXRleHQnKTtcbiAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWxheTowLjMsXG4gICAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuMyxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgLy8gUmVsZWFzZSBUaGUgU2Nyb2xsIExvY2tcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICBnc2FwLnNldChkb2N1bWVudC5ib2R5LCB7b3ZlcmZsb3c6IFwiYXV0b1wifSlcbiAgICAgICAgfSxcbiAgICAgICAgb25SZXZlcnNlQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgLy8gU2V0IHRoZSBCYWNrZ3JvdW5kIEJhY2sgQmVoaW5kXG4gICAgICAgICAgZ3NhcC5zZXQodGhpc0JhY2ssIHt6SW5kZXg6OTl9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGxldCBsaW5lVEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjgsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBsZXQgY29udGVudFRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246MC42LFxuICAgICAgICAgIGVhc2U6XCJiYWNrLm91dCguMilcIlxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbGV0IGFycm93VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjE1LFxuICAgICAgICAgIGVhc2U6XCJub25lXCJcbiAgICAgICAgfSwgXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgLy8gQm91bmNlIFRoZSBEb3duIEFycm93XG4gICAgICAgICAgZ3NhcC50aW1lbGluZSh7cmVwZWF0Oi0xLCB5b3lvOnRydWV9KS50byhkb3duQXJyb3csIHt5Oi00LCBkdXJhdGlvbjoxLCBlYXNlOlwibm9uZVwifSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmV2ZXJzZUNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgICAgIC8vIFN0b3AgQm91bmNpbiBUaGUgRG93biBBcnJvdyBhbmQgUmVzZXQgaXQncyBZIHBvc2l0aW9uXG4gICAgICAgICAgZ3NhcC5raWxsVHdlZW5zT2YoZG93bkFycm93KTtcbiAgICAgICAgICBnc2FwLnNldChkb3duQXJyb3csIHt5OjB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIFNldCBiYWNrZ3JvdW5kIHotaW5kZXggYnkgc2VjdGlvbiBudW1iZXIgLyBTZWN0aW9uIDIgaGFzIG5vIGJhY2sgLyBTZWN0aW9uIDMgaXMgei1pbmRleCAxMTAgdG8gc3RheSBhYm92ZSBhbGxcbiAgICAgIHRsLnNldCh0aGlzQmFjaywge29wYWNpdHk6MSwgekluZGV4OjExMH0pO1xuICAgICAgLy8gU2V0IHNlY3Rpb24gei1pbmRleCBieSBzZWN0aW9uIG51bWJlclxuICAgICAgdGwuZnJvbVRvKHRoaXNTZWMsIHt6SW5kZXg6MTN9LHt6SW5kZXg6MTAwM30pO1xuICAgICAgXG4gICAgICAvLyBBbmltYXRlIExpbmVzXG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjRMLCB7ZHJhd1NWRzpcIjAlIDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjRSLCB7ZHJhd1NWRzpcIjEwMCUgMTAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXIzTCwge2RyYXdTVkc6XCIwJSAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXIzUiwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyMkwsIHtkcmF3U1ZHOlwiMCUgMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyMlIsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICAgICAgXG4gICAgICAvLyBBbmltYXRlIENvbnRlbnRcbiAgICAgIGNvbnRlbnRUTC5mcm9tVG8oYm90dG9tU21hbGwsIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSwge2RyYXdTVkc6XCIwJSAxMDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgY29udGVudFRMLmZyb21UbygnLnZpZGVvQXJlYScsIHtoZWlnaHQ6MH0sIHtoZWlnaHQ6J2F1dG8nfSwgXCJzY3JvbGxJbis9MC4yXCIpO1xuICAgICAgXG4gICAgICAvLyBBbmltYXRlIEFycm93XG4gICAgICBhcnJvd1RMLmZyb21UbyhzZWN0aW9uVGV4dCwge3k6LTYsIG9wYWNpdHk6MH0sIHt5OjAsIG9wYWNpdHk6MX0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBhcnJvd1RMLmZyb21Ubyhkb3duQXJyb3dMaW5lLCB7ZHJhd1NWRzpcIjEwMCUgMTAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluKz0wLjAyNVwiKTtcbiAgICAgIGFycm93VEwuZnJvbVRvKGRvd25BcnJvd1BvaW50LCB7ZHJhd1NWRzpcIjUwJSA1MCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJbis9MC4xNzVcIik7XG4gICAgICBcbiAgICAgIC8vIEJ1aWxkIE1hc3RlciBUTCBUTFxuICAgICAgdGwuYWRkKGxpbmVUTCwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21Ubyh0aGlzQmFjaywge3k6Jy0xMDAlJ30se3k6MH0sIFwic2Nyb2xsSW5BbGwrPTAuNTVcIik7XG4gICAgICB0bC5hZGQoY29udGVudFRMLCBcInNjcm9sbEluQWxsKz0wLjc1XCIpO1xuICAgICAgdGwuYWRkKGFycm93VEwsIFwic2Nyb2xsSW5BbGwrPTFcIik7XG4gICAgICBcbiAgICAgIHJldHVybiB0bDtcbiAgICB9LFxuXG4gICAgc2VjdGlvbkFuaW00OiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9ICQoJyNzZWN0aW9uNCcpO1xuICAgICAgbGV0IHRoaXNCYWNrID0gJCgnI2JhY2tncm91bmQ0Jyk7XG4gICAgICBsZXQgY2hhcnNIMiA9ICQodGhpc1NlYykuZmluZCgnLmgyQ2hhcnMnKTtcbiAgICAgIGxldCBsaW5lc1AgPSAkKHRoaXNTZWMpLmZpbmQoJy5wTGluZXMnKTtcbiAgICAgIGxldCBzb2xvQ2VudGVyMiA9ICQodGhpc1NlYykuZmluZCgnI3NvbG8tY2VudGVyLTInKTtcbiAgICAgIGxldCBzb2xvQ2VudGVyMSA9ICQodGhpc1NlYykuZmluZCgnI3NvbG8tY2VudGVyLTEnKTtcbiAgICAgIGxldCBib3R0b21TbWFsbCA9ICQodGhpc1NlYykuZmluZCgnI2JvdHRvbS1zbWFsbCcpO1xuICAgICAgLy8gQXJyb3cgUGllY2VzXG4gICAgICBsZXQgZG93bkFycm93ID0gJCh0aGlzU2VjKS5maW5kKCcjZG93bi1hcnJvdycpO1xuICAgICAgbGV0IGRvd25BcnJvd0xpbmUgPSAkKHRoaXNTZWMpLmZpbmQoJyNkb3duLWFycm93LWxpbmUnKTtcbiAgICAgIGxldCBkb3duQXJyb3dQb2ludCA9ICQodGhpc1NlYykuZmluZCgnI2Rvd24tYXJyb3ctcG9pbnQnKTtcbiAgICAgIGxldCBzZWN0aW9uVGV4dCA9ICQodGhpc1NlYykuZmluZCgnLmRvd24tYXJyb3ctdGV4dCcpOyAgXG4gICAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgcGF1c2VkOnRydWUsXG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246MC4zLFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9LFxuICAgICAgICAvLyBSZWxlYXNlIFRoZSBTY3JvbGwgTG9ja1xuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgICAgIGdzYXAuc2V0KGRvY3VtZW50LmJvZHksIHtvdmVyZmxvdzogXCJhdXRvXCJ9KVxuICAgICAgICAgIC8vIGdzYXAuc2V0KCcjYmFja2dyb3VuZDEnLCB7b3BhY2l0eToxfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBsZXQgbGluZVRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246MC42LFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbGV0IGNvbnRlbnRUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuMyxcbiAgICAgICAgICBlYXNlOlwiYmFjay5vdXQoMS41KVwiXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBsZXQgYXJyb3dUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuMTUsXG4gICAgICAgICAgZWFzZTpcIm5vbmVcIlxuICAgICAgICB9LCBcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAvLyBCb3VuY2UgVGhlIERvd24gQXJyb3dcbiAgICAgICAgICBnc2FwLnRpbWVsaW5lKHtyZXBlYXQ6LTEsIHlveW86dHJ1ZX0pLnRvKGRvd25BcnJvdywge3k6LTQsIGR1cmF0aW9uOjEsIGVhc2U6XCJub25lXCJ9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25SZXZlcnNlQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgLy8gU3RvcCBCb3VuY2luIFRoZSBEb3duIEFycm93IGFuZCBSZXNldCBpdCdzIFkgcG9zaXRpb25cbiAgICAgICAgICBnc2FwLmtpbGxUd2VlbnNPZihkb3duQXJyb3cpO1xuICAgICAgICAgIGdzYXAuc2V0KGRvd25BcnJvdywge3k6MH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gU2V0IGJhY2tncm91bmQgei1pbmRleCBieSBzZWN0aW9uIG51bWJlciAvIFNlY3Rpb24gMiBoYXMgbm8gYmFjayAvIFNlY3Rpb24gMyBpcyB6LWluZGV4IDExMCB0byBzdGF5IGFib3ZlIGFsbFxuICAgICAgdGwuc2V0KHRoaXNCYWNrLCB7ekluZGV4OjEwNH0pO1xuICAgICAgLy8gU2V0IHNlY3Rpb24gei1pbmRleCBieSBzZWN0aW9uIG51bWJlclxuICAgICAgdGwuZnJvbVRvKHRoaXNTZWMsIHt6SW5kZXg6MTN9LHt6SW5kZXg6MTAwNH0pO1xuICAgICAgXG4gICAgICAvLyBBbmltYXRlIExpbmVzXG4gICAgICBsaW5lVEwuZnJvbVRvKHNvbG9DZW50ZXIxLCB7ZHJhd1NWRzpcIjUwJSA1MCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oc29sb0NlbnRlcjIsIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21Ubyhib3R0b21TbWFsbCwge2RyYXdTVkc6XCI1MCUgNTAlXCJ9LCB7ZHJhd1NWRzpcIjAlIDEwMCVcIiwgZHVyYXRpb246MC41fSwgXCJzY3JvbGxJbis9MC4zXCIpO1xuICAgICAgXG4gICAgICAvLyBBbmltYXRlIENvbnRlbnRcbiAgICAgIGNvbnRlbnRUTC5mcm9tVG8oY2hhcnNIMiwgXG4gICAgICAgIHt4Oi0yMCwgb3BhY2l0eTowfSxcbiAgICAgICAge3g6MCwgb3BhY2l0eTogMSwgc3RhZ2dlcjp7YW1vdW50OjAuMywgZnJvbTpcInJhbmRvbVwifX0sIFxuICAgICAgXCJzY3JvbGxJblwiKTtcbiAgICAgIGNvbnRlbnRUTC5mcm9tVG8obGluZXNQLFxuICAgICAgICB7b3BhY2l0eTowLCB4Oi00MH0sXG4gICAgICAgIHtvcGFjaXR5OjEsIHg6MCwgc3RhZ2dlcjp7YW1vdW50OjAuM319LCBcbiAgICAgIFwic2Nyb2xsSW4rPTAuMVwiKTtcbiAgICAgIFxuICAgICAgLy8gQW5pbWF0ZSBBcnJvd1xuICAgICAgYXJyb3dUTC5mcm9tVG8oc2VjdGlvblRleHQsIHt5Oi02LCBvcGFjaXR5OjB9LCB7eTowLCBvcGFjaXR5OjF9LCBcInNjcm9sbEluXCIpO1xuICAgICAgYXJyb3dUTC5mcm9tVG8oZG93bkFycm93TGluZSwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJbis9MC4wMjVcIik7XG4gICAgICBhcnJvd1RMLmZyb21Ubyhkb3duQXJyb3dQb2ludCwge2RyYXdTVkc6XCI1MCUgNTAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW4rPTAuMTc1XCIpO1xuICAgICAgXG4gICAgICAvLyBCdWlsZCBNYXN0ZXIgVExUTFxuICAgICAgdGwuZnJvbVRvKHRoaXNCYWNrLCB7b3BhY2l0eTowfSx7b3BhY2l0eToxfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmFkZChsaW5lVEwsIFwic2Nyb2xsSW5BbGwrPTAuOVwiKTtcbiAgICAgIHRsLmFkZChjb250ZW50VEwsIFwic2Nyb2xsSW5BbGwrPTEuNVwiKTtcbiAgICAgIHRsLmFkZChhcnJvd1RMLCBcInNjcm9sbEluQWxsKz0xLjVcIik7XG4gICAgICBcbiAgICAgIHJldHVybiB0bDtcbiAgICB9LFxuXG4gICAgc2VjdGlvbkFuaW01OiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9ICQoJyNzZWN0aW9uNScpO1xuICAgICAgbGV0IHRoaXNCYWNrID0gJCgnI2JhY2tncm91bmQ1Jyk7XG4gICAgICBsZXQgdGhpc092ZXJsYXkgPSAkKCcjb3ZlcmxheTUnKTtcbiAgICAgIGxldCBjaGFyc0gyID0gJCh0aGlzU2VjKS5maW5kKCcuaDJDaGFycycpO1xuICAgICAgbGV0IGxpbmVzUCA9ICQodGhpc1NlYykuZmluZCgnLnBMaW5lcycpO1xuICAgICAgbGV0IGNlbnRlcjRMID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTRMJyk7XG4gICAgICBsZXQgY2VudGVyNFIgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItNFInKTtcbiAgICAgIGxldCBjZW50ZXIzTCA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci0zTCcpO1xuICAgICAgbGV0IGNlbnRlcjNSID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTNSJyk7XG4gICAgICBsZXQgY2VudGVyMkwgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItMkwnKTtcbiAgICAgIGxldCBjZW50ZXIyUiA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci0yUicpO1xuICAgICAgLy8gQXJyb3cgUGllY2VzXG4gICAgICBsZXQgZG93bkFycm93ID0gJCh0aGlzU2VjKS5maW5kKCcjZG93bi1hcnJvdycpO1xuICAgICAgbGV0IGRvd25BcnJvd0xpbmUgPSAkKHRoaXNTZWMpLmZpbmQoJyNkb3duLWFycm93LWxpbmUnKTtcbiAgICAgIGxldCBkb3duQXJyb3dQb2ludCA9ICQodGhpc1NlYykuZmluZCgnI2Rvd24tYXJyb3ctcG9pbnQnKTtcbiAgICAgIGxldCBzZWN0aW9uVGV4dCA9ICQodGhpc1NlYykuZmluZCgnLmRvd24tYXJyb3ctdGV4dCcpO1xuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuNSxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgLy8gUmVsZWFzZSBUaGUgU2Nyb2xsIExvY2tcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICBnc2FwLnNldChkb2N1bWVudC5ib2R5LCB7b3ZlcmZsb3c6IFwiYXV0b1wifSlcbiAgICAgICAgICAvLyBnc2FwLnNldCgnI2JhY2tncm91bmQxJywge29wYWNpdHk6MH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbGV0IGxpbmVUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuNixcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGxldCBjb250ZW50VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjMsXG4gICAgICAgICAgZWFzZTpcImJhY2sub3V0KDEuNSlcIlxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbGV0IGFycm93VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjE1LFxuICAgICAgICAgIGVhc2U6XCJub25lXCJcbiAgICAgICAgfSwgXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgLy8gQm91bmNlIFRoZSBEb3duIEFycm93XG4gICAgICAgICAgZ3NhcC50aW1lbGluZSh7cmVwZWF0Oi0xLCB5b3lvOnRydWV9KS50byhkb3duQXJyb3csIHt5Oi00LCBkdXJhdGlvbjoxLCBlYXNlOlwibm9uZVwifSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmV2ZXJzZUNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgICAgIC8vIFN0b3AgQm91bmNpbiBUaGUgRG93biBBcnJvdyBhbmQgUmVzZXQgaXQncyBZIHBvc2l0aW9uXG4gICAgICAgICAgZ3NhcC5raWxsVHdlZW5zT2YoZG93bkFycm93KTtcbiAgICAgICAgICBnc2FwLnNldChkb3duQXJyb3csIHt5OjB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIC8vIFNldCBiYWNrZ3JvdW5kIHotaW5kZXggYnkgc2VjdGlvbiBudW1iZXIgLyBTZWN0aW9uIDIgaGFzIG5vIGJhY2sgLyBTZWN0aW9uIDMgaXMgei1pbmRleCAxMTAgdG8gc3RheSBhYm92ZSBhbGxcbiAgICAgIHRsLnNldCh0aGlzQmFjaywge3pJbmRleDoxMDV9KTtcbiAgICAgIHRsLnNldCh0aGlzT3ZlcmxheSwge3pJbmRleDoxMDV9KTtcbiAgICAgIC8vIFNldCBzZWN0aW9uIHotaW5kZXggYnkgc2VjdGlvbiBudW1iZXJcbiAgICAgIHRsLmZyb21Ubyh0aGlzU2VjLCB7ekluZGV4OjEzfSx7ekluZGV4OjEwMDV9KTtcblxuICAgICAgLy8gQW5pbWF0ZSBMaW5lc1xuICAgICAgLy8gbGluZVRMLmZyb21UbyhjZW50ZXI0TCwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIC8vIGxpbmVUTC5mcm9tVG8oY2VudGVyNFIsIHtkcmF3U1ZHOlwiMCUgMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIC8vIGxpbmVUTC5mcm9tVG8oY2VudGVyM0wsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICAvLyBsaW5lVEwuZnJvbVRvKGNlbnRlcjNSLCB7ZHJhd1NWRzpcIjAlIDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICAvLyBsaW5lVEwuZnJvbVRvKGNlbnRlcjJMLCB7ZHJhd1NWRzpcIjEwMCUgMTAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgLy8gbGluZVRMLmZyb21UbyhjZW50ZXIyUiwge2RyYXdTVkc6XCIwJSAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuXG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjRMLCB7ZHJhd1NWRzpcIjAlIDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjRSLCB7ZHJhd1NWRzpcIjEwMCUgMTAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXIzTCwge2RyYXdTVkc6XCIwJSAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXIzUiwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyMkwsIHtkcmF3U1ZHOlwiMCUgMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyMlIsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKCcjaG9uZXlDbGlwRW5kJyxcbiAgICAgICAge21vcnBoU1ZHOiB7c2hhcGU6XCIjaG9uZXlDbGlwU3RhcnRcIn19LFxuICAgICAgICB7bW9ycGhTVkc6IHtzaGFwZTpcIiNob25leUNsaXBFbmRcIn0sZHVyYXRpb246MC40LCBlYXNlOlwic2luZS5vdXRcIn0sXG4gICAgICBcInNjcm9sbEluXCIpO1xuXG4gICAgICAvLyBBbmltYXRlIENvbnRlbnRcbiAgICAgIGNvbnRlbnRUTC5mcm9tVG8oY2hhcnNIMiwgXG4gICAgICAgIHt4Oi0yMCwgb3BhY2l0eTowfSxcbiAgICAgICAge3g6MCwgb3BhY2l0eTogMSwgc3RhZ2dlcjp7YW1vdW50OjAuMywgZnJvbTpcInJhbmRvbVwifX0sIFxuICAgICAgXCJzY3JvbGxJblwiKTtcbiAgICAgIGNvbnRlbnRUTC5mcm9tVG8obGluZXNQLFxuICAgICAgICB7b3BhY2l0eTowLCB4Oi00MH0sXG4gICAgICAgIHtvcGFjaXR5OjEsIHg6MCwgc3RhZ2dlcjp7YW1vdW50OjAuM319LCBcbiAgICAgIFwic2Nyb2xsSW4rPTAuMVwiKTtcbiAgIFxuICBcbiAgICAgIC8vIEFuaW1hdGUgQXJyb3dcbiAgICAgIGFycm93VEwuZnJvbVRvKCcjYm90dG9tLXNtYWxsLTInLCB7ZHJhd1NWRzpcIjUwJSA1MCVcIn0sIHtkcmF3U1ZHOlwiMCUgMTAwJVwiLCBkdXJhdGlvbjowLjMsIGVhc2U6XCJzaW5lLm91dFwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGFycm93VEwuZnJvbVRvKHNlY3Rpb25UZXh0LCB7eTotNiwgb3BhY2l0eTowfSwge3k6MCwgb3BhY2l0eToxfSwgXCJzY3JvbGxJbis9MC4xXCIpO1xuICAgICAgYXJyb3dUTC5mcm9tVG8oZG93bkFycm93TGluZSwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJbis9MC4xMjVcIik7XG4gICAgICBhcnJvd1RMLmZyb21Ubyhkb3duQXJyb3dQb2ludCwge2RyYXdTVkc6XCI1MCUgNTAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW4rPTAuMjc1XCIpO1xuICAgICAgXG4gICAgICAvLyBCdWlsZCBNYXN0ZXIgVExUTFxuICAgICAgdGwuZnJvbVRvKHRoaXNPdmVybGF5LCB7b3BhY2l0eTowfSwge29wYWNpdHk6MC45fSwgXCJzY3JvbGxJbkFsbCs9MC44XCIpO1xuICAgICAgdGwuZnJvbVRvKHRoaXNCYWNrLCB7b3BhY2l0eTowfSx7b3BhY2l0eToxLCBkdXJhdGlvbjoxfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmFkZChsaW5lVEwsIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5hZGQoY29udGVudFRMLCBcInNjcm9sbEluQWxsKz0xXCIpO1xuICAgICAgdGwuYWRkKGFycm93VEwsIFwic2Nyb2xsSW5BbGwrPTFcIik7XG5cbiAgICAgIHJldHVybiB0bDtcbiAgICAgIFxuICAgIH0sXG5cbiAgICBzZWN0aW9uQW5pbTY6ICgpID0+IHtcbiAgICAgIGxldCB0aGlzU2VjID0gJCgnI3NlY3Rpb242Jyk7XG4gICAgICBsZXQgdGhpc0JhY2sgPSAkKCcjYmFja2dyb3VuZDYnKTtcbiAgICAgIGxldCBjaGFyc0gyID0gJCh0aGlzU2VjKS5maW5kKCcuaDJDaGFycycpO1xuICAgICAgbGV0IGxpbmVzUCA9ICQodGhpc1NlYykuZmluZCgnLnBMaW5lcycpO1xuICAgICAgbGV0IHRoaXNPdmVybGF5ID0gJCgnI292ZXJsYXk2Jyk7XG4gICAgICBsZXQgY2VudGVyNEwgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItNEwnKTtcbiAgICAgIGxldCBjZW50ZXI0UiA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci00UicpO1xuICAgICAgbGV0IGNlbnRlcjNMID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTNMJyk7XG4gICAgICBsZXQgY2VudGVyM1IgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItM1InKTtcbiAgICAgIGxldCBjZW50ZXIyTCA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci0yTCcpO1xuICAgICAgbGV0IGNlbnRlcjJSID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTJSJyk7XG4gICAgICBsZXQgYm90dG9tU21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoJyNib3R0b20tc21hbGwnKTtcbiAgICAgIC8vIEFycm93IFBpZWNlc1xuICAgICAgbGV0IGRvd25BcnJvdyA9ICQodGhpc1NlYykuZmluZCgnI2Rvd24tYXJyb3cnKTtcbiAgICAgIGxldCBkb3duQXJyb3dMaW5lID0gJCh0aGlzU2VjKS5maW5kKCcjZG93bi1hcnJvdy1saW5lJyk7XG4gICAgICBsZXQgZG93bkFycm93UG9pbnQgPSAkKHRoaXNTZWMpLmZpbmQoJyNkb3duLWFycm93LXBvaW50Jyk7XG4gICAgICBsZXQgc2VjdGlvblRleHQgPSAkKHRoaXNTZWMpLmZpbmQoJy5kb3duLWFycm93LXRleHQnKTtcbiAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjUsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIFJlbGVhc2UgVGhlIFNjcm9sbCBMb2NrXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgZ3NhcC5zZXQoZG9jdW1lbnQuYm9keSwge292ZXJmbG93OiBcImF1dG9cIn0pXG4gICAgICAgICAgLy8gZ3NhcC5zZXQoJyNiYWNrZ3JvdW5kMScsIHtvcGFjaXR5OjB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGxldCBsaW5lVEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjgsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBsZXQgY29udGVudFRMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246MC4zLFxuICAgICAgICAgIGVhc2U6XCJiYWNrLm91dCgxLjUpXCJcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGxldCBhcnJvd1RMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246MC4xNSxcbiAgICAgICAgICBlYXNlOlwibm9uZVwiXG4gICAgICAgIH0sIFxuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgICAgIC8vIEJvdW5jZSBUaGUgRG93biBBcnJvd1xuICAgICAgICAgIGdzYXAudGltZWxpbmUoe3JlcGVhdDotMSwgeW95bzp0cnVlfSkudG8oZG93bkFycm93LCB7eTotNCwgZHVyYXRpb246MSwgZWFzZTpcIm5vbmVcIn0pO1xuICAgICAgICB9LFxuICAgICAgICBvblJldmVyc2VDb21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAvLyBTdG9wIEJvdW5jaW4gVGhlIERvd24gQXJyb3cgYW5kIFJlc2V0IGl0J3MgWSBwb3NpdGlvblxuICAgICAgICAgIGdzYXAua2lsbFR3ZWVuc09mKGRvd25BcnJvdyk7XG4gICAgICAgICAgZ3NhcC5zZXQoZG93bkFycm93LCB7eTowfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgXG4gICAgICAvLyBTZXQgYmFja2dyb3VuZCB6LWluZGV4IGJ5IHNlY3Rpb24gbnVtYmVyIC8gU2VjdGlvbiAyIGhhcyBubyBiYWNrIC8gU2VjdGlvbiAzIGlzIHotaW5kZXggMTEwIHRvIHN0YXkgYWJvdmUgYWxsXG4gICAgICB0bC5zZXQodGhpc0JhY2ssIHt6SW5kZXg6MTA2fSk7XG4gICAgICB0bC5zZXQodGhpc092ZXJsYXksIHt6SW5kZXg6MTA2fSk7XG4gICAgICAvLyBTZXQgc2VjdGlvbiB6LWluZGV4IGJ5IHNlY3Rpb24gbnVtYmVyXG4gICAgICB0bC5mcm9tVG8odGhpc1NlYywge3pJbmRleDoxM30se3pJbmRleDoxMDA2fSk7XG5cbiAgICAgIC8vIEFuaW1hdGUgTGluZXNcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyNEwsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjRSLCB7ZHJhd1NWRzpcIjAlIDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjNMLCB7ZHJhd1NWRzpcIjEwMCUgMTAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXIzUiwge2RyYXdTVkc6XCIwJSAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXIyTCwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyMlIsIHtkcmF3U1ZHOlwiMCUgMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIFxuICAgICAgLy8gQW5pbWF0ZSBDb250ZW50XG4gICAgICBjb250ZW50VEwuZnJvbVRvKGNoYXJzSDIsIFxuICAgICAgICB7eDotMjAsIG9wYWNpdHk6MH0sXG4gICAgICAgIHt4OjAsIG9wYWNpdHk6IDEsIHN0YWdnZXI6e2Ftb3VudDowLjMsIGZyb206XCJyYW5kb21cIn19LCBcbiAgICAgIFwic2Nyb2xsSW5cIik7XG4gICAgICBjb250ZW50VEwuZnJvbVRvKGxpbmVzUCxcbiAgICAgICAge29wYWNpdHk6MCwgeDotNDB9LFxuICAgICAgICB7b3BhY2l0eToxLCB4OjAsIHN0YWdnZXI6e2Ftb3VudDowLjN9fSwgXG4gICAgICBcInNjcm9sbEluKz0wLjFcIik7XG4gICAgICBcbiAgICAgIC8vIEFuaW1hdGUgQXJyb3dcbiAgICAgIGFycm93VEwuZnJvbVRvKGJvdHRvbVNtYWxsLCB7ZHJhd1NWRzpcIjUwJSA1MCVcIn0sIHtkcmF3U1ZHOlwiMCUgMTAwJVwiLCBkdXJhdGlvbjowLjR9LCBcInNjcm9sbEluXCIpO1xuICAgICAgYXJyb3dUTC5mcm9tVG8oc2VjdGlvblRleHQsIHt5Oi02LCBvcGFjaXR5OjB9LCB7eTowLCBvcGFjaXR5OjF9LCBcInNjcm9sbEluKz0wLjE1XCIpO1xuICAgICAgYXJyb3dUTC5mcm9tVG8oZG93bkFycm93TGluZSwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJbis9MC4xNzVcIik7XG4gICAgICBhcnJvd1RMLmZyb21Ubyhkb3duQXJyb3dQb2ludCwge2RyYXdTVkc6XCI1MCUgNTAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW4rPTAuMzI1XCIpO1xuICAgICAgXG4gICAgICAvLyBCdWlsZCBNYXN0ZXIgVExUTFxuICAgICAgdGwuZnJvbVRvKHRoaXNPdmVybGF5LCB7b3BhY2l0eTowfSwge29wYWNpdHk6MC4xfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21Ubyh0aGlzQmFjaywge29wYWNpdHk6MH0se29wYWNpdHk6MX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5hZGQobGluZVRMLCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuYWRkKGNvbnRlbnRUTCwgXCJzY3JvbGxJbkFsbCs9MC42XCIpO1xuICAgICAgdGwuYWRkKGFycm93VEwsIFwic2Nyb2xsSW5BbGwrPTAuOFwiKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHRsOyAgXG4gICAgfSxcblxuICAgIHNlY3Rpb25BbmltNzogKCkgPT4ge1xuICAgICAgbGV0IHRoaXNTZWMgPSAkKCcjc2VjdGlvbjcnKTtcbiAgICAgIGxldCB0aGlzQmFjayA9ICQoJyNiYWNrZ3JvdW5kNycpO1xuICAgICAgbGV0IGNoYXJzSDIgPSAkKHRoaXNTZWMpLmZpbmQoJy5oMkNoYXJzJyk7XG4gICAgICBsZXQgbGluZXNQID0gJCh0aGlzU2VjKS5maW5kKCcucExpbmVzJyk7XG4gICAgICBsZXQgdGhpc092ZXJsYXkgPSAkKCcjb3ZlcmxheTcnKTtcbiAgICAgIGxldCBjZW50ZXI0TCA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci00TCcpO1xuICAgICAgbGV0IGNlbnRlcjRSID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTRSJyk7XG4gICAgICBsZXQgY2VudGVyM0wgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItM0wnKTtcbiAgICAgIGxldCBjZW50ZXIzUiA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci0zUicpO1xuICAgICAgbGV0IGNlbnRlcjJMID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTJMJyk7XG4gICAgICBsZXQgY2VudGVyMlIgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItMlInKTtcbiAgICAgIGxldCB0b3BTbWFsbCA9ICQodGhpc1NlYykuZmluZCgnI3RvcC1zbWFsbCcpO1xuICAgICAgbGV0IGJvdHRvbVNtYWxsID0gJCh0aGlzU2VjKS5maW5kKCcjYm90dG9tLXNtYWxsJyk7XG4gICAgICBsZXQgY2VudGVyU21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItc21hbGwnKTtcbiAgICAgIGxldCB0b3BMZWZ0U21hbGwgPSAkKHRoaXNTZWMpLmZpbmQoJyN0b3AtbGVmdC1zbWFsbCcpO1xuICAgICAgbGV0IHRvcFJpZ2h0dFNtYWxsID0gJCh0aGlzU2VjKS5maW5kKCcjdG9wLXJpZ2h0LXNtYWxsJyk7XG4gICAgICBsZXQgYm90dG9tTGVmdFNtYWxsID0gJCh0aGlzU2VjKS5maW5kKCcjYm90dG9tLWxlZnQtc21hbGwnKTtcbiAgICAgIGxldCBib3R0b21SaWdodHRTbWFsbCA9ICQodGhpc1NlYykuZmluZCgnI2JvdHRvbS1yaWdodC1zbWFsbCcpO1xuICAgICAgbGV0IGltZ0NvbnRhaW5lciA9ICQodGhpc1NlYykuZmluZCgnLmltYWdlQ29udGFpbmVyJyk7XG4gICAgICBsZXQgc3ViSW1nID0gJChpbWdDb250YWluZXIpLmZpbmQoJ2ltZycpO1xuICAgICAgLy8gQXJyb3cgUGllY2VzXG4gICAgICBsZXQgZG93bkFycm93ID0gJCh0aGlzU2VjKS5maW5kKCcjZG93bi1hcnJvdycpO1xuICAgICAgbGV0IGRvd25BcnJvd0xpbmUgPSAkKHRoaXNTZWMpLmZpbmQoJyNkb3duLWFycm93LWxpbmUnKTtcbiAgICAgIGxldCBkb3duQXJyb3dQb2ludCA9ICQodGhpc1NlYykuZmluZCgnI2Rvd24tYXJyb3ctcG9pbnQnKTtcbiAgICAgIGxldCBzZWN0aW9uVGV4dCA9ICQodGhpc1NlYykuZmluZCgnLmRvd24tYXJyb3ctdGV4dCcpO1xuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuNixcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgLy8gUmVsZWFzZSBUaGUgU2Nyb2xsIExvY2tcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICBnc2FwLnNldChkb2N1bWVudC5ib2R5LCB7b3ZlcmZsb3c6IFwiYXV0b1wifSlcbiAgICAgICAgICAvLyBnc2FwLnNldCgnI2JhY2tncm91bmQxJywge29wYWNpdHk6MX0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbGV0IGxpbmVUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuOCxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGxldCBjb250ZW50VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjMsXG4gICAgICAgICAgZWFzZTpcImJhY2sub3V0KDEuNSlcIlxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gbGV0IGFycm93VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIC8vICAgZGVmYXVsdHM6IHtcbiAgICAgIC8vICAgICBkdXJhdGlvbjowLjE1LFxuICAgICAgLy8gICAgIGVhc2U6XCJub25lXCJcbiAgICAgIC8vICAgfSwgXG4gICAgICAvLyAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAvLyAgICAgLy8gQm91bmNlIFRoZSBEb3duIEFycm93XG4gICAgICAvLyAgICAgZ3NhcC50aW1lbGluZSh7cmVwZWF0Oi0xLCB5b3lvOnRydWV9KS50byhkb3duQXJyb3csIHt5Oi00LCBkdXJhdGlvbjoxLCBlYXNlOlwibm9uZVwifSk7XG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIG9uUmV2ZXJzZUNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgLy8gICAgIC8vIFN0b3AgQm91bmNpbiBUaGUgRG93biBBcnJvdyBhbmQgUmVzZXQgaXQncyBZIHBvc2l0aW9uXG4gICAgICAvLyAgICAgZ3NhcC5raWxsVHdlZW5zT2YoZG93bkFycm93KTtcbiAgICAgIC8vICAgICBnc2FwLnNldChkb3duQXJyb3csIHt5OjB9KTtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSk7XG4gICAgICBcbiAgICAgIC8vIFNldCBiYWNrZ3JvdW5kIHotaW5kZXggYnkgc2VjdGlvbiBudW1iZXIgLyBTZWN0aW9uIDIgaGFzIG5vIGJhY2sgLyBTZWN0aW9uIDMgaXMgei1pbmRleCAxMTAgdG8gc3RheSBhYm92ZSBhbGxcbiAgICAgIHRsLnNldCh0aGlzQmFjaywge3pJbmRleDoxMDd9KTtcbiAgICAgIHRsLnNldCh0aGlzT3ZlcmxheSwge3pJbmRleDoxMDd9KTtcbiAgICAgIC8vIFNldCBzZWN0aW9uIHotaW5kZXggYnkgc2VjdGlvbiBudW1iZXJcbiAgICAgIHRsLmZyb21Ubyh0aGlzU2VjLCB7ekluZGV4OjEzfSx7ekluZGV4OjEwMDd9KTtcblxuICAgICAgLy8gQW5pbWF0ZSBMaW5lc1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXI0TCwge2RyYXdTVkc6XCIwJSAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhjZW50ZXI0Uiwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyM0wsIHtkcmF3U1ZHOlwiMCUgMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oY2VudGVyM1IsIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjJMLCB7ZHJhd1NWRzpcIjAlIDAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW5cIik7XG4gICAgICBsaW5lVEwuZnJvbVRvKGNlbnRlcjJSLCB7ZHJhd1NWRzpcIjEwMCUgMTAwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhbdG9wU21hbGwsIGJvdHRvbVNtYWxsLCBjZW50ZXJTbWFsbF0sIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICAgICAgbGluZVRMLmZyb21UbyhbdG9wTGVmdFNtYWxsLCBib3R0b21MZWZ0U21hbGxdLCB7ZHJhd1NWRzpcIjUwJSA1MCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJblwiKTtcbiAgICAgIGxpbmVUTC5mcm9tVG8oW3RvcFJpZ2h0dFNtYWxsLCBib3R0b21SaWdodHRTbWFsbF0sIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSwge2RyYXdTVkc6XCIxMDAlIDAlXCJ9LCBcInNjcm9sbEluXCIpO1xuICBcbiAgICAgIC8vIEFuaW1hdGUgQ29udGVudFxuICAgICAgY29udGVudFRMLmZyb21UbyhjaGFyc0gyLCBcbiAgICAgICAge3g6LTIwLCBvcGFjaXR5OjB9LFxuICAgICAgICB7eDowLCBvcGFjaXR5OiAxLCBzdGFnZ2VyOnthbW91bnQ6MC4zLCBmcm9tOlwicmFuZG9tXCJ9fSwgXG4gICAgICBcInNjcm9sbEluXCIpO1xuICAgICAgY29udGVudFRMLmZyb21UbyhsaW5lc1AsXG4gICAgICAgIHtvcGFjaXR5OjAsIHg6LTQwfSxcbiAgICAgICAge29wYWNpdHk6MSwgeDowLCBzdGFnZ2VyOnthbW91bnQ6MC4zfX0sIFxuICAgICAgXCJzY3JvbGxJbis9MC4xXCIpO1xuICAgICAgY29udGVudFRMLmZyb21UbyhcIi50ZXh0SW1hZ2VcIixcbiAgICAgICAge29wYWNpdHk6MCwgeDotNDB9LFxuICAgICAgICB7b3BhY2l0eToxLCB4OjB9LCBcbiAgICAgIFwic2Nyb2xsSW4rPTAuMVwiKTtcbiAgICAgIGNvbnRlbnRUTC5mcm9tVG8oJyNwYXJ0bmVyQ2xpcEVuZCcsXG4gICAgICAgIHttb3JwaFNWRzoge3NoYXBlOlwiI3BhcnRuZXJDbGlwU3RhcnRcIn19LFxuICAgICAgICB7bW9ycGhTVkc6IHtzaGFwZTpcIiNwYXJ0bmVyQ2xpcEVuZFwifSxkdXJhdGlvbjowLjQsIGVhc2U6XCJzaW5lLm91dFwifSxcbiAgICAgIFwic2Nyb2xsSW4rPTAuMlwiKTtcbiAgICAgIFxuICAgICAgLy8gLy8gQW5pbWF0ZSBBcnJvd1xuICAgICAgLy8gYXJyb3dUTC5mcm9tVG8oc2VjdGlvblRleHQsIHt5Oi02LCBvcGFjaXR5OjB9LCB7eTowLCBvcGFjaXR5OjF9LCBcInNjcm9sbEluXCIpO1xuICAgICAgLy8gYXJyb3dUTC5mcm9tVG8oZG93bkFycm93TGluZSwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0sIHtkcmF3U1ZHOlwiMTAwJSAwJVwifSwgXCJzY3JvbGxJbis9MC4wMjVcIik7XG4gICAgICAvLyBhcnJvd1RMLmZyb21Ubyhkb3duQXJyb3dQb2ludCwge2RyYXdTVkc6XCI1MCUgNTAlXCJ9LCB7ZHJhd1NWRzpcIjEwMCUgMCVcIn0sIFwic2Nyb2xsSW4rPTAuMTc1XCIpO1xuICAgICAgXG4gICAgICAvLyBCdWlsZCBNYXN0ZXIgVExUTFxuICAgICAgdGwuZnJvbVRvKHRoaXNPdmVybGF5LCB7b3BhY2l0eTowfSwge29wYWNpdHk6MC45fSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21Ubyh0aGlzQmFjaywge29wYWNpdHk6MH0se29wYWNpdHk6MX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5hZGQobGluZVRMLCBcInNjcm9sbEluQWxsKz0wLjJcIik7XG4gICAgICB0bC5hZGQoY29udGVudFRMLCBcInNjcm9sbEluQWxsKz0wLjZcIik7XG4gICAgICB0bC5mcm9tVG8oJy5mb290ZXJBcmVhJywge3k6JzEwMCUnfSwge3k6MCwgZHVyYXRpb246MC43LCBlYXNlOidiYWNrLm91dCgwLjUpJ30sIFwic2Nyb2xsSW5BbGwrPTAuN1wiKTtcbiAgICAgIC8vIHRsLmFkZChhcnJvd1RMLCBcInNjcm9sbEluQWxsKz0wLjhcIik7XG5cbiAgICAgIHJldHVybiB0bDsgIFxuICAgIH0sXG5cbiAgICAvLyBzZWN0aW9uQW5pbTg6ICgpID0+IHtcbiAgICAvLyAgIGxldCB0aGlzU2VjID0gJCgnI3NlY3Rpb244Jyk7XG4gICAgLy8gICBsZXQgdGhpc0JhY2sgPSAkKCcjYmFja2dyb3VuZDgnKTtcbiAgICAvLyAgIGxldCBjaGFyc0gyID0gJCh0aGlzU2VjKS5maW5kKCcuaDJDaGFycycpO1xuICAgIC8vICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgLy8gICAgIHBhdXNlZDp0cnVlLFxuICAgIC8vICAgICBkZWZhdWx0czoge1xuICAgIC8vICAgICAgIGR1cmF0aW9uOjAuMyxcbiAgICAvLyAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgLy8gUmVsZWFzZSBUaGUgU2Nyb2xsIExvY2tcbiAgICAvLyAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAvLyAgICAgICBnc2FwLnNldChkb2N1bWVudC5ib2R5LCB7b3ZlcmZsb3c6IFwiYXV0b1wifSlcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSk7XG5cbiAgICAvLyAgIGxldCBjb250ZW50VEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAvLyAgICAgZGVmYXVsdHM6IHtcbiAgICAvLyAgICAgICBkdXJhdGlvbjowLjMsXG4gICAgLy8gICAgICAgZWFzZTpcImJhY2sub3V0KDEuNSlcIlxuICAgIC8vICAgICB9XG4gICAgLy8gICB9KTtcbiAgICAgIFxuICAgIC8vICAgLy8gU2V0IGJhY2tncm91bmQgei1pbmRleCBieSBzZWN0aW9uIG51bWJlciAvIFNlY3Rpb24gMiBoYXMgbm8gYmFjayAvIFNlY3Rpb24gMyBpcyB6LWluZGV4IDExMCB0byBzdGF5IGFib3ZlIGFsbFxuICAgIC8vICAgdGwuc2V0KHRoaXNCYWNrLCB7ekluZGV4OjEwOH0pO1xuICAgIC8vICAgLy8gU2V0IHNlY3Rpb24gei1pbmRleCBieSBzZWN0aW9uIG51bWJlclxuICAgIC8vICAgdGwuZnJvbVRvKHRoaXNTZWMsIHt6SW5kZXg6MTN9LHt6SW5kZXg6MTAwOH0pO1xuICAgICAgICAgICAgXG4gICAgLy8gICAvLyBBbmltYXRlIENvbnRlbnRcbiAgICAvLyAgIGNvbnRlbnRUTC5mcm9tVG8oY2hhcnNIMiwgXG4gICAgLy8gICAgIHt4Oi0yMCwgb3BhY2l0eTowfSxcbiAgICAvLyAgICAge3g6MCwgb3BhY2l0eTogMSwgc3RhZ2dlcjp7YW1vdW50OjAuMywgZnJvbTpcInJhbmRvbVwifX0sIFxuICAgIC8vICAgXCJzY3JvbGxJblwiKTtcbiAgICAvLyAgIGNvbnRlbnRUTC5mcm9tVG8oJy5zaW5nbGVJbWFnZURvd25sb2FkJyx7XG4gICAgLy8gICAgIG9wYWNpdHk6MCwgeTotMjB9LCBcbiAgICAvLyAgICAge29wYWNpdHk6MSx5OjAsIHN0YWdnZXI6e2Ftb3VudDowLjN9fSwgXG4gICAgLy8gICBcInNjcm9sbEluKz0wLjJcIik7XG4gICAgICBcbiAgICAvLyAgIC8vIEJ1aWxkIE1hc3RlciBUTFRMXG4gICAgLy8gICB0bC5mcm9tVG8odGhpc0JhY2ssIHt0b3A6Jy0xMDAlJ30se3RvcDowfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAvLyAgIHRsLmZyb21UbygnLmZvb3RlckFyZWEnLCB7eTonMTAwJSd9LCB7eTowLCBkdXJhdGlvbjowLjUsIGVhc2U6J2JhY2sub3V0KDAuNSknfSwgXCJzY3JvbGxJbkFsbCs9MC41XCIpO1xuICAgIC8vICAgdGwuYWRkKGNvbnRlbnRUTCwgXCJzY3JvbGxJbkFsbCs9MC4zXCIpO1xuXG4gICAgLy8gICByZXR1cm4gdGw7ICBcbiAgICAvLyB9LFxuICB9O1xuXG4gIC8vIFBsYXkgU2VjdGlvbiAxIGF1dG9tYXRpY2FsbHlcbiAgc2VjdGlvbkFuaW1bJ3NlY3Rpb25BbmltMSddKCkucGxheSgpO1xuICBcbiAgLy8gRmlyZSBBbiBBbmltYXRpb24gRnJvbSBBYm92ZSBmb3IgRWFjaCBTZWN0aW9uXG4gIGxldCBzZWN0aW9uVHJpZyA9IChteUNvdW50KSA9PiB7XG4gICAgLy8gQWRkIEFuIEV4dHJhIFNjcm9sbCBmb3IgQnV6eiBPbiBCZWVzIGluIFNlY3Rpb24gNCwgNSwgNiArMSB0b3RhbCBlYWNoIHRpbWVcbiAgICBpZiAobXlDb3VudCA9PT0gMSkge1xuICAgICAgdmFyIHN0YXJ0SGVpZ2h0ID0gMDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDIpIHtcbiAgICAgIHZhciBzdGFydEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqIChteUNvdW50IC0gMSkpIC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgfSBlbHNlIGlmIChteUNvdW50ID09PSAzKSB7XG4gICAgICB2YXIgc3RhcnRIZWlnaHQgPSAobXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCAtIDEpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIH0gZWxzZSBpZiAobXlDb3VudCA9PT0gNCkge1xuICAgICAgdmFyIHN0YXJ0SGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgLSAxKSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDUpIHtcbiAgICAgIHZhciBzdGFydEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqIChteUNvdW50KSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDYpIHtcbiAgICAgIHZhciBzdGFydEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMSkpIC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgfSBlbHNlIGlmIChteUNvdW50ID09PSA3KSB7XG4gICAgICB2YXIgc3RhcnRIZWlnaHQgPSAobXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCArIDIpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIH0gZWxzZSBpZiAobXlDb3VudCA9PT0gOCkge1xuICAgICAgdmFyIHN0YXJ0SGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAyKSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9IFxuXG4gICAgaWYgKG15Q291bnQgPT09IDEpIHtcbiAgICAgIHZhciBlbmRIZWlnaHQgPSBteVNjcm9sbEhlaWdodDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDIpIHtcbiAgICAgIHZhciBlbmRIZWlnaHQgPSAobXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCkpIC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgfSBlbHNlIGlmIChteUNvdW50ID09PSAzKSB7XG4gICAgICB2YXIgZW5kSGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIH0gZWxzZSBpZiAobXlDb3VudCA9PT0gNCkge1xuICAgICAgdmFyIGVuZEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMSkpIC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgfSBlbHNlIGlmIChteUNvdW50ID09PSA1KSB7XG4gICAgICB2YXIgZW5kSGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAyKSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9IGVsc2UgaWYgKG15Q291bnQgPT09IDYpIHtcbiAgICAgIHZhciBlbmRIZWlnaHQgPSAobXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCArIDMpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIH0gZWxzZSBpZiAobXlDb3VudCA9PT0gNykge1xuICAgICAgdmFyIGVuZEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMykpIC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgfSBlbHNlIGlmIChteUNvdW50ID09PSA4KSB7XG4gICAgICB2YXIgZW5kSGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAzKSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICB9IFxuXG4gICAgLy8gY29uc29sZS5sb2coJ3N0YXJ0IGhlaWdodCcrbXlDb3VudCsnIGlzICcrc3RhcnRIZWlnaHQpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdlbmQgaGVpZ2h0JytteUNvdW50KycgaXMgJytlbmRIZWlnaHQpO1xuICAgIFxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIC8vIHRyaWdnZXI6J2JvZHknLFxuICAgICAgc3RhcnQ6c3RhcnRIZWlnaHQsXG4gICAgICBlbmQ6ZW5kSGVpZ2h0LCBcbiAgICAgIHNjcnViOjEsXG4gICAgICBvbkVudGVyOiBmdW5jdGlvbigpe1xuICAgICAgICBpZiAobXlDb3VudCA+IDEpIHtcbiAgICAgICAgICBnc2FwLnNldChkb2N1bWVudC5ib2R5LCB7b3ZlcmZsb3c6IFwiaGlkZGVuXCJ9KVxuICAgICAgICAgIHNlY3Rpb25BbmltWydzZWN0aW9uQW5pbScrbXlDb3VudF0oKS5wbGF5KCk7XG4gICAgICAgICAgLy8gYWxlcnQobXlDb3VudCsnIHNlY3Rpb24gZW50ZXJlZCcpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25MZWF2ZTogZnVuY3Rpb24oKXtcblxuICAgICAgICBpZiAobXlDb3VudCA8IDcpIHtcbiAgICAgICAgICBnc2FwLnNldChkb2N1bWVudC5ib2R5LCB7b3ZlcmZsb3c6IFwiaGlkZGVuXCJ9KVxuICAgICAgICAgIHNlY3Rpb25BbmltWydzZWN0aW9uQW5pbScrbXlDb3VudF0oKS5yZXZlcnNlKDApO1xuICAgICAgICAgIC8vIGFsZXJ0KG15Q291bnQrJyBzZWN0aW9uIGxlZnQnKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uRW50ZXJCYWNrOmZ1bmN0aW9uKCl7XG4gICAgICAgIGlmIChteUNvdW50IDwgNykge1xuICAgICAgICAgIGdzYXAuc2V0KGRvY3VtZW50LmJvZHksIHtvdmVyZmxvdzogXCJoaWRkZW5cIn0pXG4gICAgICAgICAgc2VjdGlvbkFuaW1bJ3NlY3Rpb25BbmltJytteUNvdW50XSgpLnBsYXkoKTtcbiAgICAgICAgICAvLyBhbGVydChteUNvdW50Kycgc2VjdGlvbiBiYWNrIGFnYWluJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkxlYXZlQmFjazogZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKG15Q291bnQgPiAxKSB7XG4gICAgICAgICAgZ3NhcC5zZXQoZG9jdW1lbnQuYm9keSwge292ZXJmbG93OiBcImhpZGRlblwifSlcbiAgICAgICAgICBzZWN0aW9uQW5pbVsnc2VjdGlvbkFuaW0nK215Q291bnRdKCkucmV2ZXJzZSgwKTtcbiAgICAgICAgICAvLyBhbGVydChteUNvdW50Kycgc2VjdGlvbiBsZWZ0IGFnYWluJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICAvLyBDYWxsIFRoZSBUcmlnZ2VyIE9uIEV2ZXJ5IFNlY3Rpb25cbiAgLy8gQW5pbWF0aW9uIHRyaWdnZXJzIGFyZSBjYWxjdWxhdGVkIGluIHRoZSBmdW5jdGlvblxuICBsZXQgaSA9IDE7XG4gICQoJ3NlY3Rpb24nKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgc2VjdGlvblRyaWcoaSk7XG4gICAgaSsrXG4gIH0pXG5cbiAgLy8gU2luZ2xlIEJ1enogb24gQmVlcyBTZWN0aW9uc1xuICAvLyBCdXp6IEFuaW1hdGlvbiA1XG4gIGxldCBidXp6SW40ID0gKCkgPT4ge1xuXG4gICAgbGV0IGJ1enpCbG9jayA9ICQoJyNzZWN0aW9uNCcpLmZpbmQoJy5idXp6T25CZWVzQmxvY2snKTtcbiAgICBsZXQgYnV6eldpZHRoID0gYnV6ekJsb2NrLm91dGVyV2lkdGgoKTtcbiAgICBsZXQgdGwgPSBuZXcgZ3NhcC50aW1lbGluZSh7XG4gICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgIGRlZmF1bHRzOiB7ZHVyYXRpb246MC41LGVhc2U6J2JhY2sub3V0KDAuMjUpOyd9XG4gICAgfSk7XG4gICAgdGwuZnJvbVRvKGJ1enpCbG9jaywge3g6YnV6eldpZHRofSwge3g6MH0pO1xuICAgIHJldHVybiB0bFxuICB9XG5cbiAgbGV0IGJ1enpUcmlnNCA9IChteUNvdW50KSA9PiB7XG4gICAgdmFyIHN0YXJ0SGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgLSAwLjUpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIHZhciBlbmRIZWlnaHQgPSAobXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCArIDAuNSkpIC0gbXlTY3JvbGxPZmZzZXQ7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnYnV6ejQgc3RhcnQgaXMgJytzdGFydEhlaWdodCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2J1eno0IGVuZCBpcyAnK2VuZEhlaWdodCk7XG4gICAgXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgc3RhcnQ6c3RhcnRIZWlnaHQsXG4gICAgICBlbmQ6ZW5kSGVpZ2h0LCBcbiAgICAgIHNjcnViOjEsXG4gICAgICBvbkVudGVyOiBmdW5jdGlvbigpe2J1enpJbjQoKS5wbGF5KCk7fSxcbiAgICAgIG9uTGVhdmU6IGZ1bmN0aW9uKCl7YnV6ekluNCgpLnJldmVyc2UoMCk7fSxcbiAgICAgIG9uRW50ZXJCYWNrOmZ1bmN0aW9uKCl7YnV6ekluNCgpLnBsYXkoKTt9LFxuICAgICAgb25MZWF2ZUJhY2s6IGZ1bmN0aW9uKCl7YnV6ekluNCgpLnJldmVyc2UoMCk7fSxcbiAgICB9KTtcbiAgfVxuXG4gIGJ1enpUcmlnNCg0KTtcblxuICAvLyBCdXp6IEFuaW1hdGlvbiA1XG4gIGxldCBidXp6SW41ID0gKCkgPT4ge1xuICAgIGxldCBidXp6QmxvY2sgPSAkKCcjc2VjdGlvbjUnKS5maW5kKCcuYnV6ek9uQmVlc0Jsb2NrJyk7XG4gICAgbGV0IGJ1enpXaWR0aCA9IGJ1enpCbG9jay5vdXRlcldpZHRoKCk7XG4gICAgbGV0IHRsID0gbmV3IGdzYXAudGltZWxpbmUoe1xuICAgICAgcGF1c2VkOnRydWUsXG4gICAgICBkZWZhdWx0czoge2R1cmF0aW9uOjAuNSxlYXNlOidiYWNrLm91dCgwLjI1KTsnfVxuICAgIH0pO1xuICAgIHRsLmZyb21UbyhidXp6QmxvY2ssIHt4OmJ1enpXaWR0aH0sIHt4OjB9KTtcbiAgICByZXR1cm4gdGxcbiAgfVxuXG4gIGxldCBidXp6VHJpZzUgPSAobXlDb3VudCkgPT4ge1xuICAgIHZhciBzdGFydEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMC41KSkgLSBteVNjcm9sbE9mZnNldDtcbiAgICB2YXIgZW5kSGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAxLjUpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuXG4gICAgLy8gY29uc29sZS5sb2coJ2J1eno1IHN0YXJ0IGlzICcrc3RhcnRIZWlnaHQpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdidXp6NSBlbmQgaXMgJytlbmRIZWlnaHQpO1xuICAgIFxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIHN0YXJ0OnN0YXJ0SGVpZ2h0LFxuICAgICAgZW5kOmVuZEhlaWdodCwgXG4gICAgICBzY3J1YjoxLFxuICAgICAgb25FbnRlcjogZnVuY3Rpb24oKXtidXp6SW41KCkucGxheSgpO30sXG4gICAgICBvbkxlYXZlOiBmdW5jdGlvbigpe2J1enpJbjUoKS5yZXZlcnNlKDApO30sXG4gICAgICBvbkVudGVyQmFjazpmdW5jdGlvbigpe2J1enpJbjUoKS5wbGF5KCk7fSxcbiAgICAgIG9uTGVhdmVCYWNrOiBmdW5jdGlvbigpe2J1enpJbjUoKS5yZXZlcnNlKDApO30sXG4gICAgfSk7XG4gIH1cblxuICBidXp6VHJpZzUoNSk7XG5cbiAgLy8gQnV6eiBBbmltYXRpb24gNlxuICBsZXQgYnV6ekluNiA9ICgpID0+IHtcbiAgICBsZXQgYnV6ekJsb2NrID0gJCgnI3NlY3Rpb242JykuZmluZCgnLmJ1enpPbkJlZXNCbG9jaycpO1xuICAgIGxldCBidXp6V2lkdGggPSBidXp6QmxvY2sub3V0ZXJXaWR0aCgpO1xuICAgIGxldCB0bCA9IG5ldyBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgZGVmYXVsdHM6IHtkdXJhdGlvbjowLjUsZWFzZTonYmFjay5vdXQoMC4yNSk7J31cbiAgICB9KTtcbiAgICB0bC5mcm9tVG8oYnV6ekJsb2NrLCB7eDpidXp6V2lkdGh9LCB7eDowfSk7XG4gICAgcmV0dXJuIHRsXG4gIH1cblxuICBsZXQgYnV6elRyaWc2ID0gKG15Q291bnQpID0+IHtcbiAgICB2YXIgc3RhcnRIZWlnaHQgPSAobXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCArIDEuNSkpIC0gbXlTY3JvbGxPZmZzZXQ7XG4gICAgdmFyIGVuZEhlaWdodCA9IChteVNjcm9sbEhlaWdodCAqIChteUNvdW50ICsgMi41KSkgLSBteVNjcm9sbE9mZnNldDtcblxuICAgIC8vIGNvbnNvbGUubG9nKCdidXp6NiBzdGFydCBpcyAnK3N0YXJ0SGVpZ2h0KTtcbiAgICAvLyBjb25zb2xlLmxvZygnYnV6ejYgZW5kIGlzICcrZW5kSGVpZ2h0KTtcbiAgICBcbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICBzdGFydDpzdGFydEhlaWdodCxcbiAgICAgIGVuZDplbmRIZWlnaHQsIFxuICAgICAgc2NydWI6MSxcbiAgICAgIG9uRW50ZXI6IGZ1bmN0aW9uKCl7YnV6ekluNigpLnBsYXkoKTt9LFxuICAgICAgb25MZWF2ZTogZnVuY3Rpb24oKXtidXp6SW42KCkucmV2ZXJzZSgwKTt9LFxuICAgICAgb25FbnRlckJhY2s6ZnVuY3Rpb24oKXtidXp6SW42KCkucGxheSgpO30sXG4gICAgICBvbkxlYXZlQmFjazogZnVuY3Rpb24oKXtidXp6SW42KCkucmV2ZXJzZSgwKTt9LFxuICAgIH0pO1xuICB9XG5cbiAgYnV6elRyaWc2KDYpO1xuXG59XG4iLCJpbXBvcnQge1xuICBtZW51VG9nZ2xlLFxuICBzbW9vdGhTY3JvbGxpbmcsXG59IGZyb20gJy4vaW5kZXguanMnXG5cbmV4cG9ydCBsZXQgY2xpY2tFdmVudHMgPSAoKSA9PiB7XG4gIFxuICAvLyBNb2JpbGUgTmF2IENsaWNrIEV2ZW50XG4gIGxldCBtZW51VG9nZ2xlVEwgPSBtZW51VG9nZ2xlKCk7XG4gIG1lbnVUb2dnbGVUTC5yZXZlcnNlZCh0cnVlKTtcbiAgJCgnLm1lbnVUb2dnbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHsgIFxuICAgIGlmIChtZW51VG9nZ2xlVEwucmV2ZXJzZWQoKSkge1xuICAgICAgbWVudVRvZ2dsZVRMLnBsYXkoKTtcbiAgICAgIGdzYXAuc2V0KCQoJy53cmFwcGVyJyksIHtoZWlnaHQ6JzEwMCUnLCBvdmVyZmxvdzonaGlkZGVuJ30pO1xuICAgIH0gZWxzZSB7XG4gICAgICBnc2FwLnNldCgkKCcud3JhcHBlcicpLCB7aGVpZ2h0OidhdXRvJywgb3ZlcmZsb3c6J3Zpc2libGUnfSk7XG4gICAgICBtZW51VG9nZ2xlVEwucmV2ZXJzZSgpO1xuICAgIH1cblx0fSk7XG5cbiAgJCgnYVtocmVmXj1cIiNcIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdoYXNoIGl0IG91dCcpO1xuICAgIFxuICAgIC8vIElGIElUXCJTIE1PQklMRSAvIElQQUQgT1IgU01BTExFUlxuICAgIGlmIChzY3JlZW4ud2lkdGggPD0gMTAyNSl7XG4gICAgICBnc2FwLnNldCgkKCcud3JhcHBlcicpLCB7aGVpZ2h0OidhdXRvJywgb3ZlcmZsb3c6J3Zpc2libGUnfSk7XG4gICAgICBtZW51VG9nZ2xlVEwucmV2ZXJzZSgpO1xuICAgICAgc21vb3RoU2Nyb2xsaW5nKCQodGhpcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzbW9vdGhTY3JvbGxpbmcoJCh0aGlzKSk7XG4gICAgfVxuICB9KTtcbn0iLCJleHBvcnQgbGV0IGdzYXBSZWdpc3RlcnMgPSAoKSA9PiB7XG4gIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlciwgU3BsaXRUZXh0LCBEcmF3U1ZHUGx1Z2luLCBNb3JwaFNWR1BsdWdpbik7XG59IiwiZXhwb3J0IHtcbiAgcHJlTG9hZGVyLFxuICB2aWRMaW5rcyxcbiAgbW9iaWxlVmlkTGlua3MsXG4gIHNtb290aFNjcm9sbGluZyxcbiAgbW9iaWxlTmF2U2V0dXBcbn0gZnJvbSAnLi9wYWdlU2V0dXAuanMnXG5cbmV4cG9ydCB7XG4gIG1lbnVUb2dnbGVcbn0gZnJvbSAnLi9tZW51VG9nZ2xlLmpzJ1xuXG5leHBvcnQge1xuICBnc2FwUmVnaXN0ZXJzXG59IGZyb20gJy4vZ3NhcFJlZ2lzdGVycy5qcydcblxuZXhwb3J0IHtcbiAgY2xpY2tFdmVudHMsXG59IGZyb20gJy4vY2xpY2tFdmVudHMuanMnXG5cbmV4cG9ydCB7XG4gIGFuaW1hdGVTZWN0aW9uXG59IGZyb20gJy4vYW5pbWF0ZVNlY3Rpb24uanMnXG5cbmV4cG9ydCB7XG4gIHNlY3Rpb25zU2V0dXBcbn0gZnJvbSAnLi9zZWN0aW9uc1NldHVwJ1xuXG5cbmV4cG9ydCB7XG4gIG1vYmlsZVNlY3Rpb25zU2V0dXBcbn0gZnJvbSAnLi9tb2JpbGVTZWN0aW9uc1NldHVwJ1xuXG5leHBvcnQge1xuICBtb2JpbGVBbmltYXRlU2VjdGlvblxufSBmcm9tICcuL21vYmlsZUFuaW1hdGVTZWN0aW9uJ1xuXG4iLCJleHBvcnQgbGV0IG1lbnVUb2dnbGUgPSAoKSA9PiB7XG5cdGxldCB0bCA9IG5ldyBnc2FwLnRpbWVsaW5lKHtcblx0XHRwYXVzZWQ6dHJ1ZSxcblx0XHRkZWZhdWx0czoge1xuXHRcdFx0ZWFzZTogJ2NpcmMub3V0KCknLFxuXHRcdFx0ZHVyYXRpb246MC4zLFxuXHRcdH1cblx0fSk7XG5cblx0dGwudG8oJy5tYWluLW5hdicsIHtkdXJhdGlvbjowLjMsIGxlZnQ6JzAlJ30sICdtZW51T3BlbicpO1xuXHR0bC50bygnbmF2IGEnLCB7b3BhY2l0eToxLCB4OicwJScsIHN0YWdnZXI6IHthbW91bnQ6MC4xfX0sICdtZW51T3Blbis9MC4xJyk7XG5cdHRsLnRvKCcuaGFtVG9wJywge3JvdGF0aW9uOi0zMTUseDo3ICx5OjMsIHdpZHRoOjEwLCB0cmFuc2Zvcm1PcmlnaW46JzUwJSA1MCUnfSwgJ21lbnVPcGVuJyk7XG5cdHRsLnRvKCcuaGFtTWlkJywge3g6LTQsIHdpZHRoOjE4fSwgJ21lbnVPcGVuJyk7XG5cdHRsLnRvKCcuaGFtQm90Jywge3JvdGF0aW9uOjMxNSwgeDo3LCB5Oi0zLCB3aWR0aDoxMCwgdHJhbnNmb3JtT3JpZ2luOic1MCUgNTAlJ30sICdtZW51T3BlbicpO1xuXG5cdHJldHVybiB0bDtcbn0iLCJleHBvcnQgbGV0IG1vYmlsZUFuaW1hdGVTZWN0aW9uID0gKCkgPT4ge1xuXG4gIC8vIGdzYXAuc2V0KCdib2R5Jywge3RvdWNoQWN0aW9uOidub25lJ30pO1xuICAvLyBkb2N1bWVudC5vbnRvdWNobW92ZSA9IChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCk7XG4gIFxuICBsZXQgc2VjdGlvbkFuaW0gPSB7XG5cbiAgICBzZWN0aW9uQW5pbTEgOiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9ICgnI3NlY3Rpb24xJyk7XG4gICAgICBsZXQgdGhpc092ZXJsYXkgPSAkKCcjb3ZlcmxheTEnKTtcbiAgICAgIGxldCBzZWN0aW9uTGluZXMgPSAkKHRoaXNTZWMpLmZpbmQoJy5zaW5nbGUtYmFja2xpbmUnKTtcbiAgICAgIGxldCBzZWNBcnJvdyA9ICQodGhpc1NlYykuZmluZCgnLmRvd24tYXJyb3ctc3ZnJylcblxuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuNSxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgb25Db21wbGV0ZTpmdW5jdGlvbigpIHtcbiAgICAgICAgICBnc2FwLnRpbWVsaW5lKHtyZXBlYXQ6LTEsIHlveW86dHJ1ZX0pLnRvKHNlY0Fycm93LCB7eTotMywgZHVyYXRpb246MC41LCBlYXNlOlwibm9uZVwifSk7IFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIFxuICAgICAgLy8gQnVpbGQgTWFzdGVyIFRMVExcbiAgICAgIHRsLmZyb21Ubyh0aGlzT3ZlcmxheSwge29wYWNpdHk6MH0sIHtvcGFjaXR5OjAuNjV9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKHNlY3Rpb25MaW5lcywge29wYWNpdHk6MH0se29wYWNpdHk6MC4zfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgICAgICAgIFxuICAgICAgcmV0dXJuIHRsO1xuICAgIH0sXG5cbiAgICBzZWN0aW9uQW5pbTIgOiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9ICQoJyNzZWN0aW9uMicpO1xuICAgICAgbGV0IHRoaXNCYWNrID0gJCgnI2JhY2tncm91bmQxJyk7XG4gICAgICBsZXQgdGhpc092ZXJsYXkgPSAkKCcjb3ZlcmxheTEnKTtcbiAgICAgIGxldCBsaW5lcyA9ICQoJy5zaW5nbGUtYmFja2xpbmUnKTtcbiAgICAgIGxldCBzZWN0aW9uTGluZXMgPSB0aGlzU2VjLmZpbmQoJy5zaW5nbGUtYmFja2xpbmUnKVxuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIC8vIGRlbGF5OjAuNjUsXG4gICAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuNSxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxvbkNvbXBsZXRlOmZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gLy8gZ3NhcC5zZXQoJ2JvZHknLCB7b3ZlcmZsb3c6J2F1dG8nfSk7LFxuICAgICAgICAgICAgLy8gZ3NhcC5zZXQoJ2JvZHknLCB7dG91Y2hBY3Rpb246J2F1dG8nfSk7ICBcbiAgICAgICAgICAvLyB9LCAxMDAwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIHRsLmZyb21Ubyh0aGlzT3ZlcmxheSwge29wYWNpdHk6MH0sIHtvcGFjaXR5OjAuMX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8oc2VjdGlvbkxpbmVzLCB7b3BhY2l0eTowfSx7b3BhY2l0eTowLjJ9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgXG4gICAgICByZXR1cm4gdGw7XG4gICAgfSxcbiAgICBcblxuICAgIHNlY3Rpb25BbmltMyA6ICgpID0+IHtcbiAgICAgIGxldCB0aGlzU2VjID0gJCgnI3NlY3Rpb24zJyk7XG4gICAgICBsZXQgdGhpc0JhY2sgPSAkKCcjYmFja2dyb3VuZDMnKTtcbiAgICAgIGxldCBzZWN0aW9uTGluZXMgPSB0aGlzU2VjLmZpbmQoJy5zaW5nbGUtYmFja2xpbmUnKTtcbiAgICAgIGxldCBjZW50ZXI0TCA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci00TCcpO1xuICAgICAgbGV0IGNlbnRlcjRSID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTRSJyk7XG4gICAgICBsZXQgY2VudGVyM0wgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItM0wnKTtcbiAgICAgIGxldCBjZW50ZXIzUiA9ICQodGhpc1NlYykuZmluZCgnI2NlbnRlci0zUicpO1xuICAgICAgbGV0IGNlbnRlcjJMID0gJCh0aGlzU2VjKS5maW5kKCcjY2VudGVyLTJMJyk7XG4gICAgICBsZXQgY2VudGVyMlIgPSAkKHRoaXNTZWMpLmZpbmQoJyNjZW50ZXItMlInKTtcbiAgICAgIGxldCBib3R0b21TbWFsbCA9ICQodGhpc1NlYykuZmluZCgnI2JvdHRvbS1zbWFsbCcpO1xuICAgICAgXG4gICAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgcGF1c2VkOnRydWUsXG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246MC41LFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICB9LFxuICAgICAgICBvbkNvbXBsZXRlOmZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIGdzYXAuc2V0KCcjYmFja2dyb3VuZDEnLCB7b3BhY2l0eTowfSk7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvLyBvblJldmVyc2VDb21wbGV0ZTpmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gICAgIC8vIGdzYXAuc2V0KCdib2R5Jywge3RvdWNoQWN0aW9uOidhdXRvJ30pOyAgXG4gICAgICAgIC8vICAgICAvLyBnc2FwLnNldCgnYm9keScsIHtvdmVyZmxvdzonYXV0byd9KTssXG4gICAgICAgIC8vICAgLy8gfSwgMTAwMCk7ICAgICAgXG4gICAgICAgIC8vICAgZ3NhcC5zZXQoJyNiYWNrZ3JvdW5kMScsIHtvcGFjaXR5OjF9KTtcbiAgICAgICAgLy8gfSxcbiAgICAgIH0pO1xuICAgICAgdGwuZnJvbVRvKCcudmlkZW9BcmVhJywge29wYWNpdHk6MH0sIHtvcGFjaXR5OjF9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKGNlbnRlcjRMLCB7b3BhY2l0eTowfSx7b3BhY2l0eToxfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21UbyhjZW50ZXI0Uiwge29wYWNpdHk6MH0se29wYWNpdHk6MX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8oY2VudGVyM0wsIHtvcGFjaXR5OjB9LHtvcGFjaXR5OjF9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKGNlbnRlcjNSLCB7b3BhY2l0eTowfSx7b3BhY2l0eToxfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21UbyhjZW50ZXIyTCwge29wYWNpdHk6MH0se29wYWNpdHk6MX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8oY2VudGVyMlIsIHtvcGFjaXR5OjB9LHtvcGFjaXR5OjF9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKGJvdHRvbVNtYWxsLCB7b3BhY2l0eTowfSx7b3BhY2l0eToxfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21Ubyh0aGlzQmFjaywge29wYWNpdHk6MH0se29wYWNpdHk6MX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8oc2VjdGlvbkxpbmVzLCB7b3BhY2l0eTowfSx7b3BhY2l0eToxfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21UbyhzZWN0aW9uTGluZXMsIHtvcGFjaXR5OjB9LHtvcGFjaXR5OjF9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgXG4gICAgICByZXR1cm4gdGw7XG4gICAgfSxcbiAgICBcbiAgICBzZWN0aW9uQW5pbTQgOiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9ICQoJyNzZWN0aW9uNCcpO1xuICAgICAgbGV0IHRoaXNCYWNrID0gJCgnI2JhY2tncm91bmQ0Jyk7XG4gICAgICAvLyBsZXQgc2VjdGlvbkxpbmVzID0gdGhpc1NlYy5maW5kKCcuc2luZ2xlLWJhY2tsaW5lJylcbiAgICAgIGxldCBzb2xvQ2VudGVyMiA9ICQodGhpc1NlYykuZmluZCgnI3NvbG8tY2VudGVyLTInKTtcbiAgICAgIGxldCBzb2xvQ2VudGVyMSA9ICQodGhpc1NlYykuZmluZCgnI3NvbG8tY2VudGVyLTEnKTtcbiAgICAgIGxldCBib3R0b21TbWFsbCA9ICQodGhpc1NlYykuZmluZCgnI2JvdHRvbS1zbWFsbCcpO1xuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuNSxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgb25SZXZlcnNlQ29tcGxldGU6ZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gZ3NhcC5zZXQoJyNiYWNrZ3JvdW5kMScsIHtvcGFjaXR5OjF9KTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgdGwuZnJvbVRvKHNvbG9DZW50ZXIxLCB7b3BhY2l0eTowfSx7b3BhY2l0eTowLjV9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKHNvbG9DZW50ZXIyLCB7b3BhY2l0eTowfSx7b3BhY2l0eTowLjV9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKGJvdHRvbVNtYWxsLCB7b3BhY2l0eTowfSx7b3BhY2l0eTowLjV9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKHRoaXNCYWNrLCB7b3BhY2l0eTowfSx7b3BhY2l0eToxfSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIC8vIHRsLmZyb21UbyhzZWN0aW9uTGluZXMsIHtvcGFjaXR5OjB9LHtvcGFjaXR5OjAuM30sIFwic2Nyb2xsSW5BbGxcIik7XG5cbiAgICAgIHJldHVybiB0bDtcbiAgICB9LFxuXG4gICAgc2VjdGlvbkFuaW01IDogKCkgPT4ge1xuICAgICAgbGV0IHRoaXNTZWMgPSAkKCcjc2VjdGlvbjUnKTtcbiAgICAgIGxldCB0aGlzQmFjayA9ICQoJyNiYWNrZ3JvdW5kNScpO1xuICAgICAgbGV0IHRoaXNPdmVybGF5ID0gJCgnI292ZXJsYXk1Jyk7XG4gICAgICBsZXQgc2VjdGlvbkxpbmVzID0gdGhpc1NlYy5maW5kKCcuc2luZ2xlLWJhY2tsaW5lJylcbiAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjowLjUsXG4gICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGU6ZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBnc2FwLnNldCgnYm9keScsIHt0b3VjaEFjdGlvbjonYXV0byd9KTsgIFxuICAgICAgICAgIC8vIH0sIDEwMDApO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIHRsLmZyb21Ubyh0aGlzT3ZlcmxheSwge29wYWNpdHk6MH0sIHtvcGFjaXR5OjAuOX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8odGhpc0JhY2ssIHtvcGFjaXR5OjB9LHtvcGFjaXR5OjF9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKHNlY3Rpb25MaW5lcywge29wYWNpdHk6MH0se29wYWNpdHk6MC45fSwgXCJzY3JvbGxJbkFsbFwiKTtcblxuICAgICAgcmV0dXJuIHRsO1xuICAgIH0sXG5cbiAgICBzZWN0aW9uQW5pbTYgOiAoKSA9PiB7XG4gICAgICBsZXQgdGhpc1NlYyA9ICQoJyNzZWN0aW9uNicpO1xuICAgICAgbGV0IHRoaXNCYWNrID0gJCgnI2JhY2tncm91bmQ2Jyk7XG4gICAgICBsZXQgdGhpc092ZXJsYXkgPSAkKCcjb3ZlcmxheTYnKTtcbiAgICAgIGxldCBzZWN0aW9uTGluZXMgPSB0aGlzU2VjLmZpbmQoJy5zaW5nbGUtYmFja2xpbmUnKVxuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuNSxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgb25Db21wbGV0ZTpmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8vIGdzYXAuc2V0KCdib2R5Jywge3RvdWNoQWN0aW9uOidhdXRvJ30pOyAgXG4gICAgICAgICAgLy8gfSwgMTAwMCk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgdGwuZnJvbVRvKHRoaXNPdmVybGF5LCB7b3BhY2l0eTowfSwge29wYWNpdHk6MC45fSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21Ubyh0aGlzQmFjaywge29wYWNpdHk6MH0se29wYWNpdHk6MX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8oc2VjdGlvbkxpbmVzLCB7b3BhY2l0eTowfSx7b3BhY2l0eTowLjJ9LCBcInNjcm9sbEluQWxsXCIpO1xuXG4gICAgICByZXR1cm4gdGw7XG4gICAgfSxcblxuICAgIHNlY3Rpb25BbmltNyA6ICgpID0+IHtcbiAgICAgIGxldCB0aGlzU2VjID0gJCgnI3NlY3Rpb243Jyk7XG4gICAgICBsZXQgdGhpc0JhY2sgPSAkKCcjYmFja2dyb3VuZDcnKTtcbiAgICAgIGxldCB0aGlzT3ZlcmxheSA9ICQoJyNvdmVybGF5NycpO1xuICAgICAgbGV0IHNlY3Rpb25MaW5lcyA9IHRoaXNTZWMuZmluZCgnLnNpbmdsZS1iYWNrbGluZScpXG4gICAgICBsZXQgc2VjQXJyb3cgPSAkKCcjc2VjdGlvbjEnKS5maW5kKCcuZG93bi1hcnJvdy1zdmcnKVxuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIGR1cmF0aW9uOjAuNSxcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgdGwuZnJvbVRvKHRoaXNPdmVybGF5LCB7b3BhY2l0eTowfSwge29wYWNpdHk6MC45fSwgXCJzY3JvbGxJbkFsbFwiKTtcbiAgICAgIHRsLmZyb21Ubyh0aGlzQmFjaywge29wYWNpdHk6MH0se29wYWNpdHk6MX0sIFwic2Nyb2xsSW5BbGxcIik7XG4gICAgICB0bC5mcm9tVG8oc2VjdGlvbkxpbmVzLCB7b3BhY2l0eTowfSx7b3BhY2l0eTowLjV9LCBcInNjcm9sbEluQWxsXCIpO1xuICAgICAgdGwuZnJvbVRvKHNlY0Fycm93LCB7b3BhY2l0eToxfSx7b3BhY2l0eTowfSwgXCJzY3JvbGxJbkFsbFwiKTtcblxuICAgICAgcmV0dXJuIHRsO1xuICAgIH0sXG4gICAgXG4gIH07XG4gIFxuICBzZWN0aW9uQW5pbVsnc2VjdGlvbkFuaW0xJ10oKS5wbGF5KCk7XG5cbiAgLy8gRmlyZSBBbiBBbmltYXRpb24gRnJvbSBBYm92ZSBmb3IgRWFjaCBTZWN0aW9uXG4gIGxldCBzZWN0aW9uVHJpZyA9IChteUNvdW50KSA9PiB7XG4gICAgXG4gICAgLy8gUGxheSBTZWN0aW9uIDEgYXV0b21hdGljYWxseVxuICAgIFxuXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgdHJpZ2dlcjonI3NlY3Rpb24nK215Q291bnQsXG4gICAgICBzdGFydDpcInRvcCBib3R0b21cIixcbiAgICAgIGVuZDpcImJvdHRvbSBib3R0b21cIixcbiAgICAgIC8vIHNjcnViOjEsXG4gICAgICBvbkVudGVyOiBmdW5jdGlvbigpe1xuICAgICAgICBpZiAobXlDb3VudCA+IDEpIHtcbiAgICAgICAgICAvLyBhbGVydChteUNvdW50KTtcbiAgICAgICAgICAvLyBnc2FwLnNldCgnYm9keScsIHt0b3VjaEFjdGlvbjonbm9uZSd9KTtcbiAgICAgICAgICAvLyBnc2FwLnNldCgnYm9keScsIHtvdmVyZmxvdzonaGlkZGVuJ30pO1xuICAgICAgICAgIHNlY3Rpb25BbmltWydzZWN0aW9uQW5pbScrbXlDb3VudF0oKS5wbGF5KCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkxlYXZlOiBmdW5jdGlvbigpe1xuICAgICAgICBpZiAobXlDb3VudCA8IDcpIHtcbiAgICAgICAgICAvLyBnc2FwLnNldCgnYm9keScsIHt0b3VjaEFjdGlvbjonbm9uZSd9KTtcbiAgICAgICAgICBzZWN0aW9uQW5pbVsnc2VjdGlvbkFuaW0nK215Q291bnRdKCkucmV2ZXJzZSgwKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uRW50ZXJCYWNrOmZ1bmN0aW9uKCl7XG4gICAgICAgIGlmIChteUNvdW50IDwgNykge1xuICAgICAgICAgIC8vIGdzYXAuc2V0KCdib2R5Jywge3RvdWNoQWN0aW9uOidub25lJ30pO1xuICAgICAgICAgIHNlY3Rpb25BbmltWydzZWN0aW9uQW5pbScrbXlDb3VudF0oKS5wbGF5KCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkxlYXZlQmFjazogZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKG15Q291bnQgPiAxKSB7XG4gICAgICAgICAgLy8gZ3NhcC5zZXQoJ2JvZHknLCB7dG91Y2hBY3Rpb246J25vbmUnfSk7XG4gICAgICAgICAgc2VjdGlvbkFuaW1bJ3NlY3Rpb25BbmltJytteUNvdW50XSgpLnJldmVyc2UoMCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBcbiAgLy8gQW5pbWF0aW9uIHRyaWdnZXJzIGFyZSBjYWxjdWxhdGVkIGluIHRoZSBmdW5jdGlvblxuICBsZXQgaSA9IDE7XG4gICQoJ3NlY3Rpb24nKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgc2VjdGlvblRyaWcoaSk7XG4gICAgaSsrXG4gIH0pXG5cbiAgLy8gc2VjdGlvblRyaWcoMik7XG4gIGxldCB3aW5kb3dIZWlnaHQgPSBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIC8vIFNpbmdsZSBCdXp6IG9uIEJlZXMgU2VjdGlvbnNcbiAgLy8gQnV6eiBBbmltYXRpb24gNVxuICBsZXQgYnV6ekluNCA9ICgpID0+IHtcbiAgICBcbiAgICBsZXQgYnV6ekJsb2NrID0gJCgnI3NlY3Rpb240JykuZmluZCgnLmJ1enpPbkJlZXNCbG9jaycpO1xuICAgIGxldCBidXp6V2lkdGggPSBidXp6QmxvY2sub3V0ZXJXaWR0aCgpO1xuICAgIGxldCB0bCA9IG5ldyBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgZGVmYXVsdHM6IHtkdXJhdGlvbjowLjV9XG4gICAgfSk7XG4gICAgdGwuZnJvbVRvKGJ1enpCbG9jaywge3g6YnV6eldpZHRofSwge3g6MH0pO1xuICAgIHJldHVybiB0bFxuICB9XG5cbiAgbGV0IGJ1enpUcmlnNCA9IChteUNvdW50KSA9PiB7XG4gICAgLy8gdmFyIHN0YXJ0SGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgLSAwLjUpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIC8vIHZhciBlbmRIZWlnaHQgPSAobXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCArIDAuNSkpIC0gbXlTY3JvbGxPZmZzZXQ7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnYnV6ejQgc3RhcnQgaXMgJytzdGFydEhlaWdodCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2J1eno0IGVuZCBpcyAnK2VuZEhlaWdodCk7XG4gICAgXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgdHJpZ2dlcjonI3NlY3Rpb240JyxcbiAgICAgIHN0YXJ0Oid0b3AgdG9wLT0nKyh3aW5kb3dIZWlnaHQgLyAyKSxcbiAgICAgIGVuZDonYm90dG9tIGJvdHRvbScsIFxuICAgICAgLy8gc2NydWI6MSxcbiAgICAgIG9uRW50ZXI6IGZ1bmN0aW9uKCl7YnV6ekluNCgpLnBsYXkoKTt9LFxuICAgICAgb25MZWF2ZTogZnVuY3Rpb24oKXtidXp6SW40KCkucmV2ZXJzZSgwKTt9LFxuICAgICAgb25FbnRlckJhY2s6ZnVuY3Rpb24oKXtidXp6SW40KCkucGxheSgpO30sXG4gICAgICBvbkxlYXZlQmFjazogZnVuY3Rpb24oKXtidXp6SW40KCkucmV2ZXJzZSgwKTt9LFxuICAgIH0pO1xuICB9XG5cbiAgYnV6elRyaWc0KCk7XG5cbiAgLy8gQnV6eiBBbmltYXRpb24gNVxuICBsZXQgYnV6ekluNSA9ICgpID0+IHtcbiAgICBsZXQgYnV6ekJsb2NrID0gJCgnI3NlY3Rpb241JykuZmluZCgnLmJ1enpPbkJlZXNCbG9jaycpO1xuICAgIGxldCBidXp6V2lkdGggPSBidXp6QmxvY2sub3V0ZXJXaWR0aCgpO1xuICAgIGxldCB0bCA9IG5ldyBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgZGVmYXVsdHM6IHtkdXJhdGlvbjowLjV9XG4gICAgfSk7XG4gICAgdGwuZnJvbVRvKGJ1enpCbG9jaywge3g6YnV6eldpZHRofSwge3g6MH0pO1xuICAgIHJldHVybiB0bFxuICB9XG5cbiAgbGV0IGJ1enpUcmlnNSA9IChteUNvdW50KSA9PiB7XG4gICAgLy8gdmFyIHN0YXJ0SGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAwLjUpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIC8vIHZhciBlbmRIZWlnaHQgPSAobXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCArIDEuNSkpIC0gbXlTY3JvbGxPZmZzZXQ7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnYnV6ejUgc3RhcnQgaXMgJytzdGFydEhlaWdodCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2J1eno1IGVuZCBpcyAnK2VuZEhlaWdodCk7XG4gICAgXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgdHJpZ2dlcjonI3NlY3Rpb241JyxcbiAgICAgIHN0YXJ0Oid0b3AgdG9wLT0nKyh3aW5kb3dIZWlnaHQgLyAyKSxcbiAgICAgIGVuZDonYm90dG9tIGJvdHRvbScsIFxuICAgICAgLy8gc2NydWI6MSxcbiAgICAgIG9uRW50ZXI6IGZ1bmN0aW9uKCl7YnV6ekluNSgpLnBsYXkoKTt9LFxuICAgICAgb25MZWF2ZTogZnVuY3Rpb24oKXtidXp6SW41KCkucmV2ZXJzZSgwKTt9LFxuICAgICAgb25FbnRlckJhY2s6ZnVuY3Rpb24oKXtidXp6SW41KCkucGxheSgpO30sXG4gICAgICBvbkxlYXZlQmFjazogZnVuY3Rpb24oKXtidXp6SW41KCkucmV2ZXJzZSgwKTt9LFxuICAgIH0pO1xuICB9XG5cbiAgYnV6elRyaWc1KCk7XG5cbiAgLy8gQnV6eiBBbmltYXRpb24gNlxuICBsZXQgYnV6ekluNiA9ICgpID0+IHtcbiAgICBsZXQgYnV6ekJsb2NrID0gJCgnI3NlY3Rpb242JykuZmluZCgnLmJ1enpPbkJlZXNCbG9jaycpO1xuICAgIGxldCBidXp6V2lkdGggPSBidXp6QmxvY2sub3V0ZXJXaWR0aCgpO1xuICAgIGxldCB0bCA9IG5ldyBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIHBhdXNlZDp0cnVlLFxuICAgICAgZGVmYXVsdHM6IHtkdXJhdGlvbjowLjV9XG4gICAgfSk7XG4gICAgdGwuZnJvbVRvKGJ1enpCbG9jaywge3g6YnV6eldpZHRofSwge3g6MH0pO1xuICAgIHJldHVybiB0bFxuICB9XG5cbiAgbGV0IGJ1enpUcmlnNiA9IChteUNvdW50KSA9PiB7XG4gICAgLy8gdmFyIHN0YXJ0SGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKG15Q291bnQgKyAxLjUpKSAtIG15U2Nyb2xsT2Zmc2V0O1xuICAgIC8vIHZhciBlbmRIZWlnaHQgPSAobXlTY3JvbGxIZWlnaHQgKiAobXlDb3VudCArIDIuNSkpIC0gbXlTY3JvbGxPZmZzZXQ7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnYnV6ejYgc3RhcnQgaXMgJytzdGFydEhlaWdodCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2J1eno2IGVuZCBpcyAnK2VuZEhlaWdodCk7XG4gICAgXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgdHJpZ2dlcjonI3NlY3Rpb242JyxcbiAgICAgIHN0YXJ0Oid0b3AgdG9wLT0nKyh3aW5kb3dIZWlnaHQgLyAxLjUpLFxuICAgICAgZW5kOidib3R0b20gYm90dG9tJywgXG4gICAgICAvLyBzY3J1YjoxLFxuICAgICAgb25FbnRlcjogZnVuY3Rpb24oKXtidXp6SW42KCkucGxheSgpO30sXG4gICAgICBvbkxlYXZlOiBmdW5jdGlvbigpe2J1enpJbjYoKS5yZXZlcnNlKDApO30sXG4gICAgICBvbkVudGVyQmFjazpmdW5jdGlvbigpe2J1enpJbjYoKS5wbGF5KCk7fSxcbiAgICAgIG9uTGVhdmVCYWNrOiBmdW5jdGlvbigpe2J1enpJbjYoKS5yZXZlcnNlKDApO30sXG4gICAgfSk7XG4gIH1cblxuICBidXp6VHJpZzYoKTtcblxuXG4gICQoJy50ZXh0LWNvbnRhaW5lcicpLmVhY2goIGZ1bmN0aW9uKCkge1xuXG4gICAgXG4gICAgbGV0IGxpbmVzSW4gPSAoKSA9PiB7XG4gICAgICBsZXQgdGhlc2VMaW5lcyA9ICQodGhpcykuZmluZCgnLnBMaW5lcycpO1xuICAgICAgbGV0IHRsID0gbmV3IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtkdXJhdGlvbjowLjN9XG4gICAgICB9KTtcbiAgICAgIHRsLmZyb21UbyggdGhlc2VMaW5lcywgXG4gICAgICAgIHtvcGFjaXR5OjAsIHg6LTQwfSxcbiAgICAgICAge29wYWNpdHk6MSwgeDowLCBzdGFnZ2VyOnthbW91bnQ6MC4zfVxuICAgICAgfSk7IFxuXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGVzZUxpbmVzKTtcbiAgICAgIHJldHVybiB0bFxuICAgIH1cbiAgICBcbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICB0cmlnZ2VyOnRoaXMsXG4gICAgICBzdGFydDondG9wIGJvdHRvbS09MTIwcHgnLFxuICAgICAgLy8gc2NydWI6MSxcbiAgICAgIG9uRW50ZXI6IGZ1bmN0aW9uKCl7bGluZXNJbigpLnBsYXkoKTt9LFxuICAgICAgLy8gb25MZWF2ZTogZnVuY3Rpb24oKXtidXp6SW42KCkucmV2ZXJzZSgwKTt9LFxuICAgICAgLy8gb25FbnRlckJhY2s6ZnVuY3Rpb24oKXtidXp6SW42KCkucGxheSgpO30sXG4gICAgICBvbkxlYXZlQmFjazogZnVuY3Rpb24oKXtsaW5lc0luKCkucmV2ZXJzZSgwKTt9LFxuICAgIH0pO1xuICB9KTtcblxuXG4gICQoJ2gyJykuZWFjaCggZnVuY3Rpb24oKSB7XG5cbiAgICBcbiAgICBsZXQgbGluZXNJbiA9ICgpID0+IHtcbiAgICAgIGxldCB0aGVzZUxpbmVzID0gJCh0aGlzKS5maW5kKCcuaDJXb3JkcycpO1xuICAgICAgbGV0IHRsID0gbmV3IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBwYXVzZWQ6dHJ1ZSxcbiAgICAgICAgZGVmYXVsdHM6IHtkdXJhdGlvbjowLjN9XG4gICAgICB9KTtcbiAgICAgIHRsLmZyb21UbyggdGhlc2VMaW5lcywgXG4gICAgICAgIHtvcGFjaXR5OjAsIHg6LTQwfSxcbiAgICAgICAge29wYWNpdHk6MSwgeDowLCBzdGFnZ2VyOnthbW91bnQ6MC4zfVxuICAgICAgfSk7IFxuXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGVzZUxpbmVzKTtcbiAgICAgIHJldHVybiB0bFxuICAgIH1cbiAgICBcbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICB0cmlnZ2VyOnRoaXMsXG4gICAgICBzdGFydDondG9wIGJvdHRvbS09MTIwcHgnLFxuICAgICAgLy8gc2NydWI6MSxcbiAgICAgIG9uRW50ZXI6IGZ1bmN0aW9uKCl7bGluZXNJbigpLnBsYXkoKTt9LFxuICAgICAgLy8gb25MZWF2ZTogZnVuY3Rpb24oKXtidXp6SW42KCkucmV2ZXJzZSgwKTt9LFxuICAgICAgLy8gb25FbnRlckJhY2s6ZnVuY3Rpb24oKXtidXp6SW42KCkucGxheSgpO30sXG4gICAgICBvbkxlYXZlQmFjazogZnVuY3Rpb24oKXtsaW5lc0luKCkucmV2ZXJzZSgwKTt9LFxuICAgIH0pO1xuICB9KTtcblxuXG59XG5cblxuIiwiZXhwb3J0IGxldCBtb2JpbGVTZWN0aW9uc1NldHVwID0gKCkgPT4ge1xuXG4gIC8vICQoJ2JvZHknKS5hZGRDbGFzcygnbW9iaWxlLWRldmljZScpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gTUVBU1VSSU5HIFZBUlNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGxldCB0b3RhbFNlY3Rpb25zID0gJCgnc2VjdGlvbicpLmxlbmd0aDtcbiAgbGV0IHRvdGFsQnV6ek9uID0gJCgnLmJ1enpPbkJlZXNCbG9jaycpLmxlbmd0aDtcbiAgbGV0IHdpbmRvd0hlaWdodCA9IE1hdGgucm91bmQod2luZG93LmlubmVySGVpZ2h0KTtcbiAgbGV0IG15U2Nyb2xsSGVpZ2h0ID0gd2luZG93SGVpZ2h0LzI7XG4gIGxldCBmdWxsSGVpZ2h0ID0gKG15U2Nyb2xsSGVpZ2h0ICogKHRvdGFsU2VjdGlvbnMgKyB0b3RhbEJ1enpPbikpICsgd2luZG93SGVpZ2h0IC0gMTtcbiAgbGV0IGJ1enpCbG9jayA9ICQoJy5idXp6T25CZWVzQmxvY2snKTtcbiAgbGV0IGJ1enpXaWR0aCA9IGJ1enpCbG9jay5vdXRlcldpZHRoKCk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBHTE9CQUxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNldCBPdmVyYWxsIFNjcm9sbCBIZWlnaHRcbiAgLy8gZ3NhcC5zZXQoJy5ob21lLXBhZ2UnLCB7aGVpZ2h0OmZ1bGxIZWlnaHR9KTtcbiAgLy8gZ3NhcC5zZXQoZG9jdW1lbnQuYm9keSwge292ZXJmbG93OiBcImhpZGRlblwifSlcbiAgLy8gSGlkZSBBbGwgTGluZXNcbiAgLy8gZ3NhcC5zZXQoJCgnLmhvbWUtcGFnZScpLmZpbmQoJ3BhdGgnKSwge2RyYXdTVkc6XCI1MCUgNTAlXCJ9KTtcbiAgLy8gZ3NhcC5zZXQoJCgnLmhvbWUtcGFnZScpLmZpbmQoJ3BvbHlsaW5lJyksIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSk7XG4gIC8vIGdzYXAuc2V0KCQoJy5ob21lLXBhZ2UnKS5maW5kKCdsaW5lJyksIHtkcmF3U1ZHOlwiNTAlIDUwJVwifSk7XG4gIC8vIGdzYXAuc2V0KCQoJy5ob21lLXBhZ2UnKS5maW5kKCcjZG93bi1hcnJvdyBsaW5lJyksIHtkcmF3U1ZHOlwiMTAwJSAxMDAlXCJ9KTtcbiAgLy8gU2V0IDFzdCBCYWNrZ3JvdW5kIEltYWdlIGFzIFZpc2libGVcblxuICBsZXQgc2VjMUxpbmVzID0gJCgnI3NlY3Rpb24xJykuZmluZCgnLnNpbmdsZS1iYWNrbGluZScpXG4gIGxldCBzZWMxQXJyb3cgPSAkKCcjc2VjdGlvbjEnKS5maW5kKCcuZG93bi1hcnJvdy1zdmcnKVxuICBnc2FwLnNldChzZWMxTGluZXMsIHtvcGFjaXR5OjAuMn0pO1xuICBnc2FwLnNldChzZWMxQXJyb3csIHtvcGFjaXR5OjF9KTtcbiAgZ3NhcC5zZXQoJyNiYWNrZ3JvdW5kMScsIHtvcGFjaXR5OjEsIHpJbmRleDoxMDB9KTtcbiAgZ3NhcC5zZXQoJyNiYWNrZ3JvdW5kMycsIHt6SW5kZXg6MTA2fSk7XG4gIGdzYXAuc2V0KCcjYmFja2dyb3VuZDQnLCB7ekluZGV4OjEwNX0pO1xuICBnc2FwLnNldCgnI2JhY2tncm91bmQ1Jywge3pJbmRleDoxMDR9KTtcbiAgZ3NhcC5zZXQoJyNiYWNrZ3JvdW5kNicsIHt6SW5kZXg6MTAzfSk7XG4gIGdzYXAuc2V0KCcjYmFja2dyb3VuZDcnLCB7ekluZGV4OjEwMX0pO1xuXG4gIGdzYXAuc2V0KCcjb3ZlcmxheTEnLCB7b3BhY2l0eTowLjY1LCB6SW5kZXg6MTAxfSk7XG4gIC8vIGdzYXAuc2V0KCcjb3ZlcmxheTMnLCB7ekluZGV4OjEwM30pO1xuICAvLyBnc2FwLnNldCgnI292ZXJsYXk0Jywge3pJbmRleDoxMDR9KTtcbiAgZ3NhcC5zZXQoJyNvdmVybGF5NScsIHt6SW5kZXg6MTA1fSk7XG4gIGdzYXAuc2V0KCcjb3ZlcmxheTYnLCB7ekluZGV4OjEwNn0pO1xuICBnc2FwLnNldCgnI292ZXJsYXk3Jywge3pJbmRleDoxMDd9KTtcblxuICAvLyBnc2FwLnNldCgnI3NlY3Rpb24xJywge3pJbmRleDoyMDd9KTtcbiAgLy8gZ3NhcC5zZXQoJyNzZWN0aW9uMicsIHt6SW5kZXg6MjA2fSk7XG4gIC8vIGdzYXAuc2V0KCcjc2VjdGlvbjMnLCB7ekluZGV4OjIwNX0pO1xuICAvLyBnc2FwLnNldCgnI3NlY3Rpb240Jywge3pJbmRleDoyMDR9KTtcbiAgLy8gZ3NhcC5zZXQoJyNzZWN0aW9uNScsIHt6SW5kZXg6MjAzfSk7XG4gIC8vIGdzYXAuc2V0KCcjc2VjdGlvbjYnLCB7ekluZGV4OjIwMn0pO1xuICAvLyBnc2FwLnNldCgnI3NlY3Rpb243Jywge3pJbmRleDoyMDF9KTtcbiAgLy8gZ3NhcC5zZXQoJyNiYWNrZ3JvdW5kMScsIHtvcGFjaXR5OjF9KTtcbiAgLy8gU2V0IEJ1enogT24gQmVlcyB0byBIaWRkZW5cbiAgZ3NhcC5zZXQoYnV6ekJsb2NrLCB7eDpidXp6V2lkdGh9KTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFQ1RJT04gMVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbGV0IHNlYzEgPSAkKCcjc2VjdGlvbjEnKTtcbiAgbGV0IHNlYzFIMiA9IHNlYzEuZmluZCgnaDInKTtcbiAgbGV0IHNlYzFzcGxpdEgyID0gbmV3IFNwbGl0VGV4dChzZWMxSDIsIHsgdHlwZTogXCJsaW5lcyx3b3JkcywgY2hhcnNcIiB9KTtcbiAgbGV0IHNlYzFDaGFyczIgPSBzZWMxc3BsaXRIMi5jaGFycztcbiAgbGV0IHNlYzFXb3JkczIgPSBzZWMxc3BsaXRIMi53b3JkcztcbiAgbGV0IHNlYzFMaW5lczIgPSBzZWMxc3BsaXRIMi5saW5lcztcbiAgJChzZWMxTGluZXMyKS5hZGRDbGFzcygnaDJMaW5lcycpO1xuICAkKHNlYzFDaGFyczIpLmFkZENsYXNzKCdoMkNoYXJzIHNlYzFDaGFyczInKTtcbiAgJChzZWMxV29yZHMyKS5hZGRDbGFzcygnaDJXb3JkcyBzZWMxV29yZHMyJyk7XG5cbiAgbGV0IHNlYzFIMyA9IHNlYzEuZmluZCgnaDMnKTtcbiAgbGV0IHNlYzFzcGxpdEgzID0gbmV3IFNwbGl0VGV4dChzZWMxSDMsIHsgdHlwZTogXCJsaW5lcyx3b3JkcyxjaGFyc1wiIH0pO1xuICBsZXQgc2VjMUNoYXJzMyA9IHNlYzFzcGxpdEgzLmNoYXJzO1xuICBsZXQgc2VjMVdvcmRzMyA9IHNlYzFzcGxpdEgzLndvcmRzO1xuICAkKHNlYzFDaGFyczMpLmFkZENsYXNzKCdoM0NoYXJzIHNlYzFDaGFyczMnKTtcbiAgJChzZWMxV29yZHMzKS5hZGRDbGFzcygnaDNXb3JkcyBzZWMxV29yZHMzJyk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRUNUSU9OIDJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGxldCBzZWMyID0gJCgnI3NlY3Rpb24yJyk7XG4gIGxldCBzZWMySDIgPSBzZWMyLmZpbmQoJ2gyJyk7XG4gIGxldCBzZWMyc3BsaXRIMiA9IG5ldyBTcGxpdFRleHQoc2VjMkgyLCB7IHR5cGU6IFwibGluZXMsd29yZHNcIiB9KTtcbiAgLy8gbGV0IHNlYzJDaGFyczIgPSBzZWMyc3BsaXRIMi5jaGFycztcbiAgbGV0IHNlYzJXb3JkczIgPSBzZWMyc3BsaXRIMi53b3JkcztcbiAgbGV0IHNlYzJMaW5lczIgPSBzZWMyc3BsaXRIMi5saW5lcztcbiAgJChzZWMyTGluZXMyKS5hZGRDbGFzcygnaDJMaW5lcycpO1xuICAvLyAkKHNlYzJDaGFyczIpLmFkZENsYXNzKCdoMkNoYXJzIHNlYzJDaGFyczInKTtcbiAgJChzZWMyV29yZHMyKS5hZGRDbGFzcygnaDJXb3JkcyBzZWMyV29yZHMyJyk7XG4gIFxuICBsZXQgc2VjMlAgPSBzZWMyLmZpbmQoJy50ZXh0LWNvbnRhaW5lciBwJyk7XG4gIGxldCBzZWMyc3BsaXRQID0gbmV3IFNwbGl0VGV4dChzZWMyUCwgeyB0eXBlOiBcImxpbmVzXCIgfSk7XG4gIC8vIGxldCBzZWMyV29yZHNQID0gc2VjMnNwbGl0UC53b3JkcztcbiAgbGV0IHNlYzJMaW5lc1AgPSBzZWMyc3BsaXRQLmxpbmVzO1xuICAvLyAkKHNlYzJXb3Jkc1ApLmFkZENsYXNzKCdoM1dvcmRzIHNlYzJXb3Jkc1AnKTtcbiAgJChzZWMyTGluZXNQKS5hZGRDbGFzcygncExpbmVzIHNlYzJMaW5lc1AnKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFQ1RJT04gNFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbGV0IHNlYzQgPSAkKCcjc2VjdGlvbjQnKTtcbiAgbGV0IHNlYzRIMiA9IHNlYzQuZmluZCgnaDInKTtcbiAgbGV0IHNlYzRzcGxpdEgyID0gbmV3IFNwbGl0VGV4dChzZWM0SDIsIHsgdHlwZTogXCJsaW5lcyx3b3Jkc1wiIH0pO1xuICAvLyBsZXQgc2VjNENoYXJzMiA9IHNlYzRzcGxpdEgyLmNoYXJzO1xuICBsZXQgc2VjNFdvcmRzMiA9IHNlYzRzcGxpdEgyLndvcmRzO1xuICBsZXQgc2VjNExpbmVzMiA9IHNlYzRzcGxpdEgyLmxpbmVzO1xuICAkKHNlYzRMaW5lczIpLmFkZENsYXNzKCdoMkxpbmVzJyk7XG4gIC8vICQoc2VjNENoYXJzMikuYWRkQ2xhc3MoJ2gyQ2hhcnMgc2VjNENoYXJzMicpO1xuICAkKHNlYzRXb3JkczIpLmFkZENsYXNzKCdoMldvcmRzIHNlYzRXb3JkczInKTtcbiAgXG4gIGxldCBzZWM0UCA9IHNlYzQuZmluZCgnLnRleHQtY29udGFpbmVyIHAnKTtcbiAgbGV0IHNlYzRzcGxpdFAgPSBuZXcgU3BsaXRUZXh0KHNlYzRQLCB7IHR5cGU6IFwibGluZXNcIiB9KTtcbiAgLy8gbGV0IHNlYzRXb3Jkc1AgPSBzZWM0c3BsaXRQLndvcmRzO1xuICBsZXQgc2VjNExpbmVzUCA9IHNlYzRzcGxpdFAubGluZXM7XG4gIC8vICQoc2VjNFdvcmRzUCkuYWRkQ2xhc3MoJ2gzV29yZHMgc2VjNFdvcmRzUCcpO1xuICAkKHNlYzRMaW5lc1ApLmFkZENsYXNzKCdwTGluZXMgc2VjNExpbmVzUCcpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VDVElPTiA1XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgc2VjNSA9ICQoJyNzZWN0aW9uNScpO1xuICBsZXQgc2VjNUgyID0gc2VjNS5maW5kKCdoMicpO1xuICBsZXQgc2VjNXNwbGl0SDIgPSBuZXcgU3BsaXRUZXh0KHNlYzVIMiwgeyB0eXBlOiBcImxpbmVzLHdvcmRzXCIgfSk7XG4gIC8vIGxldCBzZWM1Q2hhcnMyID0gc2VjNXNwbGl0SDIuY2hhcnM7XG4gIGxldCBzZWM1V29yZHMyID0gc2VjNXNwbGl0SDIud29yZHM7XG4gIGxldCBzZWM1TGluZXMyID0gc2VjNXNwbGl0SDIubGluZXM7XG4gICQoc2VjNUxpbmVzMikuYWRkQ2xhc3MoJ2gyTGluZXMnKTtcbiAgLy8gJChzZWM1Q2hhcnMyKS5hZGRDbGFzcygnaDJDaGFycyBzZWM1Q2hhcnMyJyk7XG4gICQoc2VjNVdvcmRzMikuYWRkQ2xhc3MoJ2gyV29yZHMgc2VjNVdvcmRzMicpO1xuICBcbiAgbGV0IHNlYzVQID0gc2VjNS5maW5kKCcudGV4dC1jb250YWluZXIgcCcpO1xuICBsZXQgc2VjNXNwbGl0UCA9IG5ldyBTcGxpdFRleHQoc2VjNVAsIHsgdHlwZTogXCJsaW5lc1wiIH0pO1xuICAvLyBsZXQgc2VjNVdvcmRzUCA9IHNlYzVzcGxpdFAud29yZHM7XG4gIGxldCBzZWM1TGluZXNQID0gc2VjNXNwbGl0UC5saW5lcztcbiAgLy8gJChzZWM1V29yZHNQKS5hZGRDbGFzcygnaDNXb3JkcyBzZWM1V29yZHNQJyk7XG4gICQoc2VjNUxpbmVzUCkuYWRkQ2xhc3MoJ3BMaW5lcyBzZWM1TGluZXNQJyk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRUNUSU9OIDZcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGxldCBzZWM2ID0gJCgnI3NlY3Rpb242Jyk7XG4gIGxldCBzZWM2SDIgPSBzZWM2LmZpbmQoJ2gyJyk7XG4gIGxldCBzZWM2c3BsaXRIMiA9IG5ldyBTcGxpdFRleHQoc2VjNkgyLCB7IHR5cGU6IFwibGluZXMsd29yZHNcIiB9KTtcbiAgLy8gbGV0IHNlYzZDaGFyczIgPSBzZWM2c3BsaXRIMi5jaGFycztcbiAgbGV0IHNlYzZXb3JkczIgPSBzZWM2c3BsaXRIMi53b3JkcztcbiAgbGV0IHNlYzZMaW5lczIgPSBzZWM2c3BsaXRIMi5saW5lcztcbiAgJChzZWM2TGluZXMyKS5hZGRDbGFzcygnaDJMaW5lcycpO1xuICAvLyAkKHNlYzZDaGFyczIpLmFkZENsYXNzKCdoMkNoYXJzIHNlYzZDaGFyczInKTtcbiAgJChzZWM2V29yZHMyKS5hZGRDbGFzcygnaDJXb3JkcyBzZWM2V29yZHMyJyk7XG4gIFxuICBsZXQgc2VjNlAgPSBzZWM2LmZpbmQoJy50ZXh0LWNvbnRhaW5lciBwJyk7XG4gIGxldCBzZWM2c3BsaXRQID0gbmV3IFNwbGl0VGV4dChzZWM2UCwgeyB0eXBlOiBcImxpbmVzXCIgfSk7XG4gIC8vIGxldCBzZWM2V29yZHNQID0gc2VjNnNwbGl0UC53b3JkcztcbiAgbGV0IHNlYzZMaW5lc1AgPSBzZWM2c3BsaXRQLmxpbmVzO1xuICAvLyAkKHNlYzZXb3Jkc1ApLmFkZENsYXNzKCdoM1dvcmRzIHNlYzZXb3Jkc1AnKTtcbiAgJChzZWM2TGluZXNQKS5hZGRDbGFzcygncExpbmVzIHNlYzZMaW5lc1AnKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFQ1RJT04gN1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbGV0IHNlYzcgPSAkKCcjc2VjdGlvbjcnKTtcbiAgbGV0IHNlYzdIMiA9IHNlYzcuZmluZCgnaDInKTtcbiAgbGV0IHNlYzdzcGxpdEgyID0gbmV3IFNwbGl0VGV4dChzZWM3SDIsIHsgdHlwZTogXCJsaW5lcyx3b3Jkc1wiIH0pO1xuICAvLyBsZXQgc2VjN0NoYXJzMiA9IHNlYzdzcGxpdEgyLmNoYXJzO1xuICBsZXQgc2VjN1dvcmRzMiA9IHNlYzdzcGxpdEgyLndvcmRzO1xuICBsZXQgc2VjN0xpbmVzMiA9IHNlYzdzcGxpdEgyLmxpbmVzO1xuICAkKHNlYzdMaW5lczIpLmFkZENsYXNzKCdoMkxpbmVzJyk7XG4gIC8vICQoc2VjN0NoYXJzMikuYWRkQ2xhc3MoJ2gyQ2hhcnMnKTtcbiAgJChzZWM3V29yZHMyKS5hZGRDbGFzcygnaDJXb3JkcycpO1xuICBcbiAgbGV0IHNlYzdQID0gc2VjNy5maW5kKCcudGV4dC1jb250YWluZXIgcCcpO1xuICBsZXQgc2VjN3NwbGl0UCA9IG5ldyBTcGxpdFRleHQoc2VjN1AsIHsgdHlwZTogXCJsaW5lc1wiIH0pO1xuICAvLyBsZXQgc2VjN1dvcmRzUCA9IHNlYzdzcGxpdFAud29yZHM7XG4gIGxldCBzZWM3TGluZXNQID0gc2VjN3NwbGl0UC5saW5lcztcbiAgLy8gJChzZWM3V29yZHNQKS5hZGRDbGFzcygnaDNXb3JkcyBzZWM3V29yZHNQJyk7XG4gICQoc2VjN0xpbmVzUCkuYWRkQ2xhc3MoJ3BMaW5lcyBzZWM3TGluZXNQJyk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRUNUSU9OIDhcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGxldCBzZWM4ID0gJCgnI3NlY3Rpb244Jyk7XG4gIGxldCBzZWM4SDIgPSBzZWM4LmZpbmQoJ2gyJyk7XG4gIGxldCBzZWM4c3BsaXRIMiA9IG5ldyBTcGxpdFRleHQoc2VjOEgyLCB7IHR5cGU6IFwibGluZXMsd29yZHNcIiB9KTtcbiAgLy8gbGV0IHNlYzhDaGFyczIgPSBzZWM4c3BsaXRIMi5jaGFycztcbiAgbGV0IHNlYzhXb3JkczIgPSBzZWM4c3BsaXRIMi53b3JkcztcbiAgbGV0IHNlYzhMaW5lczIgPSBzZWM4c3BsaXRIMi5saW5lcztcbiAgJChzZWM4TGluZXMyKS5hZGRDbGFzcygnaDJMaW5lcycpO1xuICAvLyAkKHNlYzhDaGFyczIpLmFkZENsYXNzKCdoMkNoYXJzJyk7XG4gICQoc2VjOFdvcmRzMikuYWRkQ2xhc3MoJ2gyV29yZHMnKTtcbiAgXG4gIGxldCBzZWM4UCA9IHNlYzguZmluZCgnLnRleHQtY29udGFpbmVyIHAnKTtcbiAgbGV0IHNlYzhzcGxpdFAgPSBuZXcgU3BsaXRUZXh0KHNlYzhQLCB7IHR5cGU6IFwibGluZXNcIiB9KTtcbiAgLy8gbGV0IHNlYzhXb3Jkc1AgPSBzZWM4c3BsaXRQLndvcmRzO1xuICBsZXQgc2VjOExpbmVzUCA9IHNlYzhzcGxpdFAubGluZXM7XG4gIC8vICQoc2VjOFdvcmRzUCkuYWRkQ2xhc3MoJ2gzV29yZHMgc2VjOFdvcmRzUCcpO1xuICAkKHNlYzhMaW5lc1ApLmFkZENsYXNzKCdwTGluZXMgc2VjOExpbmVzUCcpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VUVVAgRUxFTUVOVFNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIGdzYXAuc2V0KCcuaDJDaGFycycsIHt5OicxLjFlbSd9KTtcbn0iLCJpbXBvcnQgeyBcbiAgYW5pbWF0ZVNlY3Rpb24sXG59IGZyb20gJy4vaW5kZXguanMnO1xuXG5leHBvcnQgbGV0IHByZUxvYWRlciA9ICgpID0+IHtcbiAgbGV0IHRsID0gbmV3IGdzYXAudGltZWxpbmUoe1xuICAgIGRlZmF1bHRzOntcbiAgICAgIGR1cmF0aW9uOjAuNSxcbiAgICB9LFxuICAgIFxuICAgIC8vIGVhc2U6J3Bvd2VyNC5vdXQnLFxuICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBhbGVydCgnb3V0Jyk7XG4gICAgICAkKCcjcHJlbG9hZGVyJykucmVtb3ZlKCk7XG4gICAgfVxuICB9KVxuICB0bC50bygnLnByZWxvYWRlclNWRycsIHtzY2FsZTowfSxcImxvYWRPdXRcIik7XG5cdHRsLnRvKCcjcHJlbG9hZGVyJywge29wYWNpdHk6MCxkdXJhdGlvbjowLjN9LFwibG9hZE91dDJcIik7XG59XG5cbmV4cG9ydCBsZXQgdmlkTGlua3M9ICgpID0+IHtcblx0bGV0IHRoaXNTcmMgPSAkKCcuaWZyYW1lSG9sZGVyJykuYXR0cignZGF0YS1kZXNrdG9wLXZpZCcpO1xuICAvLyBjb25zb2xlLmxvZyh0aGlzU3JjKTtcbiAgJCgnLmlmcmFtZUVtcHR5JykuYXR0cignc3JjJywgJ2h0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8nK3RoaXNTcmMrJz9oPTI1ZjMzNGU5NTYmdGl0bGU9MCZieWxpbmU9MCZwb3J0cmFpdD0wJykgXG59XG5cbmV4cG9ydCBsZXQgbW9iaWxlVmlkTGlua3M9ICgpID0+IHtcblx0bGV0IHRoaXNTcmMgPSAkKCcuaWZyYW1lSG9sZGVyJykuYXR0cignZGF0YS1tb2JpbGUtdmlkJyk7XG4gIC8vIGNvbnNvbGUubG9nKHRoaXNTcmMpO1xuICAkKCcuaWZyYW1lRW1wdHknKS5hdHRyKCdzcmMnLCAnaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLycrdGhpc1NyYysnP2g9MjVmMzM0ZTk1NiZ0aXRsZT0wJmJ5bGluZT0wJnBvcnRyYWl0PTAnKSBcbn1cblxuZXhwb3J0IGxldCBzbW9vdGhTY3JvbGxpbmcgPSAodGhlTGluaykgPT4ge1xuICBcbiAgbGV0IHRhcmdldCA9ICQodGhlTGluaykuYXR0cignaHJlZicpO1xuICBsZXQgaGVhZGVySGVpZ2h0ID0gJCgnLmhlYWRlcicpLm91dGVySGVpZ2h0KCk7IFxuICBnc2FwLnRvKHdpbmRvdywge2R1cmF0aW9uOi41LCBlYXNlOiAnY2lyYy5vdXQnLCBcbiAgICBzY3JvbGxUbzp7XG4gICAgICB5OnRhcmdldCwgXG4gICAgICAvLyBBY3RpdmF0ZSBpZiBIZWFkZXIgSXMgRml4ZWRcbiAgICAgIC8vIG9mZnNldFk6aGVhZGVySGVpZ2h0XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgbGV0IG1vYmlsZU5hdlNldHVwID0gKCkgPT4ge1xuICBnc2FwLnNldCgnbmF2IGEnLCB7b3BhY2l0eTowLCB4Oic1MCUnfSk7XG59XG4iLCJleHBvcnQgbGV0IHNlY3Rpb25zU2V0dXAgPSAoKSA9PiB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBNRUFTVVJJTkcgVkFSU1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbGV0IHRvdGFsU2VjdGlvbnMgPSAkKCdzZWN0aW9uJykubGVuZ3RoO1xuICBsZXQgdG90YWxCdXp6T24gPSAkKCcuYnV6ek9uQmVlc0Jsb2NrJykubGVuZ3RoO1xuICBsZXQgd2luZG93SGVpZ2h0ID0gTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICBpZiAoc2NyZWVuLndpZHRoIDw9IDEwMjQpe1xuICAgIHZhciBteVNjcm9sbEhlaWdodCA9IHdpbmRvd0hlaWdodCoxLjU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG15U2Nyb2xsSGVpZ2h0ID0gd2luZG93SGVpZ2h0LzI7XG4gIH1cbiAgbGV0IGZ1bGxIZWlnaHQgPSAobXlTY3JvbGxIZWlnaHQgKiAodG90YWxTZWN0aW9ucyArIHRvdGFsQnV6ek9uKSkgKyB3aW5kb3dIZWlnaHQgLSAxO1xuICBsZXQgYnV6ekJsb2NrID0gJCgnLmJ1enpPbkJlZXNCbG9jaycpO1xuICBsZXQgYnV6eldpZHRoID0gYnV6ekJsb2NrLm91dGVyV2lkdGgoKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEdMT0JBTFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU2V0IE92ZXJhbGwgU2Nyb2xsIEhlaWdodFxuICBnc2FwLnNldCgnLmhvbWUtcGFnZScsIHtoZWlnaHQ6ZnVsbEhlaWdodH0pO1xuICBnc2FwLnNldChkb2N1bWVudC5ib2R5LCB7b3ZlcmZsb3c6IFwiaGlkZGVuXCJ9KVxuICAvLyBIaWRlIEFsbCBMaW5lc1xuICBnc2FwLnNldCgkKCcuaG9tZS1wYWdlJykuZmluZCgncGF0aCcpLCB7ZHJhd1NWRzpcIjUwJSA1MCVcIn0pO1xuICBnc2FwLnNldCgkKCcuaG9tZS1wYWdlJykuZmluZCgncG9seWxpbmUnKSwge2RyYXdTVkc6XCI1MCUgNTAlXCJ9KTtcbiAgZ3NhcC5zZXQoJCgnLmhvbWUtcGFnZScpLmZpbmQoJ2xpbmUnKSwge2RyYXdTVkc6XCI1MCUgNTAlXCJ9KTtcbiAgZ3NhcC5zZXQoJCgnLmhvbWUtcGFnZScpLmZpbmQoJyNkb3duLWFycm93IGxpbmUnKSwge2RyYXdTVkc6XCIxMDAlIDEwMCVcIn0pO1xuICAvLyBTZXQgMXN0IEJhY2tncm91bmQgSW1hZ2UgYXMgVmlzaWJsZVxuICBnc2FwLnNldCgnI2JhY2tncm91bmQxJywge29wYWNpdHk6MSwgekluZGV4OjEwMX0pO1xuICAvLyBTZXQgQnV6eiBPbiBCZWVzIHRvIEhpZGRlblxuICBnc2FwLnNldChidXp6QmxvY2ssIHt4OmJ1enpXaWR0aH0pO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VDVElPTiAxXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgc2VjMSA9ICQoJyNzZWN0aW9uMScpO1xuICBsZXQgc2VjMUgyID0gc2VjMS5maW5kKCdoMicpO1xuICBsZXQgc2VjMXNwbGl0SDIgPSBuZXcgU3BsaXRUZXh0KHNlYzFIMiwgeyB0eXBlOiBcImxpbmVzLHdvcmRzLGNoYXJzXCIgfSk7XG4gIGxldCBzZWMxQ2hhcnMyID0gc2VjMXNwbGl0SDIuY2hhcnM7XG4gIGxldCBzZWMxV29yZHMyID0gc2VjMXNwbGl0SDIud29yZHM7XG4gIGxldCBzZWMxTGluZXMyID0gc2VjMXNwbGl0SDIubGluZXM7XG4gICQoc2VjMUxpbmVzMikuYWRkQ2xhc3MoJ2gyTGluZXMnKTtcbiAgJChzZWMxQ2hhcnMyKS5hZGRDbGFzcygnaDJDaGFycyBzZWMxQ2hhcnMyJyk7XG4gICQoc2VjMVdvcmRzMikuYWRkQ2xhc3MoJ2gyV29yZHMgc2VjMVdvcmRzMicpO1xuXG4gIGxldCBzZWMxSDMgPSBzZWMxLmZpbmQoJ2gzJyk7XG4gIGxldCBzZWMxc3BsaXRIMyA9IG5ldyBTcGxpdFRleHQoc2VjMUgzLCB7IHR5cGU6IFwibGluZXMsd29yZHMsY2hhcnNcIiB9KTtcbiAgbGV0IHNlYzFDaGFyczMgPSBzZWMxc3BsaXRIMy5jaGFycztcbiAgbGV0IHNlYzFXb3JkczMgPSBzZWMxc3BsaXRIMy53b3JkcztcbiAgJChzZWMxQ2hhcnMzKS5hZGRDbGFzcygnaDNDaGFycyBzZWMxQ2hhcnMzJyk7XG4gICQoc2VjMVdvcmRzMykuYWRkQ2xhc3MoJ2gzV29yZHMgc2VjMVdvcmRzMycpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VDVElPTiAyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgc2VjMiA9ICQoJyNzZWN0aW9uMicpO1xuICBsZXQgc2VjMkgyID0gc2VjMi5maW5kKCdoMicpO1xuICBsZXQgc2VjMnNwbGl0SDIgPSBuZXcgU3BsaXRUZXh0KHNlYzJIMiwgeyB0eXBlOiBcImxpbmVzLHdvcmRzLGNoYXJzXCIgfSk7XG4gIGxldCBzZWMyQ2hhcnMyID0gc2VjMnNwbGl0SDIuY2hhcnM7XG4gIGxldCBzZWMyV29yZHMyID0gc2VjMnNwbGl0SDIud29yZHM7XG4gIGxldCBzZWMyTGluZXMyID0gc2VjMnNwbGl0SDIubGluZXM7XG4gICQoc2VjMkxpbmVzMikuYWRkQ2xhc3MoJ2gyTGluZXMnKTtcbiAgJChzZWMyQ2hhcnMyKS5hZGRDbGFzcygnaDJDaGFycyBzZWMyQ2hhcnMyJyk7XG4gICQoc2VjMldvcmRzMikuYWRkQ2xhc3MoJ2gyV29yZHMgc2VjMldvcmRzMicpO1xuICBcbiAgbGV0IHNlYzJQID0gc2VjMi5maW5kKCcudGV4dC1jb250YWluZXIgcCcpO1xuICBsZXQgc2VjMnNwbGl0UCA9IG5ldyBTcGxpdFRleHQoc2VjMlAsIHsgdHlwZTogXCJsaW5lc1wiIH0pO1xuICAvLyBsZXQgc2VjMldvcmRzUCA9IHNlYzJzcGxpdFAud29yZHM7XG4gIGxldCBzZWMyTGluZXNQID0gc2VjMnNwbGl0UC5saW5lcztcbiAgLy8gJChzZWMyV29yZHNQKS5hZGRDbGFzcygnaDNXb3JkcyBzZWMyV29yZHNQJyk7XG4gICQoc2VjMkxpbmVzUCkuYWRkQ2xhc3MoJ3BMaW5lcyBzZWMyTGluZXNQJyk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRUNUSU9OIDRcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGxldCBzZWM0ID0gJCgnI3NlY3Rpb240Jyk7XG4gIGxldCBzZWM0SDIgPSBzZWM0LmZpbmQoJ2gyJyk7XG4gIGxldCBzZWM0c3BsaXRIMiA9IG5ldyBTcGxpdFRleHQoc2VjNEgyLCB7IHR5cGU6IFwibGluZXMsd29yZHMsY2hhcnNcIiB9KTtcbiAgbGV0IHNlYzRDaGFyczIgPSBzZWM0c3BsaXRIMi5jaGFycztcbiAgbGV0IHNlYzRXb3JkczIgPSBzZWM0c3BsaXRIMi53b3JkcztcbiAgbGV0IHNlYzRMaW5lczIgPSBzZWM0c3BsaXRIMi5saW5lcztcbiAgJChzZWM0TGluZXMyKS5hZGRDbGFzcygnaDJMaW5lcycpO1xuICAkKHNlYzRDaGFyczIpLmFkZENsYXNzKCdoMkNoYXJzIHNlYzRDaGFyczInKTtcbiAgJChzZWM0V29yZHMyKS5hZGRDbGFzcygnaDJXb3JkcyBzZWM0V29yZHMyJyk7XG4gIFxuICBsZXQgc2VjNFAgPSBzZWM0LmZpbmQoJy50ZXh0LWNvbnRhaW5lciBwJyk7XG4gIGxldCBzZWM0c3BsaXRQID0gbmV3IFNwbGl0VGV4dChzZWM0UCwgeyB0eXBlOiBcImxpbmVzXCIgfSk7XG4gIC8vIGxldCBzZWM0V29yZHNQID0gc2VjNHNwbGl0UC53b3JkcztcbiAgbGV0IHNlYzRMaW5lc1AgPSBzZWM0c3BsaXRQLmxpbmVzO1xuICAvLyAkKHNlYzRXb3Jkc1ApLmFkZENsYXNzKCdoM1dvcmRzIHNlYzRXb3Jkc1AnKTtcbiAgJChzZWM0TGluZXNQKS5hZGRDbGFzcygncExpbmVzIHNlYzRMaW5lc1AnKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFQ1RJT04gNVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbGV0IHNlYzUgPSAkKCcjc2VjdGlvbjUnKTtcbiAgbGV0IHNlYzVIMiA9IHNlYzUuZmluZCgnaDInKTtcbiAgbGV0IHNlYzVzcGxpdEgyID0gbmV3IFNwbGl0VGV4dChzZWM1SDIsIHsgdHlwZTogXCJsaW5lcyx3b3JkcyxjaGFyc1wiIH0pO1xuICBsZXQgc2VjNUNoYXJzMiA9IHNlYzVzcGxpdEgyLmNoYXJzO1xuICBsZXQgc2VjNVdvcmRzMiA9IHNlYzVzcGxpdEgyLndvcmRzO1xuICBsZXQgc2VjNUxpbmVzMiA9IHNlYzVzcGxpdEgyLmxpbmVzO1xuICAkKHNlYzVMaW5lczIpLmFkZENsYXNzKCdoMkxpbmVzJyk7XG4gICQoc2VjNUNoYXJzMikuYWRkQ2xhc3MoJ2gyQ2hhcnMgc2VjNUNoYXJzMicpO1xuICAkKHNlYzVXb3JkczIpLmFkZENsYXNzKCdoMldvcmRzIHNlYzVXb3JkczInKTtcbiAgXG4gIGxldCBzZWM1UCA9IHNlYzUuZmluZCgnLnRleHQtY29udGFpbmVyIHAnKTtcbiAgbGV0IHNlYzVzcGxpdFAgPSBuZXcgU3BsaXRUZXh0KHNlYzVQLCB7IHR5cGU6IFwibGluZXNcIiB9KTtcbiAgLy8gbGV0IHNlYzVXb3Jkc1AgPSBzZWM1c3BsaXRQLndvcmRzO1xuICBsZXQgc2VjNUxpbmVzUCA9IHNlYzVzcGxpdFAubGluZXM7XG4gIC8vICQoc2VjNVdvcmRzUCkuYWRkQ2xhc3MoJ2gzV29yZHMgc2VjNVdvcmRzUCcpO1xuICAkKHNlYzVMaW5lc1ApLmFkZENsYXNzKCdwTGluZXMgc2VjNUxpbmVzUCcpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VDVElPTiA2XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgc2VjNiA9ICQoJyNzZWN0aW9uNicpO1xuICBsZXQgc2VjNkgyID0gc2VjNi5maW5kKCdoMicpO1xuICBsZXQgc2VjNnNwbGl0SDIgPSBuZXcgU3BsaXRUZXh0KHNlYzZIMiwgeyB0eXBlOiBcImxpbmVzLHdvcmRzLGNoYXJzXCIgfSk7XG4gIGxldCBzZWM2Q2hhcnMyID0gc2VjNnNwbGl0SDIuY2hhcnM7XG4gIGxldCBzZWM2V29yZHMyID0gc2VjNnNwbGl0SDIud29yZHM7XG4gIGxldCBzZWM2TGluZXMyID0gc2VjNnNwbGl0SDIubGluZXM7XG4gICQoc2VjNkxpbmVzMikuYWRkQ2xhc3MoJ2gyTGluZXMnKTtcbiAgJChzZWM2Q2hhcnMyKS5hZGRDbGFzcygnaDJDaGFycyBzZWM2Q2hhcnMyJyk7XG4gICQoc2VjNldvcmRzMikuYWRkQ2xhc3MoJ2gyV29yZHMgc2VjNldvcmRzMicpO1xuICBcbiAgbGV0IHNlYzZQID0gc2VjNi5maW5kKCcudGV4dC1jb250YWluZXIgcCcpO1xuICBsZXQgc2VjNnNwbGl0UCA9IG5ldyBTcGxpdFRleHQoc2VjNlAsIHsgdHlwZTogXCJsaW5lc1wiIH0pO1xuICAvLyBsZXQgc2VjNldvcmRzUCA9IHNlYzZzcGxpdFAud29yZHM7XG4gIGxldCBzZWM2TGluZXNQID0gc2VjNnNwbGl0UC5saW5lcztcbiAgLy8gJChzZWM2V29yZHNQKS5hZGRDbGFzcygnaDNXb3JkcyBzZWM2V29yZHNQJyk7XG4gICQoc2VjNkxpbmVzUCkuYWRkQ2xhc3MoJ3BMaW5lcyBzZWM2TGluZXNQJyk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRUNUSU9OIDdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGxldCBzZWM3ID0gJCgnI3NlY3Rpb243Jyk7XG4gIGxldCBzZWM3SDIgPSBzZWM3LmZpbmQoJ2gyJyk7XG4gIGxldCBzZWM3c3BsaXRIMiA9IG5ldyBTcGxpdFRleHQoc2VjN0gyLCB7IHR5cGU6IFwibGluZXMsd29yZHMsY2hhcnNcIiB9KTtcbiAgbGV0IHNlYzdDaGFyczIgPSBzZWM3c3BsaXRIMi5jaGFycztcbiAgbGV0IHNlYzdXb3JkczIgPSBzZWM3c3BsaXRIMi53b3JkcztcbiAgbGV0IHNlYzdMaW5lczIgPSBzZWM3c3BsaXRIMi5saW5lcztcbiAgJChzZWM3TGluZXMyKS5hZGRDbGFzcygnaDJMaW5lcycpO1xuICAkKHNlYzdDaGFyczIpLmFkZENsYXNzKCdoMkNoYXJzJyk7XG4gICQoc2VjN1dvcmRzMikuYWRkQ2xhc3MoJ2gyV29yZHMnKTtcbiAgXG4gIGxldCBzZWM3UCA9IHNlYzcuZmluZCgnLnRleHQtY29udGFpbmVyIHAnKTtcbiAgbGV0IHNlYzdzcGxpdFAgPSBuZXcgU3BsaXRUZXh0KHNlYzdQLCB7IHR5cGU6IFwibGluZXNcIiB9KTtcbiAgLy8gbGV0IHNlYzdXb3Jkc1AgPSBzZWM3c3BsaXRQLndvcmRzO1xuICBsZXQgc2VjN0xpbmVzUCA9IHNlYzdzcGxpdFAubGluZXM7XG4gIC8vICQoc2VjN1dvcmRzUCkuYWRkQ2xhc3MoJ2gzV29yZHMgc2VjN1dvcmRzUCcpO1xuICAkKHNlYzdMaW5lc1ApLmFkZENsYXNzKCdwTGluZXMgc2VjN0xpbmVzUCcpO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VDVElPTiA4XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBsZXQgc2VjOCA9ICQoJyNzZWN0aW9uOCcpO1xuICBsZXQgc2VjOEgyID0gc2VjOC5maW5kKCdoMicpO1xuICBsZXQgc2VjOHNwbGl0SDIgPSBuZXcgU3BsaXRUZXh0KHNlYzhIMiwgeyB0eXBlOiBcImxpbmVzLHdvcmRzLGNoYXJzXCIgfSk7XG4gIGxldCBzZWM4Q2hhcnMyID0gc2VjOHNwbGl0SDIuY2hhcnM7XG4gIGxldCBzZWM4V29yZHMyID0gc2VjOHNwbGl0SDIud29yZHM7XG4gIGxldCBzZWM4TGluZXMyID0gc2VjOHNwbGl0SDIubGluZXM7XG4gICQoc2VjOExpbmVzMikuYWRkQ2xhc3MoJ2gyTGluZXMnKTtcbiAgJChzZWM4Q2hhcnMyKS5hZGRDbGFzcygnaDJDaGFycycpO1xuICAkKHNlYzhXb3JkczIpLmFkZENsYXNzKCdoMldvcmRzJyk7XG4gIFxuICBsZXQgc2VjOFAgPSBzZWM4LmZpbmQoJy50ZXh0LWNvbnRhaW5lciBwJyk7XG4gIGxldCBzZWM4c3BsaXRQID0gbmV3IFNwbGl0VGV4dChzZWM4UCwgeyB0eXBlOiBcImxpbmVzXCIgfSk7XG4gIC8vIGxldCBzZWM4V29yZHNQID0gc2VjOHNwbGl0UC53b3JkcztcbiAgbGV0IHNlYzhMaW5lc1AgPSBzZWM4c3BsaXRQLmxpbmVzO1xuICAvLyAkKHNlYzhXb3Jkc1ApLmFkZENsYXNzKCdoM1dvcmRzIHNlYzhXb3Jkc1AnKTtcbiAgJChzZWM4TGluZXNQKS5hZGRDbGFzcygncExpbmVzIHNlYzhMaW5lc1AnKTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFNFVFVQIEVMRU1FTlRTXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBnc2FwLnNldCgnLmgyQ2hhcnMnLCB7eTonMS4xZW0nfSk7XG59IiwiaW1wb3J0IHsgXG4gIHByZUxvYWRlcixcbiAgdmlkTGlua3MsXG4gIG1vYmlsZVZpZExpbmtzLFxuICBnc2FwUmVnaXN0ZXJzLFxuICBjbGlja0V2ZW50cyxcbiAgbW9iaWxlTmF2U2V0dXAsXG4gIGFuaW1hdGVTZWN0aW9uLFxuICBzZWN0aW9uc1NldHVwLFxuICBtb2JpbGVBbmltYXRlU2VjdGlvbixcbiAgbW9iaWxlU2VjdGlvbnNTZXR1cFxufSBmcm9tICcuL2luZGV4LmpzJztcbiBcblxuLy8gJCh3aW5kb3cpLm9uKCdiZWZvcmV1bmxvYWQnLCBmdW5jdGlvbigpIHtcbi8vICAgJCh3aW5kb3cpLnNjcm9sbFRvcCgwKTtcbi8vIH0pO1xuXG53aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICBwcmVMb2FkZXIoKTtcbiAgICBnc2FwUmVnaXN0ZXJzKCk7XG4gICAgXG4gICAgaWYgKHNjcmVlbi53aWR0aCA8PSAxMDI0KXtcbiAgICAgIG1vYmlsZVNlY3Rpb25zU2V0dXAoKTtcbiAgICAgIG1vYmlsZVZpZExpbmtzKCk7XG4gICAgICBtb2JpbGVBbmltYXRlU2VjdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWN0aW9uc1NldHVwKCk7XG4gICAgICB2aWRMaW5rcygpO1xuICAgICAgYW5pbWF0ZVNlY3Rpb24oKTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgXG4gICAgICBcbiAgICAgIFxufSlcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuXG59KTsiXSwic291cmNlUm9vdCI6IiJ9