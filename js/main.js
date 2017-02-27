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

$('.post-content').find('p').children('img').each(function (_,img) {
	var img_div = $('<div>', {
		class : 'img-div',
		style : 'background-image : url(' + img.src + ')',
		});
	$(img).before(img_div);
	img_div.append($(img));
	$(img).hide();
});