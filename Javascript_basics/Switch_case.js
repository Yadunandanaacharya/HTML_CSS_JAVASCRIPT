/* Using Switch case Selecting from Many Options with Switch Statements
If you have many options to choose from, use a switch statement. 
A switch statement tests a value and can have many case statements which define various possible values. 
Statements are executed from the first matched case value until a break is encountered.
If val with respect to case executed then it returns alpha
Testcases:
caseInSwitch(1) should have a value of "alpha"
caseInSwitch(2) should have a value of "beta"
caseInSwitch(3) should have a value of "gamma"
caseInSwitch(4) should have a value of "delta"
You should not use any if or else statements
You should have at least 3 break statements*/






function caseInSwitch(val) {
  var answer = "";
  
  switch (val) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
  }

 
  return answer;
}


caseInSwitch(1);