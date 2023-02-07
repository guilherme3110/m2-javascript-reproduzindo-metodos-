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


function newFilter(array, callback) {
    const output = []
    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
          output.push(array[i])
        }
    }
       return output
}

function newFind(arrNumbers, callback) {
    for(let i = 0; i < arrNumbers.length; i++){
      if(callback(arrNumbers[i], i, arrNumbers) == true){
        return arrNumbers[i]
      }
    }
    return undefined
}

function newReduce(array, callback, valorInicial) {
  let count = 0;
  if( valorInicial != undefined){
    count = valorInicial
  }

  for(let i = 0; i <array.length; i++){
    count = callback(count, array[i])
    }
  return count
  
}
// Não alterar o código abaixo

export {
  newMap,
  newFilter,
  newFind,
  newReduce
}