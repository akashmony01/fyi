// menu button toggler
// ======================================================
$(document).ready(function(){
    $(".mobileBtn").click(function(){
        $(".header").toggleClass('mobileActive');
    });
});

// onscroll add sticky class
// ======================================================
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var menuHeight = $(".header").outerHeight()

    if (scroll > menuHeight) {
        $(".header").addClass("scrolled");
        $(".main").addClass("scrolled");
        
        // if (!$(".header").hasClass("active")) {
        //     $(".header").addClass("slideIn");
        // }

    }else{
        $(".header").removeClass("scrolled");
        // $(".header").removeClass("slideIn");
        // $(".main").removeClass("scrolled");
    }
});


// hero carousel
$(document).ready(function(){   
    $('.heroContainer.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            }
        }
    });
});
