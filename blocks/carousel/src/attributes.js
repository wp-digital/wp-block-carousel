import { BLOCK_CLASS_NAME } from './constants';
import {
	HAS_TITLE_DEFAULT,
	HAS_DESCRIPTION_DEFAULT,
	SLIDES_PER_VIEW_MAX,
	SLIDES_PER_VIEW_DEFAULT,
	HAS_PAGINATION_DEFAULT,
	HAS_NAVIGATION_DEFAULT,
	HAS_SCROLLBAR_DEFAULT,
} from './constants/editor';

export default {
	hasTitle: {
		type: 'boolean',
		default: HAS_TITLE_DEFAULT,
	},
	title: {
		type: 'string',
		source: 'html',
		selector: `.${BLOCK_CLASS_NAME}__title`,
	},
	hasDescription: {
		type: 'boolean',
		default: HAS_DESCRIPTION_DEFAULT,
	},
	description: {
		type: 'string',
		source: 'html',
		selector: `.${BLOCK_CLASS_NAME}__description`,
	},
	slidesPerView: {
		type: 'integer',
		minimum: 1,
		maximum: SLIDES_PER_VIEW_MAX,
		default: SLIDES_PER_VIEW_DEFAULT,
	},
	hasPagination: {
		type: 'boolean',
		default: HAS_PAGINATION_DEFAULT,
	},
	hasNavigation: {
		type: 'boolean',
		default: HAS_NAVIGATION_DEFAULT,
	},
	hasScrollbar: {
		type: 'boolean',
		default: HAS_SCROLLBAR_DEFAULT,
	},
};
