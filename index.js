//function 1:calculate 10% tax
function calculateTax(amount) {
    return amount * 0.10;
}

//function 2:convert to uppercase
function convertToUpperCase(text) {
    return text.toUpperCase();
}
//function 3:
function findMaximum(num1, num2) {
    return Math.max(num1, num2);
}

//function 4:
function isPalindrome(word) {
    return word === word.split("").reverse().join("");
}

//function 5:
function calculateDiscountedPrice(originalprice, discountPercentage) {
   return originalprice - (originalprice * discountPercentage / 100) 
}
module.exports = {
  convertToUpperCase,
  calculateTax,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice
};



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };