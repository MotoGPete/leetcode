/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
   let pointer = 0;

if(s.length==0){
    return true
}

   for(let i=0; i<=t.length-1;i++){
       if(t[i]==s[pointer])
       pointer++
       if (pointer==s.length){
           return true
       }
       
   }
   return false
   
};