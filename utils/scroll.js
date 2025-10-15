document.querySelector('.scroll-down').addEventListener('click', function (e) {
	e.preventDefault();
	document.querySelector('#sobre-mi').scrollIntoView({
		behavior: 'smooth'
	});
});