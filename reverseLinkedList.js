/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    /**   let headHead = head
       
       if(head == null){
           return head 
       }
       let nextNode = null
       let currentNode = headHead
       let prevNode = null
       
       while (currentNode) {
           nextNode = currentNode.next
           currentNode.next = prevNode
           prevNode= currentNode
           currentNode= nextNode
           nextNode = null    
       }
   
       headHead =prevNode
       return headHead
       */
      
       if(head == null || head.next == null){
           return head
       }
       
       let temp = reverseList(head.next)
       head.next.next = head
       head.next = null
       return temp
       
   };