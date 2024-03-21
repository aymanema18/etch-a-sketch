document.addEventListener('DOMContentLoaded', () => {
    let div;
    let container = document.querySelector(".container")
    let secondContainer;
    let thirdContainer;
    let divv2;
    for (let i = 0; i < 4; i++) {
        secondContainer = document.createElement("div");
        secondContainer.setAttribute("class", "second-container");
        container.appendChild(secondContainer);
        for (let j = 0; j < 4; j++) {
            div = document.createElement("div");
            div.setAttribute("class", "firstgen");
            secondContainer.appendChild(div);
            for (let c = 0; c < 4; c++) {
                thirdContainer = document.createElement("div");
                thirdContainer.setAttribute("class", "third-container");
                div.appendChild(thirdContainer);
                for (let k = 0; k < 4; k++) {
                    divv2 = document.createElement("div");
                    divv2.setAttribute("class", "secondgen");
                    thirdContainer.appendChild(divv2);
                }
            }
        }
    }
    let secondGenDivs = document.querySelectorAll(".secondgen").forEach(div => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "gray";
        })
    });
});