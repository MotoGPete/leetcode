/**
 * @param {number[]} prices
 * @return {number}
 */
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