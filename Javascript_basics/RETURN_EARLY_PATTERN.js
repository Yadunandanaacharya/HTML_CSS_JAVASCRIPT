/*Return Early Pattern for Functions
When a return statement is reached, the execution of the current function stops 
and control returns to the calling location.

Example

function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
The above outputs "Hello" to the console, returns "World", but "byebye" is never output,
 because the function exits at the return statement.

Modify the function abTest so that if a or b are less than 0 the function will immediately
 exit with a value of undefined.

SOMETIME DON'T TRY TO CHECK ALL TEST CASES, EXAMPLE TRY TO EXCEUTE JUST AFTER MAKING CHANGE
LIKW "IF A<0 AND B<0 RETURN UNDEFINED"  IT WILL EXECUTE

abTest(2,2) should return a number
Passed
abTest(2,2) should return 8
Passed
abTest(-2,2) should return undefined
Passed
abTest(2,-2) should return undefined
Passed
abTest(2,8) should return 18
Passed
abTest(3,3) should return 12
Passed
abTest(0,0) should return 0*/
// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a<0 || b<0){
    return undefined
  } 


  
  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

// running tests
