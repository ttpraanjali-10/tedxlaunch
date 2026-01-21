let timeLeft = 15;

const countdownEl = document.getElementById("countdown");
const launchBtn = document.getElementById("launchBtn");

/* 🔗 PASTE YOUR ACTUAL TEDx WEBSITE LINK BELOW */
const redirectURL = "https://www.tedxsmec.info/";

const timer = setInterval(() => {
    timeLeft--;
    countdownEl.textContent = timeLeft;

    if (timeLeft <= 10 && timeLeft > 0) {
        countdownEl.classList.add("blink");
    }
    if (timeLeft <= 0) {
        clearInterval(timer);
        countdownEl.textContent = "READY";
    

        // Enable & glow launch button
        launchBtn.classList.add("glow-btn");
        launchBtn.style.opacity = "1";
        launchBtn.style.pointerEvents = "auto";
    }
}, 1000);

launchBtn.addEventListener("click", () => {
    window.location.href = redirectURL;
});
