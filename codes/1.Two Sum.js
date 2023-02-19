/* SOLUTION 1
* First, we loop through the given array of integers.
* For each element of the array, we calculate the rest of target minus current element.
* We look for the rest element within the array of integers. If it exists then we get his index.
* The last thing to do it's checking if the rest element exists within the given array and if its index it's different from the current element index.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let rest = 0, restIndex;
    for(let i=0; i< nums.length; i++) {
        rest = target - nums[i];
        restIndex = nums.indexOf(rest);
        if(restIndex !== -1 && restIndex !== i) return [i, restIndex];
    }
    return result;
};

//  SOLUTION 2
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result=[];
    for(let i=0; i< nums.length; i++) {
        let rest = target - nums[i];
        if(nums.slice(i+1).includes(rest)){
            result.push(i,nums.slice(i+1).indexOf(rest)+i+1);
        }
    }
    return result;
};
