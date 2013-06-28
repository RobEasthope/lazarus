function oknFullScreen() {
	if ($(window).height() > $(".jumbotron-content-wrap").height()) {
		// Enlarge jumbotron to fullscreen
		$(".jumbotron").css("height",function(){
			return ($(window).innerHeight());
		});
	}
}

function oknThumbnail() {
	$(".thumbnail").css("height",function() {
		return ($(".thumbnail").width());
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

