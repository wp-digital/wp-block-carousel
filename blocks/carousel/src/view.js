/* eslint-disable import/no-unresolved */

import domReady from '@wordpress/dom-ready';

import { BLOCK_CLASS_NAME } from './constants';

domReady(async () => {
	const elements = document.querySelectorAll(`.${BLOCK_CLASS_NAME} .swiper`);

	if (!elements.length) {
		return;
	}

	const { default: Swiper } = await import('swiper');

	await import('swiper/css');

	let Navigation = null;
	let Pagination = null;
	let Autoplay = null;

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
		const modules = [];

		if (hasNavigation === 'true') {
			if (Navigation === null) {
				({ Navigation } = await import('swiper'));

				await import('swiper/css/navigation');
			}

			modules.push(Navigation);
		}

		if (hasPagination === 'true') {
			if (Pagination === null) {
				({ Pagination } = await import('swiper'));

				await import('swiper/css/pagination');
			}

			modules.push(Pagination);
		}

		if (shouldAutoplay === 'true') {
			if (Autoplay === null) {
				({ Autoplay } = await import('swiper'));

				await import('swiper/css/autoplay');
			}

			modules.push(Autoplay);
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
				autoplay: shouldAutoplay === 'true' ? { delay: 3000 } : false,
				loop: shouldLoop === 'true',
				modules,
			})
		);
	};

	if (typeof window.IntersectionObserver === 'undefined') {
		[].map.call(elements, handler);

		return;
	}

	const observer = new window.IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) {
				return;
			}

			const element = entry.target;

			handler(element);
			observer.unobserve(element);
		});
	});

	elements.forEach((element) => {
		observer.observe(element);
	});
});
