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
		$fade.each(function(i, el) {
			var elPos = $(el).position().top + $(el).height(),
				windowPos = $(window).scrollTop() + $(window).height();

			if (elPos < windowPos + $(el).height() / 2) {
				$(el).fadeTo(400, 1);
			}
		});
	});
});
