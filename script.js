var areaDeEscrita = document.getElementById("decoder-area");
var botaoCripto = document.getElementById("cripto-button");
var botaoDescripto = document.getElementById("descripto-button");
var botaoCopiar = document.getElementById("copy");
var output = document.getElementById("output-view");
var removerImagem = document.getElementById("remover-imagem");

function Criptografar() {
    var texto = areaDeEscrita.value.toLowerCase();

    removerImagem.style.display = "none";

    output.style.display = "block";
    botaoCopiar.style.display = "flex";
    output.style.color = "#0A3871"
    output.style.fontSize = "18px"

    var criptografar = texto.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    output.innerHTML = criptografar;

    if(areaDeEscrita.value == ""){
        botaoCopiar.style.display = "none";
        output.style.display = "none";
        removerImagem.style.display = "block";
    }

}

function Descriptografar() {
    var texto = areaDeEscrita.value.toLowerCase();

    removerImagem.style.display = "none";
    output.style.display = "block";
    output.style.color = "#0A3871"
    output.style.fontSize = "18px"

    var descriptografar = texto.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

    output.innerHTML = descriptografar;

    if(areaDeEscrita.value == ""){
        botaoCopiar.style.display = "none";
        output.style.display = "none";
        removerImagem.style.display = "block";
    }
}

function Copiar() {
    botaoCopiar.addEventListener("click", function(evento){
        output.select();
        document.execCommand("copy");

    });
    
}

botaoCripto.onclick = Criptografar;
botaoDescripto.onclick = Descriptografar;
botaoCopiar.onclick = Copiar;

console.log();