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

(function() {
	var fields = $('.field input');
	var modifier = 'field--filled';

	fields.each(function() {
		var field = $(this);
		if (field.val()) {
			field.parent().addClass(modifier);
		}

		field.on('focus', function() {
			field.parent().addClass(modifier);
		});

		field.on('blur', function() {
			if (!field.val()) {
				field.parent().removeClass(modifier);
			}
		});
	})
})();

(function() {
	$('.__js_phone-mask input').inputmask({"mask": "+7 (999) 999-9999"});
})();

(function() {
	const breakpoint = window.matchMedia( '(min-width:1200px)' );
	let mySwiper;
	const breakpointChecker = function() {
		// if larger viewport and multi-row layout needed
		if ( breakpoint.matches === true ) {
				// clean up old instances and inline styles when available
				if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
				// or/and do nothing
				return;
		// else if a small viewport and single column layout needed
		} else if ( breakpoint.matches === false ) {
				// fire small viewport version of swiper
				return enableSwiper();
		}
	};

	const sl = document.querySelector('.__js_catalog-carousel');

	if (sl) {
		const enableSwiper = function() {
			mySwiper = new Swiper ('.__js_catalog-carousel', {
				slidesPerView: 1,
				spaceBetween: 12,
				speed: 300,
				loop: true,
				pagination: {
					el: '.swiper-pagination',
				},
				breakpoints: {
					640: {
						slidesPerView: 2,
					},
					992: {
						slidesPerView: 3,
					}
				}
			});
		};

		breakpointChecker();

		$(window).on('resize', function() {
			breakpointChecker();
		});
	}
})();


(function() {
	var autoplayDelay = 5000;

	var heroSlider = new Swiper ('.__js_hero-slider', {
		slidesPerView: 1,
		spaceBetween: 0,
		speed: 300,
		loop: true,
		/*autoplay: {
   		delay: autoplayDelay,
 		},*/
		pagination: {
			el: '.hero__paginate',
			clickable: true,
        renderBullet: function (index, className) {
					return '<span class="' + className + '"><svg width="32" height="32" viewBox="0 0 32 32"><circle style="animation-duration: ' + (autoplayDelay + 50) + 'ms" cx="16" cy="16" r="15" fill="none"></circle></svg></span>';
        },
		},
		navigation: {
			nextEl: '.hero__nav-btn--next',
			prevEl: '.hero__nav-btn--prev',
		},
	});
})();

(function() {
	var table = $('.__js_adaptive-table');
	var buttons = $('.table__nav-btn');
	var btnCl = 'table__nav-btn--active';
	var th = $('.table th');
	var tr = $('.table tr');
	var cellCl = 'hidden';

	buttons.on('click', function() {
		var btn = $(this);
		var index = buttons.index(btn);

		btn.addClass(btnCl).parent().siblings().find('button').removeClass(btnCl);
		th.not(':first-child').addClass(cellCl);
		tr.find('td').not(':first-child').addClass(cellCl);
		th.eq(index + 1).removeClass(cellCl);
		tr.find('td:nth-child(' + (index + 1) + ')').removeClass(cellCl)
	});
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


