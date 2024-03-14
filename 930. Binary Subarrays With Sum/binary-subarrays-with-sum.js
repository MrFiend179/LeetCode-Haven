var numSubarraysWithSum = function(nums, goal) {
    let count = 0;
    let sum = 0;
    const prefixSumFreq = new Map();
    prefixSumFreq.set(0, 1); 
    
    for (const num of nums) {
        sum += num;
        const complement = sum - goal;
        if (prefixSumFreq.has(complement)) {
            count += prefixSumFreq.get(complement);
        }
        prefixSumFreq.set(sum, (prefixSumFreq.get(sum) || 0) + 1);
    }
    
    return count;
};