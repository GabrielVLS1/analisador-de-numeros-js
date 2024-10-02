let entrada = document.querySelector("input#entrada");
let lista = document.querySelector("select#lista");
let saida = document.querySelector("div#saida");
let valores = [];


function isNumero(n){
  if(Number(n) >= 1 && Number(n) <= 100){
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
    opt.text = `Valor ${entrada.value} adicionado`;
    lista.appendChild(opt);

    saida.innerHTML = '';
    
  }else{
    alert('Este valor é inválido ou já se encontra em uso.');
  }
  entrada.value = '';
  entrada.focus();
}



function finalizar(){
  if (valores.length == 0){
    alert('Preencha a lista com algum valor.')
  }else{
    let total = valores.length

    let maior = valores[0];
    let menor = valores[0]; 
    let soma = 0;              //Number()            
    let media = 0;             //Number()            

    for(let pos in valores){
    if(valores[pos] > maior){
      maior = valores[pos];
    } if(valores[pos] < menor){
      menor = valores[pos];
    }
       soma += valores[pos];
    }
     media = soma / total;


    saida.innerHTML = '';
    saida.innerHTML += `O total de valores da lista é: <strong>${total}</strong><br>`;

    saida.innerHTML += `O maior valor da lista é: <strong>${maior}</strong><br>`;
    saida.innerHTML += `O menor valor da lista é: <strong>${menor}</strong><br>`;
    saida.innerHTML += `A soma dos valores da lista é: <strong>${soma}</strong><br>`;
    saida.innerHTML += `A média de valores da lista é: <strong>${media}</strong><br>`;
  }
}
