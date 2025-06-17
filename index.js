const fs = require("fs");
const promptSync = require ("prompt-sync")();
const path = require ("path");

// Distancia da entrega (KM) e valor por KM

let distanciaEntrega = 0
let valorKm = 0

// Distancia

while (!isNaN(distanciaEntrega) && distanciaEntrega<=0) {
    distanciaEntrega = promptSync("Digite a distância da entrega (em KM): ");

    if(isNaN(distanciaEntrega) || distanciaEntrega<=0){
        console.log("Erro: Distância inválida!");
        distanciaEntrega = 0
    }else{
        console.log("Distância definida como: "+distanciaEntrega);
    }
} 

// Valor por KM

while (!isNaN(valorKm) && valorKm<=0) {
    valorKm = promptSync("Digite a Valor por KM (em reais): ");

    if(isNaN(valorKm) || valorKm<=0){
        console.log("Erro: Valor inválido!");
        valorKm = 0
    }else{
        console.log("Valor definido como: "+valorKm+ " reais por KM.");
    }
} 