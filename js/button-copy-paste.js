var buttonCopy = document.querySelector("#button-copy");
var buttonPaste = document.querySelector("#button-paste");

buttonCopy.addEventListener("click", function(event) {
    event.preventDefault();
    var text = document.getElementById("outputTexto");
    text.select();
    document.execCommand('copy');
});

buttonPaste.addEventListener("click", function(event) {
    console.log("clic Paste");
    event.preventDefault();

    //paste 
    var text = document.getElementById("outputTexto");
    document.getElementById("inputTexto").value = text.value.toString();
    document.getElementById("outputTexto").value = "";
});