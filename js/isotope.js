(function(){
	'use strict'
    var $container = $('.grid').isotope({
		itemSelector: '.grid__item',
		masonry: {
			columnWidth: 270,
			gutter: 10,
			horizontalOrder: true
		}
	});

	$('.button').click(function(){
		var $this = $(this);
		if ( !$this.hasClass('is-checked') ) {
			$this.parents('.filters-button-group').find('.is-checked').removeClass('is-checked');
			$this.addClass('is-checked');
		}
	var selector = $this.attr('data-filter');
		$container.isotope({  itemSelector: '.grid__item', filter: selector });
		return false;
	});
})();
