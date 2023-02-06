let area = 0;
let frontEnd = 0;
let backEnd = 0;
let especializarOuFullStack = 0;

let areaMsg = "";
let frontEndMsg = ""
let backEndMsg = ""
let especializarOuFullStackMsg = ""

let tecnologias = "";

if (area == 0){
    area = prompt("Qual área você deseja seguir? 1 para Front-End, 2 para Back-End");
}

if (area == 1){
    frontEnd = prompt ("Legal! você gosta de Front-End! Por onde deseja começar? 1 para React, 2 para Vue");
    areaMsg = "Front-End";
}else if (area == 2){
    backEnd = prompt ("Legal! Você gosta de Back-End! Por onde deseja começar? 1 para C#, 2 para Java");
    areaMsg = "Back-End";
}else{
    area = 0;
}

if(frontEnd == 1){
    frontEndMsg = "React";
}else if (frontEnd == 2){
    frontEndMsg = "Vue";
}else{
    area = 0;
    backEndMsg = "";
}

if(backEnd == 1){
    backEndMsg = "C#";
}else if (backEnd == 2){
    backEndMsg = "Java";
}else{
    area = 0;
    frontEndMsg = "";
}

especializarOuFullStack = prompt ("Interessante! digite 1 se você deseja se especializar na área, digite 2 se você deseja se tornar um desenvolvedor FullStack")

if(especializarOuFullStack == 1){
    especializarOuFullStackMsg = "se especializar na área";
}else if (especializarOuFullStack == 2){
    especializarOuFullStackMsg = "se tornar um desenvolvedor FullStack";
}else{
    area = 0;
}

tecnologias = prompt ("Existe outras tecnologias nas quais você gostaria de se especializar ou de conhecer? Quais?")

alert("Que legal! Então você decidiu seguir na area de ", areaMsg, ". Começando por ", frontEndMsg, backEndMsg, ". O que você quer para o futuro é ", especializarOuFullStackMsg);