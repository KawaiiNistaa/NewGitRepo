/*const groceryList = ['tomatoes', 'milk', 'strawberries', 'pluots', 'basil', 'honey'];

const newGroceries = groceryList.filter(letterCheck); 

const letterCheck = (element, index, array) => {
  console.log(element, index, array);
  let letterTracker = 0;
  for (let i = 0; i < element.length; i++ ){
    if (element[i] === 'c') {
      letterTracker++;
    }
  }
  return (letterTracker >= 2) ?  true : false ;
};


const newGroceries = groceryList.filter(letterCheck); 

*/


const groceryList = ['tomatoes', 'milk', 'strawberries', 'pluots', 'basil', 'honey'];
 
const letterCheck = (element) => {
  console.log(element);
  let letterTracker = 0;
  for (let i = 0; i < element.length; i++ ){
    if (element[i] === 'c') {
      letterTracker++;
    }
  }
  return (letterTracker >= 2) ?  true : false ;
};

var newGroceries = [];
for (let j = 0; j < groceryList.length; j++){
  
  var item = letterCheck(groceryList[j]);
  if (item === true){
   newGroceries.push(groceryList[j]);
  } else {
    continue;
  }

  if (j === groceryList.length - 1) {
    return newGroceries;

  }
  
  // i need to make this code above this a variable ( not const)
  // then create an if else statement taking in both true or false
  //if false then nothing happens 
  //if true then we add it to an array
  // i need to create an empty array 
  // at the end i will print out this empty
// since this array will print after i finish the whole think i dont know if its important to declare the array outside of the function

}






//const newGroceries = groceryList.filter(letterCheck); 


/*



// try to do this without THE FILTER THING
create a nested for loop
first for loop covers the element itself 
second created the nested loop that checks each letter/character
inside that loop we will create a if statement as well as another variable meant to keep track of how many of each letter that element contains
if the element scores 2 or more then it will be printed/returned
then it will increase the index by 1 ( i++)





*/

var arr = ['a', 'b', 'c']
arr[0] // array at 0
var obj = {
  yellow: 'banana',
  purple: 'grapes',
  '1234': 'alien food',
};
obj.yellow // 'banana'
obj.1234 // NO
obj['1234'] // 'alien food'
2:35
//old school nested loop:


var newGroceries = [];
for (let j = 0; j < groceryList.length; j++){
  // letterCheck runs a loop and returns true or false
  // var item = letterCheck(groceryList[j]);
  var item;
  var element = groceryList[j] // talk about object keys
  var letterTracker = 0;
  for (let i = 0; i < element.length; i++) {
    if (element[i] === 'c') {
      letterTracker++;
    }
  }
  if (letterTracker >= 2) {
    item = true
  } else {
    continue;
  }
  if (item === true){
   newGroceries.push(groceryList[j]);
  } else {
    continue;
  }
  if (j === groceryList.length - 1) {
    console.log(newGroceries);
    return newGroceries;
  }
  // i need to make this code above this a variable ( not const)
  // then create an if else statement taking in both true or false
  //if false then nothing happens
  //if true then we add it to an array
  // i need to create an empty array
  // at the end i will print out this empty
// since this array will print after i finish the whole think i dont know if its important to declare the array outside of the function
}