$(document).ready(function() {
    $(".menu-btn").on("click", function(){
        $("nav").slideToggle(200);
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('nav').addClass("fixed-header");
        } else {
            $('nav').removeClass("fixed-header");
        }
    });
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    $('.single').slick({
        infinite: true,
        dots: true,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000
    });
});