// Write any custom javascript functions here
$(document).ready(function() {
	var $fade = $('.fade');

	$(document).foundation();
	$('.carousel').slick({
		arrows: true,
		dots: true
	});

	$fade.fadeTo(0, 0.05);

	// learned from http://cssdeck.com/labs/jquery-fade-in-on-scroll
	$(document).scroll(function() {
		windowPos = $(window).scrollTop() + $(window).height();

		$fade.each(function(i, el) {
			var elPos = $(el).position().top + $(el).outerHeight();

			if (elPos < windowPos) {
				$(el).fadeTo(400, 1);
			}
		});

		$('nav').toggleClass('page-end',
			windowPos >= $('#contact').position().top + $('#contact').outerHeight()
		);
	
		$('nav').toggleClass('large', $(window).scrollTop() < 50);

	});
});
