import { 
  animateSection,
} from './index.js';

export let preLoader = () => {
  let tl = new gsap.timeline({
    defaults:{
      duration:0.5,
    },
    
    // ease:'power4.out',
    onComplete: function(){
      // alert('out');
      $('#preloader').remove();
    }
  })
  tl.to('.preloaderSVG', {scale:0},"loadOut");
	tl.to('#preloader', {opacity:0,duration:0.3},"loadOut2");
}

export let vidLinks= () => {
	let thisSrc = $('.iframeHolder').attr('data-desktop-vid');
  // console.log(thisSrc);
  $('.iframeEmpty').attr('src', 'https://player.vimeo.com/video/'+thisSrc+'?h=25f334e956&title=0&byline=0&portrait=0') 
}

export let mobileVidLinks= () => {
	let thisSrc = $('.iframeHolder').attr('data-mobile-vid');
  // console.log(thisSrc);
  $('.iframeEmpty').attr('src', 'https://player.vimeo.com/video/'+thisSrc+'?h=25f334e956&title=0&byline=0&portrait=0') 
}

export let smoothScrolling = (theLink) => {
  
  let target = $(theLink).attr('href');
  let headerHeight = $('.header').outerHeight(); 
  gsap.to(window, {duration:.5, ease: 'circ.out', 
    scrollTo:{
      y:target, 
      // Activate if Header Is Fixed
      // offsetY:headerHeight
    }
  });
  return false;
}

export let mobileNavSetup = () => {
  gsap.set('nav a', {opacity:0, x:'50%'});
}
