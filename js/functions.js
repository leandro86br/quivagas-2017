/*
    Author: Leandro.Zambelli@yahoo.com
*/



/* SHOW BACK TOP BUTTON
*/

function backTopButton() {
    
    var $back_top = document.getElementsByClassName('back-top')[0];
    
    window.onscroll = function scrollFunction() {
        
        if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
            $back_top.classList.remove('hide-me');
        } else {
            $back_top.classList.add('hide-me');
        }
    }
}

backTopButton();


/* BACK TO TOP ANIMATION
*/

function backTop(){
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

backTop();