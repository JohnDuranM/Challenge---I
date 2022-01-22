
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

    text = text.replace(new RegExp("e",'g'), "enter");
    text = text.replace(new RegExp("i",'g'), "imes");
    text = text.replace(new RegExp("a",'g'), "ai");
    text = text.replace(new RegExp("o",'g'), "ober");
    text = text.replace(new RegExp("u",'g'), "ufat");
    text = text.replace(new RegExp("[àáâãäå\\sæçèéêëìíîïñòóôõöœùúûüýÿ\\W1234567890]", 'g'),"");

    document.getElementById("outputTexto").value = text.toLowerCase();
    console.log(text);
}

function decryptText(formInput) {
    text = inputTexto.value.toLowerCase();

    text = text.replace(new RegExp("enter",'g'), "e")
    text = text.replace(new RegExp("imes",'g'), "i")
    text = text.replace(new RegExp("ai",'g'), "a")
    text = text.replace(new RegExp("ober",'g'), "o")
    text = text.replace(new RegExp("ufat",'g'), "u")
;

    document.getElementById("outputTexto").value = text.toLowerCase();
    console.log(text);
}



/* const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 

-----

accentsTidy = function(s){
    var text=s.toLowerCase();
    text = text.replace(new RegExp("\\s", 'g'),"");
    text = text.replace(new RegExp("[àáâãäå]", 'g'),"a");
    text = text.replace(new RegExp("æ", 'g'),"ae");
    text = text.replace(new RegExp("ç", 'g'),"c");
    text = text.replace(new RegExp("[èéêë]", 'g'),"e");
    text = text.replace(new RegExp("[ìíîï]", 'g'),"i");
    text = text.replace(new RegExp("ñ", 'g'),"n");                            
    text = text.replace(new RegExp("[òóôõö]", 'g'),"o");
    text = text.replace(new RegExp("œ", 'g'),"oe");
    text = text.replace(new RegExp("[ùúûü]", 'g'),"u");
    text = text.replace(new RegExp("[ýÿ]", 'g'),"y");
    text = text.replace(new RegExp("\\W", 'g'),"");
    return text;
}; */
