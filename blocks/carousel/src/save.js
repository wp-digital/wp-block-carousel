import { useBlockProps, useInnerBlocksProps, RichText } from '@wordpress/block-editor';

import { BLOCK_CLASS_NAME } from './constants';
import {
	TITLE_TAG,
	HAS_TITLE_DEFAULT,
	HAS_DESCRIPTION_DEFAULT,
	ALLOW_PAGINATION,
	HAS_PAGINATION_DEFAULT,
	ALLOW_NAVIGATION,
	HAS_NAVIGATION_DEFAULT,
	ALLOW_SCROLLBAR,
	HAS_SCROLLBAR_DEFAULT,
} from './constants/editor';

export default function save({ attributes }) {
	const {
		hasTitle = HAS_TITLE_DEFAULT,
		title,
		hasDescription = HAS_DESCRIPTION_DEFAULT,
		description,
		hasPagination = HAS_PAGINATION_DEFAULT,
		hasNavigation = HAS_NAVIGATION_DEFAULT,
		hasScrollbar = HAS_SCROLLBAR_DEFAULT,
	} = attributes;

	return (
		<div
			{...useBlockProps.save({
				className: BLOCK_CLASS_NAME,
			})}
		>
			<div className={`${BLOCK_CLASS_NAME}__header`}>
				{hasTitle && <RichText.Content tagName={TITLE_TAG} className={`${BLOCK_CLASS_NAME}__title`} value={title} />}
				{hasDescription && (
					<RichText.Content
						tagName="div"
						multiline="p"
						value={description}
						className={`${BLOCK_CLASS_NAME}__description`}
					/>
				)}
			</div>
			<div className="swiper">
				<div
					{...useInnerBlocksProps.save({
						className: 'swiper-wrapper',
					})}
				/>
				{ALLOW_PAGINATION && hasPagination && <div className="swiper-pagination" />}
				{ALLOW_NAVIGATION && hasNavigation && (
					<>
						<div className="swiper-button-prev" />
						<div className="swiper-button-next" />
					</>
				)}
				{ALLOW_SCROLLBAR && hasScrollbar && <div className="swiper-scrollbar" />}
			</div>
		</div>
	);
}
