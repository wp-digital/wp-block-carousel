/* eslint-disable import/no-unresolved */

import domReady from '@wordpress/dom-ready';

import { BLOCK_CLASS_NAME } from './constants';

domReady(async () => {
	const elements = document.querySelectorAll(`.${BLOCK_CLASS_NAME} .swiper`);

	if (!elements.length) {
		return;
	}

	const { default: Swiper, Navigation, Pagination } = await import('swiper');

	await import('swiper/css');

	let isPaginationCSSLoaded = false;
	let isNavigationCSSLoaded = false;
	let isAutoplayCSSLoaded = false;

	window.wpd = window.wpd || {};
	window.wpd.blocks = window.wpd.blocks || {};
	window.wpd.blocks.carousel = window.wpd.blocks.carousel || [];

	const handler = async (element) => {
		const {
			slidesPerView = 'auto',
			spaceBetween = '0',
			hasPagination,
			hasNavigation,
			shouldAutoplay,
			shouldLoop,
		} = element.dataset;

		if (hasPagination === 'true' && !isPaginationCSSLoaded) {
			await import('swiper/css/pagination');

			isPaginationCSSLoaded = true;
		}

		if (hasNavigation === 'true' && !isNavigationCSSLoaded) {
			await import('swiper/css/navigation');

			isNavigationCSSLoaded = true;
		}

		if (shouldAutoplay === 'true' && !isAutoplayCSSLoaded) {
			await import('swiper/css/autoplay');

			isAutoplayCSSLoaded = true;
		}

		window.wpd.blocks.carousel.push(
			new Swiper(element, {
				slidesPerView: slidesPerView !== 'auto' ? parseInt(slidesPerView, 10) : slidesPerView,
				spaceBetween: parseInt(spaceBetween, 10),
				pagination:
					hasPagination === 'true'
						? {
								el: '.swiper-pagination',
						  }
						: false,
				navigation:
					hasNavigation === 'true'
						? {
								nextEl: '.swiper-button-next',
								prevEl: '.swiper-button-prev',
						  }
						: false,
				autoplay: shouldAutoplay === 'true',
				loop: shouldLoop === 'true',
				modules: [Navigation, Pagination],
			})
		);
	};

	if (typeof window.IntersectionObserver === 'undefined') {
		[].map.call(elements, handler);

		return;
	}

	const observer = new window.IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					return;
				}

				const element = entry.target;

				handler(element);
				observer.unobserve(element);
			});
		},
		{
			threshold: 0.75,
		}
	);

	elements.forEach((element) => {
		observer.observe(element);
	});
});
