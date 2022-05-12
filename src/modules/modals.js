const modals = () => {
  const headerModal = document.querySelector(".header-modal");
  const servicesModal = document.querySelector(".services-modal");
  const overlay = document.querySelector(".overlay");

  document.addEventListener("click", (e) => {
    if (e.target.closest(".button")) {
      e.preventDefault();
      if (!headerModal.classList.contains("header-modal--opened")) {
        headerModal.classList.add("header-modal--opened");
        overlay.style.display = "block";
      }
    } else if (e.target.closest("#servicesModalOpen")) {
      if (!servicesModal.classList.contains("services-modal--opened")) {
        servicesModal.classList.add("services-modal--opened");
        overlay.style.display = "block";
      }
    } else if (
      e.target.closest(".overlay") ||
      e.target.closest(".header-modal__close") ||
      e.target.closest(".services-modal__close")
    ) {
      if (headerModal.classList.contains("header-modal--opened")) {
        headerModal.classList.remove("header-modal--opened");
      } else if (servicesModal.classList.contains("services-modal--opened")) {
        servicesModal.classList.remove("services-modal--opened");
      }
      overlay.style.display = "none";
    }
  });
};

export default modals;
