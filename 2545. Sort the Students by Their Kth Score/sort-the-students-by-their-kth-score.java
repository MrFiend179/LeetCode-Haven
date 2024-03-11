import java.util.Arrays;

public class Solution {
    
    // Method to sort the students' scores based on a specific index
    // Input: score - a 2D array containing the students' scores
    //        k - the index based on which the sorting should be performed
    // Output: a sorted 2D array containing the students' scores
    public int[][] sortTheStudents(int[][] score, int k) {
        // Sort the 'score' array based on the value at index 'k' in descending order
        Arrays.sort(score, (a, b) -> Integer.compare(b[k], a[k]));
        return score; // Return the sorted 2D array
    }
}
