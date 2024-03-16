var findMaxLength = function (nums) {
    let maxLen = 0; // Initialize the maximum length of subarray with equal number of 0s and 1s
    let count = 0; // Initialize the count of 1s encountered minus the count of 0s encountered
    const map = new Map(); // Initialize a map to store count along with index
    map.set(0, -1); // Initialize the map with 0 at index -1, this helps handle edge case where the first element of nums is 1

    // Loop through each element of the nums array
    for (let i = 0; i < nums.length; i++) {

        // Update count based on the current element
        if (nums[i] === 1) {
            count += 1; // Increment count if the current element is 1
        } else {
            count -= 1; // Decrement count if the current element is 0
        }

        // Check if the count is encountered before
        if (map.has(count)) {
            // If count is found in the map, update maxLen if needed
            // maxLen is updated by taking the maximum of current maxLen and the difference between current index and the index stored in the map for the count
            maxLen = Math.max(maxLen, i - map.get(count));
        } else {
            // If count is not encountered before, store it in the map along with its index
            map.set(count, i);
        }
    }

    return maxLen; // Return the maximum length of subarray with equal number of 0s and 1s
};
