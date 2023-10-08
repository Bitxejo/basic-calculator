console.log("Aplicacion calculadora");

function sumar(){
    let forma =document.getElementById("forma");
    let operandoA =forma["operandoA"];
    let operandoB =forma["operandoB"];
    let operandoC =forma["operandoC"];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value) + parseInt(operandoC.value);
    if(isNaN(resultado))
    resultado ="Escribe un numero";
    document.getElementById("resultado").innerHTML = `Resultado suma : ${resultado}`;
    console.log(`Resultado : ${resultado}`);
}

function restar(){
    let forma =document.getElementById("forma");
    let operandoA =forma["operandoA"];
    let operandoB =forma["operandoB"];
    let operandoC =forma["operandoC"];
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value) - parseInt(operandoC.value);
    if(isNaN(resultado))
    resultado ="Escribe un numero";
    document.getElementById("resultado1").innerHTML = `Resultado resta : ${resultado}`;
    console.log(`Resultado : ${resultado}`);
}


function multiplicar(){
    let forma =document.getElementById("forma");
    let operandoA =forma["operandoA"];
    let operandoB =forma["operandoB"];
    let operandoC =forma["operandoC"];

    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value) * parseInt(operandoC.value);
    if(isNaN(resultado))
    resultado ="Escribe un numero";
    document.getElementById("resultado2").innerHTML = `Resultado multiplicacion : ${resultado}`;
    console.log(`Resultado : ${resultado}`);
}

function dividir(){
    let forma =document.getElementById("forma");
    let operandoA =forma["operandoA"];
    let operandoB =forma["operandoB"];
    let operandoC =forma["operandoC"];

    let resultado = parseInt(operandoA.value) / parseInt(operandoB.value) / parseInt(operandoC.value);
    if(isNaN(resultado))
    resultado ="Escribe un numero";
    document.getElementById("resultado3").innerHTML = `Resultado division  : ${resultado}`;
    console.log(`Resultado : ${resultado}`);
}