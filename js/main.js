// mobile nav
$('#btn-menu').click(function(){
	$('.nav-main').slideToggle();
});

//panels
$('.panel-content').hide();
$('.panel-title').click(function(){
	//$('.panel-content').slideToggle();
	$(this).next().slideToggle();
});

//sticky
$(document).ready(function(){
    $('.nav-internal').sticky({topSpacing:0});
  });