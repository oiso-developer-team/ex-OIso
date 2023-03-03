// ==UserScript==
// @name         tamperOIso - OIer的好帮手
// @namespace    http://tampermonkey.net/
// @homepage     https://www.oiso.cf/
// @version      0.1.0
// @description  在洛谷、Codeforces等网站上提供OI检索服务
// @author       OIso开发团队
// @match        https://www.luogu.com.cn/*
// @match        https://www.oiso.cf/*
// @connect      oiso.cf
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js
// @icon         https://www.oiso.cf/img/favicon.svg
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(()=>{var e=o=>{console.log(o)};var n={reg:(o,s)=>{let t=window.location.href;o=`https://www.luogu.com.cn${o}`,e(o),e(t),t.search(o)===0&&s()}},r=n;r.reg("/",()=>{e("Hello World!")});})();

