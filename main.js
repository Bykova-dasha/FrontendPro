
function createPythagoreanTable(size) {
    const container = document.getElementById("table-container");
    const table = document.createElement("table");

    for (let i = 0; i <= size; i++) {
        let row = document.createElement("tr");

        for (let j = 0; j <= size; j++) {
            let cell = document.createElement(i === 0 || j === 0 ? "th" : "td");


            console.log(`i: ${i}, j: ${j}, i * j: ${i * j}`);

            if (i === 0 && j === 0) {
                cell.textContent = "";
            } else if (i === 0) {
                cell.textContent = String(j);
                cell.classList.add("header-row");
            } else if (j === 0) {
                cell.textContent = String(i);
                cell.classList.add("header-col");
            } else {
                cell.textContent = String(i * j);
                cell.classList.add("cell");

                if (i === j) {
                    cell.classList.add("diagonal");
                }
            }

            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    container.appendChild(table);
}

createPythagoreanTable(10);


//hm2

document.addEventListener("DOMContentLoaded", function () {
    const textBlock = document.getElementById("text-block");
    const button = document.getElementById("toggle-button");

    textBlock.classList.add("default-color");

    button.addEventListener("click", function () {
        textBlock.classList.toggle("changed-color");
    });
});



//hm3

document.addEventListener("DOMContentLoaded", function () {
    const imageElement = document.getElementById("random-images");

    const randomNumber = Math.floor(Math.random() * 9) + 1;
    imageElement.src = `images/${randomNumber}.jpg`;
    imageElement.alt = `Зображення ${randomNumber}`;
});