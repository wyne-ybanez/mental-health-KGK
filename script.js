// Transparent Scroll Effect of Navbar from: https://stackoverflow.com/questions/29646622/set-bootstrap-navbar-transparency-on-scroll
function checkScroll(){
    var startY = $('.navbar').height() * 2; 

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}