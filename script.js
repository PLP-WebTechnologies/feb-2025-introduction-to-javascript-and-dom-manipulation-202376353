document.getElementById("change-text-btn").addEventListener("click", changeText);
document.getElementById("change-style-btn").addEventListener("click", changeStyle);
document.getElementById("toggle-element-btn").addEventListener("click", toggleElement);

function changeText() {
    const heading = document.getElementById("dynamic-heading");
    heading.textContent = "Text has been changed!";
}

function changeStyle() {
    document.body.style.backgroundColor = "lightgray";


    const box = document.getElementById("style-box");
    box.style.backgroundColor = "lightblue";
    box.style.color = "blue";
}

function toggleElement() {
    const container = document.getElementById("element-container");
    const existingElement = document.getElementById("dynamic-element");

    if (existingElement) {
        container.removeChild(existingElement);
    } else {
        const newElement = document.createElement("p");
        newElement.id = "dynamic-element";
        newElement.textContent = "This is a dynamically added element!";
        container.appendChild(newElement);
    }
}