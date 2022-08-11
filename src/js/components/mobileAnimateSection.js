export let mobileAnimateSection = () => {
  // gsap.set('body', {touchAction:'none'});
  // document.ontouchmove = (e) => e.preventDefault();

  let sectionAnim = {
    sectionAnim1: () => {
      let thisSec = "#section1";
      let thisOverlay = $("#overlay1");
      let sectionLines = $(thisSec).find(".single-backline");
      let secArrow = $(thisSec).find(".down-arrow-svg");

      let tl = gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.5,
          ease: "none",
        },
        onComplete: function () {
          gsap
            .timeline({ repeat: -1, yoyo: true })
            .to(secArrow, { y: -3, duration: 0.5, ease: "none" });
        },
      });

      // Build Master TLTL
      tl.fromTo(thisOverlay, { opacity: 0 }, { opacity: 0.65 }, "scrollInAll");
      tl.fromTo(sectionLines, { opacity: 0 }, { opacity: 0.3 }, "scrollInAll");

      return tl;
    },

    sectionAnim2: () => {
      let thisSec = $("#section2");
      let thisBack = $("#background1");
      let thisOverlay = $("#overlay1");
      let lines = $(".single-backline");
      let sectionLines = thisSec.find(".single-backline");
      let tl = gsap.timeline({
        // delay:0.65,
        paused: true,
        defaults: {
          duration: 0.5,
          ease: "none",
        },
        onComplete: function () {
          // setTimeout(() => {
          // // gsap.set('body', {overflow:'auto'});,
          // gsap.set('body', {touchAction:'auto'});
          // }, 1000);
        },
      });

      // tl.fromTo(thisOverlay, {opacity:0}, {opacity:0.1}, "scrollInAll");
      tl.fromTo(sectionLines, { opacity: 0 }, { opacity: 0.2 }, "scrollInAll");

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

    sectionAnim3: () => {
      let thisSec = $("#section4");
      let thisBack = $("#background4");
      // let sectionLines = thisSec.find('.single-backline')
      let soloCenter2 = $(thisSec).find("#solo-center-2");
      let soloCenter1 = $(thisSec).find("#solo-center-1");
      let bottomSmall = $(thisSec).find("#bottom-small");
      let tl = gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.5,
          ease: "none",
        },
        onReverseComplete: function () {
          // gsap.set('#background1', {opacity:1});
        },
      });
      tl.fromTo(soloCenter1, { opacity: 0 }, { opacity: 0.5 }, "scrollInAll");
      tl.fromTo(soloCenter2, { opacity: 0 }, { opacity: 0.5 }, "scrollInAll");
      tl.fromTo(bottomSmall, { opacity: 0 }, { opacity: 0.5 }, "scrollInAll");
      tl.fromTo(thisBack, { opacity: 0 }, { opacity: 1 }, "scrollInAll");
      // tl.fromTo(sectionLines, {opacity:0},{opacity:0.3}, "scrollInAll");

      return tl;
    },

    sectionAnim4: () => {
      let thisSec = $("#section5");
      let thisBack = $("#background5");
      let thisOverlay = $("#overlay5");
      let sectionLines = thisSec.find(".single-backline");
      let tl = gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.5,
          ease: "none",
        },
        onComplete: function () {
          // setTimeout(() => {
          // gsap.set('body', {touchAction:'auto'});
          // }, 1000);
        },
      });

      tl.fromTo(thisOverlay, { opacity: 0 }, { opacity: 0.9 }, "scrollInAll");
      tl.fromTo(thisBack, { opacity: 0 }, { opacity: 1 }, "scrollInAll");
      tl.fromTo(sectionLines, { opacity: 0 }, { opacity: 0.9 }, "scrollInAll");

      return tl;
    },

    sectionAnim5: () => {
      let thisSec = $("#section6");
      let thisBack = $("#background6");
      let thisOverlay = $("#overlay6");
      let sectionLines = thisSec.find(".single-backline");
      let tl = gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.5,
          ease: "none",
        },
        onComplete: function () {
          // setTimeout(() => {
          // gsap.set('body', {touchAction:'auto'});
          // }, 1000);
        },
      });

      tl.fromTo(thisOverlay, { opacity: 0 }, { opacity: 0.9 }, "scrollInAll");
      tl.fromTo(thisBack, { opacity: 0 }, { opacity: 1 }, "scrollInAll");
      tl.fromTo(sectionLines, { opacity: 0 }, { opacity: 0.2 }, "scrollInAll");

      return tl;
    },

    //   sectionAnim6: () => {
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

  sectionAnim["sectionAnim1"]().play();

  // Fire An Animation From Above for Each Section
  let sectionTrig = (myCount) => {
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
      onEnter: function () {
        if (myCount > 1) {
          // alert(myCount);
          // gsap.set('body', {touchAction:'none'});
          // gsap.set('body', {overflow:'hidden'});
          sectionAnim["sectionAnim" + myCount]().play();
        }
      },
      onLeave: function () {
        if (myCount < 5) {
          // gsap.set('body', {touchAction:'none'});
          sectionAnim["sectionAnim" + myCount]().reverse(0);
        }
      },
      onEnterBack: function () {
        if (myCount < 5) {
          // gsap.set('body', {touchAction:'none'});
          sectionAnim["sectionAnim" + myCount]().play();
        }
      },
      onLeaveBack: function () {
        if (myCount > 1) {
          // gsap.set('body', {touchAction:'none'});
          sectionAnim["sectionAnim" + myCount]().reverse(0);
        }
      },
    });
  };

  // Animation triggers are calculated in the function
  let i = 1;
  $("section").each(function () {
    sectionTrig(i);
    i++;
  });

  // sectionTrig(2);
  let windowHeight = Math.round(window.innerHeight);
  // Single Buzz on Bees Sections
  // Buzz Animation 5
  let buzzIn4 = () => {
    let buzzBlock = $("#section4").find(".buzzOnBeesBlock");
    let buzzWidth = buzzBlock.outerWidth();
    let tl = new gsap.timeline({
      paused: true,
      defaults: { duration: 0.5 },
    });
    tl.fromTo(buzzBlock, { x: buzzWidth }, { x: 0 });
    return tl;
  };

  let buzzTrig4 = (myCount) => {
    // var startHeight = (myScrollHeight * (myCount - 0.5)) - myScrollOffset;
    // var endHeight = (myScrollHeight * (myCount + 0.5)) - myScrollOffset;

    // console.log('buzz4 start is '+startHeight);
    // console.log('buzz4 end is '+endHeight);

    ScrollTrigger.create({
      trigger: "#section4",
      start: "top top-=" + windowHeight / 2,
      end: "bottom bottom",
      // scrub:1,
      onEnter: function () {
        buzzIn4().play();
      },
      onLeave: function () {
        buzzIn4().reverse(0);
      },
      onEnterBack: function () {
        buzzIn4().play();
      },
      onLeaveBack: function () {
        buzzIn4().reverse(0);
      },
    });
  };

  buzzTrig4();

  // Buzz Animation 5
  let buzzIn5 = () => {
    let buzzBlock = $("#section5").find(".buzzOnBeesBlock");
    let buzzWidth = buzzBlock.outerWidth();
    let tl = new gsap.timeline({
      paused: true,
      defaults: { duration: 0.5 },
    });
    tl.fromTo(buzzBlock, { x: buzzWidth }, { x: 0 });
    return tl;
  };

  let buzzTrig5 = (myCount) => {
    // var startHeight = (myScrollHeight * (myCount + 0.5)) - myScrollOffset;
    // var endHeight = (myScrollHeight * (myCount + 1.5)) - myScrollOffset;

    // console.log('buzz5 start is '+startHeight);
    // console.log('buzz5 end is '+endHeight);

    ScrollTrigger.create({
      trigger: "#section5",
      start: "top top-=" + windowHeight / 2,
      end: "bottom bottom",
      // scrub:1,
      onEnter: function () {
        buzzIn5().play();
      },
      onLeave: function () {
        buzzIn5().reverse(0);
      },
      onEnterBack: function () {
        buzzIn5().play();
      },
      onLeaveBack: function () {
        buzzIn5().reverse(0);
      },
    });
  };

  buzzTrig5();

  // Buzz Animation 6
  let buzzIn6 = () => {
    let buzzBlock = $("#section6").find(".buzzOnBeesBlock");
    let buzzWidth = buzzBlock.outerWidth();
    let tl = new gsap.timeline({
      paused: true,
      defaults: { duration: 0.5 },
    });
    tl.fromTo(buzzBlock, { x: buzzWidth }, { x: 0 });
    return tl;
  };

  let buzzTrig6 = (myCount) => {
    // var startHeight = (myScrollHeight * (myCount + 1.5)) - myScrollOffset;
    // var endHeight = (myScrollHeight * (myCount + 2.5)) - myScrollOffset;

    // console.log('buzz6 start is '+startHeight);
    // console.log('buzz6 end is '+endHeight);

    ScrollTrigger.create({
      trigger: "#section6",
      start: "top top-=" + windowHeight / 1.5,
      end: "bottom bottom",
      // scrub:1,
      onEnter: function () {
        buzzIn6().play();
      },
      onLeave: function () {
        buzzIn6().reverse(0);
      },
      onEnterBack: function () {
        buzzIn6().play();
      },
      onLeaveBack: function () {
        buzzIn6().reverse(0);
      },
    });
  };

  buzzTrig6();

  $(".text-container").each(function () {
    let linesIn = () => {
      let theseLines = $(this).find(".pLines");
      let tl = new gsap.timeline({
        paused: true,
        defaults: { duration: 0.3 },
      });
      tl.fromTo(
        theseLines,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, stagger: { amount: 0.3 } }
      );

      // console.log(theseLines);
      return tl;
    };

    ScrollTrigger.create({
      trigger: this,
      start: "top bottom-=120px",
      // scrub:1,
      onEnter: function () {
        linesIn().play();
      },
      // onLeave: function(){buzzIn6().reverse(0);},
      // onEnterBack:function(){buzzIn6().play();},
      onLeaveBack: function () {
        linesIn().reverse(0);
      },
    });
  });

  $("h2").each(function () {
    let linesIn = () => {
      let theseLines = $(this).find(".h2Words");
      let tl = new gsap.timeline({
        paused: true,
        defaults: { duration: 0.3 },
      });
      tl.fromTo(
        theseLines,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, stagger: { amount: 0.3 } }
      );

      // console.log(theseLines);
      return tl;
    };

    ScrollTrigger.create({
      trigger: this,
      start: "top bottom-=120px",
      // scrub:1,
      onEnter: function () {
        linesIn().play();
      },
      // onLeave: function(){buzzIn6().reverse(0);},
      // onEnterBack:function(){buzzIn6().play();},
      onLeaveBack: function () {
        linesIn().reverse(0);
      },
    });
  });
};
