let entrada = document.querySelector('#entrada');
let lista = document.querySelector('#lista');
let saida = document.querySelector('#saida');
let valores = [];


function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}


function inList(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}



function adicionar() {
  if (isNumber(entrada.value) && !inList(entrada.value, valores)) {
    valores.push(Number(entrada.value))
  } else {
    alert('numero ja digitado!');
  }
}


function finalizar() {

  if (valores.value.length == 0) {
    alert('Sem números')
  } else {


    let maior = valores[0];
    let menor = valores[0];
    let total = valores.length;
    let soma
    let media

    for (let pos in valores) {
      if (valores[pos] > maior) {
        maior = valores[pos];
      } if (valores[pos] < menor) {
        menor = valores[pos];
      }
    }
    soma += valores[pos];
    media = soma / total;

    saida.innerHTML += `O maior valor é: ${maior}`;
    saida.innerHTML += `O menor valor é: ${menor}`;
    saida.innerHTML += `A soma dos valores é: ${soma}`;
    saida.innerHTML += `A soma dos valores é: ${total}`;
  }
}