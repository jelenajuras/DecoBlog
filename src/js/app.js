var handleLogin = function () {
	
	//Get login form element
	var loginForm = $('#loginForm');
	
	//Add submit even listener to login form
	loginForm.on('submit',function(e){
		e.preventDefault();
		$(this).parsley({
			errorsWrapper:'<div class="text-danger"></div>',
			erroeTemplate: '<span></span>'
		}).validate();
		if($(this).parsley().isValid()){
			var data = $(this).serialize();
			
			console.log(data);
		}
	});
};

var App = function () {
    return {
        init: function (element){
			handleLogin();
        },
    }
}(); 

