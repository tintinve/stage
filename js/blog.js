let template = document.querySelector("#aPostTemplate").content;
let blog = document.querySelector("#blog");
const aside = document.querySelector("aside");
const mytimer = setInterval(myTimer, 10000);
function fetchData() {
  fetch("https://eupeo.com/index.php/wp-json/wp/v2/posts")
    .then(e => e.json())
    .then(showContent);
}
function showContent(data) {
  console.log(data);
  data.forEach(showPost);
}
function showPost(aPost) {
  let clone = template.cloneNode(true);
  clone.querySelector(".aPostTitle").textContent = aPost.title.rendered;
  clone.querySelector(".aPostText").maxLength = 10;
  clone.querySelector(".aPostText").innerHTML = aPost.excerpt.rendered;
  //clone.querySelector(".readMore").textContent = aPost.id;
  clone.querySelector(".readMore").href = "subpage.html?id=" + aPost.id;
  blog.appendChild(clone);
}

fetchData();
function myTimer() {
  document.querySelector("#loader").style.display = "none";
}
function burger(x) {
  x.classList.toggle("change");
}
document.querySelector(".burger").addEventListener("click", trae_menu);

function trae_menu() {
  document.querySelector("aside").classList.toggle("traeMenu");
  aside.style.display = "block";
}
