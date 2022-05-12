const toTop = () => {
  const toTopButton = document.querySelector(".smooth-scroll");
  toTopButton.style.opacity = "0";

  const goToTop = () => {
    const offerSection = document.querySelector("#offer");
    if (offerSection.getBoundingClientRect().bottom < 0) {
      toTopButton.style.opacity = "1";
    } else {
      toTopButton.style.opacity = "0";
    }
  };

  toTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  window.onscroll = goToTop;
};

export default toTop;
