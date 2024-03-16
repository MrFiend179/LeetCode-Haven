#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>

class Solution {
public:
    int findMaxLength(std::vector<int>& nums) {
        int maxLen = 0; // Variable to store the maximum length of subarray with equal number of 0s and 1s
        int count = 0; // Variable to keep track of the count of 1s minus the count of 0s encountered so far
        std::unordered_map<int, int> countMap; // HashMap to store count along with index

        countMap[0] = -1; // Initialize the map with 0 at index -1

        // Loop through each element of the nums array
        for (int i = 0; i < nums.size(); i++) {
            // Update count based on the current element
            if (nums[i] == 1) {
                count += 1; // Increment count if the current element is 1
            } else {
                count -= 1; // Decrement count if the current element is 0
            }

            // Check if the count is encountered before
            if (countMap.find(count) != countMap.end()) {
                // If count is found in the map, update maxLen if needed
                // maxLen is updated by taking the maximum of current maxLen and the difference between current index and the index stored in the map for the count
                maxLen = std::max(maxLen, i - countMap[count]);
            } else {
                // If count is not encountered before, store it in the map along with its index
                countMap.insert({count, i});
            }
        }
        return maxLen; // Return the maximum length of subarray with equal number of 0s and 1s
    }
};
