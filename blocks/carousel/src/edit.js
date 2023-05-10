import { range } from 'lodash';

import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
	RichText,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	ToggleControl,
	__experimentalRadio as Radio,
	__experimentalRadioGroup as RadioGroup,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

import { BLOCK_CLASS_NAME } from './constants';
import {
	TITLE_TAG,
	HAS_TITLE_DEFAULT,
	HAS_DESCRIPTION_DEFAULT,
	SLIDES_PER_VIEW_DEFAULT,
	SLIDES_PER_VIEW_MAX,
	ALLOW_PAGINATION,
	HAS_PAGINATION_DEFAULT,
	ALLOW_NAVIGATION,
	HAS_NAVIGATION_DEFAULT,
	ALLOW_SCROLLBAR,
	HAS_SCROLLBAR_DEFAULT,
	ALLOWED_BLOCKS,
} from './constants/editor';

import 'swiper/css';
import 'swiper/css/pagination';

import './editor.scss';

// @TODO:
// - loop
// - autoplay

export default function Edit({ attributes, setAttributes, clientId, isSelected }) {
	const {
		hasTitle = HAS_TITLE_DEFAULT,
		title,
		hasDescription = HAS_DESCRIPTION_DEFAULT,
		description,
		slidesPerView = SLIDES_PER_VIEW_DEFAULT,
		hasPagination = HAS_PAGINATION_DEFAULT,
		hasNavigation = HAS_NAVIGATION_DEFAULT,
		hasScrollbar = HAS_SCROLLBAR_DEFAULT,
	} = attributes;

	const onChange = (key, value) => {
		setAttributes({ [key]: value });
	};

	const onHasTitleChange = () => onChange('hasTitle', !hasTitle);
	const onTitleChange = (value) => onChange('title', value);
	const onHasDescriptionChange = () => onChange('hasDescription', !hasDescription);
	const onDescriptionChange = (value) => onChange('description', value);
	const onSlidesPerViewChange = (value) => onChange('slidesPerView', value);
	const onHasPaginationChange = () => onChange('hasPagination', !hasPagination);
	const onHasNavigationChange = () => onChange('hasNavigation', !hasNavigation);
	const onHasScrollbarChange = () => onChange('hasScrollbar', !hasScrollbar);

	const isParentOfSelectedBlock = useSelect(
		(select) =>
			select(blockEditorStore).hasSelectedInnerBlock(clientId, true),
		[]
	);
	const isOpened = isSelected || isParentOfSelectedBlock;

	return (
		<div
			{...useBlockProps({
				className: BLOCK_CLASS_NAME,
			})}
		>
			<InspectorControls>
				<PanelBody title={__('Settings', 'wpd-blocks')}>
					<PanelRow>
						<ToggleControl label={__('Show title', 'wpd-blocks')} checked={hasTitle} onChange={onHasTitleChange} />
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__('Show description', 'wpd-blocks')}
							checked={hasDescription}
							onChange={onHasDescriptionChange}
						/>
					</PanelRow>
					<PanelRow>
						<legend className="blocks-base-control__label">{__('Columns', 'wpd-blocks')}</legend>
						<RadioGroup onChange={onSlidesPerViewChange} checked={slidesPerView}>
							{range(1, SLIDES_PER_VIEW_MAX + 1).map((i) => (
								<Radio key={i} value={i}>
									{i}
								</Radio>
							))}
						</RadioGroup>
					</PanelRow>
					{ALLOW_PAGINATION && (
						<PanelRow>
							<ToggleControl
								label={__('Use pagination', 'wpd-blocks')}
								checked={hasPagination}
								onChange={onHasPaginationChange}
							/>
						</PanelRow>
					)}
					{ALLOW_NAVIGATION && (
						<PanelRow>
							<ToggleControl
								label={__('Use navigation', 'wpd-blocks')}
								checked={hasNavigation}
								onChange={onHasNavigationChange}
							/>
						</PanelRow>
					)}
					{ALLOW_SCROLLBAR && (
						<PanelRow>
							<ToggleControl
								label={__('Use scrollbar', 'wpd-blocks')}
								checked={hasScrollbar}
								onChange={onHasScrollbarChange}
							/>
						</PanelRow>
					)}
				</PanelBody>
			</InspectorControls>
			<div className={`${BLOCK_CLASS_NAME}__header`}>
				{hasTitle && (
					<RichText
						tagName={TITLE_TAG}
						value={title}
						placeholder={__('Title', 'wpd-blocks')}
						onChange={onTitleChange}
						className={`${BLOCK_CLASS_NAME}__title`}
					/>
				)}
				{hasDescription && (
					<RichText
						tagName="div"
						multiline="p"
						value={description}
						placeholder={__('Description', 'wpd-blocks')}
						onChange={onDescriptionChange}
						className={`${BLOCK_CLASS_NAME}__description`}
					/>
				)}
			</div>
			<div className="swiper">
				<div
					{...useInnerBlocksProps({
						className: 'swiper-wrapper',
					}, {
						allowedBlocks: ALLOWED_BLOCKS,
						orientation: 'horizontal',
					})}
				/>
				<div className="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal">
					<span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
					<span className="swiper-pagination-bullet" />
					<span className="swiper-pagination-bullet" />
					<span className="swiper-pagination-bullet" />
					<span className="swiper-pagination-bullet" />
				</div>
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
