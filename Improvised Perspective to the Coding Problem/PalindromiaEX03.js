function isPalindrome(n) {
    let dupNum = 0;
    let originalN = n;  // Store the original number for comparison later
    
    while (n > 0) {
        let remainder = n % 10;  // Extract the last digit
        dupNum = dupNum * 10 + remainder;  // Build the reversed number
        n = Math.floor(n / 10);  // Remove the last digit from n
    }
    
    // Check if the reversed number is equal to the original number
    return dupNum === originalN;
}

// Test the function with the input 12345
console.log(isPalindrome(12345));  // Output should be: false
