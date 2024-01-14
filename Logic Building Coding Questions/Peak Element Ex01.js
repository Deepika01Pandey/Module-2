function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        
        // Check if mid is a peak (greater than its neighbors)
        if (nums[mid] > nums[mid + 1]) {
            right = mid;  // Search in the left half
        } else {
            left = mid + 1;  // Search in the right half
        }
    }

    // At the end of the loop, left and right will converge to a peak element
    return left;  // Return the index of the peak element
}

// Test the function
const nums1 = [1, 2, 3, 1];
console.log(findPeakElement(nums1));  // Output: 2 (index where 3 is located)

const nums2 = [1, 2, 1, 3, 5, 6, 4];
console.log(findPeakElement(nums2));  // Output: 5 (index where 6 is located)
