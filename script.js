window.addEventListener("scroll", () => {
document.querySelectorAll(".card").forEach(card => {
let rect = card.getBoundingClientRect();
if (rect.top < window.innerHeight - 50) {
card.style.opacity = 1;
card.style.transform = "translateY(0)";
}
});
});
