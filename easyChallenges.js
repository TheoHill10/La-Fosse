/* 
    JavaScript Easy Challenges

    ===========================================
*/

// - 10 Easy Challenges to complete on Replit (here)[https://replit.com/@la-fosse-academy/Easy-Challenges#index.js].

/* Challenge 1: Push Element into Array
---------------------------------------
Write a function that takes an array and an element as input and pushes the element into the array. */

function pushToArray(list, a){
    list.push(a)
    return list
}



// Example usage:
const myArray = [1, 2, 3];
console.log(pushToArray(myArray, 4)); // Output: [1, 2, 3, 4]
  

/* Challenge 2: Filter Even Numbers
---------------------------------------
Write a function that takes an array of numbers and returns a new array containing only the even numbers from the original array.*/

function filterEvenNumbers(numbers){
    const evennumbers = []
    for (const number of numbers){
        even = number % 2
        if (even === 0){
            evennumbers.push(number)
        }
    }
    return evennumbers
}


// Example :
const numbers = [1, 2, 3, 4, 5, 6];
console.log(filterEvenNumbers(numbers)); // Output: [2, 4, 6]
  

/* Challenge 3: Count Words in a String
---------------------------------------
Write a function that takes a string and counts the number of words in it. Words are separated by spaces.*/

function countWords(sentance){
    const words = sentance.trim().split(/\s+/)
    if (sentance.trim() === ""){
        return 0
    }
    let count = words.length
    return count
}



// Example

console.log(countWords('hello world')) // Output: 2
console.log(countWords('')) // Output: 0
console.log(countWords('this   is  a test')) //Output: 4

/* Challenge 4: Find the Smallest and Biggest Numbers
----------------------------------------------------
Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
*/

function minMax(numbers){
    const minmax = []
    const a = Math.min(...numbers)
    const b = Math.max(...numbers)
    minmax.push(a, b)
    return minmax
}


// Example
console.log(minMax([1, 2, 8, 4, 5])) // Output: [1, 8]
console.log(minMax([2334454, 5])) // Output: [5, 2334454]
console.log(minMax([1])) // Output: [1, 1]

/* Challenge 5: Largest Swap
----------------------------------------------------
Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
E.g If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.
*/

function largestSwap(number){
    const first = Math.floor(number/10)
    const second = number % 10
    if (first >= second){
        return true
    }else {
        return false
        }
}


console.log(largestSwap(14))// Output: false
console.log(largestSwap(53)) // Output: true
console.log(largestSwap(99)) // Output:true


/* Challenge 6: Reverse a String
----------------------------------------------------
Write a function that takes a string as input and returns the string in reverse order.
*/

function reverseString(word){
    let reversed = ""
    for (let i = word.length - 1; i>=0; i--){
        reversed += word[i]
    }
    return reversed
}


// Example:
console.log(reverseString("hello")); // Output: "olleh"


/* Challenge 7: Sum of an Array
----------------------------------------------------
Write a function that takes an array of numbers and returns the sum of all the numbers.
*/

function sumArray(numbers){
    let total = 0
    for (const number of numbers){
        total += number
    }
    return total
}


// Example:
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15


/* Challenge 8: Find the Largest Numbers
----------------------------------------------------
Write a function that takes an array of numbers and returns the largest number in the array.
*/

function largestNumber(numbers){
    const largest = Math.max(...numbers)
    return largest
}

 
// Example:
console.log(largestNumber([1, 5, 3, 9, 2])); //Output: 9


/* Challenge 9: Palindrome Checker
----------------------------------------------------
Write a function that checks if a given string is a palindrome (reads the same forward and backward).
*/

function isPalindrome(word){
    const reversed = word.split("").reverse().join("")
    if (reversed === word){
        return true
    }else {
        return false
    }
}


// Example:
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false


/* Challenge 10: Counting Vowels
----------------------------------------------------
Write a function, vowelCount, that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
*/

function vowelCount(word){
    let total = 0
    let vowls = "aeiou"
    for (const letters of word){
        if (vowls.includes(letters.toLowerCase())){
            total += 1
        }
    }
    return total
}


// Example
console.log(vowelCount("lafosseacademy")) //Output: 6
console.log(vowelCount("HElloworld")) //Output: 3

module.exports = {
    pushToArray,
    filterEvenNumbers,
    countWords,
    minMax,
    largestSwap,
    reverseString,
    sumArray,
    largestNumber,
    vowelCount,
    isPalindrome,
 }