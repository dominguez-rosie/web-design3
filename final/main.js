$(document).ready(function() {
	


	$(".add").on("click", function() {
		$(".cart").removeClass('disabled');
		let currentTotal = $(".badge-info").text();
		$(".badge-info").text(+currentTotal + 1);
	});

	$('.js-modal-popper').click(function(){
		$('.modal').modal({
			backdrop: 'static'	
		})
	});


});