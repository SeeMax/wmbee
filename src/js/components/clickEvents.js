import {
  menuToggle,
  smoothScrolling,
} from './index.js'

export let clickEvents = () => {
  
  // Mobile Nav Click Event
  let menuToggleTL = menuToggle();
  menuToggleTL.reversed(true);
  $('.menuToggle').on('click', function() {  
    if (menuToggleTL.reversed()) {
      menuToggleTL.play();
      gsap.set($('.wrapper'), {height:'100%', overflow:'hidden'});
    } else {
      gsap.set($('.wrapper'), {height:'auto', overflow:'visible'});
      menuToggleTL.reverse();
    }
	});

  $('a[href^="#"]').on('click', function(e) {
    
    e.preventDefault();
    console.log('hash it out');
    
    // IF IT"S MOBILE / IPAD OR SMALLER
    if (screen.width <= 1025){
      gsap.set($('.wrapper'), {height:'auto', overflow:'visible'});
      menuToggleTL.reverse();
      smoothScrolling($(this));
    } else {
      smoothScrolling($(this));
    }
  });
}