$(document).ready(function () {
    $('.header-btn').click(function () {
        $('h1').fadeOut(300);
        $('header').css("background", "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../images/background.jpg)');");
        $(this).children().fadeOut(300);
        $(this).animate({ height: "0", width: "0"})
            .fadeOut();
        
    });
    $(".profile a img#himawan").hover(function () {
        $(this).closest(".img").css("z-index", 1);

    // this is where the popping out effect happens
        $(this).animate({ height: "200", width: "200", left: "-=55", top: "-=55" }, "fast");
        $(".desc-wrap").show();
    },
        function () {
            $(this).closest(".img").css("z-index", 0);
            $(this).animate({ height: "90", width: "90", left: "+=55", top: "+=55" }, "fast");
            $(".desc-wrap").hide();
        });
});