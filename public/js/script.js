window.addEventListener("scroll", function(){

const header = document.querySelector("header");

header.classList.toggle("scrolled", window.scrollY > 50);

});

function abrirImagen(imagen){

const visor = document.getElementById("visor");
const grande = document.getElementById("imagenGrande");

visor.style.display = "flex";
grande.src = imagen.src;

}

function cerrarImagen(){

document.getElementById("visor").style.display = "none";

}