const palette = ["#7dd3fc", "#fcd34d", "#fdba74", "#34d399", "#f9a8d4"];

function createSparkBurst(sparkArea, originX, originY, count = 22) {
  for (let i = 0; i < count; i += 1) {
    const spark = document.createElement("span");
    spark.className = "spark";

    const angle = (Math.PI * 2 * i) / count;
    const distance = 70 + Math.random() * 90;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    spark.style.left = `${originX}px`;
    spark.style.top = `${originY}px`;
    spark.style.setProperty("--x", `${x}px`);
    spark.style.setProperty("--y", `${y}px`);
    spark.style.background =
      palette[Math.floor(Math.random() * palette.length)];

    sparkArea.appendChild(spark);
    spark.addEventListener("animationend", () => spark.remove(), {
      once: true,
    });
  }
}

function initAnimation() {
  const button = document.getElementById("magicBtn");
  const statusText = document.getElementById("statusText");
  const sparkArea = document.getElementById("sparkArea");

  if (!button || !statusText || !sparkArea) {
    console.error("Element animasi tidak ditemukan.");
    return;
  }

  button.addEventListener("click", () => {
    const buttonRect = button.getBoundingClientRect();
    const areaRect = sparkArea.getBoundingClientRect();
    const centerX = buttonRect.left + buttonRect.width / 2 - areaRect.left;
    const centerY = buttonRect.top + buttonRect.height / 2 - areaRect.top;

    button.classList.remove("burst");
    requestAnimationFrame(() => {
      button.classList.add("burst");
    });

    createSparkBurst(sparkArea, centerX, centerY);
    statusText.textContent = "Wow! Animasi aktif";
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAnimation, { once: true });
} else {
  initAnimation();
}
