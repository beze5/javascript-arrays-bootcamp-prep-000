var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(testArray, beginningElement){
  const newArray = [beginningElement...testArray]
  return newArray
}


function destructivelyAddElementToBeginningOfArray(testArray, beginningElement){
  return testArray.unshift(beginningElement)
}

  