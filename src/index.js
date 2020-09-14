module.exports = function toReadable (number) {
  let numbers = {0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine"};
  let bigger = {2: "twen", 3: "thir", 4: "for", 5: "fif", 6: "six", 7: "seven", 8: "eigh", 9: "nine"};
  let double = {10: "ten", 11 : "eleven", 12: "twelve", 14: "fourteen"};
  if (number < 10) return numbers[number];
  if (number <= 12) return double[number];
  if (number === 14) return "fourteen";
  if (number < 20) return `${bigger[number % 10]}teen`;
  if (number < 100) {
      if (number % 10 === 0) return `${bigger[number / 10]}ty`;
      else return `${bigger[Math.floor(number / 10)]}ty ${numbers[number % 10]}`;
  };
  if (number % 100 === 0) return `${numbers[Math.floor(number / 100)]} hundred`;   
  if (number % 100 < 10) return `${numbers[Math.floor(number / 100)]} hundred ${numbers[number % 100]}`;
  if (number % 100 <= 12) return `${numbers[Math.floor(number / 100)]} hundred ${double[number % 100]}`;
  if (number % 100 === 14) return `${numbers[Math.floor(number / 100)]} hundred fourteen`;
  if (number % 100 < 20) return `${numbers[Math.floor(number / 100)]} hundred ${bigger[number % 100 % 10]}teen`;
  if (number % 100 % 10 === 0) return `${numbers[Math.floor(number / 100)]} hundred ${bigger[number % 100 / 10]}ty`;
  else return `${numbers[Math.floor(number / 100)]} hundred ${bigger[Math.floor(number % 100 / 10)]}ty ${numbers[number % 100 % 10]}`;
}
