// Write down the 7 primitive data types, with an example. I.E. `String:"example"
// ==============================================================================
/* 
In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties.  

WRITE OUT YOUR DEFINITIONS HERE! 
*/
// string:  "string" 'string'

// number: 1 2 3 4

// bigint: The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary precision. 

//     let pageView = 9007199254740991n;
//     console.log(typeof(pageView)); // 'bigint'

// boolean: Boolean represents a logical entity and can have two values: true and false

// undefined:  A variable that has not been assigned a value has the value undefined. 

// symbol:  Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique.

// null:  The Null type has exactly one value: null


// Write out your definition for what a function and a callback is. Give examples 
// of a named function, arrow function, and an anonymous arrow function
// ==============================================================================
/* 
  WRITE OUT YOUR DEFINITIONS HERE! 

  WRITE OUT CODE EXAMPLES BELOW
*/

// Function:  A JavaScript function is a block of code designed to perform a particular task.  A JavaScript function is executed         when "something" invokes it (calls it).

function myFunction(p1, p2) {
  return p1 * p2; 

// A callback function: is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

  function greeting(name) {
    alert('Hello ' + name);
  }

  function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
  }
}
  processUserInput(greeting);

// arrow function:  Arrow functions were introduced in ES6.  Arrow functions allow us to write shorter function syntax:

  let myFunction = (a, b) => a * b;

 
  hello = function() {
  return "Hello World!";
  }

  hello = () => {
  return "Hello World!";
  }

  
// anonymous arrow function:  




// // Your Definition of an array, forEach, map, find, and filter. 
// // (For the iterators please specify the return values of function & callback) 
// // Give examples of each iterator. I.E.
// /*
//   forEach returns undefined and the return of the callback does not matter.
// */
// arr.forEach((el) => console.log(el))
// ==============================================================================
/* 
  WRITE OUT YOUR DEFINITIONS HERE! 
  WRITE OUT CODE EXAMPLES BELOW
*/

// array:  An array is a special variable, which can hold more than one value:

  const cars = ["Saab", "Volvo", "BMW"];

  const cars2 = new Array("Saab", "Volvo", "BMW");


// forEach:  The forEach() method executes a provided function once for each array element.

// Ex 1
  const array1 = ['a', 'b', 'c'];

  array1.forEach(element => console.log(element));

//   // expected output: "a"
//   // expected output: "b"
// / / expected output: "c"


// Ex 2)

const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}

// Ex 3)


// map:  The map() method creates a new array populated with the results of calling a provided function on every element in the calling     array.

const array3 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]


// find:  The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

const array2 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12


// filter:  The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]




// Your definition of an object. Write a complex object that describes a home. I.E
const home1 = { 
  address: { 
    streetName: "fake", 
    streetNum: 555, 
    zip: 10000
  }, 
  rooms: [...], 
  ...
}

const home = { 
  address: { 
    streetName: "fake", 
    streetNum: 555, 
    zip: 10000
  }, 
  rooms: [{type: “bedroom”, name: “Master Bedroom”, sqft: 200},
    {type: “bathroom”, name: “Guest Bath”, sqft: 100},
],
  hasGarage: true,
  forSale: false
}
    





// The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.


// ==============================================================================
/* 
  WRITE OUT YOUR DEFINITIONS HERE! 
  WRITE OUT CODE EXAMPLES BELOW
*/













// Write out 4 selectors that you know of. Using js Create a unordered list with 4 list items.
// ==============================================================================
/* 
  WRITE OUT YOUR DEFINITIONS HERE! 
  WRITE OUT CODE EXAMPLES BELOW
*/












