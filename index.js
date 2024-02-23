"use strict";

const fibonacciInput = document.querySelector(".form-control");
const result = document.querySelector("#result");
const isNumber = /^-?\d+$/;
const alert = document.querySelector(".alert");
alert.style.display = "none";

const getFibonacci = (number) => {
    const baseCase = number <= 2;
    return baseCase ? 1 : getFibonacci(number - 1) + getFibonacci(number - 2);
};

const init = () => {
    const initValue = (fibonacciInput.value = 5);
    result.textContent = getFibonacci(initValue);
};

const printFibonacciSerie = (number) => {
    const fibonacciSerie = [];

    for (let i = 0; i <= number; i++) {
        fibonacciSerie.push(getFibonacci(i));
    }

    // Limpiar el contenido previo antes de agregar nuevos elementos
    result.innerHTML = "";

    for (let j = 0; j < fibonacciSerie.length; j++) {
        const li = document.createElement("li");
        li.textContent = fibonacciSerie[j];
        result.appendChild(li);
    }
};

fibonacciInput.addEventListener("input", () => {
    const fibonacci = fibonacciInput.value;
    printFibonacciSerie(fibonacci);
    alert.style.display = isNumber.test(fibonacci) ? "none" : "block";
    result.textContent = getFibonacci(fibonacci);
});

init();
