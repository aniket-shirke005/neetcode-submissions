class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {

        const hashmap= new Map<number,number>();

        for(let i =0;i<nums.length;i++){ 
            const diffNumber = target - nums[i]; 
            if(hashmap.has(diffNumber)){
                return [i, hashmap.get(diffNumber)]
            }else{
                hashmap.set(nums[i] , i)              }
        }

    }
}
