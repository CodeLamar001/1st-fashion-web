// A simple welcome message
window.onload = function () {
  alert("Welcome to FashionHub! Explore our latest fashion trends.");
};
// Function to change background color
function changeBackgroundColor() {
  var element = document.getElementById("main-content");
  element.style.backgroundColor = "lightblue";
}
// Function to highlight product card
function highlightProductCard(card) {
  card.classList.toggle("highlighted");
}
// Enable smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
