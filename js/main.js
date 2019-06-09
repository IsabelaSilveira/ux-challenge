$(document).ready(function($){

    $('.nav__trigger').click(function(){
        $('.navigation').toggleClass('active');
    });

    $('.trigger__lvl1 > a').on("click", function(e) {
        e.preventDefault();
        var submenu = $(this);
        submenu.next('.menu__dropdown').addClass('show');
        e.stopPropagation();
    });

    // $('.trigger__lvl2 > a').on("click", function(e) {
    //     e.preventDefault();
    //     var submenu = $(this);
    //     submenu.next('.menu__dropdown').addClass('show');
    //     e.stopPropagation();
    // });

    $('.menu__title > a').on("click", function(e) {
        e.preventDefault();
        $('.menu__dropdown').removeClass('show');
        e.stopPropagation();
    });

    menu__title

    $('.variation__link').click(function(e){
        e.preventDefault();
        $('.variation__link').removeClass('active');
        $(this).addClass('active');
    });

    $('.color__item').click(function(){
        $('.color__item').removeClass('active');
        $(this).addClass('active');
    });

    $('.color__item').click(function(){
        $('.color__item').removeClass('active');
        $(this).addClass('active');
    });

    $('.tab__link').click(function(){
        var id_btn = $(this).attr('data-tab');

        $('html').addClass('slideIn');
        $('html').removeClass('slideOut');
    
        $('.tab__link').removeClass('active');
        $(this).addClass('active');
    
        $('.tab__content').each(function(){
          var IDtab = jQuery(this).attr('id');
    
          if(IDtab == id_btn){
            $('.tab__content').removeClass('active');
            $(this).addClass('active');

            var tabContent = $(this).html();
            $('.modal__slide').append(tabContent);
          }
    
        });
    });

    // $('.tab__return').on('click', function(){
    //     // $(this).parent().removeClass('active');
    //     console.log("Clicou");
    //     $('html').removeClass('slideIn');
    //     $('html').addClass('slideOut');
    // });
    
});

$(document).on('click', '.tab__return', function() {
    console.log("Clicou");
    $('html').removeClass('slideIn');
    $('html').addClass('slideOut');
    

    setTimeout(function(){
        $('.modal__slide').html('');
        $('html').removeClass('slideOut');
    }, 300);
}) ;
