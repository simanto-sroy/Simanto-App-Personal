$(document).ready(function(){
    
    /*------------ Navbar Shrink ------------*/
    $(window).on('scroll', function(){
        if($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        }
        else{
            $(".navbar").removeClass("navbar-shrink");
        }
    });

    /*------------ Video Popup --------------*/
    const videoSrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup").on('click',function(){
        if($(".video-popup").hasClass("open")){
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src","");
        }else{
            $(".video-popup").addClass("open");
            if($("#player-1").attr("src")== ''){
                $("#player-1").attr("src",videoSrc);
            }
        }
    });

    /*-------------- Features Owl Carousel --------------*/
    $('.features-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });
    
     /*-------------- Screenshot Owl Carousel --------------*/
     $('.screenshots-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
            }
        }
    });

    /*-------------- Testimonial Owl Carousel --------------*/
    $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:10,
        // autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    /*-------------- Team Section Owl Carousel --------------*/
    $('.team-carousel').owlCarousel({
        loop:true,
        margin:10,
        // autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    /*-------------------- Navbar Collapse ------------------*/
    $(".nav-link").on("click", function(){
        $(".navbar-collapse").collapse("hide");
    });
    
    /*--------------- Preloader ----------------*/
    
    $(window).on("load", function(){
        $(".preloader").fadeOut("slow");
    });

    /*------------------------------------------------------
        Toggle Theme Light & dark
    --------------------------------------------------------*/
    function toggleTheme(){
        if(localStorage.getItem("simanto-theme") !== null){
            if(localStorage.getItem("simanto-theme") === "dark"){
                $("body").addClass("dark");
            }else{
                $("body").removeClass("dark");
            }
        }
        updateIcon();
    }

    toggleTheme();
    $(".toggle-theme").on("click", function(){
        $("body").toggleClass("dark");
        if($("body").hasClass("dark")){
            localStorage.setItem('simanto-theme', 'dark');
        }else {
            localStorage.setItem('simanto-theme', 'light');
        }
        updateIcon();
    });

    function updateIcon(){
        if($("body").hasClass("dark")){
            $(".toggle-theme i").removeClass("fa-moon");
            $(".toggle-theme i").addClass("fa-sun");
        }else {
            $(".toggle-theme i").removeClass("fa-sun");
            $(".toggle-theme i").addClass("fa-moon");
        }
    }


});