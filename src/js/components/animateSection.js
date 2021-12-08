export let animateSection = () => {
  
  let windowHeight = Math.round(window.innerHeight);
  if (screen.width <= 1024){
    var myScrollHeight = windowHeight*2;
  } else {
    var myScrollHeight = windowHeight/2;
  }
  let myScrollOffset = 0;
  // Global var for animations / Access via section trig loop 

  // console.log(myScrollHeight);
  let sectionAnim = {

    sectionAnim1 : () => {

      let thisSec = ('#section1');
      let thisOverlay = $('#overlay1');
      let charsH2 = $(thisSec).find('.sec1Chars2');
      let charsH3 = $(thisSec).find('.sec1Chars3');
      // Background Shape Vars
      let center4L = $(thisSec).find('#center-4L');
      let center4R = $(thisSec).find('#center-4R');
      let center3L = $(thisSec).find('#center-3L');
      let center3R = $(thisSec).find('#center-3R');
      let center2L = $(thisSec).find('#center-2L');
      let center2R = $(thisSec).find('#center-2R');
      let center1 = $(thisSec).find('#top-big');
      let topSmall = $(thisSec).find('#top-small');
      let bottomSmall = $(thisSec).find('#bottom-small');
      let centerSmall = $(thisSec).find('#center-small');
      let topLeftSmall = $(thisSec).find('#top-left-small');
      let topRighttSmall = $(thisSec).find('#top-right-small');
      let bottomLeftSmall = $(thisSec).find('#bottom-left-small');
      let bottomRighttSmall = $(thisSec).find('#bottom-right-small');
      let smallsGroup = [topSmall, bottomSmall, centerSmall, topLeftSmall, topRighttSmall, bottomLeftSmall, bottomRighttSmall];
      // Arrow Pieces
      let downArrow = $(thisSec).find('#down-arrow');
      let downArrowLine = $(thisSec).find('#down-arrow-line');
      let downArrowPoint = $(thisSec).find('#down-arrow-point');

      let tl = gsap.timeline({
        paused:true,
        defaults: {
          duration:0.3,
          ease: "none",
        },
        // Release The Scroll Lock
        onComplete: function(){
          gsap.set(document.body, {overflow: "auto"});
        }
      });

      let lineTL = gsap.timeline({
        defaults: {
          duration:0.8,
          ease: "none",
        }
      });

      let arrowTL = gsap.timeline({
        defaults: {
          duration:0.15,
          ease:"none"
        }, 
        onComplete: function(){
          // Bounce The Down Arrow
          gsap.timeline({repeat:-1, yoyo:true}).to(downArrow, {y:-4, duration:1, ease:"none"});
        },
        onReverseComplete: function(){
          // Stop Bouncin The Down Arrow and Reset it's Y position
          gsap.killTweensOf(downArrow);
          gsap.set(downArrow, {y:0});
        }
      });

      let contentTL = gsap.timeline({
        defaults: {
          duration:0.4,
          ease:"back.out(1.5)"
        }
      });
      
      // Set background z-index by section number / Section 2 has no back / Section 3 is z-index 110 to stay above all
      tl.set(thisOverlay, {zIndex:101});
      // Set section z-index by section number
      tl.fromTo(thisSec, {zIndex:13},{zIndex:1001});
      
      // Animate Lines
      lineTL.fromTo(center4L, {drawSVG:"0% 0%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(center4R, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(center3L, {drawSVG:"0% 0%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(center3R, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(center2L, {drawSVG:"0% 0%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(center2R, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(center1, {drawSVG:"50% 50%"}, {drawSVG:"100% 0%", duration:0.7}, "scrollIn+=0.1");
      lineTL.fromTo(smallsGroup, {drawSVG:"50% 50%"}, {drawSVG:"100% 0%", duration:0.6}, "scrollIn+=0.2");
      
      // Animate Content
      contentTL.fromTo(charsH2, 
        {x:-20, opacity:0},
        {x:0, opacity:1, stagger:{amount:0.5}
      }, "content");
      contentTL.fromTo(charsH3, 
        {y:'1.01em'},
        {y:0, stagger: {amount:0.2, from:"center"}
      }, "content+=0.35");
      
      // Animate Arrow
      arrowTL.fromTo(downArrowLine, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "scrollIn");
      arrowTL.fromTo(downArrowPoint, {drawSVG:"50% 50%"}, {drawSVG:"100% 0%"}, "scrollIn+=0.145");
      
      // Build Master TLTL
      tl.fromTo(thisOverlay, {opacity:0}, {opacity:0.65}, "scrollInAll");
      tl.add(lineTL, "scrollInAll+=0.3");
      tl.add(contentTL, "scrollInAll+=0.8");
      tl.add(arrowTL, "scrollInAll+=1.4");
            
      return tl;
    },

    sectionAnim2 : () => {
      let thisSec = $('#section2');
      let charsH2 = $(thisSec).find('.h2Chars');
      let linesP = $(thisSec).find('.pLines');
      // Background Shape Vars
      let center4L = $(thisSec).find('#center-4L');
      let center4R = $(thisSec).find('#center-4R');
      let center3L = $(thisSec).find('#center-3L');
      let center3R = $(thisSec).find('#center-3R');
      let center2L = $(thisSec).find('#center-2L');
      let center2R = $(thisSec).find('#center-2R');
      let center1 = $(thisSec).find('#top-big');
      let topSmall = $(thisSec).find('#top-small');
      let bottomSmall = $(thisSec).find('#bottom-small');
      let centerSmall = $(thisSec).find('#center-small');
      let topLeftSmall = $(thisSec).find('#top-left-small');
      let topRighttSmall = $(thisSec).find('#top-right-small');
      let bottomLeftSmall = $(thisSec).find('#bottom-left-small');
      let bottomRighttSmall = $(thisSec).find('#bottom-right-small');
      let smallsGroup = [topSmall, bottomSmall, centerSmall, topLeftSmall, topRighttSmall, bottomLeftSmall, bottomRighttSmall];
      // Arrow Pieces
      let downArrow = $(thisSec).find('#down-arrow');
      let downArrowLine = $(thisSec).find('#down-arrow-line');
      let downArrowPoint = $(thisSec).find('#down-arrow-point');
      let sectionText = $(thisSec).find('.down-arrow-text');
      let tl = gsap.timeline({
        delay:0.65,
        paused:true,
        defaults: {
          duration:0.3,
          ease: "none",
        },
        // Release The Scroll Lock
        onComplete: function(){
          gsap.set(document.body, {overflow: "auto"})
        }
      });

      let lineTL = gsap.timeline({
        defaults: {
          duration:0.8,
          ease: "none",
        }
      });

      let contentTL = gsap.timeline({
        defaults: {
          duration:0.15,
          ease:"back.out(1.5)"
        }
      });

      let arrowTL = gsap.timeline({
        defaults: {
          duration:0.15,
          ease:"none"
        }, 
        onComplete: function(){
          // Bounce The Down Arrow
          gsap.timeline({repeat:-1, yoyo:true}).to(downArrow, {y:-3, duration:1, ease:"none"});
        },
        onReverseComplete: function(){
          // Stop Bouncin The Down Arrow and Reset it's Y position
          gsap.killTweensOf(downArrow);
          gsap.set(downArrow, {y:0});
        }
      });

      // Set section z-index by section number
      tl.fromTo(thisSec, {zIndex:13},{zIndex:1002});
      
      // Animate Lines
      lineTL.fromTo(center4L, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(center4R, {drawSVG:"0% 0%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(center3L, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(center3R, {drawSVG:"0% 0%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(center2L, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(center2R, {drawSVG:"0% 0%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(center1, {drawSVG:"50% 50%"}, {drawSVG:"100% 0%", duration:0.7}, "scrollIn+=0.1");
      lineTL.fromTo(smallsGroup, {drawSVG:"50% 50%"}, {drawSVG:"100% 0%", duration:0.6}, "scrollIn+=0.2");
      
      // Animate Content
      contentTL.fromTo(charsH2, 
        {x:-20, opacity:0},
        {x:0, opacity: 1, stagger:{amount:0.3, from:"random"}}, 
      "scrollIn");
      contentTL.fromTo(linesP,
        {opacity:0, x:-40},
        {opacity:1, x:0, stagger:{amount:0.3}}, 
      "scrollIn+=0.1");
      
      // Animate Arrow
      arrowTL.fromTo(sectionText, {y:-6, opacity:0}, {y:0, opacity:1}, "scrollIn");
      arrowTL.fromTo(downArrowLine, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "scrollIn+=0.025");
      arrowTL.fromTo(downArrowPoint, {drawSVG:"50% 50%"}, {drawSVG:"100% 0%"}, "scrollIn+=0.175");
      
      // Build Master TLTL
      tl.to('.header-logo', {duration:0.9,width:190, ease:"sine.out"},"scrollInAll+=0.1");
      tl.add(lineTL, "scrollInAll");
      tl.add(contentTL, "scrollInAll+=0.75");
      tl.add(arrowTL, "scrollInAll+=0.7");
      
      return tl;
    },
    

    sectionAnim3 : () => {
      let thisSec = $('#section3');
      let thisBack = $('#background3');
      let center4L = $(thisSec).find('#center-4L');
      let center4R = $(thisSec).find('#center-4R');
      let center3L = $(thisSec).find('#center-3L');
      let center3R = $(thisSec).find('#center-3R');
      let center2L = $(thisSec).find('#center-2L');
      let center2R = $(thisSec).find('#center-2R');
      let bottomSmall = $(thisSec).find('#bottom-small');
      // Arrow Pieces
      let downArrow = $(thisSec).find('#down-arrow');
      let downArrowLine = $(thisSec).find('#down-arrow-line');
      let downArrowPoint = $(thisSec).find('#down-arrow-point');
      let sectionText = $(thisSec).find('.down-arrow-text');
      let tl = gsap.timeline({
        delay:0.3,
        paused:true,
        defaults: {
          duration:0.3,
          ease: "none",
        },
        // Release The Scroll Lock
        onComplete: function(){
          gsap.set(document.body, {overflow: "auto"})
        },
        onReverseComplete: function(){
          // Set the Background Back Behind
          gsap.set(thisBack, {zIndex:99});
        }
      });

      let lineTL = gsap.timeline({
        defaults: {
          duration:0.8,
          ease: "none",
        }
      });

      let contentTL = gsap.timeline({
        defaults: {
          duration:0.6,
          ease:"back.out(.2)"
        }
      });

      let arrowTL = gsap.timeline({
        defaults: {
          duration:0.15,
          ease:"none"
        }, 
        onComplete: function(){
          // Bounce The Down Arrow
          gsap.timeline({repeat:-1, yoyo:true}).to(downArrow, {y:-4, duration:1, ease:"none"});
        },
        onReverseComplete: function(){
          // Stop Bouncin The Down Arrow and Reset it's Y position
          gsap.killTweensOf(downArrow);
          gsap.set(downArrow, {y:0});
        }
      });

      // Set background z-index by section number / Section 2 has no back / Section 3 is z-index 110 to stay above all
      tl.set(thisBack, {opacity:1, zIndex:110});
      // Set section z-index by section number
      tl.fromTo(thisSec, {zIndex:13},{zIndex:1003});
      
      // Animate Lines
      lineTL.fromTo(center4L, {drawSVG:"0% 0%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(center4R, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(center3L, {drawSVG:"0% 0%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(center3R, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(center2L, {drawSVG:"0% 0%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(center2R, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "scrollIn");
          
      // Animate Content
      contentTL.fromTo(bottomSmall, {drawSVG:"50% 50%"}, {drawSVG:"0% 100%"}, "scrollIn");
      contentTL.fromTo('.videoArea', {height:0}, {height:'auto'}, "scrollIn+=0.2");
      
      // Animate Arrow
      arrowTL.fromTo(sectionText, {y:-6, opacity:0}, {y:0, opacity:1}, "scrollIn");
      arrowTL.fromTo(downArrowLine, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "scrollIn+=0.025");
      arrowTL.fromTo(downArrowPoint, {drawSVG:"50% 50%"}, {drawSVG:"100% 0%"}, "scrollIn+=0.175");
      
      // Build Master TL TL
      tl.add(lineTL, "scrollInAll");
      tl.fromTo(thisBack, {y:'-100%'},{y:0}, "scrollInAll+=0.55");
      tl.add(contentTL, "scrollInAll+=0.75");
      tl.add(arrowTL, "scrollInAll+=1");
      
      return tl;
    },

    sectionAnim4: () => {
      let thisSec = $('#section4');
      let thisBack = $('#background4');
      let charsH2 = $(thisSec).find('.h2Chars');
      let linesP = $(thisSec).find('.pLines');
      let soloCenter2 = $(thisSec).find('#solo-center-2');
      let soloCenter1 = $(thisSec).find('#solo-center-1');
      let bottomSmall = $(thisSec).find('#bottom-small');
      // Arrow Pieces
      let downArrow = $(thisSec).find('#down-arrow');
      let downArrowLine = $(thisSec).find('#down-arrow-line');
      let downArrowPoint = $(thisSec).find('#down-arrow-point');
      let sectionText = $(thisSec).find('.down-arrow-text');  
      let tl = gsap.timeline({
        paused:true,
        defaults: {
          duration:0.3,
          ease: "none",
        },
        // Release The Scroll Lock
        onComplete: function(){
          gsap.set(document.body, {overflow: "auto"})
          // gsap.set('#background1', {opacity:1});
        }
      });

      let lineTL = gsap.timeline({
        defaults: {
          duration:0.6,
          ease: "none",
        }
      });

      let contentTL = gsap.timeline({
        defaults: {
          duration:0.3,
          ease:"back.out(1.5)"
        }
      });

      let arrowTL = gsap.timeline({
        defaults: {
          duration:0.15,
          ease:"none"
        }, 
        onComplete: function(){
          // Bounce The Down Arrow
          gsap.timeline({repeat:-1, yoyo:true}).to(downArrow, {y:-4, duration:1, ease:"none"});
        },
        onReverseComplete: function(){
          // Stop Bouncin The Down Arrow and Reset it's Y position
          gsap.killTweensOf(downArrow);
          gsap.set(downArrow, {y:0});
        }
      });

      // Set background z-index by section number / Section 2 has no back / Section 3 is z-index 110 to stay above all
      tl.set(thisBack, {zIndex:104});
      // Set section z-index by section number
      tl.fromTo(thisSec, {zIndex:13},{zIndex:1004});
      
      // Animate Lines
      lineTL.fromTo(soloCenter1, {drawSVG:"50% 50%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(soloCenter2, {drawSVG:"50% 50%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(bottomSmall, {drawSVG:"50% 50%"}, {drawSVG:"0% 100%", duration:0.5}, "scrollIn+=0.3");
      
      // Animate Content
      contentTL.fromTo(charsH2, 
        {x:-20, opacity:0},
        {x:0, opacity: 1, stagger:{amount:0.3, from:"random"}}, 
      "scrollIn");
      contentTL.fromTo(linesP,
        {opacity:0, x:-40},
        {opacity:1, x:0, stagger:{amount:0.3}}, 
      "scrollIn+=0.1");
      
      // Animate Arrow
      arrowTL.fromTo(sectionText, {y:-6, opacity:0}, {y:0, opacity:1}, "scrollIn");
      arrowTL.fromTo(downArrowLine, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "scrollIn+=0.025");
      arrowTL.fromTo(downArrowPoint, {drawSVG:"50% 50%"}, {drawSVG:"100% 0%"}, "scrollIn+=0.175");
      
      // Build Master TLTL
      tl.fromTo(thisBack, {opacity:0},{opacity:1}, "scrollInAll");
      tl.add(lineTL, "scrollInAll+=0.9");
      tl.add(contentTL, "scrollInAll+=1.5");
      tl.add(arrowTL, "scrollInAll+=1.5");
      
      return tl;
    },

    sectionAnim5: () => {
      let thisSec = $('#section5');
      let thisBack = $('#background5');
      let thisOverlay = $('#overlay5');
      let charsH2 = $(thisSec).find('.h2Chars');
      let linesP = $(thisSec).find('.pLines');
      let center4L = $(thisSec).find('#center-4L');
      let center4R = $(thisSec).find('#center-4R');
      let center3L = $(thisSec).find('#center-3L');
      let center3R = $(thisSec).find('#center-3R');
      let center2L = $(thisSec).find('#center-2L');
      let center2R = $(thisSec).find('#center-2R');
      // Arrow Pieces
      let downArrow = $(thisSec).find('#down-arrow');
      let downArrowLine = $(thisSec).find('#down-arrow-line');
      let downArrowPoint = $(thisSec).find('#down-arrow-point');
      let sectionText = $(thisSec).find('.down-arrow-text');
      let tl = gsap.timeline({
        paused:true,
        defaults: {
          duration:0.5,
          ease: "none",
        },
        // Release The Scroll Lock
        onComplete: function(){
          gsap.set(document.body, {overflow: "auto"})
          // gsap.set('#background1', {opacity:0});
        }
      });

      let lineTL = gsap.timeline({
        defaults: {
          duration:0.6,
          ease: "none",
        }
      });

      let contentTL = gsap.timeline({
        defaults: {
          duration:0.3,
          ease:"back.out(1.5)"
        }
      });

      let arrowTL = gsap.timeline({
        defaults: {
          duration:0.15,
          ease:"none"
        }, 
        onComplete: function(){
          // Bounce The Down Arrow
          gsap.timeline({repeat:-1, yoyo:true}).to(downArrow, {y:-4, duration:1, ease:"none"});
        },
        onReverseComplete: function(){
          // Stop Bouncin The Down Arrow and Reset it's Y position
          gsap.killTweensOf(downArrow);
          gsap.set(downArrow, {y:0});
        }
      });
      
      // Set background z-index by section number / Section 2 has no back / Section 3 is z-index 110 to stay above all
      tl.set(thisBack, {zIndex:105});
      tl.set(thisOverlay, {zIndex:105});
      // Set section z-index by section number
      tl.fromTo(thisSec, {zIndex:13},{zIndex:1005});

      // Animate Lines
      // lineTL.fromTo(center4L, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "scrollIn");
      // lineTL.fromTo(center4R, {drawSVG:"0% 0%"}, {drawSVG:"100% 0%"}, "scrollIn");
      // lineTL.fromTo(center3L, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "scrollIn");
      // lineTL.fromTo(center3R, {drawSVG:"0% 0%"}, {drawSVG:"100% 0%"}, "scrollIn");
      // lineTL.fromTo(center2L, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "scrollIn");
      // lineTL.fromTo(center2R, {drawSVG:"0% 0%"}, {drawSVG:"100% 0%"}, "scrollIn");

      lineTL.fromTo(center4L, {drawSVG:"0% 0%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(center4R, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(center3L, {drawSVG:"0% 0%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(center3R, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(center2L, {drawSVG:"0% 0%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(center2R, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo('#honeyClipEnd',
        {morphSVG: {shape:"#honeyClipStart"}},
        {morphSVG: {shape:"#honeyClipEnd"},duration:0.4, ease:"sine.out"},
      "scrollIn");

      // Animate Content
      contentTL.fromTo(charsH2, 
        {x:-20, opacity:0},
        {x:0, opacity: 1, stagger:{amount:0.3, from:"random"}}, 
      "scrollIn");
      contentTL.fromTo(linesP,
        {opacity:0, x:-40},
        {opacity:1, x:0, stagger:{amount:0.3}}, 
      "scrollIn+=0.1");
   
  
      // Animate Arrow
      arrowTL.fromTo('#bottom-small-2', {drawSVG:"50% 50%"}, {drawSVG:"0% 100%", duration:0.3, ease:"sine.out"}, "scrollIn");
      arrowTL.fromTo(sectionText, {y:-6, opacity:0}, {y:0, opacity:1}, "scrollIn+=0.1");
      arrowTL.fromTo(downArrowLine, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "scrollIn+=0.125");
      arrowTL.fromTo(downArrowPoint, {drawSVG:"50% 50%"}, {drawSVG:"100% 0%"}, "scrollIn+=0.275");
      
      // Build Master TLTL
      tl.fromTo(thisOverlay, {opacity:0}, {opacity:0.9}, "scrollInAll+=0.8");
      tl.fromTo(thisBack, {opacity:0},{opacity:1, duration:1}, "scrollInAll");
      tl.add(lineTL, "scrollInAll");
      tl.add(contentTL, "scrollInAll+=1");
      tl.add(arrowTL, "scrollInAll+=1");

      return tl;
      
    },

    sectionAnim6: () => {
      let thisSec = $('#section6');
      let thisBack = $('#background6');
      let charsH2 = $(thisSec).find('.h2Chars');
      let linesP = $(thisSec).find('.pLines');
      let thisOverlay = $('#overlay6');
      let center4L = $(thisSec).find('#center-4L');
      let center4R = $(thisSec).find('#center-4R');
      let center3L = $(thisSec).find('#center-3L');
      let center3R = $(thisSec).find('#center-3R');
      let center2L = $(thisSec).find('#center-2L');
      let center2R = $(thisSec).find('#center-2R');
      let bottomSmall = $(thisSec).find('#bottom-small');
      // Arrow Pieces
      let downArrow = $(thisSec).find('#down-arrow');
      let downArrowLine = $(thisSec).find('#down-arrow-line');
      let downArrowPoint = $(thisSec).find('#down-arrow-point');
      let sectionText = $(thisSec).find('.down-arrow-text');
      let tl = gsap.timeline({
        paused:true,
        defaults: {
          duration:0.5,
          ease: "none",
        },
        // Release The Scroll Lock
        onComplete: function(){
          gsap.set(document.body, {overflow: "auto"})
          // gsap.set('#background1', {opacity:0});
        }
      });

      let lineTL = gsap.timeline({
        defaults: {
          duration:0.8,
          ease: "none",
        }
      });

      let contentTL = gsap.timeline({
        defaults: {
          duration:0.3,
          ease:"back.out(1.5)"
        }
      });

      let arrowTL = gsap.timeline({
        defaults: {
          duration:0.15,
          ease:"none"
        }, 
        onComplete: function(){
          // Bounce The Down Arrow
          gsap.timeline({repeat:-1, yoyo:true}).to(downArrow, {y:-4, duration:1, ease:"none"});
        },
        onReverseComplete: function(){
          // Stop Bouncin The Down Arrow and Reset it's Y position
          gsap.killTweensOf(downArrow);
          gsap.set(downArrow, {y:0});
        }
      });
      
      // Set background z-index by section number / Section 2 has no back / Section 3 is z-index 110 to stay above all
      tl.set(thisBack, {zIndex:106});
      tl.set(thisOverlay, {zIndex:106});
      // Set section z-index by section number
      tl.fromTo(thisSec, {zIndex:13},{zIndex:1006});

      // Animate Lines
      lineTL.fromTo(center4L, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(center4R, {drawSVG:"0% 0%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(center3L, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(center3R, {drawSVG:"0% 0%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(center2L, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(center2R, {drawSVG:"0% 0%"}, {drawSVG:"100% 0%"}, "scrollIn");
      
      // Animate Content
      contentTL.fromTo(charsH2, 
        {x:-20, opacity:0},
        {x:0, opacity: 1, stagger:{amount:0.3, from:"random"}}, 
      "scrollIn");
      contentTL.fromTo(linesP,
        {opacity:0, x:-40},
        {opacity:1, x:0, stagger:{amount:0.3}}, 
      "scrollIn+=0.1");
      
      // Animate Arrow
      arrowTL.fromTo(bottomSmall, {drawSVG:"50% 50%"}, {drawSVG:"0% 100%", duration:0.4}, "scrollIn");
      arrowTL.fromTo(sectionText, {y:-6, opacity:0}, {y:0, opacity:1}, "scrollIn+=0.15");
      arrowTL.fromTo(downArrowLine, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "scrollIn+=0.175");
      arrowTL.fromTo(downArrowPoint, {drawSVG:"50% 50%"}, {drawSVG:"100% 0%"}, "scrollIn+=0.325");
      
      // Build Master TLTL
      tl.fromTo(thisOverlay, {opacity:0}, {opacity:0.1}, "scrollInAll");
      tl.fromTo(thisBack, {opacity:0},{opacity:1}, "scrollInAll");
      tl.add(lineTL, "scrollInAll");
      tl.add(contentTL, "scrollInAll+=0.6");
      tl.add(arrowTL, "scrollInAll+=0.8");
      
      return tl;  
    },

    sectionAnim7: () => {
      let thisSec = $('#section7');
      let thisBack = $('#background7');
      let charsH2 = $(thisSec).find('.h2Chars');
      let linesP = $(thisSec).find('.pLines');
      let thisOverlay = $('#overlay7');
      let center4L = $(thisSec).find('#center-4L');
      let center4R = $(thisSec).find('#center-4R');
      let center3L = $(thisSec).find('#center-3L');
      let center3R = $(thisSec).find('#center-3R');
      let center2L = $(thisSec).find('#center-2L');
      let center2R = $(thisSec).find('#center-2R');
      let topSmall = $(thisSec).find('#top-small');
      let bottomSmall = $(thisSec).find('#bottom-small');
      let centerSmall = $(thisSec).find('#center-small');
      let topLeftSmall = $(thisSec).find('#top-left-small');
      let topRighttSmall = $(thisSec).find('#top-right-small');
      let bottomLeftSmall = $(thisSec).find('#bottom-left-small');
      let bottomRighttSmall = $(thisSec).find('#bottom-right-small');
      let imgContainer = $(thisSec).find('.imageContainer');
      let subImg = $(imgContainer).find('img');
      // Arrow Pieces
      let downArrow = $(thisSec).find('#down-arrow');
      let downArrowLine = $(thisSec).find('#down-arrow-line');
      let downArrowPoint = $(thisSec).find('#down-arrow-point');
      let sectionText = $(thisSec).find('.down-arrow-text');
      let tl = gsap.timeline({
        paused:true,
        defaults: {
          duration:0.6,
          ease: "none",
        },
        // Release The Scroll Lock
        onComplete: function(){
          gsap.set(document.body, {overflow: "auto"})
          // gsap.set('#background1', {opacity:1});
        }
      });

      let lineTL = gsap.timeline({
        defaults: {
          duration:0.8,
          ease: "none",
        }
      });

      let contentTL = gsap.timeline({
        defaults: {
          duration:0.3,
          ease:"back.out(1.5)"
        }
      });

      // let arrowTL = gsap.timeline({
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
      tl.set(thisBack, {zIndex:107});
      tl.set(thisOverlay, {zIndex:107});
      // Set section z-index by section number
      tl.fromTo(thisSec, {zIndex:13},{zIndex:1007});

      // Animate Lines
      lineTL.fromTo(center4L, {drawSVG:"0% 0%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(center4R, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(center3L, {drawSVG:"0% 0%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(center3R, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(center2L, {drawSVG:"0% 0%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo(center2R, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo([topSmall, bottomSmall, centerSmall], {drawSVG:"50% 50%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo([topLeftSmall, bottomLeftSmall], {drawSVG:"50% 50%"}, {drawSVG:"100% 0%"}, "scrollIn");
      lineTL.fromTo([topRighttSmall, bottomRighttSmall], {drawSVG:"50% 50%"}, {drawSVG:"100% 0%"}, "scrollIn");
  
      // Animate Content
      contentTL.fromTo(charsH2, 
        {x:-20, opacity:0},
        {x:0, opacity: 1, stagger:{amount:0.3, from:"random"}}, 
      "scrollIn");
      contentTL.fromTo(linesP,
        {opacity:0, x:-40},
        {opacity:1, x:0, stagger:{amount:0.3}}, 
      "scrollIn+=0.1");
      contentTL.fromTo(".textImage",
        {opacity:0, x:-40},
        {opacity:1, x:0}, 
      "scrollIn+=0.1");
      contentTL.fromTo('#partnerClipEnd',
        {morphSVG: {shape:"#partnerClipStart"}},
        {morphSVG: {shape:"#partnerClipEnd"},duration:0.4, ease:"sine.out"},
      "scrollIn+=0.2");
      
      // // Animate Arrow
      // arrowTL.fromTo(sectionText, {y:-6, opacity:0}, {y:0, opacity:1}, "scrollIn");
      // arrowTL.fromTo(downArrowLine, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "scrollIn+=0.025");
      // arrowTL.fromTo(downArrowPoint, {drawSVG:"50% 50%"}, {drawSVG:"100% 0%"}, "scrollIn+=0.175");
      
      // Build Master TLTL
      tl.fromTo(thisOverlay, {opacity:0}, {opacity:0.9}, "scrollInAll");
      tl.fromTo(thisBack, {opacity:0},{opacity:1}, "scrollInAll");
      tl.add(lineTL, "scrollInAll+=0.2");
      tl.add(contentTL, "scrollInAll+=0.6");
      tl.fromTo('.footerArea', {y:'100%'}, {y:0, duration:0.7, ease:'back.out(0.5)'}, "scrollInAll+=0.7");
      // tl.add(arrowTL, "scrollInAll+=0.8");

      return tl;  
    },

    // sectionAnim8: () => {
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
  };

  // Play Section 1 automatically
  sectionAnim['sectionAnim1']().play();
  
  // Fire An Animation From Above for Each Section
  let sectionTrig = (myCount) => {
    // Add An Extra Scroll for Buzz On Bees in Section 4, 5, 6 +1 total each time
    if (myCount === 1) {
      var startHeight = 0;
    } else if (myCount === 2) {
      var startHeight = (myScrollHeight * (myCount - 1)) - myScrollOffset;
    } else if (myCount === 3) {
      var startHeight = (myScrollHeight * (myCount - 1)) - myScrollOffset;
    } else if (myCount === 4) {
      var startHeight = (myScrollHeight * (myCount - 1)) - myScrollOffset;
    } else if (myCount === 5) {
      var startHeight = (myScrollHeight * (myCount)) - myScrollOffset;
    } else if (myCount === 6) {
      var startHeight = (myScrollHeight * (myCount + 1)) - myScrollOffset;
    } else if (myCount === 7) {
      var startHeight = (myScrollHeight * (myCount + 2)) - myScrollOffset;
    } else if (myCount === 8) {
      var startHeight = (myScrollHeight * (myCount + 2)) - myScrollOffset;
    } 

    if (myCount === 1) {
      var endHeight = myScrollHeight;
    } else if (myCount === 2) {
      var endHeight = (myScrollHeight * (myCount)) - myScrollOffset;
    } else if (myCount === 3) {
      var endHeight = (myScrollHeight * (myCount)) - myScrollOffset;
    } else if (myCount === 4) {
      var endHeight = (myScrollHeight * (myCount + 1)) - myScrollOffset;
    } else if (myCount === 5) {
      var endHeight = (myScrollHeight * (myCount + 2)) - myScrollOffset;
    } else if (myCount === 6) {
      var endHeight = (myScrollHeight * (myCount + 3)) - myScrollOffset;
    } else if (myCount === 7) {
      var endHeight = (myScrollHeight * (myCount + 3)) - myScrollOffset;
    } else if (myCount === 8) {
      var endHeight = (myScrollHeight * (myCount + 3)) - myScrollOffset;
    } 

    // console.log('start height'+myCount+' is '+startHeight);
    // console.log('end height'+myCount+' is '+endHeight);
    
    ScrollTrigger.create({
      // trigger:'body',
      start:startHeight,
      end:endHeight, 
      scrub:1,
      onEnter: function(){
        if (myCount > 1) {
          gsap.set(document.body, {overflow: "hidden"})
          sectionAnim['sectionAnim'+myCount]().play();
          // alert(myCount+' section entered');
        }
      },
      onLeave: function(){

        if (myCount < 7) {
          gsap.set(document.body, {overflow: "hidden"})
          sectionAnim['sectionAnim'+myCount]().reverse(0);
          // alert(myCount+' section left');
        }
      },
      onEnterBack:function(){
        if (myCount < 7) {
          gsap.set(document.body, {overflow: "hidden"})
          sectionAnim['sectionAnim'+myCount]().play();
          // alert(myCount+' section back again');
        }
      },
      onLeaveBack: function(){
        if (myCount > 1) {
          gsap.set(document.body, {overflow: "hidden"})
          sectionAnim['sectionAnim'+myCount]().reverse(0);
          // alert(myCount+' section left again');
        }
      },
    });
  }

  // Call The Trigger On Every Section
  // Animation triggers are calculated in the function
  let i = 1;
  $('section').each(function(){
    sectionTrig(i);
    i++
  })

  // Single Buzz on Bees Sections
  // Buzz Animation 5
  let buzzIn4 = () => {

    let buzzBlock = $('#section4').find('.buzzOnBeesBlock');
    let buzzWidth = buzzBlock.outerWidth();
    let tl = new gsap.timeline({
      paused:true,
      defaults: {duration:0.5,ease:'back.out(0.25);'}
    });
    tl.fromTo(buzzBlock, {x:buzzWidth}, {x:0});
    return tl
  }

  let buzzTrig4 = (myCount) => {
    var startHeight = (myScrollHeight * (myCount - 0.5)) - myScrollOffset;
    var endHeight = (myScrollHeight * (myCount + 0.5)) - myScrollOffset;

    // console.log('buzz4 start is '+startHeight);
    // console.log('buzz4 end is '+endHeight);
    
    ScrollTrigger.create({
      start:startHeight,
      end:endHeight, 
      scrub:1,
      onEnter: function(){buzzIn4().play();},
      onLeave: function(){buzzIn4().reverse(0);},
      onEnterBack:function(){buzzIn4().play();},
      onLeaveBack: function(){buzzIn4().reverse(0);},
    });
  }

  buzzTrig4(4);

  // Buzz Animation 5
  let buzzIn5 = () => {
    let buzzBlock = $('#section5').find('.buzzOnBeesBlock');
    let buzzWidth = buzzBlock.outerWidth();
    let tl = new gsap.timeline({
      paused:true,
      defaults: {duration:0.5,ease:'back.out(0.25);'}
    });
    tl.fromTo(buzzBlock, {x:buzzWidth}, {x:0});
    return tl
  }

  let buzzTrig5 = (myCount) => {
    var startHeight = (myScrollHeight * (myCount + 0.5)) - myScrollOffset;
    var endHeight = (myScrollHeight * (myCount + 1.5)) - myScrollOffset;

    // console.log('buzz5 start is '+startHeight);
    // console.log('buzz5 end is '+endHeight);
    
    ScrollTrigger.create({
      start:startHeight,
      end:endHeight, 
      scrub:1,
      onEnter: function(){buzzIn5().play();},
      onLeave: function(){buzzIn5().reverse(0);},
      onEnterBack:function(){buzzIn5().play();},
      onLeaveBack: function(){buzzIn5().reverse(0);},
    });
  }

  buzzTrig5(5);

  // Buzz Animation 6
  let buzzIn6 = () => {
    let buzzBlock = $('#section6').find('.buzzOnBeesBlock');
    let buzzWidth = buzzBlock.outerWidth();
    let tl = new gsap.timeline({
      paused:true,
      defaults: {duration:0.5,ease:'back.out(0.25);'}
    });
    tl.fromTo(buzzBlock, {x:buzzWidth}, {x:0});
    return tl
  }

  let buzzTrig6 = (myCount) => {
    var startHeight = (myScrollHeight * (myCount + 1.5)) - myScrollOffset;
    var endHeight = (myScrollHeight * (myCount + 2.5)) - myScrollOffset;

    // console.log('buzz6 start is '+startHeight);
    // console.log('buzz6 end is '+endHeight);
    
    ScrollTrigger.create({
      start:startHeight,
      end:endHeight, 
      scrub:1,
      onEnter: function(){buzzIn6().play();},
      onLeave: function(){buzzIn6().reverse(0);},
      onEnterBack:function(){buzzIn6().play();},
      onLeaveBack: function(){buzzIn6().reverse(0);},
    });
  }

  buzzTrig6(6);

}
