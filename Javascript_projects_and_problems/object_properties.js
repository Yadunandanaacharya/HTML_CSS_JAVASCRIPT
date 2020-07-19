/*Accessing Object Properties with Variables
Another use of bracket notation on objects is to access a property which is 
stored as the value of a variable. This can be very useful for iterating through
 an object's properties or when accessing a lookup table.

Here is an example of using a variable to access a property:

var dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed); // "Doberman"
Another way you can use this concept is when the property's name is 
collected dynamically during the program execution, as follows:

var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // "John"
Note that we do not use quotes around the variable name when using it to access the property because we are using the value of the variable, not the name.*/

var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};


var playerNumber =16;       
var player = testObj[playerNumber];   


//Updating name with accessing property of one object
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder" 
//Here we have used my Dog.name to access name property and we have updated new name as Happy coder when you print using console.log
//new name will be printed.


//Add new property to javascript object, this is similar like Python dictionary.
/*You should add the property "bark" to myDog.
Passed
You should not add "bark" to the setup section.*/
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog["bark"] = 'woof'
//here bark is new property 

//Deleting one property
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails

//We use delete command to delete property of object.

//Using Objects for Lookups
//Like Dictionary, Dictionary one word infront of that meaning of that word.