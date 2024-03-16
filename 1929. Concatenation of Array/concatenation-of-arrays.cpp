#include <iostream>
#include <vector>

class Solution
{
public:
    std::vector<int> getConcatenation(std::vector<int> &nums)
    {
        std::vector<int> ans;

        for (int i = 0; i < 2; i++)
        {
            for (int i = 0; i < nums.size(); i++)
            {
                ans.push_back(nums[i]);
            };
        }
        return ans;
    }
};