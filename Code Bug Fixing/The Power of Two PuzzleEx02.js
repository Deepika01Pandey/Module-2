function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

// Test the function with input 16
console.log(isPowerOfTwo(64));  // Output: true
