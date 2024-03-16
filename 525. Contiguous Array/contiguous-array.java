import java.util.HashMap;

class Solution {
    public int findMaxLength(int[] nums) {
        int maxLen = 0; // Variable to store the maximum length of the subarray with equal number of 0s and 1s
        int count = 0; // Variable to keep track of the difference between count of 1s and count of 0s
        HashMap<Integer, Integer> map = new HashMap<>(); // HashMap to store the count along with its corresponding index
        
        map.put(0, -1); // Initialize the map with count 0 and index -1 (base case)

        // Iterate through each element of the array
        for (int i = 0; i < nums.length; i++) {
            // Update the count based on the current element
            if (nums[i] == 1) {
                count += 1; // Increment count if the current element is 1
            } else {
                count -= 1; // Decrement count if the current element is 0
            }

            // Check if the current count has been encountered before
            if (map.containsKey(count)) {
                // If yes, update maxLen if needed
                // maxLen is updated by taking the maximum of current maxLen and the difference between current index and the index stored in the map for the count
                maxLen = Math.max(maxLen, i - map.get(count));
            } else {
                // If the current count is encountered for the first time, store it in the map along with its index
                map.put(count, i);
            }
        }

        return maxLen; // Return the maximum length of the subarray with equal number of 0s and 1s
    }
}
