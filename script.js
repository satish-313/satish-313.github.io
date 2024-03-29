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
            if (entry.isIntersecting) {
                if (entry.target.id === "skills") {
                    setAnimationInSkill();
                } else {
                    setAnimationInSkill();
                }
            }
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

function setAnimationInSkill() {
    const skillt = document.getElementsByClassName("skill-title");
    const skilli = document.getElementsByClassName("skill-img");
    const len = skilli.length;
    for (let i = 0; i < len; i++) {
        if (i % 2 === 0) {
            skillt[i].classList.toggle("fromleft-animation");
            skilli[i].classList.toggle("fromleft-animation");
        } else {
            skillt[i].classList.toggle("fromright-animation");
            skilli[i].classList.toggle("fromright-animation");
        }
    }
}

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
}, 200);
