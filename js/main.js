// =========================================================
// 1. PROYECTOS
// Para sumar o editar un proyecto, cambiá este array.
// "image": guardá una captura en la carpeta img/ con ese nombre.
// Si la imagen no existe, se muestra un afiche con los colores del proyecto.
// =========================================================
const projects = [
  {
    name: "Valeria Salón de Belleza",
    url: "https://valeria-salon-de-belleza.netlify.app/",
    image: "img/valeria.png",
    colors: ["#f6d6dc", "#3b2a2f"], // [fondo, texto] del afiche
    tags: ["Astro", "CSS", "Mobile-first", "Netlify"],
    type: { es: "peluquería", en: "hair salon" },
    desc: {
      es: "Web profesional para un salón de belleza, pensada mobile-first porque casi todas las visitas llegan desde el celular. Enlaza con la tienda del Rincón de Luciérnaga.",
      en: "Professional website for a beauty salon, built mobile-first because almost every visit comes from a phone. It links to the Rincón de Luciérnaga store.",
    },
  },
  {
    name: "El Rincón de Luciérnaga",
    url: "https://el-rincon-de-luciernaga.netlify.app/",
    image: "img/rincon.png",
    colors: ["#f7f0e1", "#1f4b5a"],
    tags: ["HTML", "CSS", "JavaScript", "WhatsApp"],
    type: { es: "tienda de accesorios", en: "accessories shop" },
    desc: {
      es: "Catálogo con categorías, detalle de producto, carrito y pedido directo por WhatsApp, sin backend. Los productos viven en un archivo JS para cargarlos fácil.",
      en: "Catalog with categories, product details, a cart and checkout via WhatsApp, with no backend. Products live in a JS file so they're easy to update.",
    },
  },
  {
    name: "Meli Pasteles",
    url: "https://julieta-git.github.io/meli-pasteles/",
    image: "img/meli.png",
    colors: ["#f3dcf0", "#5b3a78"],
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    type: { es: "pastelería", en: "bakery" },
    desc: {
      es: "Sitio para una pastelería con catálogo, configurador de tortas y galería deslizable con lightbox. Preparado para conectarse a una base de datos en una próxima etapa.",
      en: "Website for a bakery with a catalog, a cake builder and a swipeable gallery with lightbox. Ready to connect to a database in a future stage.",
    },
  },
  {
    name: "La Familia · Eventos",
    url: "https://la-familia-organizacion-de-eventos.netlify.app/",
    image: "img/la-familia.png",
    colors: ["#1e2140", "#f2d48a"],
    tags: ["HTML", "CSS", "JavaScript", "Figma"],
    type: { es: "organización de eventos", en: "event planning" },
    desc: {
      es: "Landing para una empresa de eventos que cuenta sus servicios como los momentos de una noche de fiesta: “Así se vive una noche con nosotros”.",
      en: "Landing page for an event company that tells its services as the moments of a party night: “This is what a night with us feels like”.",
    },
  },
];

// =========================================================
// 2. IDIOMA
// =========================================================
let currentLang = "es";

// localStorage puede fallar (modo incógnito, etc.), por eso el try/catch
try {
  const saved = localStorage.getItem("lang");
  if (saved === "es" || saved === "en") currentLang = saved;
  else if (navigator.language && navigator.language.startsWith("en")) currentLang = "en";
} catch (e) { /* si falla, queda en español */ }

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = translations[lang][el.dataset.i18n];
    if (text) el.innerHTML = text;
  });

  renderProjects();

  try { localStorage.setItem("lang", lang); } catch (e) {}
}

document.getElementById("langToggle").addEventListener("click", () => {
  applyLanguage(currentLang === "es" ? "en" : "es");
});

// =========================================================
// 3. TARJETAS DE PROYECTOS
// =========================================================
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  const t = translations[currentLang];

  grid.innerHTML = projects.map((p) => `
    <article class="project">
      <div class="project__browser">
        <div class="project__bar"><i></i><i></i><i></i><span>${p.url.replace("https://", "")}</span></div>
        <a class="project__shot" href="${p.url}" target="_blank" rel="noopener" aria-label="${p.name}">
          <div class="project__fallback" style="background:${p.colors[0]};color:${p.colors[1]}">${p.name}</div>
          <img src="${p.image}" alt="Captura de ${p.name}" loading="lazy" onerror="this.remove()" />
        </a>
      </div>
      <div class="project__body">
        <div class="project__top">
          <div>
            <span class="project__type">${p.type[currentLang]}</span>
            <h3>${p.name}</h3>
          </div>
          <span class="badge">${t["projects.badge"]}</span>
        </div>
        <p>${p.desc[currentLang]}</p>
        <ul class="tags">${p.tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>
        <a class="btn btn--dark" href="${p.url}" target="_blank" rel="noopener">${t["projects.visit"]}</a>
      </div>
    </article>
  `).join("");

  observeReveal(grid.querySelectorAll(".project"));
}

// =========================================================
// 4. COPIAR EMAIL
// =========================================================
const mailBtn = document.getElementById("copyMail");
mailBtn.addEventListener("click", async () => {
  const hint = mailBtn.querySelector(".mail__hint");
  try {
    await navigator.clipboard.writeText("romerojulietaestefania@gmail.com");
    hint.textContent = translations[currentLang]["contact.copied"];
  } catch (e) {
    window.location.href = "mailto:romerojulietaestefania@gmail.com";
  }
  setTimeout(() => (hint.textContent = translations[currentLang]["contact.copy"]), 2000);
});

// =========================================================
// 5. ANIMACIÓN AL HACER SCROLL
// =========================================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

function observeReveal(elements) {
  elements.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}

observeReveal(document.querySelectorAll(".section__head, .about, .service, .contact"));

// Arranca todo
applyLanguage(currentLang);
