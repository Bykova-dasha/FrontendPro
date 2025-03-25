//l12hm1

let savedURL = "";

function saveURL() {
    let url = prompt("Enter the link (including http or https):");
    if (url && (url.startsWith("http://") || url.startsWith("https://"))) {
        savedURL = url;
        alert("Link saved!");
    } else {
        alert("Please enter a valid link!");
    }
}

function goToURL() {
    if (savedURL) {
        window.open(savedURL, "_blank");
    } else {
        alert("Enter the link first!");
    }
}

//l12hm2

const container = document.getElementById("buttonContainer");
container.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        alert(`Ви натиснули: ${event.target.dataset.name}`);
    }
});
