// script.js 파일 내용
//alert("JavaScript 파일이 연결되었습니다!");

// 네비
$(document).ready(function () {
  // 메뉴 열기
  let $menuLi = $(".nav > ul > li"),
    $depth1Anchor = $menuLi.find("> a");

  $depth1Anchor.on("mouseenter focus", function () {
    $menuLi.find(".submenu").stop(true, true).slideUp(200);
    $depth1Anchor.attr("aria-expanded", "false");
    $(this).closest("li").find(".submenu").stop(true, true).slideDown(200);
    $(this).attr("aria-expanded", "true");
  });

  // 메뉴 닫기
  $menuLi.on("mouseleave", function () {
    $(this).find(".submenu").stop(true, true).slideUp(200);
    $(this).find("> a").attr("aria-expanded", "false");
  });

  $menuLi.find(".submenu a").on("blur", function () {
    setTimeout(() => {
      if (!$(this).closest("li").find(":focus").length) {
        const $parentLi = $(this).closest("li");
        $parentLi.find(".submenu").stop(true, true).slideUp(200);
        $parentLi.find("> a").attr("aria-expanded", "false");
      }
    }, 10);
  });

  const $mainnav = $(".mainnav");
  $mainnav.on("keydown", function (e) {
    if (e.key === "Escape" || e.key === "Esc") {
      e.preventDefault();
      $mainnav.find(".submenu").slideUp(200);
      $mainnav.find("> ul > li > a[aria-expanded='true']").attr("aria-expanded", "false");
    }
  });

  $mainnav.on("focusout", function (e) {
    setTimeout(function () {
      const activeEl = document.activeElement;
      if (!$mainnav[0].contains(activeEl)) {
        // 포커스가 mainnav 바깥으로 나갔으면 메뉴 닫기
        $mainnav.find(".submenu").slideUp(200);
        $mainnav.find("> ul > li > a").attr("aria-expanded", "false");
      }
    }, 0);
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
