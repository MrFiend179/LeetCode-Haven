public class Solution {
    // Method to find a common element between two arrays
    public int getCommon(int[] nums1, int[] nums2) {
        // Create a HashSet to store elements of nums1
        Set<Integer> set = new HashSet<>();
        
        // Add elements of nums1 to the set
        for (int num : nums1) {
            set.add(num);
        }
        
        // Check for common elements with nums2
        for (int num : nums2) {
            // If a common element is found, return it
            if (set.contains(num)) {
                return num;
            }
        }
        
        // If no common element is found, return -1
        return -1;
    }
}
