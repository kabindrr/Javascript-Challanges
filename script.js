// question 1
// let inputString = prompt("Enter a string");

// let reversedSring = inputString.split("").reverse().join("");

// console.log("reversed string of the input is:", reversedSring);

// question2

// let numbers = [1, 2, 3, 4, 5];

// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log("sum of the following array is:", sum);

// Palindrome Checker

// let inputString = prompt("Give me a word");

// let normalString = inputString.toLowerCase();
// let reversedString = normalString.split("").reverse().join("");

// let isPalindromeCheck = normalString == reversedString;
// console.log(isPalindromeCheck);

// Print All Factors

// let giveMeANumber = prompt("Enter a number");

// let factors = [];

// for (let i = 1; i <= giveMeANumber; i++) {
//   if (giveMeANumber % i === 0) {
//     factors.push(i);
//   }
// }
// console.log(factors);

// Find Largest Number in an Array

// let numbers = [100, 800, 300, 10, 60];

// let Largest = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > Largest) {
//     Largest = numbers[i];
//   }
// }
// console.log(Largest);

// Count Vowels in a String
// let inputString = prompt("Give me a word");
// let normalString = inputString.toLowerCase();

// let vowels = "aeiou";

// let vowelsCount = 0;
// for (let i = 0; i < normalString.length; i++) {
//   if (vowels.includes(normalString[i])) {
//     vowelsCount++;
//   }
// }
// console.log(vowelsCount);

// // Temperature Converter
// let inputCelcious = prompt("Enter temperature you want to convert");

// let ferhrenheit = inputCelcious * (9 / 5) + 32;
// console.log(ferhrenheit);

// Remove duplicates from an Array
// let array = [1, 2, 2, 3, 4, 5, 6, 6, 7, 7, 7, 9];
// let uniqueArray = [...new Set(array)];
// console.log(uniqueArray);

// Factorial of a Number

// let number = prompt("Give me a number");
// let factorial = 1;

// for (let i = 1; i <= number; i++) {
//   factorial *= i;
// }
// console.log(factorial);

// let str = "hello world";
// let chatactertoCount = "l";

// let count = 0;

// for (let i = 0; i <= str.length; i++) {
//   if (str[i] === chatactertoCount) {
//     count++;
//   }
// }
// console.log(count);

// check if the number is prime or n0t

// let number = prompt("Enter any number");

// if (number <= 1) {
//   console.log("not a prime number");
// } else if (number <= 3) {
//   console.log("Its a prime number");
// } else if (number % 2 === 0 || number % 3 === 0) {
//   console.log("Its not a prime");
// } else {
//   let isPrime = true;
//   for (let i = 5; i * i <= number; i += 6) {
//     if (number % i === 0 || number % (i + 2) === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// referencial data type
