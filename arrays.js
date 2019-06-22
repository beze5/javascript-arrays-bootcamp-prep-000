var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(testArray, beginningElement){
  var newArray = testArray;
  newArray.unshift(beginningElement);
  return newArray
}


function destructivelyAddElementToBeginningOfArray(testArray, beginningElement){
  return testArray.unshift(beginningElement)
}

  