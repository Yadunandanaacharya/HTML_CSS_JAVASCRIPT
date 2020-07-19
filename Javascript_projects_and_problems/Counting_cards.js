// Count Change	Cards
// +1	2, 3, 4, 5, 6
// 0	7, 8, 9
// -1	10, 'J', 'Q', 'K', 'A'
// You will write a card counting function. It will receive a card parameter, 
// which can be a number or a string, and increment or decrement the global 
// count variable according to the card's value (see table). The function will
//  then return a string with the current count and the string Bet if the count
//   is positive, or Hold if the count is zero or negative. The current count and
//    the player's decision (Bet or Hold) should be separated by a single space.

// Example Output
// -3 Hold
// 5 Bet

// Hint
// Do NOT reset count to 0 when value is 7, 8, or 9.
// Do NOT return an array.
// Do NOT include quotes (single or double) in the output.

// Cards Sequence 2, 3, 4, 5, 6 should return 5 Bet
// Cards Sequence 7, 8, 9 should return 0 Hold
// Cards Sequence 10, J, Q, K, A should return -5 Hold
// Cards Sequence 3, 7, Q, 8, A should return -1 Hold
// Cards Sequence 2, J, 9, 2, 7 should return 1 Bet
// Cards Sequence 2, 2, 10 should return 1 Bet
// Cards Sequence 3, 2, A, 10, K should return -1 Hold

// var count = 0;
// var current
// function cc(card) {
//   // Only change code below this line
//   if (card==2 || card==3 || card==4 || card==5||card==6){
//     count+=1
//     current=count
//   }else if(card==7 || card==8 || card==9){
//     count=current

//   }else if (card==10 ||card=='J' ||card=='Q' ||card=='K' ||card=='A'){
//   	count-=1
//   	current=count
//   }

//   console.log(count)
//   return "count";
//   // Only change code above this line
// }

// cc(2); cc('J'); cc(9); cc(2); cc(7);


// I HAVE USED CURRENT HERE BECAUSE IT HOLDS PREVIOUS VALUES BY DOING 
// WHENEVER NUMBER IS EQUAL TO 3 OR 4, BY USING CURRENT IT DOESN'T MAKE CURRENT AS ZERO
// IT'LL CONTINUE WITH PREVIOUS VALUES. YOU CAN CHECK ANSWER ALSO 2 PRESENT 4 TIMES SO
// POSITIVE COUNT 4 AND NEGATIVE COUNT IS -4 SO +4+-4 ANSWER IS ZERO
// var count=0
// var current
// var a=[2,3,4,5,6,7,8,2,2,2]
// for (var i = a.length - 1; i >= 0; i--) {
// 	if (a[i] ==2){
// 		count+=1
// 		current=count
// 		console.log('count when positive is',a[i],count)
// 	}else if(a[i]==3 || a[i] == 4){
// 		count=current

// 		console.log('count when zero is',a[i],count)
// 	}else if(a[i]==5 || a[i] == 6 || a[i] == 7 || a[i] == 8)
// 		count-=1
// 		current=count
// 		console.log('count when negative is',a[i],count)
// }
// console.log(count)

let count = 0;
function cc(card) {
  // Only change code below this line
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count ++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count --;
      break;
  }
  
  if (count > 0) {
    return count + " Bet";  //This space is " Bet" is very very important same for " Hold"
    console.log()
  }else{
    return count + " Hold"
  }
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

