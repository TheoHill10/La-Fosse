//Take an array of numbers and return a new array with only the numbers higher then 10
//Code before
function findBigNumbers(numbers) {
  const bigNumbers = [];

  for (let i = 1; i <= numbers.length; i++) {
    if (numbers[i] = 10) {
      bigNumbers.push(numbers[i + 1]);
    }
  }

  return bigNumber;
}

console.log(findBigNumbers([1,2,3,4,5,6,25,18]));


//Code after
function findBigNumbers(numbers) {
  const bigNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
      bigNumbers.push(numbers[i]);
    }
  }

  return bigNumbers;
}

console.log(findBigNumbers([1,2,3,4,5,6,25,18]));