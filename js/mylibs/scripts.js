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