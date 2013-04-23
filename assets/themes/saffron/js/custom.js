$(document).ready(function() {
	if ($(window).height() > $(".jumbotron-content-wrap").height()) {
		$(".jumbotron").css("min-height",function(){
			return $(window).height();
		});

		$(".jumbotron-content-wrap").css("margin-top",function(){
			return ($(".jumbotron").height() - $(".jumbotron-content-wrap").height()) / 2;
		});
	}
});

$(window).resize(function() {
	if ($(window).height() > $(".jumbotron-content-wrap").height()) {
		$(".jumbotron").css("min-height",function(){
			return $(window).height();
		});

		$(".jumbotron-content-wrap").css("margin-top",function(){
			return ($(".jumbotron").height() - $(".jumbotron-content-wrap").height()) / 2;
		});
	}
});