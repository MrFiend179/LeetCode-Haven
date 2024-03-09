use std::collections::HashSet;

fn intersection(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
    // Initialize a HashSet to store elements of nums1
    let mut set = HashSet::new();
    
    // Insert elements of nums1 into the set
    for num in nums1 {
        set.insert(num);
    }
    
    // Initialize a vector to store common elements
    let mut common_elem = Vec::new();
    
    // Check for common elements with nums2
    for num in nums2 {
        // If the element exists in the set, it's a common element
        if set.remove(&num) {
            common_elem.push(num);
        }
    }
    
    // Return the vector containing common elements
    common_elem
}
