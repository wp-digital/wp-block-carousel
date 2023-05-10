import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';
import icon from './icon';

import './style.scss';

registerBlockType('wpd/block-slide', {
	apiVersion: 2,
	supports: {
		className: false,
	},
	usesContext: [
		'wpd/block-logos-scaleFactor',
		'wpd/block-logos-backgroundColor',
		'wpd/block-logos-color',
	],
	edit: Edit,
	save,
	icon,
	parent: ['wpd/block-carousel'],
});
