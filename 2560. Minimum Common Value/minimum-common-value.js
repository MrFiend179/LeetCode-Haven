//nums1 and nums2 are array containing the integers
var getCommon = function(nums1, nums2) {
    // Create a set from the elements of nums1
    const set = new Set(nums1);
    // Initialize an empty array to store common elements
    const finalnum = [];
    // Iterate through nums2
    for (let i = 0; i < nums2.length; i++) {
        // Check if the current element of nums2 exists in the set
        if (set.has(nums2[i])) {
            // If it does, push the element to the finalnum array
            finalnum.push(nums2[i]);
            // Remove the element from the set to avoid duplicates
            set.delete(nums2[i]);
        }
    }
    // Check the length of finalnum array to determine the output
    if (finalnum.length === 1) {
        // If there is only one common element, return the array containing it
        return finalnum;
    } else if (finalnum.length >= 2) {
        // If there are multiple common elements, return the first one
        return finalnum[0];
    } else {
        // If there are no common elements, return -1
        return -1;
    }
};
