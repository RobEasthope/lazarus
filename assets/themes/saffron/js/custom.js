function oknFullScreen() {
	if ($(window).height() > $(".jumbotron-content-wrap").height()) {
		// Enlarge jumbotron to fullscreen
		$(".jumbotron").css("height",function(){
			return ($(window).innerHeight() - 12);
		});
	}
}

function oknSocialIcons() {
	if (($(".navbar-fixed-top").height() + $(".jumbotron").height() + 60) < $(window).height()) {
		//Offset content
		$(".social-icons-wrap").css("margin-top",function(){
			return (($(window).height() - ($(".navbar-fixed-top").height() + $(".jumbotron").height() + $(".social-icons-wrap").height())) / 4);
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
	oknSocialIcons();
});

$(window).scroll(function() {
	oknNavbar();
});

$(window).resize(function() {
	oknFullScreen();
	oknThumbnail();
	oknSocialIcons();
	oknNavbar();
});

$(".thumbnail").mouseover(function() {

});

