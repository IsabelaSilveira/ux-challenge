jQuery(document).ready(function($){

    $(".menu__item").hover(function () {
        console.log("Hover no menu");
        $(this).children("ul").stop().delay(200).animate({height: "toggle", opacity: "toggle"}, 200);
    });
});
