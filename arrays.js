var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, el)  {
   return [el, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
   arr.unshift(el);
   return arr
}

function addElementToEndOfArray(arr, el) {
   return [...arr, el];
}

function destructivelyAddElementToEndOfArray(arr, el) {
  return arr.push(el);
}

function accessElementInArray(arr, index){

  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  return arr.shift();
}

function removeElementFromBeginningOfArray(arr){
  return arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arr){
  return arr.pop();
}
