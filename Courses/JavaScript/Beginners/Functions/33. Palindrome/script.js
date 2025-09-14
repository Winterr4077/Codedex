// Write code below 💖

function isPalindrome(word) {
  let lowerCase = word.toLowerCase();
  const ans = lowerCase.split('').reverse().join('');

  if (lowerCase === ans) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello'));   // false
