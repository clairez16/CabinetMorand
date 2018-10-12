//= require jquery
//= require bootstrap
//= require_tree .

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  let nav = document.getElementById('navbar');
  let body = document.body
  let sticky = nav.offsetTop;
  body.classList.add("when-scroll")
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
}
