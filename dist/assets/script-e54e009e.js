import{d as y}from"./index-2a8ce3c2.js";import{b}from"./helpers-0bb72b7a.js";function S(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}else return Array.from(t)}var s=!1;if(typeof window<"u"){var v={get passive(){s=!0}};window.addEventListener("testPassive",null,v),window.removeEventListener("testPassive",null,v)}var h=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),r=[],a=!1,m=-1,d=void 0,l=void 0,g=function(e){return r.some(function(n){return!!(n.options.allowTouchMove&&n.options.allowTouchMove(e))})},u=function(e){var n=e||window.event;return g(n.target)||n.touches.length>1?!0:(n.preventDefault&&n.preventDefault(),!1)},T=function(e){if(l===void 0){var n=!!e&&e.reserveScrollBarGap===!0,o=window.innerWidth-document.documentElement.clientWidth;n&&o>0&&(l=document.body.style.paddingRight,document.body.style.paddingRight=o+"px")}d===void 0&&(d=document.body.style.overflow,document.body.style.overflow="hidden")},B=function(){l!==void 0&&(document.body.style.paddingRight=l,l=void 0),d!==void 0&&(document.body.style.overflow=d,d=void 0)},P=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},A=function(e,n){var o=e.targetTouches[0].clientY-m;return g(e.target)?!1:n&&n.scrollTop===0&&o>0||P(n)&&o<0?u(e):(e.stopPropagation(),!0)},M=function(e,n){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!r.some(function(i){return i.targetElement===e})){var o={targetElement:e,options:n||{}};r=[].concat(S(r),[o]),h?(e.ontouchstart=function(i){i.targetTouches.length===1&&(m=i.targetTouches[0].clientY)},e.ontouchmove=function(i){i.targetTouches.length===1&&A(i,e)},a||(document.addEventListener("touchmove",u,s?{passive:!1}:void 0),a=!0)):T(n)}},I=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}r=r.filter(function(n){return n.targetElement!==e}),h?(e.ontouchstart=null,e.ontouchmove=null,a&&r.length===0&&(document.removeEventListener("touchmove",u,s?{passive:!1}:void 0),a=!1)):r.length||B()};function x(t){let e;const n=b(t),o=parseInt(window.getComputedStyle(t).getPropertyValue("--navigation-height"))||0,i=window.matchMedia("(min-width: 1024px)");i.addEventListener("change",c),t.addEventListener("click",y('[data-ref="menuButton"]',w)),c();function w(f){e=!e,n.menuButton.setAttribute("aria-expanded",e),e?(t.setAttribute("data-status","menuIsOpen"),M(n.menu)):(t.removeAttribute("data-status"),I(n.menu))}function c(){i.matches||p()}function p(){const f=document.getElementById("wpadminbar")?o+document.getElementById("wpadminbar").offsetHeight:o;document.documentElement.style.scrollPaddingTop=`${f}px`}}export{x as default};