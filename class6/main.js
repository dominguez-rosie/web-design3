$(document).ready(function(){
	
	$('.carousel').carousel({
		interval: 5000, 
		keyboard: true
	});
	
	$('.carousel-pauser').click(function(){
		$('.carousel').carousel('pause');
	});

	$('.carousel').on('slid.bs.carousel',function(){
		console.log(event);
	});

	$('.js-modal-popper').click(function(){
		$('.modal').modal({
			backdrop: 'static'	
		})
	});
	
});