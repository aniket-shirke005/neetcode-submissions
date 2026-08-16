class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const hashtable:Record<string, number> = {}

        //check if lengths are equal 
        if(s.length !== t.length) return false

        // store first string in hashtable with count
        for(let i=0;i<s.length;i++){
            if(hashtable.hasOwnProperty(s[i])){
                hashtable[s[i]] = hashtable[s[i]] + 1 
            }else{
                hashtable[s[i]] = 1
            } 
        }

        // iterate throgh second string to check if all words present in hashtable
        for(let j=0;j<t.length;j++){
            if(!hashtable.hasOwnProperty(t[j])){
                return false 
            }else{
                hashtable[t[j]] = hashtable[t[j]] -1
                if(hashtable[t[j]] < 0){
                    return false
                }
            }
        }

        return true

    }
}
