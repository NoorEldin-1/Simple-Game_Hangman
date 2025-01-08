const wordsCategory = {
  programming: ["HTML", "CSS", "JAVASCRIPT", "REACT", "NODEJS"],
  animals: ["LION", "TIGER", "LEOPARD", "ELEPHANT", "GIRAFFE"],
  countries: ["EGYPT", "USA", "CHINA", "JAPAN", "RUSSIA"],
  sports: ["SOCCER", "BASKETBALL", "BASEBALL", "TENNIS", "GOLF"],
};
const firstP = document.querySelector(
  ".category-info > div > div p:first-child span"
);
const secondP = document.querySelector(
  ".category-info > div > div p:nth-child(2) span"
);
const thirdP = document.querySelector(
  ".category-info > div > div p:nth-child(3) span"
);
const fourthP = document.querySelector(
  ".category-info > div > div p:nth-child(4) span"
);
const detailButton = document.querySelector(".word > i");
const closeButton = document.querySelector(".category-info > div > div > i");
const randomcategory =
  Object.keys(wordsCategory)[
    Math.floor(Math.random() * Object.keys(wordsCategory).length)
  ];
const allWords = wordsCategory[randomcategory];
let randomeWord = allWords[Math.floor(Math.random() * allWords.length)];
const guessedWord = document.querySelector(".guessed-word");
const category = document.querySelector("select[name=category]");
const keyboard = document.querySelector(".keyboard");
const keyboardLetters = keyboard.children;
const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let lettersShow = 0;
const attempts = document.querySelector(".attempts");
const correctWord = document.querySelector(".lose-popUp p span");
const tryAgainLose = document.querySelector(".lose-popUp button");
const tryAgainWin = document.querySelector(".win-popUp button");
const hangmanBody = document.querySelector(".hangman .body-container").children;
const hintContainer = document.querySelector(".hint");
const hint = document.querySelector(".hint span:last-child");

detailButton.addEventListener("click", () => {
  document.querySelector(".category-info > div").style.display = "flex";
});
closeButton.addEventListener("click", () => {
  document.querySelector(".category-info > div").style.display = "none";
});

firstP.textContent = `[ ${wordsCategory.programming.join("  --  ")} ]`;
secondP.textContent = `[ ${wordsCategory.animals.join("  --  ")} ]`;
thirdP.textContent = `[ ${wordsCategory.countries.join("  --  ")} ]`;
fourthP.textContent = `[ ${wordsCategory.sports.join("  --  ")} ]`;
hint.textContent = randomcategory;
tryAgainLose.addEventListener("click", () => window.location.reload());
tryAgainWin.addEventListener("click", () => window.location.reload());

for (let i = 0; i < randomeWord.length; i++) {
  const span = document.createElement("span");
  span.textContent = randomeWord[i];
  guessedWord.appendChild(span);
}
category.addEventListener("change", () => {
  guessedWord.innerHTML = "";
  if (category.value === "all") {
    randomeWord = allWords[Math.floor(Math.random() * allWords.length)];
    hint.textContent = randomcategory;
    hintContainer.style.display = "block";
  } else if (category.value === "programming") {
    randomeWord =
      wordsCategory.programming[
        Math.floor(Math.random() * wordsCategory.programming.length)
      ];
    hintContainer.style.display = "none";
  } else if (category.value === "animals") {
    randomeWord =
      wordsCategory.animals[
        Math.floor(Math.random() * wordsCategory.animals.length)
      ];
    hintContainer.style.display = "none";
  } else if (category.value === "countries") {
    randomeWord =
      wordsCategory.countries[
        Math.floor(Math.random() * wordsCategory.countries.length)
      ];
    hintContainer.style.display = "none";
  } else if (category.value === "sports") {
    randomeWord =
      wordsCategory.sports[
        Math.floor(Math.random() * wordsCategory.sports.length)
      ];
    hintContainer.style.display = "none";
  }
  for (let i = 0; i < randomeWord.length; i++) {
    const span = document.createElement("span");
    span.textContent = randomeWord[i];
    guessedWord.appendChild(span);
  }
});
letters.forEach((letter) => {
  const span = document.createElement("span");
  span.textContent = letter;
  keyboard.appendChild(span);
});
for (let i = 0; i < keyboardLetters.length; i++) {
  keyboardLetters[i].addEventListener("click", () => {
    keyboardLetters[i].classList.add("clicked");
    category.disabled = true;
    correctWord.textContent = randomeWord;
    if (randomeWord.includes(keyboardLetters[i].textContent)) {
      for (let j = 0; j < randomeWord.length; j++) {
        if (randomeWord[j] === keyboardLetters[i].textContent) {
          guessedWord.children[j].classList.add("show");
          lettersShow++;
          if (lettersShow === randomeWord.length) {
            document.querySelector(".win-popUp").style.display = "flex";
          }
        }
      }
    } else {
      hangmanBody[attempts.textContent].style.display = "block";
      attempts.textContent++;
      if (attempts.textContent === "6") {
        document.querySelector(".lose-popUp").style.display = "flex";
      }
    }
  });
}
