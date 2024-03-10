#include <vector>
#include <unordered_set>

class Solution
{
public:
    std::vector<std::vector<int>> findDifference(std::vector<int> &nums1, std::vector<int> &nums2)
    {
        // Initialize vectors to store the differences
        std::vector<int> diff_elem;  // Differences found in nums1 but not in nums2
        std::vector<int> diff_elem1; // Differences found in nums2 but not in nums1

        // Create unordered sets to store unique elements from nums1 and nums2
        std::unordered_set<int> set1(nums1.begin(), nums1.end());
        std::unordered_set<int> set2(nums2.begin(), nums2.end());

        // Find differences in nums1
        for (int num : nums1)
        {
            // Check if the current number is not present in set2 and not already in diff_elem
            if (set2.find(num) == set2.end() && std::find(diff_elem.begin(), diff_elem.end(), num) == diff_elem.end())
            {
                // Add the number to diff_elem
                diff_elem.push_back(num);
            }
        }

        // Find differences in nums2
        for (int num : nums2)
        {
            // Check if the current number is not present in set1 and not already in diff_elem1
            if (set1.find(num) == set1.end() && std::find(diff_elem1.begin(), diff_elem1.end(), num) == diff_elem1.end())
            {
                // Add the number to diff_elem1
                diff_elem1.push_back(num);
            }
        }

        // Return the vectors containing the differences
        return {diff_elem, diff_elem1};
    }
};
