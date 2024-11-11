/* eslint-disable 3330 */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let boton = document.querySelector("#boton-cambio");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function randomSymbol() {
  let symbols = [
    "bi bi-suit-club-fill lg",
    "bi bi-heart-fill",
    "bi bi-suit-spade-fill",
    "bi bi-suit-diamond-fill"
  ];
  let symbol = symbols[getRandomInt(4)];
  return symbol;
}

function randomNumber() {
  let numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let number = numbers[getRandomInt(13)];
  return number;
}

function cartaAleatoria() {
  limpiarCarta();
  let symbol = randomSymbol();
  let number = randomNumber();
  const paloArriba = document.querySelector("#symbol-top");
  const paloAbajo = document.querySelector("#symbol-bot");
  const numeroId = document.querySelector("#numero");
  let numero = document.createElement("h1");
  numero.innerText = number;
  numeroId.appendChild(numero);

  let arriba = document.createElement("i");
  arriba.classList = symbol;
  if (symbol.includes("heart") || symbol.includes("diamond")) {
    arriba.setAttribute("style", "color:red; font-size:2rem");
  } else {
    arriba.setAttribute("style", "color:black; font-size:2rem");
  }

  let abajo = document.createElement("i");
  abajo.classList = symbol;
  if (symbol.includes("heart") || symbol.includes("diamond")) {
    abajo.setAttribute("style", "color:red; font-size:2rem");
  } else {
    abajo.setAttribute("style", "color:black; font-size:2rem");
  }

  paloArriba.appendChild(arriba);
  paloAbajo.appendChild(abajo);
}

function limpiarCarta() {
  const paloArriba = document.querySelector("#symbol-top");
  const paloAbajo = document.querySelector("#symbol-bot");
  const numeroId = document.querySelector("#numero");
  if (paloArriba.firstElementChild) {
    paloArriba.removeChild(paloArriba.firstElementChild);
  }
  if (numeroId.firstElementChild) {
    numeroId.removeChild(numeroId.firstElementChild);
  }
  if (paloAbajo.firstElementChild) {
    paloAbajo.removeChild(paloAbajo.firstElementChild);
  }
}

function temporizador() {
  cartaAleatoria();
  window.setInterval(cartaAleatoria, 10000);
}

boton.addEventListener("click", cartaAleatoria);
window.addEventListener("load", temporizador());
