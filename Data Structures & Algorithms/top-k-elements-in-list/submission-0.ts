class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const hashmap:Record<number,number> ={}
        const topKNums= []
        for(let i=0;i<nums.length;i++){
            const currentNum = nums[i]
            if(!hashmap[currentNum]){
                hashmap[currentNum] = 1 
            }else{
                hashmap[currentNum]++
            }
        }

        const sortedValues = Object.entries(hashmap).sort(([, valueA],[, valueB])=> valueB - valueA)

        for(let i=0;i< k ;i++){
            topKNums.push(sortedValues[i][0])
        }

        return topKNums

    }
}
