class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const hashmap:Record<number,boolean> = {}
        for (let i=0;i<nums.length;i++){
            if(hashmap.hasOwnProperty(nums[i])){
                return true
            }else{
                hashmap[nums[i]] = true
            }
        }

        return false
    }
}
