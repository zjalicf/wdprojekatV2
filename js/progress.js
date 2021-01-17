const article = document.querySelector("body");
const progressBar = document.querySelector(".progress");

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  let progress = 100 * scrollTop / scrollHeight;
  document.querySelector(".progress").style.width = progress + "%";
});