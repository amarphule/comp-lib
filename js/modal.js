let action = document.querySelector(".action");
let modal = document.querySelector(".modal");
let close = document.querySelector(".close");
let closebtn = document.querySelector("#close");

// closebtn.addEventListener("click", () => {
//   //   modal.style.display = "none";
// });
action.addEventListener("click", () => {
  modal.style.display = "block";
  //On click anywhere Outside modal will close it
  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });
});
