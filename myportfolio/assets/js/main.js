// main.js
"use strict";

{
  document.body.onmousemove = function (e) {
    document.documentElement.style.setProperty(
      "--x",
      e.clientX + window.scrollX + "px"
    );
    document.documentElement.style.setProperty(
      "--y",
      e.clientY + window.scrollY + "px"
    );
  };

  //fadein content
  $(window).on("load scroll", function () {
    const fadeIn = $(".fadeIn");

    fadeIn.each(function () {
      const boxOffset = $(this).offset().top;
      const scrollPos = $(window).scrollTop();
      const wh = $(window).height();

      if (scrollPos > boxOffset - wh + 100) {
        $(this).addClass("animated");
      }
    });
  });

  //loading
  // window on load = function () {}
  setTimeout(function () {
    const loading = document.querySelector("#loading");
    loading.classList.add("loaded");

    document.body.classList.remove("noScroll");

    const article = document.querySelector(".article");
    article.classList.add("open");
  }, 3000);
}
