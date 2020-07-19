/* This is Golf game you need to check conditiond given carefully
golfScore(4, 1) should return "Hole-in-one!"
Passed
golfScore(4, 2) should return "Eagle"
Passed
golfScore(5, 2) should return "Eagle"
Passed
golfScore(4, 3) should return "Birdie"
Passed
golfScore(4, 4) should return "Par"
Passed
golfScore(1, 1) should return "Hole-in-one!"
Passed
golfScore(5, 5) should return "Par"
Passed
golfScore(4, 5) should return "Bogey"
Passed
golfScore(4, 6) should return "Double Bogey"
Passed
golfScore(4, 7) should return "Go Home!"
Passed
golfScore(5, 9) should return "Go Home!"*/

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1){
    return "Hole-in-one!"
  } else if (strokes <= par -2){
    return "Eagle";
  } else if (strokes <= par -1){
    return "Birdie"
  } else if (strokes == par){
    return "Par";
  } else if (strokes == par +1){
    return "Bogey"
  } else if (strokes == par + 2){
    return "Double Bogey"
  } 

  return "Go Home!";
  // Only change code above this line
}

golfScore(5, 4);
