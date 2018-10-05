document.querySelector(".burger").addEventListener("click", trae_menu);

function burger(x) {
  x.classList.toggle("change");
}

function trae_menu() {
  document.querySelector("aside").classList.toggle("traeMenu");
  aside.style.display = "block";
}
