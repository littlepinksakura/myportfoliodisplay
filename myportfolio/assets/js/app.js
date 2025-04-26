// Get the button-Top===========
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1500 ||
    document.documentElement.scrollTop > 1500
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

function topFunction() {
  const position = 0;
  const speed = 600;
  $("html,body").animate(
    {
      scrollTop: position,
    },
    speed
  );
}

// scroll down navbar===========

var lastScrollTop; // This Varibale will store the top position

navbar = document.getElementById("navbar"); // Get The NavBar

window.addEventListener("scroll", function () {
  //on every scroll this funtion will be called

  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //This line will get the location on scroll

  if (scrollTop > lastScrollTop) {
    //if it will be greater than the previous
    navbar.style.top = "-80px";
    //set the value to the negetive of height of navbar
  } else {
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop; //New Position Stored
});

// navbar on mobile====
function setupMobile() {
  if (document.documentElement.clientWidth > 768) {
    $("#navbar").addClass("fixed-top");
    $("#burgerDrop").hide();
    $("#navToHide").show();
    console.log("clientWidth more than 768");
  } else {
    $("#navbar").removeClass("fixed-top");
    $("#navToHide").hide();
    $("#burgerDrop").show();
    console.log("clientWidth less than 768");
  }
}

$(document).ready(setupMobile);
window.addEventListener("resize", setupMobile);

// burger menu

const hamMenu = document.querySelector(".burgerdrop-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
