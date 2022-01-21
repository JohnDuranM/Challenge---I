var buttonClean = document.querySelector("#button-clean");

buttonClean.addEventListener("click", function(event) {
    console.log("clic Clean")
    event.preventDefault();

    document.getElementById("inputTexto").value = "";
    document.getElementById("outputTexto").value = "";
});