import ancients from "../assets/Ancients/index.js";
import ancientsblue from "../assets/MythicCards/blue/index.js";
import ancientsbrown from "../assets/MythicCards/brown/index.js";
import ancientsgreen from "../assets/MythicCards/green/index.js";

const ancientsContainer = document.querySelector(".ancients-container");
const Green = document.querySelectorAll(".green");
const Brown = document.querySelectorAll(".brown");
const Blue = document.querySelectorAll(".blue");
const lastCard = document.querySelector(".last-card");

let currCard = "";
let textCentr = "";

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
    card.addEventListener("click", () => centr(ancients[index].title));
  });
}
clik();
const difficultyContainers = document.querySelector(".difficulty-container");
const diffiCulty = document.querySelectorAll(".difficulty");
function centr(currTitle) {
  currCard = currTitle;
  console.log(currCard);
  diffiCulty.forEach((item, index) => {
    item.classList.add("addList");
  });
}

const deckContainers = document.querySelector(".deck-container");
const shuffleButton = document.querySelector(".shuffle-button");
function clikd() {
  diffiCulty.forEach((card) => {
    card.addEventListener("click", () => clikDeck(card.innerHTML));
  });
}
clikd();

function clikDeck(text) {
  textCentr = text;
  console.log(text);
  shuffleButton.classList.add("addList");
  levlCard();
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
  bogiCard();
}
const greenNumber1 = ["1", "2", "2"];
const brownNumber1 = [2, 3, 4];
const blueNumber1 = [1, 1, 0];
const greenNumber2 = [0, 1, 3];
const brownNumber2 = [2, 3, 4];
const blueNumber2 = [2, 0, 0];
const greenNumber3 = [0, 2, 3];
const brownNumber3 = [2, 3, 4];
const blueNumber3 = [1, 1, 0];
const greenNumber4 = [1, 3, 2];
const brownNumber4 = [2, 2, 4];
const blueNumber4 = [1, 1, 0];
function bogiCard() {
  if (currCard === "azathoth") {
    Green.forEach((item, index) => {
      item.textContent = greenNumber1[index];
    });
    Brown.forEach((item, index) => {
      item.textContent = brownNumber1[index];
    });
    Blue.forEach((item, index) => {
      item.textContent = blueNumber1[index];
    });
  } else if (currCard === "cthulhu") {
    Green.forEach((item, index) => {
      item.textContent = greenNumber2[index];
    });
    Brown.forEach((item, index) => {
      item.textContent = brownNumber2[index];
    });
    Blue.forEach((item, index) => {
      item.textContent = blueNumber2[index];
    });
  } else if (currCard === "iogSothoth") {
    Green.forEach((item, index) => {
      item.textContent = greenNumber3[index];
    });
    Brown.forEach((item, index) => {
      item.textContent = brownNumber3[index];
    });
    Blue.forEach((item, index) => {
      item.textContent = blueNumber3[index];
    });
  } else if (currCard === "shubNiggurath") {
    Green.forEach((item, index) => {
      item.textContent = greenNumber4[index];
    });
    Brown.forEach((item, index) => {
      item.textContent = brownNumber4[index];
    });
    Blue.forEach((item, index) => {
      item.textContent = blueNumber4[index];
    });
  }
}

let easyBlue = [];
let easyBrown = [];
let easyGreen = [];
let normalBlue = [];
let normalBrown = [];
let normalGreen = [];
let hardBlue = [];
let hardBrown = [];
let hardGreen = [];

function levlCard() {
  if (textCentr === "Низкая") {
    const shuffle = (arr) => arr.sort(() => 0.5 - Math.random());
    easyBlue = ancientsblue.filter((item) => item.complexity !== "hard");
    shuffle(easyBlue);
    easyBrown = ancientsbrown.filter((item) => item.complexity !== "hard");
    shuffle(easyBrown);
    easyGreen = ancientsgreen.filter((item) => item.complexity !== "hard");
    shuffle(easyGreen);
    console.log(easyBrown);

    shuffle(easyBrown);
  } else if (textCentr === "Высокая") {
    const shuffle = (arr) => arr.sort(() => 0.5 - Math.random());
    hardBlue = ancientsblue.filter((item) => item.complexity !== "easy");
    shuffle(hardBlue);
    hardBrown = ancientsbrown.filter((item) => item.complexity !== "easy");
    shuffle(hardBrown);
    hardGreen = ancientsgreen.filter((item) => item.complexity !== "easy");
    shuffle(hardGreen);
  }
  cardSort1();
  cardSort2();
  cardSort3();
}
let Lvl1 = [];
let Lvl2 = [];
let Lvl3 = [];

function cardSort1() {
  easyGreen.forEach((item, index) => {
    if (index == 0) {
      let add = item;
      Lvl1.push(add);
    }
  });
  easyBrown.forEach((item, index) => {
    if (index < 2) {
      let add = item;

      Lvl1.push(add);
    }
  });
  easyBlue.forEach((item, index) => {
    if (index == 0) {
      let add = item;

      Lvl1.push(add);
      // console.log(Lvl1);
    }
  });
}
function cardSort2() {
  easyGreen.forEach((item, index) => {
    if (index < 2) {
      let add = item;
      Lvl2.push(add);
    }
  });
  easyBrown.forEach((item, index) => {
    if (index < 3) {
      let add = item;

      Lvl2.push(add);
    }
  });
  easyBlue.forEach((item, index) => {
    if (index == 0) {
      let add = item;

      Lvl2.push(add);
      // console.log(Lvl2);
    }
  });
}
function cardSort3() {
  easyGreen.forEach((item, index) => {
    if (index < 2) {
      let add = item;
      Lvl3.push(add);
    }
  });
  easyBrown.forEach((item, index) => {
    if (index < 4) {
      let add = item;

      Lvl3.push(add);
    }
  });
  // console.log(Lvl3);
}

function deckClid() {
  deck.addEventListener("click", last);
}
deckClid();
function last() {
  Lvl1.forEach((item) => {
    lastCard.style.backgroundImage = `url(${item.src})`;

    console.log(add);
  });
  lastCard.classList.add("addList");
  console.log(Lvl1);
}
