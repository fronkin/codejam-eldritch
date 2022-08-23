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
  ancientCards.forEach((card, index) => {
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
const shuffleButton = document.querySelector(".shuffle-button");
function clikd() {
  diffiCulty.forEach((card) => {
    card.addEventListener("click", clikDeck);
  });
}
clikd();

function clikDeck() {
  shuffleButton.classList.add("addList");
}
function clikSpan() {
  shuffleButton.addEventListener("click", spanRemove);
}
clikSpan();
const currentState = document.querySelector(".current-state");
const deck = document.querySelector(".deck");
function spanRemove() {
  shuffleButton.classList.remove("addList");
  currentState.classList.add("addList");
  deck.classList.add("addList");
}
