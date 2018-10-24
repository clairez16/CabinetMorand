//= require jquery
//= require bootstrap
//= require_tree .

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  const nav = document.getElementById('navbar');
  const banniere = document.getElementById('banniere')
  const sticky = nav.offsetTop;
  banniere.classList.add("when-scroll")
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
}
