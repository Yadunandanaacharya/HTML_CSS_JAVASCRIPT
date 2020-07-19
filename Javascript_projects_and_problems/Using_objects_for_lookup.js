/*Using Objects for Lookups
Objects can be thought of as a key/value storage, like a dictionary. 
If you have tabular data, you can use an object to "lookup" values rather 
than a switch statement or an if/else chain.
 This is most useful when you know that your input data is limited to a certain range. 
  */
  /*Convert the switch statement into an object called lookup. 
  Use it to look up val and assign the associated string to the result variable.*/

 //You need to create extra object called lookup and assign all properties to that

function phoneticLookup(val) {
  var result = "";

  var lookup= {
  "alpha":"Adams",
  "bravo":"Boston",
  "charlie":"Chicago",
  "delta":"Denver",
  "echo":"Easy",
  "foxtrot":"Frank",
  }
  result =lookup[val]

  return result;
}

// console.log(phoneticLookup("charlie"))


/* conditions
phoneticLookup("alpha") should equal "Adams"
Passed
phoneticLookup("bravo") should equal "Boston"
Passed
phoneticLookup("charlie") should equal "Chicago"
Passed
phoneticLookup("delta") should equal "Denver"
Passed
phoneticLookup("echo") should equal "Easy"
Passed
phoneticLookup("foxtrot") should equal "Frank"
Passed
phoneticLookup("") should equal undefined
Passed
You should not modify the return statement
Passed
You should not use case, switch, or if statements*/



/*Checking objects for properties.
This problem is to use "hasOwnProperty"
Example:
var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");    // true
myObj.hasOwnProperty("middle"); // falase*/

// Just for understanding below answer

function checkObj(obj, checkProp) {
  // Only change code below this line
  var lookup = obj;
  if (checkProp in lookup){
    return lookup[checkProp];
  }else{
  	return "Not";
  }
  // Only change code above this line
}

object = checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")
// console.log(object)


// ORIGINAL ANSWER
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)==true){
    return obj[checkProp];
  }else{
  	return "Not Found";
  }
}

// OR
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
  }else{
  	return "Not Found";
  }
}
object = checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")
console.log(object)