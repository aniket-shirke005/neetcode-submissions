class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    // This solution uses frequency counter pattern and hashmaps
    groupAnagrams(strs: string[]): string[][] {
        const hashmap = {}
        for(let i=0;i<strs.length;i++){
            const count = new Array(26).fill(0)
            const word = strs[i]
            for(let j=0;j<word.length;j++){
                const index = word[j].charCodeAt(0) - 'a'.charCodeAt(0)
                            // = 120 - 97 = 23 
                count[index] = count[index]+1
            }
            const key = count.join(',')
            if(!hashmap[key]){
                hashmap[key] = [strs[i]]
            }else{
                hashmap[key].push(strs[i])
            }
        }
        return Object.values(hashmap)
    }
}
