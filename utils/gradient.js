// $(document).mousemove(function (event) {
// 	windowWidth = $(window).width();
// 	windowHeight = $(window).height();

// 	mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
// 	mouseYpercentage = Math.round(event.pageY / windowHeight * 100);

// 	$('.nombre').css('background', 'radial-gradient(circle at ' + mouseXpercentage + '% ' + mouseYpercentage + '%,  #a4c281ff, #e1ecd5)');
// });

const move = document.getElementById("move");

document.body.onpointermove = event => {
	const { clientX, clientY } = event;

	move.animate({
		left: `${clientX}px`,
		top: `${clientY}px`

	}, { duration: 1000, fill: "forwards" })

}