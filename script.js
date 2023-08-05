const btn = document.querySelector("button");
const mensaje = document.getElementById("mensaje");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

btn.addEventListener("click", () => {
  const saludo = "Hola, como estas?! Soy Mikail!";
  mensaje.innerHTML = saludo;
  mensaje.classList.toggle("mensaje");
});
