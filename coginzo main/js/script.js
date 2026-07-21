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

// ===================== Render helpers =====================
function renderServices() {
  const grid = document.getElementById("servicesGrid");
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
  wrap.innerHTML = PROCESS.map((p, i) => `
    <div class="timeline-step" data-reveal>
      <span class="timeline-num">0${i + 1}</span>
      <h4>${p.title}</h4>
    </div>
  `).join("");
}

function renderFaq() {
  const wrap = document.getElementById("faqList");
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

// ===================== Nav behavior =====================
function initNav() {
  const nav = document.getElementById("siteNav");
  const toggle = document.getElementById("menuToggle");
  const links = document.getElementById("navLinks");

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

// ===================== Scroll progress + back to top =====================
function initScrollUtils() {
  const progress = document.getElementById("scrollProgress");
  const backBtn = document.getElementById("backToTop");

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
const EMAILJS_PUBLIC_KEY = "yHI7jsB37av2GrDVk";
const EMAILJS_SERVICE_ID = "service_coginzo";
const EMAILJS_TEMPLATE_ID = "template_coginzo";

function initForm() {
  const form = document.getElementById("contactForm");
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

  initNav();
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
