function findMax(arr) {
    return arr.reduce((a, b) => Math.max(a, b), -Infinity);
}

const numbers = [10, 15, 28, 20, 13];
const largestNumber = findMax(numbers);
console.log("The largest element in the array is: " + largestNumber);