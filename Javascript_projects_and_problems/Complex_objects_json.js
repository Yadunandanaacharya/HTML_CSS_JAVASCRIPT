// Add eleements to existing array
// Sometimes you may want to store data in a flexible Data Structure. 
// A JavaScript object is one way to handle flexible data. 
// They allow for arbitrary combinations of strings, numbers, booleans, arrays, 
// functions, and objects.
// myMusic should be an array
// Passed
// myMusic should have at least two elements
// Passed
// myMusic[1] should be an object
// Passed
// myMusic[1] should have at least 4 properties
// Passed
// myMusic[1] should contain an artist property which is a string
// Passed
// myMusic[1] should contain a title property which is a string
// Passed
// myMusic[1] should contain a release_year property which is a number
// Passed
// myMusic[1] should contain a formats property which is an array
// Passed
// formats should be an array of strings with at least two elements
// */

// var myMusic = [{"artist": "Billy Joel","title": "Piano Man","release_year": 1973,
// "formats": ["CD","8T","LP"],"gold": true},

// {"artist":"Raghu","title":"Vidya_bhushan","release_year":1989,"formats":["cd","usb"]
// }
// ];
// object = myMusic[1]
// // console.log(object)


// // Access elemenets inside nested objects using bracket and dot
// // Below is just one example.
// var ourStorage = {
//   "desk": {
//     "drawer": "stapler"
//   },
//   "cabinet": {
//     "top drawer": { 
//       "folder1": "a file",
//       "folder2": "secrets"
//     },
//     "bottom drawer": "soda"
//   }
// };

// var we_need_stapler = ourStorage.cabinet['top drawer']['folder1'];
// // console.log(we_need_stapler)

// var myStorage = {
//   "car": {
//     "inside": {
//       "glove box": "maps",
//       "passenger seat": "crumbs"
//      },
//     "outside": {
//       "trunk": "jack"
//     }
//   }
// };

// var gloveBoxContents = myStorage.car["inside"]["glove box"]; // Change this line
// console.log(gloveBoxContents)

// // Answer
// var gloveBoxContents = myStorage.car.inside["glove box"]; 


// //Accessing elemenets of nested array
// var myPlants = [
//   {
//     type: "flowers",
//     list: [
//       "rose",
//       "tulip",
//       "dandelion"
//     ]
//   },
//   {
//     type: "trees",
//     list: [
//       "fir",
//       "pine",
//       "birch"
//     ]
//   }
// ];

// // Only change code below this line

// var secondTree = myPlants[1].list[1]

var object = ['Message Recieved: TestingPayload\n', 'Message Recieved: {"n":200.0,"f":[0.0,0.0042777087688614787]}']
lists = object[1].['Message Recieved']
console.log(lists)