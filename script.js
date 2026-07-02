function openBook() {

const pages = document.querySelectorAll('.page');

pages.forEach(page => {
page.classList.remove('hidden');
});

}

setInterval(() => {
const hearts = document.createElement("div");
hearts.innerHTML = "💖";
hearts.style.position = "fixed";
hearts.style.left = Math.random() * 100 + "vw";
hearts.style.bottom = "0";
hearts.style.fontSize = "20px";
hearts.style.animation = "floatUp 5s linear";
document.body.appendChild(hearts);

setTimeout(() => {
hearts.remove();
}, 5000);

}, 800);
