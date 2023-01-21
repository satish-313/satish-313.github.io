const myIntro = [
  "I am Satish Kumar",
  "Full stack web developer",
  "Expertise in TypeScript, JavaScript",
];
// let hand = 👋;
let index = 0;
let currentlineIndex = 0;
let currentLine = [];
let isAdding;
let isRemoving;

const introEle = document.getElementById("intro");

function showIntro() {
  while (index < myIntro.length) {
    if (currentlineIndex === 0 && isRemoving) {
      isRemoving = false;
      index = (index + 1) % myIntro.length;
      continue;
    }
    if (currentlineIndex >= myIntro[index].length) {
      isAdding = false;
      isRemoving = true;
    }
    if (currentlineIndex < myIntro[index].length) isAdding = true;

    if (isAdding && !isRemoving) {
      let char = myIntro[index][currentlineIndex++];
      currentLine.push(char);
      let temp = currentLine.join("");

      introEle.innerHTML = temp;
    }

    if (isRemoving) {
      currentLine.pop();
      introEle.innerHTML = currentLine.join("");
      currentlineIndex -= 1;
    }
    break;
  }
}

setInterval(() => {
  showIntro();
}, 500);
