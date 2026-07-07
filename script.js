function verificarAprovacao() {
    let nota = document.getElementById("nota").value;
    //let resultado = document.getElementById("resultado");

    if (nota >= 7) {
        document.getElementById("resultado").innerHTML = "Aprovado!";
        document.getElementById("resultado").style.color = "green";
        alert("Parabéns! Você foi aprovado.");
    } else {
        document.getElementById("resultado").innerHTML = "Reprovado.";
        document.getElementById("resultado").style.color = "red";
        alert("Infelizmente, você foi reprovado.");
    }
}