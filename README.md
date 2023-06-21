# Carousel Block

### Description

Slider list of images, cards or logos.

### Demo

[Carousel Block](https://demo.wpd.digital/carousel-block/)

### Install

- Preferable way is to use [Composer](https://getcomposer.org/):

    ````
    composer require wp-digital/wp-block-carousel
    ````

- Alternate way is to clone this repo to `wp-content/plugins/`:

    ````
    cd wp-content/plugins/
    git clone git@github.com:wp-digital/wp-block-carousel.git
    ````

Activate **Carousel Block** with [WP-CLI](https://make.wordpress.org/cli/handbook/)
`wp plugin activate wp-block-carousel` or from **Plugins** page.

### Documentation

There are few [carousel](./blocks/carousel/src/constants/editor.js) and [slide](./blocks/slide/src/constants.js)
constants which give a possibility to customize behaviour a bit.

### Notes

- [Swiper](https://swiperjs.com/) is used as a slider library.
- [Logos](https://github.com/wp-digital/wp-block-logos) Logo block could be used inside slide.
- [Cards](https://github.com/wp-digital/wp-block-cards) Card block could be used inside slide.
