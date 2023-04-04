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
var middleNode = function(head) {
    
    let temp = head
    let count = 0;

    while(temp.next != null) {
        temp = temp.next
        count++
    }
    temp = head
    for(let i=0; i< count/2; i++){        
        temp = temp.next       
    }
    
    return temp
};