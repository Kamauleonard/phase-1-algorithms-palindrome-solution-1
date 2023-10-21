function isPalindrome(word) {
  // Remove non-alphabet characters and convert to lowercase
  const sanitizedWord = word.toLowerCase().replace(/[^a-z]/g, '');

  // Initialize pointers
  let left = 0;
  let right = sanitizedWord.length - 1;

  // Check if it's a palindrome
  while (left < right) {
    if (sanitizedWord[left] !== sanitizedWord[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

/* 
  Pseudocode:
  1. Remove non-alphabet characters and convert the word to lowercase.
  2. Initialize two pointers, 'left' and 'right', at the start and end of the sanitized word.
  3. While 'left' is less than 'right':
    a. If the characters at 'left' and 'right' are not the same, return false (not a palindrome).
    b. Increment 'left' and decrement 'right'.
  4. If the loop completes without returning false, it's a palindrome, so return true.

  Written Explanation:
  The function first sanitizes the input word by converting it to lowercase and removing non-alphabet characters. Then, it uses two pointers to compare characters from the beginning and end of the word, moving toward the center. If the characters at the two pointers ever differ, it's not a palindrome, and the function returns false. If the loop completes without finding any differences, it means the word is a palindrome, and the function returns true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Custom test cases
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
