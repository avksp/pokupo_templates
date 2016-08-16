_$( function() {
	var targets = _$('[rel~=tooltip]'),
		target  = false,
		tooltip = false,
		title   = false;
 
	targets.bind('mouseenter', function() {
		target  = _$(this);
		tip     = target.attr('title');
		tooltip = _$('<div class="b-tooltip"></div>');
 
		if(!tip || tip === '') {
			return false;
		}
 
		target
			.removeAttr('title');

		tooltip
			.css('opacity', 0)
			.html(tip)
			.appendTo('body');
 
		var init_tooltip = function() {
			if( _$(window).width() < tooltip.outerWidth() * 1.5 ) {
				tooltip.css( 'max-width', _$( window ).width() / 2 );
			} else {
				tooltip.css( 'max-width', 340 );
			}
 
			var pos_left = target.offset().left + ( target.outerWidth() / 2 ) - ( tooltip.outerWidth() / 2 ),
				pos_top  = target.offset().top + tooltip.outerHeight() + 20;
 
			if( pos_left < 0 ) {
				pos_left = target.offset().left + target.outerWidth() / 2 - 20;
				tooltip.addClass( 'left' );
			} else {
				tooltip.removeClass( 'left' );
			}
 
			if( pos_left + tooltip.outerWidth() > _$( window ).width() ) {
				pos_left = target.offset().left - tooltip.outerWidth() + target.outerWidth() / 2 + 20;
				tooltip.addClass( 'right' );
			} else {
				tooltip.removeClass( 'right' );
			}
 
			if( pos_top < 0 ) {
				var pos_top  = target.offset().top + target.outerHeight();
				tooltip.addClass( 'top' );
			} else {
				tooltip.removeClass( 'top' );
			}
 
			tooltip
				.css( {
					left: pos_left, 
					top: pos_top 
				})
				.animate({
					top: '-=10',
					opacity: 1 
				}, 200);
		};
 
		var remove_tooltip = function() {
			tooltip
				.animate({
					top: '+=10',
					opacity: 0 
				}, 50, function() {
					_$(this).remove();
				});
 
			target.attr( 'title', tip );
		};

		init_tooltip();

		_$(window).resize(init_tooltip);
 
		target.bind( 'mouseleave', remove_tooltip );
		tooltip.bind( 'click', remove_tooltip );
	});
});