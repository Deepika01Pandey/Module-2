function isPalindrome(n) {
    let dupNum = 0;
    let backN = n;
    
    while (n) {
        let rem = n % 10;
        dupNum = dupNum * 10 + rem;
        n = Math.floor(n / 10);
    }
    
    if (dupNum === backN) {
        return true;
    }
    
    return false;
}

console.log(isPalindrome(12321));  // Output: true