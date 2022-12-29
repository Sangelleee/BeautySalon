$(function() {

	$('#my-menu').mmenu({
		extensions:[ 'widesceen','theme-black', 'effect-menu-slide', 'pagedim-black' ],
		navbar:{
			title: '<img src="img/logo-1.svg" alt="Салон красоты Смитлер">'
		},
		offCanvas:{
			position:'right'
		}
	});

	$('.reviews').owlCarousel({
		loop: true,
		items: 1,
		nav:false,
		smartSpeed: 700,
		autoHeight: true
	});
	
	$('.partners').owlCarousel({
		loop: true,
		smartSpeed: 700,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsiveClass:true,
		responsive:{
			0:{
				items: 1
			},
			768:{
				items: 2
			},
			992:{
				items: 3
			},
			1200:{
				items: 4
			}
		}
	});

	$('select').selectize({
		loop: true
	});	


	$(window).scroll(function(){
		if($(this).scrollTop()>$(this).height()){
			$('.top').addClass('active');
		} else {
			$('.top').removeClass('active');
		}
	});
	$('.top').click(function(){
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});


	//E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	api.bind('open:finish', function(){
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:before', function(){
		$('.hamburger').removeClass('is-active');
	});

	var api = $('my-menu').data('mmenu');

});

$(window).on('load', function(){
	$('.preloader').delay(1000).fadeOut('slow');
})
