let select = document.querySelector("#select")
let menu = document.querySelector("#menu")
let h2 = document.querySelector("h2");
let overlay = document.querySelector("#overlay");

select.addEventListener("click", () => {
    select.classList.toggle("open");
});

menu.addEventListener("click", (e) => {
    if (e.target.matches("p")) {
        let val = e.target.getAttribute("data-value");
        h2.textContent = val;
    }
});

overlay.addEventListener("click", (e) => {
    e.stopPropagation()
    select.classList.remove("open");
});