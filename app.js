const hamberger = document.querySelector("#hamberger");
const menu = document.querySelector("#menu");

hamberger.addEventListener("click", () => {
	menu.classList.toggle("hidden");
	hamberger.classList.toggle("bg-white");
});
