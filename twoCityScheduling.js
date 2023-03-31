/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    
               
    costs.sort((a,b) => Math.abs(b[0]-b[1])-Math.abs(a[0]-a[1]));
  
   let sum = 0;
   let low
   let a =0
   let b=0
   let high
   for(let i=0;i<=costs.length-1;i++){
       high = Math.max(costs[i][0],costs[i][1])
       low = Math.min(costs[i][0],costs[i][1])
       if(low == costs[i][0] && a < (costs.length/2)){
           sum+=low
           a++
       }else if(low == costs[i][1] && b < (costs.length/2)){
           sum+=low
           b++
       }else if(low == costs[i][0] && a >= (costs.length/2)){
           sum+=high
                b++
       }else if(low == costs[i][1] && b >= (costs.length/2)){
           sum+=high
       a++
       }
   }
   return sum
};