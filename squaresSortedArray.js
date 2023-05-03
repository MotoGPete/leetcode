/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    for(let i=0; i<=nums.length-1;i++){
        
        nums[i] = nums[i] * nums[i]
        
    }
    for(let i = 0;i<=nums.length-1;i++){
        for(let j=0; j<=nums.length-1;j++){
            if (nums[j]>nums[j+1]){
                let temp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = temp
            }
        }
    }
    return nums
};