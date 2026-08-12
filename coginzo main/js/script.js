// ===================== Data =====================
const SERVICES = [
  { icon: "◧", title: "Website Development", desc: "Fast, responsive sites built for conversion and scale." },
  { icon: "▣", title: "Web Application Development", desc: "Custom web apps engineered for real workflows." },
  { icon: "◱", title: "Mobile App Development", desc: "Native and cross-platform apps for iOS and Android." },
  { icon: "◈", title: "UI/UX Design", desc: "Interfaces people understand in seconds, not minutes." },
  { icon: "✦", title: "AI Solutions", desc: "Practical AI features that solve a real business problem." },
  { icon: "☁", title: "Cloud Deployment", desc: "Reliable, secure infrastructure that scales with demand." },
  { icon: "⛁", title: "E-commerce Development", desc: "Storefronts built to convert browsers into buyers." },
  { icon: "⇄", title: "API Integration", desc: "Clean connections between the tools you already run." },
  { icon: "⚙", title: "Software Maintenance", desc: "Ongoing fixes, updates, and performance tuning." },
  { icon: "◎", title: "IT Consulting", desc: "Straight advice on the right technology for your goals." }
];

const WHY = [
  { icon: "★", title: "Expert Team", desc: "Engineers and designers who've shipped production software." },
  { icon: "◆", title: "Modern Technologies", desc: "Current frameworks and tools, not legacy patchwork." },
  { icon: "⟲", title: "Agile Development", desc: "Short cycles, visible progress, room to adapt." },
  { icon: "◉", title: "Secure Solutions", desc: "Security considered from architecture, not bolted on after." },
  { icon: "⚡", title: "Fast Delivery", desc: "Momentum maintained from kickoff to launch." },
  { icon: "▲", title: "Scalable Architecture", desc: "Built to handle growth, not just today's load." },
  { icon: "◫", title: "Affordable Pricing", desc: "Transparent quotes with no hidden scope creep." },
  { icon: "☎", title: "Dedicated Support", desc: "A team that stays reachable after launch day." }
];

const TECH_GROUPS = [
  { name: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Next.js"] },
  { name: "Backend", items: ["Node.js", "Express"] },
  { name: "Database", items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"] },
  { name: "Cloud", items: ["AWS", "Azure", "Google Cloud"] },
  { name: "Mobile", items: ["Flutter", "Android"] },
  { name: "AI", items: ["Python", "TensorFlow", "OpenAI", "LangChain"] }
];

const PROCESS = [
  { title: "Discovery", desc: "Understanding your goals and users." },
  { title: "Planning", desc: "Mapping scope, timeline, and stack." },
  { title: "UI/UX Design", desc: "Wireframes into polished interfaces." },
  { title: "Development", desc: "Building with clean, tested code." },
  { title: "Testing", desc: "QA across devices and edge cases." },
  { title: "Deployment", desc: "Shipping to production, monitored." },
  { title: "Support", desc: "Ongoing maintenance after launch." }
];

const FAQS = [
  { q: "How long does development take?", a: "Timelines vary by scope — a typical website takes 2-4 weeks, while a full web or mobile application usually runs 6-12 weeks. We'll give you a firm estimate after the discovery phase." },
  { q: "Do you provide maintenance?", a: "Yes. We offer ongoing maintenance packages covering updates, monitoring, bug fixes, and performance tuning after launch." },
  { q: "Can you redesign existing websites?", a: "Absolutely. We regularly modernize existing sites — improving design, performance, and code quality while preserving what already works." },
  { q: "Do you develop mobile apps?", a: "Yes, we build both native and cross-platform mobile apps using Flutter and native Android development." },
  { q: "Do you provide cloud deployment?", a: "Yes. We deploy and manage infrastructure on AWS, Azure, and Google Cloud, including CI/CD pipelines and monitoring." }
];

const RATE_CARD = [
  {
    id: "billing",
    label: "Billing Software",
    tiers: [
      {
        tier: "Basic", name: "Billing / Invoicing", price: "₹9,999 – ₹14,999", period: "one-time",
        desc: "Single-user offline billing for small shops and counters.",
        features: ["Single user, offline", "Sales invoice, basic stock", "Daily sales report", "Manual local backup", "15 days free support"],
        featured: false
      },
      {
        tier: "Standard", name: "Billing / Invoicing", price: "₹19,999 – ₹27,999", period: "one-time",
        desc: "GST-ready billing with inventory for multi-counter LAN setups.",
        features: ["Up to 3 users, LAN", "GST invoicing, inventory, purchase", "Sales, stock & GST reports", "Barcode & thermal printer support", "Auto local backup", "1 month free support"],
        featured: true
      },
      {
        tier: "Premium", name: "Billing / Invoicing", price: "₹39,999 – ₹59,999+", period: "one-time",
        desc: "Cloud multi-branch billing with full accounting & analytics.",
        features: ["Unlimited users, cloud multi-branch", "GST, inventory, purchase, ledger, expense", "Advanced analytics & P&L dashboard", "Barcode, printer, POS hardware ready", "Auto cloud backup", "3 months free support"],
        featured: false
      }
    ]
  },
  {
    id: "custom",
    label: "Custom Software",
    tiers: [
      {
        tier: "Basic", name: "Custom Software", price: "₹14,999 – ₹24,999", period: "one-time",
        desc: "A single-purpose desktop or web tool for one workflow.",
        features: ["Single-purpose desktop/web tool", "Local database (SQLite)", "Single user role", "Local install"],
        featured: false
      },
      {
        tier: "Standard", name: "Custom Software", price: "₹29,999 – ₹49,999", period: "one-time",
        desc: "A business management system with role-based access.",
        features: ["Business management system", "MySQL / SQL Server database", "Role-based access (2–3 roles)", "1–2 third-party API integrations", "On-premise / private server deployment"],
        featured: true
      },
      {
        tier: "Premium", name: "Custom Software", price: "₹59,999 – ₹1,49,999+", period: "one-time",
        desc: "An enterprise, multi-module ERP-style system.",
        features: ["Enterprise / multi-module ERP-style", "Scalable, replicated cloud database", "Full RBAC with audit logs", "Multiple APIs, payment/SMS/email gateways", "Cloud hosted, CI/CD ready"],
        featured: false
      }
    ]
  },
  {
    id: "android",
    label: "Android App",
    tiers: [
      {
        tier: "Basic", name: "Android App", price: "₹14,999 – ₹22,999", period: "one-time",
        desc: "A simple native app with a handful of static screens.",
        features: ["3–5 static/simple screens", "No backend / login required", "Play Store publishing not included"],
        featured: false
      },
      {
        tier: "Standard", name: "Android App", price: "₹29,999 – ₹44,999", period: "one-time",
        desc: "An API-driven app with login and basic notifications.",
        features: ["8–15 screens, API driven", "REST API + database backend", "Email/OTP login", "Basic push notifications (Firebase)", "Optional payment gateway add-on", "Play Store publishing included"],
        featured: true
      },
      {
        tier: "Premium", name: "Android App", price: "₹59,999 – ₹1,29,999+", period: "one-time",
        desc: "A complex app with custom backend and integrated payments.",
        features: ["15+ screens, complex logic", "Custom backend + admin panel", "Multi-role, social login", "Integrated payments (Razorpay/UPI/etc.)", "Advanced, segmented push notifications", "Play Store publishing + ASO setup"],
        featured: false
      }
    ]
  },
  {
    id: "flutter",
    label: "Flutter App",
    tiers: [
      {
        tier: "Basic", name: "Flutter App (Android + iOS)", price: "₹19,999 – ₹29,999", period: "one-time",
        desc: "A cross-platform app with a basic shared UI.",
        features: ["Android + iOS, basic UI", "5–8 screens", "Basic state management (Provider)", "Store publishing not included"],
        featured: false
      },
      {
        tier: "Standard", name: "Flutter App (Android + iOS)", price: "₹39,999 – ₹59,999", period: "one-time",
        desc: "An API-integrated cross-platform app, Play Store ready.",
        features: ["Android + iOS, API integrated", "10–18 screens", "Bloc / Riverpod state management", "REST API backend", "Play Store publishing included"],
        featured: true
      },
      {
        tier: "Premium", name: "Flutter App (Android + iOS)", price: "₹69,999 – ₹1,49,999+", period: "one-time",
        desc: "A full Android, iOS and web build with offline sync.",
        features: ["Android + iOS + Web build", "18+ screens with animations", "Advanced state management, offline sync", "Custom backend + admin dashboard", "Play Store + App Store publishing included"],
        featured: false
      }
    ],
    note: "Apple App Store publishing requires an active Apple Developer account (approx. $99/year), billed at actuals."
  },
  {
    id: "website",
    label: "Website",
    tiers: [
      {
        tier: "Basic", name: "Website", price: "₹4,999 – ₹8,999", period: "one-time",
        desc: "A template-based site to establish an online presence.",
        features: ["1–5 static pages", "Template-based design", "Basic on-page SEO", "Free static hosting*"],
        featured: false
      },
      {
        tier: "Standard", name: "Website", price: "₹12,999 – ₹19,999", period: "one-time",
        desc: "A semi-custom, CMS-enabled site with standard SEO.",
        features: ["6–12 pages, CMS enabled", "Semi-custom design", "WordPress / custom CMS", "Standard on-page SEO", "Optional e-commerce add-on", "Free / shared hosting*"],
        featured: true
      },
      {
        tier: "Premium", name: "Website", price: "₹24,999 – ₹59,999+", period: "one-time",
        desc: "A fully custom, dynamic site or online store.",
        features: ["Dynamic / e-commerce, unlimited pages", "Fully custom UI/UX design", "Custom CMS + admin dashboard", "Full cart, payment & order management", "Advanced SEO + speed optimisation", "Managed cloud hosting"],
        featured: false
      }
    ],
    note: "*Free hosting applies to static/JAMstack sites deployed on a Netlify-style platform. See the hosting table below."
  },
  {
    id: "student",
    label: "Student Projects",
    tiers: [
      {
        tier: "Basic", name: "Student / Academic Project", price: "₹1,999 – ₹3,999", period: "one-time",
        desc: "For mini projects and school-level submissions.",
        features: ["Mini project / school level", "1 core module", "Basic report", "Local run demo"],
        featured: false
      },
      {
        tier: "Standard", name: "Student / Academic Project", price: "₹4,999 – ₹7,999", period: "one-time",
        desc: "For degree final-year projects with DB integration.",
        features: ["Degree final year project", "2–3 modules, DB integrated", "Full report + PPT", "Local + video demo", "1 review support session"],
        featured: true
      },
      {
        tier: "Premium", name: "Student / Academic Project", price: "₹9,999 – ₹16,999", period: "one-time",
        desc: "For MCA/M.Tech and full-stack capstone submissions.",
        features: ["MCA/M.Tech / full-stack capstone", "Full application, multi-module", "IEEE-format report, PPT & UML diagrams", "Live hosted demo link", "Unlimited review support till submission"],
        featured: false
      }
    ]
  }
];

const HOSTING_RATES = [
  { item: "Domain registration (.com/.in) — 1st year", basic: "₹699 – ₹999 /yr", standard: "₹699 – ₹999 /yr", premium: "₹699 – ₹999 /yr" },
  { item: "Domain renewal (from year 2)", basic: "At actual registrar cost + ₹200 service fee /yr", standard: "", premium: "", span: true },
  { item: "Hosting — Static/JAMstack sites", basic: "Free (Netlify-style CDN)*", standard: "Free (Netlify-style CDN)*", premium: "Free / Upgradable" },
  { item: "Hosting — Dynamic/DB-driven sites", basic: "₹2,499 /yr (shared)", standard: "₹3,999 /yr", premium: "₹5,999 – ₹12,999 /yr (cloud)" },
  { item: "App backend / server hosting", basic: "—", standard: "₹3,999 – ₹5,999 /yr", premium: "₹7,999 – ₹19,999 /yr" },
  { item: "SSL Certificate", basic: "Free (auto-issued, included with all plans)", standard: "", premium: "", span: true },
  { item: "Annual Maintenance (bug fixes, minor updates)", basic: "15% of project cost /yr", standard: "18% of project cost /yr", premium: "20% of project cost /yr" }
];

const GENERAL_TERMS = [
  "All prices are exclusive of GST/applicable taxes unless stated otherwise.",
  "Payment terms: 50% advance to start the project, 50% on delivery before final handover/publishing.",
  "Delivery timeline depends on scope (Basic: 5–10 days, Standard: 2–4 weeks, Premium: 4–8 weeks) — an exact timeline is shared at quotation stage.",
  "Domain and third-party costs (Apple Developer account, SMS/payment gateway fees, premium plugins) are billed at actual cost, not included in the development price.",
  "Free hosting/support periods apply only during the offer duration mentioned per plan; renewal charges apply from year 2 onward.",
  "Prices are indicative starting rates for standard scope; the final quote may vary based on exact requirements, timeline and revisions requested.",
  "Source code handover is included in Standard & Premium plans; the Basic plan includes the working deliverable, with source code available on request."
];

// ===================== Render helpers =====================
function renderServices() {
  const grid = document.getElementById("servicesGrid");
  if (!grid) return;
  grid.innerHTML = SERVICES.map(s => `
    <div class="service-card" data-reveal>
      <div class="service-icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>
  `).join("");
}

function renderWhy() {
  const grid = document.getElementById("whyGrid");
  if (!grid) return;
  grid.innerHTML = WHY.map(w => `
    <div class="why-card" data-reveal>
      <div class="why-icon">${w.icon}</div>
      <h3>${w.title}</h3>
      <p>${w.desc}</p>
    </div>
  `).join("");
}

function renderTech() {
  const wrap = document.getElementById("techGroups");
  if (!wrap) return;
  wrap.innerHTML = TECH_GROUPS.map(g => `
    <div data-reveal>
      <span class="tech-group-title">${g.name}</span>
      <div class="tech-chips">
        ${g.items.map(i => `<div class="tech-chip"><span class="tech-dot"></span>${i}</div>`).join("")}
      </div>
    </div>
  `).join("");
}

function renderTimeline() {
  const wrap = document.getElementById("timeline");
  if (!wrap) return;
  wrap.innerHTML = PROCESS.map((p, i) => `
    <div class="timeline-step" data-reveal>
      <span class="timeline-num">0${i + 1}</span>
      <h4>${p.title}</h4>
    </div>
  `).join("");
}

function renderFaq() {
  const wrap = document.getElementById("faqList");
  if (!wrap) return;
  wrap.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item" data-index="${i}">
      <button class="faq-q" aria-expanded="false">
        <span>${f.q}</span><span class="plus">+</span>
      </button>
      <div class="faq-a"><p>${f.a}</p></div>
    </div>
  `).join("");

  wrap.querySelectorAll(".faq-item").forEach(item => {
    const btn = item.querySelector(".faq-q");
    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      wrap.querySelectorAll(".faq-item").forEach(i => {
        i.classList.remove("open");
        i.querySelector(".faq-q").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
}

let activeRateCategory = RATE_CARD[0].id;

function renderPricingTabs() {
  const tabs = document.getElementById("pricingTabs");
  if (!tabs) return;
  tabs.innerHTML = RATE_CARD.map(cat => `
    <button class="pricing-tab${cat.id === activeRateCategory ? " active" : ""}" data-cat="${cat.id}" type="button">${cat.label}</button>
  `).join("");

  tabs.querySelectorAll(".pricing-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      activeRateCategory = btn.dataset.cat;
      renderPricingTabs();
      renderPricingCards();
      initReveal();
    });
  });
}

function renderPricingCards() {
  const grid = document.getElementById("pricingGrid");
  const noteEl = document.getElementById("pricingCatNote");
  if (!grid) return;
  const cat = RATE_CARD.find(c => c.id === activeRateCategory) || RATE_CARD[0];

  grid.innerHTML = cat.tiers.map(p => `
    <div class="pricing-card glass-card${p.featured ? " featured" : ""}" data-reveal>
      ${p.featured ? '<span class="pricing-badge">Most Popular</span>' : ""}
      <span class="pricing-tier">${p.tier}</span>
      <h3 class="pricing-name">${p.name}</h3>
      <div class="pricing-price">${p.price}${p.period ? ` <span>${p.period}</span>` : ""}</div>
      <p class="pricing-desc">${p.desc}</p>
      <ul class="pricing-features">
        ${p.features.map(f => `<li>${f}</li>`).join("")}
      </ul>
      <a href="index.html#contact" class="btn btn-primary btn-full">Get a Quote</a>
    </div>
  `).join("");

  if (noteEl) noteEl.textContent = cat.note || "";
}

function renderPricing() {
  renderPricingTabs();
  renderPricingCards();
}

function renderHostingTable() {
  const wrap = document.getElementById("hostingTableWrap");
  if (!wrap) return;
  wrap.innerHTML = `
    <table class="hosting-table">
      <thead>
        <tr><th>Item</th><th>Basic</th><th>Standard</th><th>Premium</th></tr>
      </thead>
      <tbody>
        ${HOSTING_RATES.map(r => r.span ? `
          <tr><td>${r.item}</td><td colspan="3">${r.basic}</td></tr>
        ` : `
          <tr><td>${r.item}</td><td>${r.basic}</td><td>${r.standard}</td><td>${r.premium}</td></tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function renderTerms() {
  const wrap = document.getElementById("termsList");
  if (!wrap) return;
  wrap.innerHTML = GENERAL_TERMS.map(t => `<li>${t}</li>`).join("");
}

// ===================== Nav behavior =====================
function initNav() {
  const nav = document.getElementById("siteNav");
  const toggle = document.getElementById("menuToggle");
  const links = document.getElementById("navLinks");
  if (!nav || !toggle || !links) return;

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  }, { passive: true });

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.classList.remove("open");
    });
  });
}

// ===================== Theme toggle =====================
function initThemeToggle() {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;
  const root = document.documentElement;

  const setLabel = (theme) => {
    btn.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  };
  setLabel(root.getAttribute("data-theme") || "light");

  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("coginzo-theme", next);
    setLabel(next);
  });
}

// ===================== Founder photo double-tap -> portfolio =====================
function initFounderPortfolioLinks() {
  const photos = document.querySelectorAll(".founder-photo[data-portfolio]");
  if (!photos.length) return;

  photos.forEach(photo => {
    const url = photo.getAttribute("data-portfolio");
    let lastTap = 0;

    // Desktop: native double-click
    photo.addEventListener("dblclick", () => {
      window.open(url, "_blank", "noopener");
    });

    // Touch: manual double-tap detection
    photo.addEventListener("touchend", (e) => {
      const now = Date.now();
      if (now - lastTap < 350) {
        e.preventDefault();
        window.open(url, "_blank", "noopener");
      }
      lastTap = now;
    });
  });
}

// ===================== Scroll progress + back to top =====================
function initScrollUtils() {
  const progress = document.getElementById("scrollProgress");
  const backBtn = document.getElementById("backToTop");
  if (!progress || !backBtn) return;

  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    progress.style.width = scrolled + "%";
    backBtn.classList.toggle("show", window.scrollY > 600);
  }, { passive: true });

  backBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ===================== Cursor glow =====================
function initCursorGlow() {
  const glow = document.getElementById("cursorGlow");
  if (!glow) return;
  if (window.matchMedia("(max-width: 900px)").matches) return;
  window.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  }, { passive: true });
}

// ===================== Reveal on scroll =====================
function initReveal() {
  const els = document.querySelectorAll("[data-reveal]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(el => observer.observe(el));
}

// ===================== Animated counters =====================
function initCounters() {
  const stats = document.querySelectorAll(".stat[data-count]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || "";
      const numEl = el.querySelector(".stat-num");
      let current = 0;
      const duration = 1400;
      const start = performance.now();

      function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        current = Math.round(target * eased);
        numEl.textContent = current + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  stats.forEach(s => observer.observe(s));
}

// ===================== Contact form =====================
const EMAILJS_PUBLIC_KEY = "XLSTQ8OnaSzzZ8CUO";
const EMAILJS_SERVICE_ID = "service_coginzo";
const EMAILJS_TEMPLATE_ID = "template_coginzo";

function initForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  const success = document.getElementById("formSuccess");
  const error = document.getElementById("formError");
  const submitBtn = form.querySelector("button[type='submit']");

  if (window.emailjs) {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    error.style.display = "none";
    const originalLabel = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form)
      .then(() => {
        success.classList.add("show");
        form.reset();
        setTimeout(() => success.classList.remove("show"), 6000);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        const detail = (err && (err.text || err.message)) ? ` (${err.text || err.message})` : "";
        error.textContent = "Something went wrong sending your message" + detail + ". Please try again or email us directly.";
        error.style.display = "block";
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
      });
  });
}

// ===================== Particle background =====================
function initParticles() {
  const canvas = document.getElementById("particleCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let particles = [];
  let width, height;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resize() {
    const hero = canvas.parentElement.parentElement;
    width = canvas.width = hero.offsetWidth;
    height = canvas.height = hero.offsetHeight;
  }

  function createParticles() {
    const count = Math.min(60, Math.floor((width * height) / 22000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.6 + 0.5,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.5 + 0.15
    }));
  }

  const colors = ["124,255,78", "46,213,115", "0,212,255"];

  function draw() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${colors[i % colors.length]},${p.alpha})`;
      ctx.fill();
    });
    if (!reduced) requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();
  window.addEventListener("resize", () => { resize(); createParticles(); }, { passive: true });
}

// ===================== Loader =====================
function initLoader() {
  const loader = document.getElementById("loader");
  if (!loader) return;
  window.addEventListener("load", () => {
    setTimeout(() => loader.classList.add("hidden"), 300);
  });
  // fallback in case load already fired
  setTimeout(() => loader.classList.add("hidden"), 2500);
}

// ===================== Init =====================
document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  renderWhy();
  renderTech();
  renderTimeline();
  renderFaq();
  renderPricing();
  renderHostingTable();
  renderTerms();

  initNav();
  initThemeToggle();
  initFounderPortfolioLinks();
  initScrollUtils();
  initCursorGlow();
  initReveal();
  initCounters();
  initForm();
  initParticles();
  initLoader();

  // re-observe dynamically injected reveal elements
  initReveal();
});
