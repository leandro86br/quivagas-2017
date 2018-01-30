/* NAVIGATION VISIBLE ON SCROLL
*/


/* FIXED NAV OVERLAY EFFECT
*/

mainNav();

$(window).scroll(function () {
    mainNav();
});

function mainNav() {
    var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    if (top > 300) {
        $('nav').removeClass('bg-nav-overlay');
        $('nav').addClass('bg-black');
    }
    else {
        $('nav').removeClass('bg-black');
        $('nav').addClass('bg-nav-overlay');
    }
}


/* NAVBAR-COLLAPSE CLOSE ON NAV-LINK CLICK
*/

$(document).click(function(e) {
	if (!$(e.target).is('.navbar-collapse')) {
    	$('.collapse').collapse('hide');	    
    }
});


/* ONE PAGE SCROLL
*/

onePage();

function onePage(){
  $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if( target.length ) {
         event.preventDefault();
         $('html, body').stop().animate({
             scrollTop: target.offset().top
         }, 1000);
      }
  });
}
