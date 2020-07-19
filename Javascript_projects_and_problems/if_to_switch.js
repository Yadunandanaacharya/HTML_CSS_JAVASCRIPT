function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

// object = chainToSwitch(7);
// console.log(object)

// I need to convert above program's IF statements to "case" statements
function chainToSwitch2(val){
  var answer="";
  switch (val){
    case "bob":
      return "Marley";
      break;
    case 42:
      return "The Answer";
      break
    case 1:
      return "There is no #1";
      break
    case 99:
      return "Missed me by this much!";
      break
    case 7:
      return "Ate Nine";
      break
  }
  return answer;
}

object2 = chainToSwitch2(99)
console.log(object2)