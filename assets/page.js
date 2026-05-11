const btn = document.getElementById("ctaButton");
const note = document.getElementById("note");

btn?.addEventListener("click", () => {
  const message = btn.dataset.message || "Gracias por tu interes.";
  note.textContent = message;
  note.hidden = false;
});
