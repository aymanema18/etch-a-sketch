document.addEventListener('DOMContentLoaded', () => {
    let div;
    let divs;
    let container = document.querySelector(".container")
    let secondContainer;
    let btn = document.querySelector(".btn");
    let pxNum;

    for (let i = 0; i < 16; i++) {
        secondContainer = document.createElement("div");
        secondContainer.setAttribute("class", "second-container");
        container.appendChild(secondContainer);
        for (let j = 0; j < 16; j++) {
            div = document.createElement("div");
            div.setAttribute("class", "firstgen");
            secondContainer.appendChild(div);
        
        }
    }
    btn.addEventListener('click', () => {
        pxNum = +prompt("size:");
        if (pxNum > 100) {
            alert("100 is the limit.");
            pxNum = 16;
        } else if (pxNum < 0) {
            alert("Please enter a valid number.");
            pxNum = 16;
        }
        container.innerHTML = '';
        for (let i = 0; i < pxNum; i++) {
            secondContainer = document.createElement("div");
            secondContainer.setAttribute("class", "second-container");
            container.appendChild(secondContainer);
            
            for (let j = 0; j < pxNum; j++) {
                div = document.createElement("div");
                div.setAttribute("class", "firstgen");
                secondContainer.appendChild(div);
            
            }
        }
        divs = document.querySelectorAll(".firstgen").forEach(div => {
            div.addEventListener('mouseover', () => {
            let randomNum1 = Math. floor(Math. random() * 256);
            let randomNum2 = Math. floor(Math. random() * 256);
            let randomNum3 = Math. floor(Math. random() * 256);
            div.style.backgroundColor = `rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`;
            })
        });
    })
    divs = document.querySelectorAll(".firstgen").forEach(div => {
        div.addEventListener('mouseover', () => {
            let randomNum1 = Math. floor(Math. random() * 256);
            let randomNum2 = Math. floor(Math. random() * 256);
            let randomNum3 = Math. floor(Math. random() * 256);
            div.style.backgroundColor = `rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`;
        })
    });

});