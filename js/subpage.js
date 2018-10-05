let template = document.querySelector("#eventtemp").content;
let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");
fetch("https://eupeo.com/index.php/wp-json/wp/v2/posts/" + id)
  .then(e => e.json())
  .then(showSinglePost);
function showSinglePost(anEvent) {
  let clone = template.cloneNode(true);
  clone.querySelector("h1").textContent = anEvent.title.rendered;
  clone.querySelector(".description").innerHTML = anEvent.content.rendered;
  eventlist.appendChild(clone);
}
