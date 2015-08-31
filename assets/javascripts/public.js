/*!
 * Retina.js v1.3.0
 *
 * Copyright 2014 Imulus, LLC
 * Released under the MIT license
 *
 * Retina.js is an open source script that makes it easy to serve
 * high-resolution images to devices with retina displays.
 */
!function(){function t(){}function e(t){return a.retinaImageSuffix+t}function i(t,i){if(this.path=t||"","undefined"!=typeof i&&null!==i)this.at_2x_path=i,this.perform_check=!1;else{if(void 0!==document.createElement){var n=document.createElement("a");n.href=this.path,n.pathname=n.pathname.replace(o,e),this.at_2x_path=n.href}else{var s=this.path.split("?");s[0]=s[0].replace(o,e),this.at_2x_path=s.join("?")}this.perform_check=!0}}function n(t){this.el=t,this.path=new i(this.el.getAttribute("src"),this.el.getAttribute("data-at2x"));var e=this;this.path.check_2x_variant(function(t){t&&e.swap()})}var s="undefined"==typeof exports?window:exports,a={retinaImageSuffix:"@2x",check_mime_type:!0,force_original_dimensions:!0};s.Retina=t,t.configure=function(t){null===t&&(t={});for(var e in t)t.hasOwnProperty(e)&&(a[e]=t[e])},t.init=function(t){null===t&&(t=s);var e=t.onload||function(){};t.onload=function(){var t,i,s=document.getElementsByTagName("img"),a=[];for(t=0;t<s.length;t+=1)i=s[t],i.getAttributeNode("data-no-retina")||a.push(new n(i));e()}},t.isRetina=function(){var t="(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";return s.devicePixelRatio>1?!0:s.matchMedia&&s.matchMedia(t).matches?!0:!1};var o=/\.\w+$/;s.RetinaImagePath=i,i.confirmed_paths=[],i.prototype.is_external=function(){return!(!this.path.match(/^https?\:/i)||this.path.match("//"+document.domain))},i.prototype.check_2x_variant=function(t){var e,n=this;return this.is_external()?t(!1):this.perform_check||"undefined"==typeof this.at_2x_path||null===this.at_2x_path?this.at_2x_path in i.confirmed_paths?t(!0):(e=new XMLHttpRequest,e.open("HEAD",this.at_2x_path),e.onreadystatechange=function(){if(4!==e.readyState)return t(!1);if(e.status>=200&&e.status<=399){if(a.check_mime_type){var s=e.getResponseHeader("Content-Type");if(null===s||!s.match(/^image/i))return t(!1)}return i.confirmed_paths.push(n.at_2x_path),t(!0)}return t(!1)},void e.send()):t(!0)},s.RetinaImage=n,n.prototype.swap=function(t){function e(){i.el.complete?(a.force_original_dimensions&&(i.el.setAttribute("width",i.el.offsetWidth),i.el.setAttribute("height",i.el.offsetHeight)),i.el.setAttribute("src",t)):setTimeout(e,5)}"undefined"==typeof t&&(t=this.path.at_2x_path);var i=this;e()},t.isRetina()&&t.init(s)}(),/*! bigSlide - v0.9.0 - 2015-06-20
* http://ascott1.github.io/bigSlide.js/
* Copyright (c) 2015 Adam D. Scott; Licensed MIT */
function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){"use strict";function e(t,e){for(var i,n=t.split(";"),s=e.split(" "),a="",o=0,r=n.length;r>o;o++){i=!0;for(var h=0,c=s.length;c>h;h++)(""===n[o]||-1!==n[o].indexOf(s[h]))&&(i=!1);i&&(a+=n[o]+"; ")}return a}t.fn.bigSlide=function(i){var n=this,s=t.extend({menu:"#menu",push:".push",side:"left",menuWidth:"15.625em",speed:"300",state:"closed",activeBtn:"active",easyClose:!1,beforeOpen:function(){},afterOpen:function(){},beforeClose:function(){},afterClose:function(){}},i),a="transition -o-transition -ms-transition -moz-transitions webkit-transition "+s.side,o={menuCSSDictionary:a+" position top bottom height width",pushCSSDictionary:a,state:s.state},r={init:function(){h.init()},_destroy:function(){return h._destroy(),delete n.bigSlideAPI,n},changeState:function(){o.state="closed"===o.state?"open":"closed"},getState:function(){return o.state}},h={init:function(){this.$menu=t(s.menu),this.$push=t(s.push),this.width=s.menuWidth;var e={position:"fixed",top:"0",bottom:"0",height:"100%"};e[s.side]="-"+s.menuWidth,e.width=s.menuWidth,"closed"===s.state&&(this.$menu.css(e),this.$push.css(s.side,"0"));var i={"-webkit-transition":s.side+" "+s.speed+"ms ease","-moz-transition":s.side+" "+s.speed+"ms ease","-ms-transition":s.side+" "+s.speed+"ms ease","-o-transition":s.side+" "+s.speed+"ms ease",transition:s.side+" "+s.speed+"ms ease"};this.$menu.css(i),this.$push.css(i),n.on("click.bigSlide touchstart.bigSlide",function(t){t.preventDefault(),"open"===r.getState()?h.toggleClose():h.toggleOpen()}),s.easyClose&&t("body").on("click.bigSlide",function(e){t(e.target).parents().andSelf().is(n)||"open"!==r.getState()||h.toggleClose()})},_destroy:function(){this.$menu.each(function(){var i=t(this);i.attr("style",e(i.attr("style"),o.menuCSSDictionary).trim())}),this.$push.each(function(){var i=t(this);i.attr("style",e(i.attr("style"),o.pushCSSDictionary).trim())}),n.removeClass(s.activeBtn).off("click.bigSlide touchstart.bigSlide"),this.$menu=null,this.$push=null},toggleOpen:function(){s.beforeOpen(),r.changeState(),this.$menu.css(s.side,"0"),this.$push.css(s.side,this.width),n.addClass(s.activeBtn),s.afterOpen()},toggleClose:function(){s.beforeClose(),r.changeState(),this.$menu.css(s.side,"-"+this.width),this.$push.css(s.side,"0"),n.removeClass(s.activeBtn),s.afterClose()}};return r.init(),this.bigSlideAPI={settings:s,model:o,controller:r,view:h,destroy:r._destroy},this}}),$(function(){$(".big-slide-link").bigSlide({menu:"#big-slide-panel",push:".big-slide-push",side:"right",easyClose:!0}),$(".big-video").each(function(){var t=new $.BigVideo({container:$(this),doLoop:!0});t.init(),t.show($(".big-video").data("href"),{ambient:!0})}),L.mapbox.accessToken="pk.eyJ1IjoibHVtb3NjbG91ZCIsImEiOiIzNWEzYTkwOGRmZGY2ZDI5NzM5ODc4NWNmMWNhOWJkZCJ9.f4TzhaH4GvOM6673C2nnTw",$(".mapbox").each(function(){var t=L.mapbox.map(this,$(this).data("map-id"));$(this).data("show-popup")&&t.featureLayer.on("ready",function(){t.featureLayer.getLayers()[0].openPopup()})})}),$(document).on("click","[data-scroll-to]",function(t){var e=$(t.target).data("scroll-to");if(e){var i=$(e).offset().top,n=$(t.target).data("scroll-offset");if(n)var s=i+n;else var s=i;$("html, body").animate({scrollTop:s},650)}});