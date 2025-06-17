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