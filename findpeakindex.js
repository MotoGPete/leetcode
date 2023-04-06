/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    var peak = nums[0];
    var index = 0
    if(nums.length == 1){
        return 0
    }
    
    for(let i=1;i<nums.length;i++) {
        if(nums[i]>peak){
            peak = nums[i]
            index = i
        }
    }
    return index
};