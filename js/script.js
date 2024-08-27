let textArea = document.querySelector(".text-area");
let mensagem = document.querySelector(".mensagem");

function btnEncriptar(){
    var textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar (stringEncriptada){
    let matrizCodigo = [
        ["e","enter"],
        ["i","imes"],
        ["a","ai"],
        ["o","ober"],
        ["u","ufat"]
];
stringEncriptada = stringEncriptada.toLowerCase();

for ( i=0; i < matrizCodigo.length; i++){
    if (stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
}
return stringEncriptada;

}

function btnDesencriptar(){
    var textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar (stringDesencriptada){
    let matrizCodigo = [
        ["e","enter"],
        ["i","imes"],
        ["a","ai"],
        ["o","ober"],
        ["u","ufat"]
];
stringDesencriptada = stringDesencriptada.toLowerCase();

for ( i=0; i < matrizCodigo.length; i++){
    if (stringDesencriptada.includes(matrizCodigo[i][1])){
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
}
return stringDesencriptada;
}

function btnCopiar(){
    let textoCopiado = document.querySelector(".mensagem");
    mensagem.select();
    document.execCommand('copy');
    alert ("O texto copiado foi: " + mensagem.value + "cole no campo para descriptografar");
    mensagem.value="";
}