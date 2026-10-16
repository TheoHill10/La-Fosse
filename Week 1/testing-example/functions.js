//const findLargest = arr => arr?.length ? arr.indexOf(Math.max(...arr)) : -1; //functional programming

//The above is the same as the below
function findLargest(array){ //this is procdeual programming
    let largest = array[0];
    let largestIndex = 0
    if (!array || array.length == 0 || typeof array == 'number'){ 
        return -1
    } //(!arr  is not an array)
    for(let i=0; i < array.length; i++){
        if (array [i] > largest){
            largest = array[i]
            largestIndex = i
        }
    }
    return largestIndex
}

//console.log(findLargest[1, 2, 3, 4]);

module.exports = findLargest