const area = 0;
const frontEnd = 0;
const backEnd = 0;
const especializarOuFullStack = 0;

const areaMsg = "";
const frontEndMsg = ""
const backEndMsg = ""
const especializarOuFullStackMsg = ""

const tecnologias = "";

if (area === 0){
    area = prompt("Qual área você deseja seguir? 1 para Front-End, 2 para Back-End");
}

if (area === 1){
    frontEnd = prompt ("Legal! você gosta de Front-End! Por onde deseja começar? 1 para React, 2 para Vue");
    areaMsg = "Front-End";
}else if (area === 2){
    backEnd = prompt ("Legal! Você gosta de Back-End! Por onde deseja começar? 1 para C#, 2 para Java");
    areaMsg = "Back-End";
}else{
    area = 0;
}

if(frontEnd === 1){
    frontEndMsg = "React";
}else if (frontEnd === 2){
    frontEndMsg = "Vue";
}else{
    area = 0;
}

if(backEnd === 1){
    backEndMsg = "C#";
}else if (backEnd === 2){
    backEndMsg = "Java";
}else{
    area = 0;
}

especializarOuFullStack = prompt ("Interessante! digite 1 se você deseja se especializar na área, digite 2 se você deseja se tornar um desenvolvedor FullStack")

if(especializarOuFullStack === 1){
    especializarOuFullStackMsg = "se especializar na área";
}else if (especializarOuFullStack === 2){
    especializarOuFullStackMsg = "se tornar um desenvolvedor FullStack";
}else{
    area = 0;
}

tecnologias = prompt ("Existe outras tecnologias nas quais você gostaria de se especializar ou de conhecer? Quais?")