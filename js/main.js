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
    image: null, // poné "img/archivo.png" si preferís una captura fija
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
    image: null, // poné "img/archivo.png" si preferís una captura fija
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
    image: null, // poné "img/archivo.png" si preferís una captura fija
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
    image: null, // poné "img/archivo.png" si preferís una captura fija
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
// 1b. SERVICIOS
// Para sumar, sacar o editar un servicio, cambiá este array.
// "color": coral, lilac, yellow o pink.
// "ideal": para quién es (se muestra en letra a mano).
// =========================================================
const services = [
  {
    color: "coral",
    example: "https://el-rincon-de-luciernaga.netlify.app/",
    title: { es: "Catálogo online", en: "Online catalog" },
    desc: {
      es: "Tus productos con fotos, precios, categorías y carrito. El pedido te llega directo por WhatsApp.",
      en: "Your products with photos, prices, categories and a cart. Orders arrive straight to your WhatsApp.",
    },
    ideal: { es: "tiendas, pastelerías, emprendimientos", en: "shops, bakeries, small brands" },
  },
  {
    color: "lilac",
    example: "https://valeria-salon-de-belleza.netlify.app/",
    title: { es: "Web para tu negocio", en: "Business website" },
    desc: {
      es: "Un sitio completo con tus servicios, galería de trabajos, preguntas frecuentes y contacto.",
      en: "A full website with your services, work gallery, FAQ and contact.",
    },
    ideal: { es: "salones, estéticas, servicios", en: "salons, studios, service businesses" },
  },
  {
    color: "yellow",
    example: "https://la-familia-organizacion-de-eventos.netlify.app/",
    title: { es: "Landing page", en: "Landing page" },
    desc: {
      es: "Una sola página para presentar tu marca o una promo, lista para compartir en redes.",
      en: "A single page to present your brand or a promo, ready to share on social media.",
    },
    ideal: { es: "lanzamientos, promos, Instagram", en: "launches, promos, Instagram" },
  },
  {
    color: "pink",
    title: { es: "Menú digital", en: "Digital menu" },
    desc: {
      es: "Tu carta con QR, fácil de actualizar y pensada para leerse cómoda en el celular.",
      en: "Your menu behind a QR code, easy to update and comfortable to read on a phone.",
    },
    ideal: { es: "cafeterías, bares, rotiserías", en: "cafés, bars, takeaways" },
  },
  {
    color: "yellow",
    example: "https://julieta-git.github.io/meli-pasteles/",
    title: { es: "Turnos y pedidos por WhatsApp", en: "Bookings & orders via WhatsApp" },
    desc: {
      es: "Tu cliente elige qué quiere y cuándo, y a vos te llega un mensaje ordenado con todos los datos.",
      en: "Your customer picks what and when, and you get a tidy message with every detail.",
    },
    ideal: { es: "peluquerías, viandas, tortas por encargo", en: "hair salons, meal prep, custom cakes" },
  },
  {
    color: "coral",
    example: "https://cumplebenja-10.vercel.app/",
    title: { es: "Invitaciones digitales", en: "Digital invitations" },
    desc: {
      es: "Una invitación web interactiva con cuenta regresiva, ubicación y confirmación de asistencia.",
      en: "An interactive web invitation with a countdown, location and RSVP.",
    },
    ideal: { es: "cumpleaños, casamientos, fiestas", en: "birthdays, weddings, parties" },
  },
  {
    color: "pink",
    title: { es: "Rediseño de tu web", en: "Website redesign" },
    desc: {
      es: "Renuevo tu sitio actual para que se vea moderno y funcione bien en el celular.",
      en: "I refresh your current site so it looks modern and works well on phones.",
    },
    ideal: { es: "webs viejas o que no se adaptan al celu", en: "outdated or non-mobile sites" },
  },
  {
    color: "lilac",
    title: { es: "Publicación y mantenimiento", en: "Launch & maintenance" },
    desc: {
      es: "Te ayudo con el dominio y el hosting, publico tu web y la mantengo actualizada.",
      en: "I help you with the domain and hosting, launch your site and keep it up to date.",
    },
    ideal: { es: "quien no quiere ocuparse de lo técnico", en: "anyone who'd rather skip the tech" },
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

  // el botón de idioma anuncia a qué idioma cambia (para lectores de pantalla)
  document.getElementById("langToggle").setAttribute("aria-label", lang === "es" ? "Switch to English" : "Cambiar a español");

  renderProjects();
  renderServices();

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
        <div class="project__bar" aria-hidden="true"><i></i><i></i><i></i><span>${p.url.replace("https://", "")}</span></div>
        <a class="project__shot" href="${p.url}" target="_blank" rel="noopener" aria-label="${p.name}">
          <span class="badge">${t["projects.badge"]}</span>
          <div class="project__fallback" style="background:${p.colors[0]};color:${p.colors[1]}">${p.name}</div>
          ${p.image
            ? `<img src="${p.image}" alt="Captura de ${p.name}" loading="lazy" onerror="this.remove()" />`
            : `<iframe class="project__live" src="${p.url}" title="Vista previa de ${p.name}" loading="lazy" tabindex="-1" aria-hidden="true"></iframe>`}
        </a>
      </div>
      <div class="project__body">
        <div class="project__top">
          <span class="project__type">${p.type[currentLang]}</span>
          <h3>${p.name}</h3>
        </div>
        <p>${p.desc[currentLang]}</p>
        <ul class="tags">${p.tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>
        <a class="btn btn--dark" href="${p.url}" target="_blank" rel="noopener">${t["projects.visit"]}</a>
      </div>
    </article>
  `).join("");

  observeReveal(grid.querySelectorAll(".project"));
  grid.querySelectorAll(".project__shot").forEach((shot) => previewObserver.observe(shot));
}

// Ajusta el tamaño de cada vista previa en vivo al ancho de su tarjeta
const previewObserver = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.style.setProperty("--s", entry.contentRect.width / 1280);
  });
});

function renderServices() {
  const grid = document.getElementById("servicesGrid");
  const idealLabel = currentLang === "es" ? "ideal para" : "great for";

  grid.innerHTML = services.map((s) => `
    <article class="service service--${s.color}">
      <h3>${s.title[currentLang]}</h3>
      <p>${s.desc[currentLang]}</p>
      ${s.example ? `<a class="service__example" href="${s.example}" target="_blank" rel="noopener">${translations[currentLang]["services.example"]} ↗</a>` : ""}
      <p class="service__ideal"><span>${idealLabel}:</span> ${s.ideal[currentLang]}</p>
    </article>
  `).join("");

  observeReveal(grid.querySelectorAll(".service"));
}

// =========================================================
// 3b. MENÚ DEL CELULAR
// =========================================================
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

function setMenu(open) {
  menuBtn.setAttribute("aria-expanded", String(open));
  mobileMenu.hidden = !open;
}
menuBtn.addEventListener("click", () => setMenu(mobileMenu.hidden));
mobileMenu.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !mobileMenu.hidden) { setMenu(false); menuBtn.focus(); }
});
document.addEventListener("click", (e) => {
  if (!mobileMenu.hidden && !e.target.closest(".nav")) setMenu(false);
});

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

observeReveal(document.querySelectorAll(".section__head, .about, .services__more, .contact"));

// Arranca todo
applyLanguage(currentLang);
