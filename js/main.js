/*=========================================
MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  menuBtn.innerHTML = navLinks.classList.contains("show")
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

/*=========================================
CLOSE MENU AFTER CLICK
=========================================*/

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");

    menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

/*=========================================
STICKY HEADER
=========================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

/*=========================================
SCROLL REVEAL
=========================================*/

const reveals = document.querySelectorAll(
  ".about, .stats, .event-card, .timeline-item, .register, .footer",
);

function revealOnScroll() {
  const trigger = window.innerHeight - 120;

  reveals.forEach((item) => {
    const top = item.getBoundingClientRect().top;

    if (top < trigger) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/*=========================================
SMOOTH ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 120;

    if (scrollY >= top) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/*=========================================
BUTTON RIPPLE EFFECT
=========================================*/

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("span");

    const rect = this.getBoundingClientRect();

    ripple.style.left = e.clientX - rect.left + "px";

    ripple.style.top = e.clientY - rect.top + "px";

    ripple.className = "ripple";

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

/*=========================================
SCROLL TO TOP
=========================================*/

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

scrollBtn.className = "scroll-top";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

/*=========================================
RANDOM FIRE PARTICLES
=========================================*/

const hero = document.querySelector(".hero");

for (let i = 0; i < 40; i++) {
  const particle = document.createElement("span");

  particle.className = "ember";

  particle.style.left = Math.random() * 100 + "%";

  particle.style.animationDelay = Math.random() * 10 + "s";

  particle.style.animationDuration = 6 + Math.random() * 6 + "s";

  hero.appendChild(particle);
}
