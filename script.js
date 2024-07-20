const gridImg = document.querySelectorAll('.grid-img input[type="radio"]');
const ss = document.querySelectorAll("section");
const nav = document.querySelector("nav");
const sbtn = document.querySelector("#submitbuttons");
const sideBar = document.querySelector("#side-bar");
const inputChecked = document.querySelector("#menu-checkbox");
const aLinkSidebar = sideBar.querySelectorAll("a");
const anime = document.querySelector("#anime");

aLinkSidebar.forEach((e) => {
    e.addEventListener("click", () => {
        removeSidebar();
        anime.style.clipPath = "circle(15px at calc(100% - 20px) -15px)";
        inputChecked.checked = false;
    });
});

sbtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("something is wrong");
});

inputChecked.addEventListener("click", async function () {
    if (inputChecked.checked) {
        anime.style.clipPath = "circle(100%)";
        await new Promise((r) => setTimeout(r, 500));
        showSidebar();
    } else {
        removeSidebar();
        anime.style.clipPath = "circle(15px at calc(100% - 20px) -15px)";
    }
});

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

function removeSidebar() {
    sideBar.style.display = "none";
}

function showSidebar() {
    sideBar.style.display = "flex";
}
