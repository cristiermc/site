function calcularDesconto() {
    let valorProduto = document.getElementById("valorProduto").value;
    let porcentagemDesconto = document.getElementById("porcentagemDesconto").value;

    if (valorProduto <= 0 || porcentagemDesconto < 0) {
        document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos.";
        document.getElementById("resultado").style.color = "red";
        alert("Por favor, insira valores válidos.");
        return;
    }else if (porcentagemDesconto > 100) {
        document.getElementById("resultado").innerHTML = "A porcentagem de desconto não pode ser maior que 100%.";
        document.getElementById("resultado").style.color = "red";
        alert("A porcentagem de desconto não pode ser maior que 100%.");
        return;
    }else {
    let desconto = (valorProduto * porcentagemDesconto) / 100;
    let valorFinal = valorProduto - desconto;

    document.getElementById("resultado").innerHTML = "Valor do desconto: R$ " + desconto.toFixed(2) + "<br>Valor final: R$ " + valorFinal.toFixed(2);
    document.getElementById("resultado").style.color = "green";
    }
}