/* ========================= */
/*        ACTIVE MENU        */
/* ========================= */
function activateMenu(event){
    var scrollPosition = $(window).scrollTop();
    $('#navbar a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition+500 && refElement.position().top + refElement.height() > scrollPosition) {
            $('#navbar ul li a').removeClass("active");
            currentLink.addClass("active");
            // $(currentLink.parent()).addClass("effect");
        }
        else{
            currentLink.removeClass("active");
        }
    });
}

$(document).ready(function () {
    $(document).on("scroll", activateMenu);
});

/* ========================= */
/*          CAROUSEL         */
/* ========================= */
$('.carousel').slick({
    // centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

/* Block the right click on the images */
$('img').bind('contextmenu', function(e) {
    return false;
}); 

