!function(){"use strict";var e,o={62:function(){var e=window.wp.blocks,o=window.wp.element,n=window.wp.blockEditor,r=window.wp.components,l=window.wp.i18n;const c=["innocode/block-card","innocode/block-logo"];var t=window.wp.primitives;(0,e.registerBlockType)("wpd/block-slide",{apiVersion:2,supports:{className:!1},usesContext:["wpd/block-logos-scaleFactor","wpd/block-logos-backgroundColor","wpd/block-logos-color"],edit:function(){const e=(0,n.useBlockProps)({className:"wpd-block-slide swiper-slide"}),t=(0,n.useInnerBlocksProps)(e,{allowedBlocks:c,renderAppender:!1,placeholder:(0,o.createElement)(r.Placeholder,{icon:(0,o.createElement)(n.BlockIcon,{icon:"format-image"}),label:(0,l.__)("Slide","wpd-blocks"),instructions:(0,l.__)("Use a block from allowed list.","wpd-blocks")},(0,o.createElement)(n.InnerBlocks.ButtonBlockAppender,null))});return(0,o.createElement)("div",t)},save:function(){const e=n.useBlockProps.save({className:"swiper-slide wpd-block-slide"}),r=n.useInnerBlocksProps.save(e);return(0,o.createElement)("div",r)},icon:()=>(0,o.createElement)(t.SVG,{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)(t.Path,{d:""})),parent:["wpd/block-carousel"]})}},n={};function r(e){var l=n[e];if(void 0!==l)return l.exports;var c=n[e]={exports:{}};return o[e](c,c.exports,r),c.exports}r.m=o,e=[],r.O=function(o,n,l,c){if(!n){var t=1/0;for(p=0;p<e.length;p++){n=e[p][0],l=e[p][1],c=e[p][2];for(var s=!0,i=0;i<n.length;i++)(!1&c||t>=c)&&Object.keys(r.O).every((function(e){return r.O[e](n[i])}))?n.splice(i--,1):(s=!1,c<t&&(t=c));if(s){e.splice(p--,1);var a=l();void 0!==a&&(o=a)}}return o}c=c||0;for(var p=e.length;p>0&&e[p-1][2]>c;p--)e[p]=e[p-1];e[p]=[n,l,c]},r.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},function(){var e={826:0,431:0};r.O.j=function(o){return 0===e[o]};var o=function(o,n){var l,c,t=n[0],s=n[1],i=n[2],a=0;if(t.some((function(o){return 0!==e[o]}))){for(l in s)r.o(s,l)&&(r.m[l]=s[l]);if(i)var p=i(r)}for(o&&o(n);a<t.length;a++)c=t[a],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(p)},n=self.webpackChunkwp_block_carousel=self.webpackChunkwp_block_carousel||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var l=r.O(void 0,[431],(function(){return r(62)}));l=r.O(l)}();