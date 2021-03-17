'use strict';

var body = $('body');
var DURATION = 300;
var mobileBreakpoint = 992;
var windowWidth = $(window).width();

function setOverlay(cb) {
	var overlay = $('<div class="overlay"></div>');
	overlay.on('click', cb);
	return overlay;
}

function getScrollbarWidth() {
	var block = $('<div>').css({'height':'50px','width':'50px'});
	var indicator = $('<div>').css({'height':'200px'});

	$('body').append(block.append(indicator));

	var w1 = $('div', block).innerWidth();
	block.css('overflow-y', 'scroll');

	var w2 = $('div', block).innerWidth();
	$(block).remove();

	return (w1 - w2);
}

/* site menu */
(function () {
	var menu = $('.__js_menu');
	var menuOpenBtn = $('.__js_menu-open');
	var menuCloseBtn = menu.find('.__js_menu-close');

	$(window).on('resize', function() {
		windowWidth = $(window).width();

		if (windowWidth >= mobileBreakpoint) {
			menu.removeAttr('style');
		}
	});

	menuOpenBtn.on('click', function() {
		menu.fadeIn(DURATION);
		menuCloseBtn.on('click', closeMenu);
	});

	function closeMenu() {
		menu.fadeOut(DURATION);
		menuCloseBtn.off('click', closeMenu);
	}
})();



/* accordion */
/*(function () {
	var btn = $('.__js_accordion-btn');
	var activeClass = 'accordion__item--active';
	var accordionItem = $('.accordion__item');
	var hideClass = 'accordion__item--hide';
	var moreBtn = $('.__js_faq-more')

	btn.on('click', function() {
		var parent = $(this).parent();

		if (parent.hasClass(activeClass)) {
			$(this).next().slideUp(DURATION);
			parent.removeClass(activeClass);
		} else {
			parent.addClass(activeClass).siblings().removeClass(activeClass).find('.accordion__item-text').slideUp(DURATION);
			$(this).next().slideDown(DURATION);
		}

	});

	moreBtn.on('click', function(evt) {
		evt.preventDefault();
		accordionItem.removeClass(hideClass);
		$(this).remove();
	})
})();*/



/* Modal */
/*(function(){
	$(document).ready(function() {
		$(".fancybox").fancybox();

		$(".__js_service-modal").fancybox({
			smallBtn: false,
			toolbar: false

		});

		$('.__js_fancybox-close').on('click', function() {
			$.fancybox.close();
		});
	});
})();*/





/* Advantages slider */
/*(function(){
	var advantagesSlider = undefined;

	if ($('.__js_advantages-slider').length > 0) {
		initAdvantagesSlider();

		$(window).resize(function () {
			initAdvantagesSlider();
		});
	}

	function initAdvantagesSlider() {
		if (window.matchMedia('(max-width: 991px)').matches && advantagesSlider == undefined) {
			advantagesSlider = new Swiper('.__js_advantages-slider', {
				pagination: {
					el: '.advantages-pagi'
				},
				navigation: {
					prevEl: '.advantages-prev',
					nextEl: '.advantages-next'
				},
				speed: 300,
				slidesPerView: 'auto',
				spaceBetween: 40,
				loop: true
			});
		} else if (window.matchMedia('(min-width: 992px)').matches && advantagesSlider != undefined) {
			advantagesSlider.destroy();
			advantagesSlider = undefined;
		}
	}
})();*/


