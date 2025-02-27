// Get command-line arguments and ignore the first two elements
const args = process.argv.slice(2);

// Convert arguments to numbers and sum them
const sum = args.reduce((total, num) => total + Number(num), 0);

// Print the sum
console.log(sum);
