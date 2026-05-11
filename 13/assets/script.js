const carouselItems = [
  {
    src: "./images/super-1.jpg",
    alt: "Pasillo moderno de supermercado",
    caption: "Pasillos amplios y organizados para comprar con comodidad."
  },
  {
    src: "./images/super-2.jpg",
    alt: "Frutas y verduras frescas en supermercado",
    caption: "Frutas y verduras seleccionadas para una alimentación saludable."
  },
  {
    src: "./images/super-3.jpg",
    alt: "Cliente comprando productos en góndola",
    caption: "Promociones visibles y surtido completo en cada pasillo."
  },
  {
    src: "./images/super-4.jpg",
    alt: "Sector de alimentos y productos premium",
    caption: "Productos premium para elevar tu experiencia de compra."
  },
  {
    src: "./images/super-5.jpg",
    alt: "Área de cajas y atención al cliente",
    caption: "Atención ágil para que compres rápido y sin filas extensas."
  },
  {
    src: "./images/super-6.jpg",
    alt: "Compra familiar en supermercado",
    caption: "Un espacio pensado para toda la familia y todas sus necesidades."
  }
];

const imageEl = document.getElementById("carouselImage");
const captionEl = document.getElementById("carouselCaption");
const dotsEl = document.getElementById("carouselDots");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;
let autoSlide;

function renderDots() {
  dotsEl.innerHTML = "";
  carouselItems.forEach((_, idx) => {
    const dot = document.createElement("button");
    dot.className = `h-2.5 w-8 rounded-full transition ${idx === currentIndex ? "bg-emerald-600" : "bg-emerald-200"}`;
    dot.setAttribute("aria-label", `Ir a imagen ${idx + 1}`);
    dot.addEventListener("click", () => {
      currentIndex = idx;
      updateCarousel();
      resetAutoSlide();
    });
    dotsEl.appendChild(dot);
  });
}

function updateCarousel() {
  const item = carouselItems[currentIndex];
  imageEl.classList.add("opacity-40");
  setTimeout(() => {
    imageEl.src = item.src;
    imageEl.alt = item.alt;
    captionEl.textContent = item.caption;
    imageEl.classList.remove("opacity-40");
    renderDots();
  }, 150);
}

function goNext() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel();
}

function goPrev() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  updateCarousel();
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(goNext, 4500);
}

prevBtn?.addEventListener("click", () => {
  goPrev();
  resetAutoSlide();
});

nextBtn?.addEventListener("click", () => {
  goNext();
  resetAutoSlide();
});

renderDots();
resetAutoSlide();

const buttons = document.querySelectorAll(".acc-btn");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = document.getElementById(btn.dataset.target);
    const isHidden = target.classList.contains("hidden");

    document.querySelectorAll(".acc-panel").forEach((panel) => panel.classList.add("hidden"));
    document.querySelectorAll(".acc-btn span").forEach((icon) => {
      icon.textContent = "+";
    });

    if (isHidden) {
      target.classList.remove("hidden");
      btn.querySelector("span").textContent = "-";
    }
  });
});
