var handleContent = function () {
	var preloader = $('.preloader');
	var ayaxLoader = '<img class="ajax-loader" src="/img/ajax-loader.gif" />';
	
	$('.btn').click(function(e){
		e.preventDefault();
		var btn = $(this);
		$.ajax({
			url: "data/user.json",
			type: "GET",
			data: {"id": 1},
			beforeSend: function(){
				btn.prop('disabled','disabled'); // skinuti property
			//	btn.unbind('click');   			 // ili skinuti event
				preloader.empty();
				preloader.append(ayaxLoader);
			},
			success: function(result, status, xhr){
				//console.log(result);
				var text;
				$.each(result, function(key,value){
					text = "<tr><td>" + value.id + "</td>";
					text += "<td>" +  value.name + "</td>";
					text += "<td>" +  value.username + "</td>";
					text += "<td>" + value.email + "</td></tr>";
					$(".tbody").append(text);
					
				});
				console.log(btn);
			},
			error:function(xhr, status, error){
				if(error){
					preloader.empty();
					preloader.text("An error occured while poccessing your requesr! Please try again later!");
					setTimeout(function() {
						preloader.empty();
					},5000);
				}
			},
			complete: function(result){
				preloader.empty();
			}
		});
	});
};

var App = function () {
    return {
        init: function (element){
			handleContent();
        },
    }
}(); 

