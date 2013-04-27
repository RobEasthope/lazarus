function oknFullScreen() {
	if ($(window).height() > $(".jumbotron-content-wrap").height()) {
		// Enlarge jumbotron to fullscreen
		$(".jumbotron").css("min-width",function(){
			return $(window).width();
		});

		$(".jumbotron").css("min-height",function(){
			return $(window).height();
		});

		// Center jumbotron content vertically
		$(".jumbotron-content-wrap").css("margin-top",function(){
			return ($(".jumbotron").height() - $(".jumbotron-content-wrap").height()) / 2;
		});

		// Center jumbotron on screen
		$(".jumbotron").css("margin-left",function(){
			return -(($(window).width() - $(".col-span-12").width()) / 2);
		});
	}
};

$(document).ready(function() {
	oknFullScreen();
});

$(window).resize(function() {
	oknFullScreen();
});