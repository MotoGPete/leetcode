/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

 


 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root, ans = []) {
    /** exit condition, if there is no child left to become the root then we are done and we can return. dont need to add anything to the array  */
    if(root == null){
       return ans
   }
    /** add the value of each node(child) along the way*/
    ans.push(root.val)
    /** loop through each child of the root*/
    for(let child of root.children){
        /** heres the magic, each child becomes the new root and we take our ans with us adding each one */
        preorder(child, ans)
        
    }
   return ans
};