const gridImg = document.querySelectorAll('.grid-img input[type="radio"]');
const ss = document.querySelectorAll("section");
const nav = document.querySelector("nav");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) {
                let ele = nav.querySelector(`#_${e.target.id}`);
                ele.checked = true;
            }
        });
    },
    {
        rootMargin: "-29% 0px -70% 0px",
    }
);
ss.forEach((item) => observer.observe(item));

setInterval(() => {
    let r = getRandom();
    gridImg[r].checked = true;
}, 1100);

function getRandom() {
    return Math.floor(Math.random() * 8);
}
