function calcularIMC() {
    var nome = document.getElementById('nome').value;
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    
    if (!nome || peso <= 0 || altura <= 0) {
        document.getElementById('resultado').textContent = "Valores inválidos.";
        return;
    }

    var imc = peso / (altura * altura);
    var classificacao;

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    document.getElementById('resultado').textContent = `${nome}, seu IMC é ${imc.toFixed(2)} (${classificacao})`;
}
