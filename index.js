      const faqItems = document.querySelectorAll(".faq-item");
      document
        .querySelector(".hamburger")
        .addEventListener("click", function () {
          this.classList.toggle("active");
          document.querySelector(".side-window").classList.toggle("active");
        });

      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", function () {
          document.querySelector(".hamburger").classList.remove("active");
          document.querySelector(".side-window").classList.remove("active");
        });
      });

      faqItems.forEach((item) => {
        const question = item.querySelector(".question");
        const answer = item.querySelector(".answer");
        const toggle = item.querySelector(".toggle");

        question.addEventListener("click", () => {
          const isVisible = answer.style.display === "block";

          // Hide all answers and reset all toggles
          faqItems.forEach((i) => {
            i.querySelector(".answer").style.display = "none";
            i.querySelector(".toggle").textContent = "+";
          });

          // Toggle the current answer
          if (!isVisible) {
            answer.style.display = "block";
            toggle.textContent = "x";
          }
        });
      });
      document.querySelectorAll(".faq-item .question").forEach((item) => {
        item.addEventListener("click", () => {
          const parent = item.parentNode;
          parent.classList.toggle("active");
        });
      });
      document.addEventListener("DOMContentLoaded", function () {
        const content = document.querySelector(".hero .content");
        const illustration = document.querySelector(".hero .illustration");
        const section = document.querySelector(".section");
        const observerOptions = {
          threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              section.classList.add("visible");
              section.classList.remove("hidden");
            }
          });
        }, observerOptions);

        observer.observe(section);

        window.addEventListener("scroll", function () {
          const scrollPosition = window.scrollY;

          content.style.transform = `translateX(${scrollPosition * -0.5}px)`;
          illustration.style.transform = `translateX(${
            scrollPosition * 0.5
          }px)`;
        });
      });

