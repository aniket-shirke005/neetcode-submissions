class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // 1. count frequencies for these numbers using hashmap
        const frequencyMap = new Map()
        const result =  []

        for(let item of nums){
            frequencyMap.set(item, (frequencyMap.get(item) ?? 0) + 1)
        }

        // create n+1 length buckets to represent different frequencies we can have
        const frequencyBuckets = new Array(nums.length + 1).fill(0)

        // set those frequencies from hashmap to frequency buckets
        for(const [item,frequency] of frequencyMap){ 
            if(Array.isArray(frequencyBuckets[frequency])){
                frequencyBuckets[frequency].push(item)
            }else{
                frequencyBuckets[frequency] = [item]
            }
        }


        // loop frequency buckets array backwards to get k items 
        // check if bucket has more  than k items
        for(let i=frequencyBuckets.length; i>=1;i--){
            const bucket = frequencyBuckets[i]

            if(!Array.isArray(bucket)) continue
            for(let j = 0  ;  j< bucket.length;j++){
                if(result.length >= k){
                    return result
                }

                result.push(bucket[j])
            }
        }
        return result;
    }
}
