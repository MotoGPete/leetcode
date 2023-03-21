/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let tobj = new Map()
     let sobj = new Map()
 
    for(letter of t){
        if(!tobj[letter]){
            tobj[letter]=1
        }else{
            tobj[letter]++
        }
    } 
    for(letter of s){
        if(!sobj[letter]){
            sobj[letter]=1
        }else{
            sobj[letter]++
        }
    }
 
    for(letter in tobj){
        if(tobj[letter] != sobj[letter])
        return letter
    } 
 };