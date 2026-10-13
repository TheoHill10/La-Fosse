// Accepts a single argument, name
// Returns the string "Goodbye forever, " + name

function farewell(name){
    return ("Goodbye forever, " + name)
}

//console.log(farewell("Nancy") );
//console.log(farewell("Bertrand") );


// Accepts three arguments: start, stop, and final
// Counts down from the start number to the stop number, outputting each number as it does so
// Instead of the stop number, outputs the value of final
// OPTIONAL extend the function so that it can handle the possibility of stop being greater than start

function countdown(start, stop, final){
    for (i = start; i > stop; --i){
        if (stop > start){
            break;}
    console.log(i);
    }
    console.log(final);
}

//countdown(10, 4, 20)

// - Accepts two arguments: an array of values (arr) and a target value (target)
//     - Counts the number of times target appears in arr
//     - Returns an object with two keys:
//         - success, storing a boolean value based on whether the target was found at all within arr
//         - count, storing the number of times target appears in arr

// function countTarget(arr, target){
//     let count = 0
//     for (number of arr){
//         if (number == target){
//             count += 1
//         }
//     }
//     return {success: count > 0, count: count}
// }

function countTarget(arr, target){
    let count = 0
    for (let i=0; i<arr.length; i++){
        if (arr[i] === target){
            count += 1;
        }
    }
    return {success: count > 0, count: count}
}

console.log(countTarget([1, 1, 1], 1) );
console.log(countTarget([1, 1, 1], 3) );
console.log(countTarget([1, 1, "1"], 1) );

var summation = function (num) {
  total = 0
  for (let i = 0; i<=num; i++){
    total += i
  } 
  return {total}
}

console.log(summation(179));