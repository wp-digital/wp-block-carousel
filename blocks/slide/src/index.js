import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';
import icon from './icon';

registerBlockType('wpd/block-slide', {
	apiVersion: 2,
	supports: {
		className: false,
	},
	edit: Edit,
	save,
	icon,
	parent: ['wpd/block-carousel'],
});
