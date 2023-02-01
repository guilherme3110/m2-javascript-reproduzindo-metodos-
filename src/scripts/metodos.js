   const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function callbackMap(valorAtual, indice, arrNumbers){
  return valorAtual * 2
}

function newMap(elemento, callback) {
  const newArr = []
  for(let i = 0; i < elemento.length; i++){
    const output = callback(elemento[i], i, elemento)
    newArr.push(output)
  }
  return newArr
}
console.log(newMap(arrNumbers, callbackMap))




let arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function callbackFilter(elemento){
  if(elemento >= 11){
    return elemento
  }else{

  }
}


function newFilter(number, callback) {
    const output = []
    for(let i = 0; i < number.length; i++){
      output.push(callback[i])
    }
       return output
}

console.log(newFilter(arrNumber, callbackFilter))


function newFind(arrNumbers, callback) {
    for(let i = 0; i < arrNumbers.length; i++){
      if(callback(arrNumbers[i], i, arrNumbers) == true){
        return arrNumbers[i]
      }
    }
    return undefined
}


function callbackReduce(acumulador, valorAtual){
  return valorAtual + acumulador
}

function newReduce(array, callback, valorInicial) {
  let count = valorInicial

  for(let i = 0; i <array.length; i++){
    count = callback(count, array[i])
  }
  return count
  
}

console.log(newReduce(arrNumbers,callbackReduce,0))






// Não alterar o código abaixo

export {
  newMap,
  newFilter,
  newFind,
  newReduce
}