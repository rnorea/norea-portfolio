$(function () {

  const $menuBtn = $("#menu");
  const $navList = $("#nav-bar");

  // Toggle menu on burger click
  $menuBtn.on("click", function (e) {
    e.stopPropagation();
    $navList.toggleClass("show");
    $menuBtn.toggleClass("active");
  });

  // Close menu when a nav link is clicked
  $navList.find(".nav-anchor").on("click", function () {
    $navList.removeClass("show");
    $menuBtn.removeClass("active");
  });

  // Close menu when clicking outside
  $(document).on("click", function (e) {
    if (
      !$menuBtn.is(e.target) &&
      $menuBtn.has(e.target).length === 0 &&
      !$navList.is(e.target) &&
      $navList.has(e.target).length === 0
    ) {
      $navList.removeClass("show");
      $menuBtn.removeClass("active");
    }
  });

});