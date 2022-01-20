
var buttonEncrypt = document.querySelector("#bt-encrypt");
var buttonDecrypt = document.querySelector("#bt-decrypt");
var formInput = document.querySelector("#agregar-texto");
let text

// capture click
buttonEncrypt.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("click encrpt");
    encryptText(formInput);
});

buttonDecrypt.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("click Decrpt");
    decryptText(formInput);
});

// capture form info to apply encrypt and decrypt
function encryptText(formInput) {
    text = inputTexto.value.toLowerCase();

    text = text.replace("e", "enter");
    text = text.replace("i", "imes");
    text = text.replace("a", "ai");
    text = text.replace("o", "ober");
    text = text.replace("u", "ufat");

    document.getElementById("outputTexto").value = text.toLowerCase();
    console.log(text);
}

function decryptText(formInput) {
    text = inputTexto.value.toLowerCase();

    text = text.replace("enter", "e")
    text = text.replace("imes", "i")
    text = text.replace("ai", "a")
    text = text.replace("ober", "o")
    text = text.replace("ufat", "u")

    document.getElementById("outputTexto").value = text.toLowerCase();
    console.log(text);
}