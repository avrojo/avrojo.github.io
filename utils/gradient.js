$(document).mousemove(function (event) {
	windowWidth = $(window).width();
	windowHeight = $(window).height();

	mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
	mouseYpercentage = Math.round(event.pageY / windowHeight * 100);

	$('.nombre').css('background', 'radial-gradient(circle at ' + mouseXpercentage + '% ' + mouseYpercentage + '%,  #a4c281ff, #e1ecd5)');
});