import {
	useBlockProps,
	useInnerBlocksProps,
	InnerBlocks,
	BlockIcon,
} from '@wordpress/block-editor';
import { Placeholder } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { BLOCK_CLASS_NAME } from './constants';
import { ALLOWED_BLOCKS }  from './constants/editor';

import './editor.scss';

export default function Edit() {
	const blockProps = useBlockProps({
		className: `${BLOCK_CLASS_NAME} swiper-slide`,
	});
	const combinedBlockProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		renderAppender: false,
		placeholder: (
			<Placeholder
				icon={<BlockIcon icon="format-image" />}
				label={__('Slide', 'wpd-blocks')}
				instructions={__('Use a block from allowed list.', 'wpd-blocks')}
			>
				<InnerBlocks.ButtonBlockAppender />
			</Placeholder>
		),
	});

	return (
		<div {...combinedBlockProps} />
	);
}
