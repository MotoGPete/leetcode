/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 @return {ListNode}
 */
 var mergeTwoLists = function (list1, list2) {
    /** make sure we have two lists, if not, return the list we have */
         if (!list1) {
            return list2;
        }
    
        if (!list2) {
            return list1;
        }
       
     /** start with the smaller value of the two lists 
        create a headnode to our new list we are going to build from the two
        temp is what we use to build nodes on and head will stay the same to keep a reference to the start of the list so we dont have to loop back to the start of the list at the end of this function
        */
        var temp = head = list1.val <= list2.val ? new ListNode(list1.val) : new ListNode(list2.val); 
      
        if(temp.val == list1.val ){
            list1=list1.next
        }else{
            list2 = list2.next
        }
        /**    another way to do the same thing as above here 
    
            if (list1.val < list2.val) {
            temp = head = new ListNode(list1.val);
            list1 = list1.next;
        } else {
            temp = head = new ListNode(list2.val);
            list2 = list2.next;
        }
        
         */
    
         /** move through the two lists adding the smaller val node onto temp */
        while(list1 && list2){
            if(list1.val < list2.val){
               temp.next = new ListNode(list1.val)
               list1 = list1.next
               temp = temp.next
            }else{
                temp.next = new ListNode(list2.val)
                list2 = list2.next
                temp = temp.next
            }
    
        }
    
        /** add remainder of l1 if any */
        while(list1){
            temp.next = new ListNode(list1.val)
            list1 = list1.next
            temp = temp.next
        }
    
        /** add remainder of l2 if any */
        while(list2){
            temp.next = new ListNode(list2.val)
            list2 = list2.next
            temp = temp.next
        }
        return head
    };