let entrada = document.querySelector('#entrada');
let lista = document.querySelector('#lista');
let saida = document.querySelector('#saida');
let valores = [];


function isNumber(n){
  if(Number(n) >= 1 && Number(n) <= 100){
    return true;
  }else{
    return false;
  }
}

function inList(n, l){
  if(l.indexOf(Number(n)) != -1){
    return true;
  }else{
    return false;
  }
}


function adicionar(){
  if(isNumber(entrada.value) && !inList(entrada.value, valores)){
    valores.push(Number(entrada.value));

    let opt = document.createElement('option');
    opt.text = `Valor ${entrada.value} adicionado`;
    lista.appendChild(opt);

    saida.innerHTML = '';
    
  }else{
    alert('IMPOSTOR‼️1‼️1‼️ඞඞඞඞඞ😱😱😱');
  }

entrada.value = '';
entrada.focus();
}




function finalizar(){
  if(valores.length == 0){
    alert('Deu ruim amigaokk');
  }else{
    let total = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;

    for(let pos in valores){
      if(valores[pos] > maior){
        maior = valores[pos];
      }if(valores[pos] < menor){
        menor = valores[pos];
      }
      soma += valores[pos];
      media = soma / total;
    }
    
    saida.innerHTML+=
      `Total: ${total}<br>
      Maior: ${maior}<br>
      Menor: ${menor}<br>
      Soma: ${soma}<br>
      Média: ${media}`;
  }
}

