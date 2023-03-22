/** 
* @param {string} s
* @param {string} t
* @return {boolean}
*/
var isIsomorphic = function(s, t) {
    
   let sobj = new Map()
   let tobj = new Map()
 
   for (let i = 0; i <= s.length; i++){
       if (!sobj[s[i]] && !tobj[t[i]]){
           sobj[s[i]] = t[i]
           console.log(sobj )
           tobj[t[i]] = s[i]
           console.log(tobj )
       }else{
           if(sobj[s[i]] !== t[i]){
               return false
           }
       }
   }

   return true
};