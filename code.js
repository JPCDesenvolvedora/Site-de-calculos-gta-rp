function btnCalcular(){
    let valorRecebido = document.getElementById("valorRecebido").value;
    let valorPorcentagemCobrada = document.getElementById("valorPercentCobrada").value;
    
    let calculoValorNosso = (valorRecebido * valorPorcentagemCobrada) / 100;
    let calculoValorDoCliente = valorRecebido - calculoValorNosso; 

    console.log(valorRecebido);
    console.log(valorPorcentagemCobrada);
    console.log("teste");
    console.log(calculoValorNosso);
    console.log(calculoValorDoCliente);

    var resultadoCalculo = document.getElementById("resultadoCliente");
    var resultadoCalculo2 = document.getElementById("resultadoOrg");

    if(isNaN(calculoValorNosso || calculoValorDoCliente)) {
        resultadoCalculo.style.display = 'block';
        resultadoCalculo.innerHTML = "Digite valores válidos!"
    } else {
    resultadoCalculo.style.display = 'block';
    resultadoCalculo2.style.display = 'block';

    resultadoCalculo.innerHTML = "Você deve ficar com " + calculoValorNosso;
    resultadoCalculo2.innerHTML = "Você deve entregar " + calculoValorDoCliente + " para o cliente."
  }

}
    