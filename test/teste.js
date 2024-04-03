const src = document.getElementById("src");

src.addEventListener("touchstart", rotate);
src.addEventListener("touchmove", rotate);
src.addEventListener("touchend", rotate);

function rotate(e) {
  const touch = e.changedTouches.item(0);

  // Turn off default event handling
  e.preventDefault();

  // Rotate element 'src'.
  src.style.width = `${touch.radiusX}px`;
  src.style.height = `${touch.radiusY}px`;
  src.style.transform = `rotate(${touch.rotationAngle}deg)`;
  src.style.backgroundColor = "red"
  src.style.borderRadius = "50%"
  console.log("click")
}