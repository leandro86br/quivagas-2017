/* Leandro Zambelli
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
         }, 500);
      }
  });
}

backTop();


/* BUSCA VAGAS DISPONIVEIS
*/

function buscaVagas(){

    var busca_vagas = document.getElementById('busca-vagas');

    busca_vagas.addEventListener('click', function(){ request('../vagas.txt') }, false);
    
    function request(url){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('output').innerHTML = xhr.responseText;
            }
        }
        
        xhr.open('GET', url, true);
        xhr.send();
        
        document.getElementById('output').innerHTML = 'Nenhuma vaga dispon&iacute;vel no momento';
        
    }
}

buscaVagas();

/*
jquery
$("#busca-vagas").click(function(){
    $("#output").on(load, "vagas.txt");
});
*/