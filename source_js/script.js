var projects = [
	{
		name: "Online Gwent",
		description: "This is an online, multiplayer version of the card game Gwent, which appears in The Witcher 3. It allows two users to play a game of Gwent with each other. On the back end, this app runs on Node.js with Websockets for connecting users and maintaining state between two clients. The front-end was built with React and Sass.",
		link: "http://mysterious-garden-6341.herokuapp.com/",
		github: "https://github.com/chadfranzen/OnlineGwent"
	},
	{
		name: "Sprout Social: Message Approval",
		description: "I took point on the front-end development for Sprout's new message approval system. This project demanded a complex CRUD workflow that required building several new Backbone components and refactoring legacy code. Additionally, I designed several new, reusable React components that were added to Sprout's pattern library. This feature helped drive major new revenue for Sprout.",
		link: "http://sproutsocial.com/insights/message-approval-workflow/"
	},
	{
		name: "Sprout Social: Facebook Mentions",
		description: "I worked in a team of two to add Facebook page mentions to Sprout's message widget. This involved adding a Backbone view to an existing jQuery UI component, as well as handling several asynchronous API requests to look up Facebook page results and store frequently mentioned pages.",
		link: 'http://sproutsocial.com/insights/tag-facebook-pages-from-sprout/'
	},
	{
		name: "Personal Portfolio",
		description: "This website was built using a single-page, mobile-first design that I implemented with Foundation and SCSS, with Grunt and Compass for automating the build process. I wanted to emphasize trends in modern web design, such as a monochromatic color scheme and eye-catching hero images. It also uses Angular to make updating site content as simple as possible.",
		github: 'https://github.com/chadfranzen/PersonalSite2'
	},
	{
		name: "Bloodborne Skill Calculator",
		description: "This is a web app to help others plan their characters in the role-playing game Bloodborne. Users can enter their current and planned attributes through Backbone views, which flows into a Backbone model that calculates resulting character statistics and bubbles them back up to the view. Despite dealing with complex, interdependent data, I maintained an intuitive UI for the user.",
		link: 'bloodbornecalculator/bloodborne.html',
		github: 'https://github.com/chadfranzen/BloodborneCalculator'
	},
	{
		name: "Super Puzzle Ninja",
		description: "This is a Flash game that I made with the help of the Flixel library in May 2014. It's an action-puzzle game that implements a complex gameplay loop, sprite-based graphics, particle effects, saved high scores, and more while also accounting for performance.",
		link: 'superpuzzleninja/SuperPuzzleNinja.html',
		github: 'https://github.com/chadfranzen/SuperPuzzleNinja'
	},
	{
		name: "ASoIaF Character Generator",
		description: "This is a simple web tool that creates characters fit to live in the world of Westeros. Users can select gender, region, and house options, and then generate characters based on their specifications. I used JavaScript to handle character generation and jQuery to implement the UI, which involves a collapsible, dynamic bottom drawer.",
		link: 'asoiafgenerator/main.html',
		github: 'https://github.com/chadfranzen/ASOIAFGenerator'
	},
	{
		name: "Can One Fake Randomness?",
		description: "This is a poster project, entered into the 2014 UIUC Undergraduate Research Symposium, that I worked on with my classmates Rishbabh Marya and Robert Weber, along with Professor A.J. Hildebrand. The project involved developing statistical tests in Java and JavaScript, along with heavy use of the JExcel API for analyzing our experimental data. The poster won an Outstanding Presentation Award from Akuna Capital LLC.",
		link: 'assets/ursposter.pdf',
		github: 'https://github.com/chadfranzen/FakeRandomness'
	},
	{
		name: "EmEssPaint",
		description: "This is a non-copyright-infringing drawing program that I made in my high school Computer Science class. It was written in Java and makes use of the AWT API.",
		link: null,
		github: 'https://github.com/chadfranzen/EmEssPaint'
	},
	{
		name: "R. Kelly Saves the World",
		description: "This is a top-down, Robotron-style shooter starring everyone's favorite R&B artist that I wrote in Java during the summer of 2013. I extensively utilized Java's object-oriented capabilities to sensibly develop a wide variety of game entities, including several types of enemies and powerups.",
		link: null,
		github: 'https://github.com/chadfranzen/RKSTW'
	}
];

$(document).ready(function() {
	var $fade = $('.fade');

	$(document).foundation();

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
