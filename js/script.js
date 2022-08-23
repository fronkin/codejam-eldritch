import ancients from "../assets/Ancients/index.js";

const ancientsContainer = document.querySelector(".ancients-container");

function Ancients() {
  ancients.forEach((item) => {
    ancientsContainer.innerHTML += `
    <div class="ancient-card">
      <img src="${item.src}"/>
    </div>
    `;
  });
}
Ancients();
const ancientCards = document.querySelectorAll(".ancient-card");
function clik() {
  ancientCards.forEach((card) => {
    card.addEventListener("click", centr);
  });
}
clik();
const difficultyContainers = document.querySelector(".difficulty-container");
const diffiCulty = document.querySelectorAll(".difficulty");
function centr() {
  diffiCulty.forEach((item) => {
    item.classList.add("addList");
  });
}

const deckContainers = document.querySelector(".deck-container");

function clikd() {
  console.log(diffiCulty);
  diffiCulty.forEach((card) => {
    card.addEventListener("click", clikDeck);
  });
}
clikd();

function clikDeck() {
  console.log(diffiCulty);
  deckContainers.innerHTML += `<span class="shuffle-button">Замешать колоду</span>`;
}
