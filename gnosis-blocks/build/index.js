(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{5:function(e,t,n){},7:function(e,t,n){}}]),function(e){function t(t){for(var o,l,s=t[0],i=t[1],a=t[2],b=0,p=[];b<s.length;b++)l=s[b],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);for(u&&u(t);p.length;)p.shift()();return c.push.apply(c,a||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(o=!1)}o&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={0:0},c=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var s=window.webpackJsonp=window.webpackJsonp||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var a=0;a<s.length;a++)t(s[a]);var u=i;c.push([9,1]),n()}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.editor}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){!function(){e.exports=this.wp.components}()},,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(3),r=n(1),c=(n(5),n(0)),l=n(4),s=n(2);n(6);Object(o.registerBlockType)("create-block/gnosis-container-block",{title:Object(r.__)("Container Block","create-block"),description:Object(r.__)("This block","create-block"),attributes:{size:{type:"string"}},category:"widgets",icon:"smiley",supports:{html:!1},edit:function(e){return e.className,e.attributes.size,e.setAttributes,Object(c.createElement)(c.Fragment,null,Object(c.createElement)(l.BaseControl,{id:"skeleton-container",label:"Container Block",help:"Useful with the full-width template. Just add anywhere you want your elements to justify center."},Object(c.createElement)(s.InnerBlocks,null)))},save:function(e){var t=e.className;return Object(c.createElement)("section",{class:t},Object(c.createElement)("div",{class:"container"},Object(c.createElement)(s.InnerBlocks.Content,null)))}});var i=["core/cover"],a=[["core/cover",{}]];Object(o.registerBlockType)("gnosis-block/carousel-slide",{title:Object(r.__)("Slide Block","gnosis-block"),description:Object(r.__)("This block","gnosis-block"),category:"widgets",icon:"smiley",edit:function(){return Object(c.createElement)("div",null,Object(c.createElement)(s.InnerBlocks,{renderAppender:!1,allowedBlocks:i,template:a}))},save:function(){return Object(c.createElement)("div",{class:"item"},Object(c.createElement)(s.InnerBlocks.Content,null))}});n(7),n(8);var u=["gnosis-block/carousel-slide"],b=[["gnosis-block/carousel-slide",{}]];Object(o.registerBlockType)("gnosis-block/carousel",{title:Object(r.__)("Carousel Block","gnosis-block"),description:Object(r.__)("This block","gnosis-block"),category:"widgets",icon:"smiley",edit:function(e){return e.className,Object(c.createElement)(c.Fragment,null,Object(c.createElement)(l.BaseControl,{id:"owl-carousel",label:"Carousel Block"},Object(c.createElement)(s.InnerBlocks,{allowedBlocks:u,template:b})))},save:function(e){var t=e.className;return Object(c.createElement)("div",{className:t},Object(c.createElement)("div",{class:"owl-carousel owl-theme"},Object(c.createElement)(s.InnerBlocks.Content,null)))}})}]);