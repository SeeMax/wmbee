import { 
  preLoader,
  vidLinks,
  mobileVidLinks,
  gsapRegisters,
  clickEvents,
  mobileNavSetup,
  animateSection,
  sectionsSetup,
  mobileAnimateSection,
  mobileSectionsSetup
} from './index.js';
 

// $(window).on('beforeunload', function() {
//   $(window).scrollTop(0);
// });

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

window.addEventListener('load', function() {
    preLoader();
    gsapRegisters();
    
    if (screen.width <= 1024){
      mobileSectionsSetup();
      mobileVidLinks();
      mobileAnimateSection();
    } else {
      sectionsSetup();
      vidLinks();
      animateSection();
    }
    
    
    
      
      
})

window.addEventListener('resize', function() {

});