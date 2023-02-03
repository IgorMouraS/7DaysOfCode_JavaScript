const nome = prompt("Qual é o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");

const msg = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;
console.log(msg);

const msg2 = `Você gosta de estudar ${linguagem}?`;
console.log(msg2)
const resposta = prompt("Responda com o número 1 para SIM ou 2 para NÃO.");

if (resposta == 1){
    console.log("Muito bom! Continue estudando e você terá muito sucesso.");
}
else if (resposta == 2){
    console.log("Ahh que pena... ja tentou aprender outras linguagens?");
}
else{
    console.log("Você digitou o número errado");
}
