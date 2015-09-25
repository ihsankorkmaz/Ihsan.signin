$('.signin')
	.on('click', function() {
		
		$('.modal').fadeIn();

	});

$('.close')
	.on('click', function(){

		$('.modal').fadeOut();

	});

$('.submit').on('click', function(){

	$('input').addClass('error')
	.error("You need to fill USER and PASSWORD");

	});

$('input').on('click', function(){

	$(this).removeClass('error');
})