/*testGreaterThan(0) should return "10 or Under"
Passed
testGreaterThan(10) should return "10 or Under"
Passed
testGreaterThan(11) should return "Over 10"
Passed
testGreaterThan(99) should return "Over 10"
Passed
testGreaterThan(100) should return "Over 10"
Passed
testGreaterThan(101) should return "Over 100"
Passed
testGreaterThan(150) should return "Over 100"
Passed
You should use the > operator at least twice*/



//IMPORTANT THING VALUE YOU WANT TO COMPARE YOU NEED TO TYPE
//INSIDE BRACKET ""(VAL>100)""
function testGreaterThan(val) {
  if (val>100)  {  

    return "Over 100";
  }

  if (val>10){  
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(109);
