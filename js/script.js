//owl carousel
$(document).ready(function() {
	$("#product-carousel").owlCarousel({
		navigation : true,
		navigationText : ['<i class="fa fa-angle-left fa-2x"></i>','<i class="fa fa-angle-right fa-2x"></i>'],
		rewindNav : true,
		scrollPerPage : false,
		pagination : false,
		mouseDrag : false,
		itemsDesktopSmall : [1200, 4],
		itemsTablet : [740, 3],
		itemsMobile : [500, 2]
	});
	//shop now buttons
	$(".owl-item").hover(
		function() {
			$(this).find("a").show();
		},
		function() {
			$(this).find("a").hide();
		}
		);
});

//smooth scroll all anchor links
$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});

//instafeed
var userFeed = new Instafeed({
	get: 'user',
	userId: 336135608,
	accessToken: '336135608.5ea0515.ec761dce19454a60a240b517d6ee14ec',
	limit: 6,
	template: '<a target="_blank" href="{{link}}" rel="ig" title="{{caption}}"><img class="instagram-image desktop-2 tablet-1 mobile-1 contained" src="{{image}}" /></a>'
});
userFeed.run();        

/*
$('#perfect-dance').parallax({
    positionX: '0'
});
*/

/*
$('#perfect-dance').parallax({
	imageSrc: 'https://lh3.googleusercontent.com/87M6X6hiETZcuH7ViT87KncCMr7nnSOJH1djalKHDDfEAjUb2yBbSqBtofso_ecls1YClzOFaoAldam9Iskh_A=s400'
});
*/

// JS media queries 
// in this case, being used for parallax bg positioning
function getWidth() {
	var windowWidth = $( window ).width();

	if ( windowWidth > 1220 ) {
		//console.log("Greater than or equal to 1221");
		
		$('#perfect-dance').parallax({
			positionX: '-205'
		});
	} else if ( windowWidth <= 1220 && windowWidth > 980 ) {
		//console.log("Between 1220 and 981 (inclusive)");

		$('#perfect-dance').parallax({
			positionX: '-300'
		});
	} else if ( windowWidth <= 980 && windowWidth > 740 ) {
		//console.log("Between 980 and 741 (inclusive)");

		$('#perfect-dance').parallax({
			positionX: '-400'
		});
	} else if ( windowWidth <= 740 && windowWidth > 500 ) {
		//console.log("Between 740 and 501 (inclusive)");

		$('#perfect-dance').parallax({
			positionX: '-550'
		});
	} else if ( windowWidth <= 500 ) {
		//console.log("Less than or equal to 500");
		
		$('#perfect-dance').parallax({
			positionX: '0'
		});
		$('#the-collection').parallax({
			positionX: '-1200'
		});
	}
}

$( window ).load(function() {
	getWidth();
});

$( window ).resize(function() {
	getWidth();
});

// hide back to top button if we are at the top
$(window).scroll(function(){
	var ScrollTop = ($(window).scrollTop());
	if (ScrollTop == 0) {
		$(".scrollup").fadeOut('slow');
	} else {
		$(".scrollup").fadeIn('slow');
	}
});



















