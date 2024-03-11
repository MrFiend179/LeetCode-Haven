#include <iostream>
#include <vector>
#include <algorithm>

class Solution
{
public:
    // Function to sort the students' scores based on a specific index
    // Input: score - a vector of vectors containing the students' scores
    //        k - the index based on which the sorting should be performed
    // Output: a sorted vector of vectors containing the students' scores
    std::vector<std::vector<int>> sortTheStudents(std::vector<std::vector<int>> &score, int k)
    {
        // Sort the score vector based on the value at index 'k' in descending order
        std::sort(score.begin(), score.end(), [k](const std::vector<int> &a, const std::vector<int> &b)
                  {
                      return a[k] > b[k]; // Return true if value at index 'k' in vector 'a' is greater than value at index 'k' in vector 'b'
                  });
        return score; // Return the sorted score vector
    };
};
