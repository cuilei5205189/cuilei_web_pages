(function () {
	'use strict';
	// Your custom JavaScript goes here
	//ScrollReveal
	window.sr = ScrollReveal({
		reset: true
	})
	sr.reveal('.ui.block.story .content')
	sr.reveal('.ui.spec .statistic', 100)
	sr.reveal('.ui.spec .statistic', 100)
	sr.reveal('.ui.action .header', 100)
	sr.reveal('.ui.action .action', 100)

	// navbar
	$('.ui.navbar .search-icon > i')
		.click(function () {
			var icon = $(this)
			if (icon.text() === 'search') {
				icon.text('close').parents('.content').addClass('searching')
			} else {
				icon.text('search').parents('.content').removeClass('searching')
			}
		})

	$('.ui.sub.navbar')
		.visibility({
			type: 'fixed'
		})

	$('.ui.sub.navbar .menu .item')
		.click(function () {
			let id = $(this).attr('href')
			let element = $(id)
			let position = element.offset().top - 75
			console.log(position);

			$('html, body')
				.animate({
					scrollTop: position
				}, 500)
		})

	$('.ui.section')
		.visibility({
			observeChanges: false,
			once: false,
			offset: 120,
			onTopPassed: sectionHandle,
			onBottomPassedReverse: sectionHandle,
		})

	function sectionHandle() {
		let $currentSection = $(this)
		let index = $('.ui.section').index($currentSection)
		let $subNavMenuItem = $('.ui.sub.navbar .menu > .item')
		let $subNavMenuActiveItem = $subNavMenuItem.eq(index)

		$subNavMenuItem
			.filter('.active')
			.removeClass('active')

		$subNavMenuActiveItem
			.addClass('active')
	}

	//sidebar
	$('.ui.sidebar')
		.sidebar('setting', 'dimPage', false)
		.sidebar('attach events', ' .menu-icon')
		.sidebar('attach events', ' .close-icon')

	$('#navigation .menu')
		.clone()
		.appendTo('.ui.sidebar')

	//slick carousel
	$('.ui.hero.carousel')
		.slick({
			autoplay: true,
			autoplaySpeed: 2500,
			arrows: true,
			prevArrow: '<button class="ui prev button bottom"><i class="material-icons">chevron_left</i></button>',
			nextArrow: '<button class="ui next button bottom"><i class="material-icons">chevron_right</i></button>',

			responsive: [{
				breakpoint: 767,
				settings: {
					dots: true
				}
			}]
		});

	$('.ui.vertical.story .ui.carousel.for')
		.slick({
			asNavFor: '.ui.vertical.story .ui.carousel.nav',
			arrows: false,
			slidesToShow: 1,
		})

	$('#exterior-design .carousel.text')
		.slick({
			asNavFor: '#exterior-design .carousel.image',
			arrows: false,
			slidesToShow: 1,
		})

	$('#exterior-design .carousel.image')
		.slick({
			asNavFor: '#exterior-design .carousel.text',
			slidesToShow: 2,
			dots: true,
			prevArrow: '<button class="ui prev button"><i class="material-icons">chevron_left</i></button>',
			nextArrow: '<button class="ui next button"><i class="material-icons">chevron_right</i></button>',
			responsive: [{
				breakpoint: 767,
				settings: {
					slidesToShow: 1
				}
			}],
		})
	$('#interior-design .carousel.text')
		.slick({
			asNavFor: '#interior-design .carousel.image',
			arrows: false,
			slidesToShow: 1,
		})

	$('#interior-design .carousel.image')
		.slick({
			asNavFor: '#interior-design .carousel.text',
			slidesToShow: 1,
			dots: true,
			prevArrow: '<button class="ui prev button"><i class="material-icons">chevron_left</i></button>',
			nextArrow: '<button class="ui next button"><i class="material-icons">chevron_right</i></button>',
			responsive: [{
				breakpoint: 767,
				settings: {
					slidesToShow: 1
				}
			}],
		})

	$('.ui.vertical.story .ui.carousel.nav')
		.slick({
			asNavFor: '.ui.vertical.story .ui.carousel.for',
			slidesToShow: 3,
			dots: true,
			prevArrow: '<button class="ui prev button"><i class="material-icons">chevron_left</i></button>',
			nextArrow: '<button class="ui next button"><i class="material-icons">chevron_right</i></button>',
			centerMode: true,
			responsive: [{
				breakpoint: 767,
				settings: {
					slidesToShow: 1
				}
			}],
		})

	// bottom
	enquire.register("screen and (max-width: 767px)", {
		match: function () {
			$('.ui.bottom')
				.addClass('accordion')
				.accordion({
					selector: {
						title: '.header',
						trigger: '.header',
						content: '.content'
					}
				})

			$('.ui.sub.navbar .content')
				.addClass('accordion')
				.accordion({
					selector: {
						title: '.header',
						trigger: '.header',
						content: '.menu'
					}
				})
		},
		unmatch: function () {
			$('.ui.bottom')
				.removeClass('accordion')

			$('.ui.sub.navbar .content')
				.removeClass('accordion')
		},
	});

	//hero
	$('.ui.hero video.image')
		.visibility({
			once: false,
			continuous: true,
			onPassing: function (calculations) {
				if (calculations.percentagePassed >= 0.3) {
					$(this).get(0).pause()
				} else {
					$(this).get(0).play()
				}
			}
		})

})();
