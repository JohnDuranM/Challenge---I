var buttonCopy = document.querySelector("#button-copy");

buttonCopy.addEventListener("click", function(event) {
    event.preventDefault();
    var text = document.getElementById("outputTexto");
    text.select();
    document.execCommand('copy');
    alert("tu texto ha sido copiado");
});