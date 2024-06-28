function filterOddNumbers(arr) {
    return arr.filter((num) => num % 2 === 1);
}

const numbers = [8, 19, 5, 6, 14, 9, 13];
const oddNumbers = filterOddNumbers(numbers);
console.log("Odd numbers:", oddNumbers); // Output: [19, 5, 9, 13]
