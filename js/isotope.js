(function(){
	'use strict'
    var $container = $('.gallery').isotope({
		itemSelector: '.gallery__item',
		masonry: {
			columnWidth: 270,
			gutter: 10,
			horizontalOrder: true
		}
	});

	$('.filters__button').click(function(){
		var $this = $(this);
		if ( !$this.hasClass('filters__button--checked') ) {
			$this.parents('.filters').find('.filters__button--checked').removeClass('filters__button--checked');
			$this.addClass('filters__button--checked');
		}
	var selector = $this.attr('data-filter');
		$container.isotope({  itemSelector: '.gallery__item', filter: selector });
		return false;
	});
})();
