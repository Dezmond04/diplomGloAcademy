const zoom = () => {
  const zoomLink = document.querySelectorAll("#zoomLink");
  const zoomModal = document.querySelector(".zoom-modal");
  const zoomContainer = document.querySelector("#zoomContainer");

  zoomLink.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const img = link.querySelector("img");
      const cloneEl = img.cloneNode(true);

      cloneEl.style.width = 100 + "%";
      cloneEl.style.height = 100 + "%";

      zoomModal.style.display = "block";
      zoomModal.style.display = "block";

      zoomContainer.append(cloneEl);
    });
  });
};

export default zoom;
