import { applyFilters } from '@wordpress/hooks';

export const TITLE_TAG = applyFilters('wpd.block-carousel.title.tag', 'h3');

export const HAS_TITLE_DEFAULT = applyFilters('wpd.block-carousel.has_title.default', true);
export const HAS_DESCRIPTION_DEFAULT = applyFilters('wpd.block-carousel.has_description.default', false);
export const HAS_PAGINATION_DEFAULT = applyFilters('wpd.block-carousel.has_pagination.default', false);
export const HAS_NAVIGATION_DEFAULT = applyFilters('wpd.block-carousel.has_navigation.default', false);
export const HAS_SCROLLBAR_DEFAULT = applyFilters('wpd.block-carousel.has_scrollbar.default', false);

export const SLIDES_PER_VIEW_MAX = applyFilters('wpd.block-carousel.slides_per_view.max', 6);
export const SLIDES_PER_VIEW_DEFAULT = applyFilters('wpd.block-carousel.slides_per_view.default', 1);

export const ALLOW_PAGINATION = applyFilters('wpd.block-carousel.allow_pagination', true);
export const ALLOW_NAVIGATION = applyFilters('wpd.block-carousel.allow_navigation', true);
export const ALLOW_SCROLLBAR = applyFilters('wpd.block-carousel.allow_scrollbar', true);

export const ALLOWED_BLOCKS = ['wpd/block-slide'];
