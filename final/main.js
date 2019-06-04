$(document).ready(function() {
	
	$('.carousel').carousel({
        interval:   500, 
        keyboard:   true
    });

    $('.carousel-pauser').click(function(){
        $('.carousel').carousel('pause');
    });


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

	$('#firstName').change(function(){
		if ($(this).val()=='Please enter your first Name'){
		alert('Please enter your name');
	}
 }

});