/*myData should be equal to 8.
Passed
You should be using bracket notation to read the correct value from myArray.*/
// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line
var myData = myArray[2][1];
/*this program is just to pass the test cases
here [1,2,3] is of 0th index
[4,5,6] index is 1
[7,8,9] index is 2
[[10,11,12],13,14] index is 3
if you want to access 12 in [[10,11,12],13,14]
you need to access from beginning
like myData[3][0][2] this will print 12*/