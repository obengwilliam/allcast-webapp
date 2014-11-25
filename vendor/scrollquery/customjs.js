$(function(){
	$(document).ready(function(){

		//The point at which the background of the nav should change color
		$(window).scroll(function(){
			if ($(window).scrollTop()>500){
				$('.navbar-default').addClass('navbar-color');
			}
			else{
				$('.navbar-default').removeClass('navbar-color');
			};
		});	
	});
})();