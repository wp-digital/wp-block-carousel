(()=>{"use strict";const e=window.wp.blocks,l=window.wp.element,o=window.wp.blockEditor,n=window.wp.components,c=window.wp.i18n,s=window.wp.hooks,t="wpd-block-slide",r=(0,s.applyFilters)("wpd.block-slide.allowed_blocks",["wpd/block-card","wpd/block-logo","core/image"]),i=window.wp.primitives;(0,e.registerBlockType)("wpd/block-slide",{apiVersion:2,supports:{className:!1},edit:function(){const e=(0,o.useBlockProps)({className:`${t} swiper-slide`}),{children:s,...i}=(0,o.useInnerBlocksProps)(e,{allowedBlocks:r,renderAppender:!1,placeholder:(0,l.createElement)(n.Placeholder,{icon:(0,l.createElement)(o.BlockIcon,{icon:"format-image"}),label:(0,c.__)("Slide","wpd-blocks"),instructions:(0,c.__)("Use a block from allowed list.","wpd-blocks")},(0,l.createElement)(o.InnerBlocks.ButtonBlockAppender,null))});return(0,l.createElement)("div",i,(0,l.createElement)("div",{className:`${t}__inner`},s))},save:function(){const e=o.useBlockProps.save({className:`swiper-slide ${t}`}),{children:n,...c}=o.useInnerBlocksProps.save(e);return(0,l.createElement)("div",c,(0,l.createElement)("div",{className:`${t}__inner`},n))},icon:()=>(0,l.createElement)(i.SVG,{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)(i.Path,{d:"M7 4.59999L7 27.4C7 30 9 32 11.6 32H24.4C27 32 29 30 29 27.4L29 4.59999C29 1.99999 27 -1.1365e-07 24.4 0L11.6 5.96046e-07C9 7.09696e-07 7 1.99999 7 4.59999ZM24.4 3C25.2 3 26 3.79999 26 4.59999L26 27.4C26 28.2 25.2 29 24.4 29H11.6C10.8 29 10 28.2 10 27.4L10 4.59999C10 3.79999 10.8 3 11.6 3L24.4 3Z"}),(0,l.createElement)(i.Path,{d:"M5.4 4.8C5.4 4.35817 5.04183 4 4.6 4C2 4 -3.10047e-08 6 0 8.6L2.38419e-07 23.4C2.69423e-07 26 2 28 4.6 28C5.04183 28 5.4 27.6418 5.4 27.2V25.8C5.4 25.3582 5.04183 25 4.6 25C3.8 25 3 24.2 3 23.4V8.6C3 7.8 3.8 7 4.6 7C5.04183 7 5.4 6.64183 5.4 6.2V4.8Z"}),(0,l.createElement)(i.Path,{d:"M30.6 27.2C30.6 27.6418 30.9582 28 31.4 28C34 28 36 26 36 23.4V8.6C36 6 34 4 31.4 4C30.9582 4 30.6 4.35817 30.6 4.8V6.2C30.6 6.64183 30.9582 7 31.4 7C32.2 7 33 7.8 33 8.6V23.4C33 24.2 32.2 25 31.4 25C30.9582 25 30.6 25.3582 30.6 25.8V27.2Z"})),parent:["wpd/block-carousel"]})})();