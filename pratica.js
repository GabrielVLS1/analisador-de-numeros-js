let entrada = document.querySelector('#entrada');
let lista = document.querySelector('#lista');
let saida = document.querySelector('#saida');
let valores = [];


function isNumero(n){
  if(Number (n) >= 1 && Number (n) <= 100){
    return true;
  }else{
    return false;
  }
}

function inLista(n, l){
  if(l.indexOf(Number(n)) != -1){
    return true;
  }else{
    return false;
  }
}


function adicionar(){
  if(isNumero(entrada.value) && !inLista(entrada.value, valores)){
    valores.push(Number(entrada.value));

    let opt = document.createElement('option');
    opt.text += `Valor ${entrada.value} adicionado`;
    lista.appendChild(opt);
    
  }else{
    alert('Numero ja digitado')
  }
}


function finalizar(){
  if(valores.length == 0){
    alert('digite alguma coisa');
  }else{ 

    let maior = valores[0];
    let menor = valores[0];

    for(let pos in valores){
      if(valores[pos] > maior){
         maior = valores[pos];
      }if(valores[pos] < menor){
        menor = valores[pos];
        }
      } saida.innerHTML += `O maior valor da lista é: <strong>${maior}</strong><br>`;
    saida.innerHTML += `O menor valor da lista é: <strong>${menor}</strong><br>`;
    }
  }
