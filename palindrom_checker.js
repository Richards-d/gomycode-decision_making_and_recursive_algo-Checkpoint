/* Palindrome Checker: Create a recursive function to check if a given string is a palindrome (reads the same forwards and backwards),
    ignoring spaces, punctuation, and capitalization. */

function isPalindromeRecursive(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Helper function for recursion
    function checkPalindrome(left, right) {
        // Base case: If pointers cross, it is a palindrome
        if (left >= right) return true;

        // Check characters at the current pointers
        if (str[left] !== str[right]) return false;

        // Recurse for the next set of characters
        return checkPalindrome(left + 1, right - 1);
    }

    return checkPalindrome(0, str.length - 1);
}

// Test cases
console.log(isPalindromeRecursive("A man, a plan, a canal: Panama"));
console.log(isPalindromeRecursive("racecar"));
console.log(isPalindromeRecursive("hello"));
console.log(isPalindromeRecursive("Was it a car or a cat I saw"));
console.log(isPalindromeRecursive("No 'x' in Nixon"));
