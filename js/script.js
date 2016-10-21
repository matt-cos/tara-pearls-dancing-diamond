//owl carousel
$(document).ready(function() {
	$("#product-carousel").owlCarousel({
		navigation : true,
		navigationText : ["prev","next"],
		rewindNav : true,
		scrollPerPage : false,
		pagination : false
	});
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
