(function($){
    $(function(){
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            animateOut: 'fadeOut',
            autoplay:true,
            autoplayTimeout:8000,
            autoplayHoverPause:true,
            items: 1
        })
    });
}(jQuery))