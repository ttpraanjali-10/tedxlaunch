let timeLeft = 15;

const countdownEl = document.getElementById("countdown");
const launchBtn = document.getElementById("launchBtn");

/* 🔗 PASTE YOUR ACTUAL TEDx WEBSITE LINK BELOW */
const redirectURL = "PASTE_YOUR_LINK_HERE";

const timer = setInterval(() => {
    timeLeft--;
    countdownEl.textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(timer);
        countdownEl.textContent = "READY";

        // Enable & glow only the launch button
        launchBtn.classList.add("glow-btn");
        launchBtn.style.opacity = "1";
        launchBtn.style.pointerEvents = "auto";
    }
}, 1000);

launchBtn.addEventListener("click", () => {
    window.location.href = redirectURL;
});
