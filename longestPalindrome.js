
/**409. Longest Palindrome
Easy
4.7K
293
Companies
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

  */



/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    /** create a set to store chars of s ensuring no duplicates. create a var length to help count up our length */
   var newset = new Set();
   var length = 0;

    /** loop through s and store unique chars in our set
        if the letter is found to already in the set then its a duplicate and we can add 2 to our length */
    for(i of s){
        console.log(newset)
        if(newset.has(i)){
            length += 2
            newset.delete(i)
        }else{
            newset.add(i)
        }
    }
    /** cant do prototype.length on a set. use .size to see if any leftover chars are in our set. if there are we can add 1 to the length since a palindrome may have 1 char in the center */
    if(newset.size>0){
        length++ 
    }

    return length

};