(()=>{"use strict";var e,t={382:(e,t,a)=>{const l=window.wp.blocks,o=window.wp.i18n;function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},r.apply(this,arguments)}const s=window.wp.element,n=window.lodash,i=window.wp.blockEditor,c=window.wp.components,p=window.wp.data,d="wpd-block-carousel",u=window.wp.hooks,w=(0,u.applyFilters)("wpd.block-carousel.title.tag","h3"),m=(0,u.applyFilters)("wpd.block-carousel.has_title.default",!0),b=(0,u.applyFilters)("wpd.block-carousel.has_description.default",!1),g=(0,u.applyFilters)("wpd.block-carousel.has_pagination.default",!1),h=(0,u.applyFilters)("wpd.block-carousel.has_navigation.default",!1),k=(0,u.applyFilters)("wpd.block-carousel.slides_per_view.max",6),_=(0,u.applyFilters)("wpd.block-carousel.slides_per_view.default","auto"),v=(0,u.applyFilters)("wpd.block-carousel.space_between",30),y=(0,u.applyFilters)("wpd.block-carousel.allow_pagination",!0),C=(0,u.applyFilters)("wpd.block-carousel.allow_navigation",!0),E=(0,u.applyFilters)("wpd.block-carousel.allow_autoplay",!0),f=(0,u.applyFilters)("wpd.block-carousel.allow_loop",!0),N=(0,u.applyFilters)("wpd.block-carousel.autoplay_delay",!1),P=(0,u.applyFilters)("wpd.block-carousel.loop.default",!1),F=["wpd/block-slide"],B=(0,u.applyFilters)("wpd.block-carousel.template",[["wpd/block-slide",{}]]),x=(0,u.applyFilters)("wpd.block-logos.scale_factor.default",525),$=(0,u.applyFilters)("wpd.block-logos.color.schemes",[{name:(0,o.__)("Dark","wpd-blocks"),color:"#000"},{name:(0,o.__)("Light","wpd-blocks"),color:"#fff"}]),T=(0,u.applyFilters)("wpd.block-logos.background_color.default",void 0),R=(0,u.applyFilters)("wpd.block-logos.color.default",void 0);function O({...e}){return(0,s.createElement)("div",{className:`${d}-inner-blocks__appender`},(0,s.createElement)(i.InnerBlocks.ButtonBlockAppender,e))}const V={hasTitle:{type:"boolean",default:m},title:{type:"string",source:"html",selector:`.${d}__title`},hasDescription:{type:"boolean",default:b},description:{type:"string",source:"html",selector:`.${d}__description`},slidesPerView:{type:"string",default:_,source:"attribute",selector:`.${d} .swiper`,attribute:"data-slides-per-view"},spaceBetween:{type:"string",default:v,source:"attribute",selector:`.${d} .swiper`,attribute:"data-space-between"},hasPagination:{type:"string",default:g,source:"attribute",selector:`.${d} .swiper`,attribute:"data-has-pagination"},hasNavigation:{type:"string",default:h,source:"attribute",selector:`.${d} .swiper`,attribute:"data-has-navigation"},shouldAutoplay:{type:"string",default:N,source:"attribute",selector:`.${d} .swiper`,attribute:"data-should-autoplay"},shouldLoop:{type:"string",default:P,source:"attribute",selector:`.${d} .swiper`,attribute:"data-should-loop"},scaleFactor:{type:"number",default:x},backgroundColor:{type:"string",default:T},color:{type:"string",default:R}},L=window.wp.primitives,S=a.p+"images/example-1.6c4a6018.webp",A=a.p+"images/example-2.c6260585.webp",I=a.p+"images/example-3.a64988a1.webp";(0,l.registerBlockType)("wpd/block-carousel",{apiVersion:2,supports:{align:["wide","full"],className:!1},attributes:V,providesContext:{"wpd/block-logos-scaleFactor":"scaleFactor","wpd/block-logos-backgroundColor":"backgroundColor","wpd/block-logos-color":"color"},edit:function({attributes:e,setAttributes:t,clientId:a,isSelected:l}){const{hasTitle:u=m,title:V,hasDescription:L=b,description:S,slidesPerView:A=_,spaceBetween:I=v,hasPagination:j=g,hasNavigation:D=h,shouldAutoplay:M=N,shouldLoop:Z=P,scaleFactor:z=x,backgroundColor:G=T,color:H=R}=e,U=(e,a)=>{t({[e]:a})},q=(0,p.useSelect)((e=>e(i.store).getBlock(a).innerBlocks.length),[a]),J=(0,p.useSelect)((e=>e(i.store).hasSelectedInnerBlock(a,!0)),[a]),K=l||J;return(0,s.createElement)("div",(0,i.useBlockProps)({className:`${d} ${d}_is-${K?"opened":"closed"} ${d}_columns-${A}`}),(0,s.createElement)(i.InspectorControls,null,(0,s.createElement)(c.PanelBody,{title:(0,o.__)("Settings","wpd-blocks")},(0,s.createElement)(c.PanelRow,null,(0,s.createElement)(c.ToggleControl,{label:(0,o.__)("Show title","wpd-blocks"),checked:u,onChange:()=>U("hasTitle",!u)})),(0,s.createElement)(c.PanelRow,null,(0,s.createElement)(c.ToggleControl,{label:(0,o.__)("Show description","wpd-blocks"),checked:L,onChange:()=>U("hasDescription",!L)})),(0,s.createElement)(c.PanelRow,{className:"is-vertical"},(0,s.createElement)("legend",{className:"blocks-base-control__label"},(0,o.__)("Columns","wpd-blocks")),(0,s.createElement)(c.__experimentalRadioGroup,{onChange:e=>U("slidesPerView",e),checked:A},(0,s.createElement)(c.__experimentalRadio,{value:"auto"},(0,o.__)("Auto","wpd-blocks")),(0,n.range)(1,k+1).map((e=>(0,s.createElement)(c.__experimentalRadio,{key:e,value:e.toString()},e))))),(0,s.createElement)(c.PanelRow,null,(0,s.createElement)(c.__experimentalNumberControl,{label:(0,o.__)("Space between","wpd-blocks"),value:I,onChange:e=>U("spaceBetween",e),min:0})),y&&(0,s.createElement)(c.PanelRow,null,(0,s.createElement)(c.ToggleControl,{label:(0,o.__)("Use pagination","wpd-blocks"),checked:"true"===j,onChange:e=>U("hasPagination",e?"true":"false")})),C&&(0,s.createElement)(c.PanelRow,null,(0,s.createElement)(c.ToggleControl,{label:(0,o.__)("Use navigation","wpd-blocks"),checked:"true"===D,onChange:e=>U("hasNavigation",e?"true":"false")})),E&&(0,s.createElement)(c.PanelRow,null,(0,s.createElement)(c.ToggleControl,{label:(0,o.__)("Autoplay","wpd-blocks"),checked:"true"===M,onChange:e=>U("shouldAutoplay",e?"true":"false")})),f&&(0,s.createElement)(c.PanelRow,null,(0,s.createElement)(c.ToggleControl,{label:(0,o.__)("Loop","wpd-blocks"),checked:"true"===Z,onChange:e=>U("shouldLoop",e?"true":"false")}))),(0,s.createElement)(c.PanelBody,{title:(0,o.__)("Logo settings","wpd-blocks"),initialOpen:!1},(0,s.createElement)(c.RangeControl,{label:(0,o.__)("Scale factor","wpd-blocks"),value:z,onChange:e=>U("scaleFactor",e),withInputField:!1,allowReset:!0,resetFallbackValue:x,min:1,max:1e3,step:1}),(0,s.createElement)("legend",null,(0,o.__)("Background","wpd-blocks")),(0,s.createElement)(c.ColorPalette,{colors:$,value:G,onChange:e=>U("backgroundColor",e),className:"components-color-list-picker__color-picker"}),(0,s.createElement)("legend",null,(0,o.__)("Text","wpd-blocks")),(0,s.createElement)(c.ColorPalette,{colors:$.slice().reverse(),value:H,onChange:e=>U("color",e),className:"components-color-list-picker__color-picker"}))),(0,s.createElement)("div",{className:`${d}__header`},u&&(0,s.createElement)(i.RichText,{tagName:w,value:V,placeholder:(0,o.__)("Title","wpd-blocks"),onChange:e=>U("title",e),className:`${d}__title`}),L&&(0,s.createElement)(i.RichText,{tagName:"div",multiline:"p",value:S,placeholder:(0,o.__)("Description","wpd-blocks"),onChange:e=>U("description",e),className:`${d}__description`})),(0,s.createElement)("div",r({className:"swiper","data-slides-per-view":A,"data-space-between":I},y&&{"data-has-pagination":j},C&&{"data-has-navigation":D},E&&{"data-should-autoplay":M},f&&{"data-should-loop":Z},{style:{"--space-between":`${I}px`}}),(0,s.createElement)("div",(0,i.useInnerBlocksProps)({className:"swiper-wrapper"},{allowedBlocks:F,orientation:"horizontal",renderAppender:K&&O,template:B})),!K&&(0,s.createElement)(s.Fragment,null,y&&"true"===j&&(0,s.createElement)("div",{className:"swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"},(0,n.range)(q).map((e=>(0,s.createElement)("span",{key:e,className:"swiper-pagination-bullet "+(0===e?"swiper-pagination-bullet-active":"")})))),C&&"true"===D&&(0,s.createElement)(s.Fragment,null,(0,s.createElement)("div",{className:"swiper-button-prev"}),(0,s.createElement)("div",{className:"swiper-button-next"})))))},save:function(e){let{attributes:t}=e;const{hasTitle:a=m,title:l,hasDescription:o=b,description:n,slidesPerView:c=_,spaceBetween:p=v,hasPagination:u=g,hasNavigation:k=h,shouldAutoplay:F=N,shouldLoop:B=P}=t;return(0,s.createElement)("div",i.useBlockProps.save({className:d}),(0,s.createElement)("div",{className:`${d}__header`},a&&(0,s.createElement)(i.RichText.Content,{tagName:w,className:`${d}__title`,value:l}),o&&(0,s.createElement)(i.RichText.Content,{tagName:"div",multiline:"p",value:n,className:`${d}__description`})),(0,s.createElement)("div",r({className:"swiper","data-slides-per-view":c,"data-space-between":p},y&&{"data-has-pagination":u},C&&{"data-has-navigation":k},E&&{"data-should-autoplay":F},f&&{"data-should-loop":B}),(0,s.createElement)("div",i.useInnerBlocksProps.save({className:"swiper-wrapper"})),y&&"true"===u&&(0,s.createElement)("div",{className:"swiper-pagination"}),C&&"true"===k&&(0,s.createElement)(s.Fragment,null,(0,s.createElement)("div",{className:"swiper-button-prev"}),(0,s.createElement)("div",{className:"swiper-button-next"}))))},icon:()=>(0,s.createElement)(L.SVG,{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},(0,s.createElement)(L.Path,{d:"M7 4.59999L7 27.4C7 30 9 32 11.6 32H24.4C27 32 29 30 29 27.4L29 4.59999C29 1.99999 27 -1.1365e-07 24.4 0L11.6 5.96046e-07C9 7.09696e-07 7 1.99999 7 4.59999ZM24.4 3C25.2 3 26 3.79999 26 4.59999L26 27.4C26 28.2 25.2 29 24.4 29H11.6C10.8 29 10 28.2 10 27.4L10 4.59999C10 3.79999 10.8 3 11.6 3L24.4 3Z"}),(0,s.createElement)(L.Path,{d:"M5.4 4.8C5.4 4.35817 5.04183 4 4.6 4C2 4 -3.10047e-08 6 0 8.6L2.38419e-07 23.4C2.69423e-07 26 2 28 4.6 28C5.04183 28 5.4 27.6418 5.4 27.2V25.8C5.4 25.3582 5.04183 25 4.6 25C3.8 25 3 24.2 3 23.4V8.6C3 7.8 3.8 7 4.6 7C5.04183 7 5.4 6.64183 5.4 6.2V4.8Z"}),(0,s.createElement)(L.Path,{d:"M30.6 27.2C30.6 27.6418 30.9582 28 31.4 28C34 28 36 26 36 23.4V8.6C36 6 34 4 31.4 4C30.9582 4 30.6 4.35817 30.6 4.8V6.2C30.6 6.64183 30.9582 7 31.4 7C32.2 7 33 7.8 33 8.6V23.4C33 24.2 32.2 25 31.4 25C30.9582 25 30.6 25.3582 30.6 25.8V27.2Z"})),example:{attributes:{title:(0,o.__)("Carousel","wpd-blocks"),hasDescription:!0,description:(0,o.sprintf)("<p>%s</p>",(0,o.__)("This is a description.","wpd-blocks")),slidesPerView:"3",spaceBetween:"10",hasPagination:"true",hasNavigation:"true"},innerBlocks:[{name:"wpd/block-slide",innerBlocks:[{name:"core/image",attributes:{url:S,alt:(0,o.__)("Image","wpd-blocks")}}]},{name:"wpd/block-slide",innerBlocks:[{name:"core/image",attributes:{url:A,alt:(0,o.__)("Image","wpd-blocks")}}]},{name:"wpd/block-slide",innerBlocks:[{name:"core/image",attributes:{url:I,alt:(0,o.__)("Image","wpd-blocks")}}]},{name:"wpd/block-slide"}]}})}},a={};function l(e){var o=a[e];if(void 0!==o)return o.exports;var r=a[e]={exports:{}};return t[e](r,r.exports,l),r.exports}l.m=t,e=[],l.O=(t,a,o,r)=>{if(!a){var s=1/0;for(p=0;p<e.length;p++){for(var[a,o,r]=e[p],n=!0,i=0;i<a.length;i++)(!1&r||s>=r)&&Object.keys(l.O).every((e=>l.O[e](a[i])))?a.splice(i--,1):(n=!1,r<s&&(s=r));if(n){e.splice(p--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[a,o,r]},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{var e={826:0,431:0};l.O.j=t=>0===e[t];var t=(t,a)=>{var o,r,[s,n,i]=a,c=0;if(s.some((t=>0!==e[t]))){for(o in n)l.o(n,o)&&(l.m[o]=n[o]);if(i)var p=i(l)}for(t&&t(a);c<s.length;c++)r=s[c],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(p)},a=globalThis.webpackChunkwp_block_carousel=globalThis.webpackChunkwp_block_carousel||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var o=l.O(void 0,[431],(()=>l(382)));o=l.O(o)})();