var findMedianSortedArrays = function(nums1, nums2) {
    // Merge the two arrays into a single array
    const mergedArray = [];

    // Push all elements of nums1 into mergedArray
    nums1.forEach(nums => {
        mergedArray.push(nums)
    })
    // Push all elements of nums2 into mergedArray
    nums2.forEach(nums => {
        mergedArray.push(nums)
    })

    // Sort the merged array in ascending order
    const mergedArray1 = mergedArray.sort((a, b) => a - b);

    const length = mergedArray1.length;

    // Check if the length of the merged array is odd
    if (length % 2 === 1) {
        // If odd, return the middle element
        return mergedArray1[Math.floor(length / 2)];
    } else {
        // If even, return the average of the two middle elements
        const midIndex = length / 2;
        return (mergedArray1[midIndex - 1] + mergedArray1[midIndex]) / 2;
    }
};
