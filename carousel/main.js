/*!
 * main.js
 *
 */



(function ($, window, undefined) {

/**
 * addJsOnClass
 */
var addJsOnClass = (function () {
	var ON_CLASS = 'js-on';
	$('html').addClass(ON_CLASS);
})();


//window load
$(window).load(function(){

	/*
	 * color gradation作成
	 */
	$('.carousel').each(function () {
		var $this = $(this);
		if ($this.hasClass('tab')) { return false; }
		var item = $this.find($('.ui-carousel-item'));
		var itemLength = item.length;

		var colors = [];
		for (var i = 0; i < itemLength; i++){
			var r = 152;
			var g = 190;
			var b = 33;
			//r = Math.round(r * i / itemLength)
			//g = Math.round(g * i / itemLength)
			//b = Math.round(b * i / itemLength)

			r = Math.round(r + ((255-r) * (itemLength - i + 1) / itemLength) * 0.6);
			g = Math.round(g + ((255-g) * (itemLength - i + 1) / itemLength) * 0.6);
			b = Math.round(b + ((255-b) * (itemLength - i + 1) / itemLength) * 0.6);

			colors[itemLength - i] = 'rgb(' + r + ','+ g + ',' + b + ')';

			$(item[i]).css('background-color', colors[itemLength - i])
		}
	});
	
	
	/*
	 * liquidCarousel
	 */
	$('#sample1-1').liquidCarousel({
	});

	$('#sample1-2').liquidCarousel({
	    pos_x: 'center'
	,   autoPlayInterval: 2000
	,   autoPlayStartDelay: 0
	,   autoPlay: true
	,   autoPlayHoverStop: true
	});

	$('#sample1-3').liquidCarousel({
	    pos_x: 'right'
	,   easing: 'linear'
	,   speed: 4000
	,   autoPlayInterval: 0
	,   autoPlayStartDelay: 1000
	,   autoPlay: true
	});

	$('#fade').liquidCarousel({
		animate: 'fade'
	,   speed: 1500
	,   currentClass: 'nonHighlight'
	});
	
	$('#sample2-1').liquidCarousel({
	    loop: false
	});
	
	$('#sample2-2').liquidCarousel({
		speed: 0
	,   loop: false
	,   loopingDisabled: true
	});

	$('#sample2-3').liquidCarousel({
		loop: false
	,   group: 3
	});
	
	$('#sample2-4').liquidCarousel({
	    group: 3
	});
	
	$('#sample3').liquidCarousel({
	    vertical: true
	});
	(function () {
		var self = $('#sample3').data('carousel')
		,   control = $('#sample3-control')
		,   paginationItem = control.find($('.ui-carousel-paginationItem'))
		;

		paginationItem.on('click', function(e){
			self.moveBind(paginationItem.index(this) * self.group);
			e.preventDefault();
		});

		control.find($('.ui-carousel-prev')).on('click', function(e){
			self.moveBind(self.index - self.group, this);
			e.preventDefault();
		});

		control.find($('.ui-carousel-next')).on('click', function(e){
			self.moveBind(self.index + self.group, this);
			e.preventDefault();
		});

		control.find($('.ui-carousel-setNum')).on('click', function(e){
			self.moveBind(2, this);
			e.preventDefault();
		});

		//text「#sample3 index: index」表示
		$('#sample3Index').css('color', 'blue').text(self.index);
		$(window).on('click', function () {
			setTimeout(function () {
				$('#sample3Index').text(self.index);
			}, self.o.speed)
		})
	})();

	$('#sample4').liquidCarousel({
		pos_x: 'center'
		,autoPlayInterval: 2000
		,autoPlayStartDelay: 0
		,autoPlay: true
		,autoPlayHoverStop: true
	});
	$('#sample4').each(function () {
		var $this = $(this)
			,self = $this.data('carousel')
			,$showCurrentNoArea = $this.find('#sample4-showCurrentNoArea')
			,$showItemLengthArea = $this.find('#sample4-showItemLengthArea')
			,ltemLength = self.$item.length
			;

		function _init () {
			$showItemLengthArea.text(ltemLength);
			_setIndex();
			_eventify();
		}
		function _setIndex () {
			$showCurrentNoArea.text(self.index + 1);
		}
		function _eventify () {
			$this.on('carousel:moveend', function(e){
				_setIndex();
			});
		}
		_init ();
	});
});


})(jQuery, this);
