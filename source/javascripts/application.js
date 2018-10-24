//= require jquery
//= require bootstrap
//= require_tree .

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  const nav = document.getElementById('navbar');
  const banniere = document.getElementById('banniere')
  const body = document.body
  const sticky = nav.offsetTop;
  if (banniere !== null) {
    banniere.classList.add("when-scroll")
  } else {
    body.classList.add("when-scroll")
  }
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
}
