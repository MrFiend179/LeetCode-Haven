const productExceptSelf = function(nums) {
    const n = nums.length; // Get the length of the input array
    const result = new Array(n); // Create an array to store the result

    // Calculate the product of all elements to the left of each element
    let leftProduct = 1; // Initialize the left product to 1
    for (let i = 0; i < n; i++) { // Loop through each element in the array
        result[i] = leftProduct; // Store the left product for the current element
        leftProduct *= nums[i]; // Update the left product by multiplying with the current element
    }

    // Calculate the product of all elements to the right of each element
    let rightProduct = 1; // Initialize the right product to 1
    for (let i = n - 1; i >= 0; i--) { // Loop through each element in reverse order
        result[i] *= rightProduct; // Multiply the result with the right product for the current element
        rightProduct *= nums[i]; // Update the right product by multiplying with the current element
    }

    return result; // Return the final result array
};

console.log(productExceptSelf([1, 2, 3, 4]));
