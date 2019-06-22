var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(testArray, beginningElement){
  var newArray = testArray;
  newArray.unshift(beginningElement);
  return newArray
}


function destructivelyAddElementToBeginningOfArray(testArray, beginningElement){
  testArray.unshift(beginningElement);
  return testArray
}

var entrepreneurs = ["Oprah Winfrey", "Laurene Powell Jobs", "Arianna Huffington"];

console.log(entrepreneurs[0]);
