// script.js 파일 내용
//alert("JavaScript 파일이 연결되었습니다!");

$(document).ready(function () {
  $(".nav > ul > li").mouseover(function () {
    $(this).find(".submenu").stop().slideDown(200);
  });
  $(".nav > ul > li").mouseout(function () {
    $(this).find(".submenu").stop().slideUp(200);
  });
});
