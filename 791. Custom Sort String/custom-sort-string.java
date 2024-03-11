import java.util.HashMap;

class Solution {
    public String customSortString(String order, String s) {
        // HashMap to store character counts
        HashMap<Character, Integer> counts = new HashMap<>();
        // StringBuilder to store the final result
        StringBuilder result = new StringBuilder();

        // Count occurrences of characters in 's'
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            counts.put(c, counts.getOrDefault(c, 0) + 1); // Increment count of character 'c'
        }

        // Append characters from 's' according to 'order'
        for (int i = 0; i < order.length(); i++) {
            char c = order.charAt(i);
            if (counts.containsKey(c)) { // If the character exists in 's'
                for (int j = 0; j < counts.get(c); j++) {
                    result.append(c); // Append character according to its count
                }
                counts.remove(c); // Remove character from counts
            }
        }

        // Append remaining characters from 's' to 'result'
        for (char c : counts.keySet()) {
            for (int i = 0; i < counts.get(c); i++) {
                result.append(c); // Append the character according to its count
            }
        }

        return result.toString(); // Return the final sorted string
    }
}
