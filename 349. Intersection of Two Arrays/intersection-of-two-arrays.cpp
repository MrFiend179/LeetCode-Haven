#include <vector>
#include <unordered_set>

std::vector<int> intersection(std::vector<int> &nums1, std::vector<int> &nums2)
{
    // Initialize a vector to store common elements
    std::vector<int> commonElements;

    // Create an unordered set from nums1 for faster lookup
    std::unordered_set<int> set(nums1.begin(), nums1.end());

    // Iterate through elements of nums2
    for (int num : nums2)
    {
        // Check if the current element of nums2 exists in set (nums1)
        if (set.find(num) != set.end())
        {
            // If it exists, it's a common element
            // Add it to the commonElements vector
            commonElements.push_back(num);

            // Remove the element from set to avoid duplicates
            set.erase(num);
        }
    }

    // Return the vector containing common elements
    return commonElements;
}
