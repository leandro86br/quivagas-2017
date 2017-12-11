/* NAVIGATION VISIBLE ON SCROLL
*/
mainNav();

$(window).scroll(function () {
    mainNav();
});

function mainNav() {
    var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    if (top > 40) $('nav').stop().animate({
        "top": '0'
    });
    else $('nav').stop().animate({
        "top": '-75'
    });
}


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
