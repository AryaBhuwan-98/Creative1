function createDivs() {
  const numDivs = document.getElementById("numDivs").value;
  const height = document.getElementById("height").value;
  const width = document.getElementById("width").value;
  const margin = document.getElementById("margin").value;
  const padding = document.getElementById("padding").value;
  const divContainer = document.getElementById("divContainer");

  divContainer.innerHTML = "";

  for (let i = 0; i < numDivs; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "box";
    newDiv.style.height = `${height}px`;
    newDiv.style.width = `${width}px`;
    newDiv.style.margin = `${margin}px`;
    newDiv.style.padding = `${padding}px`;
    divContainer.appendChild(newDiv);
  }
}
