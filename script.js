const btn = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");
const div = document.getElementsByClassName("container1");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.getElementById("mensaje").style.backgroundColor = rndCol;
});

btn.addEventListener("click", () => {
  const saludo = "Hola, como estas?! Soy Mikail!";
  mensaje.innerHTML = saludo;
  mensaje.classList.toggle("mensaje");
});

function alerta() {
  alert("Hola!");
}

btn2.addEventListener("click", () => {
  const alt = "Hola! Soy el div";
  alert(alt);
});
