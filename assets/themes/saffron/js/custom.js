$(document).ready(function() {
	$(".jumbotron").css("height", function(){ 
    	return $(window).height();
	});

	$(".jumbotron-content-wrap").css("margin-top", function(){ 
    	return ($(".jumbotron").height() - $(".jumbotron-content-wrap").height()) / 2;
	});
});

$(window).resize(function() {
	$(".jumbotron").css("height", function(){ 
    	return $(window).height();
	});
});