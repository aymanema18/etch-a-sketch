document.addEventListener('DOMContentLoaded', () => {
    let div;
    let container = document.querySelector(".container")
    let divv2;
    for (let i = 0; i < 4; i++) {
        div = document.createElement("div");
        div.setAttribute("class", "firstgen");
        container.appendChild(div);
        for (let k = 0; k < 4; k++) {
            divv2 = document.createElement("div");
            divv2.setAttribute("class", "secondgen");
            div.appendChild(divv2);
        }
    }
})