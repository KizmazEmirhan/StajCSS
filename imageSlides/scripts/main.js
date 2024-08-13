const slides = document.querySelectorAll(".image");

const imagesArray = [
  {
    id: 0,
    imageUrl: "url(./assets/anxiousForest.avif)",
  },
  {
    id: 1,
    imageUrl: "url(./assets/grandTourRoad.avif)",
  },
  {
    id: 2,
    imageUrl: "url(./assets/probablyChicagoOnWinter.avif)",
  },
  {
    id: 3,
    imageUrl: "url(./assets/relaxingBeach.avif)",
  },
  {
    id: 4,
    imageUrl: "url(./assets/snowyMountains.avif)",
  },
];

slides.forEach((slide, index) => {
  slide.style.backgroundImage = imagesArray[index].imageUrl;
});

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    removeActives();
    slide.classList.add("active");
  });
});

function removeActives() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}
