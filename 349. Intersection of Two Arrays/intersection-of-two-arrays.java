public class Solution {
    // Method to find the intersection of two arrays
    public int[] intersection(int[] nums1, int[] nums2) {
        // Create a HashSet to store elements of nums1
        Set<Integer> set = new HashSet<>();

        // Add elements of nums1 to the set
        for(int num : nums1){
            set.add(num);
        }
        
        // Create a HashSet to store the intersection elements
        Set<Integer> resultSet = new HashSet<>();
        
        // Iterate through elements of nums2
        for(int num : nums2){
            // If the element exists in set (nums1), it's a common element
            if(set.contains(num)){
                resultSet.add(num); // Add it to the resultSet
            }
        }
        
        // Convert the resultSet to an array
        int[] resultArray = new int[resultSet.size()];
        int index = 0;
        for (int num : resultSet) {
            resultArray[index++] = num;
        }
        
        // Return the array containing intersection elements
        return resultArray;
    }
}
