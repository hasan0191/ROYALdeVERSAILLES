$(document).ready(function(){
    




    $('.owl-carousel').owlCarousel({
        stagePadding: 70,
        loop:true,
        margin:5,
        // nav:true,
        responsive:{
            0:{
                items:1
            },
            575:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })


    //Top arrow area

        $('.top').click(function(){
            $('html, body').animate({
            scrollTop:0
            },1000);
        });


        $('.top').hide();

        $(window).scroll(function(){
            var ourWindow = $(this).scrollTop();

            if(ourWindow<500){
                $('.top').fadeOut();
            }else{
            $('.top').fadeIn();
            }
        });

  });