// ==UserScript==
// @name         飞书伴侣
// @name:en      Feishu Partner
// @namespace    https://jasonlam.cc
// @version      0.1.5
// @description:    目前支持强制当前页面打开文档
// @description:en    Force the document to be opened on the current tab
// @author       JasonLamv-t
// @match        *://*.feishu.cn/*
// @icon         https://image-lake.oss-cn-hangzhou.aliyuncs.com/feishu_logo.svg
// @require      http://code.jquery.com/jquery-latest.js
// @grant        none
// @home-url   https://greasyfork.org/zh-CN/scripts/446132-飞书伴侣
// @home-url2  https://github.com/JasonLamv-t/Feishu-partner
// @homepageURL  https://github.com/JasonLamv-t/Feishu-partner
// @copyright  2022, JasonLamv-t
// @lastmodified  2022-06-07
// @feedback-url  https://github.com/JasonLamv-t/Feishu-partner
// ==/UserScript==

(function () {
  console.log('Force same tab work for ');

  document.addEventListener(
    'click',
    (e) => {
      const anchorElements = [...document.getElementsByTagName('a')];
      anchorElements.forEach((a) => {
        a.target = '_self';
      });
      if (e.path.some((p) => anchorElements.includes(p))) {
        e.stopPropagation();
      }
    },
    true
  );
})();
