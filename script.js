// Move Particle Background
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#ff1a1a" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ff1a1a",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 3
    }
  },

  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      }
    },

    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 }
    }
  },

  retina_detect: true
});

// Hero Paragraph Typing
const titles = [
  "Computer Science Student",
  "Army Veteran",
  "Problem Solver",
  "Creative Thinker"
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

const currentTitle = titles[titleIndex];
const typingElement = document.getElementById("typing");

if (isDeleting) {
  charIndex--;
} else {
  charIndex++;
}

typingElement.textContent = currentTitle.substring(0, charIndex);

let speed = isDeleting ? 40 : 80;

if (!isDeleting && charIndex === currentTitle.length) {
  speed = 1500;
  isDeleting = true;
}

else if (isDeleting && charIndex === 0) {
  isDeleting = false;
  titleIndex = (titleIndex + 1) % titles.length;
  speed = 500;
}

setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Skills Animation
const skillFills = document.querySelectorAll(".skill-fill");

function animateSkills(){

skillFills.forEach(skill => {

const skillPosition = skill.getBoundingClientRect().top;
const screenPosition = window.innerHeight;

if(skillPosition < screenPosition - 100){

const skillLevel = skill.getAttribute("data-skill");
skill.style.width = skillLevel + "%";

}

});

}

window.addEventListener("scroll", animateSkills);

// 3D Hover Project
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

  card.addEventListener("mousemove", (e) => {

  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = (y - centerY) / 10;
  const rotateY = (centerX - x) / 10;

  card.style.transform =
  `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});

// Initialize EmailJS
(function () {
  emailjs.init("lSaHWLqz-iIj_Wthp"); // 🔑 Replace YOUR_PUBLIC_KEY
})();

const form = document.getElementById("contact-form");
const status = document.getElementById("status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

    status.innerText = "Sending...";

    emailjs.sendForm("service_0rncfwh", "template_kq07sdl", this) // Replace YOUR_SERVICE_ID, and YOUR_TEMPLATE_ID
    .then(function () {
      status.innerText = "✅ Message sent successfully!";
      form.reset();
    })
    .catch(function (error) {
      status.innerText = "❌ Failed to send message.";
      console.error(error);
    });
});
