$(document).ready(function () {
	$('.slider--team').slick({
		slidesToShow:1,
		dots: true,
		arrows: false
	});

	$('.slider--testimonials').slick({
		slidesToShow:1,
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000
	});
});

