!function(){"use strict";var e=window.wp.blocks,o=window.wp.element,l=window.wp.blockEditor,n=window.wp.components,c=window.wp.i18n;const s=["innocode/block-card","innocode/block-logo"];var r=window.wp.primitives;(0,e.registerBlockType)("wpd/block-slide",{apiVersion:2,supports:{className:!1},edit:function(){const e=(0,l.useBlockProps)({className:"wpd-block-slide swiper-slide"}),{children:r,...i}=(0,l.useInnerBlocksProps)(e,{allowedBlocks:s,renderAppender:!1,placeholder:(0,o.createElement)(n.Placeholder,{icon:(0,o.createElement)(l.BlockIcon,{icon:"format-image"}),label:(0,c.__)("Slide","wpd-blocks"),instructions:(0,c.__)("Use a block from allowed list.","wpd-blocks")},(0,o.createElement)(l.InnerBlocks.ButtonBlockAppender,null))});return(0,o.createElement)("div",i,(0,o.createElement)("div",{className:"wpd-block-slide__inner"},r))},save:function(){const e=l.useBlockProps.save({className:"swiper-slide wpd-block-slide"}),{children:n,...c}=l.useInnerBlocksProps.save(e);return(0,o.createElement)("div",c,(0,o.createElement)("div",{className:"wpd-block-slide__inner"},n))},icon:()=>(0,o.createElement)(r.SVG,{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)(r.Path,{d:""})),parent:["wpd/block-carousel"]})}();