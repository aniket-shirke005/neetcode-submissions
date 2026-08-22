class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

        // group anagrams
        // how does our two sum technique helps here
        // so we ca

        const anagramHash = {}
        for(let i=0;i<strs.length;i++){
            let currentString:string = strs[i] 
            const key =  currentString.split('').sort().join('')
            if(anagramHash[key]){
                anagramHash[key].push(currentString)
            }else{
                anagramHash[key] = [currentString]
            }
        }

        const arr:string[][] = Object.values(anagramHash)

        return arr

    }
}
