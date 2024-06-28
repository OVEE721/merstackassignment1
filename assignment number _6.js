function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const numbers = [1, 2, 3, 4];
const totalSum = sumArray(numbers);
console.log("Total sum:", totalSum); // Output: 10
