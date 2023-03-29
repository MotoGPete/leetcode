/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let obj = {};
    let string = s.split("");
    let output = new String();
    for(let i=0; i<=string.length-1; i++) {
        obj[indices[i]] = string[i];
        
    }
    for(i in obj){
        
        output += obj[i] 
    }
    return output
};