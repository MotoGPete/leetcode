/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    //create left(zero) and right (sum of nums)
    let left = 0 ;
    let right = 0;

    for(i of nums){
        right+=i
    }
    for(i=0;i<=nums.length -1; i++){
        left+=nums[i];
        if(left==right){
        return i 
        }
        right-=nums[i]
    }
    return -1
    
};