$(document).ready(function () {
  $(".icon").on("click", function () {
    $(".icon").toggleClass("fa-moon");
    $(".icon").toggleClass("fa-sun");

    $("nav").toggleClass("dark , fontColor");
    $(".font").toggleClass("fontColor");

    $(".wrapper").toggleClass("wrap");
    $(".wrapper").toggleClass("contact-heding");
  });

  // testmonial

  $("#btn_a").click(function () {
    $(".slide1").show();
    $(".slide2").hide();
    $(".slide3").hide();
    $(".slide4").hide();
    $("#btn_a").css({ background: "brown" });
    $("#btn_b").css({ background: "rgb(184, 184, 184)" });
    $("#btn_c").css({ background: "rgb(184, 184, 184)" });
    $("#btn_d").css({ background: "rgb(184, 184, 184)" });
  });

  $("#btn_b").click(function () {
    $(".slide2").show();
    $(".slide1").hide();
    $(".slide3").hide();
    $(".slide4").hide();
    $("#btn_b").css({ background: "brown" });
    $("#btn_a").css({ background: "rgb(184, 184, 184)" });
    $("#btn_c").css({ background: "rgb(184, 184, 184)" });
    $("#btn_d").css({ background: "rgb(184, 184, 184)" });
  });

  $("#btn_c").click(function () {
    $(".slide3").show();
    $(".slide1").hide();
    $(".slide2").hide();
    $(".slide4").hide();
    $("#btn_c").css({ background: "brown" });
    $("#btn_b").css({ background: "rgb(184, 184, 184)" });
    $("#btn_a").css({ background: "rgb(184, 184, 184)" });
    $("#btn_d").css({ background: "rgb(184, 184, 184)" });
  });

  $("#btn_d").click(function () {
    $(".slide4").show();
    $(".slide1").hide();
    $(".slide2").hide();
    $(".slide3").hide();
    $("#btn_d").css({ background: "brown" });
    $("#btn_b").css({ background: "rgb(184, 184, 184)" });
    $("#btn_c").css({ background: "rgb(184, 184, 184)" });
    $("#btn_a").css({ background: "rgb(184, 184, 184)" });
  });
});

let counter = setInterval(html, 100);
let x = 0;
function html() {
  if (x == 500) {
    clearInterval(counter);
  }
  x++;
  let y = document.getElementById("html");
  y.style.width = x + "px";
}

let counter1 = setInterval(css, 20);
let p = 0;
function css() {
  if (p == 450) {
    clearInterval(counter1);
  }
  p++;
  let q = document.getElementById("css");
  q.style.width = p + "px";
}

let counter2 = setInterval(css3, 50);
let a = 0;
function css3() {
  if (a == 200) {
    clearInterval(counter2);
  }
  a++;
  let b = document.getElementById("css3");
  b.style.width = a + "px";
}

let counter3 = setInterval(javascript, 40);
let m = 0;
function javascript() {
  if (m == 350) {
    clearInterval(counter3);
  }
  m++;
  let n = document.getElementById("javascript");
  n.style.width = m + "px";
}

let counter4 = setInterval(bootstrap, 100);
let i = 0;
function bootstrap() {
  if (i == 50) {
    clearInterval(counter4);
  }
  i++;
  let z = document.getElementById("bootstrap");
  z.style.width = i + "px";
}
