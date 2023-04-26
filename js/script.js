$(document).ready(
$(function () {
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
　　 var speed = 1000;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
})
);