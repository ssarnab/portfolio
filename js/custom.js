$(function () {

    //adding class in Navbar,back to top,preloader js start

    $(window).on('load', function () {
        $(".preloader").delay(1500).fadeOut(500);
    });
    
    new WOW().init();
    
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var sticky = $(".navbar");

        if (scrolling > 70) {
            sticky.addClass("add-nav");
            sticky.addClass("add-nav ul li a");
            

        } else {
            sticky.removeClass("add-nav");
            sticky.removeClass("add-nav ul li a");
           
        }

        if (scrolling > 100) {
            back2top.fadeIn(500);
        } else {
            back2top.fadeOut(500);
        }
    });
    var back2top = $(".back-to-top");
    back2top.click(function () {
        html_body.animate({
            scrollTop: 0
        }, 900);
        return false;
    });
    //adding class in Navbar,back to top,preloader js End  
  
    
    //scrolling 
    var html_body = $('html, body');
$('.navbar a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top -0
            }, 1500);
            return false;
        }
    }
}); 
    
    //prograss Bar Start
    
   var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
    $(document).ready(function(){

	$('#bar1').barfiller({ duration: 3000 });
	$('#bar2').barfiller({ duration: 3000 });
	$('#bar3').barfiller({ duration: 3000 });
	$('#bar4').barfiller({ duration: 3000 });
	
});

    
//custom style venobox
       $('.venobox').venobox({
        framewidth: '',     
        frameheight: '',      
        border: '5px',             
        numeratio: true,   
        infinigall: true ,  
           spinner:'three-bounce',
    });
    
});
