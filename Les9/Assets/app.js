function averageGrade () {
    let total = 0;
    for (let i = 1; i < 5; i++) {
        let place = document.getElementById(`course${i}`);
        let grade = Number(place.cells[1].innerText);
        
        total += grade;
    }

    let average = total / 4;
    
    let printAverage = document.getElementById("average");
    printAverage.innerText = average.toFixed(1);
}

averageGrade();



function randomColor() {
    for (let i = 1; i <= 7; i++) {
        let backgroundColor = document.getElementsByClassName(`course${i}`)[0].style.backgroundColor = `#FF80${i}${i} `;
    }
}

randomColor();



function createImage(imageSrcName) {
    let img = document.createElement("img");
    let body = document.getElementById("body");
    img.setAttribute("src", imageSrcName)
    body.appendChild(img);
}

createImage("https://picsum.photos/200");
