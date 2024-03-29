var projects = [
	{
		name: "Google Workspace: Meet-in-Editors",
		description: "As part of the Google Workspace team I built video calling integrations for Docs, Sheets, and Slides that have been used by 1M+ daily. These features allow users to bring rich Meet video conferencing experiences from within Workspace editors. This required engaging with cross-functional partners to develop a reusable iframe-based picture-in-picture video API. In addition to developing much of the UI for this feature, I also created performance pipelines to monitor the impact of video calling on editor latency metrics. These features headlined Google I/O 2021.",
		link: "https://cloud.google.com/blog/products/workspace/next-evolution-of-collaboration-for-google-workspace",
	},
	{
		name: "Google: Visual Analytics and Key Visualizer",
		description: "As part of the Visual Analytics team at Google I designed and built novel, performant web visualizations for Google's planet-scale networking and database systems. I acted as Tech Lead for Key Visualizer, which enabled critical customers (Snap, Spotify, et al.) to diagnose performance bottlenecks in GCP databases like Bigtable. I led the effort to bring Key Visualizer to Google Cloud Platform, which required significant UI work and completely overhauling our codebase for i18n support. I also developed new algorithms and implemented advanced Angular optimizations to achieve 100x performance increases on large datasets.",
		link: "https://cloud.google.com/bigtable/docs/keyvis-overview",
	},
	{
		name: "Undergraduate Thesis",
		description: "At UIUC I worked as part of Prof. Ranjitha Kumar's Data Driven Design research group to mine crowdsourced design and interaction data for 9.7K Android apps, and design a system for usability testing arbitrary Android apps at scale. I extended the OpenSTF project to allow Amazon Mechanical Turk and Upwork workers to remotely control Android phones, allowing us to run automated usability tests and collect rich interaction data. I then built web apps and several visualizations for aggregating and analyzing the collected data. The work was published in two papers in UIST 2017: \"Rico: A Mobile App Dataset for Building Data-Driven Design Applications\" and \"ZIPT: Zero-Integration Performance Testing of Mobile App Designs\".",
	},
	{
		name: "Teaching Assistant: CS498",
		description: "At UIUC I was a teaching assistant for CS498: The Art of Web Programming. This advanced undergraduate source taught modern full-stack web development as well as design and UX principles. As a TA I developed exam questions, created VMs and starter code for programming projects, assisted students with technical questions, and wrote and delivered questions on technical projects.",
	},
	{
		name: "Google Internship: Search Answers",
		description: "As a Google intern I designed and implemented a dashboard for debugging and analyzing NLP-based Knowledge Graph answers in search results. This required creating logging pipelines to surface data from across Google's enormous search stack, and then apply heuristics to produce actionable insights about search quality.",
	},
	{
		name: "Sprout Social: Message Approval",
		description: "I took point on the front-end development for Sprout's new message approval system. This project had several complex user flows that required building many new Backbone components and refactoring legacy code. Additionally, I designed several new, reusable React components that were added to Sprout's pattern library. This feature helped drive major new revenue for Sprout.",
		link: "http://sproutsocial.com/insights/message-approval-workflow/"
	},
	{
		name: "Sprout Social: Facebook Mentions",
		description: "I worked in a team of two to add Facebook page mentions to Sprout's message widget. This involved adding a Backbone view to an existing jQuery UI component, as well as handling several asynchronous API requests to look up Facebook page results and store frequently mentioned pages.",
		link: 'http://sproutsocial.com/insights/tag-facebook-pages-from-sprout/',
	},
	{
		name: "Can One Fake Randomness?",
		description: "This is a poster project, entered into the 2014 UIUC Undergraduate Research Symposium, that I worked on with my classmates Rishbabh Marya and Robert Weber, along with Professor A.J. Hildebrand. The project involved developing statistical tests in Java and JavaScript, along with heavy use of the JExcel API for analyzing our experimental data. The poster won an Outstanding Presentation Award from Akuna Capital LLC.",
		link: 'assets/ursposter.pdf',
		github: 'https://github.com/chadfranzen/FakeRandomness'
	},
];

$(document).ready(function() {
	var $fade = $('.fade');

	$(document).foundation();

	$fade.fadeTo(0, 0.05);

	// learned from http://cssdeck.com/labs/jquery-fade-in-on-scroll
	$(document).scroll(() => updateFade(true));
	updateFade(false);
});

function updateFade(animate) {
	var $fade = $('.fade');

	windowPos = $(window).scrollTop() + $(window).height();

	$fade.each(function(i, el) {
		var elPos = $(el).position().top + $(el).outerHeight();

		if (elPos < windowPos) {
			$(el).fadeTo(animate ? 400 : 0, 1);
		}
	});

	$('nav').toggleClass('page-end',
		windowPos >= $('#contact').position().top + $('#contact').outerHeight()
	);

	$('nav').toggleClass('large', $(window).scrollTop() < 50);

	$('#nav-list').foundation('reflow');
	$('#nav-list').foundation('calcPoints');
}

angular.module('app',[])
.controller('Projects', ['$scope', function($scope) {
	$scope.projects = projects;
}]).directive('slickCarousel', function() {
	return function($scope, element, attrs) {
		if ($scope.$last) {
			$('.carousel').slick({
				arrows: true,
				dots: true,
				speed: 300
			});
		}
	};
});
