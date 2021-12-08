export let sectionsSetup = () => {
  // ---------------------------------------------------------------
  // MEASURING VARS
  // ---------------------------------------------------------------
  let totalSections = $('section').length;
  let totalBuzzOn = $('.buzzOnBeesBlock').length;
  let windowHeight = Math.round(window.innerHeight);
  if (screen.width <= 1024){
    var myScrollHeight = windowHeight*1.5;
  } else {
    var myScrollHeight = windowHeight/2;
  }
  let fullHeight = (myScrollHeight * (totalSections + totalBuzzOn)) + windowHeight - 1;
  let buzzBlock = $('.buzzOnBeesBlock');
  let buzzWidth = buzzBlock.outerWidth();
  // ---------------------------------------------------------------
  // GLOBAL
  // ---------------------------------------------------------------
  // Set Overall Scroll Height
  gsap.set('.home-page', {height:fullHeight});
  gsap.set(document.body, {overflow: "hidden"})
  // Hide All Lines
  gsap.set($('.home-page').find('path'), {drawSVG:"50% 50%"});
  gsap.set($('.home-page').find('polyline'), {drawSVG:"50% 50%"});
  gsap.set($('.home-page').find('line'), {drawSVG:"50% 50%"});
  gsap.set($('.home-page').find('#down-arrow line'), {drawSVG:"100% 100%"});
  // Set 1st Background Image as Visible
  gsap.set('#background1', {opacity:1, zIndex:101});
  // Set Buzz On Bees to Hidden
  gsap.set(buzzBlock, {x:buzzWidth});
  // ---------------------------------------------------------------
  // SECTION 1
  // ---------------------------------------------------------------
  let sec1 = $('#section1');
  let sec1H2 = sec1.find('h2');
  let sec1splitH2 = new SplitText(sec1H2, { type: "lines,words,chars" });
  let sec1Chars2 = sec1splitH2.chars;
  let sec1Words2 = sec1splitH2.words;
  let sec1Lines2 = sec1splitH2.lines;
  $(sec1Lines2).addClass('h2Lines');
  $(sec1Chars2).addClass('h2Chars sec1Chars2');
  $(sec1Words2).addClass('h2Words sec1Words2');

  let sec1H3 = sec1.find('h3');
  let sec1splitH3 = new SplitText(sec1H3, { type: "lines,words,chars" });
  let sec1Chars3 = sec1splitH3.chars;
  let sec1Words3 = sec1splitH3.words;
  $(sec1Chars3).addClass('h3Chars sec1Chars3');
  $(sec1Words3).addClass('h3Words sec1Words3');
  // ---------------------------------------------------------------
  // SECTION 2
  // ---------------------------------------------------------------
  let sec2 = $('#section2');
  let sec2H2 = sec2.find('h2');
  let sec2splitH2 = new SplitText(sec2H2, { type: "lines,words,chars" });
  let sec2Chars2 = sec2splitH2.chars;
  let sec2Words2 = sec2splitH2.words;
  let sec2Lines2 = sec2splitH2.lines;
  $(sec2Lines2).addClass('h2Lines');
  $(sec2Chars2).addClass('h2Chars sec2Chars2');
  $(sec2Words2).addClass('h2Words sec2Words2');
  
  let sec2P = sec2.find('.text-container p');
  let sec2splitP = new SplitText(sec2P, { type: "lines" });
  // let sec2WordsP = sec2splitP.words;
  let sec2LinesP = sec2splitP.lines;
  // $(sec2WordsP).addClass('h3Words sec2WordsP');
  $(sec2LinesP).addClass('pLines sec2LinesP');
  // ---------------------------------------------------------------
  // SECTION 4
  // ---------------------------------------------------------------
  let sec4 = $('#section4');
  let sec4H2 = sec4.find('h2');
  let sec4splitH2 = new SplitText(sec4H2, { type: "lines,words,chars" });
  let sec4Chars2 = sec4splitH2.chars;
  let sec4Words2 = sec4splitH2.words;
  let sec4Lines2 = sec4splitH2.lines;
  $(sec4Lines2).addClass('h2Lines');
  $(sec4Chars2).addClass('h2Chars sec4Chars2');
  $(sec4Words2).addClass('h2Words sec4Words2');
  
  let sec4P = sec4.find('.text-container p');
  let sec4splitP = new SplitText(sec4P, { type: "lines" });
  // let sec4WordsP = sec4splitP.words;
  let sec4LinesP = sec4splitP.lines;
  // $(sec4WordsP).addClass('h3Words sec4WordsP');
  $(sec4LinesP).addClass('pLines sec4LinesP');
  // ---------------------------------------------------------------
  // SECTION 5
  // ---------------------------------------------------------------
  let sec5 = $('#section5');
  let sec5H2 = sec5.find('h2');
  let sec5splitH2 = new SplitText(sec5H2, { type: "lines,words,chars" });
  let sec5Chars2 = sec5splitH2.chars;
  let sec5Words2 = sec5splitH2.words;
  let sec5Lines2 = sec5splitH2.lines;
  $(sec5Lines2).addClass('h2Lines');
  $(sec5Chars2).addClass('h2Chars sec5Chars2');
  $(sec5Words2).addClass('h2Words sec5Words2');
  
  let sec5P = sec5.find('.text-container p');
  let sec5splitP = new SplitText(sec5P, { type: "lines" });
  // let sec5WordsP = sec5splitP.words;
  let sec5LinesP = sec5splitP.lines;
  // $(sec5WordsP).addClass('h3Words sec5WordsP');
  $(sec5LinesP).addClass('pLines sec5LinesP');
  // ---------------------------------------------------------------
  // SECTION 6
  // ---------------------------------------------------------------
  let sec6 = $('#section6');
  let sec6H2 = sec6.find('h2');
  let sec6splitH2 = new SplitText(sec6H2, { type: "lines,words,chars" });
  let sec6Chars2 = sec6splitH2.chars;
  let sec6Words2 = sec6splitH2.words;
  let sec6Lines2 = sec6splitH2.lines;
  $(sec6Lines2).addClass('h2Lines');
  $(sec6Chars2).addClass('h2Chars sec6Chars2');
  $(sec6Words2).addClass('h2Words sec6Words2');
  
  let sec6P = sec6.find('.text-container p');
  let sec6splitP = new SplitText(sec6P, { type: "lines" });
  // let sec6WordsP = sec6splitP.words;
  let sec6LinesP = sec6splitP.lines;
  // $(sec6WordsP).addClass('h3Words sec6WordsP');
  $(sec6LinesP).addClass('pLines sec6LinesP');
  // ---------------------------------------------------------------
  // SECTION 7
  // ---------------------------------------------------------------
  let sec7 = $('#section7');
  let sec7H2 = sec7.find('h2');
  let sec7splitH2 = new SplitText(sec7H2, { type: "lines,words,chars" });
  let sec7Chars2 = sec7splitH2.chars;
  let sec7Words2 = sec7splitH2.words;
  let sec7Lines2 = sec7splitH2.lines;
  $(sec7Lines2).addClass('h2Lines');
  $(sec7Chars2).addClass('h2Chars');
  $(sec7Words2).addClass('h2Words');
  
  let sec7P = sec7.find('.text-container p');
  let sec7splitP = new SplitText(sec7P, { type: "lines" });
  // let sec7WordsP = sec7splitP.words;
  let sec7LinesP = sec7splitP.lines;
  // $(sec7WordsP).addClass('h3Words sec7WordsP');
  $(sec7LinesP).addClass('pLines sec7LinesP');
  // ---------------------------------------------------------------
  // SECTION 8
  // ---------------------------------------------------------------
  let sec8 = $('#section8');
  let sec8H2 = sec8.find('h2');
  let sec8splitH2 = new SplitText(sec8H2, { type: "lines,words,chars" });
  let sec8Chars2 = sec8splitH2.chars;
  let sec8Words2 = sec8splitH2.words;
  let sec8Lines2 = sec8splitH2.lines;
  $(sec8Lines2).addClass('h2Lines');
  $(sec8Chars2).addClass('h2Chars');
  $(sec8Words2).addClass('h2Words');
  
  let sec8P = sec8.find('.text-container p');
  let sec8splitP = new SplitText(sec8P, { type: "lines" });
  // let sec8WordsP = sec8splitP.words;
  let sec8LinesP = sec8splitP.lines;
  // $(sec8WordsP).addClass('h3Words sec8WordsP');
  $(sec8LinesP).addClass('pLines sec8LinesP');
  // ---------------------------------------------------------------
  // SETUP ELEMENTS
  // ---------------------------------------------------------------
  // gsap.set('.h2Chars', {y:'1.1em'});
}