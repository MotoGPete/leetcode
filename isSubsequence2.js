/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    var sindex = 0;

    for(let i=0; i<=t.length-1;i++){
        if(t[i] != s[sindex]){
        t = t.replace(t[i],"")
        i--
    }else if(s == t){
        return true
    }else if(s.length == t.length && s != t ){
        return false

    }else{
        sindex++
    }
    console.log(t)
    console.log(sindex)
    }
    return false
};
