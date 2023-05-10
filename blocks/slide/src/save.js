import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

import { BLOCK_CLASS_NAME } from './constants';

export default function save() {
	const blockProps = useBlockProps.save({
		className: `swiper-slide ${BLOCK_CLASS_NAME}`,
	});
	const combinedBlockProps = useInnerBlocksProps.save(blockProps);

	return (
		<div {...combinedBlockProps} />
	);
}
