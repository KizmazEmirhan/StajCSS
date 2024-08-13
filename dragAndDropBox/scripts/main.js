const fillerBox = document.querySelector(".fill");
const boxThatFills = document.querySelectorAll(".box");

fillerBox.addEventListener("dragstart", (event) => {
  dragged = event.target;
});
fillerBox.addEventListener("dragend", () => {
  boxThatFills.forEach((box) => {
    box.classList.remove("active");
  });
});

boxThatFills.forEach((box) => {
  box.addEventListener("dragenter", () => {
    box.classList.add("active");
  });
  box.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
  box.addEventListener("dragleave", () => {
    if (box.classList.contains("active")) {
      box.classList.remove("active");
    }
  });
  box.addEventListener("drop", (event) => {
    event.preventDefault();
    console.log(event.target);
    if (box.classList.contains("active")) {
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
    } else if (dragged.parentNode.contains(event.target)) {
      return;
    }
  });
});
