


$(document).ready(function(){
	$('.menu-open').click(function(){
       $('.mobile-nav').fadeToggle();
	});
	$('a.scroll-to').on('click',function () { 
		var elementClick = $(this).attr("href");
		var elementArr = elementClick.split("#");
		
		destination =  $("#"+ elementArr[1]).offset().top;
		
		$("html, body").animate( { scrollTop: destination }, 1100 );

		return false;
	});
	
	$('.number-roll').each(function (){
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 10000,
			easing: 'swing',
			step:function(now){
				$(this).text(Math.ceil(now));
			}
		});
	});
	$('.big-slider').slick({
		arrows:true,
		autoplay:true,
		autoplaySpeed:1500,
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>'
	});
});