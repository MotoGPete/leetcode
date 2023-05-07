/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   
    var buyDate = 100000000000000000000000000
    var max = 0
    
 
    for(let i=0;i<prices.length;i++){
        let profit = prices[i] - buyDate
         if(prices[i]<buyDate){
            buyDate = prices[i]
         }
          if(profit>max){
            max = profit
        } 
        
        
    }
    
    return max
    
     
 };


 /**
 * @param {number[]} prices
 * @return {number}
 */
/** another solution using a while loop */


/** 
 var maxProfit = function(prices) {
    let runner = 1;
    let follower = 0;
    let high = 0
   

    while (runner < prices.length){
        
        let currentprofit = prices[runner] - prices[follower]
        if(prices[follower]<prices[runner]){
            
            let currentprofit = prices[runner] - prices[follower]
            high = Math.max(currentprofit, high)            
            
            }else{
                follower = runner
        }

        runner++
    }

    return high
    
};

*/