class Solution {
    public List<List<Integer>> findDifference(int[] nums1, int[] nums2) {
        // Initialize two lists to store the differences found in nums1 and nums2
        List<Integer> diff_elem = new ArrayList<>();  // Differences found in nums1 but not in nums2
        List<Integer> diff_elem1 = new ArrayList<>(); // Differences found in nums2 but not in nums1

        // Create two hash sets to store unique elements from nums1 and nums2
        Set<Integer> set1 = new HashSet<>();
        Set<Integer> set2 = new HashSet<>();
        
        // Store unique elements from nums1 in set1
        for (int num : nums1) {
            set1.add(num);
        }
        
        // Store unique elements from nums2 in set2
        for (int num : nums2) {
            set2.add(num);
        }
        
        // Find differences in nums1
        for (int num : nums1) {
            // If the current number is not present in set2 and not already in diff_elem,
            // add it to diff_elem
            if (!set2.contains(num) && !diff_elem.contains(num)) {
                diff_elem.add(num);
            }
        }
        
        // Find differences in nums2
        for (int num : nums2) {
            // If the current number is not present in set1 and not already in diff_elem1,
            // add it to diff_elem1
            if (!set1.contains(num) && !diff_elem1.contains(num)) {
                diff_elem1.add(num);
            }
        }
        
        // Create a list to hold the result, with diff_elem and diff_elem1 as elements
        List<List<Integer>> result = new ArrayList<>();
        result.add(diff_elem);  // Add diff_elem as the first element
        result.add(diff_elem1); // Add diff_elem1 as the second element
        
        return result; // Return the result containing the differences found in nums1 and nums2
    }
}
