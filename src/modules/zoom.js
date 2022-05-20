const zoom = () => {
  const zoomLink = document.querySelectorAll("#zoomLink");
  const popupZoom = document.querySelector("#popupZoom");
  const popupZoomWrapper = document.querySelector(".popup-zoom__wrapper");

  zoomLink.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const zoomImage = link.querySelector("img");
      const newEl = document.createElement("img");
      newEl.style.width = 100 + "%";
      newEl.style.height = 100 + "%";
      newEl.style.objectFit = "cover";
      newEl.src = zoomImage.src;

      popupZoomWrapper.append(newEl);

      popupZoom.classList.add("_open");
    });
  });
  popupZoom.addEventListener("click", (e) => {
    const zoomImage = popupZoomWrapper.querySelector("img");
    if (!e.target.closest(".popup-zoom__wrapper")) {
      zoomImage.remove();
      popupZoom.classList.remove("_open");
    }
  });
};

export default zoom;
