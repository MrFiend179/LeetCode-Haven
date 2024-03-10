var findDifference = function (nums1, nums2) {
    // Initialize arrays to store the differences
    const diff_elem = []; // Differences found in nums1 but not in nums2
    const diff_elem1 = []; // Differences found in nums2 but not in nums1

    // Initialize sets to keep track of numbers seen in each array
    const seennum = new Set(); // Set to store numbers seen in nums1
    const seennum1 = new Set(); // Set to store numbers seen in nums2

    // Iterate through nums1 to find differences
    nums1.forEach(num => {
        // Check if the current number is not present in nums2 and not already seen in nums1
        if (!nums2.includes(num) && !seennum.has(num)) {
            // Add the number to the differences array
            diff_elem.push(num);
            // Add the number to the set of seen numbers in nums1
            seennum.add(num);
        }
    });

    // Iterate through nums2 to find differences
    nums2.forEach(num => {
        // Check if the current number is not present in nums1 and not already seen in nums2
        if (!nums1.includes(num) && !seennum1.has(num)) {
            // Add the number to the differences array
            diff_elem1.push(num);
            // Add the number to the set of seen numbers in nums2
            seennum1.add(num);
        }
    });

    // Return the arrays containing the differences
    return [diff_elem, diff_elem1];
};
