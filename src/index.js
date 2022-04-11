const element = document.getElementById("dado");

function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

function otro() {
  const resultado = lanzarDado();
  element.innerHTML = "<h1>" + resultado + "</h1>";
}
