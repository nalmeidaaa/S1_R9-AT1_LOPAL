const fs = require("fs");
const promptSync = require("prompt-sync")();
// Tipo de entrega (normal ou urgente).

let tipoEntrega = 0

while (tipoEntrega == 0) {
    tipoEntrega = promptSync("Digite o tipo de entrega (Normal ou Urgente): ")
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
