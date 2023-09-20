const myIntro = ["I am Satish Kumar", "NodeJs developer", "Frontend developer"];
let index = 0;
let currentlineIndex = 0;
let currentLine = [];
let isAdding;
let isRemoving;
const introEle = document.getElementById("intro");

let allSection = document.querySelectorAll("section");
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle(
                "scroll-animation",
                entry.isIntersecting
            );
        });
    },
    {
        threshold: 0.3,
    }
);

allSection.forEach((s) => observer.observe(s));

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
            if (currentLine.length === 0)
                introEle.innerHTML = myIntro[index][0];
            else introEle.innerHTML = currentLine.join("");
            currentlineIndex -= 1;
        }
        break;
    }
}

setInterval(() => {
    showIntro();
}, 400);
