
$(document).ready(function(){
	$('#navParallax').localScroll(800);
	
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('#primeraGeneracion').parallax("50%", 0.2);
	$('#segundaGeneracion').parallax("50%", 0.1);
	$('#terceraGeneracion').parallax("50%", 0.1);
	$('#cuartaGeneracion').parallax("50%", 0.1);
	$('#quintaGeneracion').parallax("50%", 0.1);
	$('#sextaGeneracion').parallax("50%", 0.1);
	$('.bg').parallax("50%", 0.4);
	$('.bg2').parallax("50%", 0.4);
	$('.bg3').parallax("50%", 0.4);
	$('.bg4').parallax("50%", 0.4);
	$('.bg5').parallax("50%", 0.4);
	$('.bg6').parallax("50%", 0.4);

	
});


