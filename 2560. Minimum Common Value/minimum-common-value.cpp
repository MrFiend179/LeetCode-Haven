#include <vector>
#include <unordered_set>

int getCommon(std::vector<int> &nums1, std::vector<int> &nums2)
{
    // Create an unordered set from the elements of nums1
    std::unordered_set<int> set(nums1.begin(), nums1.end());
    // Initialize an empty vector to store common elements
    std::vector<int> finalnum;
    // Iterate through nums2
    for (int i = 0; i < nums2.size(); i++)
    {
        // Check if the current element of nums2 exists in the set
        if (set.find(nums2[i]) != set.end())
        {
            // If it does, push the element to the finalnum vector
            finalnum.push_back(nums2[i]);
            // Remove the element from the set to avoid duplicates
            set.erase(nums2[i]);
        }
    }
    // Check the size of finalnum vector to determine the output
    if (finalnum.size() == 1)
    {
        // If there is only one common element, return it
        return finalnum[0];
    }
    else if (finalnum.size() >= 2)
    {
        // If there are multiple common elements, return the first one
        return finalnum[0];
    }
    else
    {
        // If there are no common elements, return -1
        return -1;
    }
}
