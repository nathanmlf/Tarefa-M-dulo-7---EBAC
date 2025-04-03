//Receber um valor inserido pelo usuário para calcular o tempo no estacionamento.

class CalcularValor {
  constructor() {
    this.tempo = 0;
    this.troco = 0;
    this._valorMinimo = 1.0;
    this._valorMáximo = 3.0;
  }
  calcular() {
    const valorPago = parseFloat(
      document.getElementById("valorPago").value
    ).toFixed(2);
    console.log(valorPago);

    if (valorPago < this._valorMinimo) {
      alert("Valor insuficiente");
    }

    if (valorPago <= 1) {
      this.tempo = 30;
      this.mostrarResultados();
    }
    if (valorPago == 1.75) {
      this.tempo = 60;
    }
    if (valorPago > 1.75) {
      this.tempo = 120;
    }
  }

  mostrarResultados(tempo, troco) {
    document.getElementById(
      "tempoEstacionado"
    ).textContent = `Tempo estacionado: R$ ${tempo}`;
    document.getElementById("troco").textContent = `Troco: R$ ${troco}`;
  }
}

const calcularValor = new CalcularValor();

/* Exibir uma mensagem de "Valor insuficiente" caso o valor seja menor que R$1,00 
Calcular e exibir o tempo correspondente e o troco (se houver). */
