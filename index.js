const fs = require ("fs");
const promptSync = require ("prompt-sync") ();
const path = require ("path");

//nome do cliente e endereço

let nomeCliente = 0
let enderecoCliente = 0

while (!isNaN(nomeCliente)) {
    nomeCliente = promptSync(`😊 Digite seu nome: `);
    if(!isNaN(nomeCliente)){
        console.log("Erro: Nome inválido.");
    }
}

while (!isNaN(enderecoCliente)) {
    enderecoCliente = promptSync(`📍 Digite seu endereço: `);
    if(!isNaN(enderecoCliente)){
        console.log("Erro: endereço inválido.");
    }
}

let distanciaEntrega = 0
let valorKm = 0

// Distancia

while (!isNaN(distanciaEntrega) && distanciaEntrega<=0) {
    distanciaEntrega = promptSync("🚗 Digite a distância da entrega (em KM): ");

    if(isNaN(distanciaEntrega) || distanciaEntrega<=0){
        console.log("Erro: Distância inválida!");
        distanciaEntrega = 0
    }else{
        console.log("Distância definida como: "+distanciaEntrega);
    }
} 

// Valor por KM

while (!isNaN(valorKm) && valorKm<=0) {
    valorKm = promptSync("💸Digite a Valor por KM (em reais): ");

    if(isNaN(valorKm) || valorKm<=0){
        console.log("Erro: Valor inválido!");
        valorKm = 0
    }else{
        console.log("Valor definido como: "+valorKm+ " reais por KM.");
    }
} 

// Tipo Entrega

let tipoEntrega = 0

while (tipoEntrega == 0) {
    tipoEntrega = promptSync("🎁Digite o tipo de entrega (Normal ou Urgente): ")
    if(tipoEntrega == "Normal"){
        console.log("Você definiu o tipo da entrega como Normal")
    }else{
        if(tipoEntrega == "Urgente"){
            console.log("Você definiu o tipo da entrega como Urgente")
        }else{
            tipoEntrega = 0
            console.log("Erro: Tipo de entrega inválida.")
        }
    }
}
