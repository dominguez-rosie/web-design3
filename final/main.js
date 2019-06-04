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

	// $('#firstName').change(function(){
	// 	if ($(this).val()=='Please enter your first Name'){
	// 	alert('Please enter your name');
	// }
 // }

 	// $('#contactUS').validate({
 		
 	// });


 	function requiredField(input) {
    if (input.value.length < 1) {
      //red border
        input.style.borderColor = "#e74c3c";
      
    } else if (input.type == "email") {
      console.log("this is an email type");
      
        if (input.value.indexOf("@") != -1 && input.value.indexOf(".") != -1) {
          //green border
          input.style.borderColor = "#2ecc71";
        } else {
          //red border
          input.style.borderColor = "#e74c3c";
        }
      
    } else {
      //green border
        input.style.borderColor = "#2ecc71";
    }
}


//error messages function/// 
var createAllErrors = function() {
        var form = $( this ),
            errorList = $( "ul.errorMessages", form );

        var showAllErrorMessages = function() {
            errorList.empty();

            
            var invalidFields = form.find( ":invalid" ).each( function( index, node ) {

                
                var label = $( "label[for=" + node.id + "] "),
                  
                    message = node.validationMessage || 'Invalid value.';

                errorList
                    .show()
                    .append( "<li><span>" + label.html() + "</span> " + message + "</li>" );
            });
        };

        // Support Safari
        form.on( "submit", function( event ) {
            if ( this.checkValidity && !this.checkValidity() ) {
                $( this ).find( ":invalid" ).first().focus();
                event.preventDefault();
            }
        });

        $( "input[type=submit], button:not([type=button])", form )
            .on( "click", showAllErrorMessages);

        $( "input", form ).on( "keypress", function( event ) {
            var type = $( this ).attr( "type" );
            if ( /date|email|month|number|search|tel|text|time|url|week/.test ( type )
              && event.keyCode == 13 ) {
                showAllErrorMessages();
            }
        });
    };
    
    $( "form" ).each( createAllErrors );

});