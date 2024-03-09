var intersection = function (nums1, nums2) {
    // Initialize an array to store common elements
    const commonElements = [];

    // Create a set from nums1 for faster lookup
    const set = new Set(nums1);

    // Iterate through elements of nums2
    for (let num of nums2) {
        // Check if the current element of nums2 exists in set (nums1)
        if (set.has(num)) {
            // If it exists, it's a common element
            // Add it to the commonElements array
            commonElements.push(num);

            // Remove the element from set to avoid duplicates
            set.delete(num);
        }
    }

    // Return the array containing common elements
    return commonElements;
};
