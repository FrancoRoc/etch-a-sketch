let gridNumber = 4;
let rainBool = false;
const sketchWidth = 600;

const sketchBox = document.getElementById("container");
const clearBtn = document.getElementById("clear").addEventListener("click", clearSketch);
const gridBtn = document.getElementById("size").addEventListener("click", newGrid);
const rainbowBtn = document.getElementById("rainbow").addEventListener("click", () => rainBool = true);
const defaultBtn = document.getElementById("default").addEventListener("click", () => rainBool = false);

function createSketchArea() {
  const gridSize = sketchWidth/gridNumber;
  sketchBox.style.gridTemplate = `repeat(${gridNumber}, ${gridSize}px) / repeat(${gridNumber}, ${gridSize}px)`;
  for (let i = 0; i < gridNumber * gridNumber; i++) {
    const pixels = document.createElement("div");
    pixels.setAttribute("class", "pixel");
    sketchBox.appendChild(pixels);
  }
}
createSketchArea();

sketchBox.addEventListener("mouseover", e => {
  if (e.target.nodeName == "DIV") {
    if (rainBool) {
      let red = Math.floor(Math.random()* 256);
      let green = Math.floor(Math.random()* 256);
      let blue = Math.floor(Math.random()* 256);
      e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    } else {
      e.target.style.backgroundColor = "#444444";
    }
  }
})

function newGrid() {
  gridNumber = prompt("How many squares per side for the new grid?");
  while (gridNumber < 1 || gridNumber > 64) {
    gridNumber = prompt("Enter number between 1 - 64");
  }
  clearSketch();
  removeGrid();
}

  function clearSketch() {
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach(pixel => {
    pixel.style.backgroundColor = "rgb(255, 255, 255)";
  })
}

function removeGrid() {
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach(pixel => {
    sketchBox.removeChild(pixel);
  })
  createSketchArea();
}