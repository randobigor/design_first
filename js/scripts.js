var audio;
document.addEventListener("DOMContentLoaded", () => {
    audio = new Audio();
    audio.src = "../assets/audio.mp3"
    audio.volume = 0;
})

function some(e) {
    document.querySelector("video").play();
    if (audio.volume == 0) {
        audio.play();
        e.innerHTML = "<i class='fas fa-volume-mute'></i>"
        audio.volume = 1;
    } else {
        e.innerHTML = "<i class='fas fa-volume-up'></i>"
        audio.volume = 0;
    }
}


(function($) {
    "use strict";

    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });
    $(".js-scroll-trigger").click(function() {
        $(".navbar-collapse").collapse("hide");
    });

    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    navbarCollapse();
    $(window).scroll(navbarCollapse);
})(jQuery);