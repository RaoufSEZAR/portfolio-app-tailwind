const hamberger = document.querySelector("#hamberger");
const menu = document.querySelector("#menu");
const body = document.querySelector("body");
const moon = document.querySelector("#moon");
const hLink = document.querySelectorAll(".hLink");

hamberger.addEventListener("click", () => {
	menu.classList.toggle("hidden");
	hamberger.classList.toggle("bg-white");
});
moon.addEventListener("click", () => {
	body.classList.toggle("dark");
});
hLink.forEach((link) => {
	link.addEventListener("click", () => {
		menu.classList.toggle("hidden");
		hamberger.classList.toggle("bg-white");
	});
});
