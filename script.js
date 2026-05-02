// Contact form alert
document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    this.reset();
  });

// Mobile menu toggle (simplified)
const mobileMenu = document.querySelector(".mobile-menu i");
const mobileDropdown = document.querySelector(".mobile-dropdown");

mobileMenu.addEventListener("click", () => {
  mobileDropdown.classList.toggle("active");
  mobileMenu.classList.toggle("fa-bars");
  mobileMenu.classList.toggle("fa-times");
});

document.querySelectorAll(".mobile-dropdown a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileDropdown.classList.remove("active");
    mobileMenu.classList.remove("fa-times");
    mobileMenu.classList.add("fa-bars");
  });
});

// Intersection Observer animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
  section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
  observer.observe(section);
});

document.querySelector(".hero").style.opacity = "1";
document.querySelector(".hero").style.transform = "translateY(0)";
