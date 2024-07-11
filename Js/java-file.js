$(function () {

    var winH = $(window).height();
    upperH = $('.upper-bar').innerHeight();
    nevH = $('.navbar').innerHeight();
    lo1 = $('.loo').innerHeight();
    $('.slider .carousel-item').height(winH - (upperH + nevH));
    // to about
    $('.about  .container').height(winH - (upperH + nevH + lo1));
   

    $('.fatured-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') == 'all') {
            $('.shuffle-imgs .col-sm').css('opacity', 1)
        } else {
            $('.shuffle-imgs .col-sm').css('opacity', '0.3');
            $($(this).data('class')).parent().css('opacity', 1);
        }


    });
});