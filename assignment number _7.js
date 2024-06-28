function sortArray(arr) {
    return arr.slice().sort((a, b) => a - b);
}

const originalArray = [5, 2, 10, 1, 8];
const sortedArray = sortArray(originalArray);
console.log("Sorted array:", sortedArray); // Output: [1, 2, 5, 8, 10]
