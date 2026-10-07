const SECRET_PASSWORD = "kyra083126";
const START_DATE = new Date("2026-08-31T14:54:00");

const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("passwordInput");
const errorMessage = document.getElementById("errorMessage");
const counterDisplay = document.getElementById("datingCounter");

function formatDuration(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${days} days, ${hours}h ${minutes}m ${seconds}s`;
}

function updateCounter() {
  if (!counterDisplay) return;

  const elapsedMs = Date.now() - START_DATE.getTime();
  counterDisplay.textContent = `${formatDuration(elapsedMs)} together`;
}

passwordForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const enteredPassword = passwordInput.value.trim();

  if (enteredPassword === SECRET_PASSWORD) {
    document.body.classList.add("unlocked");
    passwordInput.value = "";
    errorMessage.textContent = "";
    updateCounter();
    return;
  }

  errorMessage.textContent = "Incorrect password. Try again.";
  passwordInput.value = "";
  passwordInput.focus();
});

passwordInput.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    passwordInput.value = "";
    errorMessage.textContent = "";
  }
});

updateCounter();
setInterval(updateCounter, 1000);
