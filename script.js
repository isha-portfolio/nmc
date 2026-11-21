const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
  primaryNav.classList.toggle("is-open", !isExpanded);
});

primaryNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    primaryNav.classList.remove("is-open");
  }
});

document.querySelector("#current-year").textContent = new Date().getFullYear();

document.querySelector("#enquiry-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const message = document.querySelector("#form-message");
  if (!form.reportValidity()) return;

  const studentName = new FormData(form).get("studentName").trim();
  message.textContent = `Thanks, ${studentName}! Your details are valid. This demo does not send enquiries to a server yet.`;
});
