//Consider an array/list of sheep where some sheep may be missing from their place. 
//We need a function that counts the number of sheep present in the array (true means present).
//
//for example
//
let sheep = [true,  true,  true,  false,
 true,  true,  true,  true ,
 true,  false, true,  false,
 true,  false, false, true ,
 true,  true,  true,  true ,
 false, false, true,  true]


 let countSheeps = arrOfSheeps => {
    let sheepCount = 0
    arrOfSheeps.forEach(sheep => {
      if (sheep) sheepCount += 1;
    })
    return sheepCount;
  }


//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" 
//string for false.
let boolToWord = bool => { return bool ? "Yes" : "No"; }