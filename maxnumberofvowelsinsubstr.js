/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    
    /** helper function for checking if a char is a vowel */   
    var isVowel = function(char){
        /**if(char.match(/^(a|e|i|o|u)$/)){ */
        if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
            return true
        }else{
            return false
        }
    }
    var max = 0
    var vcount = 0;
    var temp = new Array(); 
    
    /** loop through s for k length and set vowel count */

    for(let i=0;i<k;i++){
        temp.push(s[i])
       if(isVowel(s[i])){
           vcount++
           max++
       }   
    }

    for(let i=k;i<=s.length-1;i++){
        let shift = temp.shift()
        temp.push(s[i])
        
        if(isVowel(shift)) {
            
            vcount--
           
        }
        if(isVowel(s[i])) {
            vcount++
        } 
       
        if(vcount>max){
            max = vcount
        }

    }
    return max
};