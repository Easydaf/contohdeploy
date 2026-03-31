const button = document.getElementById("magicBtn");
const statusText = document.getElementById("statusText");
const sparkArea = document.getElementById("sparkArea");

const palette = ["#7dd3fc", "#fcd34d", "#fdba74", "#34d399", "#f9a8d4"];

function createSparkBurst(originX, originY, count = 18) {
  for (let i = 0; i < count; i += 1) {
    const spark = document.createElement("span");
    spark.className = "spark";

    const angle = (Math.PI * 2 * i) / count;
    const distance = 60 + Math.random() * 70;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    spark.style.left = `${originX}px`;
    spark.style.top = `${originY}px`;
    spark.style.setProperty("--x", `${x}px`);
    spark.style.setProperty("--y", `${y}px`);
    spark.style.background =
      palette[Math.floor(Math.random() * palette.length)];

    sparkArea.appendChild(spark);

    spark.addEventListener("animationend", () => {
      spark.remove();
    });
  }
}

button.addEventListener("click", () => {
  const rect = button.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  button.classList.remove("burst");
  void button.offsetWidth;
  button.classList.add("burst");

  createSparkBurst(centerX, centerY);
  statusText.textContent = "Wow! Animasi aktif";
});
