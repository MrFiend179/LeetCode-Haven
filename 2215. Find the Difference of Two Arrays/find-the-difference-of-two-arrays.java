// class Solution {
//     public List<List<Integer>> findDifference(int[] nums1, int[] nums2) {
//         int[] diff_elem;
//         int[] diff_elem1;

//         Set<Integer> set = new HashSet<>();
//         Set<Integer> set1 = new HashSet<>();
        
//         for(int nums : nums1){
//             if(set1.find)
//         }
//     }
// }


class Solution {
    public List<List<Integer>> findDifference(int[] nums1, int[] nums2) {
        List<Integer> diff_elem = new ArrayList<>();
        List<Integer> diff_elem1 = new ArrayList<>();

        Set<Integer> set1 = new HashSet<>();
        Set<Integer> set2 = new HashSet<>();
        
        for (int num : nums1) {
            set1.add(num);
        }
        
        for (int num : nums2) {
            set2.add(num);
        }
        
        for (int num : nums1) {
            if (!set2.contains(num) && !diff_elem.contains(num)) {
                diff_elem.add(num);
            }
        }
        
        for (int num : nums2) {
            if (!set1.contains(num) && !diff_elem1.contains(num)) {
                diff_elem1.add(num);
            }
        }
        
        List<List<Integer>> result = new ArrayList<>();
        result.add(diff_elem);
        result.add(diff_elem1);
        
        return result;
    }
}
