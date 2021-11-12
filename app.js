$(function() {

    let header = $("#header");
    let headerH = header.innerHeight();
    let scrollPos = $(window).scrollTop();


    $(window).on("scroll load resize" , function() {
        scrollPos = $(this).scrollTop();
        if( scrollPos > headerH ) {
            header.show("slow").addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

        console.log(scrollPos);
    });




});
