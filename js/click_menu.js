// Kimmy Bird | Software Developer.
// when user click on links it scroll automatically to assigned section.

$(document).ready(function () {
    $(window).on("scroll", function () {
        var header_fade = $(window).scrollTop();
        var hero = $("#hero").height() - 200;
        if (header_fade >= hero) {
            $("#header").css({
                "top": 0 + "px"
            });
        }
        else {
            $("#header").css({
                "top": -100 + "px"
            });
        }
    });
});

// Scroll to certain sections when clicking on Menu links.
$("#header > .wrapper > .menu > ul > li").on("click", function (e) {
    $("#header > .head_wrap > .mobile_header > .menu > span").filter(".border_fade").removeClass("border_fade");
    $("#header > .wrapper").filter(".menu_fade").removeClass("menu_fade");
    e.preventDefault();
    var get_attr = $(this).find("a").attr("href");
    var target_value = $(get_attr).offset().top - 40;
    $("html,body").stop().animate({
        scrollTop: target_value
    }, 300);
});