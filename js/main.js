let template = document.querySelector("#aPostTemplate").content;
let blog = document.querySelector("#blog");
let page = 1;
let lookingForData = false;
let catLink = "https://eupeo.com/index.php/wp-json/wp/v2/categories";
const aside = document.querySelector("aside");
const mytimer = setInterval(myTimer, 10000);

function fetchData() {
  lookingForData = true;
  fetch(
    "https://eupeo.com/index.php/wp-json/wp/v2/posts?_embed&per_page=30&page=1"
  )
    .then(e => e.json())
    .then(showContent);
}

function showContent(data) {
  console.log(data);
  data.forEach(showPost);
}
function showPost(aPost) {
  let clone = template.cloneNode(true);
  clone.querySelector("h1").textContent = aPost.title.rendered;
  clone.querySelector(".readMore").textContent = aPost.id;
  clone.querySelector(".readMore").href = "subpage.html?id=" + aPost.id;
  blog.appendChild(clone);
}

fetchData();

function burger(x) {
  console.log(x);
  x.classList.toggle("change");
}

document.querySelector(".burger").addEventListener("click", trae_menu);

function trae_menu() {
  document.querySelector("aside").classList.toggle("traeMenu");
  aside.style.display = "block";
}

function myTimer() {
  document.querySelector("#loader").style.display = "none";
}
