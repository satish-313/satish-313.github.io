const gridImg = document.querySelectorAll('.grid-img input[type="radio"]');
const ss = document.querySelectorAll("section");
const nav = document.querySelector("nav");
const sbtn = document.querySelector("#submitbuttons");
const burger = document.querySelector("#burger");
const cross = document.querySelector("#cross");
const sideBar = document.querySelector("#side-bar");
const aLinkSidebar = sideBar.querySelectorAll("a");

aLinkSidebar.forEach((e) => {
    e.addEventListener("click", () => {
        removeSidebar();
        cross.classList.add("nv-hide")
        burger.classList.remove("nv-hide")
    });
});

sbtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("something is wrong");
});

burger.addEventListener("click", function () {
    burger.classList.add("nv-hide");
    cross.classList.remove("nv-hide");
    showSidebar();
});

cross.addEventListener("click", function () {
    burger.classList.remove("nv-hide");
    cross.classList.add("nv-hide");
    removeSidebar();
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
