import { cardsArray } from "./variables.js";
import { iconsArray } from "./variables.js";
const cardContainer = document.getElementById("card-section");
const skillWrapper = document.getElementById("skill-wrapper");

cardsArray.forEach((card, index) => {
  const cardDiv = document.createElement("div");
  cardDiv.className = `p-2`;
  cardDiv.style.backgroundColor = "white";
  cardDiv.id = `card-wrapper`;
  cardDiv.innerHTML = `
   <div id="card" class="d-flex justify-content-between">
    <div id="card-text" class="d-flex flex-column gap-1 p-5">
    <div
      id="card-heading"
      class="fw-bold fs-4"
      style="color: #231f20"
    >
      ${card.title}
    </div>
    <div id="card-paragraph">
      <p style="color: #231f20">
        ${card.text}
      </p>
    </div>
    <div id="card-link" class="d-flex justify-content-end">
      <a
        href="${card.link}"
        class="link"
        >Go to page</a
      >
    </div>
  </div>
  <hr />
  <div id="card-image">
    <img
      src="${card.imageUrl}"
      alt="card-image"
      class="img-fluid"
      style="width: 250px; height: 250px; object-fit: cover"
    />
  </div>
 </div>
    `;
  cardContainer.append(cardDiv);
});
const cardWrapper = document.querySelectorAll("#card-wrapper");
const emptyArray = [];
cardWrapper.forEach((wrapper) => {
  emptyArray.push(wrapper);
});
emptyArray.forEach((content, index) => {
  if (index < emptyArray.length - 1) {
    const hr = document.createElement("hr");
    hr.className = "custom-hr";
    content.appendChild(hr);
  }
});
iconsArray.forEach((icons) => {
  const skillDiv = document.createElement("div");
  skillDiv.className = "d-flex align-center gap-3 mb-3";
  skillDiv.id = "skill-with-image";
  skillDiv.innerHTML = `
  <img
  style="height: 25px"   skill-wrapper
  src="${icons.iconPath}"
  alt="icon"
  title="HTML"
/>`;
  skillWrapper.append(skillDiv);
});
