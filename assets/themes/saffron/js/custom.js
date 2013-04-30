function oknFullScreen() {
	if ($(window).height() > $(".jumbotron-content-wrap").height()) {
		// Enlarge jumbotron to fullscreen
		$(".jumbotron").css("min-width",function(){
			return $(window).width();
		});

		$(".jumbotron").css("min-height",function(){
			//return $(window).height();
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
}

function oknThumbnail() {
	$(".thumbnail").css("min-height",function() {
		return ($(".thumbnail").width() / 1.2);
	});

	$(".thumbnail-rollover").css("min-height",function() {
		//return ($(".thumbnail").width() / 1.2);
	});

	$(".thumbnail").css(".background-size",function(){
		//return ($(".thumbnail").width(), $(".thumbnail").height());
	});
}

function oknThumbnailText() {
	$(".thumbnail-text-wrap").css("padding-top",function(){
		return ($(".thumbnail").height() - $(".thumbnail-text-wrap").height()) / 2;
	});
}

$(document).ready(function() {
	oknFullScreen();
	oknThumbnail();
});

$(window).resize(function() {
	oknFullScreen();
	oknThumbnail();

});

$(".thumbnail").mouseover(function() {
	oknThumbnailText();
});