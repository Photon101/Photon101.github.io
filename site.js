const navToggle = document.querySelector("[data-nav-toggle]");
const siteNav = document.querySelector("[data-site-nav]");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    document.body.classList.toggle("nav-open", !isOpen);
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    }
  });
}

const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const portfolioCards = Array.from(document.querySelectorAll("[data-tags]"));

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter || "all";

    filterButtons.forEach((control) => {
      control.classList.toggle("active", control === button);
    });

    portfolioCards.forEach((card) => {
      const tags = (card.dataset.tags || "").split(" ");
      card.hidden = filter !== "all" && !tags.includes(filter);
    });
  });
});
