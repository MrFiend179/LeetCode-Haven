use std::collections::{HashSet}; // Importing HashSet for efficient set operations

impl Solution {
    pub fn find_difference(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<Vec<i32>> {
        // Initialize vectors to store differences found in nums1 and nums2
        let mut diff_elem = Vec::new(); // Differences found in nums1 but not in nums2
        let mut diff_elem1 = Vec::new(); // Differences found in nums2 but not in nums1
        
        // Create HashSet from nums1 and nums2 to efficiently check for element existence
        let set1: HashSet<_> = nums1.iter().cloned().collect(); // HashSet from nums1
        let set2: HashSet<_> = nums2.iter().cloned().collect(); // HashSet from nums2

        // Find differences in nums1
        for &num in &nums1 {
            // Check if the current number is not present in nums2 and not already in diff_elem
            if !set2.contains(&num) && !diff_elem.contains(&num) {
                diff_elem.push(num); // Add the number to diff_elem
            }
        }

        // Find differences in nums2
        for &num in &nums2 {
            // Check if the current number is not present in nums1 and not already in diff_elem1
            if !set1.contains(&num) && !diff_elem1.contains(&num) {
                diff_elem1.push(num); // Add the number to diff_elem1
            }
        }

        // Return a vector containing diff_elem and diff_elem1 as required
        vec![diff_elem, diff_elem1]
    }
}
