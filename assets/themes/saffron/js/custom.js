function oknFullScreen() {
	if ($(window).height() > $(".jumbotron-content-wrap").height()) {
		// Enlarge jumbotron to fullscreen
		$(".jumbotron").css("min-width",function(){
			return $(window).width() + 2;
		});
		$(".jumbotron").css("height",function(){
			return ($(window).innerHeight() - 12);
		});

		// Center jumbotron content vertically
		$(".jumbotron").css("padding-top",function(){
			return ((($(".jumbotron").height() ) - ($(".brand").height() + $(".jumbotron-title-wrap").height())) / 2) + 40 ;
		});

		// Center jumbotron on screen
		$(".jumbotron").css("margin-left",function(){
			return -(($(window).width() - $(".col-lg-12").width()) / 2);
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

