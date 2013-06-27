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

function oknNavbar() {
	$(".affix").css("margin-left",function(){
		//return -(($(window).width() - $(".col-lg-12").width()) / 2);
	});

	$('#sidebar').affix({
	offset:{
		bottom: $(".jumbotron").height() + 13
		}
	});
}

$(document).ready(function() {
	oknFullScreen();
	oknThumbnail();
});

$(window).scroll(function() {
	oknNavbar();
});

$(window).resize(function() {
	oknFullScreen();
	oknThumbnail();
	oknNavbar();
});

$(".thumbnail").mouseover(function() {

});

