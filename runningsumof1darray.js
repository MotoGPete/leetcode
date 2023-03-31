/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let runningTotal = 0
    let output = new Array(nums.length -1)
    for(let i = 0; i <= nums.length -1 ; i++ ) {
        runningTotal += nums[i]
        output[i] = runningTotal
    }
    return output
};