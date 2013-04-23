$(document).ready(function() {
	$(".jumbotron").css("height", function(){ 
    return $(window).height();
	});
});

$(window).resize(function() {
	$(".jumbotron").css("height", function(){ 
    return $(window).height();
	});
});