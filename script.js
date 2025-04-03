class Parquimetro {
  constructor(valorPago) {
    this.valorPago = valorPago;
    this.tempo = 0;
    this.valorPagar = 0;
    this._valorMinimo = 1.0;
    this._valorMáximo = 3.0;
  }

  calcular() {
    if (this.valorPago < this._valorMinimo) {
      alert("Valor insuficiente");
      return;
    }

    if (this.valorPago >= 1 && this.valorPago < 1.75) {
      this.valorPagar = 1;
      this.tempo = 30;
    } else if (this.valorPago >= 1.75 && this.valorPago < 3) {
      this.valorPagar = 1.75;
      this.tempo = 60;
    } else if (this.valorPago >= 3.0) {
      this.valorPagar = 3.0;
      this.tempo = 120;
    }

    this.mostrarResultados();
    console.log(this.valorPagar);
    console.log(this.valorPago);
  }

  mostrarResultados() {
    document.getElementById(
      "tempoEstacionado"
    ).textContent = `Tempo estacionado: ${this.tempo} minutos`;
    document.getElementById("troco").textContent = `Troco: R$ ${
      this.valorPago - this.valorPagar
    }`;
  }
}

document.getElementById("botaoCalcular").addEventListener("click", () => {
  let valorPago = parseFloat(
    document.getElementById("valorPago").value
  ).toFixed(2);
  console.log(valorPago);
  if (!isNaN(valorPago)) {
    const parquimetro = new Parquimetro(valorPago);
    parquimetro.calcular();
  }
});

// botaoCalcular

// Calcular e exibir o tempo correspondente e o troco (se houver).
