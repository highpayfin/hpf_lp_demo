window.addEventListener("load", function () {
	// Modal
	if (window.Modal) {
		var modalInstance = new Modal();
		modalInstance.listen();
	}

	// Input
	if (window.Input) {
		var inputInstance = new Input();
		inputInstance.listenner(Array.from(document.querySelectorAll("input")));
	}

	if (window.Fancybox) {
		Fancybox.bind("[data-fancybox]", {});
	}

	if (window.WOW) {
		new WOW().init();
	}


	// function swiperAutoHeight(swiper) {
	//   var wrapper = $(swiper.wrapperEl);
	//   var slides = $(swiper.slides);

	//   function setHeight() {
	//     wrapper.innerHeight("auto");
	//     var slideMaxHeight = Math.max.apply(
	//       null,
	//       slides
	//         .map(function () {
	//           return $(this).innerHeight();
	//         })
	//         .get(),
	//     );
	//     wrapper.innerHeight(slideMaxHeight);
	//   }
	//   setHeight();

	//   $(window).on("load resize", setHeight);
	// }

	// var swiperBlockClips = new Swiper(".block-clips .swiper", {
	//   effect: "coverflow",
	//   // grabCursor: true,
	//   centeredSlides: true,
	//   slidesPerView: "auto",
	//   // loop: true,
	//   initialSlide: 2,
	//   coverflowEffect: {
	//     rotate: 0,
	//     stretch: "-2%",
	//     depth: 120,
	//     modifier: 1,
	//     slideShadows: true,
	//   },
	//   // autoplay: {
	//   //   delay: 3000,
	//   //   disableOnInteraction: false,
	//   // },
	//   pagination: {
	//     el: ".block-clips .swiper-pagination",
	//     clickable: true,
	//   },
	// });

	const localStorageKey = 'high-pay-fin';

	(function() {
		var cookieBanner = $('.cookie-banner');

		var storageData = JSON.parse(localStorage.getItem(localStorageKey) || "{}");
		if (!storageData.cookieBannerHidden) {
			cookieBanner.show();
			localStorage.setItem(localStorageKey, JSON.stringify({ cookieBannerHidden: true }));
		} else {
			cookieBanner.hide();
		}

		cookieBanner.find('[close-banner]').click(function() {
			localStorage.setItem(localStorageKey, JSON.stringify({ cookieBannerHidden: true }));
			cookieBanner.slideUp(500);
		});
	})();


	$(".tabs-labels__item").each(function (index) {
		$(this).click(function () {
			$(this).parent().css("--active-label", index);

			$(".tabs-labels__item").removeClass("active");
			$(".tabs-labels__item").eq(index).addClass("active");

			$(".tabs-contents__item").removeClass("active");
			$(".tabs-contents__item").eq(index).addClass("active");

			$(".tabs-contents").height($(".tabs-contents__item.active > *").eq(0).innerHeight());
		});
	});
	function calcHeightTabs() {
		$(".tabs-contents").height($(".tabs-contents__item.active > *").innerHeight());
	}
	calcHeightTabs();
	$(window).on("resize", calcHeightTabs);


	// Accordion
	window.addEventListener('click', (e) => {
		var target = e.target
		var el = target.closest('.accordion__button')

		if (!el) return

		// Close all, open one
		// var currentAccordion = el.closest('.accordion')
		// var otherAccordions = document.querySelectorAll('.accordion')
		// otherAccordions.forEach(function(otherAccordion) {
		// 	if (currentAccordion.contains(otherAccordion) || !otherAccordion.classList.contains('open')) return
		// 	var accordionBody = otherAccordion.querySelector('.accordion__body')
		// 	var accordionContent = otherAccordion.querySelector('.accordion__content')

		// 	otherAccordion.classList.remove('open')
		// 	accordionBody.style.height = accordionContent.offsetHeight + 'px'
		// 	setTimeout(() => { accordionBody.style.height = '0px' }, 50)
		// 	setTimeout(() => { accordionBody.removeAttribute('style') }, 550);
		// })

		var accordion = el.closest('.accordion')
		var accordionBody = accordion.querySelector('.accordion__body')
		var accordionContent = accordion.querySelector('.accordion__content')

		if (accordion.classList.contains('open')) {
			accordion.classList.remove('open')
			accordionBody.style.height = accordionContent.offsetHeight + 'px'
			setTimeout(() => { accordionBody.style.height = '0px' }, 50)
			setTimeout(() => { accordionBody.removeAttribute('style') }, 550);
		} else {
			accordion.classList.add('open')
			accordionBody.style.height = '0px'
			setTimeout(() => { accordionBody.style.height = accordionContent.offsetHeight + 'px' }, 50)
			setTimeout(() => { accordionBody.style.height = 'auto' }, 550);
		}
	});


	// Dropdown  
	window.addEventListener('click', function (e) {
		const el = e.target.closest('.dropdown');

		const dropdownElems = document.querySelectorAll('.dropdown');
		dropdownElems.forEach(function (dropdownEl) {
			if (el && el.contains(dropdownEl) && !el.classList.contains('open')) {
				console.log('dropdownEl: ', dropdownEl);
				const dropdownContentEl = dropdownEl.querySelector('.dropdown__content');

				dropdownContentEl.style.display = 'block';
				setTimeout(function () {
					dropdownEl.classList.add('open');
				}, 100);
			} else {
				const dropdownContentEl = dropdownEl.querySelector('.dropdown__content');
				dropdownEl.classList.remove('open');
				setTimeout(function () {
					dropdownContentEl.style.display = 'none';
				}, 500);
			}
		});
	});


	// Menu
	(function () {
		var header = $(".header");
		var menu = $(".menu");
		var menuBurger = $(".menu-burger");

		menuBurger.click(function () {
			if (menuBurger.hasClass("open")) {
				menuBurger.removeClass("open");
				header.removeClass("menu-open");
				menu.removeClass("open");
			} else {
				menuBurger.addClass("open");
				header.addClass("menu-open");
				menu.addClass("open");
			}
		});
	})();

	$(window).on('click', function(e) {
		var anchorEl = e.target.closest('a[href*="#"]');

		if (anchorEl) {
			var url = new URL(anchorEl.href);
			var pathName = window.location.pathname === '/' ? '' : window.location.pathname;
			var anchorPathName = url.pathname === '/' ? '' : url.pathname;

			if (location.hostname === url.hostname && pathName === anchorPathName) {

				var targetId = url.hash.substring(1);
				var targetElement = $('#' + targetId);

				if (targetElement.length) {
					e.preventDefault();

					var header = $(".header");
					var menu = $(".menu");
					var menuBurger = $(".menu-burger");

					var scrollTop = targetElement.offset().top - header.outerHeight();

					menuBurger.removeClass("open");
					header.removeClass("menu-open");
					menu.removeClass("open");

					var delay = $(anchorEl).closest('.menu').length ? 500 : 0;

					setTimeout(function() {
						$('html, body').stop().animate({
							scrollTop: scrollTop
						}, 500);
					}, delay);
				}
			}
		}
	});


	// Everything below is animation
	if (window.gsap && window.ScrollTrigger) {
		gsap.registerPlugin(ScrollTrigger);
		// window.scrollTo({ top: 0 });
	} else {
		return;
	}

	// General block appearance animation
	(function() {
		document.querySelectorAll('[gsap-fade]').forEach(function(section) {
			var delay = section.getAttribute('gsap-fade');

			gsap.fromTo(section, {
				opacity: 0,
				scale: 0.75
			}, {
				opacity: 1,
				scale: 1,
				duration: 1,
				delay: delay ? +delay : 0,
				ease: "power3.out",
				scrollTrigger: {
					trigger: section,
					start: "top 85%",
				}
			});
		});
	})();

	// General card appearance animation
	(function() {
		var cardGroups = {};

		document.querySelectorAll('[gsap-card]').forEach(function(elem) {
			cardGroups[elem.getAttribute('gsap-card')] = '';
		})

		Object.keys(cardGroups).forEach(function(cardGroup) {
			gsap.fromTo(`[gsap-card="${cardGroup}"]`, { 
				opacity: 0, 
				y: 40,
				scale: 0.95 
			},
						{
				opacity: 1,
				y: 0,
				scale: 1,
				duration: 0.5,
				ease: "power2.out",
				stagger: 0.15,
				scrollTrigger: {
					trigger: `[gsap-card="${cardGroup}"]`,
					start: "top 70%",
				}
			});
		});
	})();

	// Header reveal animation
	(function() {
		if (!$('.header').hasClass('animation')) return

		gsap.to('.header', {
			y: 0,
			opacity: 1,
			duration: 1,
			delay: 1,
			ease: 'power2.out',
		});
	})();

	// First block reveal animation
	(function() {
		if (!$('.block-title').hasClass('animation')) return

		// window.scrollTo({ top: 0 });

		var tl = gsap.timeline();

		tl.to('.block-title .content__title-ticker', {
			opacity: 1,
			duration: 1,
			ease: 'power2.out',
		});
		tl.to('.block-title .content__title > h1', {
			opacity: 1,
			duration: .5,
			ease: 'power2.out',
		}, '-=.35');
		tl.to('.block-title .content__text', {
			y: 0,
			opacity: 1,
			duration: .5,
			ease: 'power2.out',
		}, '-=.35');
		tl.to('.block-title .content__btns', {
			opacity: 1,
			duration: .5,
			ease: 'power2.out',
		}, '-=.35');
		tl.to('.block-title .content__info', {
			opacity: .7,
			duration: .5,
			ease: 'power2.out',
		}, '-=.35');

		tl.to('.block-title .composition > *', {
			opacity: 1,
			scale: 1,
			duration: .5,
			stagger: .15,
			ease: "back.out(2)",
		});
	})();

	// Title animation
	(function() {
		// document.querySelectorAll('.block-title .content__title').forEach(function(parent) {
		//   const ticker = parent.querySelector('.content__title-ticker');
		//   const items = gsap.utils.toArray(parent.querySelectorAll('.ticker-item'));
		//   console.log(items);

		//   gsap.set(ticker, { height: items[0].offsetHeight });

		//   const mainTl = gsap.timeline({ repeat: -1 });

		//   items.forEach((item, i) => {
		//     const nextItem = items[i + 1];

		//     mainTl.to({}, { duration: 2 }); 

		//     if (nextItem) {
		//       // Animation transition to next item
		//       mainTl.to(ticker, {
		//         y: `-=${item.offsetHeight}`, // Shift the entire ticker up by the current block height
		//         height: nextItem.offsetHeight, // Smoothly change height to fit the next block
		//         duration: 0.8,
		//         ease: "power2.inOut"
		//       }).fromTo(nextItem, { opacity: 0 }, { opacity: 1 });
		//     } else {
		//       // Return to start (loop)
		//       mainTl.to(ticker, {
		//         y: 0,
		//         height: items[0].offsetHeight,
		//         duration: 0.8,
		//         ease: "power2.inOut"
		//       }).fromTo(nextItem, { opacity: 0 }, { opacity: 1 });
		//     }
		//   });
		// });

		document.querySelectorAll('.block-title .content__title').forEach(function(parent) {
			var titles = gsap.utils.toArray(parent.querySelectorAll('.content__title-ticker h1'));
			var mainTl = gsap.timeline({ repeat: -1, delay: 1 });

			var isMobile = parent.classList.contains('mobile');

			titles.forEach((title, i) => {
				var tl = gsap.timeline();

				tl.fromTo(title, 
					{ yPercent: 100, opacity: 0 },
					{ yPercent: -12, opacity: 1, duration: .5, ease: 'power2.out' })
				.to(title, {
					yPercent: -100, opacity: 0, duration: .5, delay: 2, ease: 'power2.in'
				}, '+=1')
				.set(title, {
					yPercent: 100, opacity: 0, duration: 0
				});

				// mainTl.add(tl, i == 0 ? 0 : isMobile ? '+=0.2' : '-=0.2');
				mainTl.add(tl, i == 0 ? 0 : '+=0.2'); 
			});
		});
	})();

	// Payment infrastructure block animation
	(function() {
		var tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".block-payment-infrastructure .payment__parent",
				start: "top 50%",
				toggleActions: "play none none none",
			}
		});

		tl.from('.block-payment-infrastructure .possibilities-3', {
			y: 200,
			opacity: 0, 
			duration: .5,
			ease: 'power2.out'
		});
		tl.from('.block-payment-infrastructure .possibilities-1', {
			y: 200,
			opacity: 0, 
			duration: .5,
			ease: 'power2.out'
		}, '-=.4');
		tl.from('.block-payment-infrastructure .possibilities-2', {
			y: 200,
			opacity: 0, 
			duration: .5,
			ease: 'power2.out'
		}, '-=.4');
		tl.from('.block-payment-infrastructure .payment__child.center', {
			y: 200,
			opacity: 0, 
			duration: .5,
			ease: 'power2.out'
		}, '-=.4');
		tl.from('.block-payment-infrastructure .merchant-card', {
			scale: .8,
			opacity: 0, 
			duration: .5,
			ease: 'power2.out'
		}, '-=.2');
		tl.from('.block-payment-infrastructure .transaction-card', {
			scale: .8,
			opacity: 0, 
			duration: .5,
			ease: 'power2.out'
		}, '-=.4');
	})();

	// Connect block animation
	(function() {
		var steps = document.querySelectorAll(".block-connect .step");
		steps.forEach(function(step, index) {
			var start = 'top 50%';
			var end = 'bottom 50%';

			if (index == 0) {
				start = 'top-=400% 50%';
			}
			if (steps.length - 1 == index) {
				end = 'bottom+=400% 50%';
			}

			ScrollTrigger.create({
				trigger: step,
				start,
				end,
				onToggle: function(self) {
					if (self.isActive) {
						step.classList.add('active');
					} else {
						step.classList.remove('active');
					}
				}
			});
		});
	})();

	// FAQ block animation
	(function() {
		var section = document.querySelector(".block-faq");

		if (section) {
			gsap.fromTo(`.accordion`, { 
				opacity: 0,
				y: 40,
				scale: 0.95 
			},
						{
				opacity: 1,
				y: 0,
				scale: 1,
				duration: 0.5,
				ease: "power2.out",
				stagger: 0.15,
				scrollTrigger: {
					trigger: section,
					start: "top 50%",
				}
			});
		}
	})();

	(function() {
		var section = document.querySelector(".block-form .wrapper");

		gsap.from(section.querySelectorAll(".circle"), {
			yPercent: 60,
			opacity: 0,
			scale: .6,
			duration: 1,
			stagger: 0.3,
			ease: "power3.out",
			scrollTrigger: {
				trigger: section,
				start: "top 70%",
			}
		});
	})();

	let mm = gsap.matchMedia();
	mm.add("(min-width: 769px)", function() {
		// Button hover effect
		(function() {
			document.querySelectorAll(".btn").forEach(function(btn) {
				const bg = btn.querySelector(".btn__bg");
				const tUp = btn.querySelector(".btn__text-up");
				const tStatic = btn.querySelector(".btn__text-static");

				const btnTl = gsap.timeline({ paused: true });

				btnTl
					.to(bg, { scale: 0.9, duration: 0.4 }, 0)
					.to(tStatic, { yPercent: 100, opacity: 0, duration: 0.4 }, 0)
					.fromTo(tUp, { rotateX: 50, skew: 20, yPercent: -120, opacity: 0 }, { rotateX: 0, skew: 0, yPercent: 0, opacity: 1, duration: 0.4 }, 0)

				btn.addEventListener("mouseenter", () => btnTl.play());
				btn.addEventListener("mouseleave", () => btnTl.reverse());

				btn.addEventListener("mousemove", (e) => {
					const rect = btn.getBoundingClientRect();
					const x = e.clientX - rect.left - rect.width / 2;
					const y = e.clientY - rect.top - rect.height / 2;
					gsap.to(btn, { x: x * 0.1, y: y * 0.4, duration: 0.2 });
				});

				btn.addEventListener("mouseleave", () => {
					gsap.to(btn, { x: 0, y: 0, duration: 0.2, ease: "elastic.out(1, 0.5)" });
				});
			});
		})();


		// Image animation
		(function() {
			// var cardSmallAnim = gsap.to([
			//   '.block-title .composition .card-1-small',
			//   '.block-title .composition .card-2-small',
			//   '.block-title .composition .card-3-small',
			//   '.block-title .composition .card-4-small'
			// ], {
			//   x: -10,
			//   y: -5,
			//   duration: 1,
			//   paused: true,
			//   ease: 'power2.out'
			// });

			// var cardBigAnim = gsap.to([
			//   '.block-title .composition .card-1-big',
			//   '.block-title .composition .card-2-big',
			//   '.block-title .composition .card-3-big',
			//   '.block-title .composition .card-4-big',
			//   '.block-title .composition .background'
			// ], {
			//   x: 10,
			//   y: 5,
			//   duration: 1,
			//   paused: true,
			//   ease: 'power2.out'
			// });

			// $('.block-title .composition').on('mouseenter', function() {
			//   cardSmallAnim.play();
			//   cardBigAnim.play();
			// });
			// $('.block-title .composition').on('mouseleave', function() {
			//   cardSmallAnim.reverse();
			//   cardBigAnim.reverse();
			// });

			var trigger = document.querySelector(".block-title-composition-trigger");

			trigger.addEventListener("mousemove", (e) => {
				var { clientX, clientY } = e;
				var { innerWidth, innerHeight } = window;

				var xPos = (clientX / innerWidth) - 0.5;
				var yPos = (clientY / innerHeight) - 0.5;

				gsap.to([
					'.block-title .composition .card-1-small',
					'.block-title .composition .card-2-small',
					'.block-title .composition .card-3-small',
					'.block-title .composition .card-4-small'
				], {
					x: xPos * innerWidth * 0.02,
					y: yPos * innerHeight * 0.04,
					duration: .5,
					ease: 'power2.out'
				});

				gsap.to([
					'.block-title .composition .card-1-big',
					'.block-title .composition .card-2-big',
					'.block-title .composition .card-3-big',
					'.block-title .composition .card-4-big',
					'.block-title .composition .background'
				], {
					x: xPos * innerWidth * -0.01,
					y: yPos * innerHeight * -0.02,
					duration: 1,
					ease: 'power2.out'
				});
			});
		})();


		// Dont-pay block animation
		(function() {
			var section = document.querySelector(".block-dont-pay");

			var cardImages = section.querySelectorAll(".pay-card"); // card-img-1, card-img-2
			if (section && cardImages.length) {
				gsap.fromTo(section.querySelectorAll(".pay-card-1"), {
					y: '30%'
				}, {
					y: "-40%",
					scrollTrigger: {
						trigger: section.querySelectorAll(".pay-cards"),
						start: "top-=50% center",
						end: "bottom+=450% center",
						scrub: 1,
					}
				}
						   );
				gsap.fromTo(section.querySelectorAll(".pay-card-2"), {
					y: '30%'
				}, {
					y: "-50%",
					scrollTrigger: {
						trigger: section.querySelectorAll(".pay-cards"),
						start: "top-=50% center",
						end: "bottom+=450% center",
						scrub: 1,
					}
				}
						   );
			}

			var leftChild = section.querySelector(".dont-pay__child.left");
			var cards = section.querySelectorAll(".info-card");
			if (section && leftChild && cards.length >= 3) {
				var scrollTl = gsap.timeline({
					scrollTrigger: {
						trigger: section,
						start: "top center",
						end: "+=120% center", 
						// pin: true,
						scrub: 1.5,
						// markers: true,
					}
				});

				scrollTl.fromTo(
					leftChild,
					{ y: "10%" },
					{ y: "-90%", ease: "none" },
					0
				);

				scrollTl.fromTo(cards[0], { scale: 1 }, { scale: 0.8, duration: 1 }, 0);

				scrollTl.fromTo(cards[1], { scale: 0.9 }, { scale: 1, duration: 0.5 }, 0);
				scrollTl.to(cards[1], { scale: 0.9, duration: 0.5 }, 0.5);

				scrollTl.fromTo(cards[2], { scale: 0.8 }, { scale: 1, duration: 0.5 }, 0.5);
			}
		})();

		// Who-are-we block animation
		(function() {
			var section = document.querySelector(".block-who-are-we");
			var wrap = document.querySelector(".block-who-are-we .info-cards");
			var card1 = document.querySelector(".block-who-are-we .info-card-1");
			var card2 = document.querySelector(".block-who-are-we .info-card-2");
			var card3 = document.querySelector(".block-who-are-we .info-card-3");

			if (section && wrap && card1 && card2 && card3) {
				gsap.set([card1, card2, card3], { x: "0%", rotation: 0, scale: 1 });
				gsap.set(card2, { scale: .9 });
				gsap.set(card3, { scale: .8 });

				var tl = gsap.timeline({
					scrollTrigger: {
						trigger: section,
						start: "top center",
						end: "bottom center",
						toggleActions: "play none reverse none",
					}
				});

				tl.to(card1, { x: "-25%", rotation: -5, scale: .9, duration: .5 }, 0)
				tl.to(card2, { x: "-55%", rotation: 10, scale: 1, duration: .5 }, 0)
				tl.to(card3, { x: "-90%", rotation: 20, scale: 1, duration: .5 }, 0);
			}

			// if (section && wrap && card1 && card2 && card3) {
			//   var scrollTl = gsap.timeline({
			//     scrollTrigger: {
			//       trigger: section,
			//       start: "center center",
			//       end: "+=2000",
			//       pin: true,
			//       scrub: 1,
			//       anticipatePin: 1,
			//       markers: true,
			//     }
			//   });

			//   scrollTl
			//     .set([card1, card2, card3], { x: "0%", rotation: 0, scale: 1 })
			//     .to(card1, { x: "-40%", rotation: -10, scale: 0.8, duration: 1 }, 0)
			//     .to(card2, { x: "-90%", rotation: 0, scale: 0.9, duration: 1 }, 0)
			//     .to(card3, { x: "-140%", rotation: 10, scale: 1, duration: 1 }, 0);
			// }
		})();

		// Form block animation
		(function() {
			var section = document.querySelector(".block-form .wrapper");

			var circles = [
				{ el: ".circle-1", speed: 0.04 },
				{ el: ".circle-2", speed: 0.10 },
				{ el: ".circle-3", speed: 0.28 }
			];

			section.addEventListener("mousemove", (e) => {
				var { clientX, clientY } = e;
				var { innerWidth, innerHeight } = window;

				// Calculate offset from center (-0.5 to 0.5)
				var xPos = (clientX / innerWidth) - 0.5;
				var yPos = (clientY / innerHeight) - 0.5;

				circles.forEach(circle => {
					var target = section.querySelector(`.circle${circle.el}`);
					if (target) {
						gsap.to(target, {
							x: xPos * innerWidth * circle.speed,
							y: yPos * innerHeight * circle.speed,
							duration: .5,
							ease: "power2.out"
						});
					}
				});
			});

			section.addEventListener("mouseleave", () => {
				circles.forEach(circle => {
					var target = section.querySelector(`.circle${circle.el}`);
					if (target) {
						gsap.to(target, {
							x: 0,
							y: 0,
							duration: .5,
							ease: "power3.inOut",
							overwrite: "auto"
						});
					}
				});
			});
		})();

		// Block animation
		(function() {})();

		return () => {
			console.log('Disabling GSAP');
		}; // code that runs when switching to mobile
	});
});
