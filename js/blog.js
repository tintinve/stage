let blog = document.querySelector("#blog");
let template = document.querySelector("#aPostTemplate").content;
const aside = document.querySelector("aside");
const mytimer = setInterval(myTimer, 5000);

function fetchData() {
  lookingForData = true;
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
  clone.querySelector(".aPostText").innerHTML = aPost.content.rendered;
  //clone.querySelector(".readMore").textContent = aPost.id;
  clone.querySelector(".readMore").href = "subpage.html?id=" + aPost.id;
  blog.appendChild(clone);
}
fetchData();

function myTimer() {
  document.querySelector("#loader").style.display = "none";
}
document.querySelector(".burger").addEventListener("click", trae_menu);

function burger(x) {
  x.classList.toggle("change");
}

function trae_menu() {
  document.querySelector("aside").classList.toggle("traeMenu");
  aside.style.display = "block";
}
