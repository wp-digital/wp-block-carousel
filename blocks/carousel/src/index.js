import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';
import attributes from './attributes';
import icon from './icon';

import './style.scss';

registerBlockType('wpd/block-carousel', {
	apiVersion: 2,
	supports: {
		align: ['wide', 'full'],
		className: false,
	},
	attributes,
	providesContext: {
		'wpd/block-logos-scaleFactor': 'scaleFactor',
		'wpd/block-logos-backgroundColor': 'backgroundColor',
		'wpd/block-logos-color': 'color',
	},
	edit: Edit,
	save,
	icon,
});
