#include <string>
#include <unordered_map>

class Solution
{
public:
    std::string customSortString(std::string order, std::string s)
    {
        std::unordered_map<char, int> counts; // Map to count occurrences of each character
        std::string result;                   // String to store the sorted result

        // Count occurrences of characters in 's'
        for (char c : s)
        {
            counts[c]++; // Increment count for character 'c'
        }

        // Append characters from 's' according to the specified 'order'
        for (char c : order)
        {
            if (counts.find(c) != counts.end())
            {                                // Check if character 'c' exists in 's'
                result.append(counts[c], c); // Append character 'c' to 'result' as many times as it appeared in 's'
                counts.erase(c);             // Remove character 'c' from 'counts' as it's already processed
            }
        }

        // Append any remaining characters from 's' to 'result'
        for (const auto &pair : counts)
        {
            result.append(pair.second, pair.first); // Append character from 'counts' to 'result' as many times as it appeared
        }

        return result; // Return the final sorted string
    }
};
