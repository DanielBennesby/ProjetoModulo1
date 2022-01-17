function aprendiz2() {
    while (x != 1 || x != 2) {
        var x = Number(prompt("Escolha"))
        if (x === 1) {
            window.location.href = "./2ª morte do Aprendiz.html";
            break
        }
        else if (x === 2) {
            window.location.href = "./3ª pagina Aprendiz.html"
            break
        }
        else {
            alert("Digite 1 ou 2, como foi pedido");
            break
        }
    }
}

