$(document).ready(function($){
    //menu - master
    $('.nav__trigger').click(function(){
        $('.navigation').toggleClass('active');
        $('body').toggleClass('scrollNone');
    });

    //menu - nível 1
    $('.trigger__lvl1 > a').on("click", function(e) {
        e.preventDefault();
        var submenu = $(this);
        submenu.next('.menu__dropdown').addClass('show');
        submenu.parent('.trigger__lvl1').addClass('active');
        e.stopPropagation();
    });

    //menu - nível 2
    $('.trigger__lvl2').on("click", function(e) {
        e.preventDefault();
        $('.trigger__lvl2').removeClass('active');
        $(this).addClass('active');
        e.stopPropagation();
    });

    //menu - retornar
    $('.menu__title > a').on("click", function(e) {
        e.preventDefault();
        $('.menu__dropdown').removeClass('show');
        $('.trigger__lvl1').removeClass('active');
        e.stopPropagation();
    });

    //miniaturas do produto
    $('.thumb__item > img').click(function(){

        var urlThumb = $(this).attr('src');
        var thumb = $(this);

        $('.thumb__item').removeClass('active');
        thumb.parent('.thumb__item').addClass('active');

        $('.product__image > img').attr('src', urlThumb);
    });


    //opcoes do produto - personalizacao
    $('.variation__link').click(function(e){
        e.preventDefault();
        $('.variation__link').removeClass('active');
        $(this).addClass('active');
    });

    $('.color__item').click(function(){
        $('.color__item').removeClass('active');
        $(this).addClass('active');
    });

    //tabs - detalhes do produto
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

    //review filter
    $('.filter__link').click(function(e){
        e.preventDefault();
        var filter_id = $(this).attr('id');
    
        $('.filter__link').parent('.filter__item').removeClass('active');
        $(this).parent('.filter__item').addClass('active');
    
        $('.review__item').each(function(){
          var filter_val = jQuery(this).attr('data-filter');
    
          if(filter_val == filter_id){
            $('.review__item').hide();
            $(this).show();
          }
    
        });
    });
    
});

$(document).on('click', '.tab__return', function() {
    $('html').removeClass('slideIn');
    $('html').addClass('slideOut');
    

    setTimeout(function(){
        $('.modal__slide').html('');
        $('html').removeClass('slideOut');
    }, 700);
}) ;
