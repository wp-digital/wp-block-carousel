<?php
/**
 * Plugin Name:       Carousel Block
 * Description:       Slider list of images, cards or logos.
 * Requires at least: 5.9
 * Requires PHP:      7.1
 * Version:           1.0.5
 * Author:            SMFB Dinamo
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wpd-blocks
 *
 * @package           wpd
 */

function wpd_block_carousel_block_init() {
	register_block_type( __DIR__ . '/blocks/carousel' );
}

add_action( 'init', 'wpd_block_carousel_block_init' );

function wpd_block_slide_block_init() {
	register_block_type( __DIR__ . '/blocks/slide' );
}

add_action( 'init', 'wpd_block_slide_block_init' );
