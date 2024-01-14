function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

// Test the function with input 16
console.log(isPowerOfTwo(16));  // Output: true

// Explanation
//Since 16 can be expressed as 2^4, the function returns True, indicating that 16 is indeed a power of two
