const input = document.getElementById("searchInput");
const cards = Array.from(document.querySelectorAll(".card"));
const empty = document.getElementById("emptyState");

input?.addEventListener("input", () => {
  const term = input.value.trim().toLowerCase();
  let visibleCount = 0;

  cards.forEach((card) => {
    const text = card.textContent.toLowerCase();
    const keywords = card.dataset.keywords || "";
    const visible = !term || text.includes(term) || keywords.includes(term);

    card.hidden = !visible;
    if (visible) visibleCount += 1;
  });

  empty.hidden = visibleCount > 0;
});
