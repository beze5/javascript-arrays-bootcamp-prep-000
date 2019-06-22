// SIMPLE ARRAY CREATION

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];




// ADD TO BEGINNING OF ARRAY
function addElementToBeginningOfArray(testArray, beginningElement){
  var newArray = testArray;
  newArray.unshift(beginningElement);
  return newArray
}


function destructivelyAddElementToBeginningOfArray(testArray, beginningElement){
  testArray.unshift(beginningElement);
  return testArray
}






// NOTES

//these are notes on selecting and using specific elements from arrays

var entrepreneurs = ["Oprah Winfrey", "Laurene Powell Jobs", "Arianna Huffington"];

console.log(entrepreneurs[0]);

var bio = " is the co-founder and editress-in-chief of The Huffington Post";
console.log(entrepreneurs[2] + bio);

entrepreneurs[9];

function accessElementInArray(array, index){
  return array[index];
}

// these are notes on removing an element from an array 

const days = ["Monday", "Tuesday", "Wednesday"];

days.shift(); // this removes the first element in the array (Monday)

days; // this returns the array without the removed (first) element, Monday






// REMOVE FROM THE BEGINNING OF AN ARRAY

function destructivelyRemoveElementFromBeginningOfArray(anArray){
  anArray.shift();
  return anArray;
}














//the slice method removes specifically identified elements from an array

var cats = ["Milo", "Garfield", "Otis"];
cats.slice(1); //this will take out the first element in the array
cats; // this will print the array as it was without the removal (you must use slice to print an array with items removed)

var cats = ["Milo", "Garfield", "Otis"]
cats = cats.slice(1)
cats // in order for slice method's results to stick around, they must be saved to a new variable (or just reuse the original one to redefine it)

var cats = ["Milo", "Garfield", "Otis"]

// if we want the last two elements of the array, we can use...
cats.slice(-2)
//this would give us ["Garfield", "Otis"]

cats.slice(-1)
//this would give us ["Otis"]

function removeElementFromBeginningOfArray(array){
  array.slice(0)
  return array
}

function removeElementFromBeginningOfArray(array){
  array.shift()
}
// the pop method removes elements from the end of an array
var iceCreams = ["chocolate", "vanilla", "raspberry"]

iceCreams.pop()
//returns the removed element; in this case, raspberry

iceCreams //this will return ["chocolate", "vanilla"]; similar to the push method, pop is destructive and alters the original array



//REMOVE ELEMENT FROM END OF ARRAY
function destructivelyRemoveElementFromEndOfArray(thisArray){
  thisArray.pop()
  return thisArray
}

function removeElementFromEndOfArray(array){
  array.slice(0, array.length - 1);
}






// the length propery of arrays can help us define how far we want to slice (which parts do we want to use of the array?)
var iceCreams = ["chocolate", "vanilla", "raspberry"];
iceCreams.slice(0, iceCreams.length - 1);
iceCreams // slice method does not alter the original


  
// the splice method can return an element from the middle of an array, but it can be tricky. The splice method takes an index in the array as its first argument, the number of elements to remove as its second argument, and any number of elements to add as any arguments after the second. All arguments are optional. 

let items = [1, 2, 3, 4]

// this will remove everything after index 1 (inclusive)
// it returns the removed items: [2, 3, 4]

items.splice(1)
items 
// this will return 1 

items = [1, 2, 3, 4]

// "at index 1, remove 1 item"
// it returns the removed item(2): [2]

items.splice(1, 1)
items
items = [1, 2, 3, 4]

// "at index 1, remove 1 item and add 6 and 7"
// it returns the removed items: [2]
// and adds the items to add starting at the removal index

