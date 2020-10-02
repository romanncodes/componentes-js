import demo1 from "./modules/demo1.js";
import demo2 from "./modules/demo2.js";
import demo3 from "./modules/demo3.js";

var caja = document.getElementById("caja");

window.saludar = demo1.saludar;
window.calcular = demo2.calcular;
window.procesar = demo3.procesar;

document.getElementById("demo1").addEventListener("click", () => {
  caja.innerHTML = demo1.data;
});

document.getElementById("demo2").addEventListener("click", () => {
  caja.innerHTML = demo2.data;
});

document.getElementById("demo3").addEventListener("click", () => {
  caja.innerHTML = demo3.data;
});
