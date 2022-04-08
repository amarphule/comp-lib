//Get the button:
scrollTop = document.getElementById("scrollTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

scrollTop.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
