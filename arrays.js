var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(testArray, beginningElement){
  const newArray = [beginningElement...testArray]
  return newArray
}





function destructivelyAddElementToBeginningOfArray(testarray, beginningElement){
  return testarray.unshift("endElement")
}

  