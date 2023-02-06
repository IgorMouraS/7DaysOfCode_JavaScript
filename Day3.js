let area = "";
let linguagem = "";
let nivel = 0;

while (nivel === 0){
    area = prompt("Você quer seguir para área de 'Front-End' ou de 'Back-End'? Digite o nome da área:");
    if (area === "Front-End"){
        linguagem = prompt("Você quer aprender React ou Vue?");
        nivel = 1;
    }
    else if (area === "Back-End"){
        linguagem = prompt("Você quer aprender C# ou Java?");
        nivel = 1;
    } else{
        alert("Você não inseriu uma área válida!");
    }
}

while (nivel === 1){
    let especialidadeOuFullstack = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack");
    if (especialidadeOuFullstack == 1){
        alert(`Continue se especializando em ${linguagem} para dominar a área de ${area}!`);
        nivel = 2;
    }
    else if (especialidadeOuFullstack == 2){
        alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
        nivel = 2;
    }
    else {
        alert("Você não inseriu um valor válido!");
    }
}

let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
while (msg === "ok"){
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}