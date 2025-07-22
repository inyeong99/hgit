// script.js 파일 내용
//alert("JavaScript 파일이 연결되었습니다!");

// 네비
$(document).ready(function () {
  // 메뉴 열기
  $(".nav > ul > li").on("mouseenter focusin", function () {
    $(this).find(".submenu").stop(true, true).slideDown(200);
    $(this).find("> a").attr("aria-expanded", "true");
  });

  // 메뉴 닫기
  $(".nav > ul > li").on("mouseleave focusout", function () {
    const $li = $(this);
    setTimeout(function () {
      if (!$li.find(":focus").length) {
        $li.find(".submenu").stop(true, true).slideUp(200);
        $li.find("> a").attr("aria-expanded", "false");
      }
    }, 100);
  });

  $(".submenu a").on("keydown", function (e) {
    if (e.key === "Escape") {
      const $parent = $(this).closest("li");
      $parent.find(".submenu").slideUp(200);
      $parent.find("> a").attr("aria-expanded", "false").focus();
    }
  });
});
// lnag
function dp_menu() {
  $(".lang_menu a").css("display", "block");
}

$(function () {
  // 메뉴 열기
  $(".lang_btn").on("click", function (e) {
    e.stopPropagation(); // 외부 클릭으로 바로 닫히는 것 방지
    $(".lang_menu").show();
  });

  // 메뉴 항목 클릭 시 메뉴 닫기
  $(".lang_menu a").on("click", function () {
    $(".lang_menu").hide();
  });

  // 외부 클릭 시 메뉴 닫기
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".lang").length) {
      $(".lang_menu").hide();
    }
  });
});

