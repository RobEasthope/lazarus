$(document).ready(function() {
	if ($(window).height() > $(".jumbotron-content-wrap").height()) {
		$(".jumbotron").css("min-height",function(){
			return $(window).height();
		});

		$(".jumbotron-content-wrap").css("margin-top",function(){
			return ($(".jumbotron").height() - $(".jumbotron-content-wrap").height()) / 2;
		});

		$(".index-padding").css("padding-bottom",function(){
			return $(window).height();
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
		
		$(".index-padding").css("padding-bottom",function(){
			return $(window).height();
		});

	}
});