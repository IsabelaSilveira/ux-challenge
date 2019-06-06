jQuery(document).ready(function($){
    $('.variation__link').click(function(e){
        e.preventDefault();
        $('.variation__link').removeClass('active');
        $(this).addClass('active');
    });

    $('.color__item').click(function(){
        $('.color__item').removeClass('active');
        $(this).addClass('active');
    });
});
