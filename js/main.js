$('.navbar-toggle.collapsed').on('click', function () {
	var target = $(this).data('target'),
		$target = $(target);
	
	if ($target.is(':visible')) {
		$target.stop().slideUp(150);
	} else {
		$target.stop().slideDown(300, function () {
			$(document).one('click', function (e) {
				$target.stop().slideUp(150);
				$(document).off(e);
			});
		});
	}
});