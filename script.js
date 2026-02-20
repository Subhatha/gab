const quotes = [
    "You are stronger than your toughest days 💪",
    "Your presence makes a difference 🌟",
    "You are growing even when it feels slow 🌱",
    "Your heart is rare and beautiful 💖",
    "The future is brighter with you in it ✨"
];

const quoteBtn = document.getElementById("quoteBtn");
const quoteText = document.getElementById("quoteText");
const celebrateBtn = document.getElementById("celebrateBtn");
const particlesContainer = document.getElementById("particles");

quoteBtn.addEventListener("click", () => {
    const random = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[random];
});

celebrateBtn.addEventListener("click", () => {
    quoteText.textContent = "Today we celebrate YOU 🎉💛";
    createParticles(40);
});

function createParticles(count) {
    for (let i = 0; i < count; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");

        particle.style.left = Math.random() * 100 + "vw";
        particle.style.animationDuration = (5 + Math.random() * 5) + "s";

        particlesContainer.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 10000);
    }
}