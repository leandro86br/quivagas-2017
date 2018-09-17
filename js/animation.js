/* Leandro Zambelli
*/

$(document).ready(function(){
            
    // Loading screen animation and duration
    function showPage() {
        
        $('.loading').animate({
            height: 0
        }, 500 );
        
    }
    
    setTimeout(function(){ showPage(); }, 500);
    
    // Loading screen on click 
    $('nav a, .js-btn-load, .js-footer-nav a').click(function(e){ 
        
        e.preventDefault();
        
        var url = $(this).attr('href');
        
        // Loading animation and transition
        $('.loading').animate({
            height: '100%',
        }, {
                queue: true,
                duration: 300,
                complete: function(){
                    setTimeout(function(){
                        window.location.href = url;
                    }, 500);
                }
            }
        );
    });
});