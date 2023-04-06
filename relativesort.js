/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    var output = new Array();
   var i
   var j
     for(let i=0;i<=arr2.length-1;i++){
        
         for(let j=0;j<=arr1.length-1;j++){
             
             if(arr1[j]===arr2[i]){
                 output.push(arr1[j]);
                 
                 arr1.splice(j,1);
                 j--;
                 
             }
         }
     }
     arr1.sort((a,b)=>a-b)
     return output.concat(arr1)
     
     
 };